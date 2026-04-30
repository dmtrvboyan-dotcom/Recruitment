import { cn } from "@/lib/utils"

interface Stat {
  value: string
  label: string
}

interface ServiceStatsProps {
  stats: Stat[]
  layout?: "grid" | "single"
  className?: string
}

export function ServiceStats({ stats, layout = "grid", className }: ServiceStatsProps) {
  return (
    <div
      className={cn(
        layout === "grid" ? "grid grid-cols-3 gap-4" : "flex flex-col gap-4",
        className
      )}
    >
      {stats.map((stat, idx) => (
        <div key={idx} className="text-center">
          <div className="text-xl font-bold text-brand-coral">{stat.value}</div>
          <div className="text-xs text-brand-teal">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}

export function ServiceStatsLarge({ stats, className }: Omit<ServiceStatsProps, "layout">) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-8", className)}>
      {stats.map((stat, idx) => (
        <div key={idx} className="text-center">
          <div className="text-[2rem] font-bold leading-none text-brand-coral">
            {stat.value}
          </div>
          <div className="mt-4 text-md font-medium text-brand-teal">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
