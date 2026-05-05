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
  const iconConfig = ICON_MAP[category.icon] || ICON_MAP["code-2"]
  const IconComponent = iconConfig.icon
  const visibleTechs = category.techs.slice(0, 8)

  return (
    <div
      onClick={onClick}
      className="relative group border border-brand-navy/5 rounded-2xl p-6 bg-white hover:border-brand-blue/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 cursor-pointer"
    >
      <div className="absolute top-4 right-4">
        <div className={`
          relative flex items-center justify-center w-8 h-8 rounded-full 
          ${iconConfig.bg} ${iconConfig.color}
          sm:opacity-0 sm:group-hover:opacity-100 sm:scale-90 sm:group-hover:scale-100
          opacity-100 scale-100
          transition-all duration-300 ease-out
        `}>
          <span className={`absolute inset-0 rounded-full ${iconConfig.bg} opacity-60 animate-pulse sm:hidden`} />
          <Eye className="w-4 h-4" />
        </div>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 rounded-xl ${iconConfig.bg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
          <IconComponent className={`w-5 h-5 ${iconConfig.color}`} />
        </div>
        <span className="text-[10px] font-bold text-brand-teal uppercase tracking-[0.15em]">
          {category.categoryLabel}
        </span>
      </div>

      <h3 className="text-lg font-bold text-brand-navy mb-4 leading-tight group-hover:text-brand-blue transition-colors">
        {category.title}
      </h3>

      <div className="flex flex-wrap gap-1.5">
        {visibleTechs.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-brand-bg text-brand-navy/60 border border-brand-navy/5"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
})