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

export async function POST(req: NextRequest) {
  const { slug, content, sha } = await req.json();
  if (!slug || !content || !sha) {
    return NextResponse.json(
      { error: "slug, content and sha required" },
      { status: 400 }
    );
  }

  const filePath = `${process.env.POSTS_PATH}/${slug}.md`;

  const res = await fetch(
    `${BASE}/repos/${process.env.GITHUB_OWNER}/${process.env.GITHUB_REPO}/contents/${filePath}`,
    {
      method: "PUT",
      headers: headers(),
      body: JSON.stringify({
        message: `content(blog): update post "${slug}"`,
        content: Buffer.from(content).toString("base64"),
        sha,
        branch: process.env.GITHUB_BRANCH ?? "main",
      }),
    }
  );

  if (!res.ok) {
    const err = await res.text();
    return NextResponse.json(
      { error: `GitHub update failed: ${err}` },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}