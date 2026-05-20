import { NextRequest, NextResponse } from "next/server";
import { getDraft, deleteDraft } from "@/lib/blog-automation/kv-storage";
import { publishPostToGitHub } from "@/lib/blog-automation/github-writer";

export const runtime = "nodejs";
export const maxDuration = 30;

export async function POST(req: NextRequest) {
  const { slug } = await req.json();
  if (!slug) return NextResponse.json({ error: "slug required" }, { status: 400 });

  const draft = await getDraft(slug);
  if (!draft) return NextResponse.json({ error: "Draft not found" }, { status: 404 });

  const commitUrl = await publishPostToGitHub(
    draft.slug,
    draft.content,
    draft.title
  );

  await deleteDraft(slug);
  return NextResponse.json({ success: true, commitUrl });
}