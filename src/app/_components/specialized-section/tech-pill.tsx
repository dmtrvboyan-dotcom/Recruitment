import { memo } from "react"
import { Badge } from "@/components/ui/badge"

export const TechPill = memo(function TechPill({ tech }: { tech: string }) {
  return (
    <Badge
      variant="secondary"
      className="px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider bg-white text-brand-navy/60 border border-brand-navy/10 rounded-full cursor-default"
    >
      {tech}
    </Badge>
  )
})