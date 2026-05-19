"use client"

import Link from 'next/link';
import { useCallback, memo } from "react"
import { Button } from "@/components/ui/button"
import { scrollToSection } from "@/lib/utils/scroll"
import { useAnimatedCounter } from "@/lib/hooks/use-animated-counter"
import { ArrowRight } from "lucide-react"

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

export const Hero = memo(function Hero() {
  const handleNavigate = useCallback((href: string) => {
    scrollToSection(href, { highlightDuration: 0 })
  }, [])

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden flex flex-col bg-brand-white"
    >


      {/* Top glow */}
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 lg:-left-32 lg:translate-x-0 w-90 h-90 lg:w-130 lg:h-130 rounded-full bg-brand-coral/18 blur-[100px] lg:blur-[120px] pointer-events-none"
      />

      {/* Bottom glow */}
      <div
        aria-hidden
        className="hidden lg:block absolute top-[48%] -right-32 w-105 h-105 rounded-full bg-brand-teal/18 blur-[130px] pointer-events-none"
      />

      <div
        aria-hidden
        className="hidden lg:block absolute top-[42%] left-1/2 -translate-x-1/2 text-[clamp(14rem,26vw,22rem)] font-black uppercase leading-[0.85] tracking-tighter text-brand-navy/2 select-none pointer-events-none whitespace-nowrap"
      >
        HIRE
      </div>

      <div className="relative z-10 flex-1 flex items-center justify-center px-5 sm:px-8 lg:px-16 max-w-7xl mx-auto w-full py-10 sm:py-12 lg:py-14">
        <div className="w-full flex flex-col items-center text-center mt-30">


          <div className="flex items-center justify-center gap-3 sm:gap-3.5 mb-5 sm:mb-7 animate-fade-in-up delay-100">
            <span className="block w-6 sm:w-9 h-px bg-brand-coral" />
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] sm:tracking-[0.32em] uppercase text-brand-coral">
              IT Recruitment Agency
            </span>
            <span className="block w-6 sm:w-9 h-px bg-brand-coral" />
          </div>

          <h1 className="text-[clamp(2.25rem,9vw,7rem)] font-black leading-[0.95] sm:leading-[0.92] tracking-tight uppercase text-brand-navy mb-6 sm:mb-8 max-w-5xl animate-fade-in-up delay-150">
            IT Recruitment Agency for
            <br />
            <span className="text-brand-coral">Tech Roles</span>
          </h1>

          <div className="flex flex-col items-center max-w-xl mb-8 sm:mb-10 animate-fade-in-up delay-200">
            <h2 className="text-sm sm:text-base lg:text-lg text-brand-navy/70 leading-relaxed px-2 sm:px-0">
              One-stop partner for hiring, payroll, compliance and team scaling in Eastern Europe.
            </h2>
            <div className="mt-5 sm:mt-6 h-0.5 w-12 sm:w-16 bg-brand-coral" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto animate-fade-in-up delay-300">
            <Button
              onClick={() => handleNavigate("#services")}
              className="w-full sm:w-auto h-14 group bg-brand-coral hover:bg-brand-coral-hover text-brand-white px-7 text-sm font-semibold tracking-[0.22em] uppercase rounded-full cursor-pointer"
            >
              <span className="flex items-center justify-center gap-2.5">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>

            <Link
              href="/job-listings"
              className="w-full sm:w-auto h-14 inline-flex items-center justify-center bg-brand-white text-brand-navy border-2 border-brand-navy hover:bg-brand-navy hover:text-brand-white px-7 text-sm font-semibold tracking-[0.22em] uppercase rounded-full"
            >
              Find a Job
            </Link>
          </div>

        </div>
      </div>

      <div className="relative z-10 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto w-full pb-8 sm:pb-10 animate-fade-in-up delay-[400ms]">
        <div className="grid grid-cols-2 lg:grid-cols-4 bg-brand-navy/92 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-brand-white/10 overflow-hidden shadow-2xl shadow-brand-navy/20">
          <StatBlock value="650+" label="Successful hirings" isMobileTop />
          <StatBlock value="12+" label="Senior recruiters" isMobileTop />
          <StatBlock value="100%"  label="Recruiting All tech stacks" isMobileTop/>
          <StatBlock
            value="1"
            suffix="Built in House "
            label="Smart.R ATS"
            isLast
          />
        </div>
      </div>
    </section>
  )
})