// components/navigation/ScrollProgress.tsx
"use client"

import { useScrollProgress } from "@/lib/hooks/useScrollProgress"


interface ScrollProgressProps {
  /**
   * - `"bar"`: thin horizontal bar pinned to the top of the viewport (mobile-friendly).
   * - `"rail"`: vertical fill — intended to be placed inside the desktop nav card.
   *
   * @default "bar"
   */
  variant?: "bar" | "rail"
  /** Extra classes appended to the outer container. */
  className?: string
}

/**
 * Visual scroll-progress indicator. Pure CSS transform — no layout thrash.
 *
 * Use it standalone:
 * ```tsx
 * <ScrollProgress />            // mobile top bar
 * <ScrollProgress variant="rail" />  // vertical fill inside a parent
 * ```
 *
 * `SectionNav` already includes the right variant in the right place; only
 * mount this manually if you want progress on a page without `SectionNav`.
 */
export function ScrollProgress({
  variant = "bar",
  className,
}: ScrollProgressProps) {
  const progress = useScrollProgress()

  if (variant === "rail") {
    return (
      <div
        aria-hidden
        className={cn(
          "relative w-px self-stretch overflow-hidden rounded-full bg-border/60",
          className,
        )}
      >
        <div
          className="absolute inset-x-0 top-0 bg-foreground/80 will-change-[height] transition-[height] duration-150 ease-out"
          style={{ height: `${progress * 100}%` }}
        />
      </div>
    )
  }

  // "bar"
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none fixed inset-x-0 top-0 z-50 h-0.5",
        className,
      )}
    >
      <div
        className="h-full origin-left bg-foreground/80 will-change-transform transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  )
}

/* Tiny local `cn` so this file has no extra deps. Swap for your project's
   utility (`clsx`/`tailwind-merge`) if you have one. */
function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ")
}