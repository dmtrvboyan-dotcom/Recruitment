import { Linkedin, Mail, Phone, Facebook, Instagram, type LucideIcon } from "lucide-react"

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
  text?: string
}

export const FOOTER_LINKS: FooterLinks = {
  services: [
    { label: "Permanent IT Recruitment", href: "#services" },
    { label: "Hire Contract or Freelance Developers", href: "#services" },
    { label: "Project-Based IT Recruitment", href: "#services" },
    { label: "Remote IT Hiring & Global Talent", href: "#services" },
    { label: "Executive Search & Headhunting", href: "#services" },
    { label: "IT Salary Benchmarking & Hiring Insights", href: "#services" },
    { label: "Smart.R ATS", href: "/applicant-tracking-system" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Hire developers Bulgaria", href: "#specialized" },
  ],
  candidates: [
    { label: "Find a Job", href: "#jobs" },
    { label: "Submit CV", href: "#contact" },
    { label: "Blog", href: "/blog" },
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
  {
    icon: Facebook,
    href: "https://www.facebook.com/recruitment.bg.official/",
    label: "Facebook",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/recruitment.bg/",
    label: "Instagram",
  },
]

export const COMPANY_INFO = {
  name: "Recruitment.bg",
  location: "Sofia, Bulgaria",
  description:
    "IT recruitment agency helping small, medium, start-up businesses connect with the right IT talent in Bulgaria and beyond.",
  phoneNumber: "+359 876 449 229‬",   // ← replace with your real number
  phoneHref: "tel:+359 876 449 229‬",    // ← replace with your real number
  linkedinUrl: "https://bg.linkedin.com/company/recruitment-bg",
  facebookUrl: "https://www.facebook.com/recruitment.bg.official/",
}