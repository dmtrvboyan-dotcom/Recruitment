import { NextRequest, NextResponse } from "next/server";
import { updateFrontmatter, parseFrontmatter } from "@/lib/blog-automation/frontmatter";

export const runtime = "nodejs";
export const maxDuration = 30;

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

function branch() {
  return process.env.GITHUB_BRANCH ?? "main";
}

function postsPath() {
  return process.env.POSTS_PATH ?? "posts";
}

async function getFile(slug: string): Promise<{ content: string; sha: string } | null> {
  const filePath = `${postsPath()}/${slug}.md`;
  const res = await fetch(
    `${repoBase()}/contents/${filePath}?ref=${branch()}`,
    { headers: headers() }
  );
  if (!res.ok) return null;
  const data = await res.json();
  return {
    content: Buffer.from(data.content, "base64").toString("utf8"),
    sha: data.sha,
  };
}

async function listAllPostFiles(): Promise<string[]> {
  const res = await fetch(
    `${repoBase()}/contents/${postsPath()}?ref=${branch()}`,
    { headers: headers() }
  );
  if (!res.ok) return [];
  const files = await res.json();
  if (!Array.isArray(files)) return [];
  return files
    .filter((f: { name: string }) => f.name.endsWith(".md"))
    .map((f: { name: string }) => f.name.replace(/\.md$/, ""));
}

async function writeFile(slug: string, content: string, sha: string, message: string) {
  const filePath = `${postsPath()}/${slug}.md`;
  const res = await fetch(`${repoBase()}/contents/${filePath}`, {
    method: "PUT",
    headers: headers(),
    body: JSON.stringify({
      message,
      content: Buffer.from(content).toString("base64"),
      sha,
      branch: branch(),
    }),
  });
  return res.ok;
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const {
    slug,
    content,
    sha,
    metadata,
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
      featured?: boolean;
    };
  };

  if (!slug || !sha) {
    return NextResponse.json({ error: "slug and sha required" }, { status: 400 });
  }

  let finalContent = content ?? "";

  // If only metadata sent (no content), fetch current file
  if (!content && metadata) {
    const file = await getFile(slug);
    if (!file) return NextResponse.json({ error: "Post not found" }, { status: 404 });
    finalContent = file.content;
  }

  // Apply metadata
  if (metadata) {
    const updates: Record<string, string | boolean> = {};
    if (metadata.title) updates.title = metadata.title;
    if (metadata.description) updates.description = metadata.description;
    if (metadata.category) updates.category = metadata.category;
    if (metadata.tab) updates.tab = metadata.tab;
    if (metadata.keyword) updates.keyword = metadata.keyword;
    if (metadata.featured !== undefined) updates.featured = metadata.featured;
    finalContent = updateFrontmatter(finalContent, updates);
  }

  if (!finalContent) {
    return NextResponse.json({ error: "content required" }, { status: 400 });
  }

  // Write the main file
  const ok = await writeFile(slug, finalContent, sha, `content(blog): update post "${slug}"`);
  if (!ok) {
    return NextResponse.json({ error: "GitHub update failed" }, { status: 500 });
  }

  // ── Auto-unfeature: if marking this post featured, unfeature siblings in same tab ──
  if (metadata?.featured === true) {
    const { fm } = parseFrontmatter(finalContent);
    const thisTab = fm.tab;
    if (thisTab) {
      const allSlugs = await listAllPostFiles();
      for (const otherSlug of allSlugs) {
        if (otherSlug === slug) continue;
        const otherFile = await getFile(otherSlug);
        if (!otherFile) continue;
        const { fm: otherFm } = parseFrontmatter(otherFile.content);
        if (otherFm.tab === thisTab && otherFm.featured === true) {
          const cleared = updateFrontmatter(otherFile.content, { featured: false });
          await writeFile(otherSlug, cleared, otherFile.sha, `chore(blog): unfeature "${otherSlug}"`);
        }
      }
    }
  }

  return NextResponse.json({ success: true });
}