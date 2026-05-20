// app/api/admin/update-draft/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getDraft, saveDraft } from "@/lib/blog-automation/kv-storage";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const { slug, content } = await req.json();
  if (!slug || !content) {
    return NextResponse.json({ error: "slug and content required" }, { status: 400 });
  }

  const draft = await getDraft(slug);
  if (!draft) {
    return NextResponse.json({ error: "Draft not found" }, { status: 404 });
  }

  // Re-extract description from the edited frontmatter in case user changed it
  const descriptionMatch = content.match(/description:\s*["']?(.+?)["']?\n/);
  const description = descriptionMatch
    ? descriptionMatch[1].replace(/^["']|["']$/g, "")
    : draft.description;

  await saveDraft({ ...draft, content, description });

  return NextResponse.json({ success: true });
}