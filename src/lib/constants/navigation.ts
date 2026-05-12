/**
 * Navigation configuration for the header and mobile menu
 */

export interface DropdownItem {
  label: string
  href: string
  openInNewTab?: boolean
}

export interface MegaMenuItem {
  label: string
  description?: string
  href: string
  icon: string // must match a key in ICON_MAP inside the Header component
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
      { label: "Permanent IT Recruitment", href: "/services/permanent-it-recruitment", openInNewTab: true },
      { label: "Hire Contract or Freelance Devs", href: "/services/hire-contract", openInNewTab: true },
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
            href:"tech-recruitment#hire-data-engineers-bi-developers",
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
          { label: "Fintech", icon: "Landmark", href: "/industries/fintech", openInNewTab: true },
          { label: "SaaS", icon: "Cloud", href: "/industries/saas", openInNewTab: true },
          { label: "iGaming", icon: "Gamepad2", href: "/industries/igaming", openInNewTab: true },
          { label: "Ecommerce", icon: "ShoppingCart", href: "/industries/ecommerce", openInNewTab: true },
          { label: "Healthcare", icon: "HeartPulse", href: "/industries/healthcare", openInNewTab: true },
          { label: "Automotive", icon: "Car", href: "/industries/automotive", openInNewTab: true },
          { label: "And more", icon: "MoreHorizontal", href: "/industries", openInNewTab: true },
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
      { label: "Why us?", href: "/candidates", openInNewTab: true },
      { label: "See our jobs", href: "#jobs" },
    ],
  },
  {
    label: "Own ATS / CRM",
    hasDropdown: true,
    dropdownItems: [
      { label: "Smart.R", href: "#smartr" },
      { label: "Book a demo", href: "#contact" },
    ],
  },
  { label: "About Us", href: "#about" },
]

export const HEADER_SCROLL_THRESHOLD = 80
export const SCROLL_OFFSET = 100