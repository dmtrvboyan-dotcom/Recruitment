// lib/blog-automation/kv-storage.ts
import { kv } from "@vercel/kv";
import { GeneratedPost } from "./generator";

const PREFIX = "draft:";

export async function saveDraft(post: GeneratedPost): Promise<void> {
  // kv handles JSON serialization automatically — do NOT JSON.stringify
  await kv.set(`${PREFIX}${post.slug}`, post);
}

export async function getAllDrafts(): Promise<GeneratedPost[]> {
  const keys = await kv.keys(`${PREFIX}*`);
  if (keys.length === 0) return [];

  const posts = await Promise.all(
    keys.map((key) => kv.get<GeneratedPost>(key))
  );

  return (posts.filter(Boolean) as GeneratedPost[]).sort(
    (a, b) =>
      new Date(b.generatedAt).getTime() - new Date(a.generatedAt).getTime()
  );
}

export async function getDraft(slug: string): Promise<GeneratedPost | null> {
  return kv.get<GeneratedPost>(`${PREFIX}${slug}`);
}

export async function deleteDraft(slug: string): Promise<void> {
  await kv.del(`${PREFIX}${slug}`);
}

export async function getUsedKeywordsFromDrafts(): Promise<string[]> {
  const drafts = await getAllDrafts();
  return drafts.map((d) => d.keyword);
}