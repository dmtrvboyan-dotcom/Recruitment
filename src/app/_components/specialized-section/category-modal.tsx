import { memo } from "react"
import { Code2 } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { type TechCategory } from "@/lib/constants/specialized"
import { ICON_MAP } from "./icon-map"

export const CategoryModal = memo(function CategoryModal({ category }: { category: TechCategory }) {
  const IconComponent = ICON_MAP[category.icon] ?? Code2

  return (
    <div className="p-1">
      {/* Icon */}
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#78B6D9]/10 flex items-center justify-center mb-3 sm:mb-5">
        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-[#085689]" />
      </div>

      {/* Title + subtitle */}
      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">{category.title}</h2>
      <p className="text-[#085689] text-sm font-medium mb-4 sm:mb-6">{category.subtitle}</p>

      <Separator className="mb-4 sm:mb-5" />

      {/* How we source / What you get */}
      <div className="grid grid-cols-2 gap-3 sm:gap-6 mb-4 sm:mb-6">
        <div>
          <p className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-2 sm:mb-3">
            HOW WE SOURCE
          </p>
          <ul className="space-y-1.5 sm:space-y-2">
            {category.howWeSource.map((item) => (
              <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-2 sm:mb-3">
            WHAT YOU GET
          </p>
          <ul className="space-y-1.5 sm:space-y-2">
            {category.whatYouGet.map((item) => (
              <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Separator className="mb-4 sm:mb-5" />

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-4 sm:mb-6">
        <div>
          <p className="text-2xl sm:text-3xl font-bold text-[#085689]">{category.stat1Value}</p>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">{category.stat1Label}</p>
        </div>
        <div>
          <p className="text-2xl sm:text-3xl font-bold text-[#085689]">{category.stat2Value}</p>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">{category.stat2Label}</p>
        </div>
      </div>
    </div>
  )
})
