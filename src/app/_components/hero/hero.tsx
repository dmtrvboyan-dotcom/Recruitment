"use client"

import { useCallback, memo, useState, useEffect } from "react"
import { scrollToSection } from "@/lib/utils/scroll"
import { useAnimatedCounter } from "@/lib/hooks/use-animated-counter"
import { AppButton } from "@/components/ui/app-button"


const SERVICES = [
  "Hiring in Bulgaria",
  "Executive Search",
  "Payroll and Compliance in Bulgaria",
  "Benchmarking Salaries with Real data",
  "Employ Locally with no Entity (EOR)",
] as const

const PAUSE_MS = 2000
const EXIT_MS = 500
const ENTER_MS = 580


const ROTATION_STYLES = `
  @keyframes rtext-in {
    from { opacity: 0; transform: translateY(9px);  filter: blur(6px); }
    to   { opacity: 1; transform: translateY(0);    filter: blur(0);   }
  }
  @keyframes rtext-out {
    from { opacity: 1; transform: translateY(0);    filter: blur(0);   }
    to   { opacity: 0; transform: translateY(-9px); filter: blur(6px); }
  }
  .rtext-idle     { opacity: 1; transform: translateY(0); filter: blur(0); }
  .rtext-entering { animation: rtext-in  ${ENTER_MS}ms cubic-bezier(0.16, 1, 0.3, 1)   forwards; }
  .rtext-exiting  { animation: rtext-out ${EXIT_MS}ms  cubic-bezier(0.55, 0, 1, 0.45)  forwards; }
  @media (prefers-reduced-motion: reduce) {
    .rtext-entering, .rtext-exiting {
      animation: none !important;
      opacity: 1 !important;
      transform: none !important;
      filter: none !important;
    }
  }
`


type AnimPhase = "idle" | "exiting" | "entering"

const RotatingText = memo(function RotatingText() {
  const [index, setIndex] = useState(0)
  const [phase, setPhase] = useState<AnimPhase>("idle")

  useEffect(() => {
    let pauseId: ReturnType<typeof setTimeout>
    let exitId: ReturnType<typeof setTimeout>
    let enterDoneId: ReturnType<typeof setTimeout>

    const schedule = () => {
      pauseId = setTimeout(() => {
        setPhase("exiting")

        exitId = setTimeout(() => {
          setIndex(i => (i + 1) % SERVICES.length)
          setPhase("entering")

          enterDoneId = setTimeout(() => {
            setPhase("idle")
            schedule()
          }, ENTER_MS)
        }, EXIT_MS)
      }, PAUSE_MS)
    }

    schedule()

    return () => {
      clearTimeout(pauseId)
      clearTimeout(exitId)
      clearTimeout(enterDoneId)
    }
  }, [])

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: ROTATION_STYLES }} />
      <span
        className="relative block w-full min-h-8 sm:min-h-[1.6em] overflow-hidden mt-1 text-md sm:text-2xl"
        aria-live="polite"
        aria-atomic="true"
      >
        <span
          className={`rtext-${phase} absolute inset-x-0 top-0
            font-semibold text-brand-coral leading-snug
            text-center will-change-[opacity,transform,filter]`}
        >
          {SERVICES[index]}
        </span>
      </span>
    </>
  )
})


interface StatBlockProps {
  value: string
  suffix?: string
  label: string
  isLast?: boolean
  isMobileTop?: boolean
}

const StatBlock = memo(function StatBlock({
  value,
  suffix,
  label,
  isLast,
  isMobileTop,
}: StatBlockProps) {
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
        <span
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-white tabular-nums tracking-tight leading-none"
          style={{ minWidth: `${value.length}ch` }}
        >
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
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col bg-brand-white">

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

      <div
        aria-hidden
        className="hidden lg:block absolute top-[42%] left-1/2 -translate-x-1/2
          text-[clamp(14rem,26vw,22rem)] font-bold uppercase
          leading-[0.85] tracking-tighter text-brand-navy/2
          select-none pointer-events-none whitespace-nowrap"
      >
        HIRE
      </div>

      <div className="relative z-10 flex-1 flex items-center justify-center
        px-5 sm:px-8 lg:px-16 max-w-7xl mx-auto w-full
        py-10 sm:py-12 lg:py-14"
      >
        <div className="w-full flex flex-col items-center text-center mt-30">

          <div className="flex items-center justify-center gap-3 sm:gap-3.5
            mb-5 sm:mb-7 animate-fade-in-up delay-100"
          >
            <span className="block w-6 sm:w-9 h-px bg-brand-coral" />
            <span className="text-[10px] sm:text-[11px] font-semibold
              tracking-[0.28em] sm:tracking-[0.32em] uppercase text-brand-coral"
            >
              IT Recruitment Agency
            </span>
            <span className="block w-6 sm:w-9 h-px bg-brand-coral" />
          </div>

          <h1
            className="text-[clamp(2.25rem,9vw,6rem)] font-bold
    leading-[0.95] sm:leading-[0.92] tracking-tight uppercase
    text-brand-navy mb-6 sm:mb-8 max-w-5xl"
          >
            IT Recruitment Agency for
            <br />
            <span className="text-brand-coral">Tech Roles</span>
          </h1>

          <div className="flex flex-col items-center max-w-lg w-full
            mb-8 sm:mb-10 animate-fade-in-up delay-200 px-4 sm:px-0  text-center justify-center p-4"
          >
            <div className="text-sm sm:text-base lg:text-xl
              text-brand-navy/65 leading-relaxed text-center w-full"
            >
              <span className="block"> Your One-stop Partner For</span>
              <RotatingText />
            </div>
            <div className="mt-4 h-0.5 w-12 sm:w-16 bg-brand-coral" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center
            gap-3 sm:gap-4 w-full sm:w-auto animate-fade-in-up delay-300"
          >
            <AppButton
              onClick={() => handleNavigate("#services")}
              icon="arrow"
              className="sm:w-auto"
            >
              Learn More
            </AppButton>

            <AppButton
              href="/job-listings"
              variant="navy"
              className="sm:w-auto"
            >
              Find a Job
            </AppButton>
          </div>

        </div>
      </div>

      <div className="relative z-10 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto w-full
        pb-8 sm:pb-10 animate-fade-in-up delay-400"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4
          bg-brand-navy/92 backdrop-blur-md
          rounded-2xl sm:rounded-3xl
          border border-brand-white/10
          overflow-hidden shadow-2xl shadow-brand-navy/20"
        >
          <StatBlock value="850+" label="Successful hirings" isMobileTop={true} />
          <StatBlock value="12+" label="Senior recruiters" isMobileTop={true} />
          <StatBlock value="100%" label="Recruiting All tech stacks" isMobileTop={true} />
          <StatBlock value="1" suffix="Built in House" label="Smart.R ATS" isLast={true} />
        </div>
      </div>

    </section>
  )
})