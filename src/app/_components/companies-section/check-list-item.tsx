import { memo } from "react"
import { CheckCircle } from "lucide-react"

export const CheckListItem = memo(function CheckListItem({
  item,
  variant = "dark",
}: {
  item: string
  variant?: "dark" | "brand"
}) {
  return (
    <li className="flex items-center gap-3 sm:gap-5 py-4 sm:py-5 lg:py-6 last:border-0 group">
      {variant === "brand" ? (
        <div
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full shrink-0 flex items-center justify-center
            bg-brand-coral/10 border border-brand-coral/22
            group-hover:bg-brand-coral/18 transition-colors duration-200"
        >
          <CheckCircle
            className="w-4 h-4 sm:w-5 sm:h-5 text-brand-coral"
            strokeWidth={2}
          />
        </div>
      ) : (
        <div
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full shrink-0 flex items-center justify-center
            bg-brand-coral/10 border border-brand-coral/18
            group-hover:bg-brand-coral/16 transition-colors duration-200"
        >
          <CheckCircle
            className="w-4 h-4 sm:w-5 sm:h-5 text-brand-coral/75"
            strokeWidth={2}
          />
        </div>
      )}
      <p
        className={`text-[15px] sm:text-[17px] lg:text-[18px] leading-snug tracking-wide ${
          variant === "brand" ? "text-brand-navy/80" : "text-white/78"
        }`}
      >
        {item}
      </p>
    </li>
  )
})