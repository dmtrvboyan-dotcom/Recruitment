// components/navigation/SectionNav.tsx
"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import {
  DEFAULT_HEADER_OFFSET,
  SECTION_NAV_STORAGE_KEY,
  getVisibleSections,
  smoothScrollTo,
  type Section,
} from "@/lib/section-navigation"
import { MobileSectionNav } from "./mobile-section-nav"
import { ScrollProgress } from "./scroll-progress"
import { useActiveSection } from "@/lib/hooks/useActiveSection"

interface SectionNavProps {
  /** Ordered list of sections. Pass `hidden: true` to omit from the nav. */
  sections: Section[]
  /** Sticky header offset in px. Default 80. */
  headerOffset?: number
  /** Extra classes for the desktop nav wrapper. */
  className?: string
  /**
   * Suppress the mobile FAB + sheet. Useful if you render your own mobile nav.
   * @default false
   */
  hideOnMobile?: boolean
  /**
   * Suppress the desktop floating rail. Useful for pages that already render
   * a sidebar.
   * @default false
   */
  hideOnDesktop?: boolean
  /**
   * Suppress the thin mobile-only top progress bar. Set to `true` if you
   * already render `<ScrollProgress />` somewhere globally.
   * @default false
   */
  hideMobileProgress?: boolean
}

/**
 * Global section navigation system.
 *
 *  - Desktop: floating, vertically-centered rail on the right with collapsible
 *    state persisted to `localStorage`.
 *  - Mobile: compact pill FAB + bottom sheet with a thin top progress bar.
 *  - Active section tracked via a single `IntersectionObserver`.
 *  - SSR-safe, keyboard-accessible, respects `prefers-reduced-motion`.
 *
 * @example
 * const sections = [
 *   { id: "hero",     label: "Hero" },
 *   { id: "features", label: "Features" },
 *   { id: "pricing",  label: "Pricing" },
 *   { id: "faq",      label: "FAQ" },
 * ]
 *
 * <SectionNav sections={sections} />
 */
export function SectionNav({
  sections,
  headerOffset = DEFAULT_HEADER_OFFSET,
  className,
  hideOnMobile = false,
  hideOnDesktop = false,
  hideMobileProgress = false,
}: SectionNavProps) {
  const visibleSections = useMemo(() => getVisibleSections(sections), [sections])
  const sectionIds = useMemo(
    () => visibleSections.map((s) => s.id),
    [visibleSections],
  )

  const activeId = useActiveSection({ sectionIds, headerOffset })

  /* ----- Collapsed state, persisted to localStorage --------------------- */
  const [collapsed, setCollapsed] = useState(false)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    try {
      if (window.localStorage.getItem(SECTION_NAV_STORAGE_KEY) === "1") {
        setCollapsed(true)
      }
    } catch {
      /* localStorage may be disabled — fail open. */
    }
    setHydrated(true)
  }, [])

  const toggleCollapsed = useCallback(() => {
    setCollapsed((prev) => {
      const next = !prev
      try {
        window.localStorage.setItem(SECTION_NAV_STORAGE_KEY, next ? "1" : "0")
      } catch {
        /* ignore */
      }
      return next
    })
  }, [])

  const handleNav = useCallback(
    (id: string) => smoothScrollTo(id, headerOffset),
    [headerOffset],
  )

  if (visibleSections.length === 0) return null

  return (
    <>
      {/* ------------------------------------------------------------------
       *  Desktop: floating rail
       * ----------------------------------------------------------------- */}
      {!hideOnDesktop && (
        <nav
          aria-label="Page sections"
          className={cn(
            "hidden lg:flex fixed right-6 top-1/2 z-40 -translate-y-1/2",
            className,
          )}
        >
          <AnimatePresence initial={false} mode="wait">
            {collapsed ? (
              <CollapsedTrigger
                key="collapsed"
                onClick={toggleCollapsed}
                hydrated={hydrated}
              />
            ) : (
              <ExpandedRail
                key="expanded"
                sections={visibleSections}
                activeId={activeId}
                onNavigate={handleNav}
                onCollapse={toggleCollapsed}
                hydrated={hydrated}
              />
            )}
          </AnimatePresence>
        </nav>
      )}

      {/* ------------------------------------------------------------------
       *  Mobile: FAB + sheet + top progress bar
       * ----------------------------------------------------------------- */}
      {!hideOnMobile && (
        <>
          {!hideMobileProgress && (
            <ScrollProgress variant="bar" className="lg:hidden" />
          )}
          <MobileSectionNav
            sections={visibleSections}
            activeId={activeId}
            headerOffset={headerOffset}
          />
        </>
      )}
    </>
  )
}

