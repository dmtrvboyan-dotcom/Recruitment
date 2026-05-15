import { RefreshCw, Target, Search, Lightbulb } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface HeroData {
  tagline: string
  title: string
  description: string
  marketInsight: string
}

export interface SectionHeader {
  tagline: string
  title: string
}

export interface ServiceItem {
  icon: LucideIcon
  title: string
  description: string
  color: string
  iconBg: string
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
  tagline: "Cybersecurity Recruitment",
  title: "Hire Cybersecurity & Information Security specialists",
  description:
    "We help startups and companies hire Security Engineers, SOC Analysts, Penetration Testers, Cloud Security Engineers, and DevSecOps specialists",
  marketInsight:
    "",
}

export const SERVICES_HEADER: SectionHeader = {
  tagline: "What We Cover",
  title: "Cybersecurity Recruitment Services",
}

export const SERVICES: ServiceItem[] = [
  {
    icon: RefreshCw,
    title: "Full-Cycle Cybersecurity Recruitment",
    description: "End-to-end hiring for cybersecurity roles, from defining requirements to sourcing, interviewing, and onboarding security professionals.",
    color: "text-[#0c447c]",
    iconBg: "bg-[#dbeeff]",
  },
  {
    icon: Target,
    title: "Cybersecurity Headhunting",
    description: "Targeted headhunting of top security specialist, including passive candidates in information security, ethical hacking, and risk management.",
    color: "text-[#712b13]",
    iconBg: "bg-[#fce8e1]",
  },
  {
    icon: Search,
    title: "Security Specialist Sourcing",
    description: "Building pipelines of qualified cybersecurity candidates across SOC, cloud security, DevSecOps, and penetration testing.",
    color: "text-[#085041]",
    iconBg: "bg-[#d0f5ea]",
  },
  {
    icon: Lightbulb,
    title: "Security Hiring Strategy",
    description: "Advisory on cybersecurity hiring, including compensation benchmarks, team structure, and talent acquisition strategy.",
    color: "text-[#633806]",
    iconBg: "bg-[#fef3da]",
  },
]

export const CTA_DATA: CtaData = {
  title: "Looking to Hire Cybersecurity Specialist?",
  description:
    "Partner with a cybersecurity recruitment agency that understands information security, cloud security, and threat detection. Hire faster and build secure teams.",
  primaryButton: {
    text: "Start Hiring",
    href: "/contacts",
  },
  secondaryButton: {
    text: "Talk to an Expert",
    href: "/#companies",
  },
}