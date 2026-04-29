import { memo } from "react"
import { Badge } from "@/components/ui/badge"

export const TechPill = memo(function TechPill({ tech }: { tech: string }) {
  return (
    <Badge
      variant="secondary"
      className="px-4 py-1.5 text-sm font-medium bg-[#085689] hover:text-black hover:bg-[#78B6D9] text-[#fff] border border-[#c5daf0] rounded-full transition-all duration-200 cursor-default"
    >
      {tech}
    </Badge>
  )
})
