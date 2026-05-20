// lib/blog-automation/themes.ts

export const THEMES = {
  "ats-software": {
    id: "ats-software",
    label: "ATS Software",
    tab: "ats" as const,
    categoryOptions: ["Features", "Integrations", "Updates", "Tutorials", "Best Practices"],
    audience: "HR professionals, recruiters, and business owners evaluating ATS tools",
    tone: "authoritative, solution-focused, informative",
    context:
      "We build and sell our own ATS (Applicant Tracking System) software. " +
      "Blog posts should educate readers about ATS software in general, " +
      "subtly positioning our product as the natural choice.",
    seedTopics: [
      "applicant tracking system",
      "ATS software comparison",
      "recruitment automation",
      "resume parsing technology",
      "hiring workflow software",
      "ATS for small business",
      "ATS integration with HR tools",
    ],
  },
  "for-companies": {
    id: "for-companies",
    label: "For Companies",
    tab: "companies" as const,
    categoryOptions: ["Employer Branding", "DEI", "HR Trends", "Case Studies", "Scaling"],
    audience: "HR managers, hiring managers, and company executives",
    tone: "professional, practical, results-oriented",
    context:
      "Help companies improve their hiring, recruitment strategy, and HR operations. " +
      "Practical, actionable advice they can implement immediately.",
    seedTopics: [
      "hiring best practices",
      "talent acquisition strategy",
      "employer branding",
      "reducing time-to-hire",
      "structured interviews",
      "diversity hiring",
      "onboarding new employees",
      "retaining top talent",
    ],
  },
  "for-candidates": {
    id: "for-candidates",
    label: "For Candidates",
    tab: "candidates" as const,
    categoryOptions: ["Job Search", "Interview Prep", "Career Growth", "Remote Work", "Salary Tips"],
    audience: "Job seekers and professionals actively looking for new opportunities",
    tone: "supportive, empowering, friendly, practical",
    context:
      "Help job seekers navigate the modern job hunt — applications, interviews, " +
      "ATS-optimised resumes, and career growth. Be encouraging and human.",
    seedTopics: [
      "how to beat ATS systems",
      "resume tips",
      "job interview preparation",
      "cover letter writing",
      "LinkedIn profile optimisation",
      "salary negotiation",
      "remote job search",
      "career change advice",
    ],
  },
  "it-news": {
    id: "it-news",
    label: "IT News",
    tab: "it" as const,
    categoryOptions: ["AI & ML", "Cybersecurity", "Cloud", "Dev Tools", "Industry News"],
    audience: "IT professionals, developers, and tech-savvy business readers",
    tone: "analytical, current, balanced",
    context:
      "Cover the latest in IT, software development, AI tools, cybersecurity, " +
      "and digital transformation. Relevant to a recruitment-tech audience.",
    seedTopics: [
      "AI in recruitment",
      "HR tech trends",
      "cloud computing for SMEs",
      "cybersecurity best practices",
      "software development trends",
      "automation and jobs",
      "digital transformation in HR",
    ],
  },
} as const;

export type ThemeId = keyof typeof THEMES;
export type Theme = (typeof THEMES)[ThemeId];

export function getThemesForThisWeek(): [ThemeId, ThemeId] {
  const ids = Object.keys(THEMES) as ThemeId[];
  const weekNumber = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000));
  const first = ids[weekNumber % ids.length];
  const second = ids[(weekNumber + 1) % ids.length];
  return [first, second];
}