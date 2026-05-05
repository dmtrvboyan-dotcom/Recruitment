"use client"

import { memo, useRef, useState, useEffect } from "react"
import { Check, X } from "lucide-react"

const WHAT_YOU_GET = [
  "Motivated, well-trained and continuously developing recruiters",
  "Deep understanding of tech roles and hiring needs",
  "Honest communication and realistic expectations",
  "Long-term thinking and true partnership",
  "High-quality shortlist, not just volume",
]

const WHAT_WE_ARE_NOT = [
  "Not a job board or CV database",
  "Not a volume-driven, pushy agency",
  "Not promising overnight results",
  "Not a fit for companies that only care about price",
  "Not here for quick wins — we build long-term relationships",
]

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

const ListItem = memo(function ListItem({
  text,
  type,
  index,
  parentVisible,
}: {
  text: string
  type: "get" | "not"
  index: number
  parentVisible: boolean
}) {
  const isGet = type === "get"
  return (
    <li
      className="flex items-start gap-4 py-4 border-b border-brand-navy/8 last:border-b-0 group"
      style={{
        opacity: parentVisible ? 1 : 0,
        transform: parentVisible ? "translateX(0)" : `translateX(${isGet ? "-16px" : "16px"})`,
        transition: `opacity 0.5s ease ${200 + index * 80}ms, transform 0.5s ease ${200 + index * 80}ms`,
      }}
    >
      <div className={`
        w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5
        ${isGet
          ? "bg-brand-coral/15 text-brand-coral group-hover:bg-brand-coral/25"
          : "bg-brand-navy/8 5 group-hover:bg-brand-navy/12 "}
        transition-colors duration-300
      `}>
        {isGet
          ? <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
          : <X className="w-3.5 h-3.5" strokeWidth={2.5} />
        }
      </div>
      <span className={`text-sm sm:text-base leading-snug pt-0.5 ${isGet ? "text-brand-navy font-medium" : "text-brand-navy/50"}`}>
        {text}
      </span>
    </li>
  )
})

export const WhatYouGet = memo(function WhatYouGet() {
  const { ref: leftRef, visible: leftVisible } = useInView()
  const { ref: rightRef, visible: rightVisible } = useInView()
  const { ref: headerRef, visible: headerVisible } = useInView()

  return (
    <section className="relative w-full bg-[#f9f9fb] overflow-hidden">

      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <span
          className="text-[18vw] font-black uppercase tracking-tighter text-brand-navy/[0.025] whitespace-nowrap leading-none"
        >
          VS
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-10 xl:px-16 py-20 lg:py-32">

        {/* Header */}
        <div
          ref={headerRef}
          className="text-center mb-16 lg:mb-24"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-brand-coral block mb-3">
            The Partnership
          </span>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-none tracking-tight text-brand-navy">
            WHAT YOU GET
            <br />
            <span className="relative inline-block">
              <span className="text-brand-coral">FROM US</span>
            </span>
          </h2>
        </div>

        {/* Two column cards */}
        <div className="grid lg:grid-cols-2 gap-5 xl:gap-8">

          {/* GET card */}
          <div
            ref={leftRef}
            className="relative rounded-3xl bg-brand-navy p-8 sm:p-10 overflow-hidden"
            style={{
              opacity: leftVisible ? 1 : 0,
              transform: leftVisible ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            {/* card glow accent */}
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-brand-coral/15 rounded-full pointer-events-none blur-2xl" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-full bg-brand-coral flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-white" strokeWidth={2.5} />
                </div>
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-brand-coral">
                  What you get
                </span>
              </div>

              <ul className="space-y-0">
                {WHAT_YOU_GET.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 py-4 border-b border-white/8 last:border-b-0"
                    style={{
                      opacity: leftVisible ? 1 : 0,
                      transform: leftVisible ? "translateX(0)" : "translateX(-16px)",
                      transition: `opacity 0.5s ease ${200 + i * 80}ms, transform 0.5s ease ${200 + i * 80}ms`,
                    }}
                  >
                    <div className="w-6 h-6 rounded-full bg-brand-coral/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-brand-coral" strokeWidth={2.5} />
                    </div>
                    <span className="text-sm sm:text-base text-white/80 leading-snug pt-0.5 font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* NOT card */}
          <div
            ref={rightRef}
            className="relative rounded-3xl bg-white border border-brand-navy/8 p-8 sm:p-10 overflow-hidden"
            style={{
              opacity: rightVisible ? 1 : 0,
              transform: rightVisible ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 0.7s ease 150ms, transform 0.7s ease 150ms",
            }}
          >
            {/* decorative X watermark */}
           
            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-full bg-brand-navy/10  flex items-center justify-center shrink-0">
                  <X className="w-4 h-4 text-brand-navy/50 " strokeWidth={2.5} />
                </div>
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-brand-navy/40 ">
                  What we're not
                </span>
              </div>

              <ul className="space-y-0 ">
                {WHAT_WE_ARE_NOT.map((item, i) => (
                  <ListItem
                    key={i}
                    text={item}
                    type="not"
                    index={i}
                    parentVisible={rightVisible}
                  />
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom quote strip */}
        <div
          className="mt-10 xl:mt-12 rounded-2xl border border-brand-coral/20 bg-brand-coral/5 px-8 py-6 flex flex-col sm:flex-row sm:items-center gap-4"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.7s ease 500ms, transform 0.7s ease 500ms",
          }}
        >
          <div className="w-1 self-stretch bg-brand-coral rounded-full shrink-0 hidden sm:block" />
          <p className="text-sm sm:text-base text-brand-navy/70 leading-relaxed">
            <span className="font-bold text-brand-navy">No templates, no automated replies.</span>{" "}
            A real person will get back to you within one business day. We're not the right fit for everyone — and that's exactly how we like it.
          </p>
        </div>

      </div>
    </section>
  )
})
