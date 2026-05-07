import {
  Globe,
  Clock,
  BadgeCheck,
  Briefcase,
  Users,
  Handshake,
  Code2,
  ShoppingCart,
  Megaphone,
  BarChart2,
  CreditCard,
  Headphones,
  Layers,
  Package,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface HighlightItem {
  icon: LucideIcon
  title: string
  description: string
  color: string
  iconBg: string
}

export interface RoleItem {
  icon: LucideIcon
  title: string
  color: string
  iconBg: string
  bullets: string[]
}

export interface ProcessStep {
  step: string
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
  tagline: "Ecommerce Recruitment",
  title: "Ecommerce Experts & Online Retail Hiring",
  description:
    "We help ecommerce companies hire top experts across Shopify, Magento, Salesforce Commerce Cloud, digital marketing, and online retail operations.",
}

export const ROLES_WE_HIRE_HEADER: SectionHeader = {
  tagline: "Who We Hire",
  title: "Every Ecommerce Role, Covered",
}

export const ROLES_WE_HIRE: RoleItem[] = [
  {
    icon: Code2,
    title: "Ecommerce Development",
    color: "text-[#0c447c]",
    iconBg: "bg-[#dbeeff]",
    bullets: [
      "Senior Full-Stack Developers",
      "Backend Engineers (PHP, Node.js, Python)",
      "Frontend Developers (React, Next.js)",
      "Shopify App Developers",
      "Magento 2 Developers",
      "Headless Commerce Developers",
    ],
  },
  {
    icon: Layers,
    title: "Platform & Architecture",
    color: "text-[#085041]",
    iconBg: "bg-[#d0f5ea]",
    bullets: [
      "Solutions Architects",
      "E-commerce Architects",
      "Technical Leads",
      "Principal Engineers",
      "Headless Commerce Architects",
      "Integration Architects",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce Platform Experts",
    color: "text-[#3c3489]",
    iconBg: "bg-[#edecfe]",
    bullets: [
      "Shopify Plus Experts",
      "Magento (Adobe Commerce) Experts",
      "Salesforce Commerce Cloud Experts",
      "BigCommerce Developers",
      "WooCommerce Experts",
      "SAP Commerce Cloud Experts",
    ],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing & Growth",
    color: "text-[#633806]",
    iconBg: "bg-[#fef3da]",
    bullets: [
      "Performance Marketing Managers",
      "SEO / SEM Specialists",
      "Email Marketing Specialists",
      "Affiliate Marketing Managers",
      "Social Media Managers",
      "CRO Specialists",
    ],
  },
  {
    icon: BarChart2,
    title: "Data & Analytics",
    color: "text-[#712b13]",
    iconBg: "bg-[#fce8e1]",
    bullets: [
      "Ecommerce Data Analysts",
      "BI Developers",
      "Data Engineers",
      "Web Analytics Specialists (GA4)",
      "Attribution & Tracking Experts",
    ],
  },
  {
    icon: CreditCard,
    title: "Payments & Fraud",
    color: "text-[#72243e]",
    iconBg: "bg-[#fceaf0]",
    bullets: [
      "Payment Gateway Engineers",
      "Fraud Detection Engineers",
      "Risk & Compliance Engineers",
      "Chargeback Specialists",
      "PSP Integration Specialists",
    ],
  },
  {
    icon: Headphones,
    title: "Customer Experience & Support",
    color: "text-[#27500a]",
    iconBg: "bg-[#eaf3de]",
    bullets: [
      "Customer Success Managers",
      "CX Specialists",
      "Live Chat & Support Agents",
      "Returns & Logistics Coordinators",
      "VIP Client Managers",
    ],
  },
  {
    icon: Package,
    title: "Operations & Logistics",
    color: "text-[#0c447c]",
    iconBg: "bg-[#dbeeff]",
    bullets: [
      "Supply Chain Managers",
      "Warehouse & Fulfillment Managers",
      "Inventory Specialists",
      "Ecommerce Operations Managers",
      "3PL Coordinators",
    ],
  },
]

export const BULGARIA_DELIVERS_HEADER: SectionHeader = {
  tagline: "Ecommerce Expertise",
  title: "Why Work With Us",
}

export const BULGARIA_DELIVERS: HighlightItem[] = [
  {
    icon: Globe,
    title: "Ecommerce Market Expertise",
    description:
      "Deep understanding of ecommerce, online retails across Europe, with expertise in Shopify, Magento, and WooCommerce hiring markets.",
    color: "text-[#0c447c]",
    iconBg: "bg-[#dbeeff]",
  },
  {
    icon: Clock,
    title: "Fast Hiring Process",
    description: "Quick access to pre-vetted ecommerce experts, reducing time-to-hire for critical roles.",
    color: "text-[#085041]",
    iconBg: "bg-[#d0f5ea]",
  },
  {
    icon: BadgeCheck,
    title: "Proven Ecommerce Experts",
    description:
      "Hire experienced professionals in Shopify, Magento, performance marketing, and conversion optimization.",
    color: "text-[#633806]",
    iconBg: "bg-[#fef3da]",
  },
]

export const HOW_WE_HELP_HEADER: SectionHeader = {
  tagline: "Our Process",
  title: "How We Help",
}

export const HOW_WE_HELP: ProcessStep[] = [
  {
    step: "01",
    icon: Briefcase,
    title: "Define Ecommerce Needs",
    description:
      "We align on your ecommerce business model, growth stage, and hiring goals across marketing, tech, and operations.",
    color: "text-[#712b13]",
    iconBg: "bg-[#fce8e1]",
  },
  {
    step: "02",
    icon: Users,
    title: "Source Ecommerce Experts",
    description:
      "We identify and vet candidates with proven experience in ecommerce platforms, digital marketing, and online sales.",
    color: "text-[#3c3489]",
    iconBg: "bg-[#edecfe]",
  },
  {
    step: "03",
    icon: Handshake,
    title: "Hire & Scale",
    description:
      "We support hiring, offers, and onboarding so you can scale your ecommerce team quickly and efficiently.",
    color: "text-[#72243e]",
    iconBg: "bg-[#fceaf0]",
  },
]

export const CTA_DATA: CtaData = {
  title: "Looking to Hire Ecommerce Experts?",
  description:
    "Partner with an ecommerce recruitment agency that understands online retail, digital marketing, and growth. Hire faster and scale your ecommerce business with the right team.",
  primaryButton: {
    text: "Talk to us",
    href: "/#contact",
  },
  secondaryButton: {
    text: "Еxplore More About Our Team",
    href: "/about",
  },
}
