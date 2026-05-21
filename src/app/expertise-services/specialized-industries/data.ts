import {
  Factory,
  Zap,
  Truck,
  Hotel,
  ShoppingCart,
  Film,
  Scale,
  CreditCard,
  GraduationCap,
  Globe,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface IndustryData {
  icon: LucideIcon
  title: string
  description: string
  highlights: string[]
  slug: string
  iconBg?: string
  color?: string
  cta?: {
    text: string
    href: string
  }
}

export interface HeroData {
  tagline: string
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
  // Below "Why It Matters" / domain knowledge section
  domainKnowledgeCTA: {
    text: string
    href: string
  }
 
}

export const HERO_DATA: HeroData = {
  tagline: "Specialized Industries",
  title: "Industry-Specific Tech Recruitment",
  description:
    "Our recruitment networks extend across different technical ecosystems.",
}

export const INDUSTRIES: IndustryData[] = [
  {
    icon: CreditCard,
    title: "Banking Tech",
    slug: "banking-tech",
    description:
      "We partner with fintech and banking organizations to build teams developing secure, scalable financial systems.",
    highlights: [
      "Payment processing systems and transaction platforms",
      "Banking APIs and open banking infrastructure",
      "Fraud detection and risk management systems",
      "Core banking and financial data platforms",
    ],
    // Inline CTA: routes fintech visitors to dedicated vertical page
    
  },
  {
    icon: ShoppingCart,
    title: "Retail & eCommerce",
    slug: "retail-ecommerce",
    description:
      "We support retail and eCommerce companies in building teams that drive modern digital commerce experiences.",
    highlights: [
      "eCommerce platforms and headless commerce architectures",
      "Recommendation engines and personalization systems",
      "Payment integrations and checkout optimization",
      "Omnichannel and customer journey platforms",
    ],
    // Inline CTA: routes ecommerce visitors to dedicated vertical page
    
  },
  {
    icon: Zap,
    title: "Renewable Energy",
    slug: "renewable-energy",
    description:
      "We help renewable energy companies scale teams building the infrastructure behind the future of energy.",
    highlights: [
      "Smart grid and energy distribution systems",
      "Energy trading and forecasting platforms",
      "Solar, wind, and storage optimization software",
      "Data systems for energy analytics and sustainability reporting",
    ],
  },
  {
    icon: Factory,
    title: "Manufacturing (IT-focused)",
    slug: "manufacturing",
    description:
      "We support modern manufacturing companies in hiring software engineers, automation specialists, and data experts driving Industry 4.0 transformation.",
    highlights: [
      "Smart factory platforms and industrial IoT systems",
      "ERP integrations and manufacturing execution systems (MES)",
      "Robotics, automation, and real-time monitoring tools",
      "Data pipelines for production analytics and optimization",
    ],
  },
  {
    icon: Truck,
    title: "Logistics & Supply Chain",
    slug: "logistics-supply-chain",
    description:
      "We partner with logistics and supply chain companies to hire talent building high-performance, real-time systems that power global operations.",
    highlights: [
      "Supply chain visibility platforms and tracking systems",
      "Route optimization and last-mile delivery solutions",
      "Warehouse management systems (WMS)",
      "Data-driven forecasting and demand planning tools",
    ],
  },
  {
    icon: Hotel,
    title: "Hospitality",
    slug: "hospitality",
    description:
      "We help hospitality and travel businesses hire teams that deliver seamless digital customer experiences at scale.",
    highlights: [
      "Booking engines and reservation platforms",
      "Customer experience and personalization systems",
      "Revenue management and pricing optimization tools",
      "Operational platforms for hotels, travel, and tourism",
    ],
  },
  {
    icon: Film,
    title: "Media & Entertainment",
    slug: "media-entertainment",
    description:
      "We help media and entertainment companies hire specialists building high-scale content and engagement platforms.",
    highlights: [
      "Streaming platforms and video delivery systems",
      "Content management and distribution platforms",
      "Recommendation and user engagement algorithms",
      "AdTech and monetization systems",
    ],
    // Inline CTA: routes iGaming / AI visitors to dedicated vertical pages
  
  },
  {
    icon: Scale,
    title: "Legal (LegalTech)",
    slug: "legaltech",
    description:
      "We support LegalTech and compliance-driven organizations in building teams that operate in highly regulated environments.",
    highlights: [
      "Legal automation and document processing tools",
      "Contract lifecycle management platforms",
      "Compliance and regulatory technology systems",
      "AI-driven legal research and analytics solutions",
    ],
  },
  {
    icon: GraduationCap,
    title: "EdTech",
    slug: "edtech",
    description:
      "We help education technology companies scale teams building accessible and engaging digital learning platforms.",
    highlights: [
      "Learning management systems (LMS)",
      "Interactive and adaptive learning platforms",
      "Video-based and real-time education tools",
      "Data analytics for learning outcomes and engagement",
    ],
  },
]

export const CTA_DATA: CtaData = {
  title: "Learn More About Our Reach",
  description: "",
  primaryButton: {
    text: "Contact Us",
    href: "/contacts",
  },
  secondaryButton: {
    text: "Learn More About Our Team",
    href: "/about",
  },
  // Below "Why It Matters" / domain knowledge section
  domainKnowledgeCTA: {
    text: "See our full recruitment process",
    href: "/process",
  },
  // CTA section bottom row — replaces plain ArrowUpRight link
 
}

export const STATS = [
  { value: "650+", label: "Hires" },
  { value: "75%", label: "Hires From Passive Candidates" },
  { value: "80%+", label: "Offer Acceptance Rate" },
  { value: "4-8", label: "Days to Present Candidates" },
]