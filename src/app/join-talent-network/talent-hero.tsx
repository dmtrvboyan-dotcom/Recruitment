"use client"

import { memo, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { scrollToSection } from "@/lib/utils/scroll"
import { useAnimatedCounter } from "@/lib/hooks/use-animated-counter"
import { ArrowDown, Sparkles } from "lucide-react"
import { TRUST_STATS } from "./data"

const StatBlock = memo(function StatBlock({
  value,
  suffix,
  label,
  isLast,
  isMobileTop,
}: {
  value: string
  suffix?: string
  label: string
  isLast?: boolean
  isMobileTop?: boolean
}) {
  const { ref, displayValue } = useAnimatedCounter(value)

  return (
    <div
      ref={ref}
      className={`px-5 py-5 sm:px-6 sm:py-6 lg:px-8 text-center
        ${isMobileTop ? "border-b border-brand-white/8 lg:border-b-0" : ""}
        ${!isLast ? "lg:border-r border-brand-white/8" : ""}
      `}
    >
      <div className="flex items-baseline justify-center gap-1.5 sm:gap-2 mb-1.5">
        <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-white tabular-nums tracking-tight leading-none">
          {displayValue}
        </span>
        {suffix && (
          <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-coral leading-none">
            {suffix}
          </span>
        )}
      </div>
      <p className="text-[9px] sm:text-[10px] tracking-[0.22em] sm:tracking-[0.25em] uppercase text-brand-white/45 font-medium">
        {label}
      </p>
    </div>
  )
})

export const TalentNetworkHero = memo(function TalentNetworkHero() {
  const handleApplyClick = useCallback(() => {
    scrollToSection("#apply", { highlightDuration: 0 })
  }, [])

  const handleHowItWorks = useCallback(() => {
    scrollToSection("#how-it-works", { highlightDuration: 0 })
  }, [])

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col bg-brand-navy">

      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -62deg,
            transparent,
            transparent 70px,
            rgba(114,145,199,0.04) 70px,
            rgba(114,145,199,0.04) 71px
          )`,
        }}
      />

      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 lg:-left-32 lg:translate-x-0
                   w-90 h-90 lg:w-130 lg:h-130 rounded-full bg-brand-coral/20 blur-[100px] lg:blur-[120px] pointer-events-none"
      />

      <div
        aria-hidden
        className="hidden lg:block absolute top-[42%] -right-32 w-105 h-105 rounded-full bg-brand-teal/25 blur-[130px] pointer-events-none"
      />

      <div
        aria-hidden
        className="hidden lg:block absolute top-[44%] left-1/2 -translate-x-1/2
                   text-[clamp(14rem,26vw,22rem)] font-black uppercase
                   leading-[0.85] tracking-tighter text-brand-white/[0.025]
                   select-none pointer-events-none whitespace-nowrap"
      >
        TALENT
      </div>

      <div className="relative z-10 flex-1 flex items-center justify-center px-5 sm:px-8 lg:px-16 max-w-7xl mx-auto w-full py-10 sm:py-12 lg:py-14">
        <div className="w-full flex flex-col items-center text-center mt-24 sm:mt-28">

          <div className="flex items-center justify-center gap-3 sm:gap-3.5 mb-5 sm:mb-7 animate-fade-in-up delay-100">
            <span className="block w-6 sm:w-9 h-px bg-brand-coral" />
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] sm:tracking-[0.32em] uppercase text-brand-coral flex items-center gap-2">
              <Sparkles className="w-3 h-3" strokeWidth={2} />
              For Developers &amp; Tech Talent
            </span>
            <span className="block w-6 sm:w-9 h-px bg-brand-coral" />
          </div>

          <h1 className="text-[clamp(2.25rem,9vw,8rem)] font-black leading-[0.95] sm:leading-[0.92] tracking-tight uppercase text-brand-white mb-6 sm:mb-8 max-w-5xl animate-fade-in-up delay-150">
            Join Our
            <br />
            <span className="text-brand-coral">Talent Network</span>
          </h1>

          <div className="flex flex-col items-center max-w-2xl mb-8 sm:mb-10 animate-fade-in-up delay-200">
            <p className="text-sm sm:text-base lg:text-lg text-brand-white/60 leading-relaxed px-2 sm:px-0">
              Get matched with top companies hiring{" "}
              <span className="text-brand-white font-medium">remote</span>,{" "}
              <span className="text-brand-white font-medium">freelance</span>,{" "}
              <span className="text-brand-white font-medium">contract</span>, and{" "}
              <span className="text-brand-white font-medium">full-time</span> talent.
            </p>
            <div className="mt-5 sm:mt-6 h-0.5 w-12 sm:w-16 bg-brand-coral" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto animate-fade-in-up delay-300">
            <Button
              onClick={handleApplyClick}
              className="w-full sm:w-auto group bg-brand-coral hover:bg-brand-coral-hover text-brand-white px-7 sm:px-8 py-5 sm:py-6 text-sm font-semibold tracking-[0.22em] uppercase rounded-full cursor-pointer transition-colors duration-200"
            >
              <span className="flex items-center justify-center gap-2.5">
                Apply Now
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
              </span>
            </Button>

            <Button
              onClick={handleHowItWorks}
              variant="outline"
              className="w-full sm:w-auto bg-transparent text-brand-white border-2 border-brand-white/30 hover:bg-brand-white hover:text-brand-navy hover:border-brand-white px-7 sm:px-8 py-5 sm:py-6 text-sm font-semibold tracking-[0.22em] uppercase rounded-full cursor-pointer transition-colors duration-200"
            >
              How it works
            </Button>
          </div>

          <p className="mt-7 sm:mt-8 text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-brand-white/35 font-medium animate-fade-in-up delay-[350ms]">
            Free for candidates &nbsp;·&nbsp; Reviewed by humans &nbsp;·&nbsp; 100% confidential
          </p>

        </div>
      </div>

      <div className="relative z-10 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto w-full pb-8 sm:pb-10 animate-fade-in-up delay-[400ms]">
        <div className="grid grid-cols-2 lg:grid-cols-4 bg-brand-white/5 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-brand-white/10 overflow-hidden shadow-2xl shadow-black/30">
          {TRUST_STATS.map((stat, i) => (
            <StatBlock
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              isMobileTop={i < 2}
              isLast={i === TRUST_STATS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
})
