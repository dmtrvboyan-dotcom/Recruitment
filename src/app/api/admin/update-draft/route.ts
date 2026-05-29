import { NextRequest, NextResponse } from "next/server";
import { getDraft, saveDraft, deleteDraft, getAllDrafts } from "@/lib/blog-automation/kv-storage";
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
    slug,
    content,
    metadata,
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
      featured?: boolean;
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

  if (metadata) {
    const updates: Record<string, string | boolean> = {};
    if (metadata.title) updates.title = metadata.title;
    if (metadata.description) updates.description = metadata.description;
    if (metadata.category) updates.category = metadata.category;
    if (metadata.tab) updates.tab = metadata.tab;
    if (metadata.keyword) updates.keyword = metadata.keyword;
    if (metadata.featured !== undefined) updates.featured = metadata.featured;

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

  // ── Auto-unfeature: if we're marking THIS draft as featured, unfeature any other drafts in the same tab ──
  if (metadata?.featured === true) {
    const allDrafts = await getAllDrafts();
    for (const other of allDrafts) {
      if (other.slug !== slug && other.tab === nextDraft.tab) {
        // Check if other was featured by looking at its content
        const wasFeatured = /^featured:\s*true/m.test(other.content);
        if (wasFeatured) {
          const cleared = updateFrontmatter(other.content, { featured: false });
          await saveDraft({ ...other, content: cleared });
        }
      }
    }
  }

  // ── Slug rename (drafts only) ──
  const requestedSlug = metadata?.slug ? slugify(metadata.slug) : null;
  if (requestedSlug && requestedSlug !== slug) {
    await deleteDraft(slug);
    nextDraft.slug = requestedSlug;
    await saveDraft(nextDraft);
    return NextResponse.json({ success: true, newSlug: requestedSlug });
  }

  await saveDraft(nextDraft);
  return NextResponse.json({ success: true });
}