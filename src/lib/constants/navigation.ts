

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
    hasDropdown: true,
    dropdownItems: [
      { label: "Permanent IT Recruitment", icon: "Users", href: "/services/permanent-it-recruitment" },
      { label: "Contract/Freelance/B2B/Remote Hiring", icon: "Briefcase", href: "/services/contract-freelance-b2b-remote-recruitment" },
      { label: "Confidential Headhunting and Executive search", icon: "Search", href: "/services/confidential-headhunting-executive-search" },
      { label: "Project Based IT Recruitment", icon: "Clock", href: "/services/project-based-it-recruitment" },
      { label: "Remote IT Hiring & Global Talent", icon: "Globe", href: "/services/remote-it-hiring-and-global-talent" },
      { label: "IT Salary Benchmarking & Hiring Insights", icon: "UserCheck", href: "/services/it-salary-benchmarking-and-hiring-insights" },

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
          // {
          //   label: "UX / UI Designers",
          //   description: "Product Designers, UX Researchers, UI Specialists",
          //   icon: "Palette",
          //   href: "/tech-recruitment#ux-ui-design",
          // },
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
          // {
          //   label: "E-commerce Recruitment",
          //   icon: "ShoppingCart",
          //   href: "/expertise-services/ecommerce-recruitment",
          //   description: "Marketplace, Retail Tech, Growth Teams",
          // },
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
    hasDropdown: true,
    dropdownItems: [
      { label: "Why us?", icon: "Star", href: "/candidates" },
      { label: "See our jobs", icon: "Briefcase", href: "/job-listings" },
      { label: "Join our b2b/freelance network ", icon: "Briefcase", href: "/join-talent-network" },
    ],
  },
  {
    label: "Own ATS / CRM",
    hasDropdown: true,
    dropdownItems: [
      { label: "Smart.R", icon: "Database", href: "/applicant-tracking-system" },
      { label: "Book a demo", icon: "Phone", href: "/contacts" },
    ],
  },
  { label: "About Us", href: "/about" },
]

export const HEADER_SCROLL_THRESHOLD = 80
export const SCROLL_OFFSET = 100
