import {
  Code2,
  Users,
  ShieldCheck,
  Globe,
  Clock,
  Zap,
  LineChart,
  CheckCircle,
  FileSearch,
  Layers,
  Timer,
  Rocket,
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
  contractTypes: string
}

export interface BenefitItem {
  icon: LucideIcon
  title: string
  body: string
  stat: string
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

export interface FaqItem {
  question: string
  answer: string
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
export const HERO_DATA: HeroData = {
  tagline: "On-Demand Tech Talent",
  eyebrow: "Employer of Record (EOR)",
  title: "Hire in Eastern Europe without opening a local entity",
  description:
    "Deploy skilled IT contractors and specialist freelancers exactly when you need them — no long-term overhead, no hiring delays. From sprint-based squads to multi-month delivery teams, we match the right talent to your project timeline.",
}

// ─── Stats ────────────────────────────────────────────────────────────────────
export const STATS: StatItem[] = [
  { value: "6+", label: "Eastern European countries covered" },
  { value: "100%", label: "Local compliance guaranteed" },
  { value: "2–4 wks", label: "Average employee onboarded" },
  { value: "Zero", label: "Local entity setup required" },
]
// ─── Process ──────────────────────────────────────────────────────────────────
export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Project Brief",
    description:
      "We deep-dive into your project scope, tech stack, timeline, and team dynamics — so we source professionals who can contribute from day one, not week three.",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Rapid Talent Sourcing",
    description:
      "We tap our pre-vetted contractor network and use active market mapping to surface available specialists — including passive talent not found on job boards.",
    icon: Globe,
  },
  {
    number: "03",
    title: "Technical Screening",
    description:
      "Every candidate undergoes role-specific technical assessment, availability confirmation, and reference checks before they reach your desk.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Curated Shortlist",
    description:
      "You receive a focused shortlist of 3–5 interview-ready candidates, complete with rate benchmarks and our assessment notes — no noise, just signal.",
    icon: CheckCircle,
  },
  {
    number: "05",
    title: "Deployment & Ongoing Support",
    description:
      "We handle contracting logistics, manage the onboarding handoff, and stay close throughout the engagement — ready to extend, replace, or scale as your project evolves.",
    icon: Rocket,
  },
]

// ─── Services ─────────────────────────────────────────────────────────────────
export const SERVICE_CARDS: ServiceCard[] = [
  {
    icon: Code2,
    title: "Software Engineering Contractors",
    description:
      "Full-stack, backend, frontend, and mobile developers available for fixed-term sprints, product builds, legacy migrations, or platform scaling projects.",
    tags: ["React", "Node.js", "Python", "Java", "AWS"],
    accent: "#085689",
    iconBg: "bg-[#e8f3ff]",
    contractTypes: "Sprint · Fixed-Term · Rolling",
  },
  {
    icon: LineChart,
    title: "Data, AI & Analytics",
    description:
      "Data engineers, ML specialists, and BI developers placed into project teams that need to move fast on pipelines, models, and insights delivery.",
    tags: ["Python", "SQL", "TensorFlow", "Spark", "dbt"],
    accent: "#ff5d77",
    iconBg: "bg-[#fff0f3]",
    contractTypes: "Project · Retainer · Advisory",
  },
  {
    icon: Zap,
    title: "Cloud & DevOps Engineers",
    description:
      "Infrastructure, platform, and SRE contractors to build, migrate, or stabilise cloud environments — without locking in permanent headcount.",
    tags: ["AWS", "GCP", "Azure", "Kubernetes", "Terraform"],
    accent: "#085689",
    iconBg: "bg-[#e8f3ff]",
    contractTypes: "Short-Term · Long-Term · Hybrid",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity Specialists",
    description:
      "Pen testers, security architects, and compliance consultants brought in for audits, incident response, product hardening, and regulatory programmes.",
    tags: ["Pen Testing", "ISO 27001", "SOC 2", "Cloud Security"],
    accent: "#ff5d77",
    iconBg: "bg-[#fff0f3]",
    contractTypes: "Audit · Engagement · Ongoing",
  },
  {
    icon: Layers,
    title: "Product & UX Contractors",
    description:
      "Contract product managers, UX designers, and researchers embedded into delivery teams to drive roadmap execution and user-centred design.",
    tags: ["Product Strategy", "Figma", "UX Research", "Agile"],
    accent: "#085689",
    iconBg: "bg-[#e8f3ff]",
    contractTypes: "Discovery · Delivery · Fractional",
  },
  {
    icon: Users,
    title: "Project & Programme Managers",
    description:
      "Delivery leads, scrum masters, and programme managers who keep complex IT projects on time, on budget, and on scope — from day one.",
    tags: ["Scrum", "PMP", "SAFe", "Prince2", "Change Mgmt"],
    accent: "#ff5d77",
    iconBg: "bg-[#fff0f3]",
    contractTypes: "Fixed · Outcome-Based · Interim",
  },
]

// ─── Benefits ─────────────────────────────────────────────────────────────────
export const BENEFITS: BenefitItem[] = [
  {
    icon: Timer,
    title: "Speed to Productivity",
    body: "Contract hires are project-ready professionals. No ramp-up curve — they integrate fast and deliver from week one.",
    stat: "Avg. 5–7 days to deploy",
  },
  {
    icon: Zap,
    title: "Flexible Workforce Scaling",
    body: "Scale up for peak delivery, then scale back without redundancy risk. Contract hiring gives you elastic capacity on demand.",
    stat: "Zero long-term overhead",
  },
  {
    icon: ShieldCheck,
    title: "Pre-Vetted Talent Pool",
    body: "Every contractor in our network has been technically assessed and reference-checked. You interview people who are genuinely qualified.",
    stat: "100% screened before shortlist",
  },
  {
    icon: Globe,
    title: "Specialist Access, Instantly",
    body: "Access niche skills — AI engineers, security architects, cloud specialists — that are hard to find and expensive to hire full-time.",
    stat: "800+ active specialist contractors",
  },
]

// ─── Trust bar ────────────────────────────────────────────────────────────────
export const TRUST_ITEMS: TrustItem[] = [
  { text: "Fintech & Banking" },
  { text: "SaaS Scale-ups" },
  { text: "E-Commerce Platforms" },
  { text: "AI & Deep Tech" },
  { text: "Enterprise IT" },
  { text: "Cybersecurity Firms" },
  { text: "Cloud-Native Startups" },
  { text: "Digital Transformation" },
  { text: "HealthTech" },
  { text: "Contract Specialists" },
]

// ─── FAQ ──────────────────────────────────────────────────────────────────────


// ─── CTA ──────────────────────────────────────────────────────────────────────
export const CTA_DATA: CtaData = {
  eyebrow: "Start Your Project",
  title: "Need a contractor deployed this week?",
  description:
    "Share your project brief and we'll have a qualified shortlist in your inbox within 48 hours — no retainer required, no long-term commitment.",
  primaryButton: {
    text: "Submit a Brief",
    href: "/#contact",
  },
  secondaryButton: {
    text: "See how it works",
    href: "/process",
  },
}
