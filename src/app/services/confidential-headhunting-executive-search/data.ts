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

export interface IndustryItem {
  sector: string
  roles: string
  detail: string
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
  eyebrow: "Strategic Talent Acquisition",
  title: "Confidential Headhunting and Executive search",
  description:
    "We identify, engage, and place the senior technology leaders your business needs to scale. Discreet, partner-led executive search with a measurable track record across tech leadership hiring.",
}

// ─── Stats ────────────────────────────────────────────────────────────────────
export const STATS: StatItem[] = [
  { value: "2×", label: "Longer retention vs. industry average" },
  { value: "89%", label: "Offer acceptance on first-choice candidates" },
  { value: "92%", label: "Placements still in role after 24 months" },
  { value: "300+", label: "Senior technology mandates completed" },
]

// ─── Process ──────────────────────────────────────────────────────────────────
export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Strategic Brief",
    description:
      "A deep-dive consultation with your leadership team to map technical requirements, team dynamics, company culture, and the long-term strategic context behind the hire. We never start searching before we fully understand what success looks like.",
    icon: Target,
  },
  {
    number: "02",
    title: "Market Mapping & Sourcing",
    description:
      "We conduct proprietary market mapping across active and passive senior candidates — tapping our 15-year network of technology leaders, not just job boards. Many of our best placements were never on the market.",
    icon: Globe,
  },
  {
    number: "03",
    title: "Rigorous Candidate Assessment",
    description:
      "Structured competency interviews, technical evaluation, leadership profiling, and culture-fit analysis — followed by in-depth reference checks. Only candidates who clear our full process reach your shortlist.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Shortlist, Interviews & Offer",
    description:
      "We present a curated shortlist of two to four candidates and manage the full interview and offer process — including negotiation, counter-offer management, and timeline coordination — with complete transparency.",
    icon: Award,
  },
  {
    number: "05",
    title: "Onboarding & Retention Support",
    description:
      "Our commitment doesn't end at acceptance. We support the onboarding process with structured check-ins throughout the first year to protect your investment and maximise long-term retention.",
    icon: Handshake,
  },
]

// ─── Roles We Place ───────────────────────────────────────────────────────────
export const SERVICE_CARDS: ServiceCard[] = [
  {
    icon: Users,
    title: "Technology C-Suite & VP-Level",
    description:
      "CTO, CIO, CISO, VP of Engineering, and VP of Product search for scale-ups, PE-backed businesses, and enterprise organisations navigating technical transformation or rapid growth.",
    tags: ["CTO", "CIO", "CISO", "VP Engineering", "VP Product"],
    accent: "#085689",
    iconBg: "bg-[#e8f3ff]",
  },
  {
    icon: Code2,
    title: "Engineering Leadership",
    description:
      "Head of Engineering, Principal Engineer, Staff Engineer, and Engineering Director placements for product-led companies that need leaders who can build, scale, and retain high-performing teams.",
    tags: ["Head of Engineering", "Engineering Director", "Principal Engineer"],
    accent: "#ff5d77",
    iconBg: "bg-[#fff0f3]",
  },
  {
    icon: LineChart,
    title: "Data, AI & Analytics Leadership",
    description:
      "Chief Data Officer, Head of Data Science, and VP of AI placements for organisations building a data-driven competitive advantage or deploying artificial intelligence at scale.",
    tags: ["CDO", "Head of Data Science", "VP AI", "Head of ML"],
    accent: "#085689",
    iconBg: "bg-[#e8f3ff]",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity & Risk Leadership",
    description:
      "CISO, Head of Security, and Head of Compliance search for regulated industries and high-growth technology businesses where security leadership is board-level critical.",
    tags: ["CISO", "Head of Security", "Head of Compliance", "DPO"],
    accent: "#ff5d77",
    iconBg: "bg-[#fff0f3]",
  },
  {
    icon: Zap,
    title: "Product & Design Leadership",
    description:
      "CPO, Head of Product, and VP of Design search for companies where product strategy is the primary growth lever — from Series B scale-ups to publicly listed software businesses.",
    tags: ["CPO", "Head of Product", "VP Design", "Head of UX"],
    accent: "#085689",
    iconBg: "bg-[#e8f3ff]",
  },
]

// ─── Industries ───────────────────────────────────────────────────────────────
export const INDUSTRIES: IndustryItem[] = [
  {
    sector: "Fintech & Financial Services",
    roles: "CTO, CISO, Head of Engineering",
    detail:
      "From challenger banks to established institutions undergoing digital transformation — we understand the regulatory and technical complexity of hiring in financial services.",
  },
  {
    sector: "SaaS & B2B Software",
    roles: "VP Engineering, CPO, Head of Product",
    detail:
      "Pre-IPO and growth-stage software businesses scaling product and engineering organisations rapidly and need leaders who've done it before.",
  },
  {
    sector: "Deep Tech & AI",
    roles: "CTO, VP AI, Head of Research",
    detail:
      "Frontier AI labs, robotics, and applied machine learning companies requiring rare, senior technical leadership with genuine domain depth.",
  },
  {
    sector: "PE-Backed & Enterprise",
    roles: "CIO, CTO, Head of Transformation",
    detail:
      "Private equity portfolio companies and enterprise organisations navigating technology change, modernisation mandates, or post-acquisition integration.",
  },
]

// ─── Benefits ─────────────────────────────────────────────────────────────────
export const BENEFITS: BenefitItem[] = [
  {
    icon: ShieldCheck,
    title: "Partner-Led, Not Delegated",
    body: "Every engagement is owned by a senior partner from brief to placement — not handed off to junior researchers after the kickoff call.",
  },
  {
    icon: Globe,
    title: "Access to Passive Talent",
    body: "The leaders you need are rarely looking. Our 15-year network means we engage exceptional candidates before they ever consider the open market.",
  },
  {
    icon: Award,
    title: "92% Two-Year Retention",
    body: "Our leadership and culture profiling methodology produces placements that stay, perform, and grow with your business long after the hire.",
  },
  {
    icon: Clock,
    title: "Discreet by Design",
    body: "We operate with full confidentiality at every stage — essential for sensitive leadership transitions and market-sensitive executive appointments.",
  },
]

// ─── Trust bar ────────────────────────────────────────────────────────────────
export const TRUST_ITEMS: TrustItem[] = [
  { text: "CTO & CIO Search" },
  { text: "Fintech & SaaS" },
  { text: "VP Engineering" },
  { text: "Deep Tech & AI" },
  { text: "PE-Backed Companies" },
  { text: "Partner-Led Mandates" },
  { text: "92% Two-Year Retention" },
  { text: "300+ Senior Placements" },
  { text: "Confidential Search" },
  { text: "Passive Candidate Access" },
]

// ─── CTA ──────────────────────────────────────────────────────────────────────
export const CTA_DATA: CtaData = {
  eyebrow: "Start a Search",
  title: "The right technology leader changes everything.",
  description:
    "Share your brief — or simply the challenge you're trying to solve. We'll respond within 24 hours with a tailored search strategy and current market intelligence.",
  primaryButton: {
    text: "Start a Search",
    href: "/#contact",
  },
  secondaryButton: {
    text: "Learn how we do it",
    href: "/process",
  },
}
