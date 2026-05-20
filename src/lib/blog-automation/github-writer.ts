// lib/blog-automation/github-writer.ts
// ─────────────────────────────────────────────────────────────
// Writes an approved draft as a .md file to your GitHub repo.
// Vercel detects the commit and auto-deploys.
//
// Required env vars:
//   GITHUB_TOKEN  — Personal Access Token with repo write scope
//   GITHUB_OWNER  — your GitHub username or org  (e.g. "acme-corp")
//   GITHUB_REPO   — repository name              (e.g. "my-website")
//   GITHUB_BRANCH — branch to commit to          (default: "main")
//   POSTS_PATH    — path inside repo to posts    (default: "posts")
// ─────────────────────────────────────────────────────────────

interface GithubFile {
  sha?: string;
  content?: string;
}

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
  const owner = process.env.GITHUB_OWNER;
  const repo = process.env.GITHUB_REPO;
  if (!owner || !repo)
    throw new Error("GITHUB_OWNER and GITHUB_REPO must be set");
  return `${BASE}/repos/${owner}/${repo}`;
}

function branch() {
  return process.env.GITHUB_BRANCH ?? "main";
}

function postsPath() {
  return process.env.POSTS_PATH ?? "posts";
}

/** Get the current SHA of a file (needed to update it) */
async function getFileSha(path: string): Promise<string | undefined> {
  const res = await fetch(
    `${repoBase()}/contents/${path}?ref=${branch()}`,
    { headers: headers() }
  );
  if (res.status === 404) return undefined;
  if (!res.ok) throw new Error(`GitHub GET failed: ${res.status}`);
  const data = (await res.json()) as GithubFile;
  return data.sha;
}

/**
 * Publish an approved post to the repo as a .md file.
 * Strips `draft: true` from frontmatter before committing.
 */
export async function publishPostToGitHub(
  slug: string,
  markdownContent: string,
  title: string
): Promise<string> {
  // Remove draft flag from frontmatter
  const publishedContent = markdownContent.replace(/^draft:\s*true\s*$/m, "draft: false");

  const filePath = `${postsPath()}/${slug}.md`;
  const sha = await getFileSha(filePath);

  const body = JSON.stringify({
    message: `feat(blog): add post "${title}"`,
    content: Buffer.from(publishedContent).toString("base64"),
    branch: branch(),
    ...(sha ? { sha } : {}), // include sha only when updating existing file
  });

  const res = await fetch(`${repoBase()}/contents/${filePath}`, {
    method: "PUT",
    headers: headers(),
    body,
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`GitHub write failed (${res.status}): ${err}`);
  }

  const data = await res.json();
  // Return the commit URL for logging
  return data.commit?.html_url ?? filePath;
}