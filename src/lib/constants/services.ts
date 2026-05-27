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

export const SERVICE_LAYOUT = [
  {
    lg: "lg:col-span-7",
    md: "md:col-span-2",
    variant: "feature" as const,
    borders: "border-b-3 lg:border-b-3 lg:border-r-3 border-brand-navy/10",
  },
  {
    lg: "lg:col-span-5",
    md: "md:col-span-1",
    variant: "default" as const,
    borders: "border-b-3 border-brand-navy/10",
  },
  {
    lg: "lg:col-span-4",
    md: "md:col-span-1",
    variant: "default" as const,
    borders: "border-b-3 md:border-r-3 lg:border-r-3 border-brand-navy/10",
  },
  {
    lg: "lg:col-span-4",
    md: "md:col-span-1",
    variant: "default" as const,
    borders: "border-b-3 lg:border-r-3 border-brand-navy/10",
  },
  {
    lg: "lg:col-span-4",
    md: "md:col-span-1",
    variant: "default" as const,
    borders: "border-b-3 md:border-r-3 lg:border-r-0 border-brand-navy/10",
  },
  {
    lg: "lg:col-span-12",
    md: "md:col-span-2",
    variant: "wide" as const,
    borders: "",
  },
]

export const SERVICES: Service[] = [
  {
    icon: Users,
    iconColor: "text-[#1A1A2E]",
    iconBg: "bg-[#1A1A2E]/5",
    title: "Permanent IT Recruitment",
    subtitle: "Permanent tech hiring built around retention & long-term team stability",
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
    subtitle: "Pre-vetted contract & freelance IT talent",
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
    subtitle: "Discreet IT executive search for CTOs, tech leads & senior engineers",
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
    subtitle: "Hire in Eastern Europe - no local entity needed",
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
    subtitle: "Real-time IT salary benchmarks by role, seniority & tech stack",
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
    title: "IT Payroll, Compliance & Business Advisory",
    subtitle: "Operational & compliance support for international tech companies",
    intro: "",
    sections: [
      {
        heading: "Full-Spectrum Compliance Support",
        points: [
          "Payroll management and accounting coordination for IT teams",
          "Tax coordination and contractor compliance across jurisdictions",
          "Labor law guidance for local and remote employees",
          "International expansion support — from first hire to full operations",
        ],
      },
      {
        heading: "What You Get",
        points: [
          "Zero compliance risk across hiring models",
          "Clear contractor vs. employee structuring",
          "Accurate, timely payroll — every time",
          "A trusted advisory partner as you scale internationally",
        ],
      },
    ],
    stats: [
      { value: "400+", label: "IT Clients Served" },
      { value: "6+", label: "Compliance Areas Covered" },
      { value: "100%", label: "Jurisdiction-Specific Guidance" },
    ],
    href: "/services/it-payroll-compliance-advisory",
  },
];
