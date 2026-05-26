"use client"

import { memo, useState, useRef, useEffect } from "react"
import Image from "next/image"
import { benefitsData } from "./data"
import { AppButton } from "@/components/ui/app-button"

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])
  return { ref, visible }
}

const bgImages = [
  "/smartr/time.webp",
  "/smartr/reduce.webp",
  "/smartr/experience.webp",
  "/smartr/gain.webp",
]

export const BenefitsSection = memo(function BenefitsSection() {
  const [active, setActive] = useState(0)
  const { ref: headerRef, visible: headerVisible } = useInView()
  const { ref: contentRef, visible: contentVisible } = useInView()

  const handleClick = (index: number) => {
    if (index === active) return
    setTimeout(() => setActive(index), 60)
  }

  return (
    <section className="relative w-full bg-[#f9f9fb] overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-5 sm:px-10 xl:px-16 py-20 lg:py-32">

        {/* Header */}
        <div
          ref={headerRef}
          className="text-center mb-16 lg:mb-20"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <span className="inline-flex items-center gap-3 text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-brand-coral mb-4">
            <span className="block w-6 h-px bg-brand-coral/40" />
            {benefitsData.tagline}
            <span className="block w-6 h-px bg-brand-coral/40" />
          </span>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-none tracking-tight text-brand-navy">
            {benefitsData.title}
          </h2>
        </div>

        {/* Two-column layout */}
        <div
          ref={contentRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
        >

          {/* Sticky image — right on desktop, top on mobile */}
          <div
            className="order-1 lg:order-2 lg:sticky lg:top-10"
            style={{
              opacity: contentVisible ? 1 : 0,
              transform: contentVisible ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 0.7s ease 150ms, transform 0.7s ease 150ms",
            }}
          >
            <div className="rounded-2xl overflow-hidden aspect-4/3 relative
                           border border-brand-navy/8
                           shadow-[0_16px_48px_-12px_rgba(26,26,46,0.15)]">
              {bgImages.map((src, index) => (
                <Image
                  key={index}
                  src={src}
                  alt=""
                  fill
                  className={`object-cover transition-opacity duration-500 ease-in-out ${
                    active === index ? "opacity-100" : "opacity-0"
                  }`}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ))}

              {/* Subtle navy overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/20 to-transparent pointer-events-none" />

              {/* Active index indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                {bgImages.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      active === i ? "w-6 bg-brand-coral" : "w-1.5 bg-brand-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Accordion list — left on desktop */}
          <div
            className="order-2 lg:order-1 flex flex-col"
            style={{
              opacity: contentVisible ? 1 : 0,
              transform: contentVisible ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            {benefitsData.items.map((benefit, index) => (
              <div
                key={index}
                className="border-t border-brand-navy/8 last:border-b cursor-pointer py-6
                           transition-colors duration-200 hover:bg-brand-navy/[0.015] px-2 -mx-2 rounded-lg"
                onClick={() => handleClick(index)}
              >
                <div className="flex items-center gap-5 select-none">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0
                               border-[1.5px] transition-all duration-300 ${
                      active === index
                        ? "bg-brand-coral border-brand-coral/20 text-brand-white shadow-[0_4px_14px_rgba(114,145,199,0.35)]"
                        : "border-brand-navy/20 text-brand-navy/35"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <span
                    className={`font-bold uppercase tracking-tight text-base sm:text-lg transition-colors duration-300 ${
                      active === index ? "text-brand-navy" : "text-brand-navy/35"
                    }`}
                  >
                    {benefit.title}
                  </span>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    active === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pt-4 pb-1 pl-13 flex flex-col gap-4">
                    <p className="text-brand-navy/50 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                    {benefit.stat && (
                      <span className="font-bold text-3xl text-brand-coral leading-none">
                        {benefit.stat}
                      </span>
                    )}
                    {/* Animated accent line */}
                    <div className="h-px w-12 bg-linear-to-r from-brand-coral to-transparent" />
                  </div>
                </div>
              </div>
            ))}

            {/* CTA: ATS buyers often have a hiring problem too — cross-sell at the credibility peak,
                near the time-to-hire stat that demonstrates results */}
            <div className="mt-8 pt-6 border-t border-brand-navy/8">
              <AppButton
                href="/services/permanent-it-recruitment"
                variant="navy"
                icon="arrow"
                className="sm:w-auto"
              >
                Need recruitment partners, not just software?
              </AppButton>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
})