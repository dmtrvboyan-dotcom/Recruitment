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
  secondaryButton: { text: string; href: string }
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
export const HERO_DATA: HeroData = {
  tagline: "Permanent IT Recruitment",
  eyebrow: "Strategic Talent Acquisition",
  title: "Permanent IT Recruitment Services",
  description:
    "Building high-performing tech teams with top-tier professionals who deliver long-term value. We combine technical excellence with deep cultural alignment.",
}

// ─── Stats ────────────────────────────────────────────────────────────────────
export const STATS: StatItem[] = [
  { value: "2×", label: "Longer employee retention" },
  { value: "89%", label: "Stronger cultural alignment" },
  { value: "70%+", label: "Reduction in hiring risk" },
  { value: "150+", label: "Successful IT placements" },
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

// ─── Services / Specialisms ───────────────────────────────────────────────────
export const SERVICE_CARDS: ServiceCard[] = [
  {
    icon: Code2,
    title: "Software Engineers & Developers",
    description:
      "Full-stack, backend, and frontend engineers who build robust, scalable products — from early-stage MVPs to complex enterprise systems.",
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
    tags: ["CTO", "VP Engineering", "Tech Lead", "Engineering Manager"],
    accent: "#ff5d77",
    iconBg: "bg-[#fff0f3]",
    href: "/tech-recruitment/#engineering-leadership",
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
    "Tell us about your hiring needs and we'll provide a tailored talent strategy and market insights within 48 hours.",
  primaryButton: {
    text: "Start a Search",
    href: "/contacts",
  },
  secondaryButton: {
    text: "Learn how we do it",
    href: "/process",
  },
}
