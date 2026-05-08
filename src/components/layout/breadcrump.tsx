"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { Fragment, useMemo } from "react"

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
  "saas-recruitment": "RecruitmentRecruitment",
  "cybersecurity-recruitment": "Cybersecurity Recruitment",
  "ecommerce-recruitment": "E-Commerce Recruitment",
  "igaming-recruitment": "iGaming Recruitment",
  "aiml-recruitment": "AI & ML Recruitment",
  "specialized-industries": "Specialized Industries",
  "blog": "Blog",
  "candidates": "For Candidates",
  "process": "Our Process",
  "applicant-tracking-system": "Applicant Tracking System",
}

const ROUTE_HREFS: Record<string, string> = {
  "services": "/#services",
  "expertise-services": "/#expertise-services",
}

function formatSegment(segment: string): string {
  // Check if we have a custom label
  if (ROUTE_LABELS[segment]) {
    return ROUTE_LABELS[segment]
  }

  // Otherwise format the segment nicely
  return segment
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

export function Breadcrumb() {
  const pathname = usePathname()

  const breadcrumbs = useMemo<BreadcrumbItem[]>(() => {
    if (pathname === "/") return []

    const segments = pathname.split("/").filter(Boolean)

    const items: BreadcrumbItem[] = segments.map((segment, index) => {
      const href = ROUTE_HREFS[segment] ?? "/" + segments.slice(0, index + 1).join("/")  // CHANGE THIS LINE
      const isCurrentPage = index === segments.length - 1

      return {
        label: formatSegment(segment),
        href,
        isCurrentPage,
      }
    })

    return items
  }, [pathname])

  if (breadcrumbs.length === 0) return null

  return (
    <nav
      aria-label="Breadcrumb"
      className="w-full bg-brand-navy h-8 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full">
        <ol className="flex items-center gap-1.5 text-sm">
          <li className="flex items-center">
            <Link
              href="/"
              className="group flex items-center gap-1.5 text-brand-white/80 hover:text-brand-coral transition-colors duration-200"
              aria-label="Home"
            >
              <span className="flex items-center justify-center w-6 h-6 rounded-md bg-brand-navy/[0.04] group-hover:bg-brand-coral/10 transition-colors duration-200">
                <Home className="w-3.5 h-3.5" />
              </span>
              <span className="hidden sm:inline font-medium">Home</span>
            </Link>
          </li>

          {/* Breadcrumb items */}
          {breadcrumbs.map((item, index) => (
            <Fragment key={item.href}>
              {/* Separator */}
              <li className="flex items-center text-brand-white/50" aria-hidden="true">
                <ChevronRight className="w-4 h-4" />
              </li>

              {/* Breadcrumb item */}
              <li className="flex items-center">
                {item.isCurrentPage ? (
                  <span
                    className="font-semibold text-brand-white/80 truncate max-w-[200px]"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="font-medium text-brand-white/50 hover:text-brand-coral transition-colors duration-200 truncate max-w-[200px]"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            </Fragment>
          ))}
        </ol>
      </div>
    </nav>
  )
}
