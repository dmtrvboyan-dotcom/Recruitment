"use client";
// app/admin/page.tsx

import { useEffect, useState } from "react";

interface Draft {
  slug: string;
  title: string;
  description: string;
  keyword: string;
  themeId: string;
  themeLabel: string;
  tab: string;
  category: string;
  content: string;
  generatedAt: string;
}

const THEME_COLORS: Record<string, string> = {
  "ats-software":   "bg-blue-100 text-blue-700",
  "for-companies":  "bg-violet-100 text-violet-700",
  "for-candidates": "bg-emerald-100 text-emerald-700",
  "it-news":        "bg-amber-100 text-amber-700",
};

export default function AdminPage() {
  const [drafts, setDrafts] = useState<Draft[]>([]);
  const [loading, setLoading] = useState(true);
  const [preview, setPreview] = useState<Draft | null>(null);
  const [actionState, setActionState] = useState<Record<string, "publishing" | "deleting">>({});
  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" } | null>(null);

  useEffect(() => { fetchDrafts(); }, []);

  async function fetchDrafts() {
    setLoading(true);
    const res = await fetch("/api/admin/drafts");
    const data = await res.json();
    setDrafts(data.drafts ?? []);
    setLoading(false);
  }

  function showToast(msg: string, type: "success" | "error") {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 4000);
  }

  async function publish(slug: string) {
    setActionState((s) => ({ ...s, [slug]: "publishing" }));
    const res = await fetch("/api/admin/publish", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug }),
    });
    if (res.ok) {
      showToast("Published! Vercel is deploying…", "success");
      setDrafts((d) => d.filter((p) => p.slug !== slug));
      if (preview?.slug === slug) setPreview(null);
    } else {
      showToast("Publish failed. Check GitHub env vars.", "error");
    }
    setActionState((s) => { const n = { ...s }; delete n[slug]; return n; });
  }

  async function deleteDraft(slug: string) {
    if (!confirm("Delete this draft? This cannot be undone.")) return;
    setActionState((s) => ({ ...s, [slug]: "deleting" }));
    await fetch("/api/admin/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug }),
    });
    setDrafts((d) => d.filter((p) => p.slug !== slug));
    if (preview?.slug === slug) setPreview(null);
    showToast("Draft deleted.", "success");
    setActionState((s) => { const n = { ...s }; delete n[slug]; return n; });
  }

  async function triggerGeneration() {
    const secret = prompt("Enter CRON_SECRET:");
    if (!secret) return;
    const res = await fetch("/api/cron/generate-blog", {
      headers: { Authorization: `Bearer ${secret}` },
    });
    if (res.ok) {
      const data = await res.json();
      showToast(`Generated: "${data.title}" (${data.theme})`, "success");
      fetchDrafts();
    } else {
      showToast("Generation failed — check server logs.", "error");
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {toast && (
        <div className={`fixed top-4 right-4 z-50 max-w-sm px-4 py-3 rounded-xl shadow-lg text-sm font-medium ${
          toast.type === "success" ? "bg-emerald-600 text-white" : "bg-red-600 text-white"
        }`}>
          {toast.msg}
        </div>
      )}

      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">Blog Admin</h1>
          <p className="text-sm text-gray-500">
            {drafts.length} draft{drafts.length !== 1 ? "s" : ""} awaiting review
          </p>
        </div>
        <button
          onClick={triggerGeneration}
          className="text-sm bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
        >
          + Generate Now
        </button>
      </header>

      <div className="flex h-[calc(100vh-73px)]">
        <aside className="w-96 shrink-0 border-r border-gray-200 bg-white overflow-y-auto">
          {loading ? (
            <div className="p-8 text-center text-gray-400 text-sm">Loading drafts…</div>
          ) : drafts.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-gray-400 text-sm">No drafts yet.</p>
              <p className="text-gray-300 text-xs mt-1">Cron runs Mon + Thu at 9am UTC.</p>
            </div>
          ) : (
            <ul className="divide-y divide-gray-100">
              {drafts.map((draft) => {
                const isActive = preview?.slug === draft.slug;
                const state = actionState[draft.slug];
                return (
                  <li
                    key={draft.slug}
                    onClick={() => setPreview(draft)}
                    className={`p-4 cursor-pointer transition ${isActive ? "bg-gray-50" : "hover:bg-gray-50"}`}
                  >
                    <div className="flex gap-2 mb-2">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${THEME_COLORS[draft.themeId] ?? "bg-gray-100 text-gray-600"}`}>
                        {draft.themeLabel}
                      </span>
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">
                        {draft.category}
                      </span>
                    </div>

                    <p className="text-sm font-medium text-gray-900 leading-snug line-clamp-2">
                      {draft.title}
                    </p>
                    <p className="text-xs text-gray-400 mt-1 line-clamp-2">{draft.description}</p>
                    <p className="text-xs text-gray-400 mt-1">🔑 {draft.keyword}</p>
                    <p className="text-xs text-gray-300 mt-1">
                      {new Date(draft.generatedAt).toLocaleDateString("en-GB", {
                        day: "numeric", month: "short", year: "numeric",
                        hour: "2-digit", minute: "2-digit",
                      })}
                    </p>

                    <div className="flex gap-2 mt-3" onClick={(e) => e.stopPropagation()}>
                      <button
                        onClick={() => publish(draft.slug)}
                        disabled={!!state}
                        className="flex-1 text-xs bg-emerald-600 text-white py-1.5 rounded-lg hover:bg-emerald-700 transition disabled:opacity-50"
                      >
                        {state === "publishing" ? "Publishing…" : "✓ Publish"}
                      </button>
                      <button
                        onClick={() => deleteDraft(draft.slug)}
                        disabled={!!state}
                        className="text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded-lg hover:bg-red-50 hover:text-red-600 transition disabled:opacity-50"
                      >
                        {state === "deleting" ? "…" : "✕"}
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </aside>

        <main className="flex-1 overflow-y-auto">
          {preview ? (
            <div className="max-w-3xl mx-auto p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex gap-2 mb-2">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${THEME_COLORS[preview.themeId] ?? "bg-gray-100 text-gray-600"}`}>
                      {preview.themeLabel}
                    </span>
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">
                      {preview.category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{preview.title}</h2>
                  <p className="text-sm text-gray-500 mt-1">{preview.description}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    🔑 {preview.keyword}
                    {" · "}tab: <code className="bg-gray-100 px-1 rounded">{preview.tab}</code>
                    {" · "}slug: <code className="bg-gray-100 px-1 rounded">{preview.slug}</code>
                  </p>
                </div>
                <div className="flex gap-2 shrink-0 ml-4">
                  <button
                    onClick={() => publish(preview.slug)}
                    disabled={!!actionState[preview.slug]}
                    className="text-sm bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition disabled:opacity-50"
                  >
                    {actionState[preview.slug] === "publishing" ? "Publishing…" : "✓ Publish"}
                  </button>
                  <button
                    onClick={() => deleteDraft(preview.slug)}
                    className="text-sm bg-gray-100 text-gray-600 px-4 py-2 rounded-lg hover:bg-red-50 hover:text-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>

              <pre className="bg-gray-900 text-gray-100 text-xs p-6 rounded-2xl overflow-x-auto whitespace-pre-wrap leading-relaxed">
                {preview.content}
              </pre>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-300 text-sm">
              ← Select a draft to preview it
            </div>
          )}
        </main>
      </div>
    </div>
  );
}