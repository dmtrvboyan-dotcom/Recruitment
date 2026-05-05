/**
 * Navigation configuration for the header and mobile menu
 */

export interface DropdownItem {
  label: string
  href: string
  openInNewTab?: boolean
}

export interface NavItem {
  label: string
  href?: string
  hasDropdown?: boolean
  dropdownItems?: DropdownItem[]
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
    hasDropdown: true,
    dropdownItems: [
      { label: "Who we serve", href: "#companies" },
      { label: "Q&A", href: "#faq" },
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
  // { label: "Analyses", href: "/blog", openInNewTab: true },
  { label: "About Us", href: "#about" },

]

export const HEADER_SCROLL_THRESHOLD = 80
export const SCROLL_OFFSET = 100
