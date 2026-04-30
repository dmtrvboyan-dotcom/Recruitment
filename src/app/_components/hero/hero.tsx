"use client"

import { useCallback, memo } from "react"
import { Button } from "@/components/ui/button"
import { scrollToSection } from "@/lib/utils/scroll"
import { useAnimatedCounter } from "@/lib/hooks/use-animated-counter"
import { ArrowRight, ChevronDown } from "lucide-react"

const AnimatedCounter = memo(function AnimatedCounter({
  value,
  label,
}: {
  value: string
  label: string
}) {
  const { ref, displayValue } = useAnimatedCounter(value)

  return (
    <div ref={ref} className="flex flex-col items-center lg:items-start">
      <p className="text-3xl lg:text-4xl font-bold text-brand-navy tabular-nums tracking-tight mb-1">
        {displayValue}
      </p>
      <p className="text-xs font-medium text-brand-teal uppercase tracking-widest leading-snug max-w-[120px] text-center lg:text-left">
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
<section className="relative min-h-screen flex items-center pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-transparent">

   

      {/* Thin header rule */}
      <div className="absolute top-[88px] left-0 right-0 h-px bg-brand-navy/8 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 xl:px-12 w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 lg:gap-24 items-center">

          {/* ── LEFT: copy ── */}
          <div className="max-w-3xl">

            {/* Eyebrow */}
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-coral mb-6 animate-fade-in-up">
              IT Recruitment · Europe
            </p>

            {/* Headline */}
            <h1 className="text-[clamp(2.4rem,5.5vw,4.5rem)] font-bold text-brand-navy leading-[1.08] tracking-tight mb-7 animate-fade-in-up delay-100">
              IT Recruitment Agency for
              <br />
              <span className="text-brand-blue">tech talent</span>
            </h1>

            {/* Body */}
            <p className="text-base lg:text-lg text-brand-navy/55 max-w-xl leading-relaxed mb-10 animate-fade-in-up delay-200">
              We connect companies with IT professionals through recruitment and talent acquisition services.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-3 mb-16 animate-fade-in-up delay-300">
              <Button
                onClick={() => handleNavigate("#contact")}
                className="w-full sm:w-auto bg-brand-coral hover:bg-brand-coral-hover text-white px-8 py-6 text-sm font-semibold tracking-widest uppercase cursor-pointer transition-colors duration-200 group rounded-3xl"
              >
                <span className="flex items-center gap-2.5">
                  Start Hiring
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>

              <Button
                onClick={() => handleNavigate("#jobs")}
                variant="outline"
                className="w-full sm:w-auto bg-transparent hover:bg-brand-navy text-brand-navy hover:text-white rounded-3xl px-8 py-6 text-sm font-semibold tracking-widest uppercase border-2 border-brand-navy cursor-pointer transition-colors duration-200"
              >
                Find a Job
              </Button>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-x-10 gap-y-6 animate-fade-in-up delay-[400ms]">
              <AnimatedCounter value="650+" label="Successful IT Hirings" />
              <AnimatedCounter value="12"   label="Senior Tech Recruiters" />
              <AnimatedCounter value="100%" label="All Tech Stacks" />
              <AnimatedCounter value="1"    label="In-House Smart.R ATS" />
            </div>
          </div>

          {/* ── RIGHT: vertical status cards (desktop only) ── */}
          <div className="hidden lg:flex flex-col gap-3 w-[220px] animate-fade-in-up delay-200">

            {/* Active badge */}
            <div className="bg-card border border-brand-navy/8 px-5 py-4 rounded-xl">
              <div className="flex items-center gap-2 mb-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs font-semibold text-brand-navy uppercase tracking-widest">
                  Hiring Now
                </span>
              </div>
              <p className="text-xs text-brand-navy/50 leading-snug">
                Open roles across Europe
              </p>
            </div>

            {/* Divider */}
            <div className="h-px bg-brand-navy/8 mx-1" />

            {/* Quick stats */}
            {[
              { n: "48h", sub: "Avg. first candidate" },
              { n: "94%", sub: "Client satisfaction" },
              { n: "8+",  sub: "Years in IT recruiting" },
            ].map(({ n, sub }) => (
              <div key={n} className="bg-card border border-brand-navy/8 px-5 py-4 rounded-xl">
                <p className="text-xl font-bold text-brand-coral mb-0.5">{n}</p>
                <p className="text-xs text-brand-teal uppercase tracking-wider leading-snug">{sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1">
          <button
            onClick={() => handleNavigate("#services")}
            className="text-brand-navy/30 hover:text-brand-coral transition-colors cursor-pointer"
            aria-label="Scroll to services"
          >
            <ChevronDown size={22} strokeWidth={1.5} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  )
})
