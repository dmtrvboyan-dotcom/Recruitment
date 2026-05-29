import { NextRequest, NextResponse } from "next/server";
import { updateFrontmatter } from "@/lib/blog-automation/frontmatter";

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
  const body = await req.json();
  const {
    slug,
    content,    // raw markdown (when user edited the body directly)
    sha,
    metadata,   // optional structured metadata updates
  } = body as {
    slug: string;
    content?: string;
    sha: string;
    metadata?: {
      title?: string;
      description?: string;
      category?: string;
      tab?: string;
      keyword?: string;
    };
  };

  if (!slug || !sha) {
    return NextResponse.json(
      { error: "slug and sha required" },
      { status: 400 }
    );
  }

  let finalContent = content ?? "";

  // If only metadata was sent (no content), we need to fetch current file
  if (!content && metadata) {
    const filePath = `${process.env.POSTS_PATH}/${slug}.md`;
    const branch = process.env.GITHUB_BRANCH ?? "main";
    const getRes = await fetch(
      `${BASE}/repos/${process.env.GITHUB_OWNER}/${process.env.GITHUB_REPO}/contents/${filePath}?ref=${branch}`,
      { headers: headers() }
    );
    if (!getRes.ok) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    const data = await getRes.json();
    finalContent = Buffer.from(data.content, "base64").toString("utf8");
  }

  // Apply metadata updates to frontmatter if provided
  if (metadata) {
    const updates: Record<string, string> = {};
    if (metadata.title) updates.title = metadata.title;
    if (metadata.description) updates.description = metadata.description;
    if (metadata.category) updates.category = metadata.category;
    if (metadata.tab) updates.tab = metadata.tab;
    if (metadata.keyword) updates.keyword = metadata.keyword;

    finalContent = updateFrontmatter(finalContent, updates);
  }

  if (!finalContent) {
    return NextResponse.json({ error: "content required" }, { status: 400 });
  }

  const filePath = `${process.env.POSTS_PATH}/${slug}.md`;

  const res = await fetch(
    `${BASE}/repos/${process.env.GITHUB_OWNER}/${process.env.GITHUB_REPO}/contents/${filePath}`,
    {
      method: "PUT",
      headers: headers(),
      body: JSON.stringify({
        message: `content(blog): update post "${slug}"`,
        content: Buffer.from(finalContent).toString("base64"),
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