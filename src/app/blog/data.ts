export const HERO_DATA = {
  tagline: "Your hub for",
  title: "Careers, Hiring & IT Trends",
  description:
    "From career advice and hiring strategies to software trends and tech news — everything you need is here.",
}

export type TabKey = "ats" | "companies" | "candidates" | "it"

export const TABS: { key: TabKey; label: string }[] = [
  { key: "ats", label: "ATS Software" },
  { key: "companies", label: "For Companies" },
  { key: "candidates", label: "For Candidates" },
  { key: "it", label: "IT News" },
]

export type BlogPost = {
  slug: string
  category: string
  title: string
  description: string
  date: string
}

export const BLOG_POSTS: Record<TabKey, { chips: string[]; posts: BlogPost[] }> = {
  ats: {
    chips: ["All", "Features", "Integrations", "Updates", "Tutorials", "Best Practices"],
    posts: [
      {
        slug: "automate-hiring-pipeline",
        category: "Features",
        title: "Automate Your Hiring Pipeline with Smart Workflows",
        description: "Discover how automated stages cut time-to-hire by up to 40%.",
        date: "Apr 20, 2026",
      },
      {
        slug: "connect-ats-hr-tools",
        category: "Integrations",
        title: "Connect Your ATS to 50+ HR Tools Seamlessly",
        description: "From Slack to Workday — integrations that just work out of the box.",
        date: "Apr 15, 2026",
      },
      {
        slug: "spring-release-reporting",
        category: "Updates",
        title: "Spring Release: New Reporting Dashboard & AI Scoring",
        description: "Our biggest product update this quarter is here.",
        date: "Apr 10, 2026",
      },
    ],
  },
  companies: {
    chips: ["All", "Employer Branding", "DEI", "HR Trends", "Case Studies", "Scaling"],
    posts: [
      {
        slug: "career-page-recruitment-tool",
        category: "Employer Branding",
        title: "Why Your Career Page Is Your Most Powerful Recruitment Tool",
        description: "A well-crafted careers page converts 3× more passive candidates.",
        date: "Apr 22, 2026",
      },
      {
        slug: "inclusive-job-descriptions",
        category: "DEI",
        title: "Building Inclusive Job Descriptions That Attract Diverse Talent",
        description: "Practical language tips backed by research.",
        date: "Apr 18, 2026",
      },
      {
        slug: "2026-talent-market",
        category: "HR Trends",
        title: "The 2026 Talent Market: What Hiring Managers Must Know",
        description: "Key shifts shaping the recruitment landscape this year.",
        date: "Apr 12, 2026",
      },
    ],
  },
  candidates: {
    chips: ["All", "Job Search", "Interview Prep", "Career Growth", "Remote Work", "Salary Tips"],
    posts: [
      {
        slug: "questions-to-ask-interview",
        category: "Interview Prep",
        title: "12 Questions You Should Always Ask at the End of an Interview",
        description: "Turn the tables and learn what really matters before you accept.",
        date: "Apr 24, 2026",
      },
      {
        slug: "cv-ats-filters-2026",
        category: "Job Search",
        title: "How to Write a CV That Gets Past ATS Filters in 2026",
        description: "Format, keywords, and length — the definitive guide.",
        date: "Apr 19, 2026",
      },
      {
        slug: "salary-negotiation-scripts",
        category: "Salary Tips",
        title: "Negotiating Your Offer: Scripts That Actually Work",
        description: "Real phrases to confidently negotiate your compensation package.",
        date: "Apr 14, 2026",
      },
    ],
  },
  it: {
    chips: ["All", "AI & ML", "Cybersecurity", "Cloud", "Dev Tools", "Industry News"],
    posts: [
      {
        slug: "generative-ai-dev-teams",
        category: "AI & ML",
        title: "How Generative AI Is Reshaping Software Development Teams",
        description: "From copilots to autonomous agents — what's real today.",
        date: "Apr 26, 2026",
      },
      {
        slug: "zero-trust-architecture",
        category: "Cybersecurity",
        title: "Zero-Trust Architecture: A Practical Guide for Growing Companies",
        description: "Security posture improvements without slowing down your team.",
        date: "Apr 21, 2026",
      },
      {
        slug: "multi-cloud-vs-hybrid",
        category: "Cloud",
        title: "Multi-Cloud vs Hybrid Cloud: Choosing the Right Strategy in 2026",
        description: "Cost, flexibility, and risk — a balanced breakdown.",
        date: "Apr 17, 2026",
      },
    ],
  },
}
