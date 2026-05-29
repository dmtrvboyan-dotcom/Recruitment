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

// ── Small image uploader component ──────────────────────────
function ImageUploader({ onInsert }: { onInsert: (markdown: string) => void }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [lastUrl, setLastUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleFile(file: File) {
    setUploading(true);
    setError(null);
    const form = new FormData();
    form.append("image", file);

    const res = await fetch("/api/admin/upload-image", {
      method: "POST",
      body: form,
    });

    if (!res.ok) {
      const data = await res.json();
      setError(data.error ?? "Upload failed");
      setUploading(false);
      return;
    }

    const { url } = await res.json();
    setLastUrl(url);
    setUploading(false);
    // Return the URL so the caller can decide how to use it
    onInsert(url);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
    // reset input so same file can be re-selected
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

        {lastUrl && (
          <span className="text-[10px] text-emerald-600 font-medium truncate max-w-[180px]">
            ✓ Uploaded
          </span>
        )}
      </div>

      {error && <p className="text-[10px] text-red-500">{error}</p>}

      <p className="text-[10px] text-gray-400">
        To set as thumbnail: paste the URL into the frontmatter as{" "}
        <code className="bg-gray-100 px-1 rounded">image: &quot;URL&quot;</code>.
        To insert inline: paste the URL into the body as{" "}
        <code className="bg-gray-100 px-1 rounded">![alt text](URL)</code>.
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

  const [selectedPost, setSelectedPost] = useState<PublishedPost | null>(null);
  const [postContent, setPostContent] = useState("");
  const [postSha, setPostSha] = useState("");
  const [isEditingPost, setIsEditingPost] = useState(false);
  const [editPostContent, setEditPostContent] = useState("");
  const [loadingPost, setLoadingPost] = useState(false);
  const [savingPost, setSavingPost] = useState(false);

  // Ref to the draft textarea so we can insert at cursor
  const draftTextareaRef = useRef<HTMLTextAreaElement>(null);
  const publishedTextareaRef = useRef<HTMLTextAreaElement>(null);

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

  // Insert text at current cursor position in a textarea
  function insertAtCursor(textarea: HTMLTextAreaElement | null, text: string, setter: (v: string) => void) {
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const current = textarea.value;
    const updated = current.slice(0, start) + text + current.slice(end);
    setter(updated);
    // Restore cursor after the inserted text
    requestAnimationFrame(() => {
      textarea.selectionStart = textarea.selectionEnd = start + text.length;
      textarea.focus();
    });
  }

  // Called when an image is uploaded while editing a draft
  function handleDraftImageUpload(url: string) {
    showToast("Image uploaded! URL copied — paste it where needed.", "success");
    navigator.clipboard.writeText(url).catch(() => {});
  }

  // Called when an image is uploaded while editing a published post
  function handlePublishedImageUpload(url: string) {
    showToast("Image uploaded! URL copied — paste it where needed.", "success");
    navigator.clipboard.writeText(url).catch(() => {});
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

  async function deletePublished(slug: string) {
    if (!confirm(`Delete "${slug}" permanently? This removes it from GitHub and the live site.`)) return;
    setActionState((s) => ({ ...s, [slug]: "deleting" }));
    const res = await fetch("/api/admin/delete-post", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug }),
    });
    if (res.ok) {
      showToast("Post deleted. Vercel is deploying…", "success");
      setPublished((p) => p.filter((post) => post.slug !== slug));
      if (selectedPost?.slug === slug) setSelectedPost(null);
    } else {
      showToast("Delete failed. Check GitHub env vars.", "error");
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
      showToast("Generation failed — check server logs.", "error");
    }
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
      showToast("Changes saved.", "success");
    } else {
      showToast("Save failed.", "error");
    }
    setSaving(false);
  }

  async function selectPublishedPost(post: PublishedPost) {
    setSelectedPost(post);
    setIsEditingPost(false);
    setPostContent("");
    setLoadingPost(true);
    const res = await fetch(`/api/admin/get-post?slug=${post.slug}`);
    if (res.ok) {
      const data = await res.json();
      setPostContent(data.content);
      setPostSha(data.sha);
    } else {
      showToast("Failed to load post content.", "error");
    }
    setLoadingPost(false);
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
      showToast("Post updated! Vercel is deploying…", "success");
    } else {
      showToast("Update failed.", "error");
    }
    setSavingPost(false);
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
                tab === "drafts"
                  ? "border-gray-900 text-gray-900"
                  : "border-transparent text-gray-400 hover:text-gray-600"
              }`}
            >
              Drafts{drafts.length > 0 && (
                <span className="ml-1 text-xs bg-gray-900 text-white px-1.5 py-0.5 rounded-full">
                  {drafts.length}
                </span>
              )}
            </button>
            <button
              onClick={() => { setTab("published"); setPreview(null); }}
              className={`text-sm font-medium pb-0.5 border-b-2 transition-colors ${
                tab === "published"
                  ? "border-gray-900 text-gray-900"
                  : "border-transparent text-gray-400 hover:text-gray-600"
              }`}
            >
              Published
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={triggerGeneration}
            className="text-sm bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            + Generate Now
          </button>
          <button
            onClick={handleLogout}
            className="text-sm text-gray-400 hover:text-red-500 transition px-3 py-2 rounded-lg hover:bg-red-50"
          >
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
                <p className="text-gray-300 text-xs mt-1">Cron runs Mon + Thu at 9am UTC.</p>
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
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">
                          {draft.category}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-gray-900 leading-snug line-clamp-2">{draft.title}</p>
                      <p className="text-xs text-gray-400 mt-1 line-clamp-2">{draft.description}</p>
                      <p className="text-xs text-gray-400 mt-1">🔑 {draft.keyword}</p>
                      <p className="text-xs text-gray-300 mt-1">
                        {new Date(draft.generatedAt).toLocaleDateString("en-GB", {
                          day: "numeric", month: "short", year: "numeric",
                          hour: "2-digit", minute: "2-digit",
                        })}
                      </p>
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
              <div className="p-8 text-center text-gray-400 text-sm">No published posts found.</div>
            ) : (
              <ul className="divide-y divide-gray-100">
                {published.map((post) => {
                  const state = actionState[post.slug];
                  const isSelected = selectedPost?.slug === post.slug;
                  return (
                    <li
                      key={post.slug}
                      onClick={() => selectPublishedPost(post)}
                      className={`p-4 cursor-pointer transition flex items-center justify-between gap-3 ${
                        isSelected ? "bg-gray-50" : "hover:bg-gray-50"
                      }`}
                    >
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{post.slug}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{post.filename}</p>
                      </div>
                      <button
                        onClick={(e) => { e.stopPropagation(); deletePublished(post.slug); }}
                        disabled={!!state}
                        className="shrink-0 text-xs bg-red-50 text-red-600 px-3 py-1.5 rounded-lg hover:bg-red-100 transition disabled:opacity-50"
                      >
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
                    🔑 {preview.keyword} · tab:{" "}
                    <code className="bg-gray-100 px-1 rounded">{preview.tab}</code>
                    {" · "}slug:{" "}
                    <code className="bg-gray-100 px-1 rounded">{preview.slug}</code>
                  </p>
                </div>
                <div className="flex gap-2 shrink-0 ml-4">
                  {isEditing ? (
                    <>
                      <button onClick={() => saveEdit(preview.slug)} disabled={saving}
                        className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50">
                        {saving ? "Saving…" : "Save"}
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
                        ✎ Edit
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

              {isEditing ? (
                <div className="flex flex-col gap-3">
                  {/* ── Image uploader for drafts ── */}
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                    <p className="text-xs font-medium text-gray-700 mb-2">Images</p>
                    <ImageUploader onInsert={handleDraftImageUpload} />
                  </div>

                  <p className="text-xs text-gray-400">Editing raw markdown — frontmatter at the top, post body below.</p>
                  <textarea
                    ref={draftTextareaRef}
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                    className="w-full h-[60vh] bg-gray-900 text-gray-100 text-xs p-6 rounded-2xl font-mono leading-relaxed resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    spellCheck={false}
                  />
                </div>
              ) : (
                <pre className="bg-gray-900 text-gray-100 text-xs p-6 rounded-2xl overflow-x-auto whitespace-pre-wrap leading-relaxed">
                  {preview.content}
                </pre>
              )}
            </div>
          ) : tab === "published" && selectedPost ? (
            <div className="max-w-3xl mx-auto p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedPost.slug}</h2>
                  <p className="text-xs text-gray-400 mt-1">{selectedPost.filename}</p>
                </div>
                <div className="flex gap-2 shrink-0 ml-4">
                  {isEditingPost ? (
                    <>
                      <button onClick={savePublishedEdit} disabled={savingPost}
                        className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50">
                        {savingPost ? "Saving…" : "Save"}
                      </button>
                      <button onClick={() => { setIsEditingPost(false); setEditPostContent(""); }} disabled={savingPost}
                        className="text-sm bg-gray-100 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-200 transition">
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => { setIsEditingPost(true); setEditPostContent(postContent); }}
                        disabled={loadingPost}
                        className="text-sm bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition disabled:opacity-50"
                      >
                        ✎ Edit
                      </button>
                      <button
                        onClick={() => deletePublished(selectedPost.slug)}
                        disabled={!!actionState[selectedPost.slug]}
                        className="text-sm bg-red-50 text-red-600 px-4 py-2 rounded-lg hover:bg-red-100 transition disabled:opacity-50"
                      >
                        {actionState[selectedPost.slug] === "deleting" ? "Deleting…" : "Delete"}
                      </button>
                    </>
                  )}
                </div>
              </div>

              {loadingPost ? (
                <div className="text-sm text-gray-400 text-center py-20">Loading post…</div>
              ) : isEditingPost ? (
                <div className="flex flex-col gap-3">
                  {/* ── Image uploader for published posts ── */}
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                    <p className="text-xs font-medium text-gray-700 mb-2">Images</p>
                    <ImageUploader onInsert={handlePublishedImageUpload} />
                  </div>

                  <p className="text-xs text-gray-400">Editing raw markdown — changes go live on Vercel after saving.</p>
                  <textarea
                    ref={publishedTextareaRef}
                    value={editPostContent}
                    onChange={(e) => setEditPostContent(e.target.value)}
                    className="w-full h-[60vh] bg-gray-900 text-gray-100 text-xs p-6 rounded-2xl font-mono leading-relaxed resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              {tab === "drafts" ? "← Select a draft to preview it" : "← Select a post to preview or edit it"}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}