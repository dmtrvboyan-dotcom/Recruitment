// app/api/admin/trigger/route.ts
import { NextRequest, NextResponse } from "next/server";
import { verifySessionToken, COOKIE_NAME } from "@/lib/session";
import { runBlogGeneration } from "@/lib/blog-automation/pipeline";

export const runtime = "nodejs";
export const maxDuration = 60;

export async function POST(req: NextRequest) {
  // Verify admin session
  const token = req.cookies.get(COOKIE_NAME)?.value;
  if (!token || !process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const valid = await verifySessionToken(token, process.env.ADMIN_SECRET);
  if (!valid) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Call generation logic directly — no HTTP self-call
    const result = await runBlogGeneration();
    return NextResponse.json(result);
  } catch (error) {
    console.error("[admin-trigger] Error:", error);
    return NextResponse.json(
      { error: "Generation failed", details: String(error) },
      { status: 500 }
    );
  }
}