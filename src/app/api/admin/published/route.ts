// app/api/admin/published/route.ts
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const BASE = "https://api.github.com";

function headers() {
  return {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
}

export async function GET() {
  const postsPath = process.env.POSTS_PATH ?? "src/app/blog/posts";
  const branch = process.env.GITHUB_BRANCH ?? "main";

  const res = await fetch(
    `${BASE}/repos/${process.env.GITHUB_OWNER}/${process.env.GITHUB_REPO}/contents/${postsPath}?ref=${branch}`,
    { headers: headers() }
  );

  // 404 means folder is empty or doesn't exist yet — not an error
  if (res.status === 404) {
    return NextResponse.json({ posts: [] });
  }

  if (!res.ok) {
    return NextResponse.json({ posts: [] });
  }

  const files = await res.json();

  // GitHub can return an object instead of array if path is a single file
  if (!Array.isArray(files)) {
    return NextResponse.json({ posts: [] });
  }

  const posts = files
    .filter((f: { name: string }) => f.name.endsWith(".md"))
    .map((f: { name: string }) => ({
      slug: f.name.replace(/\.md$/, ""),
      filename: f.name,
    }))
    .sort((a: { slug: string }, b: { slug: string }) =>
      a.slug.localeCompare(b.slug)
    );

  return NextResponse.json({ posts });
}