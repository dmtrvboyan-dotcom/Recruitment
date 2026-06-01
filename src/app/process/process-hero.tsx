"use client"

import { memo } from "react"

export const ProcessHero = memo(function ProcessHero() {
  return (
    <section className="relative w-full min-h-[60vh] bg-brand-navy overflow-hidden flex flex-col items-center justify-center">

      {/* Coral glow blob */}
      <div className="absolute -bottom-32 -left-32 w-120 h-120 rounded-full bg-brand-coral/20 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[320px] h-80 rounded-full bg-brand-coral/8 blur-[100px] pointer-events-none" />

      {/* Large watermark number */}
      <div
        aria-hidden
        className="absolute bottom-0 right-5 sm:right-10 xl:right-16 text-[20vw] font-bold leading-none tracking-tighter text-white/3 select-none pointer-events-none"
      >
        06
      </div>

      <div
        className="relative w-full px-5 sm:px-10 xl:px-16 pt-28 pb-16 lg:pb-24 mt-20"
        style={{
          maxWidth: "80rem",
          marginLeft: "auto",
          marginRight: "auto",
          boxSizing: "border-box",
        }}
      >
        <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-brand-coral block mb-4">
          Our Process
        </span>

        <h1 className="text-[clamp(3rem,9vw,8rem)] font-bold leading-none tracking-tight text-white mb-6 max-w-4xl">
          HOW WE
          <br />
          <span className="text-brand-coral">FIND YOUR</span>
          <br />
          NEXT HIRE.
        </h1>

        <p className="text-sm sm:text-base lg:text-lg text-white/50 max-w-xl leading-relaxed">
          Six deliberate steps that bring the right people, opportunities, and goals together.
        </p>

        {/* Horizontal divider rule */}
        <div className="mt-12 flex items-center gap-4">
          <div className="h-px flex-1 max-w-xs bg-white/10" />
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/20">
            Scroll to explore
          </span>
        </div>
      </div>
    </section>
  )
})