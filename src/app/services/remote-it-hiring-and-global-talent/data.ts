import {
  Code2,
  Users,
  ShieldCheck,
  Globe,
  Clock,
  Zap,
  LineChart,
  CheckCircle,
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

export interface ServiceCard {
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

export const HERO_DATA: HeroData = {
  tagline: "Contract & Freelance Hiring",
  eyebrow: "Flexible Developer Recruitment",
  title: "Remote IT Hiring & Global Talent",
  description:
    "Pre-vetted contract developers and freelance programmers ready to join your team in 3–10 days. Scale fast, commit less, and ship more — with zero long-term risk.",
}

export const STATS: StatItem[] = [
  { value: "3–10", label: "Days to start" },
  { value: "100+", label: "Vetted developers on-demand" },
  { value: "90%+", label: "Offer acceptance rate" },
  { value: "3–5", label: "Days average to shortlist" },
]

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Tell Us What You Need",
    description:
      "Share your stack, timeline, and team setup. We get up to speed fast so we can start matching immediately — no lengthy briefing decks required.",
    icon: Users,
  },
  {
    number: "02",
    title: "We Source & Screen",
    description:
      "We tap our network of 100+ pre-vetted developers across all major stacks and roles. Only experienced professionals who've already passed our technical bar.",
    icon: Globe,
  },
  {
    number: "03",
    title: "Shortlist in 3–5 Days",
    description:
      "You receive a curated shortlist of matched candidates, complete with profiles, availability, and rate expectations. No noise, no time-wasters.",
    icon: CheckCircle,
  },
  {
    number: "04",
    title: "Interview & Choose",
    description:
      "Meet your favourites and pick the right fit. We facilitate everything — scheduling, rate negotiation, and contract paperwork — so you can move at pace.",
    icon: ShieldCheck,
  },
  {
    number: "05",
    title: "They Join. They Deliver.",
    description:
      "Your developer integrates with your team and jumps straight into sprints. We stay close to ensure a smooth start — and to scale further if needed.",
    icon: Clock,
  },
]

export const SERVICE_CARDS: ServiceCard[] = [
  {
    icon: Code2,
    title: "Full-Stack & Web",
    description:
      "Frontend and backend engineers who can own features end-to-end across modern web stacks — from design system to database.",
    tags: ["React", "Node.js", "TypeScript", "Next.js", "PostgreSQL"],
    accent: "#085689",
    iconBg: "bg-[#e8f3ff]",
  },
  {
    icon: LineChart,
    title: "Data & AI/ML",
    description:
      "Data engineers, ML practitioners, and analytics specialists who move fast and integrate cleanly with your existing data infrastructure.",
    tags: ["Python", "AI/ML", "dbt", "Spark", "LLMs"],
    accent: "#ff5d77",
    iconBg: "bg-[#fff0f3]",
  },
  {
    icon: Zap,
    title: "Mobile Development",
    description:
      "iOS, Android, and cross-platform engineers who build polished, performant apps and slot seamlessly into your product team.",
    tags: ["React Native", "Swift", "Kotlin", "Flutter"],
    accent: "#085689",
    iconBg: "bg-[#e8f3ff]",
  },
  {
    icon: ShieldCheck,
    title: "DevOps & Cloud",
    description:
      "Infrastructure, platform, and SRE engineers to build, automate, and scale your cloud environment without the permanent headcount.",
    tags: ["AWS", "Kubernetes", "Terraform", "CI/CD"],
    accent: "#ff5d77",
    iconBg: "bg-[#fff0f3]",
  },
  {
    icon: Users,
    title: "Backend & APIs",
    description:
      "Experienced backend engineers who design and build reliable services, APIs, and integrations — ready to contribute from day one.",
    tags: ["Java", "Go", ".NET", "Python", "Microservices"],
    accent: "#085689",
    iconBg: "bg-[#e8f3ff]",
  },
]

// ─── Benefits ─────────────────────────────────────────────────────────────────
export const BENEFITS: BenefitItem[] = [
  {
    icon: Zap,
    title: "Speed When It Matters",
    body: "Start in 3–10 days. Skip months of recruitment cycles and get straight to building.",
  },
  {
    icon: ShieldCheck,
    title: "Only Pre-Vetted Talent",
    body: "Every developer in our network has been technically screened before you ever see their name.",
  },
  {
    icon: Clock,
    title: "Fully Flexible Contracts",
    body: "Hourly, weekly, or project-based. Scale up or wind down without long notice periods or complex offboarding.",
  },
  {
    icon: LineChart,
    title: "Immediate Impact",
    body: "Experienced professionals who integrate fast, contribute from sprint one, and don't need hand-holding.",
  },
]

// ─── Trust bar ────────────────────────────────────────────────────────────────
export const TRUST_ITEMS: TrustItem[] = [
  { text: "React & Next.js" },
  { text: "Node & Python" },
  { text: "Cloud & DevOps" },
  { text: "AI & ML Engineers" },
  { text: "Mobile (iOS & Android)" },
  { text: "No Hire, No Fee" },
  { text: "3–10 Day Start" },
  { text: "Hourly or Project-Based" },
]

// ─── CTA ──────────────────────────────────────────────────────────────────────
export const CTA_DATA: CtaData = {
  eyebrow: "Ready to Move Fast?",
  title: "Get developers on your team this week.",
  description:
    "Tell us your stack and timeline. We'll come back with a shortlist of matched, available developers within 3–5 days.",
  primaryButton: {
    text: "Contact Us",
    href: "/#contact",
  },
  secondaryButton: {
    text: "Download our Contract Hiring Guide",
    href: "/contract-hiring-guide.pdf",
  },
}
