import {
  Code2,
  Users,
  ShieldCheck,
  Globe,
  Clock,
  Zap,
  LineChart,
  CheckCircle,
  Layers,
  Smartphone,
  Crown,
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
  href: string
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
  secondaryButton: { text: string; href: string },
  methodCTA: { text: string; href: string },
  secondMethodCTA: { text: string; href: string },
  advantageCTA: { text: string; href: string },

}

export const HERO_DATA: HeroData = {
  tagline: "Contract freelance",
  eyebrow: "Flexible Developer Recruitment",
  title: "Contract freelance, b2b, Remote Hiring",
  description:
    "Pre-vetted contract developers and freelance programmers ready to join your team in 3–10 days. Scale fast, commit less, and ship more - with zero long-term risk.",
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
      "Share your stack, timeline, and team setup. We get up to speed fast so we can start matching immediately - no lengthy briefing decks required.",
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
      "Meet your favourites and pick the right fit. We facilitate everything - scheduling, rate negotiation, and contract paperwork - so you can move at pace.",
    icon: ShieldCheck,
  },
  {
    number: "05",
    title: "They Join. They Deliver.",
    description:
      "Your developer integrates with your team and jumps straight into sprints. We stay close to ensure a smooth start - and to scale further if needed.",
    icon: Clock,
  },
]

export const SERVICE_CARDS: ServiceCard[] = [
  {
    icon: Code2,
    title: "Software Engineers & Developers",
    description:
      "Full-stack, backend, and frontend engineers who build robust, scalable products - from early-stage MVPs to complex enterprise systems.",
    tags: ["React", "Node.js", "Java", ".NET", "Vue", "Angular", "TypeScript"],
    accent: "#085689",
    iconBg: "bg-[#e8f3ff]",
    href: "/tech-recruitment/#software-engineering",
  },
  {
    icon: Globe,
    title: "DevOps, Cloud & Platform Engineers",
    description:
      "Infrastructure and platform specialists who design, automate, and scale cloud environments for reliability and speed.",
    tags: ["AWS", "Azure", "Kubernetes", "Terraform", "CI/CD"],
    accent: "#ff5d77",
    iconBg: "bg-[#fff0f3]",
    href: "/tech-recruitment/#devops",
  },
  {
    icon: ShieldCheck,
    title: "QA Automation & Security",
    description:
      "Quality and security professionals who embed testing and protection throughout the development lifecycle.",
    tags: ["Selenium", "Cypress", "QA Automation", "DevSecOps", "Manual Testing"],
    accent: "#085689",
    iconBg: "bg-[#e8f3ff]",
    href: "/tech-recruitment/#qa-security",
  },
  {
    icon: LineChart,
    title: "Data Engineering & BI",
    description:
      "Data engineers and BI specialists who build reliable pipelines and turn raw data into actionable business intelligence.",
    tags: ["SQL", "Power BI", "Tableau", "Snowflake", "Spark", "BigQuery"],
    accent: "#ff5d77",
    iconBg: "bg-[#fff0f3]",
    href: "/tech-recruitment/#data-engineering",
  },
  {
    icon: Zap,
    title: "AI / ML Engineers",
    description:
      "Machine learning engineers and AI researchers who design, train, and deploy models that power intelligent products.",
    tags: ["Python", "TensorFlow", "PyTorch", "Deep Learning", "LLMs"],
    accent: "#085689",
    iconBg: "bg-[#e8f3ff]",
    href: "/tech-recruitment/#ai-ml",
  },
  {
    icon: Layers,
    title: "UI / UX & Product Design",
    description:
      "Designers and researchers who craft intuitive, visually compelling experiences that users love and businesses stand behind.",
    tags: ["Figma", "Sketch", "Adobe XD", "InVision", "Prototyping"],
    accent: "#ff5d77",
    iconBg: "bg-[#fff0f3]",
    href: "/tech-recruitment/#ux-ui-design",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "iOS and Android engineers who deliver polished, performant native and cross-platform apps for modern mobile users.",
    tags: ["iOS", "Android", "React Native", "Kotlin", "Swift", "Flutter"],
    accent: "#085689",
    iconBg: "bg-[#e8f3ff]",
    href: "/tech-recruitment/#mobile-development",
  },
  {
    icon: Users,
    title: "Engineering Leadership",
    description:
      "CTOs, VPs of Engineering, Tech Leads, and Engineering Managers who set technical direction and build high-performing teams.",
    tags: ["CTO", "Tech Lead", "Engineering Manager"],
    accent: "#ff5d77",
    iconBg: "bg-[#fff0f3]",
    href: "/tech-recruitment/#engineering-leadership",
  },
  // {
  //   icon: Crown,
  //   title: "VP Engineering & Executive Search",
  //   description:
  //     "Confidential, partner-led search for VP Engineering, CTO, and C-suite technology leaders. We go beyond the active market — mapping, approaching, and securing the best operators regardless of whether they're looking.",
  //   tags: ["VP Engineering", "CTO", "C-Suite", "Executive Search", "Confidential", "Headhunting"],
  //   accent: "#ff5d77",
  //   iconBg: "bg-[#fff0f3]",
  //   href: "/services/confidential-headhunting-executive-search",
  // },
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
    href: "/contacts",
  },
  secondaryButton: {
    text: "See how we work",
    href: "/process",
  },
  methodCTA: {
    text: "Start hiring",
    href: "/contacts",
  },
  secondMethodCTA: {
    text: "Need permanent hires?",
    href: "/services/permanent-it-recruitment",
  },
  advantageCTA: {
    text: "Want to convert a contractor to full-time?",
    href: "/services/employer-of-record",
  }
}
