import {
  BarChart2,
  Users,
  ShieldCheck,
  Globe,
  Clock,
  Zap,
  LineChart,
  FileSearch,
  TrendingUp,
  MapPin,
  Layers,
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

export interface BenchmarkCategory {
  icon: LucideIcon
  title: string
  description: string
  examples: string[]
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

export interface RoleInsightItem {
  role: string
  rangeLabel: string
  note: string
  trend: "up" | "stable" | "high-demand"
}

export interface CtaData {
  eyebrow: string
  title: string
  description: string
  primaryButton: { text: string; href: string },
  secondaryButton: { text: string; href: string },
  whyCTAPrimary: { text: string; href: string },
  methodologyCTA: { text: string; href: string },
  lastCTA: { text: string; href: string }
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
export const HERO_DATA: HeroData = {
  tagline: "IT Salary Benchmarking & Hiring Insights",
  eyebrow: "Tech Compensation Intelligence",
  title: "IT Salary Benchmarking & Hiring Market Insights",
  description:
    "Make smarter, faster hiring decisions with real-time IT salary benchmarks and talent market intelligence. Know exactly what top tech professionals expect - before you make the offer.",
}

// ─── Stats ────────────────────────────────────────────────────────────────────
export const STATS: StatItem[] = [
  { value: "200+", label: "Technology roles benchmarked" },
  { value: "30+", label: "Markets covered globally" },
  { value: "12", label: "Months of rolling data" },
  { value: "10k+", label: "Compensation data points" },
]

// ─── How We Gather Data (Process) ────────────────────────────────────────────
export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Live Placement Data",
    description:
      "Every salary benchmark is anchored in real placements - not survey guesswork. We draw on live offer, acceptance, and negotiation data from active hiring mandates across our client base.",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Market & Network",
    description:
      "We combine placement data with ongoing conversations across our candidate and hiring network - giving us ground-level intelligence on shifting expectations, counter-offers, and emerging salary pressures.",
    icon: Globe,
  },
  {
    number: "03",
    title: "Role & Seniority",
    description:
      "Benchmarks are broken down by role, seniority level, tech stack, and market - so you're comparing like for like, not averaging across roles that have nothing in common.",
    icon: Layers,
  },
  {
    number: "04",
    title: "Location & Remote",
    description:
      "Salary expectations differ significantly by geography and remote policy. Our benchmarks account for on-site, hybrid, and fully remote compensation structures across major hiring markets.",
    icon: MapPin,
  },
  {
    number: "05",
    title: "Quarterly Review",
    description:
      "The tech market moves fast. We refresh our benchmarks quarterly and publish hiring insights reports so your compensation strategy never falls behind the market.",
    icon: TrendingUp,
  },
]

// ─── Benchmark Categories ─────────────────────────────────────────────────────
export const BENCHMARK_CATEGORIES: BenchmarkCategory[] = [
  {
    icon: BarChart2,
    title: "By Role & Seniority",
    description:
      "Granular salary ranges from junior to principal level across every major IT discipline - engineering, data, product, security, and infrastructure.",
    examples: ["Junior → Staff → Principal", "IC vs. Management tracks", "Specialist vs. Generalist"],
    accent: "#085689",
    iconBg: "bg-[#e8f3ff]",
  },
  {
    icon: Globe,
    title: "By Geography & Market",
    description:
      "Compensation varies enormously by location. Our benchmarks cover major UK, European, and global hiring markets - including remote-first salary structures.",
    examples: ["UK & Ireland", "Western Europe", "Remote & distributed"],
    accent: "#ff5d77",
    iconBg: "bg-[#fff0f3]",
  },
  {
    icon: LineChart,
    title: "By Technology Stack",
    description:
      "Certain stacks command a premium. We benchmark compensation by tech stack so you can price rare skills accurately and avoid losing candidates to better-informed competitors.",
    examples: ["AI/ML & LLMs", "Cloud-native & Kubernetes", "React, Node, Go, Rust"],
    accent: "#085689",
    iconBg: "bg-[#e8f3ff]",
  },
  {
    icon: Users,
    title: "By Company Stage",
    description:
      "Salary expectations differ significantly between a seed-stage startup and a publicly listed enterprise. Our data is segmented by company size and funding stage.",
    examples: ["Seed & Series A", "Scale-up & Series B+", "Enterprise & listed"],
    accent: "#ff5d77",
    iconBg: "bg-[#fff0f3]",
  },
  {
    icon: TrendingUp,
    title: "Trends & Market Shifts",
    description:
      "Understand where the market is heading, not just where it is today. Our quarterly insights cover emerging salary pressures, in-demand skills, and hiring sentiment across the sector.",
    examples: ["Quarterly salary movement", "Skills in high demand", "Hiring market sentiment"],
    accent: "#085689",
    iconBg: "bg-[#e8f3ff]",
  },
]

// ─── Role Highlights ──────────────────────────────────────────────────────────
export const ROLE_INSIGHTS: RoleInsightItem[] = [
  {
    role: "Senior Full-Stack Engineer",
    rangeLabel: "£70k – £110k",
    note: "Higher in fintech and AI-product companies",
    trend: "up",
  },
  {
    role: "ML / AI Engineer",
    rangeLabel: "£85k – £140k",
    note: "Fastest-growing salary band in 2024–25",
    trend: "high-demand",
  },
  {
    role: "Head of Engineering",
    rangeLabel: "£120k – £175k",
    note: "Wide variance by team size and industry",
    trend: "stable",
  },
  {
    role: "DevOps / Platform Engineer",
    rangeLabel: "£65k – £105k",
    note: "Kubernetes & IaC experience commands premium",
    trend: "up",
  },
  {
    role: "Senior Data Engineer",
    rangeLabel: "£75k – £115k",
    note: "dbt and cloud-native pipelines most valued",
    trend: "stable",
  },
  {
    role: "CISO / Head of Security",
    rangeLabel: "£130k – £200k",
    note: "Regulated sectors pay at top of range",
    trend: "high-demand",
  },
]

// ─── Benefits ─────────────────────────────────────────────────────────────────
export const BENEFITS: BenefitItem[] = [
  {
    icon: Zap,
    title: "Make Competitive Offers, First Time",
    body: "Offers that land on market rate get accepted faster and trigger fewer counter-offers - saving weeks of lost time in competitive hiring processes.",
  },
  {
    icon: ShieldCheck,
    title: "Retain the Staff You Already Have",
    body: "Pay gaps are a leading cause of unexpected attrition. Benchmarking your existing team against market rates flags retention risk before it becomes a resignation.",
  },
  {
    icon: BarChart2,
    title: "Budget With Precision",
    body: "Accurate salary data turns vague headcount plans into fundable business cases. Know what each role will actually cost before you go to the board.",
  },
  {
    icon: Clock,
    title: "Close Hires Faster",
    body: "Hiring processes stall most often at offer stage. When your numbers are grounded in current market data, negotiations are shorter and acceptance rates are higher.",
  },
]

// ─── Trust bar ────────────────────────────────────────────────────────────────
export const TRUST_ITEMS: TrustItem[] = [
  { text: "200+ Roles Benchmarked" },
  { text: "UK & European Markets" },
  { text: "Stack-Level Granularity" },
  { text: "AI & ML Salary Trends" },
  { text: "Remote Compensation Data" },
  { text: "10,000+ Data Points" },
  { text: "Hiring Market Insights" },
  { text: "Seniority-Level Breakdown" },
  { text: "Company Stage Segmentation" },
]

// ─── CTA ──────────────────────────────────────────────────────────────────────
export const CTA_DATA: CtaData = {
  eyebrow: "Get the Data",
  title: "Stop guessing. Start hiring with market intelligence.",
  description:
    "Request our latest IT salary benchmarking report or speak to our team about a custom compensation analysis for your specific roles and markets.",
  primaryButton: {
    text: "Request Salary Report",
    href: "/contacts",
  },
  whyCTAPrimary: {
    text: "Let's talk about your strategy",
    href: "/contacts",
  },
  methodologyCTA: {
    text: "See the roles we hire for",
    href: "/tech-recruitment",
  },
  secondaryButton: {
    text: "Speak to our team",
    href: "/#contact",
  },
  lastCTA: {
    text: "See how we work",
    href: "/process",
  },
}
