import { NextResponse } from "next/server";
import { getAllDrafts } from "@/lib/blog-automation/kv-storage";

export const runtime = "nodejs";

export async function GET() {
  const drafts = await getAllDrafts();
  return NextResponse.json({ drafts });
}