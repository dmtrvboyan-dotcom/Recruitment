"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import { faqData } from "./data"

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
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-none tracking-tight text-brand-white mb-5">
            {faqData.title}
          </h2>
        </div>

        {/* FAQ list */}
        <div ref={listRef} className="max-w-3xl mx-auto space-y-3">
          {faqData.items.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="group relative rounded-2xl border overflow-hidden transition-all duration-300"
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
                  onClick={() => toggleItem(index)}
                  className="relative w-full flex items-center justify-between p-6 text-left cursor-pointer"
                >
                  <h3 className="font-black uppercase tracking-tight text-sm text-brand-white pr-4">
                    {item.question}
                  </h3>
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                    style={{
                      background: isOpen
                        ? "rgba(114,145,199,0.25)"
                        : "rgba(114,145,199,0.1)",
                    }}
                  >
                    <ChevronDown
                      className="w-4 h-4 transition-transform duration-300"
                      style={{ color: isOpen ? "#f9f9fb" : "#7291C7" }}
                      strokeWidth={1.6}
                      style={{
                        color: isOpen ? "#f9f9fb" : "#7291C7",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease, color 0.3s ease",
                      }}
                    />
                  </div>
                </button>

                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: isOpen ? "200px" : "0px", opacity: isOpen ? 1 : 0 }}
                >
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-sm text-brand-white/40 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>

                {/* Bottom accent line */}
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

      </div>
    </section>
  )
}