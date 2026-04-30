import { memo } from "react"
import { CheckCircle } from "lucide-react"

export const CheckListItem = memo(function CheckListItem({
  item,
  variant = "dark",
}: {
  item: string
  variant?: "dark" | "brand"
}) {
  // Using brand-navy for the dark variant and brand-blue for the brand variant
  const bgColor = variant === "dark" ? "bg-brand-navy" : "bg-brand-blue/10"
  const iconColor = variant === "dark" ? "text-white" : "text-brand-blue"

  return (
    <li className="flex gap-5 group">
      <div
        className={`mt-1 w-6 h-6 rounded-full ${bgColor} flex-shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
      >
        <CheckCircle className={`w-3.5 h-3.5 ${iconColor}`} />
      </div>
      <p className="text-base lg:text-[17px] text-brand-navy/70 leading-relaxed font-medium">
        {item}
      </p>
    </li>
  )
})