import {
  Code2,
  Users,
  ShieldCheck,
  Globe,
  Clock,
  Zap,
  LineChart,
  Target,
  Award,
  Handshake,
  Lock,
  TrendingUp,
  RefreshCw,
  Rocket,
  EyeOff,
  UserCog,
  DollarSign,
  Settings2,
  BarChart2,
  Scale,
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

export interface IndustryItem {
  sector: string
  roles: string
  detail: string
}

export interface RolePractice {
  number: string
  icon: LucideIcon
  practice: string
  description: string
  roles: string[]
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
  tagline: "Executive Search & Headhunting",
  eyebrow: "Executive Search, Explained",
  title: "Executive Search, Explained",
  description:
    "A guide to confidential executive search – when to use it, how it works, and the impact it creates.",
}

// ─── Process ──────────────────────────────────────────────────────────────────
export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Alignment",
    description:
      "We understand your business, leadership needs, culture and success profile.",
    icon: Target,
  },
  {
    number: "02",
    title: "Research & Market Mapping",
    description:
      "We map the market, identify top talent and create a targeted search strategy.",
    icon: Globe,
  },
  {
    number: "03",
    title: "Confidential Outreach",
    description:
      "We discreetly engage and assess passive candidates through trusted conversations.",
    icon: Lock,
  },
  {
    number: "04",
    title: "Evaluation & Shortlisting",
    description:
      "We conduct in-depth evaluation and present only the right leaders for your consideration.",
    icon: Award,
  },
  {
    number: "05",
    title: "Offer & Transition Support",
    description:
      "We support negotiations and ensure a smooth, confidential transition and onboarding.",
    icon: Handshake,
  },
]

// ─── Roles We Place ───────────────────────────────────────────────────────────
export const ROLE_PRACTICES: RolePractice[] = [
  {
    number: "01",
    icon: UserCog,
    practice: "HR, People & HR Leadership",
    description:
      "Executive HR and People leadership search for organisations scaling internationally, navigating transformation, or building high-performance cultures.",
    roles: ["CHRO", "VP People", "HR Director", "HR Manager", "Talent Acquisition Director", "People Operations Lead"],
  },
  {
    number: "02",
    icon: DollarSign,
    practice: "Commercial & Revenue Leadership",
    description:
      "Revenue and commercial leadership placements for SaaS, technology, and growth-stage organisations expanding into new markets or restructuring sales operations.",
    roles: ["CRO", "VP Sales", "Sales Director", "GTM Leader", "Revenue Operations"],
  },
  {
    number: "03",
    icon: Settings2,
    practice: "Operations & Transformation Leadership",
    description:
      "Operational and transformation leaders who bring structure, scale and delivery rigour to complex, fast-moving organisations.",
    roles: ["COO", "Operations Director", "Transformation Lead", "Program Director", "Delivery Director"],
  },
  {
    number: "04",
    icon: BarChart2,
    practice: "Finance & Strategy Leadership",
    description:
      "Finance and strategy executives who bring commercial acumen, capital discipline and long-range thinking to boards and leadership teams.",
    roles: ["CFO", "FP&A Director", "Finance Director", "Strategy Director", "M&A Lead"],
  },
  {
    number: "05",
    icon: Scale,
    practice: "Legal, Compliance & Governance",
    description:
      "Senior legal, compliance and governance leaders for organisations navigating regulatory complexity, M&A activity, or board-level accountability.",
    roles: ["General Counsel", "Legal Director", "Compliance Director", "Governance Lead", "Risk Director"],
  },
]

