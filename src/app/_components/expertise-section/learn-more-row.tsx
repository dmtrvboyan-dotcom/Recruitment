import { ArrowRight } from "lucide-react"

export function LearnMoreRow({ 
  label = "Learn more", 
  className 
}: { 
  label?: string, 
  className?: string 
}) {
  return (
    <div className={`mt-auto flex items-center font-bold text-xs uppercase tracking-[0.15em] transition-all group-hover:gap-1 text-brand-blue`}>
      {label}
      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
    </div>
  )
}