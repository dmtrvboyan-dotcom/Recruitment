import {
  Code2,
  Cloud,
  ShieldCheck,
  BarChart2,
  Briefcase,
  Handshake,
  Headphones,
  Database,
  Settings,
  PackageCheck,
  Rocket,
  TrendingUp,
  Building2,
  CheckCircle,
  Globe,
  Zap,
  Star,
  Users,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface RoleItem {
  icon: LucideIcon
  title: string
  description: string
  color: string
  iconBg: string
  bullets: string[]
}

export interface ServiceItem {
  icon: LucideIcon
  title: string
  description: string
  color: string
  iconBg: string
}

export interface HeroData {
  tagline: string
  title: string
  description: string
}

export interface SectionHeader {
  tagline: string
  title: string
}

export interface CtaData {
  title: string
  description: string
  primaryButton: {
    text: string
    href: string
  }
  secondaryButton: {
    text: string
    href: string
  }
   whatWeCoverCTA: {
    text: string
    href: string
  }
   whatWeCoverSecondCTA: {
    text: string
    href: string
  }
   perfectForCTA: {
    text: string
    href: string
  }
}

export interface FooterBarItem {
  icon: LucideIcon
  label: string
}

export const HERO_DATA: HeroData = {
  tagline: "SaaS Recruitment",
  title: "SaaS Specialists Acquisition & B2B Software Hiring",
  description: "We specialize in SaaS recruitment, helping companies hire top specialists for cloud-based software, B2B SaaS platforms, and subscription products.",
}

export const WHAT_WE_COVER_HEADER: SectionHeader = {
  tagline: "Who We Hire",
  title: "IT Services & SaaS Recruitment",
}

export const WHAT_WE_COVER: RoleItem[] = [
  {
    icon: Code2,
    title: "Software Development",
    description: "",
    color: "text-[#0c447c]",
    iconBg: "bg-[#dbeeff]",
    bullets: [
      "Backend Developers (Node.js, Java, .NET, Python)",
      "Frontend Developers (React, Angular, Vue)",
      "Full-Stack Developers",
      "Mobile Developers (iOS / Android)",
      "Software Architects",
      "Tech Leads",
    ],
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    description: "",
    color: "text-[#085041]",
    iconBg: "bg-[#d0f5ea]",
    bullets: [
      "DevOps Engineers",
      "Cloud Engineers (AWS, Azure, GCP)",
      "SRE Engineers",
      "Platform Engineers",
      "Kubernetes Specialists",
      "CI/CD Engineers",
    ],
  },
  {
    icon: ShieldCheck,
    title: "QA & Testing",
    description: "",
    color: "text-[#3c3489]",
    iconBg: "bg-[#edecfe]",
    bullets: [
      "QA Engineers (Manual & Automation)",
      "Test Automation Engineers (Selenium, Cypress)",
      "Performance Test Engineers",
      "QA Leads",
    ],
  },
  {
    icon: BarChart2,
    title: "Data & Analytics",
    description: "",
    color: "text-[#633806]",
    iconBg: "bg-[#fef3da]",
    bullets: [
      "Data Engineers",
      "Data Analysts",
      "BI Developers",
      "Data Scientists",
      "Analytics Engineers",
    ],
  },
  {
    icon: Briefcase,
    title: "Product & Project",
    description: "",
    color: "text-[#72243e]",
    iconBg: "bg-[#fceaf0]",
    bullets: [
      "Product Managers",
      "Product Owners",
      "Project Managers (Agile / Scrum)",
      "Delivery Managers",
    ],
  },
  {
    icon: Handshake,
    title: "Sales & Pre-Sales",
    description: "",
    color: "text-[#085041]",
    iconBg: "bg-[#d0f5ea]",
    bullets: [
      "Business Development Managers",
      "IT Sales Specialists",
      "Account Managers",
      "Pre-Sales Engineers / Solution Consultants",
    ],
  },
  {
    icon: Headphones,
    title: "Customer Success & Support",
    description: "",
    color: "text-[#3c3489]",
    iconBg: "bg-[#edecfe]",
    bullets: [
      "Customer Success Managers",
      "Technical Support Engineers",
      "Implementation Specialists",
      "Onboarding Specialists",
    ],
  },
  {
    icon: Database,
    title: "ERP / CRM / Enterprise Systems",
    description: "",
    color: "text-[#633806]",
    iconBg: "bg-[#fef3da]",
    bullets: [
      "SAP Consultants",
      "Salesforce Specialists",
      "Microsoft Dynamics Experts",
      "ERP Implementation Consultants",
    ],
  },

]

export const PERFECT_FOR_HEADER: SectionHeader = {
  tagline: "Who We Help",
  title: "Perfect For",
}

export const PERFECT_FOR: ServiceItem[] = [
  {
    icon: Rocket,
    title: "SaaS Startups",
    description: "Hire agile SaaS Specialists who thrive in fast-paced startup environments and can help build and launch cloud-based products from scratch.",
    color: "text-[#633806]",
    iconBg: "bg-[#fef3da]",
  },
  {
    icon: TrendingUp,
    title: "Scaling SaaS Companies",
    description: "Quickly expand your SaaS engineering and product teams with experienced professionals who understand product-led growth and scalability.",
    color: "text-[#72243e]",
    iconBg: "bg-[#fceaf0]",
  },
  {
    icon: Building2,
    title: "Enterprise SaaS Businesses",
    description: "Build high-performing teams for complex SaaS platforms, ensuring seamless integration, security, and long-term product success.",
    color: "text-[#27500a]",
    iconBg: "bg-[#eaf3de]",
  },
]

export const FOOTER_BAR = {
  moreRoles: {
    icon: Users,
    title: "Many more roles available",
    description: "We recruit across specialized technologies and business functions.",
  },
  badges: [
    { icon: CheckCircle, label: "Flexible Engagement" },
    { icon: Globe, label: "Global Talent Pool" },
    { icon: Zap, label: "Fast Hiring Process" },
    { icon: Star, label: "Industry Expertise" },
  ] as { icon: LucideIcon; label: string }[],
}

export const CTA_DATA: CtaData = {
  title: "Looking to Hire SaaS Specialists?",
  description:
    "Partner with a SaaS recruitment agency that understands cloud software, B2B SaaS, and subscription-based products. We help you find and hire the right specialists to scale your platform.",
  primaryButton: {
    text: "Contact Us",
    href: "/contacts",
  },
  secondaryButton: {
    text: "Talk to a SaaS Recruiter",
    href: "/#companies",
  },
  whatWeCoverCTA: {
    text: "Start a SaaS team search",
    href: "/services/permanent-it-recruitment",
  },
  whatWeCoverSecondCTA: {
    text: "Need to scale  fast?",
    href: "/services/contract-freelance-b2b-remote-recruitment",
  },
  perfectForCTA: {
    text: "See Our EoR",
    href: "/services/contract-freelance-b2b-remote-recruitment",
  }
}
