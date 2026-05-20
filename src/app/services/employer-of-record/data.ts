import {
  Globe,
  ShieldCheck,
  DollarSign,
  TrendingUp,
  FileSearch,
  Users,
  CheckCircle,
  BarChart2,
  Clock,
  Zap,
  type LucideIcon,
} from "lucide-react"

// ─── Types ────────────────────────────────────────────────────────────────────

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

export interface FaqItem {
  question: string
  answer: string
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const HERO = {
  eyebrow: "Employer of Record (EoR)",
  tagline: "Hire anywhere. Quickly. Compliantly.",
  title: "Employer of Record (EoR) Services",
  description:
    "Our Employer of Record services enable you to hire talent in Bulgaria and around the world without setting up a local entity. We handle employment, compliance and payroll — so you can focus on growth.",
}

// ─── Stats ────────────────────────────────────────────────────────────────────

export const STATS: StatItem[] = [
  { value: "6+", label: "Eastern European countries covered" },
  { value: "100%", label: "Local compliance guaranteed" },
  { value: "2–4 wks", label: "Average time to onboard" },
  { value: "Zero", label: "Local entity setup required" },
]

// ─── Trust Items ──────────────────────────────────────────────────────────────

export const TRUST_ITEMS = [
  { text: "Global Hiring" },
  { text: "100% Compliant" },
  { text: "Fast & Flexible" },
  { text: "Zero Entity Setup" },
  { text: "Payroll & Benefits" },
  { text: "Local Labor Law" },
  { text: "Contractor Conversion" },
  { text: "Cross-Border Employment" },
]

// ─── Services ─────────────────────────────────────────────────────────────────

export const SERVICE_CARDS: ServiceCard[] = [
  {
    icon: Globe,
    title: "Hire Without Setting Up an Entity",
    description:
      "Expand into new markets in days, not months. We act as the legal employer of your talent, so you can hire quickly without local entity setup.",
    tags: ["Bulgaria", "Eastern Europe", "Global", "Fast Setup"],
    accent: "#FF6B4A",
    iconBg: "bg-brand-coral/15",
    href: "/eor/hire-without-entity",
  },
  {
    icon: ShieldCheck,
    title: "Stay Compliant Everywhere",
    description:
      "We manage employment contracts, local labor laws, tax, social security and benefits in full compliance with local regulations.",
    tags: ["Labor Law", "Contracts", "Tax & Social", "Benefits"],
    accent: "#FF6B4A",
    iconBg: "bg-brand-coral/15",
    href: "/eor/compliance",
  },
  {
    icon: DollarSign,
    title: "Simplify Payroll & Benefits",
    description:
      "We run payroll, handle deductions, taxes and statutory benefits, ensuring your team is paid accurately and on time, every time.",
    tags: ["Payroll", "Deductions", "Benefits", "Accuracy"],
    accent: "#FF6B4A",
    iconBg: "bg-brand-coral/15",
    href: "/eor/payroll",
  },
  {
    icon: TrendingUp,
    title: "Scale with Confidence",
    description:
      "Whether you're hiring one expert or building a global team, our EoR solution scales with your business needs — without added complexity.",
    tags: ["Scalable", "Global Teams", "Flexible", "Growth"],
    accent: "#FF6B4A",
    iconBg: "bg-brand-coral/15",
    href: "/eor/scale",
  },
]

// ─── Process ──────────────────────────────────────────────────────────────────

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "You Select Your Talent",
    description:
      "You find the right talent — we handle the rest. Share your candidate and we take over the entire employment process from there.",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "We Onboard Your Employee",
    description:
      "We sign the employment contract in compliance with all local laws, completing onboarding quickly and correctly.",
    icon: Users,
  },
  {
    number: "03",
    title: "We Handle Compliance",
    description:
      "We manage taxes, social contributions, benefits and all legal obligations — keeping your workforce fully compliant.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Payroll & Benefits Management",
    description:
      "We run payroll and ensure your team is paid accurately and on time, with all statutory benefits correctly administered.",
    icon: DollarSign,
  },
  {
    number: "05",
    title: "You Manage Their Work",
    description:
      "You manage daily tasks and performance — we manage the employment. Your team delivers results while we handle the rest.",
    icon: CheckCircle,
  },
  {
    number: "06",
    title: "Easily Scale Your Team",
    description:
      "Add new hires anytime, in any country, with complete peace of mind. Scale up or down as your business evolves.",
    icon: TrendingUp,
  },
]

