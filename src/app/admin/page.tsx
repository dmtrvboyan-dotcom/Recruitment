"use client";

import { useEffect, useState, useRef } from "react";

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

interface PublishedPost {
  slug: string;
  filename: string;
}

const THEME_COLORS: Record<string, string> = {
  "ats-software": "bg-blue-100 text-blue-700",
  "for-companies": "bg-violet-100 text-violet-700",
  "for-candidates": "bg-emerald-100 text-emerald-700",
  "it-news": "bg-amber-100 text-amber-700",
};

const TAB_OPTIONS = [
  { value: "ats", label: "ATS Software" },
  { value: "companies", label: "For Companies" },
  { value: "candidates", label: "For Candidates" },
  { value: "it", label: "IT News" },
];

// ── Image uploader (unchanged) ──────────────────────────────
function ImageUploader({ onUploaded }: { onUploaded: (url: string) => void }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [lastUrl, setLastUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleFile(file: File) {
    setUploading(true);
    setError(null);
    const form = new FormData();
    form.append("image", file);

    const res = await fetch("/api/admin/upload-image", { method: "POST", body: form });

    if (!res.ok) {
      const data = await res.json();
      setError(data.error ?? "Upload failed");
      setUploading(false);
      return;
    }

    const { url } = await res.json();
    setLastUrl(url);
    setUploading(false);
    onUploaded(url);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
    e.target.value = "";
  }

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg hover:bg-gray-200 transition disabled:opacity-50 flex items-center gap-1.5"
        >
          {uploading ? (
            <>
              <span className="w-3 h-3 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
              Uploading…
            </>
          ) : (
            "Upload image"
          )}
        </button>
        {lastUrl && <span className="text-[10px] text-emerald-600 font-medium">✓ Uploaded</span>}
      </div>
      {error && <p className="text-[10px] text-red-500">{error}</p>}
      <p className="text-[10px] text-gray-400">
        URL copied to clipboard. Paste into frontmatter as <code className="bg-gray-100 px-1 rounded">image: &quot;URL&quot;</code> or in the body as <code className="bg-gray-100 px-1 rounded">![alt](URL)</code>.
      </p>
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif"
        onChange={handleChange}
        className="hidden"
      />
    </div>
  );
}

// ── Metadata editor panel ────────────────────────────────────
interface MetadataState {
  title: string;
  description: string;
  category: string;
  tab: string;
  keyword: string;
  slug: string;
}

function MetadataEditor({
  initial,
  slugLocked,
  onSave,
  saving,
}: {
  initial: MetadataState;
  slugLocked: boolean;
  onSave: (updated: MetadataState) => void;
  saving: boolean;
}) {
  const [form, setForm] = useState<MetadataState>(initial);
  const [dirty, setDirty] = useState(false);

  // Sync when initial changes (when switching between drafts/posts)
  useEffect(() => {
    setForm(initial);
    setDirty(false);
  }, [initial]);

  function update<K extends keyof MetadataState>(field: K, value: MetadataState[K]) {
    setForm((f) => ({ ...f, [field]: value }));
    setDirty(true);
  }

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-900">Post details</h3>
        {dirty && (
          <button
            onClick={() => onSave(form)}
            disabled={saving}
            className="text-xs bg-blue-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          >
            {saving ? "Saving…" : "Save details"}
          </button>
        )}
      </div>

      {/* Title */}
      <div>
        <label className="text-xs font-medium text-gray-600 mb-1 block">Title</label>
        <input
          type="text"
          value={form.title}
          onChange={(e) => update("title", e.target.value)}
          className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Description */}
      <div>
        <label className="text-xs font-medium text-gray-600 mb-1 block">Description</label>
        <textarea
          value={form.description}
          onChange={(e) => update("description", e.target.value)}
          rows={2}
          className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        />
      </div>

      {/* Tab + Category */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-medium text-gray-600 mb-1 block">Tab</label>
          <select
            value={form.tab}
            onChange={(e) => update("tab", e.target.value)}
            className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            {TAB_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-xs font-medium text-gray-600 mb-1 block">Category</label>
          <input
            type="text"
            value={form.category}
            onChange={(e) => update("category", e.target.value)}
            placeholder="e.g. HR Trends"
            className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Keyword */}
      <div>
        <label className="text-xs font-medium text-gray-600 mb-1 block">Keyword</label>
        <input
          type="text"
          value={form.keyword}
          onChange={(e) => update("keyword", e.target.value)}
          className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Slug */}
      <div>
        <label className="text-xs font-medium text-gray-600 mb-1 flex items-center gap-2">
          Slug (URL)
          {slugLocked && (
            <span className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded-full">
              🔒 Locked after publishing
            </span>
          )}
        </label>
        <input
          type="text"
          value={form.slug}
          onChange={(e) => update("slug", e.target.value)}
          disabled={slugLocked}
          className={`w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            slugLocked ? "bg-gray-50 text-gray-400 border-gray-200 cursor-not-allowed" : "border-gray-200"
          }`}
        />
        <p className="text-[10px] text-gray-400 mt-1">
          {slugLocked
            ? "URL is fixed for SEO. To change it, delete and republish."
            : "Used in the URL. Lowercase, dashes, no spaces."}
        </p>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────

