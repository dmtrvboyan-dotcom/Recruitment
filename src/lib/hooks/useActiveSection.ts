"use client"

import { useEffect, useMemo, useState } from "react"
import { DEFAULT_HEADER_OFFSET } from "@/lib/section-navigation"

interface UseActiveSectionOptions {
  /** Ordered list of DOM ids to observe. Order defines tie-break. */
  sectionIds: string[]
  /** Sticky-header offset in px. Default 80. */
  headerOffset?: number
  /**
   * When `true`, sets active back to `null` when no section has passed the
   * header line yet (i.e. user is above the first section).
   * When `false` (default) the first section stays highlighted from the top.
   */
  clearWhenOutside?: boolean
}

/**
 * Returns the id of the section the user is currently reading.
 *
 * Algorithm: walk sections in order, keep updating `best` for every section
 * whose top edge has scrolled at or above the activation line (headerOffset).
 * The last one that qualifies wins — this is always the section whose content
 * fills the viewport, regardless of how short the remaining page is.
 *
 * Why not IntersectionObserver?
 * With a narrow rootMargin (-85% bottom), tall sections preceding a target
 * section can still be "intersecting" while the target is at the top of the
 * viewport, causing the wrong item to stay highlighted. The scroll +
 * getBoundingClientRect approach has none of that ambiguity: only the top
 * edge of each section matters, so section height is irrelevant.
 *
 * Performance:
 *  - Single passive scroll listener, rAF-throttled.
 *  - getBoundingClientRect on ~5-10 elements per frame is negligible.
 *  - State updates bail out when the value hasn't changed.
 *  - Re-subscribes only when the id list or offset changes.
 */
export function useActiveSection({
  sectionIds,
  headerOffset = DEFAULT_HEADER_OFFSET,
  clearWhenOutside = false,
}: UseActiveSectionOptions): string | null {
  const idsKey = useMemo(() => sectionIds.join("|"), [sectionIds])
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    if (typeof window === "undefined") return
    const ids = idsKey ? idsKey.split("|") : []
    if (ids.length === 0) return

    const compute = (): string | null => {
      let best: string | null = null
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        // +1 px tolerance for sub-pixel rounding
        if (el.getBoundingClientRect().top <= headerOffset + 1) {
          best = id
        }
      }
      return best
    }

    const sync = () => {
      const next = compute()
      if (next) {
        setActiveId((prev) => (prev === next ? prev : next))
      } else if (clearWhenOutside) {
        setActiveId((prev) => (prev === null ? prev : null))
      }
      // else: nothing has passed the line yet — keep whatever we had
    }

    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(() => {
        ticking = false
        sync()
      })
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    // Run immediately so the nav is correct on first render / back-navigation.
    sync()

    return () => window.removeEventListener("scroll", onScroll)
  }, [idsKey, headerOffset, clearWhenOutside])

  return activeId
}
