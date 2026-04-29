/**
 * Footer links and social media configuration
 */

import { Linkedin, Mail, Globe, type LucideIcon } from "lucide-react"

export interface FooterLink {
  label: string
  href: string
}

export interface FooterLinks {
  services: FooterLink[]
  company: FooterLink[]
  candidates: FooterLink[]
}

export interface SocialLink {
  icon: LucideIcon
  href: string
  label: string
}

export const FOOTER_LINKS: FooterLinks = {
  services: [
    { label: "Permanent IT Recruitment", href: "#services" },
    { label: "Hire Contract or Freelance Developers", href: "#services" },
    { label: "Project-Based IT Recruitment", href: "#services" },
    { label: "Remote IT Hiring & Global Talent", href: "#services" },
    { label: "Executive Search & Headhunting", href: "#services" },
    { label: "IT Salary Benchmarking & Hiring Insights", href: "#services" },
  ],
  company: [
    { label: "Analyses", href: "/blog", openInNewTab: true},
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  candidates: [
    { label: "Find a Job", href: "#jobs" },
    { label: "Submit CV", href: "#contact" },
  ],
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: Linkedin,
    href: "https://bg.linkedin.com/company/recruitment-bg",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:office@recruitment.bg",
    label: "Email",
  },
]

export const COMPANY_INFO = {
  name: "Recruitment.bg",
  location: "Sofia, Bulgaria",
  description:
    "IT recruitment agency helping small, medium, start-up businesses connect with the right IT talent in Bulgaria and beyond.",
  linkedinUrl: "https://bg.linkedin.com/company/recruitment-bg",
  facebookUrl: "https://www.facebook.com/recruitment.bg.official/",
}
