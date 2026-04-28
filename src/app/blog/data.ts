import { Users, Clock, Shield, Wallet } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface WhatYouGetItem {
  icon: LucideIcon
  title: string
  description: string
}

export interface WhyBulgariaData {
  left: string[]
  right: string[]
}

export interface HeroData {
  tagline: string
  title: string
  description: string
  subDescription: string
}

export interface SectionHeader {
  tagline: string
  title: string
}

export interface ApproachData {
  header: SectionHeader
  paragraphs: string[]
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
  tagline: "AI & ML Recruitment",
  title: "Hire AI Engineers & Machine Learning Experts",
  description:
    "We help startups and global tech teams hire top AI, ML, and data experts — from engineers to MLOps — to build, automate, and scale faster.",
  subDescription:
    "",
}

export const WHAT_YOU_GET_HEADER: SectionHeader = {
  tagline: "Our Promise",
  title: "What You Get",
}

export const WHAT_YOU_GET: WhatYouGetItem[] = [
  {
    icon: Users,
    title: "Vetted AI Experts",
    description:
      "Access pre-screened AI engineers, data scientists, and ML specialists with proven experience.",
  },
  {
    icon: Clock,
    title: "Fast Hiring",
    description:
      "Receive qualified AI and machine learning candidates within days, not months.",
  },
  {
    icon: Shield,
    title: "Specialized Expertise",
    description:
      "Hire experts in deep learning, NLP, computer vision, and scalable ML systems.",
  },
  {
    icon: Wallet,
    title: "Efficient Scaling",
    description:
      "Build and scale AI teams efficiently without compromising on quality or performance.",
  },
]

export const WHY_BULGARIA_HEADER: SectionHeader = {
  tagline: "AI Expertise",
  title: "What We Cover",
}

export const WHY_BULGARIA: WhyBulgariaData = {
  left: [
    "Machine learning engineers and AI developers",
    "Data scientists and data engineers",
    "NLP and computer vision specialists",
    "MLOps and AI infrastructure experts",
  ],
  right: [
    "Deep learning and neural networks",
    "Predictive analytics and data modeling",
    "AI product and research roles",
    "Scalable AI systems and automation",
  ],
}

export const APPROACH_DATA: ApproachData = {
  header: {
    tagline: "How We Work",
    title: "Our Approach",
  },
  paragraphs: [
    "We combine deep knowledge of the AI and machine learning landscape with a targeted recruitment approach. Every candidate is carefully evaluated for technical expertise, real-world project experience, and problem-solving ability.",
    "From initial requirements to final hire, we support the full recruitment process, helping you build high-performing AI teams that can design, deploy, and scale intelligent systems.",
  ],
}

export const CTA_DATA: CtaData = {
  title: "Looking to Hire AI Experts?",
  description:
    "Partner with an AI recruitment agency that understands machine learning, data science, and advanced technologies. Hire faster and build world-class AI teams.",
  primaryButton: {
    text: "Start Hiring AI Talent",
    href: "/#contact",
  },
  secondaryButton: {
    text: "Talk to an Expert",
    href: "/#companies",
  },
}