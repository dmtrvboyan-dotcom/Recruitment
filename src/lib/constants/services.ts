/**
 * Services section data and configuration
 */

import { Users, Briefcase, Clock, Globe, Search, UserCheck, type LucideIcon } from "lucide-react"

export interface ServiceSection {
  heading: string
  points: string[]
}

export interface ServiceStat {
  value: string
  label: string
}

export interface Service {
  icon: LucideIcon
  iconColor: string
  iconBg: string
  title: string
  subtitle: string
  intro: string
  sections: ServiceSection[]
  stats: ServiceStat[]
  href: string
}

export const SERVICES: Service[] = [
  {
    icon: Users,
    iconColor: "text-[#1A1A2E]",
    iconBg: "bg-[#1A1A2E]/5",
    title: "Permanent IT Recruitment",
    subtitle: "Lorem ipsum dolor sit amet",
    intro: "",
    sections: [
      {
        heading: "Hire with Confidence",
        points: [
          "Clear understanding of your hiring needs and expectations",
          "Deep dive into your company culture and team dynamics",
          "Careful selection of candidates who match both skills and mindset",
          "Focus on long-term retention, not short-term placement",
        ],
      },
      {
        heading: "What You Get",
        points: [
          "Stronger, more stable teams",
          "Better cultural alignment",
          "Reduced hiring risk",
          "Professionals who grow with your business",
        ],
      },
    ],
    stats: [
      { value: "2x", label: "Longer Retention" },
      { value: "89%", label: "Stronger Cultural Alignment" },
      { value: "70%+", label: "Reduced Hiring Risk" },
    ],
    href: "/services/permanent-it-recruitment",
  },
  {
    icon: Briefcase,
    iconColor: "text-[#1A1A2E]",
    iconBg: "bg-[#1A1A2E]/5",
    title: "Contract / Freelance / B2B / Remote Hiring",
    subtitle: "Lorem ipsum dolor sit amet",
    intro: "",
    sections: [
      {
        heading: "Improve How You Hire",
        points: [
          "Developers ready to start in days, not months",
          "Immediate impact on ongoing projects",
          "Ability to scale your team up or down anytime",
          "No long-term commitments or hiring risks",
        ],
      },
      {
        heading: "What Changes",
        points: [
          "Start in 3–10 days",
          "Pre-vetted candidates only",
          "Flexible contracts",
          "No hire, no long-term commitment",
        ],
      },
    ],
    stats: [
      { value: "100+", label: "Vetted Contractors" },
      { value: "3-5", label: "Days to Hire" },
      { value: "90%+", label: "Offer Acceptance Rate" },
    ],
    href: "/services/contract-freelance-b2b-remote-recruitment",
  },
  {
    icon: Search,
    iconColor: "text-[#1A1A2E]",
    iconBg: "bg-[#1A1A2E]/5",
    title: "Confidential Headhunting and Executive search",
    subtitle: "Lorem ipsum dolor sit amet",
    intro: "",
    sections: [
      {
        heading: "Targeted Search Approach",
        points: [
          "Identification of proven leaders in the market",
          "Direct outreach to passive candidates",
          "Discreet and structured hiring process",
          "Focus on leadership, vision, and long-term impact",
        ],
      },
      {
        heading: "What You Get",
        points: [
          "High-quality leadership candidates",
          "Faster access to decision-makers",
          "Confidential and professional process",
          "Leaders aligned with your business goals",
        ],
      },
    ],
    stats: [
      { value: "25", label: "Senior Roles" },
      { value: "85%", label: "Offer Acceptance Rate" },
      { value: "6-15", label: "Days to Present Candidates" },
    ],
    href: "/services/confidential-headhunting-executive-search",
  },
  {
    icon: Clock,
    iconColor: "text-[#1A1A2E]",
    iconBg: "bg-[#1A1A2E]/5",
    title: "Employer of Record (EOR)",
    subtitle: "Hire in Eastern Europe - No Local Entity Needed",
    intro: "",
    sections: [
      {
        heading: "Expand Without the Overhead",
        points: [
          "Hire employees in Bulgaria and Eastern Europe under our legal entity",
          "Full local employment compliance - contracts, tax, and social contributions handled",
          "Seamless contractor-to-employee conversions",
          "Scale your international workforce without incorporation costs",
        ],
      },
      {
        heading: "What You Get",
        points: [
          "Zero entity setup required",
          "Cross-border employment made simple",
          "Locally compliant contracts from day one",
          "Global workforce expansion on your timeline",
        ],
      },
    ],
    stats: [
      { value: "6+", label: "Eastern European Countries Covered" },
      { value: "100%", label: "Local Compliance Guaranteed" },
      { value: "2–4 wks", label: "Avg. Time to Onboard" },
    ],
    href: "/services/employer-of-record",
  },
  {
    icon: UserCheck,
    iconColor: "text-[#1A1A2E]",
    iconBg: "bg-[#1A1A2E]/5",
    title: "IT Salary Benchmarking & Hiring Insights",
    subtitle: "Lorem ipsum dolor sit amet",
    intro: "",
    sections: [
      {
        heading: "Your Goals Come First",
        points: [
          "Real salary data based on current market demand",
          "Benchmarks by role, seniority, and tech stack",
          "Insights into candidate expectations",
          "Guidance on competitive offers",
        ],
      },
      {
        heading: "Real Impact",
        points: [
          "Turn insights into hiring results",
          "Avoid overpaying or underpaying",
          "Speed up hiring decisions",
          "Improve hiring success rate",
        ],
      },
    ],
    stats: [
      { value: "3x", label: "Faster Offer Decisions" },
      { value: "Live", label: "Market Salary Data" },
      { value: "100%", label: "Role & Stack Specific" },
    ],
    href: "/services/it-salary-benchmarking-and-hiring-insights",
  },
  {
    icon: Globe,
    iconColor: "text-[#1A1A2E]",
    iconBg: "bg-[#1A1A2E]/5",
    title: "It Payroll Compliance Advisory",
    subtitle: "Build Strong Teams Without Location Limits",
    intro: "",
    sections: [
      {
        heading: "Hire Beyond Borders",
        points: [
          "Access to a wider pool of tech talent",
          "Focus on communication, ownership, and reliability",
          "Support in building remote-ready teams",
          "Guidance on remote hiring best practices",
        ],
      },
      {
        heading: "What You Get",
        points: [
          "Stronger distributed teams",
          "Improved collaboration across locations",
          "Access to talent you can't reach locally",
          "Scalable hiring model",
        ],
      },
    ],
    stats: [
      { value: "65%+", label: "Wider Pool of Professionals" },
      { value: "4-6", label: "Candidates Per Role" },
      { value: "2-6", label: "Days to Present Candidates" },
    ],
    href: "/services/it-payroll-compliance-advisory",
  },

]
