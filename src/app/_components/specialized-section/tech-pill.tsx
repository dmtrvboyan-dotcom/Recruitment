import { memo } from "react"

export const TechPill = memo(function TechPill({ tech }: { tech: string }) {
  return (
    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-[0.18em] bg-brand-navy/5 text-brand-navy/60 border border-brand-white/10 hover:bg-brand-coral/10 hover:text-brand-coral hover:border-brand-coral/30 transition-colors duration-300 cursor-default">
      {tech}
    </span>
  )
})