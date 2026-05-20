// app/api/cron/generate-blog/route.ts
// ─────────────────────────────────────────────────────────────
// Vercel Cron endpoint — called twice a week (see vercel.json).
// Generates ONE blog post per run (2 runs = 2 posts/week).
// Protected by CRON_SECRET env var.
// ─────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from "next/server";
import { THEMES, getThemesForThisWeek, ThemeId } from "@/lib/blog-automation/themes";
import { pickKeywordForTheme } from "@/lib/blog-automation/keyword-picker";
import { generateBlogPost } from "@/lib/blog-automation/generator";
import {
  saveDraft,
  getUsedKeywordsFromDrafts,
} from "@/lib/blog-automation/kv-storage";

export const runtime = "nodejs"; // needs Node.js for Buffer, etc.
export const maxDuration = 60;   // generous timeout for AI calls

export async function GET(req: NextRequest) {
  // ── Auth ───────────────────────────────────────────────────
  const authHeader = req.headers.get("authorization");
  const secret = process.env.CRON_SECRET;
  if (!secret || authHeader !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // ── Decide which theme to use this run ──────────────────
    // Run 1 (Mon) → first theme of the week
    // Run 2 (Thu) → second theme of the week
    const [themeA, themeB] = getThemesForThisWeek();
    const dayOfWeek = new Date().getDay(); // 0=Sun … 6=Sat
    // Thursday = 4, Monday = 1; anything else defaults to themeA
    const themeId: ThemeId = dayOfWeek === 4 ? themeB : themeA;
    const theme = THEMES[themeId];

    console.log(`[blog-cron] Generating post for theme: ${theme.label}`);

    // ── Avoid keyword repetition ────────────────────────────
    const usedKeywords = await getUsedKeywordsFromDrafts();

    // ── Pick a keyword ──────────────────────────────────────
    const keywordResult = await pickKeywordForTheme(theme, usedKeywords);
    console.log(`[blog-cron] Chosen keyword: "${keywordResult.keyword}"`);

    // ── Generate the blog post ──────────────────────────────
    const post = await generateBlogPost(theme, keywordResult);
    console.log(`[blog-cron] Generated: "${post.title}" (${post.slug})`);

    // ── Save as draft to Vercel KV ──────────────────────────
    await saveDraft(post);
    console.log(`[blog-cron] Saved draft: ${post.slug}`);

    return NextResponse.json({
      success: true,
      slug: post.slug,
      title: post.title,
      theme: theme.label,
      keyword: keywordResult.keyword,
    });
  } catch (error) {
    console.error("[blog-cron] Error:", error);
    return NextResponse.json(
      { error: "Generation failed", details: String(error) },
      { status: 500 }
    );
  }
}