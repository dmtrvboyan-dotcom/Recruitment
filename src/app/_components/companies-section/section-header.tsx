import { memo } from "react"
import { CheckCircle } from "lucide-react"

export const SectionHeader = memo(function SectionHeader({
  label,
  variant = "dark",
}: {
  label: string
  variant?: "dark" | "brand"
}) {
  const styles =
    variant === "dark"
      ? "bg-brand-navy text-white shadow-lg shadow-brand-navy/10"
      : "bg-brand-blue/5 text-brand-blue border border-brand-blue/10"

  return (
    <div className="flex justify-center lg:justify-start mb-10">
      <div className={`inline-flex items-center gap-3 ${styles} px-5 py-2.5 rounded-full`}>
        {variant === "brand" && <CheckCircle className="w-4 h-4" />}
        <span className="text-xs font-bold uppercase tracking-[0.15em]">{label}</span>
      </div>
    </div>
  )
})