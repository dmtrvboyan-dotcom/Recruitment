import { Code2, Palette, Headphones, Box, ShieldAlert, CreditCard, Megaphone, BarChart2 } from "lucide-react"
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
  bullets: string[]
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
  itRecruitmentCTA: {
    text: string
    href: string
  }
   itSecondRecruitmentCTA: {
    text: string
    href: string
  }
  heroCTA: {
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
  title: "iGaming & Gambling Recruitment",
  description:
    "We know the iGaming industry inside out. From startups to established operators, we help companies hire igaming professionals.",
}

export const ROLES_HEADER: SectionHeader = {
  tagline: "Who We Hire",
  title: "We Help Companies Find",
}

export const STATS_DATA: StatItem[] = [
  {
    value: "300+",
    label: "Hires in the Sector",
  },
  {
    value: "48–72h",
    label: "Average time candidate delivery",
  },
  {
    value: "10+",
    label: "Years in Gambling",
  },
  {
    value: "7000+",
    label: "iGaming Contacts",
  },
]

export const ROLES: RoleItem[] = [
  {
    icon: Code2,
    title: "Game Development",
    description: "",
    color: "text-[#72243e]",
    iconBg: "bg-[#fceaf0]",
    bullets: [
      "Game Developers (Unity / Unreal / HTML5)",
      "Backend Game Developers (Node.js, Java, Go)",
      "Multiplayer Engineers (Real-time systems)",
      "RNG Engineers",
      "Graphics / Rendering Engineers",
      "Game Engine Developers",
    ],
  },
  {
    icon: Palette,
    title: "Game Design & UX",
    description: "",
    color: "text-[#085041]",
    iconBg: "bg-[#d0f5ea]",
    bullets: [
      "Game Designers (Slots / Casino Mechanics)",
      "Level Designers",
      "UX/UI Designers (Gaming UX)",
      "Player Experience Specialists",
      "Economy Designers (Game balancing)",
    ],
  },
  {
    icon: BarChart2,
    title: "Product & Monetization",
    description: "",
    color: "text-[#8b4a00]",
    iconBg: "bg-[#fff3e0]",
    bullets: [
      "Product Managers (iGaming)",
      "Live Ops Managers",
      "Monetization Specialists",
      "CRM Managers (Retention, Lifecycle)",
      "VIP Managers",
      "Loyalty Program Managers",
    ],
  },
  {
    icon: Box,
    title: "Data & Analytics",
    description: "",
    color: "text-[#3c3489]",
    iconBg: "bg-[#edecfe]",
    bullets: [
      "Game Data Analysts",
      "BI Analysts (Player behavior)",
      "Data Scientists (Churn / LTV prediction)",
      "Fraud Analysts",
      "A/B Testing Specialists",
    ],
  },
  {
    icon: ShieldAlert,
    title: "Risk, Fraud & Compliance",
    description: "",
    color: "text-[#72243e]",
    iconBg: "bg-[#fceaf0]",
    bullets: [
      "Fraud & Risk Analysts",
      "Payments Risk Specialists",
      "AML Specialists",
      "KYC Analysts",
      "Compliance Managers (Gambling regulations)",
      "Responsible Gambling Specialists",
    ],
  },
  {
    icon: CreditCard,
    title: "Payments & Integrations",
    description: "",
    color: "text-[#3c3489]",
    iconBg: "bg-[#edecfe]",
    bullets: [
      "Payment Integration Specialists",
      "PSP Managers",
      "Billing Specialists",
      "Anti-Fraud Payment Experts",
    ],
  },
  {
    icon: Headphones,
    title: "Customer Support (Multilingual)",
    description: "",
    color: "text-[#085041]",
    iconBg: "bg-[#d0f5ea]",
    bullets: [
      "Customer Support Agents (Tier 1–3)",
      "VIP Support Agents",
      "Risk Support Specialists",
      "Social Media Support Agents",
    ],
  },
  {
    icon: Megaphone,
    title: "Marketing & Growth",
    description: "",
    color: "text-[#8b4a00]",
    iconBg: "bg-[#fff3e0]",
    bullets: [
      "Affiliate Managers",
      "SEO Specialists (iGaming)",
      "PPC Specialists (Gambling traffic)",
      "CRM / Email Marketing Specialists",
      "Social Media Managers",
      "Influencer / Streamer Managers",
    ],
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
      "We know the iGaming landscape inside out - from regulations to player expectations to technical requirements.",
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
    href: "/contacts",
  },
  secondaryButton: {
    text: "Learn More About Our Team",
    href: "/about",
  },
   heroCTA: {
    text: "Need an iGaming contractor fast?",
    href: "/services/contract-freelance-b2b-remote-recruitment",
  },
   itRecruitmentCTA: {
    text: "Start a permanent iGaming search",
    href: "/services/permanent-it-recruitment",
  },
    itSecondRecruitmentCTA: {
    text: "Need a Compliance Director or VP?",
    href: "/services/confidential-headhunting-executive-search",
  },
}
