"use client"

import { memo } from "react"
import { TRUST_METRICS } from "@/lib/constants/metrics"
import { useAnimatedCounter } from "@/lib/hooks/use-animated-counter"


const AnimatedCounter = memo(function AnimatedCounter({
  value,
  label,
  description,
}: {
  value: string
  label: string
  description: string
}) {
  const { ref, displayValue } = useAnimatedCounter(value)

  return (
    <div ref={ref} className="text-center">
      <p className="text-5xl lg:text-6xl font-bold text-[#085689] mb-3 tracking-tighter">
        {displayValue}
      </p>
      <p className="text-xl font-semibold text-slate-900 mb-1">{label}</p>
      {description && (
        <p className="text-sm text-slate-600 max-w-[280px] mx-auto">{description}</p>
      )}
    </div>
  )
})

/**
 * Trust section showing company track record metrics
 */
export function TrustSection() {
  return (
    <section className="py-24 lg:py-32 bg-transparent lg:mb-[120px] md:mb-[50px] sm:md-[0px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-md font-medium tracking-wider text-[#085689] uppercase mb-4">
            Our Track Record
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-6 text-balance">
            Numbers that speak for themselves
          </h2>

          <p className="text-xl text-slate-600 leading-relaxed">
            A decade of building trust through exceptional service and lasting
            partnerships.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {TRUST_METRICS.map((metric, idx) => (
            <AnimatedCounter
              key={idx}
              value={metric.value}
              label={metric.label}
              description={metric.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
