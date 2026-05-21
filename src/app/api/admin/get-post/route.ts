// app/api/admin/get-post/route.ts
// Fetches the raw markdown content of a published post from GitHub

import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const BASE = "https://api.github.com";

function headers() {
  return {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
}

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get("slug");
  if (!slug) return NextResponse.json({ error: "slug required" }, { status: 400 });

  const filePath = `${process.env.POSTS_PATH}/${slug}.md`;
  const branch = process.env.GITHUB_BRANCH ?? "main";

  const res = await fetch(
    `${BASE}/repos/${process.env.GITHUB_OWNER}/${process.env.GITHUB_REPO}/contents/${filePath}?ref=${branch}`,
    { headers: headers() }
  );

  if (!res.ok) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  const data = await res.json();

  // GitHub returns content as base64
  const content = Buffer.from(data.content, "base64").toString("utf8");

  return NextResponse.json({ content, sha: data.sha });
}