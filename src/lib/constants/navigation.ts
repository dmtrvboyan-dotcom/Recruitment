

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
      { label: "Permanent IT Recruitment", icon: "Users", href: "/services/permanent-it-recruitment", openInNewTab: true },
      { label: "Hire Contract or Freelance Devs", icon: "Briefcase", href: "/services/hire-contract", openInNewTab: true },
      { label: "Project Based IT Recruitment", icon: "Clock", href: "/services/project-based-it-recruitment", openInNewTab: true },
      { label: "Remote IT Hiring & Global Talent", icon: "Globe", href: "/services/remote-it-hiring-and-global-talent", openInNewTab: true },
      { label: "Executive Search & IT Headhunting", icon: "Search", href: "/services/executive-search-and-it-headhunting", openInNewTab: true },
      { label: "IT Salary Benchmarking & Hiring Insights", icon: "UserCheck", href: "/services/it-salary-benchmarking-and-hiring-insights", openInNewTab: true },

    ],
  },
  {
    label: "For Companies",
    hasMegaMenu: true,
    megaSections: [
      {
        title: "Technical Expertise",
        items: [
          {
            label: "Software Engineering",
            description: "Developers, Engineers, Architects",
            icon: "Code2",
            href: "/tech-recruitment#hire-software-engineers",
            openInNewTab: true,
          },
          {
            label: "DevOps",
            description: "DevOps, SRE, Platform Engineers",
            icon: "Infinity",
            href: "/tech-recruitment#hire-devops-engineers",
            openInNewTab: true,
          },
          {
            label: "QA Security",
            description: "QA Engineers, Security Specialists, Automation Experts",
            icon: "ShieldCheck",
            href: "/tech-recruitment#hire-qa-automation-security-engineers",
            openInNewTab: true,
          },
          {
            label: "Data Engineering",
            description: "Data Engineers, BI Developers, Analytics Experts",
            icon: "Database",
            href: "/tech-recruitment#hire-data-engineers-bi-developers",
            openInNewTab: true,
          },
          {
            label: "AI / ML / Data",
            description: "ML Engineers, Data Scientists, Analysts",
            icon: "Brain",
            href: "/tech-recruitment#hire-ai-ml-engineers",
            openInNewTab: true,
          },
          {
            label: "UX / UI Designers",
            description: "Product Designers, UX Researchers, UI Specialists",
            icon: "Palette",
            href: "/tech-recruitment#hire-ui-ux-product-designers",
            openInNewTab: true,
          },
          {
            label: "Mobile development",
            description: "iOS, Android, React Native Developers",
            icon: "Smartphone",
            href: "/tech-recruitment#hire-mobile-app-developers",
            openInNewTab: true,
          },
          {
            label: "Engineering leadership",
            description: "CTOs, VPs, Engineering Managers, Tech Leads",
            icon: "Briefcase",
            href: "/tech-recruitment#hire-engineering-leaders",
            openInNewTab: true,
          },
        ],
      },
      {
        title: "Industries",
        items: [
          {
            label: "Fintech Recruitment",
            icon: "Landmark",
            href: "/expertise-services/fintech-recruitment",
            description: "Payments, Banking, Crypto, FinTech Startups",
            openInNewTab: true,
          },
          {
            label: "iGaming Recruitment",
            icon: "Gamepad2",
            href: "/expertise-services/igaming-recruitment",
            description: "Casino, Sports Betting, Gaming Platforms",
            openInNewTab: true,
          },
          {
            label: "AI/ML Recruitment",
            icon: "Brain",
            href: "/expertise-services/aiml-recruitment",
            description: "AI Engineers, ML Teams, Data Scientists",
            openInNewTab: true,
          },
          {
            label: "Cybersecurity Recruitment",
            icon: "ShieldCheck",
            href: "/expertise-services/cybersecurity-recruitment",
            description: "Security Engineers, Analysts, Compliance Experts",
            openInNewTab: true,
          },
          {
            label: "SaaS Recruitment",
            icon: "Cloud",
            href: "/expertise-services/saas-recruitment",
            description: "B2B SaaS, Product Teams, Cloud Platforms",
            openInNewTab: true,
          },
          {
            label: "E-commerce Recruitment",
            icon: "ShoppingCart",
            href: "/expertise-services/ecommerce-recruitment",
            description: "Marketplace, Retail Tech, Growth Teams",
            openInNewTab: true,
          },
          {
            label: "And More",
            icon: "MoreHorizontal",
            href: "/expertise-services/specialized-industries",
            description: "Healthcare, Automotive, Gaming, Startups & More",
            openInNewTab: true,
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
            openInNewTab: true,
          },
          {
            label: "Client Partnerships",
            description: "Companies we partner with",
            icon: "Users",
            href: "/partnerships",
            openInNewTab: true,
          },
          {
            label: "Tech Recruitment",
            description: "Hire Software, Data, AI & Engineering Talent",
            icon: "Users",
            href: "/tech-recruitment",
            openInNewTab: true,
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
      { label: "Why us?", icon: "Star", href: "/candidates", openInNewTab: true },
      { label: "See our jobs", icon: "Briefcase", href: "#jobs" },
    ],
  },
  {
    label: "Own ATS / CRM",
    hasDropdown: true,
    dropdownItems: [
      { label: "Smart.R", icon: "Database", href: "#smartr" },
      { label: "Book a demo", icon: "Phone", href: "#contact" },
    ],
  },
  { label: "About Us", href: "#about" },
]

export const HEADER_SCROLL_THRESHOLD = 80
export const SCROLL_OFFSET = 100