export default function AdminPage() {
  const [tab, setTab] = useState<"drafts" | "published">("drafts");
  const [drafts, setDrafts] = useState<Draft[]>([]);
  const [published, setPublished] = useState<PublishedPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [preview, setPreview] = useState<Draft | null>(null);
  const [actionState, setActionState] = useState<Record<string, string>>({});
  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" } | null>(null);

  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState("");
  const [saving, setSaving] = useState(false);
  const [savingMeta, setSavingMeta] = useState(false);

  const [selectedPost, setSelectedPost] = useState<PublishedPost | null>(null);
  const [postContent, setPostContent] = useState("");
  const [postSha, setPostSha] = useState("");
  const [postMetadata, setPostMetadata] = useState<MetadataState | null>(null);
  const [isEditingPost, setIsEditingPost] = useState(false);
  const [editPostContent, setEditPostContent] = useState("");
  const [loadingPost, setLoadingPost] = useState(false);
  const [savingPost, setSavingPost] = useState(false);
  const [savingPostMeta, setSavingPostMeta] = useState(false);

  useEffect(() => {
    if (tab === "drafts") fetchDrafts();
    else fetchPublished();
  }, [tab]);

  async function fetchDrafts() {
    setLoading(true);
    const res = await fetch("/api/admin/drafts");
    const data = await res.json();
    setDrafts(data.drafts ?? []);
    setLoading(false);
  }

  async function fetchPublished() {
    setLoading(true);
    const res = await fetch("/api/admin/published");
    const data = await res.json();
    setPublished(data.posts ?? []);
    setLoading(false);
  }

  function showToast(msg: string, type: "success" | "error") {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 4000);
  }

  function handleImageUploaded(url: string) {
    showToast("Image uploaded! URL copied to clipboard.", "success");
    navigator.clipboard.writeText(url).catch(() => {});
  }

  // ── Draft actions ──
  async function saveDraftMetadata(updated: MetadataState) {
    if (!preview) return;
    setSavingMeta(true);
    const res = await fetch("/api/admin/update-draft", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug: preview.slug, metadata: updated }),
    });
    if (res.ok) {
      const data = await res.json();
      const newSlug = data.newSlug ?? preview.slug;
      // Update local state
      setDrafts((d) =>
        d.map((dr) =>
          dr.slug === preview.slug
            ? { ...dr, ...updated, slug: newSlug }
            : dr
        )
      );
      setPreview((p) => p ? { ...p, ...updated, slug: newSlug } : null);
      showToast("Details saved.", "success");
    } else {
      showToast("Save failed.", "error");
    }
    setSavingMeta(false);
  }

  async function saveEdit(slug: string) {
    setSaving(true);
    const res = await fetch("/api/admin/update-draft", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug, content: editContent }),
    });
    if (res.ok) {
      setPreview((p) => p ? { ...p, content: editContent } : null);
      setDrafts((d) =>
        d.map((draft) =>
          draft.slug === slug ? { ...draft, content: editContent } : draft
        )
      );
      setIsEditing(false);
      showToast("Content saved.", "success");
    } else {
      showToast("Save failed.", "error");
    }
    setSaving(false);
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
      showToast("Publish failed.", "error");
    }
    setActionState((s) => { const n = { ...s }; delete n[slug]; return n; });
  }

  async function deleteDraft(slug: string) {
    if (!confirm("Delete this draft?")) return;
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

  // ── Published post actions ──
  async function selectPublishedPost(post: PublishedPost) {
    setSelectedPost(post);
    setIsEditingPost(false);
    setPostContent("");
    setPostMetadata(null);
    setLoadingPost(true);
    const res = await fetch(`/api/admin/get-post?slug=${post.slug}`);
    if (res.ok) {
      const data = await res.json();
      setPostContent(data.content);
      setPostSha(data.sha);
      // Parse frontmatter for metadata editor
      const fm = parseFrontmatterFromContent(data.content);
      setPostMetadata({
        title: fm.title ?? "",
        description: fm.description ?? "",
        category: fm.category ?? "",
        tab: fm.tab ?? "",
        keyword: fm.keyword ?? "",
        slug: post.slug,
      });
    } else {
      showToast("Failed to load post.", "error");
    }
    setLoadingPost(false);
  }

  async function savePublishedMetadata(updated: MetadataState) {
    if (!selectedPost) return;
    setSavingPostMeta(true);
    const res = await fetch("/api/admin/update-post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        slug: selectedPost.slug,
        sha: postSha,
        metadata: {
          title: updated.title,
          description: updated.description,
          category: updated.category,
          tab: updated.tab,
          keyword: updated.keyword,
        },
      }),
    });
    if (res.ok) {
      showToast("Details saved! Vercel is deploying…", "success");
      setPostMetadata(updated);
      // Refetch to get updated SHA
      const refetch = await fetch(`/api/admin/get-post?slug=${selectedPost.slug}`);
      if (refetch.ok) {
        const data = await refetch.json();
        setPostContent(data.content);
        setPostSha(data.sha);
      }
    } else {
      showToast("Save failed.", "error");
    }
    setSavingPostMeta(false);
  }

  async function savePublishedEdit() {
    if (!selectedPost) return;
    setSavingPost(true);
    const res = await fetch("/api/admin/update-post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        slug: selectedPost.slug,
        content: editPostContent,
        sha: postSha,
      }),
    });
    if (res.ok) {
      setPostContent(editPostContent);
      setIsEditingPost(false);
      showToast("Content updated! Vercel is deploying…", "success");
      // Refetch SHA
      const refetch = await fetch(`/api/admin/get-post?slug=${selectedPost.slug}`);
      if (refetch.ok) {
        const data = await refetch.json();
        setPostSha(data.sha);
      }
    } else {
      showToast("Update failed.", "error");
    }
    setSavingPost(false);
  }

  async function deletePublished(slug: string) {
    if (!confirm(`Delete "${slug}" permanently?`)) return;
    setActionState((s) => ({ ...s, [slug]: "deleting" }));
    const res = await fetch("/api/admin/delete-post", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug }),
    });
    if (res.ok) {
      showToast("Post deleted.", "success");
      setPublished((p) => p.filter((post) => post.slug !== slug));
      if (selectedPost?.slug === slug) setSelectedPost(null);
    } else {
      showToast("Delete failed.", "error");
    }
    setActionState((s) => { const n = { ...s }; delete n[slug]; return n; });
  }

  async function triggerGeneration() {
    const res = await fetch("/api/admin/trigger", { method: "POST" });
    if (res.ok) {
      const data = await res.json();
      showToast(`Generated: "${data.title}"`, "success");
      if (tab === "drafts") fetchDrafts();
      else setTab("drafts");
    } else {
      showToast("Generation failed.", "error");
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.href = "/admin/login";
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
          <div className="flex gap-4 mt-2">
            <button
              onClick={() => { setTab("drafts"); setPreview(null); }}
              className={`text-sm font-medium pb-0.5 border-b-2 transition-colors ${
                tab === "drafts" ? "border-gray-900 text-gray-900" : "border-transparent text-gray-400 hover:text-gray-600"
              }`}
            >
              Drafts{drafts.length > 0 && (
                <span className="ml-1 text-xs bg-gray-900 text-white px-1.5 py-0.5 rounded-full">{drafts.length}</span>
              )}
            </button>
            <button
              onClick={() => { setTab("published"); setPreview(null); }}
              className={`text-sm font-medium pb-0.5 border-b-2 transition-colors ${
                tab === "published" ? "border-gray-900 text-gray-900" : "border-transparent text-gray-400 hover:text-gray-600"
              }`}
            >
              Published
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button onClick={triggerGeneration} className="text-sm bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition">
            + Generate Now
          </button>
          <button onClick={handleLogout} className="text-sm text-gray-400 hover:text-red-500 transition px-3 py-2 rounded-lg hover:bg-red-50">
            Log out
          </button>
        </div>
      </header>

      <div className="flex h-[calc(100vh-85px)]">
        {/* Sidebar */}
        <aside className="w-96 shrink-0 border-r border-gray-200 bg-white overflow-y-auto">
          {loading ? (
            <div className="p-8 text-center text-gray-400 text-sm">Loading…</div>
          ) : tab === "drafts" ? (
            drafts.length === 0 ? (
              <div className="p-8 text-center">
                <p className="text-gray-400 text-sm">No drafts yet.</p>
              </div>
            ) : (
              <ul className="divide-y divide-gray-100">
                {drafts.map((draft) => {
                  const isActive = preview?.slug === draft.slug;
                  const state = actionState[draft.slug];
                  return (
                    <li key={draft.slug} onClick={() => { setPreview(draft); setIsEditing(false); }}
                      className={`p-4 cursor-pointer transition ${isActive ? "bg-gray-50" : "hover:bg-gray-50"}`}>
                      <div className="flex gap-2 mb-2">
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${THEME_COLORS[draft.themeId] ?? "bg-gray-100 text-gray-600"}`}>
                          {draft.themeLabel}
                        </span>
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">{draft.category}</span>
                      </div>
                      <p className="text-sm font-medium text-gray-900 leading-snug line-clamp-2">{draft.title}</p>
                      <p className="text-xs text-gray-400 mt-1 line-clamp-2">{draft.description}</p>
                      <div className="flex gap-2 mt-3" onClick={(e) => e.stopPropagation()}>
                        <button onClick={() => publish(draft.slug)} disabled={!!state}
                          className="flex-1 text-xs bg-emerald-600 text-white py-1.5 rounded-lg hover:bg-emerald-700 transition disabled:opacity-50">
                          {state === "publishing" ? "Publishing…" : "✓ Publish"}
                        </button>
                        <button onClick={() => deleteDraft(draft.slug)} disabled={!!state}
                          className="text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded-lg hover:bg-red-50 hover:text-red-600 transition disabled:opacity-50">
                          {state === "deleting" ? "…" : "✕"}
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )
          ) : (
            published.length === 0 ? (
              <div className="p-8 text-center text-gray-400 text-sm">No published posts.</div>
            ) : (
              <ul className="divide-y divide-gray-100">
                {published.map((post) => {
                  const state = actionState[post.slug];
                  const isSelected = selectedPost?.slug === post.slug;
                  return (
                    <li key={post.slug} onClick={() => selectPublishedPost(post)}
                      className={`p-4 cursor-pointer transition flex items-center justify-between gap-3 ${isSelected ? "bg-gray-50" : "hover:bg-gray-50"}`}>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{post.slug}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{post.filename}</p>
                      </div>
                      <button onClick={(e) => { e.stopPropagation(); deletePublished(post.slug); }} disabled={!!state}
                        className="shrink-0 text-xs bg-red-50 text-red-600 px-3 py-1.5 rounded-lg hover:bg-red-100 transition disabled:opacity-50">
                        {state === "deleting" ? "Deleting…" : "Delete"}
                      </button>
                    </li>
                  );
                })}
              </ul>
            )
          )}
        </aside>

        {/* Main pane */}
        <main className="flex-1 overflow-y-auto">
          {tab === "drafts" && preview ? (
            <div className="max-w-3xl mx-auto p-8 space-y-5">
              {/* ── Metadata editor ── */}
              <MetadataEditor
                initial={{
                  title: preview.title,
                  description: preview.description,
                  category: preview.category,
                  tab: preview.tab,
                  keyword: preview.keyword,
                  slug: preview.slug,
                }}
                slugLocked={false}
                onSave={saveDraftMetadata}
                saving={savingMeta}
              />

              {/* ── Action bar ── */}
              <div className="flex items-center justify-between bg-white border border-gray-200 rounded-2xl p-4">
                <p className="text-xs text-gray-500">Content (markdown body)</p>
                <div className="flex gap-2">
                  {isEditing ? (
                    <>
                      <button onClick={() => saveEdit(preview.slug)} disabled={saving}
                        className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50">
                        {saving ? "Saving…" : "Save content"}
                      </button>
                      <button onClick={() => { setIsEditing(false); setEditContent(""); }} disabled={saving}
                        className="text-sm bg-gray-100 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-200 transition">
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => { setIsEditing(true); setEditContent(preview.content); }}
                        className="text-sm bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition">
                        ✎ Edit content
                      </button>
                      <button onClick={() => publish(preview.slug)} disabled={!!actionState[preview.slug]}
                        className="text-sm bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition disabled:opacity-50">
                        {actionState[preview.slug] === "publishing" ? "Publishing…" : "✓ Publish"}
                      </button>
                      <button onClick={() => deleteDraft(preview.slug)}
                        className="text-sm bg-gray-100 text-gray-600 px-4 py-2 rounded-lg hover:bg-red-50 hover:text-red-600 transition">
                        Delete
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* ── Content editor or preview ── */}
              {isEditing ? (
                <div className="flex flex-col gap-3">
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                    <p className="text-xs font-medium text-gray-700 mb-2">Images</p>
                    <ImageUploader onUploaded={handleImageUploaded} />
                  </div>
                  <textarea
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                    className="w-full h-[55vh] bg-gray-900 text-gray-100 text-xs p-6 rounded-2xl font-mono leading-relaxed resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    spellCheck={false}
                  />
                </div>
              ) : (
                <pre className="bg-gray-900 text-gray-100 text-xs p-6 rounded-2xl overflow-x-auto whitespace-pre-wrap leading-relaxed">
                  {preview.content}
                </pre>
              )}
            </div>
          ) : tab === "published" && selectedPost && postMetadata ? (
            <div className="max-w-3xl mx-auto p-8 space-y-5">
              {/* ── Metadata editor ── */}
              <MetadataEditor
                initial={postMetadata}
                slugLocked={true}
                onSave={savePublishedMetadata}
                saving={savingPostMeta}
              />

              {/* ── Action bar ── */}
              <div className="flex items-center justify-between bg-white border border-gray-200 rounded-2xl p-4">
                <p className="text-xs text-gray-500">Content (markdown body)</p>
                <div className="flex gap-2">
                  {isEditingPost ? (
                    <>
                      <button onClick={savePublishedEdit} disabled={savingPost}
                        className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50">
                        {savingPost ? "Saving…" : "Save content"}
                      </button>
                      <button onClick={() => { setIsEditingPost(false); setEditPostContent(""); }} disabled={savingPost}
                        className="text-sm bg-gray-100 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-200 transition">
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => { setIsEditingPost(true); setEditPostContent(postContent); }} disabled={loadingPost}
                        className="text-sm bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition disabled:opacity-50">
                        ✎ Edit content
                      </button>
                      <button onClick={() => deletePublished(selectedPost.slug)} disabled={!!actionState[selectedPost.slug]}
                        className="text-sm bg-red-50 text-red-600 px-4 py-2 rounded-lg hover:bg-red-100 transition disabled:opacity-50">
                        {actionState[selectedPost.slug] === "deleting" ? "Deleting…" : "Delete"}
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* ── Content editor or preview ── */}
              {loadingPost ? (
                <div className="text-sm text-gray-400 text-center py-20">Loading post…</div>
              ) : isEditingPost ? (
                <div className="flex flex-col gap-3">
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                    <p className="text-xs font-medium text-gray-700 mb-2">Images</p>
                    <ImageUploader onUploaded={handleImageUploaded} />
                  </div>
                  <textarea
                    value={editPostContent}
                    onChange={(e) => setEditPostContent(e.target.value)}
                    className="w-full h-[55vh] bg-gray-900 text-gray-100 text-xs p-6 rounded-2xl font-mono leading-relaxed resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    spellCheck={false}
                  />
                </div>
              ) : (
                <pre className="bg-gray-900 text-gray-100 text-xs p-6 rounded-2xl overflow-x-auto whitespace-pre-wrap leading-relaxed">
                  {postContent}
                </pre>
              )}
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-300 text-sm">
              {tab === "drafts" ? "← Select a draft" : "← Select a post"}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

// ── Small client-side frontmatter parser (mirrors server logic) ──
function parseFrontmatterFromContent(markdown: string): Record<string, string> {
  const match = markdown.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!match) return {};
  const fm: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const m = line.match(/^([a-zA-Z_]+):\s*(.+)$/);
    if (!m) continue;
    fm[m[1]] = m[2].trim().replace(/^["']|["']$/g, "");
  }
  return fm;
}