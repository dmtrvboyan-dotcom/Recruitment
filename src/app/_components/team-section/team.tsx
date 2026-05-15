"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PhotoGallery } from "./photo-gallery"
import { TeamCarousel } from "./team-carousel"
import { scrollToSection } from "@/lib/utils/scroll"
import { useCallback } from "react"

const STATS = [
  { value: "15+", label: "Years IT Recruitment Experience" },
  { value: "2–10", suffix: "days", label: "To present candidates" },
]

export function MeetTheTeam() {


  return (
    <section
      id="about"
      className="relative py-20 sm:py-24 lg:py-32 bg-brand-navy overflow-hidden"
    >


      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 lg:left-auto lg:-left-32 lg:translate-x-0 w-[360px] h-[360px] lg:w-[520px] lg:h-[520px] rounded-full bg-brand-coral/15 blur-[100px] lg:blur-[120px] pointer-events-none"
      />

      <div
        aria-hidden
        className="hidden lg:block absolute bottom-0 -right-32 w-[420px] h-[420px] rounded-full bg-brand-teal/15 blur-[130px] pointer-events-none"
      />

      <div
        aria-hidden
        className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(12rem,20vw,18rem)] font-black uppercase leading-[0.85] tracking-tighter text-brand-white/[0.025] select-none pointer-events-none whitespace-nowrap"
      >
        PEOPLE
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14 lg:mb-20">
          <div className="flex items-center justify-center gap-3 sm:gap-3.5 mb-5 sm:mb-6">
            <span className="block w-6 sm:w-9 h-px bg-brand-coral" />
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] sm:tracking-[0.32em] uppercase text-brand-coral">
              About us
            </span>
            <span className="block w-6 sm:w-9 h-px bg-brand-coral" />
          </div>

          <h2 className="text-[clamp(1.75rem,6vw,3.5rem)] font-black leading-[0.95] sm:leading-[0.92] tracking-tight uppercase text-brand-white mb-5 sm:mb-6">
            Nice to meet
            <br />
            <span className="text-brand-coral">you.</span>
          </h2>

          <div className="mx-auto h-[2px] w-12 sm:w-16 bg-brand-coral mb-8 sm:mb-10" />

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="inline-flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3 rounded-2xl bg-brand-white/5 border border-brand-white/10"
              >
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl sm:text-3xl font-black text-brand-white tabular-nums tracking-tight leading-none">
                    {stat.value}
                  </span>
                  {stat.suffix && (
                    <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-coral leading-none">
                      {stat.suffix}
                    </span>
                  )}
                </div>
                <div className="h-5 w-px bg-brand-white/15" />
                <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.15em] uppercase text-brand-white/55">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <PhotoGallery />

        <div className="flex items-center gap-4 sm:gap-6 mb-12 sm:mb-14 lg:mb-16">
          <div className="flex-1 h-px bg-brand-white/10" />
          <span className="font-bold italic text-[13px] tracking-[0.18em] text-brand-coral whitespace-nowrap">
            — The team —
          </span>
          <div className="flex-1 h-px bg-brand-white/10" />
        </div>

        <TeamCarousel />

        <div className="flex flex-col items-center mt-16 sm:mt-20 lg:mt-24 gap-4 sm:gap-5">
          <p className="text-[11px] sm:text-[12px] tracking-[0.22em] uppercase text-brand-white/40 text-center px-4">
            Get to know the people behind every placement.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">


            <Link
              href="/about"
              className="w-full group sm:w-auto h-14 inline-flex items-center justify-center bg-brand-coral text-brand-white border-2 border-brand-navy hover:bg-brand-coral-hover hover:text-brand-white px-7 text-sm font-semibold tracking-[0.22em] uppercase rounded-full duration-200 "
            >Learn more about us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              href="/candidates#client-testimonials"
              className="w-full group sm:w-auto h-14 inline-flex items-center justify-center bg-brand-navy text-brand-white border border-brand-white  hover:bg-brand-coral-hover/25 hover:text-brand-white px-7 text-sm font-semibold tracking-[0.22em] uppercase rounded-full duration-200 "
            >                Candidate feedback
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}