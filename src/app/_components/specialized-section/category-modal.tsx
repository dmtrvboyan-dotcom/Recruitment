import { memo } from "react"
import { Users, Clock } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { type TechCategory } from "@/lib/constants/specialized"
import { ICON_MAP } from "./icon-map"

export const CategoryModal = memo(function CategoryModal({ category }: { category: TechCategory }) {
  const iconConfig = ICON_MAP[category.icon] || ICON_MAP["code-2"]
  const IconComponent = iconConfig.icon

  return (
    <div className="p-4 sm:p-6 max-h-[85vh] overflow-y-auto">

      {/* Icon box — same style as card */}
      <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-gray-100 flex items-center justify-center mb-4 sm:mb-5">
        <IconComponent className="w-5 h-5 sm:w-7 sm:h-7 text-brand-navy" />
      </div>

      {/* Title */}
      <h2 className="text-xl sm:text-2xl font-bold text-brand-navy mb-1 leading-tight">
        {category.title}
      </h2>

      {/* Subtitle */}
      <p className="text-[12px] sm:text-[13px] font-medium text-brand-teal mb-5 sm:mb-6">
        {category.subtitle}
      </p>

      <Separator className="mb-5 sm:mb-7 opacity-40" />

      {/* HOW WE SOURCE + WHAT YOU GET */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 mb-6 sm:mb-8">
        <div>
          <p className="text-[10px] sm:text-[11px] font-bold text-brand-teal uppercase tracking-[0.15em] mb-3">
            How We Source
          </p>
          <ul className="space-y-2 sm:space-y-2.5">
            {category.howWeSource.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-navy/65 leading-snug">
                <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-brand-navy/25 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[10px] sm:text-[11px] font-bold text-brand-teal uppercase tracking-[0.15em] mb-3">
            What You Get
          </p>
          <ul className="space-y-2 sm:space-y-2.5">
            {category.whatYouGet.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-navy/65 leading-snug">
                <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-brand-navy/25 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Stats — two boxes side by side with icons, matching reference footer style */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 bg-gray-50 rounded-2xl p-4 sm:p-5">
        {/* Stat 1 */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center shrink-0">
            <Users className="w-4 h-4 sm:w-5 sm:h-5 text-brand-navy/40" />
          </div>
          <div>
            <p className="text-xl sm:text-2xl font-bold text-brand-navy tabular-nums leading-none mb-0.5">
              {category.stat1Value}
            </p>
            <p className="text-[9px] sm:text-[10px] font-medium text-brand-teal uppercase tracking-wide leading-snug">
              {category.stat1Label}
            </p>
          </div>
        </div>

        {/* Stat 2 */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center shrink-0">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-brand-navy/40" />
          </div>
          <div>
            <p className="text-xl sm:text-2xl font-bold text-brand-navy tabular-nums leading-none mb-0.5">
              {category.stat2Value}
            </p>
            <p className="text-[9px] sm:text-[10px] font-medium text-brand-teal uppercase tracking-wide leading-snug">
              {category.stat2Label}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
})
