"use client"

import { memo } from "react"
import { AppButton } from '@/components/ui/app-button';


export const ClientsCTA = memo(function ClientsCTA() {
  return (
    <section className="relative w-full bg-brand-white overflow-hidden py-20 lg:py-32">

      {/* Top chapter divider - bridges from previous section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-0.5 w-32 bg-linear-to-r from-transparent via-brand-coral to-transparent" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[40vw] h-[40vw] max-w-125 max-h-125 bg-brand-coral/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[35vw] h-[35vw] max-w-112.5 max-h-112.5 bg-brand-teal/12 rounded-full blur-3xl" />
      </div>

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage: "radial-gradient(circle, #1A1A2E10 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-10 xl:px-16 flex flex-col items-center text-center gap-8">

        <div>
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-brand-coral block mb-4">
            Let's Build Together
          </span>
          <h2 className="text-[clamp(2.8rem,8vw,7rem)] font-bold leading-none tracking-tight uppercase text-brand-navy mb-6">
            Ready to
            <br />
            <span className="text-brand-coral">Work with us?</span>
          </h2>
          <p className="text-sm sm:text-lg text-brand-navy/55 max-w-lg mx-auto leading-relaxed">
            Whether you're hiring for one critical role or scaling an entire department - we help you find people who make an impact.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto animate-fade-in-up delay-300">
          <AppButton href="/contacts" icon="arrow" className="sm:w-auto">
            Join 30+ partner companies
          </AppButton>
        </div>

      </div>
    </section>
  )
})