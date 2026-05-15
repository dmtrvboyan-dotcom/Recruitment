// hooks/useScrollProgress.ts
"use client"

import { useEffect, useState } from "react"

/**
 * Returns a normalized scroll progress for the document, in the range [0, 1].
 *
 * Performance:
 *  - Single passive scroll listener, `rAF`-throttled.
 *  - Skips state updates when the rounded value hasn't changed (1‰ precision),
 *    so consumers don't re-render on every frame.
 *  - SSR-safe (defaults to 0 before mount).
 */
export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (typeof window === "undefined") return

    let ticking = false
    let lastValue = -1

    const update = () => {
      ticking = false
      const scrollTop = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight

      const raw = docHeight > 0 ? scrollTop / docHeight : 0
      const clamped = raw < 0 ? 0 : raw > 1 ? 1 : raw

      // Quantize to 1/1000 so a noisy scrollY doesn't thrash React.
      const quantized = Math.round(clamped * 1000) / 1000
      if (quantized === lastValue) return
      lastValue = quantized
      setProgress(quantized)
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  return progress
}