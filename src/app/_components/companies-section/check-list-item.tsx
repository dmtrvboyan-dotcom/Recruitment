import { memo } from "react"
import { CheckCircle } from "lucide-react"

export const CheckListItem = memo(function CheckListItem({
  item,
  variant = "dark",
}: {
  item: string
  variant?: "dark" | "brand"
}) {
  const bgColor = variant === "dark" ? "bg-slate-900" : "bg-[#085689]/10"
  const iconColor = variant === "dark" ? "text-white" : "text-[#085689]"

  return (
    <li className="flex gap-4">
      <div
        className={`mt-1 w-6 h-6 rounded-full ${bgColor} flex-shrink-0 flex items-center justify-center`}
      >
        <CheckCircle className={`w-4 h-4 ${iconColor}`} />
      </div>
      <p className="text-lg text-slate-700 leading-relaxed">{item}</p>
    </li>
  )
})
