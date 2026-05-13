"use client"

import { memo, useRef, useState, useEffect } from "react"
import { Check } from "lucide-react"

const REASONS = [
  "Boutique and personalized recruitment approach",
  "Strong network in Bulgaria and Europe",
  "Fast communication and full transparency",
  "Reduced hiring delays",
  "Long-term partnerships, not one-off placements",
  "High-quality candidate experience",
  "Proven track record with leading tech companies",
]

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

const STATS = [
  { value: "30+", label: "Partner Companies" },
  { value: "90%", label: "Successful Placements" },
  { value: "95%", label: "Client Satisfaction" },
]

export const WhyChooseUs = memo(function WhyChooseUs() {
  const { ref, visible } = useInView(0.1)

  return (
    <section className="relative w-full bg-brand-navy overflow-hidden py-20 lg:py-32">

      <div ref={ref} className="relative max-w-7xl mx-auto px-5 sm:px-10 xl:px-16">

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left: Header + stats */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(28px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-brand-coral block mb-3">
              Why Us
            </span>
            <h2 className="text-[clamp(2.2rem,5vw,4.5rem)] font-black leading-none tracking-tight text-brand-white mb-6">
              QUALITY
              <br />
              <span className="text-brand-coral">OVER VOLUME.</span>
            </h2>
            <p className="text-sm sm:text-base text-brand-white/50 leading-relaxed max-w-md mb-12">
              We don't flood inboxes with irrelevant CVs. We deliver carefully selected candidates who are genuinely aligned with your business needs.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-start gap-1 p-5 rounded-2xl bg-brand-navy"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(16px)",
                    transition: `opacity 0.5s ease ${300 + i * 100}ms, transform 0.5s ease ${300 + i * 100}ms`,
                  }}
                >
                  <span className="text-[2rem] sm:text-[2.5rem] font-black leading-none text-brand-white tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-brand-coral">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Reasons list */}
          <div
            className="rounded-3xl bg-brand-navy border border-brand-navy/8 p-7 sm:p-10 overflow-hidden relative"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(28px)",
              transition: "opacity 0.7s ease 150ms, transform 0.7s ease 150ms",
            }}
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-8 right-8 h-[2px] bg-brand-coral/30 rounded-b-full" />

            <p className="text-xs font-bold tracking-[0.2em] uppercase text-brand-coral mb-8">
              Why clients keep coming back
            </p>

            <ul className="space-y-0">
              {REASONS.map((reason, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 py-4 border-b border-brand-navy/6 last:border-b-0 group"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateX(0)" : "translateX(16px)",
                    transition: `opacity 0.5s ease ${250 + i * 80}ms, transform 0.5s ease ${250 + i * 80}ms`,
                  }}
                >
                  <div className="w-6 h-6 rounded-full bg-brand-coral/12 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand-coral/22 transition-colors duration-300">
                    <Check className="w-3.5 h-3.5 text-brand-coral" strokeWidth={2.5} />
                  </div>
                  <span className="text-sm sm:text-base text-brand-white/75 font-medium leading-snug pt-0.5 group-hover:text-brand-coral transition-colors duration-300">
                    {reason}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-brand-navy/6">
              <p className="text-xs sm:text-sm text-brand-navy/35 leading-relaxed italic">
                "Our goal is simple: help companies hire better people, faster."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})
