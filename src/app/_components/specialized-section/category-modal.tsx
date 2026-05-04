import { memo } from "react"
import { Code2 } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { type TechCategory } from "@/lib/constants/specialized"
import { ICON_MAP } from "./icon-map"

export const CategoryModal = memo(function CategoryModal({ category }: { category: TechCategory }) {
  const iconConfig = ICON_MAP[category.icon] || ICON_MAP["code-2"]
  const IconComponent = iconConfig.icon

  return (
    <div className="p-3 sm:p-4 max-h-[85vh] overflow-y-auto">
      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl ${iconConfig.bg} flex items-center justify-center mb-4 sm:mb-6`}>
        <IconComponent className={`w-5 h-5 sm:w-6 sm:h-6 ${iconConfig.color}`} />
      </div>

      <h2 className="text-xl sm:text-2xl font-bold text-brand-navy mb-1">
        {category.title}
      </h2>

      <p className="text-brand-teal text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 sm:mb-6">
        {category.subtitle}
      </p>

      <Separator className="mb-6 sm:mb-8 opacity-50" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
        <div>
          <p className="text-[10px] sm:text-[11px] font-bold text-brand-navy/40 uppercase tracking-widest mb-3 sm:mb-4">
            How We Source
          </p>
          <ul className="space-y-2 sm:space-y-3">
            {category.howWeSource.map((item) => (
              <li key={item} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-brand-navy/70">
                <div className={`mt-1.5 w-1.5 h-1.5 rounded-full ${iconConfig.color.replace('text-', 'bg-')} shrink-0`} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[10px] sm:text-[11px] font-bold text-brand-navy/40 uppercase tracking-widest mb-3 sm:mb-4">
            What You Get
          </p>
          <ul className="space-y-2 sm:space-y-3">
            {category.whatYouGet.map((item) => (
              <li key={item} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-brand-navy/70">
                <div className={`mt-1.5 w-1.5 h-1.5 rounded-full ${iconConfig.color.replace('text-', 'bg-')} shrink-0`} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 bg-brand-bg p-4 sm:p-6 rounded-2xl">
        <div>
          <p className="text-2xl sm:text-3xl font-bold text-brand-navy tabular-nums">
            {category.stat1Value}
          </p>
          <p className="text-[10px] sm:text-xs font-medium text-brand-teal uppercase tracking-wide">
            {category.stat1Label}
          </p>
        </div>

        <div>
          <p className="text-2xl sm:text-3xl font-bold text-brand-navy tabular-nums">
            {category.stat2Value}
          </p>
          <p className="text-[10px] sm:text-xs font-medium text-brand-teal uppercase tracking-wide">
            {category.stat2Label}
          </p>
        </div>
      </div>
    </div>
  )
})