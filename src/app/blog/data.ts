export const HERO_DATA = {
  tagline: "Your hub for",
  title: "Careers, Hiring & IT Trends",
  description:
    "From career advice and hiring strategies to software trends and tech news — everything you need is here.",
}

export type TabKey = "ats" | "companies" | "candidates" | "it" | "fun";

export const TABS: { key: TabKey; label: string }[] = [
  { key: "ats", label: "ATS Software" },
  { key: "companies", label: "For Companies" },
  { key: "candidates", label: "For Candidates" },
  { key: "it", label: "IT News" },
  { key: "fun", label: "Why So Serious?" },
]

export type BlogPost = {
  slug: string
  category: string
  title: string
  description: string
  date: string
  tab: TabKey
}

export const TAB_CHIPS: Record<TabKey, string[]> = {
  ats: ["All", "Features", "Integrations", "Updates", "Tutorials", "Best Practices"],
  companies: ["All", "Employer Branding", "DEI", "HR Trends", "Case Studies", "Scaling"],
  candidates: ["All", "Job Search", "Interview Prep", "Career Growth", "Remote Work", "Salary Tips"],
  it: ["All", "AI & ML", "Cybersecurity", "Cloud", "Dev Tools", "Industry News"],
  fun: ["All", "Stories", "Observations", "Memes", "Hot Takes", "Confessions"],
}
