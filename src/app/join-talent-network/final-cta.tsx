"use client"

import { memo, useCallback, useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { scrollToSection } from "@/lib/utils/scroll"
import { ArrowUp, Mail } from "lucide-react"
import Link from 'next/link';
import { AppButton } from '@/components/ui/app-button';


function useInView(threshold = 0.15) {
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

export const FinalCta = memo(function FinalCta() {
  const { ref, visible } = useInView()


  return (
    <section className="relative w-full bg-brand-navy overflow-hidden">


      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-175 h-175 rounded-full bg-brand-coral/18 blur-[140px] pointer-events-none"
      />

      <div
        aria-hidden
        className="absolute -bottom-40 left-1/4 w-115 h-115 rounded-full bg-brand-teal/12 blur-[140px] pointer-events-none"
      />

      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(10rem,22vw,20rem)] font-bold uppercase tracking-tighter text-brand-white/2.5 leading-[0.85] select-none pointer-events-none whitespace-nowrap"
      >
        READY?
      </div>

      <div
        ref={ref}
        className="relative max-w-5xl mx-auto px-5 sm:px-10 py-24 lg:py-36 text-center"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(28px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        <div className="flex items-center justify-center gap-3 sm:gap-3.5 mb-6">
          <span className="block w-6 sm:w-9 h-px bg-brand-coral" />
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.32em] uppercase text-brand-coral">
            Your Next Role Awaits
          </span>
          <span className="block w-6 sm:w-9 h-px bg-brand-coral" />
        </div>

        <h2 className="text-[clamp(2.5rem,8vw,7rem)] font-bold uppercase leading-[0.92] tracking-tight text-brand-white mb-8">
          STOP CHASING
          <br />
          <span className="text-brand-coral">JOBS.</span>
          <br />
          LET THEM
          <br />
          FIND YOU.
        </h2>

        <p className="text-sm sm:text-base lg:text-lg text-brand-white/55 leading-relaxed max-w-xl mx-auto mb-10 sm:mb-12">
          Join hundreds of developers and tech professionals already in the network. Three minutes today - opportunities for years.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
        

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto animate-fade-in-up delay-300">
            <AppButton href="/contacts" className="sm:w-auto">
              <Mail className="w-4 h-4" strokeWidth={2} />
              Get in touch
            </AppButton>


          </div>

        </div>

        <div className="mt-12 sm:mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-brand-white/35 font-medium">
          <span className="flex items-center gap-2">
            <span className="block w-1.5 h-1.5 rounded-full bg-brand-coral" />
            Free forever
          </span>
          <span className="flex items-center gap-2">
            <span className="block w-1.5 h-1.5 rounded-full bg-brand-coral" />
            48-hour reviews
          </span>
          <span className="flex items-center gap-2">
            <span className="block w-1.5 h-1.5 rounded-full bg-brand-coral" />
            Senior recruiters only
          </span>
        </div>
      </div>
    </section>
  )
})
