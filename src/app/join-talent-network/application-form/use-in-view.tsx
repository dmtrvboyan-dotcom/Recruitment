"use client"

import { useEffect, useRef, useState } from "react"

/* ──────────────────────────────────────────────────────────────────────────
   useInView — fires once when the element scrolls into view.
   Generic over the element type so it can be reused on form, div, etc.
   ────────────────────────────────────────────────────────────────────────── */
   
export function useInView<T extends HTMLElement = HTMLDivElement>(threshold = 0.1) {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, visible }
}