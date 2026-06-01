import {
  Code2,
  Users,
  Globe,
  Gamepad2,
  Briefcase,
  Building2,
  Layers,
  Heart,
  Truck 
} from "lucide-react";

export const EXPERTISE_AREAS = [
  {
    title: "Fintech Recruitment",
    description: "Expert recruitment for fintech, banking, payments, and financial technology companies.",
    href: "/expertise-services/fintech-recruitment",
    icon: Briefcase,
    image: "/expertise/fintech.jpg",
    stats: "200+",
  },
  {
    title: "iGaming Recruitment",
    description: "Dedicated recruitment solutions for the fast-paced iGaming and online betting industry.",
    href: "/expertise-services/igaming-recruitment",
    icon: Gamepad2,
    image: "/expertise/igaming.jpg",
    stats: "150+",
  },
  {
    title: "AI/ML/Data Recruitment",
    description: "AI recruitment for machine learning engineers, data scientists, and MLOps teams.",
    href: "/expertise-services/aiml-recruitment",
    icon: Users,
    image: "/expertise/aiml.jpg",
    stats: "100+",
  },
  {
    title: "Cybersecurity Recruitment",
    description: "Cybersecurity recruitment for security engineers, SOC analysts, and DevSecOps teams.",
    href: "/expertise-services/cybersecurity-recruitment",
    icon: Building2,
    image: "/expertise/cybersecurity.jpg",
    stats: "120+",
  },
  {
    title: "IT Services & SaaS Recruitment",
    description: "SaaS recruitment for engineers, DevOps, and technical leaders across Bulgaria and Europe.",
    href: "/expertise-services/saas-recruitment",
    icon: Code2,
    image: "/expertise/saas.jpg",
    stats: "300+",
  },
  {
    title: "E-commerce Recruitment",
    description: "Ecommerce recruitment for Shopify, Magento, and online retail teams across Europe.",
    href: "/expertise-services/ecommerce-recruitment",
    icon: Globe,
    image: "/expertise/ecommerce.jpg",
    stats: "180+",
  },

]

export const EXPERTISE_FEATURED_AREA = {
  title: "More Industries we recruit for",
  description:
    "Our recruitment networks extend across diverse technical and logistical landscapes, ensuring a perfect fit for niche requirements.",
  href: "/expertise-services/specialized-industries",
  icon: Layers,

  tags: [
    "Manufacturing (IT-focused)",
    "Renewable Energy",
    "Logistics & Supply Chain",
    "Hospitality",
    "Retail",
    "Media & Entertainment",
    "Legal (LegalTech)",
    "Banking Tech",
    "EdTech",
  ],
  cta: "Learn more about our reach",
};