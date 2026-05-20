// lib/blog-automation/keyword-picker.ts
import Groq from "groq-sdk";
import { Theme } from "./themes";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY! });

export interface KeywordResult {
  keyword: string;
  intent: "informational" | "commercial" | "navigational";
  estimatedDifficulty: "low" | "medium" | "high";
  title: string;
}

export async function pickKeywordForTheme(
  theme: Theme,
  usedKeywords: string[] = []
): Promise<KeywordResult> {
  const usedList =
    usedKeywords.length > 0
      ? `\n\nALREADY USED — do NOT repeat these:\n${usedKeywords.map((k) => `- ${k}`).join("\n")}`
      : "";

  const prompt = `You are an SEO content strategist for a recruitment software company.

Theme: "${theme.label}"
Target audience: ${theme.audience}
Context: ${theme.context}
Seed topic ideas: ${theme.seedTopics.join(", ")}
${usedList}

Pick the SINGLE BEST keyword for a blog post that:
1. Has NOT been used before
2. Has low-to-medium SEO difficulty (easier to rank)
3. Has informational or commercial intent
4. Would genuinely help the target audience

Respond ONLY with a valid JSON object — no markdown fences, no explanation:
{
  "keyword": "the chosen keyword phrase (2-5 words)",
  "intent": "informational",
  "estimatedDifficulty": "low",
  "title": "The Blog Post Title for This Keyword"
}`;

  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [{ role: "user", content: prompt }],
    max_tokens: 300,
    temperature: 0.7,
  });

  const text = (completion.choices[0]?.message?.content ?? "")
    .replace(/```json|```/g, "")
    .trim();

  return JSON.parse(text) as KeywordResult;
}