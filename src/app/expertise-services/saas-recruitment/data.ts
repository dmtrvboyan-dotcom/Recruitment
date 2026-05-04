import { Code2, Server, Layers, Cloud, Rocket, TrendingUp, Building2 } from "lucide-react"
import type { LucideIcon } from "lucide-react"

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
}

export const HERO_DATA: HeroData = {
  tagline: "SaaS Recruitment",
  title: "SaaS Specialists Acquisition & B2B Software Hiring",
  description:
    "We specialize in SaaS recruitment, helping companies hire top specialists for cloud-based software, B2B SaaS platforms, and subscription products.",
}

export const WHAT_WE_COVER_HEADER: SectionHeader = {
  tagline: "SaaS Expertise",
  title: "What We Cover",
}

export const WHAT_WE_COVER: ServiceItem[] = [
  {
    icon: Code2,
    title: "SaaS Frontend Engineers",
    description: "Frontend developers experienced in building scalable SaaS interfaces using React, Vue, Angular, and modern JavaScript frameworks focused on performance and user experience.",
    color: "text-[#0c447c]",
    iconBg: "bg-[#dbeeff]",
  },
  {
    icon: Server,
    title: "SaaS Backend Engineers",
    description: "Backend engineers specializing in cloud-based SaaS architecture, APIs, microservices, and secure, multi-tenant systems using Node.js, Python, Java, and more.",
    color: "text-[#085041]",
    iconBg: "bg-[#d0f5ea]",
  },
  {
    icon: Layers,
    title: "Full-Stack SaaS Developers",
    description: "Full-stack engineers who understand the complete SaaS product lifecycle, from database design to frontend delivery and continuous deployment.",
    color: "text-[#712b13]",
    iconBg: "bg-[#fce8e1]",
  },
  {
    icon: Cloud,
    title: "Cloud, DevOps & SaaS Infrastructure",
    description: "Experts in AWS, Azure, GCP, Kubernetes, and CI/CD pipelines who ensure your SaaS platform is scalable, reliable, and ready for rapid growth.",
    color: "text-[#3c3489]",
    iconBg: "bg-[#edecfe]",
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

export const CTA_DATA: CtaData = {
  title: "Looking to Hire SaaS Specialists?",
  description:
    "Partner with a SaaS recruitment agency that understands cloud software, B2B SaaS, and subscription-based products. We help you find and hire the right specialists to scale your platform.",
  primaryButton: {
    text: "Start Hiring SaaS Specialists",
    href: "/#contact",
  },
  secondaryButton: {
    text: "Talk to a SaaS Recruiter",
    href: "/#companies",
  },
}