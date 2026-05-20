// lib/blog-automation/keyword-picker.ts
import Groq from "groq-sdk";
import { Theme } from "./themes";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY! });

export interface KeywordResult {
  keyword: string;
  intent: "informational" | "commercial" | "navigational";
  estimatedDifficulty: "low" | "medium" | "high";
  title: string;
  suggestedCategory: string;
}

export async function pickKeywordForTheme(
  theme: Theme,
  usedKeywords: string[] = [],
  recentCategories: string[] = []
): Promise<KeywordResult> {
  const usedList = usedKeywords.length > 0
    ? `\nALREADY USED KEYWORDS — do NOT repeat or closely resemble these:\n${usedKeywords.map((k) => `- ${k}`).join("\n")}`
    : "";

  const avoidCategories = recentCategories.length > 0
    ? `\nRECENTLY USED CATEGORIES — pick a DIFFERENT category from these:\n${recentCategories.map((c) => `- ${c}`).join("\n")}`
    : "";

  const allCategories = theme.categoryOptions.join(", ");

  const prompt = `You are an SEO content strategist for a recruitment software company.

THEME: "${theme.label}"
AUDIENCE: ${theme.audience}
CONTEXT: ${theme.context}
AVAILABLE CATEGORIES: ${allCategories}
${usedList}
${avoidCategories}

Pick the SINGLE BEST keyword and category combination that:
1. Has NOT been used before (check the list above)
2. Uses a DIFFERENT category from the recently used ones above
3. Has low-to-medium SEO difficulty
4. Has informational or commercial intent
5. Would genuinely help the target audience
6. Covers a FRESH angle — not just "10 ways to improve X"

Be creative with the angle. Consider: case studies, comparisons, myths vs facts,
step-by-step guides, industry trends, mistakes to avoid, tools, statistics, etc.

Respond ONLY with valid JSON — no markdown fences, no explanation:
{
  "keyword": "the chosen keyword phrase (2-5 words)",
  "intent": "informational",
  "estimatedDifficulty": "low",
  "title": "Creative, specific blog post title (not generic)",
  "suggestedCategory": "one of the available categories above"
}`;

  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [{ role: "user", content: prompt }],
    max_tokens: 300,
    temperature: 0.9, // higher temp = more variety
  });

  const text = (completion.choices[0]?.message?.content ?? "")
    .replace(/```json|```/g, "")
    .trim();

  return JSON.parse(text) as KeywordResult;
}