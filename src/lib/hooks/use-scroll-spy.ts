// hooks/use-scroll-spy.ts
"use client"

import { useEffect, useRef } from "react"

interface UseScrollSpyOptions {
  sectionIds: string[]
  /** Sticky header height in px — the activation zone starts below this */
  headerOffset?: number
}

export function useScrollSpy({ sectionIds, headerOffset = 80 }: UseScrollSpyOptions) {
  const activeIdRef = useRef<string | null>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (sections.length === 0) return

    const intersectingIds = new Set<string>()

    const updateHash = (id: string) => {
      if (activeIdRef.current === id) return
      activeIdRef.current = id

      const newHash = `#${id}`
      if (window.location.hash === newHash) return

      const url = `${window.location.pathname}${window.location.search}${newHash}`
      // replaceState: no scroll, no history pollution, no route change
      window.history.replaceState(window.history.state, "", url)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id
          if (entry.isIntersecting) intersectingIds.add(id)
          else intersectingIds.delete(id)
        }

        // Pick the first intersecting section in document order
        const activeId = sectionIds.find((id) => intersectingIds.has(id))
        if (activeId) updateHash(activeId)
      },
      {
        // Thin activation band just below the sticky header
        rootMargin: `-${headerOffset}px 0px -85% 0px`,
        threshold: 0,
      }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [sectionIds, headerOffset])
}