import { NextRequest, NextResponse } from "next/server";
import { deleteDraft } from "@/lib/blog-automation/kv-storage";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const { slug } = await req.json();
  if (!slug) return NextResponse.json({ error: "slug required" }, { status: 400 });

  await deleteDraft(slug);
  return NextResponse.json({ success: true });
}