// lib/blog-automation/frontmatter.ts
// ─────────────────────────────────────────────────────────────
// Tiny helpers to parse and rebuild the frontmatter block
// at the top of a markdown post.
// ─────────────────────────────────────────────────────────────

export interface Frontmatter {
  title: string;
  description: string;
  date: string;
  category: string;
  tab: string;
  keyword: string;
  image?: string;
  draft?: boolean;
}

const FM_REGEX = /^---\s*\n([\s\S]*?)\n---\s*\n?/;

/** Parse the frontmatter block at the top of a markdown string */
export function parseFrontmatter(markdown: string): { fm: Partial<Frontmatter>; body: string } {
  const match = markdown.match(FM_REGEX);
  if (!match) return { fm: {}, body: markdown };

  const fmBlock = match[1];
  const body = markdown.slice(match[0].length);

  const fm: Partial<Frontmatter> = {};
  const lines = fmBlock.split("\n");

  for (const line of lines) {
    const m = line.match(/^([a-zA-Z_]+):\s*(.+)$/);
    if (!m) continue;
    const [, key, rawValue] = m;
    const value = rawValue.trim().replace(/^["']|["']$/g, "");
    if (key === "draft") {
      (fm as Record<string, unknown>)[key] = value === "true";
    } else {
      (fm as Record<string, unknown>)[key] = value;
    }
  }

  return { fm, body };
}

/** Rebuild a markdown string with new frontmatter + existing body */
export function buildMarkdown(fm: Frontmatter, body: string): string {
  const lines = [
    "---",
    `title: "${fm.title.replace(/"/g, '\\"')}"`,
    `description: "${fm.description.replace(/"/g, '\\"')}"`,
    `date: "${fm.date}"`,
    `category: "${fm.category}"`,
    `tab: "${fm.tab}"`,
    `keyword: "${fm.keyword}"`,
  ];

  if (fm.image) lines.push(`image: "${fm.image}"`);
  lines.push(`draft: ${fm.draft ?? false}`);
  lines.push("---", "");

  return lines.join("\n") + body.replace(/^\n+/, "\n");
}

/** Convenience: update specific fields in a markdown string */
export function updateFrontmatter(markdown: string, updates: Partial<Frontmatter>): string {
  const { fm, body } = parseFrontmatter(markdown);
  const merged: Frontmatter = {
    title: updates.title ?? fm.title ?? "",
    description: updates.description ?? fm.description ?? "",
    date: updates.date ?? fm.date ?? "",
    category: updates.category ?? fm.category ?? "",
    tab: updates.tab ?? fm.tab ?? "",
    keyword: updates.keyword ?? fm.keyword ?? "",
    image: updates.image ?? fm.image,
    draft: updates.draft ?? fm.draft ?? false,
  };
  return buildMarkdown(merged, body);
}