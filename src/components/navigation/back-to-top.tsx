"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUp } from "lucide-react"
import { scrollToTop } from "@/lib/section-navigation"

interface BackToTopProps {
  threshold?: number
  className?: string
  hideOnMobile?: boolean
}

export function BackToTop({
  threshold = 400,
  className,
  hideOnMobile = false,
}: BackToTopProps) {
  const [visible, setVisible] = useState(false)
  const [MotionButton, setMotionButton] = useState<React.ElementType | null>(null)
  const [AnimatePresence, setAnimatePresence] = useState<React.ElementType | null>(null)
  const reducedRef = useRef(false)

  useEffect(() => {
    reducedRef.current =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    import("framer-motion").then((m) => {
      setMotionButton(() => m.motion.button)
      setAnimatePresence(() => m.AnimatePresence)
    })
  }, [])

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

  const baseClass = cn(
    "fixed z-40 inline-flex h-10 w-10 items-center justify-center rounded-full",
    "border border-border/60 bg-background/80 text-foreground shadow-sm backdrop-blur-md",
    "transition-colors hover:bg-background",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    hideOnMobile && "hidden lg:inline-flex cursor-pointer",
    "bottom-5 right-6",
    className,
  )

  if (!MotionButton || !AnimatePresence) {
    return null
  }

  const AP = AnimatePresence as React.FC<{ children: React.ReactNode }>
  const MB = MotionButton as React.ElementType
  const reduced = reducedRef.current

  return (
    <AP>
      {visible && (
        <MB
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 8 }}
          animate={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={reduced ? { opacity: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: reduced ? 0 : 0.18, ease: "easeOut" }}
          className={baseClass}
        >
          <ArrowUp className="h-4 w-4" aria-hidden />
        </MB>
      )}
    </AP>
  )
}

function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ")
}