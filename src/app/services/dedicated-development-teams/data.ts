import {
  Users,
  ShieldCheck,
  Globe,
  Clock,
  Zap,
  Settings,
  Building2,
  BarChart3,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react"

// ─── Types ────────────────────────────────────────────────────────────────────
export interface HeroData {
  tagline: string
  eyebrow: string
  title: string
  description: string
}

export interface StatItem {
  value: string
  label: string
}

export interface ProcessStep {
  number: string
  title: string
  description: string
  icon: LucideIcon
}

export interface RoleCard {
  icon: LucideIcon
  title: string
  description: string
  tags: string[]
  accent: string
  iconBg: string
}

export interface BenefitItem {
  icon: LucideIcon
  title: string
  body: string
}

export interface TrustItem {
  text: string
}

export interface CtaData {
  eyebrow: string
  title: string
  description: string
  primaryButton: { text: string; href: string }
  secondaryButton: { text: string; href: string }
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
export const HERO_DATA: HeroData = {
  tagline: "Staff Augmentation & Dedicated Teams",
  eyebrow: "Integrated Team Extension",
  title: "Dedicated Development Teams in Bulgaria",
  description:
    "Build a fully integrated development team in Bulgaria with predictable costs and zero local administration. We handle recruitment, employment, payroll, legal compliance and ongoing team management — so you can focus entirely on building.",
}

// ─── Stats ────────────────────────────────────────────────────────────────────
export const STATS: StatItem[] = [
  { value: "30–50%", label: "Lower team cost vs. Western Europe" },
  { value: "2–4 wks", label: "Average team onboarding time" },
  { value: "100%", label: "Legal & payroll compliance handled" },
  { value: "15+", label: "Years placing engineers in Bulgaria" },
]

// ─── Process ──────────────────────────────────────────────────────────────────
export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Team Brief & Scoping",
    description:
      "We start with a deep-dive into your product, tech stack, team culture and growth trajectory to define exactly who you need and how the team should operate.",
    icon: Users,
  },
  {
    number: "02",
    title: "Talent Sourcing & Vetting",
    description:
      "We map the Bulgarian and Eastern European talent market, approach the right engineers and conduct technical and cultural assessments on your behalf.",
    icon: Globe,
  },
  {
    number: "03",
    title: "Employment & Legal Setup",
    description:
      "All engineers are employed compliantly under our legal entity in Bulgaria. We handle contracts, tax, social contributions and HR paperwork end-to-end.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Team Integration",
    description:
      "Your dedicated team is fully embedded into your processes, tools and culture. They work your hours, attend your standups and report directly to your leadership.",
    icon: Building2,
  },
  {
    number: "05",
    title: "Ongoing Management & Growth",
    description:
      "We provide continuous HR support, handle retention, performance reviews and scaling as your team grows — so you never deal with local administration.",
    icon: BarChart3,
  },
]

// ─── Roles ────────────────────────────────────────────────────────────────────
export const ROLE_CARDS: RoleCard[] = [
  {
    icon: Settings,
    title: "Full-Stack & Backend Engineers",
    description:
      "Experienced engineers who own features end-to-end — from API design to database optimisation and frontend delivery.",
    tags: ["Node.js", "Python", "Java", ".NET", "Go", "PostgreSQL", "TypeScript"],
    accent: "#085689",
    iconBg: "bg-[#e8f3ff]",
  },
  {
    icon: Globe,
    title: "Frontend Engineers",
    description:
      "UI specialists who build fast, accessible and well-crafted interfaces that users trust and products stand behind.",
    tags: ["React", "Vue", "Angular", "Next.js", "TypeScript", "Figma"],
    accent: "#ff5d77",
    iconBg: "bg-[#fff0f3]",
  },
  {
    icon: Zap,
    title: "DevOps & Cloud Engineers",
    description:
      "Platform engineers who design, automate and scale cloud infrastructure so your product can move fast and stay reliable.",
    tags: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform", "CI/CD"],
    accent: "#085689",
    iconBg: "bg-[#e8f3ff]",
  },
  {
    icon: BarChart3,
    title: "Data & ML Engineers",
    description:
      "Engineers who build robust data pipelines and intelligent features — from ETL and warehousing to ML model deployment.",
    tags: ["Python", "Spark", "dbt", "Snowflake", "PyTorch", "Airflow"],
    accent: "#ff5d77",
    iconBg: "bg-[#fff0f3]",
  },
  {
    icon: ShieldCheck,
    title: "QA & Automation Engineers",
    description:
      "Quality engineers who embed testing into your pipeline and ensure every release ships with confidence.",
    tags: ["Cypress", "Selenium", "Playwright", "Jest", "QA Strategy"],
    accent: "#085689",
    iconBg: "bg-[#e8f3ff]",
  },
  {
    icon: Users,
    title: "Engineering Managers & Tech Leads",
    description:
      "Senior leaders who manage your dedicated team on the ground — bridging communication, technical direction and delivery.",
    tags: ["Team Leadership", "Architecture", "Agile", "Roadmap Planning"],
    accent: "#ff5d77",
    iconBg: "bg-[#fff0f3]",
  },
]

// ─── Benefits ─────────────────────────────────────────────────────────────────
export const BENEFITS: BenefitItem[] = [
  {
    icon: ShieldCheck,
    title: "Zero Admin Overhead",
    body: "No entity setup, no local HR complexity. We handle employment, payroll and compliance in full.",
  },
  {
    icon: HeartHandshake,
    title: "Fully Integrated, Not Outsourced",
    body: "Your team works as an extension of your organisation — same tools, same hours, same culture.",
  },
  {
    icon: Clock,
    title: "Predictable Monthly Costs",
    body: "Fixed, transparent pricing with no hidden employer costs or unexpected legal overheads.",
  },
  {
    icon: BarChart3,
    title: "Scale Up or Down Quickly",
    body: "Add or reduce team members as your roadmap evolves — without lengthy hiring or legal processes.",
  },
]

// ─── Trust bar ────────────────────────────────────────────────────────────────
export const TRUST_ITEMS: TrustItem[] = [
  { text: "Product Companies" },
  { text: "SaaS Scaleups" },
  { text: "Fintech" },
  { text: "Deep Tech" },
  { text: "Enterprise IT" },
  { text: "AI & Data Platforms" },
  { text: "Zero Admin Overhead" },
  { text: "Fully Integrated Teams" },
]

// ─── CTA ──────────────────────────────────────────────────────────────────────
export const CTA_DATA: CtaData = {
  eyebrow: "Build Your Team in Bulgaria",
  title: "Start with a team brief.",
  description:
    "Tell us about your product, team size and tech stack. We'll come back within 48 hours with a talent plan and cost model tailored to your needs.",
  primaryButton: {
    text: "Get a Team Brief",
    href: "/contacts",
  },
  secondaryButton: {
    text: "See how we work",
    href: "/process",
  },
}