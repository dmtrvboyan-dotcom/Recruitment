// lib/section-navigation.ts
import type { ComponentType } from "react"

/* ----------------------------------------------------------------------------
 * Types
 * -------------------------------------------------------------------------- */

export interface Section {
  /** DOM id of the section element on the page */
  id: string
  /** Human-readable label shown in the nav */
  label: string
  /** Optional icon component (e.g. `lucide-react` icon). Receives a `className`. */
  icon?: ComponentType<{ className?: string }>
  /** When `true` the section is filtered out of the nav (still rendered in DOM). */
  hidden?: boolean
}

/* ----------------------------------------------------------------------------
 * Constants
 * -------------------------------------------------------------------------- */

export const SECTION_NAV_STORAGE_KEY = "section-nav:collapsed"
export const DEFAULT_HEADER_OFFSET = 80

/* ----------------------------------------------------------------------------
 * Scroll helpers (SSR-safe)
 * -------------------------------------------------------------------------- */

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

/**
 * Smoothly scrolls to an element by id, accounting for a sticky header offset.
 * Respects `prefers-reduced-motion`.
 */
export function smoothScrollTo(id: string, offset: number = DEFAULT_HEADER_OFFSET): void {
  if (typeof window === "undefined") return
  const el = document.getElementById(id)
  if (!el) return

  const top = el.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({
    top,
    behavior: prefersReducedMotion() ? "auto" : "smooth",
  })
}

/** Smoothly scrolls to the top of the page. Respects `prefers-reduced-motion`. */
export function scrollToTop(): void {
  if (typeof window === "undefined") return
  window.scrollTo({
    top: 0,
    behavior: prefersReducedMotion() ? "auto" : "smooth",
  })
}

/** Filter out hidden sections in a single place. */
export function getVisibleSections(sections: Section[]): Section[] {
  return sections.filter((s) => !s.hidden)
}
