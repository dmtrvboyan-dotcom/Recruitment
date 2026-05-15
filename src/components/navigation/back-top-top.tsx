"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ArrowUp } from "lucide-react"
import { scrollToTop } from "@/lib/section-navigation"

interface BackToTopProps {
  threshold?: number

  className?: string
  hideOnMobile?: boolean
}

/**
 * Global back-to-top button. Appears once the user scrolls past `threshold`.
 *
 * Mount once in your root layout — it's safe across all pages and SSR.
 */
export function BackToTop({
  threshold = 400,
  className,
  hideOnMobile = false,
}: BackToTopProps) {
  const [visible, setVisible] = useState(false)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (typeof window === "undefined") return

    let ticking = false
    const update = () => {
      ticking = false
      setVisible(window.scrollY > threshold)
    }
    const onScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [threshold])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 8 }}
          animate={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={reduced ? { opacity: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: reduced ? 0 : 0.18, ease: "easeOut" }}
          className={cn(
            "fixed z-40 inline-flex h-10 w-10 items-center justify-center rounded-full",
            "border border-border/60 bg-background/80 text-foreground shadow-sm backdrop-blur-md",
            "transition-colors hover:bg-background",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            hideOnMobile && "hidden lg:inline-flex",
            // Default position — `className` can override.
            "bottom-6 right-6",
            className,
          )}
        >
          <ArrowUp className="h-4 w-4" aria-hidden />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ")
}