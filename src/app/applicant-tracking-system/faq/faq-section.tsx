"use client"

import { useState, useRef, useEffect } from "react"
import { Plus } from "lucide-react"
import { faqData } from "./data"
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

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { ref: headerRef, visible: headerVisible } = useInView(0.2)
  const { ref: listRef, visible: listVisible } = useInView(0.1)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
            {faqData.tagline}
            <span className="block w-6 h-px bg-brand-coral/40" />
          </span>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-none tracking-tight text-brand-white mb-5">
            {faqData.title}
          </h2>
        </div>

        {/* FAQ list */}
        <div ref={listRef} className="max-w-3xl mx-auto space-y-3">
          {faqData.items.map((item, index) => {
            const isOpen = openIndex === index
            const number = String(index + 1).padStart(2, "0")

            return (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  opacity: listVisible ? 1 : 0,
                  transform: listVisible ? "translateY(0)" : "translateY(24px)",
                  transition: `opacity 0.5s ease ${index * 70}ms, transform 0.5s ease ${index * 70}ms`,
                  background: isOpen
                    ? "rgba(114,145,199,0.12)"
                    : "rgba(249,249,251,0.04)",
                  borderColor: isOpen
                    ? "rgba(114,145,199,0.25)"
                    : "rgba(249,249,251,0.08)",
                  boxShadow: isOpen
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

                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="group/btn relative w-full flex items-center justify-between gap-6 p-6 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-4 sm:gap-5 min-w-0">
                    <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-brand-coral tabular-nums shrink-0">
                      {number}. Q
                    </span>
                    <h3
                      className={`font-bold uppercase tracking-tight text-sm leading-snug transition-colors duration-300 ${
                        isOpen
                          ? "text-brand-white"
                          : "text-brand-white/70 group-hover/btn:text-brand-white"
                      }`}
                    >
                      {item.question}
                    </h3>
                  </span>

                  <span
                    className="w-8 h-8 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300"
                    style={{
                      background: isOpen
                        ? "rgba(114,145,199,0.3)"
                        : "rgba(114,145,199,0.1)",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    <Plus
                      className="w-4 h-4 transition-colors duration-300"
                      style={{ color: isOpen ? "#f9f9fb" : "#7291C7" }}
                      strokeWidth={1.6}
                    />
                  </span>
                </button>

                {/* Answer */}
                <div
                  className="grid"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    opacity: isOpen ? 1 : 0,
                    transition: "grid-template-rows 400ms ease, opacity 400ms ease",
                  }}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 -mt-1 flex gap-4 sm:gap-5">
                      <div
                        className="w-[2px] shrink-0 rounded-full"
                        style={{ background: "rgba(114,145,199,0.4)" }}
                      />
                      <p className="text-sm text-brand-white/40 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="absolute bottom-0 left-6 right-6 h-px transition-all duration-500 rounded-full"
                  style={{
                    background: isOpen
                      ? "linear-gradient(90deg, transparent, rgba(114,145,199,0.5), transparent)"
                      : "transparent",
                  }}
                />
              </div>
            )
          })}
        </div>

        <div
          className="max-w-3xl mx-auto mt-12 flex flex-col sm:flex-row items-center justify-center gap-5 pt-8 border-t"
          style={{ borderColor: "rgba(249,249,251,0.08)" }}
        >
         
          <div className="flex flex-col sm:flex-row items-center gap-3">
            {/* Primary: contact */}
            <AppButton href="/contacts" icon="arrow" className="sm:w-auto">
              Contact our team
            </AppButton>
            {/* Secondary: blog — keeps researchers in the funnel while they evaluate */}
            <AppButton href="/blog" variant="outline" icon="arrow" className="sm:w-auto">
              ATS best practice guides
            </AppButton>
          </div>
        </div>

      </div>
    </section>
  )
}