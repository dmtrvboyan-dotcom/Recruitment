import {
  FileText,
  Calculator,
  Receipt,
  ShieldCheck,
  Scale,
  Globe,
  Users,
  Clock,
  CheckCircle,
  LineChart,
  Building2,
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
  tagline: "IT Payroll, Compliance & Business Advisory",
  eyebrow: "Operational Support for Tech Companies",
  title: "Payroll That Grows With Your Business",
  description:
    "We handle the operational complexity that slows growing tech companies down — payroll management, tax coordination, contractor compliance, and international expansion — so your team can focus on building great products.",
}

// ─── Stats ────────────────────────────────────────────────────────────────────
export const STATS: StatItem[] = [
  { value: "400+", label: "IT clients served" },
  { value: "6", label: "Compliance areas covered" },
  { value: "100%", label: "Jurisdiction-specific guidance" },
  { value: "10+", label: "Years supporting tech companies" },
]

// ─── Process steps ────────────────────────────────────────────────────────────
export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Understand Your Structure",
    description:
      "We start by mapping your current setup — headcount, contractor mix, countries of operation, and any immediate compliance gaps. No generic templates.",
    icon: Users,
  },
  {
    number: "02",
    title: "Design the Right Framework",
    description:
      "We propose the payroll structure, contractor classification, and compliance framework that fits your business model — whether you're a startup or a scaling international team.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Handle the Numbers",
    description:
      "Monthly payroll runs, accounting coordination, VAT submissions, and tax filings are executed accurately and on time — every time. You get clear reporting, not spreadsheet chaos.",
    icon: Calculator,
  },
  {
    number: "04",
    title: "Keep You Compliant",
    description:
      "Labor law changes, contractor reclassification risks, and cross-border tax obligations don't wait. We monitor, flag, and adapt proactively — before issues become problems.",
    icon: ShieldCheck,
  },
  {
    number: "05",
    title: "Support International Growth",
    description:
      "Expanding to a new country? We guide you through entity decisions, local employment laws, and payroll setup — so your first hire abroad is as smooth as your hundredth.",
    icon: Globe,
  },
]

// ─── Service cards (the six subcategories) ────────────────────────────────────
export const SERVICE_CARDS: ServiceCard[] = [
  {
    icon: Calculator,
    title: "Payroll Management",
    description:
      "End-to-end payroll processing for IT companies — from salary calculations and net pay disbursements to payslips and year-end reporting. Accurate, timely, and fully documented for every employee and engagement type.",
    tags: ["Salary Processing", "Payslips", "Year-End Reports", "Multi-Currency"],
    accent: "#085689",
    iconBg: "bg-[#e8f3ff]",
  },
  {
    icon: FileText,
    title: "Accounting Coordination",
    description:
      "Bookkeeping, financial record management, and accounting coordination tailored for technology businesses. We maintain clean books, prepare management accounts, and ensure your financials are always investor- and audit-ready.",
    tags: ["Bookkeeping", "Management Accounts", "P&L", "Audit Preparation"],
    accent: "#ff5d77",
    iconBg: "bg-[#fff0f3]",
  },
  {
    icon: Receipt,
    title: "Tax Coordination",
    description:
      "Corporate tax, VAT, employment tax, and personal tax coordination for tech companies and their teams. We identify obligations across jurisdictions, prepare filings, and make sure you're never caught off guard at year-end.",
    tags: ["Corporate Tax", "VAT", "Employment Tax", "Cross-Border"],
    accent: "#085689",
    iconBg: "bg-[#e8f3ff]",
  },
  {
    icon: ShieldCheck,
    title: "Contractor Compliance",
    description:
      "Properly structured B2B and freelance engagements that hold up under scrutiny. We handle contractor agreements, IR35/self-employment assessments, invoicing frameworks, and reclassification risk — protecting both you and your contractors.",
    tags: ["IR35", "B2B Agreements", "Freelance Contracts", "Risk Assessment"],
    accent: "#ff5d77",
    iconBg: "bg-[#fff0f3]",
  },
  {
    icon: Scale,
    title: "Labor Law Coordination",
    description:
      "Employment law is complex and changes constantly. We monitor legislative updates across your operating jurisdictions, advise on employment contracts, working time, benefits obligations, and termination — keeping your HR practices legally sound.",
    tags: ["Employment Contracts", "Working Time", "Termination", "Benefits Law"],
    accent: "#085689",
    iconBg: "bg-[#e8f3ff]",
  },
  {
    icon: Globe,
    title: "International Expansion Support",
    description:
      "Planning to hire in a new country or set up an entity abroad? We provide end-to-end advisory — from market entry structure and local registration to payroll setup and ongoing compliance — so you expand without operational risk.",
    tags: ["Market Entry", "Entity Setup", "Local Payroll", "Multi-Country"],
    accent: "#ff5d77",
    iconBg: "bg-[#fff0f3]",
  },
]

