// components/layout/breadcrumb.tsx
"use client"

import { Fragment, useMemo } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"
import { useCurrentHash } from "@/lib/hooks/use-current-hash"

interface BreadcrumbItem {
  label: string
  href: string
  isCurrentPage: boolean
}

const ROUTE_LABELS: Record<string, string> = {
  "about": "About Us",
  "services": "Our Services",
  "permanent-it-recruitment": "Permanent IT Recruitment",
  "hire-contract": "Contract Hiring",
  "expertise-services": "Expertise Services",
  "fintech-recruitment": "Fintech Recruitment",
  "saas-recruitment": "SaaS Recruitment",
  "cybersecurity-recruitment": "Cybersecurity Recruitment",
  "ecommerce-recruitment": "E-Commerce Recruitment",
  "igaming-recruitment": "iGaming Recruitment",
  "aiml-recruitment": "AI & ML Recruitment",
  "specialized-industries": "Specialized Industries",
  "blog": "Blog",
  "candidates": "For Candidates",
  "process": "Our Process",
  "applicant-tracking-system": "Applicant Tracking System",
  "tech-recruitment": "Tech Recruitment",
}

const ROUTE_HREFS: Record<string, string> = {
  "services": "/#services",
  "expertise-services": "/#expertise-services",
}

// Hash labels grouped by pathname.
// Keep these short — they're shown after the page name on mobile.
const HASH_LABELS: Record<string, Record<string, string>> = {
  "/tech-recruitment": {
    "software-engineering": "Software Engineering",
    "devops": "DevOps",
    "qa-security": "QA & Security",
    "data-engineering": "Data Engineering",
    "ai-ml": "AI / ML",
    "ux-ui-design": "UX / UI",
    "mobile-development": "Mobile Dev",
    "engineering-leadership": "Eng. Leadership",
  },
  "/candidates": {
    "client-testimonials": "Testimonials",
  },
  // add per-page sections here as you wire them up
}

function formatSegment(segment: string): string {
  if (ROUTE_LABELS[segment]) return ROUTE_LABELS[segment]
  return segment
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
}

export function Breadcrumb() {
  const pathname = usePathname()
  const hash = useCurrentHash()

  const breadcrumbs = useMemo<BreadcrumbItem[]>(() => {
    if (pathname === "/") return []

    const segments = pathname.split("/").filter(Boolean)
    const hashId = hash.replace(/^#/, "")
    const hashLabel = hashId ? HASH_LABELS[pathname]?.[hashId] : undefined

    const items: BreadcrumbItem[] = segments.map((segment, index) => {
      const href =
        ROUTE_HREFS[segment] ?? "/" + segments.slice(0, index + 1).join("/")
      const isLastSegment = index === segments.length - 1
      // If we're appending a hash item, the page is no longer the "current" one
      const isCurrentPage = isLastSegment && !hashLabel
      return { label: formatSegment(segment), href, isCurrentPage }
    })

    if (hashLabel) {
      items.push({
        label: hashLabel,
        href: `${pathname}${hash}`,
        isCurrentPage: true,
      })
    }

    return items
  }, [pathname, hash])

  if (breadcrumbs.length === 0) return null

  return (
    <nav
      aria-label="Breadcrumb"
      className="w-full bg-brand-navy h-8 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 w-full overflow-hidden">
        <ol className="flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-sm whitespace-nowrap">
          <li className="flex items-center shrink-0">
            <Link
              href="/"
              className="group flex items-center gap-1.5 text-brand-white/80 hover:text-brand-coral transition-colors duration-200"
              aria-label="Home"
            >
              <span className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-brand-navy/[0.04] group-hover:bg-brand-coral/10 transition-colors duration-200">
                <Home className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </span>
              <span className="hidden sm:inline font-medium">Home</span>
            </Link>
          </li>

          {breadcrumbs.map((item, index) => {
            const isLast = index === breadcrumbs.length - 1
            return (
              <Fragment key={`${item.href}-${index}`}>
                <li
                  className="flex items-center text-brand-white/50 shrink-0"
                  aria-hidden="true"
                >
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </li>

                <li className={`flex items-center ${isLast ? "min-w-0" : "shrink-0"}`}>
                  {item.isCurrentPage ? (
                    <span
                      className="font-semibold text-brand-white/80 truncate max-w-[140px] sm:max-w-[200px] md:max-w-[260px]"
                      aria-current="page"
                    >
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="font-medium text-brand-white/50 hover:text-brand-coral transition-colors duration-200 truncate max-w-[90px] sm:max-w-[180px] md:max-w-[220px]"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              </Fragment>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}