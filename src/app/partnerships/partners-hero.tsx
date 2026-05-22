"use client"

import { memo, useRef, useState, useEffect } from "react"
import Link from "next/link";
import { AppButton } from '@/components/ui/app-button';


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

export const PartnersHero = memo(function PartnersHero() {
  const { ref, visible } = useInView(0.1)

  return (
    <section className="relative w-full bg-brand-navy overflow-hidden min-h-[80dvh] sm:min-h-[90dvh] flex flex-col justify-end">

      {/* Radial glow top-right */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-brand-coral/10 rounded-full blur-3xl pointer-events-none -translate-y-1/3 translate-x-1/4" />
      {/* Radial glow bottom-left */}
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] bg-brand-teal/10 rounded-full blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/4" />

      {/* Large watermark text */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <span className="text-[20vw] font-bold uppercase tracking-tighter text-white/[0.02] whitespace-nowrap leading-none">
          PARTNERS
        </span>
      </div>

      <div
        ref={ref}
        className="relative max-w-7xl mx-auto w-full px-5 sm:px-10 xl:px-16 pb-16 sm:pb-20 lg:pb-28 pt-32 sm:pt-40 text-center"
      >
        {/* Eyebrow */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-brand-coral block mb-4">
            Clients & Partnerships
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.7s ease 80ms, transform 0.7s ease 80ms",
          }}
        >
          <h1 className="text-[clamp(3rem,10vw,8rem)] font-bold leading-none tracking-tight text-brand-white mb-6 sm:mb-8">
            TRUSTED BY
            <br />
            <span className="text-brand-coral">LEADERS.</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease 160ms, transform 0.7s ease 160ms",
          }}
          className="max-w-2xl mx-auto mb-14 sm:mb-20"
        >
          <p className="text-sm sm:text-lg text-white/50 leading-relaxed">
            We partner with companies that understand great hiring is about building teams that create long-term business impact - not just filling open roles.
          </p>
        </div>

        <div
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.7s ease 300ms",
          }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto animate-fade-in-up delay-300">
            <AppButton href="/contacts" className="sm:w-auto">
              Partner With Us
            </AppButton>

            <AppButton href="/process" variant="outline" className="sm:w-auto">
              See how we do it
            </AppButton>
          </div>


        </div>
      </div>
    </section>
  )
})