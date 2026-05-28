"use client"

import { memo, useRef, useState, useEffect } from "react"
import { securityData } from "./data"
import { AppButton } from "@/components/ui/app-button"

function useInView(threshold = 0.15) {
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

export const SecuritySection = memo(function SecuritySection() {
  const { ref: headerRef, visible: headerVisible } = useInView(0.2)
  const { ref: listRef, visible: listVisible } = useInView(0.1)

  return (
    <section className="relative w-full bg-brand-navy overflow-hidden">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-75 bg-brand-coral/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-10 xl:px-16 py-20 lg:py-32">
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
            {securityData.tagline}
            <span className="block w-6 h-px bg-brand-coral/40" />
          </span>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-none tracking-tight text-brand-white">
            {securityData.title}
          </h2>
        </div>

        <div ref={listRef} className="max-w-3xl mx-auto">
          {securityData.items.map((item, index) => (
            <div
              key={index}
              className="group border-t border-brand-white/8 last:border-b py-6 flex items-center gap-5
                         transition-colors duration-200 hover:bg-brand-white/1.5 px-3 -mx-3 rounded-xl"
              style={{
                opacity: listVisible ? 1 : 0,
                transform: listVisible ? "translateX(0)" : "translateX(-16px)",
                transition: `opacity 0.5s ease ${index * 80}ms, transform 0.5s ease ${index * 80}ms`,
              }}
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 border-[1.5px] bg-brand-coral border-brand-coral/20 text-brand-navy shadow-[0_4px_14px_rgba(114,145,199,0.35)]">
                {index + 1}
              </div>

              <div className="w-10 h-10 rounded-xl bg-brand-coral/10 flex items-center justify-center shrink-0 group-hover:bg-brand-coral/15 transition-colors duration-300">
                <item.icon className="w-5 h-5 text-brand-coral" strokeWidth={1.6} />
              </div>

              <div className="flex-1">
                <h3 className="font-bold uppercase tracking-tight text-sm text-brand-white mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-brand-white/50 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="h-8 w-px bg-brand-coral/0 group-hover:bg-brand-coral/20 transition-colors duration-300 shrink-0" />
            </div>
          ))}

          <div
            className="mt-10 pt-8 border-t border-brand-white/8 flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-4"
            style={{
              opacity: listVisible ? 1 : 0,
              transition: `opacity 0.5s ease ${securityData.items.length * 80 + 100}ms`,
            }}
          >
            <p className="text-sm text-brand-white/50 leading-relaxed max-w-xs">
              Hiring across borders? Compliance is only one piece of the puzzle.
            </p>
            <AppButton
              href="/services/employer-of-record"
              icon="arrow"
              className="sm:w-auto shrink-0"
            >
              Hiring across borders? See our EoR service
            </AppButton>
          </div>
        </div>

      </div>
    </section>
  )
})