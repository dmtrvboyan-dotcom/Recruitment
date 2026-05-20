// app/api/cron/generate-blog/route.ts
import { NextRequest, NextResponse } from "next/server";
import { THEMES, ThemeId } from "@/lib/blog-automation/themes";
import { pickKeywordForTheme } from "@/lib/blog-automation/keyword-picker";
import { generateBlogPost } from "@/lib/blog-automation/generator";
import { saveDraft, getUsedKeywordsFromDrafts } from "@/lib/blog-automation/kv-storage";
import { kv } from "@vercel/kv";

export const runtime = "nodejs";
export const maxDuration = 60;

const THEME_IDS = Object.keys(THEMES) as ThemeId[];

/** Get next theme in rotation — cycles ats → companies → candidates → it → ats … */
async function getNextTheme(): Promise<ThemeId> {
  const lastIndex = await kv.get<number>("blog:theme_index") ?? -1;
  const nextIndex = (lastIndex + 1) % THEME_IDS.length;
  await kv.set("blog:theme_index", nextIndex);
  return THEME_IDS[nextIndex];
}

/** Get recently used categories for a theme to avoid repetition */
async function getRecentCategories(themeId: ThemeId): Promise<string[]> {
  const recent = await kv.get<string[]>(`blog:recent_categories:${themeId}`) ?? [];
  return recent;
}

/** Save used category — keeps last 3 per theme */
async function saveUsedCategory(themeId: ThemeId, category: string): Promise<void> {
  const recent = await getRecentCategories(themeId);
  const updated = [category, ...recent].slice(0, 3); // keep last 3
  await kv.set(`blog:recent_categories:${themeId}`, updated);
}

export async function GET(req: NextRequest) {
  // ── Auth ──────────────────────────────────────────────────
  const authHeader = req.headers.get("authorization");
  const secret = process.env.CRON_SECRET;
  if (!secret || authHeader !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // ── Rotate through all 4 themes evenly ────────────────
    const themeId = await getNextTheme();
    const theme = THEMES[themeId];
    console.log(`[blog-cron] Theme: ${theme.label}`);

    // ── Avoid repeating keywords and categories ───────────
    const usedKeywords = await getUsedKeywordsFromDrafts();
    const recentCategories = await getRecentCategories(themeId);

    // ── Pick keyword (passes recent categories to avoid) ──
    const keywordResult = await pickKeywordForTheme(
      theme,
      usedKeywords,
      recentCategories
    );
    console.log(`[blog-cron] Keyword: "${keywordResult.keyword}" | Category: ${keywordResult.suggestedCategory}`);

    // ── Generate post ─────────────────────────────────────
    const post = await generateBlogPost(theme, keywordResult);
    console.log(`[blog-cron] Generated: "${post.title}"`);

    // ── Save draft + update rotation state ────────────────
    await saveDraft(post);
    await saveUsedCategory(themeId, post.category);

    return NextResponse.json({
      success: true,
      slug: post.slug,
      title: post.title,
      theme: theme.label,
      keyword: keywordResult.keyword,
      category: post.category,
    });
  } catch (error) {
    console.error("[blog-cron] Error:", error);
    return NextResponse.json(
      { error: "Generation failed", details: String(error) },
      { status: 500 }
    );
  }
}