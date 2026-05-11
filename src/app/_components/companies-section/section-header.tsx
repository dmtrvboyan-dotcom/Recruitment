import { memo } from "react"
import { Globe, Briefcase } from "lucide-react"

export const SectionHeader = memo(function SectionHeader({
  label,
  variant = "dark",
}: {
  label: string
  variant?: "dark" | "brand"
}) {
  return (
    <div className="flex items-center gap-2.5 sm:gap-3 mb-6 sm:mb-8">
      <div
        className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shrink-0 ${
          variant === "dark" ? "bg-brand-white" : "bg-brand-navy"
        }`}
      >
        {variant === "dark" ? (
          <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-navy" strokeWidth={1.5} />
        ) : (
          <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-white" strokeWidth={1.5} />
        )}
      </div>
      <span
        className={`text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] sm:tracking-[0.2em] px-2 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl ${
          variant === "dark" ? "bg-brand-white text-brand-navy" : "bg-brand-navy text-brand-white"
        }`}
      >
        {label}
      </span>
    </div>
  )
})