// ─── Benefits ─────────────────────────────────────────────────────────────────
export const BENEFITS: BenefitItem[] = [
  {
    icon: Building2,
    title: "Built Exclusively for IT Companies",
    body: "We don't serve everyone. Our 400+ clients are all technology businesses — which means we understand contractor-heavy teams, equity comp, international hiring, and fast-growth payroll complexity in a way generalist firms simply can't.",
  },
  {
    icon: ShieldCheck,
    title: "Zero Compliance Surprises",
    body: "We proactively monitor tax law changes, contractor classification risks, and cross-border obligations. By the time something changes, you already have a plan — not a penalty.",
  },
  {
    icon: Globe,
    title: "True International Coverage",
    body: "Whether you're hiring your first employee in Eastern Europe or running a multi-country payroll across five jurisdictions, we handle local nuance with the same rigour as domestic operations.",
  },
  {
    icon: Clock,
    title: "Payroll That Never Misses",
    body: "Your team works hard. The least we can do is make sure payday happens without error or delay. Accurate payroll, every cycle, with full documentation and reporting.",
  },
  {
    icon: LineChart,
    title: "Advisory That Scales with You",
    body: "From 5-person startup to 200-person scale-up, our advisory framework grows with your business. As your structure gets more complex, so does our support — without handoffs or account churning.",
  },
  {
    icon: CheckCircle,
    title: "One Trusted Partner for Everything",
    body: "Payroll, tax, accounting, contractor compliance, labor law, and international expansion — all under one roof. No more coordinating between four different firms or falling into the gaps between them.",
  },
]

// ─── What we cover (trust bar / marquee) ─────────────────────────────────────
export const TRUST_ITEMS: TrustItem[] = [
  { text: "Payroll Management" },
  { text: "Accounting Coordination" },
  { text: "Tax Coordination" },
  { text: "Contractor Compliance" },
  { text: "Labor Law Guidance" },
  { text: "International Expansion" },
  { text: "400+ IT Clients" },
  { text: "IR35 & B2B Structuring" },
  { text: "VAT & Corporate Tax" },
  { text: "Multi-Country Payroll" },
]

// ─── Why this matters section cards ──────────────────────────────────────────
export interface WhyItem {
  label: string
  detail: string
}

export const WHY_ITEMS: WhyItem[] = [
  {
    label: "Misclassified contractors",
    detail: "One reclassification ruling can cost more than years of advisory fees. Get it right from day one.",
  },
  {
    label: "Cross-border payroll errors",
    detail: "Paying employees in multiple countries without local compliance support is one of the fastest ways to attract regulatory attention.",
  },
  {
    label: "Founder time drain",
    detail: "Every hour your leadership team spends on payroll queries and tax filings is an hour not spent on product, sales, or hiring.",
  },
  {
    label: "Scaling without structure",
    detail: "The payroll and compliance approach that worked at 10 people will break at 50. Build the right foundations before you need them.",
  },
]

// ─── CTA ──────────────────────────────────────────────────────────────────────
export const CTA_DATA: CtaData = {
  eyebrow: "Let's Talk Compliance",
  title: "Get your payroll and compliance sorted — for good.",
  description:
    "Tell us about your current setup, your team size, and where you're operating. We'll come back with a clear view of what needs to be in place and how we can help.",
  primaryButton: {
    text: "Contact Us",
    href: "/contacts",
  },
  secondaryButton: {
    text: "Learn about our EOR service",
    href: "/services/employer-of-record",
  },
}