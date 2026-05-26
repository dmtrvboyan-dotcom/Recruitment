"use client"

import { memo, useState, useEffect } from "react"
import { SERVICES, PAUSE_MS, EXIT_MS, ENTER_MS } from "./data"

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
type AnimPhase = "idle" | "exiting" | "entering"

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
/**
 * Cycles through every entry in SERVICES with a slide-up / fade animation.
 * Pass `active={false}` to freeze it on the first item (e.g. before hydration
 * or when the user prefers reduced motion).
 *
 * The required keyframes (`rtext-in` / `rtext-out`) live in `globals.css`.
 */
export const RotatingText = memo(function RotatingText({
  active,
}: {
  active: boolean
}) {
  const [index, setIndex] = useState(0)
  const [phase, setPhase] = useState<AnimPhase>("idle")

  useEffect(() => {
    if (!active) return

    let pauseId:     ReturnType<typeof setTimeout>
    let exitId:      ReturnType<typeof setTimeout>
    let enterDoneId: ReturnType<typeof setTimeout>

    const schedule = () => {
      pauseId = setTimeout(() => {
        setPhase("exiting")

        exitId = setTimeout(() => {
          setIndex(i => (i + 1) % SERVICES.length)
          setPhase("entering")

          enterDoneId = setTimeout(() => {
            setPhase("idle")
            schedule()
          }, ENTER_MS)
        }, EXIT_MS)
      }, PAUSE_MS)
    }

    schedule()

    return () => {
      clearTimeout(pauseId)
      clearTimeout(exitId)
      clearTimeout(enterDoneId)
    }
  }, [active])

  return (
    <span
      className="relative block w-full min-h-8 sm:min-h-[1.6em] overflow-hidden mt-1 text-md sm:text-2xl"
      aria-live="polite"
      aria-atomic="true"
    >
      <span
        className={`rtext-${phase} absolute inset-x-0 top-0 font-semibold text-brand-navy leading-snug text-center will-change-[opacity,transform]`}
      >
        {SERVICES[index]}
      </span>
    </span>
  )
})