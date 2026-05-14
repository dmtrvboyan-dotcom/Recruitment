// app/tech-recruitment/_components/scroll-spy.tsx
"use client"

import { HEADER_SCROLL_THRESHOLD } from "@/lib/constants"
import { useScrollSpy } from "@/lib/hooks/use-scroll-spy"

export function ScrollSpy({ sectionIds }: { sectionIds: string[] }) {
  useScrollSpy({ sectionIds, headerOffset: HEADER_SCROLL_THRESHOLD })
  return null
}