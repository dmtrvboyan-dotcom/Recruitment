"use client"

import { memo, useRef, useState, useEffect } from "react"
import { CheckCircle2 } from "lucide-react"
import { WHY_US } from "./data"
import { AppButton } from "@/components/ui/app-button"

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])
  return { ref, visible }
}

export const WhyUs = memo(function WhyUs() {
  const { ref: headerRef, visible: headerVisible } = useInView()
  const { ref: listRef, visible: listVisible } = useInView(0.1)

  return (
    <section className="relative w-full bg-brand-navy overflow-hidden">

      {/* Coral glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-coral/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Watermark text */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 text-[18vw] font-black uppercase tracking-tighter text-white/[0.025] whitespace-nowrap leading-none select-none pointer-events-none"
      >
        WHY US
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-10 xl:px-16 py-20 lg:py-32">

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 xl:gap-20 items-start">

          {/* Left — header copy */}
          <div
            ref={headerRef}
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(28px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-brand-coral block mb-4">
              Why Companies Choose Us
            </span>
            <h2 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-black leading-none tracking-tight text-white mb-6">
              BIG ENOUGH
              <br />
              TO SCALE.
              <br />
              <span className="text-brand-coral">SMALL ENOUGH</span>
              <br />
              TO CARE.
            </h2>
            <p className="text-sm sm:text-base text-white/45 leading-relaxed max-w-sm">
              We're not a job board. We're not a volume agency. We are a focused team that treats every open role as if it's our only one.
            </p>
          </div>

          {/* Right — reasons list */}
          <div
            ref={listRef}
            className="rounded-3xl bg-white/5 border border-white/8 p-8 sm:p-10 backdrop-blur-sm"
            style={{
              opacity: listVisible ? 1 : 0,
              transform: listVisible ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 0.7s ease 150ms, transform 0.7s ease 150ms",
            }}
          >
            <ul className="space-y-0">
              {WHY_US.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 py-4 border-b border-white/8 last:border-b-0"
                  style={{
                    opacity: listVisible ? 1 : 0,
                    transform: listVisible ? "translateX(0)" : "translateX(20px)",
                    transition: `opacity 0.5s ease ${200 + i * 80}ms, transform 0.5s ease ${200 + i * 80}ms`,
                  }}
                >
                  <CheckCircle2
                    className="w-5 h-5 text-brand-coral shrink-0 mt-0.5"
                    strokeWidth={1.8}
                  />
                  <span className="text-sm sm:text-base text-white/75 leading-snug font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA: near the 31,000+ stat — industries verticals prove the network applies to their sector */}
            <div
              className="mt-6 pt-6 border-t border-white/8"
              style={{
                opacity: listVisible ? 1 : 0,
                transition: `opacity 0.5s ease ${200 + WHY_US.length * 80}ms`,
              }}
            >
              <AppButton
                href="/#expertise-services"
                icon="arrow"
                className="w-full sm:w-auto"
              >
                We recruit for your specific industry
              </AppButton>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
})