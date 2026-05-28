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
    { label: "Permanent IT Recruitment", href: "/services/permanent-it-recruitment" },
    { label: "Contract Freelance / B2B / Remote Hiring", href: "/services/contract-freelance-b2b-remote-recruitment" },
    { label: "Confidential Headhunting & Executive Search", href: "/services/confidential-headhunting-executive-search" },
    { label: "Employer of Record (EoR)", href: "/services/employer-of-record" },
    { label: "IT Salary Benchmarking & Hiring Insights", href: "/services/it-salary-benchmarking-and-hiring-insights" },
    { label: "IT Payroll, Compliance & Business Advisory", href: "/services/it-payroll-compliance-advisory" },
    { label: "Smart.R ATS", href: "/applicant-tracking-system" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contacts" },
    { label: "Hire developers Bulgaria", href: "/tech-recruitment" },
  ],
  candidates: [
    { label: "Find a Job", href: "/job-listings" },
    { label: "Submit CV", href: "/contacts" },
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
  phoneNumber: "+359 876 449 229",   
  phoneHref: "tel:+359 876 449 229", 
  linkedinUrl: "https://bg.linkedin.com/company/recruitment-bg",
  instagramUrl:  "https://www.facebook.com/recruitment.bg.official/",
  facebookUrl: "https://www.facebook.com/recruitment.bg.official/",
  email: "office@recruitment.bg",
}
