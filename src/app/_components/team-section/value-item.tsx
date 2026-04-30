import { memo } from "react"
import { TbPointFilled } from "react-icons/tb"

interface ValueItemProps {
  title: string
  description: string
}

export const ValueItem = memo(function ValueItem({ title, description }: ValueItemProps) {
  return (
    <div className="flex items-start gap-5 group">
      <div className="shrink-0 w-10 h-10 rounded-xl bg-brand-blue/5 flex items-center justify-center text-brand-blue group-hover:bg-brand-coral group-hover:text-white transition-colors duration-300">
        <TbPointFilled size={24} />
      </div>
      <div>
        <h3 className="font-bold text-brand-navy text-lg mb-2 tracking-tight">{title}</h3>
        <p className="text-brand-navy/60 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
})