import {
  Code2,
  Users,
  ShieldCheck,
  Globe,
  Clock,
  Zap,
  LineChart,
  CheckCircle,
  MapPin,
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
  tagline: "Remote IT Hiring & Global Talent",
  eyebrow: "Worldwide Tech Recruitment",
  title: "Hire Beyond Borders. Build Exceptional Remote Teams.",
  description:
    "We connect ambitious companies with world-class IT professionals. Expand your talent reach, build distributed teams that thrive, and hire the best — wherever they are.",
}

export const STATS: StatItem[] = [
  { value: "40+", label: "Countries we source from" },
  { value: "500+", label: "Remote placements made" },
  { value: "94%", label: "12-month retention rate" },
  { value: "2–3", label: "Weeks average to hire" },
]

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Define the Role & Team",
    description:
      "We start by understanding your product, stack, and team culture — not just the job spec. The more context you share, the sharper our global search.",
    icon: Users,
  },
  {
    number: "02",
    title: "Search Across Countries",
    description:
      "We tap a deep global network of senior IT professionals actively seeking remote roles — engineers, architects, and tech leads who've been pre-assessed before you ever see them.",
    icon: Globe,
  },
  {
    number: "03",
    title: "Shortlist the Best Matches",
    description:
      "You receive a tight shortlist of candidates matched on skills, time zone, language, and culture fit. No noise — just the profiles that are genuinely worth your time.",
    icon: CheckCircle,
  },
  {
    number: "04",
    title: "Interview & Select",
    description:
      "We coordinate interviews, handle scheduling across time zones, and facilitate any technical assessments. You focus on the conversation, we handle the logistics.",
    icon: ShieldCheck,
  },
  {
    number: "05",
    title: "Compliant Hire & Smooth Onboarding",
    description:
      "We guide you through compliant international contracts, payroll structures, and remote onboarding — so your new hire is set up to deliver from day one.",
    icon: Clock,
  },
]

export const SERVICE_CARDS: ServiceCard[] = [
  {
    icon: Code2,
    title: "Full-Stack & Web Engineers",
    description:
      "Remote-ready engineers who own features end-to-end — from UI to database — across modern web stacks, with strong async communication and independent delivery.",
    tags: ["React", "Node.js", "TypeScript", "Next.js", "PostgreSQL"],
    accent: "#085689",
    iconBg: "bg-[#e8f3ff]",
  },
  {
    icon: LineChart,
    title: "Data & AI/ML Specialists",
    description:
      "Global data engineers and ML practitioners who work across time zones, integrate with your existing pipelines, and move fast without sacrificing rigour.",
    tags: ["Python", "AI/ML", "dbt", "Spark", "LLMs"],
    accent: "#ff5d77",
    iconBg: "bg-[#fff0f3]",
  },
  {
    icon: Zap,
    title: "Mobile Engineers",
    description:
      "iOS, Android, and cross-platform engineers from markets with deep mobile expertise — ready to work remotely within your product team structure.",
    tags: ["React Native", "Swift", "Kotlin", "Flutter"],
    accent: "#085689",
    iconBg: "bg-[#e8f3ff]",
  },
  {
    icon: ShieldCheck,
    title: "DevOps & Cloud Engineers",
    description:
      "Remote infrastructure and platform engineers who build, automate, and scale your cloud environment — with clear async communication and strong documentation habits.",
    tags: ["AWS", "Kubernetes", "Terraform", "CI/CD"],
    accent: "#ff5d77",
    iconBg: "bg-[#fff0f3]",
  },
  {
    icon: Users,
    title: "Backend & API Engineers",
    description:
      "Experienced backend professionals from across the globe who design and ship reliable services — with the autonomy and communication skills remote work demands.",
    tags: ["Java", "Go", ".NET", "Python", "Microservices"],
    accent: "#085689",
    iconBg: "bg-[#e8f3ff]",
  },
  {
    icon: MapPin,
    title: "Tech Leads & Architects",
    description:
      "Senior technical leaders who can drive architecture decisions, mentor distributed teams, and align engineering with product — all without needing to be in the room.",
    tags: ["System Design", "Team Leadership", "Architecture", "Strategy"],
    accent: "#ff5d77",
    iconBg: "bg-[#fff0f3]",
  },
]

// ─── Benefits ─────────────────────────────────────────────────────────────────
export const BENEFITS: BenefitItem[] = [
  {
    icon: Globe,
    title: "Truly Global Talent Pool",
    body: "We source from countries, unlocking senior engineers invisible to local-only hiring searches.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Handled for You",
    body: "International contracts, tax structures, and payroll compliance — we navigate the complexity so you don't have to.",
  },
  {
    icon: Clock,
    title: "Time Zone Matched",
    body: "We find professionals with overlap that works for your team — not just technically capable, but practically collaborative.",
  },
  {
    icon: LineChart,
    title: "Built for Long-Term Retention",
    body: "Our 94% 12-month retention rate reflects rigorous culture and communication screening — not just skill matching.",
  },
]

// ─── Global regions ──────────────────────────────────────────────────────────
export interface RegionItem {
  region: string
  highlights: string
  overlap: string
}

export const REGIONS: RegionItem[] = [
  {
    region: "Eastern Europe",
    highlights: "Poland, Ukraine, Romania, Czech Republic",
    overlap: "Excellent EU/UK overlap",
  },
  {
    region: "Latin America",
    highlights: "Brazil, Argentina, Colombia, Mexico",
    overlap: "Strong US timezone alignment",
  },
  {
    region: "South & Southeast Asia",
    highlights: "India, Philippines, Vietnam, Indonesia",
    overlap: "APAC & flexible async coverage",
  },
  {
    region: "Africa & Middle East",
    highlights: "Nigeria, South Africa, Egypt, UAE",
    overlap: "EU overlap & emerging tech hubs",
  },
]

// ─── Trust bar ────────────────────────────────────────────────────────────────
export const TRUST_ITEMS: TrustItem[] = [
  { text: "Countries" },
  { text: "React & Next.js" },
  { text: "Cloud & DevOps" },
  { text: "AI & ML Engineers" },
  { text: "Compliance Included" },
  { text: "Time Zone Matched" },
  { text: "94% Retention Rate" },
  { text: "Remote-First Screening" },
  { text: "Mobile (iOS & Android)" },
  { text: "2–3 Week Placement" },
]

// ─── CTA ──────────────────────────────────────────────────────────────────────
export const CTA_DATA: CtaData = {
  eyebrow: "Start Hiring Globally",
  title: "Your next great hire could be anywhere.",
  description:
    "Tell us the role, your stack, and your time zone needs. We'll come back with a curated shortlist of world-class remote talent within 2–3 weeks.",
  primaryButton: {
    text: "Contact Us",
    href: "/#contact",
  },
  secondaryButton: {
    text: "Download our Remote Hiring Guide",
    href: "/remote-hiring-guide.pdf",
  },
}
