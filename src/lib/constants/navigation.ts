export interface DropdownItem {
  label: string
  href: string
  icon: string
  openInNewTab?: boolean
}

export interface MegaMenuItem {
  label: string
  description?: string
  href: string
  icon: string
  openInNewTab?: boolean
}

export interface MegaMenuSection {
  title: string
  items: MegaMenuItem[]
}

export interface NavItem {
  label: string
  href?: string
  hasDropdown?: boolean
  hasMegaMenu?: boolean
  dropdownItems?: DropdownItem[]
  megaSections?: MegaMenuSection[]
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Services",
    hasMegaMenu: true,
    megaSections: [
      {
        title: "What We Offer",
        items: [
          {
            label: "Permanent IT Recruitment",
            description: "Full-time placements for long-term team building",
            icon: "Users",
            href: "/services/permanent-it-recruitment",
          },
          {
            label: "Contract / Freelance / B2B / Remote",
            description: "Flexible hiring across all engagement models",
            icon: "Briefcase",
            href: "/services/contract-freelance-b2b-remote-recruitment",
          },
          {
            label: "Confidential Headhunting & Executive Search",
            description: "Discreet search for senior & leadership roles",
            icon: "Search",
            href: "/services/confidential-headhunting-executive-search",
          },
          {
            label: "Employer of Record (EOR)",
            description: "Hire globally without a local entity",
            icon: "Clock",
            href: "/services/employer-of-record",
          },
          {
            label: "IT Salary Benchmarking & Hiring Insights",
            description: "Data-driven compensation & market intelligence",
            icon: "UserCheck",
            href: "/services/it-salary-benchmarking-and-hiring-insights",
          },
          {
            label: "IT Payroll, Compliance & Business Advisory",
            description: "End-to-end payroll, legal & advisory support",
            icon: "Globe",
            href: "/services/it-payroll-compliance-advisory",
          },
        ],
      },
    ],
  },
  {
    label: "For Companies",
    hasMegaMenu: true,
    megaSections: [
      {
        title: "Technical Recruitment",
        items: [
          {
            label: "Software Engineering",
            description: "Developers, Engineers, Architects",
            icon: "Code2",
            href: "/tech-recruitment#software-engineering",
          },
          {
            label: "DevOps",
            description: "DevOps, SRE, Platform Engineers",
            icon: "Infinity",
            href: "/tech-recruitment#devops",
          },
          {
            label: "QA Security",
            description: "QA Engineers, Security Specialists, Automation Experts",
            icon: "ShieldCheck",
            href: "/tech-recruitment#qa-security",
          },
          {
            label: "Data Engineering",
            description: "Data Engineers, BI Developers, Analytics Experts",
            icon: "Database",
            href: "/tech-recruitment#data-engineering",
          },
          {
            label: "AI / ML / Data",
            description: "ML Engineers, Data Scientists, Analysts",
            icon: "Brain",
            href: "/tech-recruitment#ai-ml",
          },
          {
            label: "Mobile Development",
            description: "iOS, Android, React Native Developers",
            icon: "Smartphone",
            href: "/tech-recruitment#mobile-development",
          },
          {
            label: "Engineering Leadership",
            description: "CTOs, VPs, Engineering Managers, Tech Leads",
            icon: "Briefcase",
            href: "/tech-recruitment#engineering-leadership",
          },
        ],
      },
      {
        title: "Industries we cover",
        items: [
          {
            label: "Fintech Recruitment",
            icon: "Landmark",
            href: "/expertise-services/fintech-recruitment",
            description: "Payments, Banking, Crypto, FinTech Startups",
          },
          {
            label: "iGaming Recruitment",
            icon: "Gamepad2",
            href: "/expertise-services/igaming-recruitment",
            description: "Casino, Sports Betting, Gaming Platforms",
          },
          {
            label: "AI/ML Recruitment",
            icon: "Brain",
            href: "/expertise-services/aiml-recruitment",
            description: "AI Engineers, ML Teams, Data Scientists",
          },
          {
            label: "Cybersecurity Recruitment",
            icon: "ShieldCheck",
            href: "/expertise-services/cybersecurity-recruitment",
            description: "Security Engineers, Analysts, Compliance Experts",
          },
          {
            label: "SaaS Recruitment",
            icon: "Cloud",
            href: "/expertise-services/saas-recruitment",
            description: "B2B SaaS, Product Teams, Cloud Platforms",
          },
          {
            label: "And More",
            icon: "MoreHorizontal",
            href: "/expertise-services/specialized-industries",
            description: "Healthcare, Automotive, Gaming, Startups & More",
          },
        ],
      },
      {
        title: "Company Resources",
        items: [
          {
            label: "Our Process",
            description: "How we work",
            icon: "Bookmark",
            href: "/process",
          },
          {
            label: "Client Partnerships",
            description: "Companies we partner with",
            icon: "Users",
            href: "/partnerships",
          },
          {
            label: "Tech Recruitment",
            description: "Hire Software, Data, AI & Engineering Talent",
            icon: "Users",
            href: "/tech-recruitment",
          },
          {
            label: "Why Us",
            description: "What makes us different",
            icon: "Star",
            href: "#companies",
          },
          {
            label: "FAQ",
            description: "Frequently asked questions",
            icon: "HelpCircle",
            href: "#faq",
          },
        ],
      },
    ],
  },
  {
    label: "For Candidates",
    hasMegaMenu: true,
    megaSections: [
      {
        title: "Your Career, Our Network",
        items: [
          {
            label: "Why Us?",
            description: "How we advocate for candidates",
            icon: "Star",
            href: "/candidates",
          },
          {
            label: "Open Jobs",
            description: "Explore roles across tech, data, leadership & more",
            icon: "Briefcase",
            href: "/job-listings",
          },
          {
            label: "Join Our B2B / Freelance Network",
            description: "Register as a contractor or independent consultant",
            icon: "Users",
            href: "/join-talent-network",
          },
        ],
      },
    ],
  },
  {
    label: "Own ATS / CRM",
    hasMegaMenu: true,
    megaSections: [
      {
        title: "Our Recruitment Platform",
        items: [
          {
            label: "Smart.R — Our ATS",
            description: "AI-powered applicant tracking & CRM built for recruiters",
            icon: "Database",
            href: "/applicant-tracking-system",
          },
          {
            label: "Book a Demo",
            description: "See Smart.R in action with a personalised walkthrough",
            icon: "Phone",
            href: "/contacts",
          },
        ],
      },
    ],
  },
  {
   label: "About Us",
    hasMegaMenu: true,
    megaSections: [
      {
        title: "See Who We Are",
        items: [
          {
            label: "About Us",
            description: "The team behind it all",
            icon: "Users",
            href: "/about",
          },
          {
            label: "Candidates Feedbacks",
            description: "What our clients say about us",
            icon: "Phone",
            href: "/candidates#client-testimonials",
          },
          {
            label: "Companies Feedbacks",
            description: "What our partners say about working with us",
            icon: "Star",
            href: "/partnerships#companies-testimonials",
          },
        ],
      },
    ],
  },

  // { label: "About Us", href: "/about" },
]

export const HEADER_SCROLL_THRESHOLD = 80
export const SCROLL_OFFSET = 100