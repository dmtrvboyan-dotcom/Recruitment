"use client"

import { useScrollProgress } from "@/lib/hooks/useScrollProgress"


interface ScrollProgressProps {

  variant?: "bar" | "rail"
  className?: string
}

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

function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ")
}