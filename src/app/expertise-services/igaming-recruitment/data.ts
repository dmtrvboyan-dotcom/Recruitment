import { Code2, Palette, Headphones, Box } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface HeroData {
  tagline: string
  title: string
  description: string
}

export interface SectionHeader {
  tagline: string
  title: string
}

export interface RoleItem {
  icon: LucideIcon
  title: string
  description: string
  color: string
  iconBg: string
}

export interface DifferentiatorItem {
  title: string
  description: string
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

export interface StatItem {
  value: string
  label: string
}

export const HERO_DATA: HeroData = {
  tagline: "iGaming Recruitment",
  title: "iGaming & Gaming Recruitment",
  description:
    "Bulgaria is one of the leading iGaming hubs in Europe. We help companies hire top gaming expert fast.",
}

export const ROLES_HEADER: SectionHeader = {
  tagline: "Who We Hire",
  title: "We Help Companies Find",
}

export const STATS_DATA: StatItem[] = [
  {
    value: "100+",
    label: "iGaming roles across Bulgaria & EU",
  },
  {
    value: "48–72h",
    label: "Average time candidate delivery",
  },
  {
    value: "15+",
    label: "Years in IT & iGaming",
  },
  {
    value: "95%",
    label: "Client retention rate on hiring",
  },
]

export const ROLES: RoleItem[] = [
  {
    icon: Code2,
    title: "Developers",
    description:
      "Backend, frontend, and full-stack developers with gaming and real-time systems experience.",
    color: "text-[#72243e]",
    iconBg: "bg-[#fceaf0]",
  },
  {
    icon: Palette,
    title: "Game Designers",
    description:
      "Creative professionals who design engaging game mechanics, UX flows, and player experiences.",
    color: "text-[#085041]",
    iconBg: "bg-[#d0f5ea]",
  },
  {
    icon: Headphones,
    title: "Support (Multilingual)",
    description:
      "Customer support specialists fluent in multiple languages to serve global player bases.",
    color: "text-[#3c3489]",
    iconBg: "bg-[#edecfe]",
  },
  {
    icon: Box,
    title: "Product Specialists",
    description:
      "Product managers and owners who understand the iGaming industry and player behavior.",
    color: "text-[#712b13]",
    iconBg: "bg-[#fce8e1]",
  },
]

export const DIFFERENTIATORS_HEADER: SectionHeader = {
  tagline: "Our Edge",
  title: "What Makes Us Different",
}

export const DIFFERENTIATORS: DifferentiatorItem[] = [
  {
    title: "Industry Understanding",
    description:
      "We know the iGaming landscape inside out — from regulations to player expectations to technical requirements.",
  },
  {
    title: "Access to Passive Candidates",
    description:
      "Our network includes top experts who aren't actively looking but are open to the right opportunity.",
  },
  {
    title: "Fast Pipeline",
    description:
      "We deliver qualified candidates quickly, keeping up with the fast-paced nature of the gaming industry.",
  },
]

export const CTA_DATA: CtaData = {
  title: "Ready to Hire iGaming / Gambling professionals?",
  description:
    "Let us help you build your gaming team with Bulgaria's best iGaming professionals.",
  primaryButton: {
    text: "Contact Us",
    href: "/#contact",
  },
  secondaryButton: {
    text: "Start Hiring Today",
    href: "/#companies",
  },
}