/* ============================================================================
 *  Internal pieces
 *  Splitting these out keeps `useScrollProgress`/`AnimatePresence` updates
 *  scoped, so the section list doesn't re-render on every scroll frame.
 * ========================================================================= */

interface ExpandedRailProps {
  sections: Section[]
  activeId: string | null
  onNavigate: (id: string) => void
  onCollapse: () => void
  hydrated: boolean
}

function ExpandedRail({
  sections,
  activeId,
  onNavigate,
  onCollapse,
  hydrated,
}: ExpandedRailProps) {
  const reduced = useReducedMotion()
  const initial =
    hydrated && !reduced ? { opacity: 0, x: 6 } : ({ opacity: 1, x: 0 } as const)

  return (
    <motion.div
      initial={initial}
      animate={{ opacity: 1, x: 0 }}
      exit={reduced ? { opacity: 0 } : { opacity: 0, x: 6 }}
      transition={{ duration: reduced ? 0 : 0.16, ease: "easeOut" }}
      className="flex items-stretch gap-2"
    >
      {/* Vertical scroll-progress fill, isolated so it re-renders on its own */}
      <ScrollProgress variant="rail" />

      <div
        className={cn(
          "min-w-[168px] rounded-2xl border border-border/60 bg-background/70 p-1.5 shadow-sm backdrop-blur-md",
          "flex flex-col gap-0.5",
        )}
      >
        <ul className="flex flex-col">
          {sections.map((section) => (
            <SectionItem
              key={section.id}
              section={section}
              isActive={activeId === section.id}
              onSelect={onNavigate}
              reduced={!!reduced}
            />
          ))}
        </ul>

        <button
          type="button"
          onClick={onCollapse}
          aria-label="Collapse section navigation"
          aria-expanded="true"
          className={cn(
            "mt-0.5 inline-flex h-6 w-full items-center justify-center rounded-md",
            "text-muted-foreground transition-colors hover:bg-foreground/[0.03] hover:text-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          )}
        >
          <ChevronRight className="h-3.5 w-3.5" aria-hidden />
        </button>
      </div>
    </motion.div>
  )
}

interface SectionItemProps {
  section: Section
  isActive: boolean
  onSelect: (id: string) => void
  reduced: boolean
}

function SectionItem({ section, isActive, onSelect, reduced }: SectionItemProps) {
  const Icon = section.icon

  return (
    <li className="relative">
      {/* Animated active indicator — smoothly slides between rows via layoutId. */}
      {isActive && (
        <motion.span
          layoutId="section-nav-active-indicator"
          aria-hidden
          transition={
            reduced
              ? { duration: 0 }
              : { type: "spring", stiffness: 380, damping: 32, mass: 0.5 }
          }
          className="absolute left-1 top-1/2 h-3 w-0.5 -translate-y-1/2 rounded-full bg-foreground"
        />
      )}
      <button
        type="button"
        onClick={() => onSelect(section.id)}
        aria-current={isActive ? "true" : undefined}
        className={cn(
          "group relative flex w-full items-center gap-2 rounded-lg pl-3 pr-2.5 py-1.5",
          "text-xs font-medium transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          isActive
            ? "text-foreground"
            : "text-muted-foreground hover:text-foreground",
        )}
      >
        {Icon ? (
          <Icon
            className={cn(
              "h-3.5 w-3.5 shrink-0 transition-colors",
              isActive
                ? "text-foreground"
                : "text-muted-foreground group-hover:text-foreground",
            )}
          />
        ) : null}
        <span className="truncate">{section.label}</span>
      </button>
    </li>
  )
}

interface CollapsedTriggerProps {
  onClick: () => void
  hydrated: boolean
}

function CollapsedTrigger({ onClick, hydrated }: CollapsedTriggerProps) {
  const reduced = useReducedMotion()
  const initial =
    hydrated && !reduced ? { opacity: 0, x: 6 } : ({ opacity: 1, x: 0 } as const)

  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label="Expand section navigation"
      aria-expanded="false"
      initial={initial}
      animate={{ opacity: 1, x: 0 }}
      exit={reduced ? { opacity: 0 } : { opacity: 0, x: 6 }}
      transition={{ duration: reduced ? 0 : 0.16, ease: "easeOut" }}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-full",
        "border border-border/60 bg-background/70 text-muted-foreground shadow-sm backdrop-blur-md",
        "transition-colors hover:text-foreground",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      )}
    >
      <ChevronLeft className="h-4 w-4" aria-hidden />
    </motion.button>
  )
}

function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ")
}