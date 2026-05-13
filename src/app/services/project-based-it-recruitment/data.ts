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

// ─── Hero ─────────────────────────────────────────────────────────────────────
export const HERO_DATA: HeroData = {
  tagline: "Strategic Contract Hiring",
  eyebrow: "Project-Based IT Recruitment",
  title: "Project-Based IT Recruitment Services",
  description:
    "Scale your technology projects faster with highly skilled contract professionals Our services help businesses secure on-demand tech talent from short-term initiatives, all the way to specialist contract assignments.",
}

// ─── Stats ────────────────────────────────────────────────────────────────────
export const STATS: StatItem[] = [
  { value: "48h", label: "Average first shortlist" },
  { value: "5–7 Days", label: "Average time to place" },
  { value: "80%+", label: "Project success rate" },
  { value: "200+", label: "Successful contract placements" },
]

// ─── Process ──────────────────────────────────────────────────────────────────
export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Brief",
    description:
      "In-depth consultation to understand your technical requirements, team dynamics, company culture, and long-term business goals.",
    icon: Users,
  },
  {
    number: "02",
    title: "Market Mapping & Sourcing",
    description:
      "We tap into our extensive IT talent network and use advanced sourcing techniques to identify both active and passive high-caliber candidates.",
    icon: Globe,
  },
  {
    number: "03",
    title: "Rigorous Assessment",
    description:
      "Technical evaluations, competency interviews, cultural fit analysis, and reference checks to ensure candidates are the right long-term match.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Shortlist & Facilitation",
    description:
      "We present a carefully curated shortlist and manage the entire interview, negotiation, and offer process with transparency and speed.",
    icon: CheckCircle,
  },
  {
    number: "05",
    title: "Onboarding & Retention Support",
    description:
      "We support the integration process and provide check-ins to maximise retention and ensure the new hire thrives in your organisation.",
    icon: Clock,
  },
]


export const SERVICE_CARDS: ServiceCard[] = [
  {
    icon: Code2,
    title: "Software Development Contractors",
    description:
      "Contract software engineers, full-stack developers, backend specialists, frontend developers, and cloud engineers.",
    tags: ["React", "Node.js", "Java", "Python", "AWS"],
    accent: "#085689",
    iconBg: "bg-[#e8f3ff]",
  },
  {
    icon: LineChart,
    title: "Data & AI Specialists",
    description:
      "Data scientists, ML engineers, data engineers, and analytics leaders who drive data-informed decision making.",
    tags: ["AI/ML", "Big Data", "Business Intelligence"],
    accent: "#ff5d77",
    iconBg: "bg-[#fff0f3]",
  },
  {
    icon: Zap,
    title: "Product & UX",
    description:
      "Product managers, designers, and researchers who translate business needs into exceptional user experiences.",
    tags: ["Product Strategy", "UI/UX", "SaaS"],
    accent: "#085689",
    iconBg: "bg-[#e8f3ff]",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity & DevOps",
    description:
      "Security engineers, compliance specialists, and DevOps/SRE professionals to protect and scale your infrastructure.",
    tags: ["Cloud Security", "SRE", "Compliance"],
    accent: "#ff5d77",
    iconBg: "bg-[#fff0f3]",
  },
  {
    icon: Users,
    title: "Tech Leadership",
    description:
      "CTO, VP Engineering, Head of Product, and other technology leadership roles that shape your technical vision.",
    tags: ["Leadership", "Scale-ups", "Enterprise"],
    accent: "#085689",
    iconBg: "bg-[#e8f3ff]",
  },
]

// ─── Benefits ─────────────────────────────────────────────────────────────────
export const BENEFITS: BenefitItem[] = [
  {
    icon: ShieldCheck,
    title: "Stronger, More Stable Teams",
    body: "Carefully vetted professionals who stay longer and perform at a high level.",
  },
  {
    icon: Users,
    title: "Superior Cultural Fit",
    body: "Candidates who align with your values, communication style, and work environment.",
  },
  {
    icon: Clock,
    title: "Reduced Hiring Risk",
    body: "Thorough evaluation process leading to confident, high-success placements.",
  },
  {
    icon: Zap,
    title: "Long-term Business Impact",
    body: "Talent that grows with your company and contributes to sustained innovation.",
  },
]

// ─── Trust bar ────────────────────────────────────────────────────────────────
export const TRUST_ITEMS: TrustItem[] = [
  { text: "Tech Scale-ups" },
  { text: "Fintech & SaaS" },
  { text: "Enterprise IT" },
  { text: "AI & Deep Tech" },
  { text: "Cybersecurity" },
  { text: "Cloud & DevOps" },
  { text: "High Retention Rates" },
  { text: "Cultural Alignment Focus" },
]

// ─── CTA ──────────────────────────────────────────────────────────────────────
export const CTA_DATA: CtaData = {
  eyebrow: "Build Your Tech Team",
  title: "Find the right talent for the long term.",
  description:
    "Tell us about your hiring needs and we’ll provide a tailored talent strategy and market insights within 48 hours.",
  primaryButton: {
    text: "Start a Search",
    href: "/#contact",
  },
  secondaryButton: {
    text: "Learn how we do it",
    href: "/process",
  },
}