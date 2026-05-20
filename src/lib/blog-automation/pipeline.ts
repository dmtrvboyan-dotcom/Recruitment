// lib/blog-automation/pipeline.ts
// ─────────────────────────────────────────────────────────────
// Shared generation logic — called directly by both the cron
// route and the admin trigger route (no self-HTTP call needed).
// ─────────────────────────────────────────────────────────────

import { THEMES, ThemeId } from "./themes";
import { pickKeywordForTheme } from "./keyword-picker";
import { generateBlogPost } from "./generator";
import { saveDraft, getUsedKeywordsFromDrafts } from "./kv-storage";
import { kv } from "@vercel/kv";

const THEME_IDS = Object.keys(THEMES) as ThemeId[];

async function getNextTheme(): Promise<ThemeId> {
  const lastIndex = await kv.get<number>("blog:theme_index") ?? -1;
  const nextIndex = (lastIndex + 1) % THEME_IDS.length;
  await kv.set("blog:theme_index", nextIndex);
  return THEME_IDS[nextIndex];
}

async function getRecentCategories(themeId: ThemeId): Promise<string[]> {
  return (await kv.get<string[]>(`blog:recent_categories:${themeId}`)) ?? [];
}

async function saveUsedCategory(themeId: ThemeId, category: string): Promise<void> {
  const recent = await getRecentCategories(themeId);
  await kv.set(`blog:recent_categories:${themeId}`, [category, ...recent].slice(0, 3));
}

export async function runBlogGeneration() {
  const themeId = await getNextTheme();
  const theme = THEMES[themeId];

  console.log(`[blog-gen] Theme: ${theme.label}`);

  const usedKeywords = await getUsedKeywordsFromDrafts();
  const recentCategories = await getRecentCategories(themeId);

  const keywordResult = await pickKeywordForTheme(theme, usedKeywords, recentCategories);
  console.log(`[blog-gen] Keyword: "${keywordResult.keyword}"`);

  const post = await generateBlogPost(theme, keywordResult);
  console.log(`[blog-gen] Generated: "${post.title}"`);

  await saveDraft(post);
  await saveUsedCategory(themeId, post.category);

  return {
    success: true,
    slug: post.slug,
    title: post.title,
    theme: theme.label,
    keyword: keywordResult.keyword,
    category: post.category,
  };
}