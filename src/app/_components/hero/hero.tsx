"use client"

import { memo, useCallback } from "react"
import { scrollToSection } from "@/lib/utils/scroll"
import { AppButton } from "@/components/ui/app-button"
import { usePostLoadAnimations } from "./use-post-load-animations"
import { RotatingText } from "./rotating-text"
import { StatBlock } from "./stat-block"
import { STATS } from "./data"

export const Hero = memo(function Hero() {
  const animationsReady = usePostLoadAnimations()

  const handleNavigate = useCallback((href: string) => {
    scrollToSection(href, { highlightDuration: 0 })
  }, [])

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col bg-brand-white mt-12 sm:mt-6">

      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2
          lg:-left-32 lg:translate-x-0
          w-90 h-90 lg:w-130 lg:h-130
          rounded-full bg-brand-coral/18
          blur-[100px] lg:blur-[120px]
          pointer-events-none"
      />
      <div
        aria-hidden
        className="hidden lg:block absolute top-[48%] -right-32
          w-105 h-105 rounded-full bg-brand-teal/18
          blur-[130px] pointer-events-none"
      />

      {/* <div
        aria-hidden
        className="hidden lg:block absolute top-[42%] left-1/2 -translate-x-1/2
          text-[clamp(14rem,26vw,22rem)] font-bold uppercase
          leading-[0.85] tracking-tighter text-brand-navy/2
          select-none pointer-events-none whitespace-nowrap"
      >
        HIRE
      </div> */}

      <div className="relative z-10 flex-1 flex items-center justify-center
        px-5 sm:px-8 lg:px-16 max-w-7xl mx-auto w-full
        py-10 sm:py-12 lg:py-14"
      >
        <div className="w-full flex flex-col items-center text-center mt-30">

          <div className="flex items-center justify-center gap-3 sm:gap-3.5
            mb-5 sm:mb-7 animate-fade-in-up delay-100"
          >
            {/* <span className="block w-6 sm:w-9 h-px bg-brand-coral" />
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] sm:tracking-[0.32em] uppercase text-brand-navy/75">
              IT Recruitment Agency
            </span>
            <span className="block w-6 sm:w-9 h-px bg-brand-coral" /> */}
          </div>

          <h1 className="text-[clamp(2.25rem,9vw,6rem)] font-bold
            leading-[0.95] sm:leading-[0.92] tracking-tight uppercase
            text-brand-navy mb-6 sm:mb-8 max-w-5xl"
          >
            IT Recruitment Agency for
            <br />
            <span className="text-brand-coral">Tech Roles</span>
          </h1>

          <div className="flex flex-col items-center max-w-lg w-full
            mb-8 sm:mb-10 animate-fade-in-up delay-200 px-4 sm:px-0 text-center justify-center p-4"
          >
            <div className="text-sm sm:text-base lg:text-xl text-brand-navy leading-relaxed text-center w-full">
              <span className="block">Your One-stop Partner For</span>
              <RotatingText active={animationsReady} />
            </div>
            <div className="mt-4 h-0.5 w-12 sm:w-16 bg-brand-coral" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center
            gap-3 sm:gap-4 w-full sm:w-auto animate-fade-in-up delay-300"
          >
            <AppButton
              onClick={() => handleNavigate("#trusted-companies")}
              icon="arrow"
              className="sm:w-auto"
            >
             Learn more
            </AppButton>

            <AppButton href="/job-listings" variant="navy" className="sm:w-auto">
              Find a Job
            </AppButton>
          </div>

        </div>
      </div>

      <div className="relative z-10 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto w-full pb-8 sm:pb-10">
        <div className="grid grid-cols-2 lg:grid-cols-4
          bg-brand-navy/92 backdrop-blur-md
          rounded-2xl sm:rounded-3xl
          border border-brand-white/10
          overflow-hidden shadow-2xl shadow-brand-navy/20"
        >
          {STATS.map((stat) => (
            <StatBlock key={stat.label} {...stat} animate={animationsReady} />
          ))}
        </div>
      </div>

    </section>
  )
})