// ─── Why Items ────────────────────────────────────────────────────────────────

export const WHY_ITEMS = [
  "Enter new markets quickly",
  "Reduce legal and financial risk",
  "Ensure full compliance",
  "Avoid entity setup costs",
  "Flexible & cost-effective",
  "Focus on your core business",
  "Expert local support",
  "Scalable for growth",
]

// ─── Benefits ─────────────────────────────────────────────────────────────────

export const BENEFITS: BenefitItem[] = [
  {
    icon: Clock,
    title: "Speed to Market",
    body: "Hire in a new country within days, not months. Our EoR infrastructure removes every bottleneck between you and your next great hire.",
  },
  {
    icon: ShieldCheck,
    title: "Zero Compliance Risk",
    body: "We become the legal employer of record — carrying full responsibility for employment law compliance, social contributions, and statutory obligations.",
  },
  {
    icon: Zap,
    title: "No Entity Overhead",
    body: "Skip the cost and complexity of opening a foreign subsidiary. Test new markets and build remote teams without committing to a permanent structure.",
  },
  {
    icon: BarChart2,
    title: "Full Visibility & Control",
    body: "Retain complete management of your employees day-to-day. We handle the legal layer; you retain full operational control of your team.",
  },
]

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What is an Employer of Record (EoR)?",
    answer: "An Employer of Record is a third-party organisation that legally employs workers on behalf of another company. The EoR handles all formal employment responsibilities — contracts, payroll, taxes, and compliance — while the client company directs the employee's actual work.",
  },
  {
    question: "How is EoR different from outsourcing or staffing?",
    answer: "Unlike outsourcing, EoR employees work exclusively for you and are fully integrated into your team. Unlike staffing agencies, EoR provides a compliant, long-term employment relationship — not a temporary placement. You stay in control; we handle the legal employer obligations.",
  },
  {
    question: "In which countries do you offer EoR services?",
    answer: "We specialise in Bulgaria and Eastern Europe, covering 6+ countries including Romania, Poland, Czech Republic, Hungary, and Serbia. Our local expertise ensures compliant employment in each jurisdiction.",
  },
  {
    question: "How quickly can you onboard an employee?",
    answer: "Typically 2–4 weeks from signed agreement to first payroll. In straightforward cases, onboarding can be completed in as little as 5–7 business days.",
  },
  {
    question: "Who handles payroll and taxes?",
    answer: "We do. We run payroll, calculate and remit all employer and employee taxes, manage social security contributions, and ensure statutory deductions are handled correctly each pay cycle.",
  },
  {
    question: "Are employees hired through EoR on your payroll?",
    answer: "Employees are on our payroll, not yours. We are the legal employer and carry all payroll obligations. However, you fund the employment costs and retain full management oversight of the employee's work.",
  },
  {
    question: "Can I manage the employee's daily work?",
    answer: "Absolutely. You direct the employee's work, set objectives, and manage performance. We handle the employment infrastructure — contracts, payroll, compliance — behind the scenes.",
  },
  {
    question: "What are the costs of EoR services?",
    answer: "EoR pricing is typically structured as a flat monthly fee per employee on top of employment costs (salary, employer social contributions, benefits). Contact us for a tailored quote based on your specific requirements.",
  },
  {
    question: "Is EoR compliant with local labor laws?",
    answer: "Yes. Our service is built around full compliance with local employment legislation in every country we operate. We stay up to date with regulatory changes so your business is always protected.",
  },
  {
    question: "Can I convert an EoR employee to our entity later?",
    answer: "Yes. If you decide to set up your own legal entity, we support a smooth transition — transferring employment to your entity with minimal disruption to the employee or your operations.",
  },
]

// ─── CTA ──────────────────────────────────────────────────────────────────────

export const CTA = {
  eyebrow: "Ready to Hire Globally?",
  title: "Let's help you hire faster",
  description:
    "Let's help you hire faster, stay compliant and grow your business anywhere in the world.",
  primaryButton: {
    text: "Let's Talk About Your Hiring Needs",
    href: "/#contact",
  },
  secondaryButton: {
    text: "See how it works",
    href: "/process",
  },
}