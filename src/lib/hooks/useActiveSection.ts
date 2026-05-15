// hooks/useActiveSection.ts
"use client"

import { useEffect, useMemo, useState } from "react"
import { DEFAULT_HEADER_OFFSET } from "@/lib/section-navigation"

interface UseActiveSectionOptions {
  /** Ordered list of DOM ids to observe. Order defines the "first wins" tie-break. */
  sectionIds: string[]
  /** Sticky-header offset, in px. Default 80. */
  headerOffset?: number
  /**
   * When `true`, sets active back to `null` when no section is in the
   * activation band. When `false` (default), the last active section is
   * preserved across small gaps — better UX for a visual nav.
   */
  clearWhenOutside?: boolean
}

/**
 * Tracks the section currently in view via a single `IntersectionObserver`.
 *
 * Performance notes:
 *  - One observer instance for the whole list (no per-section observers).
 *  - No scroll listener.
 *  - `setActiveId` bails out on no-op updates to avoid re-renders.
 *  - Re-subscribes only when the id list or offset actually changes.
 */
export function useActiveSection({
  sectionIds,
  headerOffset = DEFAULT_HEADER_OFFSET,
  clearWhenOutside = false,
}: UseActiveSectionOptions): string | null {
  // Stable dep key for the array contents so callers don't have to memoize.
  const idsKey = useMemo(() => sectionIds.join("|"), [sectionIds])

  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    if (typeof window === "undefined") return
    const ids = idsKey ? idsKey.split("|") : []
    if (ids.length === 0) return

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    const intersecting = new Set<string>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const { id } = entry.target as HTMLElement
          if (entry.isIntersecting) intersecting.add(id)
          else intersecting.delete(id)
        }

        // First id (in declared order) that is currently intersecting wins.
        const next = ids.find((id) => intersecting.has(id)) ?? null

        if (next) {
          setActiveId((prev) => (prev === next ? prev : next))
        } else if (clearWhenOutside) {
          setActiveId((prev) => (prev === null ? prev : null))
        }
        // else: preserve last active across gaps between sections
      },
      {
        // Activation band: from `headerOffset` to 15% from the top of the viewport.
        // Matches the existing `useScrollSpy` rootMargin for consistent behavior.
        rootMargin: `-${headerOffset}px 0px -85% 100px`,
        threshold: 0,
      },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [idsKey, headerOffset, clearWhenOutside])

  return activeId
}
