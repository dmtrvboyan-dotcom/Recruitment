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
    <li className="flex items-start sm:items-center gap-3 sm:gap-5 py-4 sm:py-5 lg:py-6 border-b border-white/10 last:border-0 group">
      {variant === "dark" ? (
        <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white/10 shrink-0 flex items-center justify-center mt-0.5 sm:mt-0">
          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={2} />
        </div>
      ) : (
        <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full shrink-0 bg-brand-navy/5 flex items-center justify-center mt-0.5 sm:mt-0">
          <CheckCircle className="w-4 h-4 sm:w-6 sm:h-6 text-brand-navy/30" strokeWidth={1.5} />
        </div>
      )}
      <p
        className={`text-[15px] sm:text-[17px] lg:text-[18px] leading-snug tracking-wide ${
          variant === "dark" ? "text-white" : "text-brand-navy"
        }`}
      >
        {item}
      </p>
    </li>
  )
})
