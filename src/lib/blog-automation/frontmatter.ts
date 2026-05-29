// lib/blog-automation/frontmatter.ts
// ─────────────────────────────────────────────────────────────
// Parse and rebuild the frontmatter block at the top of markdown.
// Prevents duplicate keys (the bug we hit) and supports `featured`.
// ─────────────────────────────────────────────────────────────

export interface Frontmatter {
  title: string;
  description: string;
  date: string;
  category: string;
  tab: string;
  keyword: string;
  image?: string;
  featured?: boolean;
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

  for (const line of fmBlock.split("\n")) {
    // Allow optional quoted keys ("image": ... or image: ...)
    const m = line.match(/^"?([a-zA-Z_]+)"?:\s*(.+)$/);
    if (!m) continue;
    const [, key, rawValue] = m;
    const value = rawValue.trim().replace(/^["']|["']$/g, "");
    if (key === "draft" || key === "featured") {
      (fm as Record<string, unknown>)[key] = value === "true";
    } else {
      (fm as Record<string, unknown>)[key] = value;
    }
  }

  return { fm, body };
}

/** Rebuild a markdown string with new frontmatter + existing body. Single source of truth — no duplicates. */
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
  if (fm.featured) lines.push(`featured: true`);
  lines.push(`draft: ${fm.draft ?? false}`);
  lines.push("---", "");

  return lines.join("\n") + body.replace(/^\n+/, "\n");
}

/** Update specific fields and rebuild markdown — guarantees no duplicate keys */
export function updateFrontmatter(markdown: string, updates: Partial<Frontmatter>): string {
  const { fm, body } = parseFrontmatter(markdown);
  const merged: Frontmatter = {
    title: updates.title ?? fm.title ?? "",
    description: updates.description ?? fm.description ?? "",
    date: updates.date ?? fm.date ?? "",
    category: updates.category ?? fm.category ?? "",
    tab: updates.tab ?? fm.tab ?? "",
    keyword: updates.keyword ?? fm.keyword ?? "",
    image: updates.image !== undefined ? updates.image : fm.image,
    featured: updates.featured !== undefined ? updates.featured : fm.featured,
    draft: updates.draft !== undefined ? updates.draft : fm.draft ?? false,
  };
  return buildMarkdown(merged, body);
}