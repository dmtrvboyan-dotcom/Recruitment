import { memo } from "react"
import { ArrowUpRight } from "lucide-react"
import { type TechCategory } from "@/lib/constants/specialized"
import { ICON_MAP } from "./icon-map"

function getElementCode(title: string): string {
  const cleaned = title.replace(/[&,]/g, "").replace(/\s+/g, " ").trim()
  const words = cleaned.split(" ").filter(
    (w) => !["and", "or", "the", "of", "for"].includes(w.toLowerCase())
  )
  if (words.length === 0) return "XX"
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase()
  return (words[0][0] + words[1][0]).toUpperCase()
}

export const CategoryCard = memo(function CategoryCard({
  category,
  index,
  onClick,
}: {
  category: TechCategory
  index: number
  onClick: () => void
}) {
  const iconConfig = ICON_MAP[category.icon] || ICON_MAP["code-2"]
  const IconComponent = iconConfig.icon
  const visibleTechs = category.techs;
  const remaining = category.techs.length - visibleTechs.length
  const atomicNumber = String(index + 1).padStart(2, "0")
  const elementCode = getElementCode(category.title)

  return (
    <button
      onClick={onClick}
      className="group relative w-full text-left bg-brand-navy/[0.02] border border-brand-navy/10 hover:border-brand-coral/50 hover:bg-brand-navy/[0.04] rounded-2xl p-5 sm:p-6 lg:p-7 transition-all duration-300 overflow-hidden cursor-pointer"
    >

      <div className="flex items-start justify-between mb-5 sm:mb-6">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-brand-coral">
            {atomicNumber}
          </span>
          <div className="h-px w-5 sm:w-6 bg-brand-coral/40" />
        </div>
        <IconComponent
          className="w-4 h-4 text-brand-navy/30 group-hover:text-brand-coral transition-colors duration-300"
        />
      </div>

 

      {/* Title */}
      <h3 className="text-sm sm:text-base lg:text-lg font-black uppercase tracking-[-0.01em] leading-tight text-brand-navy mb-1.5">
        {category.title}
      </h3>

      {/* Category label */}
      <p className="text-[10px] sm:text-[11px] tracking-[0.15em] uppercase text-brand-navy/40 mb-5 sm:mb-6">
        {category.categoryLabel}
      </p>

      {/* Tech badges — the valence shell */}
      <div className="flex flex-wrap gap-1.5">
        {visibleTechs.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium uppercase tracking-wide bg-brand-navy/5 text-brand-navy/60 border border-brand-navy/10 group-hover:bg-brand-coral/10 group-hover:text-brand-coral group-hover:border-brand-coral/30 transition-colors duration-300"
          >
            {tech}
          </span>
        ))}
      
      </div>

      <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">
        <ArrowUpRight className="w-4 h-4 text-brand-coral" strokeWidth={1.5} />
      </div>
    </button>
  )
})