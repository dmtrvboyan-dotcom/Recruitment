// lib/blog-automation/generator.ts
import Groq from "groq-sdk";
import { Theme } from "./themes";
import { KeywordResult } from "./keyword-picker";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY! });

export interface GeneratedPost {
  slug: string;
  title: string;
  description: string;
  keyword: string;
  themeId: string;
  themeLabel: string;
  tab: string;
  category: string;
  content: string;
  generatedAt: string;
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80);
}

function formatDate(): string {
  return new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export async function generateBlogPost(
  theme: Theme,
  keywordResult: KeywordResult
): Promise<GeneratedPost> {
  const date = formatDate();
  const categoryOptions = theme.categoryOptions.join(", ");

  const prompt = `You are a senior content writer for a recruitment-tech company.

Write a complete, high-quality SEO blog post using the details below.

THEME: ${theme.label}
TARGET KEYWORD: "${keywordResult.keyword}"
BLOG TITLE: ${keywordResult.title}
AUDIENCE: ${theme.audience}
TONE: ${theme.tone}
CONTEXT: ${theme.context}
SEARCH INTENT: ${keywordResult.intent}

REQUIREMENTS:
- Length: 900–1200 words (not counting frontmatter)
- Use the target keyword naturally in: title, first paragraph, at least 2 H2 subheadings, conclusion
- Structure: intro → 3–5 H2 sections → conclusion with a soft CTA
- Use ## and ### headings, short paragraphs, bullet lists where appropriate
- Write for humans first — no keyword stuffing
- Pick the most fitting category from this list: ${categoryOptions}
- Write a meta description for the "description" field (150–160 characters)

Respond ONLY with valid markdown starting with the frontmatter — no preamble, no explanation:

---
title: "${keywordResult.title}"
description: "<150-160 char meta description>"
date: "${date}"
category: "<pick one: ${categoryOptions}>"
tab: "${theme.tab}"
keyword: "${keywordResult.keyword}"
draft: true
---

<full blog post body>`;

  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [{ role: "user", content: prompt }],
    max_tokens: 2500,
    temperature: 0.75,
  });

  const content = (completion.choices[0]?.message?.content ?? "").trim();

  const descriptionMatch = content.match(/description:\s*["']?(.+?)["']?\n/);
  const categoryMatch = content.match(/category:\s*["']?(.+?)["']?\n/);

  const description = descriptionMatch
    ? descriptionMatch[1].replace(/^["']|["']$/g, "")
    : "";
  const category = categoryMatch
    ? categoryMatch[1].replace(/^["']|["']$/g, "")
    : theme.categoryOptions[0];

  return {
    slug: slugify(keywordResult.title),
    title: keywordResult.title,
    description,
    keyword: keywordResult.keyword,
    themeId: theme.id,
    themeLabel: theme.label,
    tab: theme.tab,
    category,
    content,
    generatedAt: new Date().toISOString(),
  };
}