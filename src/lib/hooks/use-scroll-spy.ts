// hooks/use-scroll-spy.ts
"use client"

import { useEffect, useRef } from "react"

interface UseScrollSpyOptions {
  sectionIds: string[]
  headerOffset?: number
  /** Clear the hash when no tracked section is in the activation zone. Default: true */
  clearWhenOutside?: boolean
}

export function useScrollSpy({
  sectionIds,
  headerOffset = 80,
  clearWhenOutside = true,
}: UseScrollSpyOptions) {
  const activeIdRef = useRef<string | null>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (sections.length === 0) return

    const intersectingIds = new Set<string>()

    const replaceUrl = (hash: string) => {
      const oldURL = window.location.href
      const url = `${window.location.pathname}${window.location.search}${hash}`
      window.history.replaceState(window.history.state, "", url)
      // replaceState doesn't fire hashchange — dispatch it manually so consumers
      // like the breadcrumb can react.
      window.dispatchEvent(
        new HashChangeEvent("hashchange", { oldURL, newURL: window.location.href }),
      )
    }

    const setActive = (id: string) => {
      if (activeIdRef.current === id) return
      activeIdRef.current = id
      const newHash = `#${id}`
      if (window.location.hash !== newHash) replaceUrl(newHash)
    }

    const clearActive = () => {
      if (activeIdRef.current === null) return
      activeIdRef.current = null
      if (window.location.hash) replaceUrl("")
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id
          if (entry.isIntersecting) intersectingIds.add(id)
          else intersectingIds.delete(id)
        }

        const activeId = sectionIds.find((id) => intersectingIds.has(id))
        if (activeId) setActive(activeId)
        else if (clearWhenOutside) clearActive()
      },
      {
        rootMargin: `-${headerOffset}px 0px -85% 0px`,
        threshold: 0,
      },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [sectionIds, headerOffset, clearWhenOutside])
}