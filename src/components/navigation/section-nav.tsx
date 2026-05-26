"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
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
  sections: Section[]
  headerOffset?: number
  className?: string
  hideOnMobile?: boolean
  hideOnDesktop?: boolean
  hideMobileProgress?: boolean
}

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

  const [collapsed, setCollapsed] = useState(false)
  const [hydrated, setHydrated] = useState(false)

  const [motion, setMotion] = useState<typeof import("framer-motion") | null>(null)
  useEffect(() => {
    import("framer-motion").then((m) => setMotion(m))
  }, [])

  useEffect(() => {
    try {
      if (window.localStorage.getItem(SECTION_NAV_STORAGE_KEY) === "1") {
        setCollapsed(true)
      }
    } catch {
    }
    setHydrated(true)
  }, [])

  const toggleCollapsed = useCallback(() => {
    setCollapsed((prev) => {
      const next = !prev
      try {
        window.localStorage.setItem(SECTION_NAV_STORAGE_KEY, next ? "1" : "0")
      } catch {
      }
      return next
    })
  }, [])

  const handleNav = useCallback(
    (id: string) => smoothScrollTo(id, headerOffset),
    [headerOffset],
  )

  if (visibleSections.length === 0) return null

  if (!motion) return null

  const { motion: m, AnimatePresence, useReducedMotion } = motion

  return (
    <>
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
                motion={m}
                useReducedMotion={useReducedMotion}
              />
            ) : (
              <ExpandedRail
                key="expanded"
                sections={visibleSections}
                activeId={activeId}
                onNavigate={handleNav}
                onCollapse={toggleCollapsed}
                hydrated={hydrated}
                motion={m}
                useReducedMotion={useReducedMotion}
              />
            )}
          </AnimatePresence>
        </nav>
      )}

      {!hideOnMobile && (
        <>
          {!hideMobileProgress && (
            <ScrollProgress variant="bar" className="lg:hidden" />
          )}
          <MobileSectionNav
            sections={visibleSections}
            activeId={activeId}
            headerOffset={headerOffset}
            motion={motion}
          />
        </>
      )}
    </>
  )
}

type MotionLib = typeof import("framer-motion")

interface ExpandedRailProps {
  sections: Section[]
  activeId: string | null
  onNavigate: (id: string) => void
  onCollapse: () => void
  hydrated: boolean
  motion: MotionLib["motion"]
  useReducedMotion: MotionLib["useReducedMotion"]
}

function ExpandedRail({
  sections,
  activeId,
  onNavigate,
  onCollapse,
  hydrated,
  motion: m,
  useReducedMotion,
}: ExpandedRailProps) {
  const reduced = useReducedMotion()
  const initial =
    hydrated && !reduced ? { opacity: 0, x: 6 } : ({ opacity: 1, x: 0 } as const)

  return (
    <m.div
      initial={initial}
      animate={{ opacity: 1, x: 0 }}
      exit={reduced ? { opacity: 0 } : { opacity: 0, x: 6 }}
      transition={{ duration: reduced ? 0 : 0.16, ease: "easeOut" }}
      className="flex items-stretch gap-2"
    >
      <ScrollProgress variant="rail" />

      <div
        className={cn(
          "min-w-42 rounded-2xl border border-border/60 bg-background/70 p-1.5 shadow-sm backdrop-blur-md",
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
              motion={m}
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
            "text-muted-foreground transition-colors hover:bg-foreground/3 hover:text-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          )}
        >
          <ChevronRight className="h-3.5 w-3.5" aria-hidden />
        </button>
      </div>
    </m.div>
  )
}

interface SectionItemProps {
  section: Section
  isActive: boolean
  onSelect: (id: string) => void
  reduced: boolean
  motion: MotionLib["motion"]
}

function SectionItem({ section, isActive, onSelect, reduced, motion: m }: SectionItemProps) {
  const Icon = section.icon

  return (
    <li className="relative">
      {isActive && (
        <m.span
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
  motion: MotionLib["motion"]
  useReducedMotion: MotionLib["useReducedMotion"]
}

function CollapsedTrigger({ onClick, hydrated, motion: m, useReducedMotion }: CollapsedTriggerProps) {
  const reduced = useReducedMotion()
  const initial =
    hydrated && !reduced ? { opacity: 0, x: 6 } : ({ opacity: 1, x: 0 } as const)

  return (
    <m.button
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
    </m.button>
  )
}

function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ")
}