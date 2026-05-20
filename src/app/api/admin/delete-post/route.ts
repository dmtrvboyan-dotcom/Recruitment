// app/api/admin/delete-post/route.ts
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const BASE = "https://api.github.com";

function headers() {
  return {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "Content-Type": "application/json",
  };
}

function repoBase() {
  return `${BASE}/repos/${process.env.GITHUB_OWNER}/${process.env.GITHUB_REPO}`;
}

async function getFileSha(path: string): Promise<string | null> {
  const res = await fetch(
    `${repoBase()}/contents/${path}?ref=${process.env.GITHUB_BRANCH ?? "main"}`,
    { headers: headers() }
  );
  if (!res.ok) return null;
  const data = await res.json();
  return data.sha ?? null;
}

export async function DELETE(req: NextRequest) {
  const { slug } = await req.json();
  if (!slug) return NextResponse.json({ error: "slug required" }, { status: 400 });

  const filePath = `${process.env.POSTS_PATH}/${slug}.md`;
  const sha = await getFileSha(filePath);

  if (!sha) {
    return NextResponse.json({ error: "File not found on GitHub" }, { status: 404 });
  }

  const res = await fetch(`${repoBase()}/contents/${filePath}`, {
    method: "DELETE",
    headers: headers(),
    body: JSON.stringify({
      message: `chore(blog): delete post "${slug}"`,
      sha,
      branch: process.env.GITHUB_BRANCH ?? "main",
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    return NextResponse.json({ error: `GitHub delete failed: ${err}` }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}