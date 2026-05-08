"use client"

import { memo, useRef, useState, useEffect } from "react"
import { integrationsData } from "./data"

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

export const IntegrationsSection = memo(function IntegrationsSection() {
  const [hovered, setHovered] = useState<number | null>(null)
  const { ref: headerRef, visible: headerVisible } = useInView(0.2)
  const { ref: gridRef, visible: gridVisible } = useInView(0.1)

  return (
    <section className="relative w-full bg-brand-navy overflow-hidden">

  

      {/* Radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(114,145,199,0.08) 0%, transparent 70%)",
        }}
      />

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
            {integrationsData.tagline}
            <span className="block w-6 h-px bg-brand-coral/40" />
          </span>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-none tracking-tight text-brand-white mb-5">
            {integrationsData.title}
          </h2>
          <p className="text-sm sm:text-base text-brand-white/45 max-w-xl mx-auto leading-relaxed">
            {integrationsData.subtitle}
          </p>
        </div>

        {/* Cards grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {integrationsData.items.map((item, index) => {
            const isHovered = hovered === index
            return (
              <div
                key={index}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className="group relative flex flex-col gap-5 rounded-2xl p-6 cursor-default
                           border transition-all duration-300 ease-out overflow-hidden"
                style={{
                  opacity: gridVisible ? 1 : 0,
                  transform: gridVisible
                    ? isHovered ? "translateY(-4px)" : "translateY(0)"
                    : "translateY(24px)",
                  transition: `opacity 0.5s ease ${index * 70}ms, transform 0.3s ease`,
                  background: isHovered
                    ? "rgba(114,145,199,0.12)"
                    : "rgba(249,249,251,0.04)",
                  borderColor: isHovered
                    ? "rgba(114,145,199,0.25)"
                    : "rgba(249,249,251,0.08)",
                  boxShadow: isHovered
                    ? "0 20px 48px -8px rgba(26,26,46,0.4), 0 0 0 1px rgba(114,145,199,0.15)"
                    : "none",
                }}
              >
                {/* Hover shimmer */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(114,145,199,0.06) 0%, transparent 60%)",
                  }}
                />

                {/* Icon + number row */}
                <div className="flex items-center justify-between">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{
                      background: isHovered
                        ? "rgba(114,145,199,0.25)"
                        : "rgba(114,145,199,0.1)",
                    }}
                  >
                    <item.icon
                      className="w-5 h-5 transition-colors duration-300"
                      style={{ color: isHovered ? "#f9f9fb" : "#7291C7" }}
                      strokeWidth={1.6}
                    />
                  </div>

                  <span
                    className="text-[10px] font-bold tracking-[0.2em] transition-colors duration-300"
                    style={{
                      color: isHovered
                        ? "rgba(114,145,199,0.7)"
                        : "rgba(249,249,251,0.18)",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-black uppercase tracking-tight text-sm text-brand-white mb-2 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-brand-white/40 leading-relaxed group-hover:text-brand-white/55 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-6 right-6 h-px transition-all duration-500 rounded-full"
                  style={{
                    background: isHovered
                      ? "linear-gradient(90deg, transparent, rgba(114,145,199,0.5), transparent)"
                      : "transparent",
                  }}
                />
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
})