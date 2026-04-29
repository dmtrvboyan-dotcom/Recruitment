import { memo } from "react"
import { Code2, Eye } from "lucide-react"
import { type TechCategory } from "@/lib/constants/specialized"
import { ICON_MAP } from "./icon-map"

export const CategoryCard = memo(function CategoryCard({
  category,
  onClick,
}: {
  category: TechCategory
  onClick: () => void
}) {
  const IconComponent = ICON_MAP[category.icon] ?? Code2
  const visibleTechs = category.techs.slice(0, 8)

  return (
    <div
      onClick={onClick}
      className="relative group border border-slate-100 rounded-2xl p-5 bg-[#f5f5f5] hover:border-[#085689]/20 hover:shadow-lg transition-all duration-300 cursor-pointer"
    >
      {/* Eye icon */}
      <div className="absolute top-3 right-3">
        <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#78B6D9]/80 backdrop-blur-sm border border-slate-200
          opacity-100 sm:opacity-0 sm:group-hover:opacity-100
          scale-100 sm:scale-90 sm:group-hover:scale-100
          transition-all duration-300 ease-out"
        >
          <span className="absolute inset-0 rounded-full bg-[#78B6D9]/30 blur-md opacity-60 animate-pulse sm:hidden" />
          <Eye className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Icon + category label */}
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-2xl bg-[#78B6D9]/10 flex items-center justify-center">
          <IconComponent className="w-4 h-4 text-[#085689]" />
        </div>
        <span className="text-[11px] font-semibold text-[#085689] uppercase tracking-widest">
          {category.categoryLabel}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-[15px] font-bold text-slate-900 mb-4 leading-snug group-hover:text-[#085689] transition-colors">
        {category.title}
      </h3>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5">
        {visibleTechs.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
})
