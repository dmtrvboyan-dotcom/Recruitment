// components/navigation/MobileSectionNav.tsx
"use client"

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ChevronUp, X } from "lucide-react"
import {
  DEFAULT_HEADER_OFFSET,
  smoothScrollTo,
  type Section,
} from "@/lib/section-navigation"

interface MobileSectionNavProps {
  sections: Section[]
  activeId: string | null
  headerOffset?: number
  /** Label shown on the FAB when no section is active. Default: "Sections". */
  fallbackLabel?: string
}

/**
 * Mobile-only floating nav: a compact pill that shows the current section,
 * opening a bottom sheet on tap.
 *
 * Rendered automatically by `<SectionNav />` — most consumers won't import
 * this directly.
 */
export function MobileSectionNav({
  sections,
  activeId,
  headerOffset = DEFAULT_HEADER_OFFSET,
  fallbackLabel = "Sections",
}: MobileSectionNavProps) {
  const [open, setOpen] = useState(false)
  const reduced = useReducedMotion()

  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const closeRef = useRef<HTMLButtonElement | null>(null)

  const activeSection = useMemo(
    () => sections.find((s) => s.id === activeId) ?? null,
    [sections, activeId],
  )

  /* --- Body scroll lock while the sheet is open ------------------------- */
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previous
    }
  }, [open])

  /* --- Keyboard: Escape closes, basic focus restoration ----------------- */
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault()
        setOpen(false)
      }
    }
    window.addEventListener("keydown", onKey)
    // Move focus into the sheet for keyboard users.
    closeRef.current?.focus()
    return () => {
      window.removeEventListener("keydown", onKey)
    }
  }, [open])

  const handleClose = useCallback(() => {
    setOpen(false)
    // Return focus to the trigger after the close animation runs.
    window.setTimeout(() => triggerRef.current?.focus(), 0)
  }, [])

  const handleNav = useCallback(
    (id: string) => {
      setOpen(false)
      // Wait one tick so the sheet starts closing before we scroll,
      // and so the body's overflow is restored.
      window.setTimeout(() => smoothScrollTo(id, headerOffset), 120)
    },
    [headerOffset],
  )

  if (sections.length === 0) return null

  const sheetTransition = reduced
    ? { duration: 0 }
    : { type: "spring" as const, damping: 32, stiffness: 320, mass: 0.6 }

  return (
    <>
      {/* Floating trigger — pill showing the current section. */}
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Open section navigation. Current section: ${activeSection?.label ?? fallbackLabel}`}
        aria-expanded={open}
        aria-haspopup="dialog"
        className={cn(
          "lg:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-40 inline-flex items-center gap-2",
          "h-10 max-w-[60vw] rounded-full pl-3 pr-2.5",
          "border border-border/60 bg-background/85 text-sm font-medium text-foreground",
          "shadow-sm backdrop-blur-md",
          "transition-colors hover:bg-background",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        )}
      >
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" aria-hidden />
        <span className="truncate">
          {activeSection?.label ?? fallbackLabel}
        </span>
        <ChevronUp className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
      </button>

      {/* Sheet + backdrop */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduced ? 0 : 0.18 }}
              onClick={handleClose}
              className="lg:hidden fixed inset-0 z-50 bg-background/60 backdrop-blur-sm"
              aria-hidden
            />

            <motion.div
              key="sheet"
              role="dialog"
              aria-modal="true"
              aria-label="Page sections"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={sheetTransition}
              style={
                {
                  // Respect the iOS safe area.
                  paddingBottom: "max(env(safe-area-inset-bottom), 0.75rem)",
                } satisfies CSSProperties
              }
              className={cn(
                "lg:hidden fixed inset-x-0 bottom-0 z-50",
                "rounded-t-2xl border-t border-border/60 bg-background shadow-lg",
              )}
            >
              {/* Drag handle (decorative) */}
              <div className="flex justify-center pt-2.5">
                <span
                  className="h-1 w-9 rounded-full bg-border"
                  aria-hidden
                />
              </div>

              <div className="flex items-center justify-between px-4 pt-2 pb-1">
                <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Sections
                </div>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={handleClose}
                  aria-label="Close section navigation"
                  className={cn(
                    "inline-flex h-8 w-8 items-center justify-center rounded-md",
                    "text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  )}
                >
                  <X className="h-4 w-4" aria-hidden />
                </button>
              </div>

              <ul className="flex flex-col px-2 pb-3 pt-1">
                {sections.map((section) => {
                  const isActive = activeId === section.id
                  const Icon = section.icon
                  return (
                    <li key={section.id}>
                      <button
                        type="button"
                        onClick={() => handleNav(section.id)}
                        aria-current={isActive ? "true" : undefined}
                        className={cn(
                          "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                          isActive
                            ? "bg-foreground/5 text-foreground"
                            : "text-muted-foreground hover:bg-foreground/[0.03] hover:text-foreground",
                        )}
                      >
                        {Icon ? (
                          <Icon
                            className={cn(
                              "h-4 w-4 shrink-0",
                              isActive ? "text-foreground" : "text-muted-foreground",
                            )}
                          />
                        ) : (
                          <span
                            aria-hidden
                            className={cn(
                              "h-1.5 w-1.5 shrink-0 rounded-full transition-colors",
                              isActive ? "bg-foreground" : "bg-muted-foreground/50",
                            )}
                          />
                        )}
                        <span className="truncate">{section.label}</span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ")
}
