import { NextRequest, NextResponse } from "next/server";
import { runBlogGeneration } from "@/lib/blog-automation/pipeline";

export const runtime = "nodejs";
export const maxDuration = 60;

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  const secret = process.env.CRON_SECRET;

  if (!secret || authHeader !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const result = await runBlogGeneration();
    return NextResponse.json(result);
  } catch (error) {
    console.error("[blog-cron] Error:", error);
    return NextResponse.json(
      { error: "Generation failed", details: String(error) },
      { status: 500 }
    );
  }
}