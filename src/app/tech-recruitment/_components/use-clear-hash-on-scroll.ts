"use client"

import { useEffect } from "react"

export function useClearHashOnScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return

    const clearHash = () => {
      if (!window.location.hash) return
      const url = `${window.location.pathname}${window.location.search}`
      window.history.replaceState(window.history.state, "", url)
    }

    const onKeyDown = (e: KeyboardEvent) => {
      const scrollKeys = new Set([
        "ArrowDown", "ArrowUp", "PageDown", "PageUp",
        "Home", "End", " ", "Spacebar",
      ])
      if (scrollKeys.has(e.key)) clearHash()
    }

    window.addEventListener("wheel", clearHash, { passive: true })
    window.addEventListener("touchmove", clearHash, { passive: true })
    window.addEventListener("keydown", onKeyDown)

    return () => {
      window.removeEventListener("wheel", clearHash)
      window.removeEventListener("touchmove", clearHash)
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [])
}