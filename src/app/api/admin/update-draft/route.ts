import { NextRequest, NextResponse } from "next/server";
import { getDraft, saveDraft, deleteDraft } from "@/lib/blog-automation/kv-storage";
import { updateFrontmatter } from "@/lib/blog-automation/frontmatter";

export const runtime = "nodejs";

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const {
    slug,           // current slug (key in KV)
    content,        // raw markdown (optional, if user edited the body)
    metadata,       // optional structured metadata updates
  } = body as {
    slug: string;
    content?: string;
    metadata?: {
      title?: string;
      description?: string;
      category?: string;
      tab?: string;
      keyword?: string;
      slug?: string;
    };
  };

  if (!slug) {
    return NextResponse.json({ error: "slug required" }, { status: 400 });
  }

  const draft = await getDraft(slug);
  if (!draft) {
    return NextResponse.json({ error: "Draft not found" }, { status: 404 });
  }

  let nextContent = content ?? draft.content;
  let nextDraft = { ...draft };

  // ── Apply metadata changes ──
  if (metadata) {
    const updates: Record<string, string> = {};
    if (metadata.title) updates.title = metadata.title;
    if (metadata.description) updates.description = metadata.description;
    if (metadata.category) updates.category = metadata.category;
    if (metadata.tab) updates.tab = metadata.tab;
    if (metadata.keyword) updates.keyword = metadata.keyword;

    nextContent = updateFrontmatter(nextContent, updates);

    nextDraft = {
      ...nextDraft,
      title: metadata.title ?? nextDraft.title,
      description: metadata.description ?? nextDraft.description,
      category: metadata.category ?? nextDraft.category,
      tab: metadata.tab ?? nextDraft.tab,
      keyword: metadata.keyword ?? nextDraft.keyword,
    };
  }

  nextDraft.content = nextContent;

  // ── Handle slug rename (drafts only — published posts have locked slugs) ──
  const requestedSlug = metadata?.slug ? slugify(metadata.slug) : null;
  if (requestedSlug && requestedSlug !== slug) {
    // Delete old, save under new key
    await deleteDraft(slug);
    nextDraft.slug = requestedSlug;
    await saveDraft(nextDraft);
    return NextResponse.json({ success: true, newSlug: requestedSlug });
  }

  await saveDraft(nextDraft);
  return NextResponse.json({ success: true });
}