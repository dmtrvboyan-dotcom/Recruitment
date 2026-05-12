import { memo } from "react"
import { ChevronDown } from "lucide-react"

interface FilterSectionProps {
  title: string
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode
}

export const FilterSection = memo(function FilterSection({
  title,
  isOpen,
  onToggle,
  children,
}: FilterSectionProps) {
  return (
    <div className="py-4 border-b border-brand-white/8 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-[11px] font-semibold tracking-[0.22em] uppercase text-brand-white/75 hover:text-brand-coral transition-colors duration-200 cursor-pointer"
      >
        <span className="inline-flex items-center gap-2">
          <span className="font-serif italic text-[13px] text-brand-coral normal-case tracking-normal leading-none">
            —
          </span>
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-brand-coral transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          strokeWidth={1.5}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        {children}
      </div>
    </div>
  )
})