// ─── Roles We Place (Info boxes) ──────────────────────────────────────────────
export const SERVICE_CARDS: ServiceCard[] = [
  {
    icon: Target,
    title: "What Is Executive Search?",
    description:
      "Executive search is a specialised recruitment approach used to identify and attract senior leaders and experts for critical roles. Unlike traditional recruitment, it is proactive, research-driven and focused on confidentially engaging top talent across the market.",
    tags: ["Proactive", "Research-Driven", "Confidential", "Senior Leaders"],
    accent: "#085689",
    iconBg: "bg-[#e8f3ff]",
    href: "/services/executive-search",
  },
  {
    icon: Clock,
    title: "When Should You Use It?",
    description:
      "Executive search is ideal when: the role is business-critical, you need to replace or transition a senior leader, the market for talent is competitive, confidentiality is essential, or you want the best, not just active candidates.",
    tags: ["Business-Critical Roles", "Senior Transitions", "Confidential Hires"],
    accent: "#ff5d77",
    iconBg: "bg-[#fff0f3]",
    href: "/services/when-to-use-executive-search",
  },
  {
    icon: ShieldCheck,
    title: "Why Confidentiality Matters?",
    description:
      "Leadership transitions, replacements or new hires at the top level require discretion to avoid uncertainty, rumours and disruption. We ensure a completely confidential process, protecting your organisation at every step.",
    tags: ["Discretion", "Zero Disruption", "Protected Process"],
    accent: "#085689",
    iconBg: "bg-[#e8f3ff]",
    href: "/services/confidential-executive-search",
  },
]

// ─── Industries (When Companies Use Executive Search) ─────────────────────────
export const INDUSTRIES: IndustryItem[] = [
  {
    sector: "Leadership Replacement",
    roles: "CTO, CEO, C-Suite",
    detail:
      "Replacing underperforming or departing leaders with minimal disruption.",
  },
  {
    sector: "Succession Planning",
    roles: "Board, VP-Level",
    detail:
      "Building a strong pipeline of future-ready leaders.",
  },
  {
    sector: "Business Growth",
    roles: "CPO, VP Engineering, VP Sales",
    detail:
      "Hiring transformational leaders to scale, expand and innovate.",
  },
  {
    sector: "Transformation & Change",
    roles: "CIO, CTO, Head of Transformation",
    detail:
      "Bringing in leaders to drive change, restructure and optimise.",
  },
  {
    sector: "Confidential Hiring",
    roles: "CISO, C-Suite, Senior Directors",
    detail:
      "Hiring for sensitive roles where confidentiality is mission-critical.",
  },
]

// ─── Benefits ─────────────────────────────────────────────────────────────────
export const BENEFITS: BenefitItem[] = [
  {
    icon: Lock,
    title: "Confidential by Design",
    body: "Every search is handled with complete discretion to protect your business, people and reputation.",
  },
  {
    icon: Users,
    title: "Access to Hidden Talent",
    body: "We engage passive, in-demand leaders who are not visible through traditional hiring.",
  },
  {
    icon: Target,
    title: "Strategic & Consultative",
    body: "We act as your trusted advisor, aligning the right leadership with your long-term business goals.",
  },
  {
    icon: TrendingUp,
    title: "High Impact Outcomes",
    body: "We deliver transformational leaders who drive growth, change and long-term value.",
  },
]

// ─── Trust bar ────────────────────────────────────────────────────────────────
export const TRUST_ITEMS: TrustItem[] = [
  { text: "Confidential by Design" },
  { text: "Access to Hidden Talent" },
  { text: "Strategic & Consultative" },
  { text: "High Impact Outcomes" },
  { text: "Partner-Led Mandates" },
  { text: "Senior Leadership Experts" },
  { text: "Proactive Research-Driven" },
  { text: "Trusted by Leading Organisations" },
  { text: "Discreet Executive Search" },
  { text: "Passive Candidate Access" },
]

// ─── CTA ──────────────────────────────────────────────────────────────────────
export const CtaData: CtaData = {
  eyebrow: "Get Started",
  title: "Your Search. Our Expertise. Total Confidentiality.",
  description:
    "We help organisations hire exceptional leaders through a confidential, intelligent and results-driven executive search process.",
  primaryButton: {
    text: "Let's Discuss Your Search",
    href: "/contacts",
  },
  secondaryButton: {
    text: "Learn how we do it",
    href: "/process",
  },
}

export const CTA_DATA = CtaData