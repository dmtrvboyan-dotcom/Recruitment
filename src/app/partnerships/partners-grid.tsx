"use client"

import { memo, useRef, useState, useEffect } from "react"
import { AppButton } from "@/components/ui/app-button"

const PARTNERS = [
  { name: "EnduroSat", size: "lg" },
  { name: "DHL", size: "lg" },
  { name: "TINQIN", size: "lg" },
  { name: "Strypes", size: "lg" },
  { name: "MAN", size: "lg" },
  { name: "myPOS", size: "lg" },
  { name: "DEGIRO", size: "lg" },
  { name: "Evrotrust", size: "lg" },
  { name: "AiOpsGroup", size: "lg" },
  { name: "GeoWealth", size: "lg" },
  { name: "Scaleflex", size: "lg" },
  { name: "Tide", size: "lg" },
  { name: "GemSeek", size: "lg" },
  { name: "Candor", size: "lg" },
  { name: "Codiit", size: "lg" },
  { name: "OSF", size: "lg" },
  { name: "Despark", size: "lg" },
  { name: "MM Solutions", size: "md" },
  { name: "Epsilon Telecom", size: "sm" },
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

const sizeMap: Record<string, string> = {
  lg: "text-2xl sm:text-3xl lg:text-4xl",
  md: "text-xl sm:text-2xl lg:text-3xl",
  sm: "text-lg sm:text-xl lg:text-2xl",
}

export const PartnersGrid = memo(function PartnersGrid() {
  const { ref, visible } = useInView(0.1)

  return (
    <section className="relative w-full bg-brand-white overflow-hidden py-20 lg:py-32">

      {/* Subtle dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage: "radial-gradient(circle, #1A1A2E10 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-10 xl:px-16">

        {/* Header */}
        <div
          ref={ref}
          className="mb-14 lg:mb-20"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-brand-coral block mb-3">
            Our Network
          </span>
          <h2 className="text-[clamp(2.2rem,5vw,4.5rem)] font-black leading-none tracking-tight text-brand-navy">
            COMPANIES WE'VE
            <br />
            <span className="text-brand-coral">BUILT TEAMS FOR</span>
          </h2>
        </div>

        {/* Partners mosaic */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {PARTNERS.map((partner, i) => (
            <div
              key={partner.name}
              className={`
                group relative flex items-center justify-center
                rounded-2xl border border-brand-navy/8 bg-brand-white
                px-4 py-8 sm:py-10
                hover:border-brand-coral/30 hover:bg-brand-navy hover:shadow-[0_12px_40px_-12px_rgba(26,26,46,0.25)]
                transition-all duration-500 cursor-default overflow-hidden
                ${i === 0 ? "sm:col-span-1" : ""}
              `}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0) scale(1)" : "translateY(16px) scale(0.97)",
                transition: `opacity 0.5s ease ${i * 55}ms, transform 0.5s ease ${i * 55}ms, background-color 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease`,
              }}
            >
              {/* Corner glow on hover */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-brand-coral/10 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <span
                className={`
                  font-black uppercase tracking-tight text-center leading-tight
                  text-brand-navy group-hover:text-brand-white
                  transition-colors duration-400
                  ${sizeMap[partner.size]}
                `}
              >
                {partner.name}
              </span>
            </div>
          ))}

          {/* "And more" filler card */}
          <div
            className="group relative flex items-center justify-center rounded-2xl border border-dashed border-brand-navy/15 bg-transparent px-4 py-8 sm:py-10"
            style={{
              opacity: visible ? 1 : 0,
              transition: `opacity 0.5s ease ${PARTNERS.length * 55 + 100}ms`,
            }}
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-brand-navy/25">
              & more
            </span>
          </div>
        </div>

        {/* Bottom text + candidate CTA */}
        <div
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.7s ease 800ms",
          }}
        >
          <p className="text-sm sm:text-base text-brand-navy/45 max-w-2xl leading-relaxed">
            We've helped fast-growing startups, scale-ups, and established international businesses hire top talent across Bulgaria and Europe.
          </p>

          {/* CTA: dual audience — candidates land here too and need a clear path to open roles */}
          <div className="shrink-0">
            <AppButton href="/job-listings" icon="arrow" className="sm:w-auto whitespace-nowrap">
              Candidate? Browse open roles
            </AppButton>
          </div>
        </div>

      </div>
    </section>
  )
})