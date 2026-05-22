"use client"

import { memo, useRef, useState, useEffect } from "react"
import {
  Search,
  UserCheck,
  CalendarCheck,
  MessageCircle,
  Handshake,
  TrendingUp,
  FileCheck,
} from "lucide-react"
import { AppButton } from "@/components/ui/app-button"

const STEPS = [
  {
    icon: Search,
    label: "Source",
    desc: "Highly targeted candidate sourcing across our network.",
  },
  {
    icon: FileCheck,
    label: "Screen",
    desc: "Only qualified professionals reach your desk.",
  },
  {
    icon: CalendarCheck,
    label: "Coordinate",
    desc: "We manage interview scheduling end-to-end.",
  },
  {
    icon: MessageCircle,
    label: "Communicate",
    desc: "Constant transparency throughout the process.",
  },
  {
    icon: UserCheck,
    label: "Engage",
    desc: "Candidates stay warm and informed at every step.",
  },
  {
    icon: Handshake,
    label: "Offer",
    desc: "We support offer management to close the deal.",
  },
  {
    icon: TrendingUp,
    label: "Scale",
    desc: "Help clients move fast to secure top talent.",
  },
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

export const HowItWorks = memo(function HowItWorks() {
  const { ref, visible } = useInView(0.1)

  return (
    <section className="relative w-full bg-brand-navy overflow-hidden py-20 lg:py-32">

      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[40vw] h-[40vw] max-w-[480px] max-h-[480px] bg-brand-coral/8 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-5 sm:px-10 xl:px-16">

        <div
          className="mb-16 lg:mb-24"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-brand-coral block mb-3">
            How It Works
          </span>
          <h2 className="text-[clamp(2.2rem,5vw,4.5rem)] font-bold leading-none tracking-tight text-brand-white">
            EVERY HIRE STARTS
            <br />
            <span className="text-brand-coral">WITH UNDERSTANDING.</span>
          </h2>
          <p className="mt-6 text-sm sm:text-base text-white/45 max-w-xl leading-relaxed">
            We begin by learning your hiring goals, internal processes, and culture. Then we build a recruitment strategy tailored specifically to your business - and act as an extension of your hiring team.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 lg:gap-3">
            {STEPS.map((step, i) => {
              const Icon = step.icon
              return (
                <div
                  key={step.label}
                  className="relative z-10 flex flex-col items-start lg:items-center gap-4 p-5 lg:p-4 rounded-2xl bg-white/[0.04] border border-white/8 hover:border-brand-coral/30 hover:bg-white/[0.07] transition-all duration-400 group"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(20px)",
                    transition: `opacity 0.5s ease ${200 + i * 80}ms, transform 0.5s ease ${200 + i * 80}ms, background-color 0.3s ease, border-color 0.3s ease`,
                  }}
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-coral/15 flex items-center justify-center shrink-0 group-hover:bg-brand-coral/25 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-brand-coral" strokeWidth={1.6} />
                  </div>
                  <div className="lg:text-center">
                    <span className="block text-xs font-bold uppercase tracking-widest text-white mb-1">
                      {step.label}
                    </span>
                    <p className="text-xs text-white/35 leading-snug lg:hidden xl:block">
                      {step.desc}
                    </p>
                  </div>
                  <span className="absolute top-3 right-3 text-[9px] font-bold text-white/15 tracking-widest">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom callout */}
        <div
          className="mt-14 sm:mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-5 p-7 sm:p-9 rounded-3xl bg-white/[0.04] border border-white/8"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.7s ease 900ms",
          }}
        >
          <div className="w-12 h-12 rounded-2xl bg-brand-coral/15 flex items-center justify-center shrink-0">
            <Handshake className="w-6 h-6 text-brand-coral" strokeWidth={1.5} />
          </div>
          <p className="text-sm sm:text-base text-white/55 leading-relaxed">
            <span className="text-white font-bold">We act as an extension of your hiring team</span> - keeping the process efficient, transparent, and focused on long-term success.
          </p>
        </div>

        {/* CTA: high-intent buyers want the full methodology after seeing the overview */}
        <div
          className="mt-8 flex justify-center"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.7s ease 1000ms",
          }}
        >
          <AppButton href="/process" icon="arrow" className="sm:w-auto">
            See our full 6-phase recruitment process
          </AppButton>
        </div>

      </div>
    </section>
  )
})