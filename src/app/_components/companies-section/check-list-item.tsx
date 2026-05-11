import { memo } from "react"
import { CheckCircle, Circle } from "lucide-react"

export const CheckListItem = memo(function CheckListItem({
  item,
  variant = "dark",
}: {
  item: string
  variant?: "dark" | "brand"
}) {
  return (
    <li className="flex items-center gap-5 py-6 border-b border-white/10 last:border-0 group">
      {variant === "dark" ? (
        <div className="w-9 h-9 rounded-full bg-white/10 shrink-0 flex items-center justify-center">
          <CheckCircle className="w-5 h-5 text-white" strokeWidth={2} />
        </div>
      ) : (
        <div className="w-9 h-9 rounded-full shrink-0 bg-brand-navy/5 flex items-center justify-center">
          <CheckCircle className="w-6 h-6 text-brand-navy/30" strokeWidth={1.5} />
        </div>
      )}
      <p
        className={`text-[18px] leading-snug tracking-wide ${
          variant === "dark" ? "text-white" : "text-brand-navy"
        }`}
      >
        {item}
      </p>
    </li>
  )
})