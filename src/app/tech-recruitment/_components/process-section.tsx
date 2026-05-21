"use client"

import { memo } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PROCESS_DATA, PROCESS_STEPS } from "../data"
import { AppButton } from "@/components/ui/app-button"


export const ProcessSection = memo(function ProcessSection() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-brand-navy overflow-hidden">

      {/* Coral glow */}
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[400px] h-[400px] lg:w-[520px] lg:h-[520px] rounded-full bg-brand-coral/12 blur-[120px] pointer-events-none"
      />

      {/* Watermark */}
      <div
        aria-hidden
        className="hidden lg:block absolute bottom-0 -right-8 text-[clamp(10rem,16vw,14rem)] font-black uppercase leading-[0.85] tracking-tighter text-brand-white/[0.025] select-none pointer-events-none whitespace-nowrap"
      >
        PROCESS
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14 lg:mb-20">
          <div className="flex items-center justify-center gap-3 sm:gap-3.5 mb-5 sm:mb-6">
            <span className="block w-6 sm:w-9 h-px bg-brand-coral" />
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] sm:tracking-[0.32em] uppercase text-brand-coral">
              {PROCESS_DATA.tagline}
            </span>
            <span className="block w-6 sm:w-9 h-px bg-brand-coral" />
          </div>
          <h2 className="text-[clamp(1.75rem,6vw,3.5rem)] font-black leading-[0.95] sm:leading-[0.92] tracking-tight uppercase text-brand-white mb-5 sm:mb-6">
            {PROCESS_DATA.title.split("Works")[0]}
            <br />
            <span className="text-brand-coral">Works.</span>
          </h2>
          <div className="mx-auto h-[2px] w-12 sm:w-16 bg-brand-coral mb-6 sm:mb-8" />
          <p className="text-sm sm:text-base text-brand-white/55 leading-relaxed max-w-xl mx-auto">
            {PROCESS_DATA.subtitle}
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-white/10 rounded-3xl overflow-hidden border border-brand-white/10 mb-14 sm:mb-16">
          {PROCESS_STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className="bg-brand-navy p-6 sm:p-7 lg:p-8 flex flex-col gap-5"
              >
                {/* Top: number + icon */}
                <div className="flex items-start justify-between">
                  <span className="text-4xl sm:text-5xl font-black leading-[0.85] tracking-[-0.04em] text-brand-white/[0.07]">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-brand-coral/15 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-brand-coral" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-black uppercase tracking-[-0.01em] leading-[1.1] text-brand-white text-base sm:text-lg mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-brand-white/50 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTAs */}
        <div className="flex flex-col items-center gap-4 sm:gap-5">
          <p className="text-[11px] sm:text-[12px] tracking-[0.22em] uppercase text-brand-white/40 text-center">
            {PROCESS_DATA.cta.label}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <AppButton href={PROCESS_DATA.cta.href} icon="arrow" className="sm:w-auto">
              {PROCESS_DATA.cta.text}
            </AppButton>

          
          </div>
        </div>
      </div>
    </section>
  )
})