"use client"

import Link from 'next/link'
import { memo } from "react"
import { ArrowRight } from "lucide-react"
import { COMPANIES } from "./companies"

function MarqueeRow({
  companies,
  reverse = false,
  duration = "60s",
  variant = "white",
}: {
  companies: string[]
  reverse?: boolean
  duration?: string
  variant?: "white" | "coral"
}) {
  const items = [...companies, ...companies, ...companies, ...companies]

  const textColor =
    variant === "coral" ? "text-brand-coral/60" : "text-brand-white/35"

  return (
    <div className="relative overflow-hidden py-3 sm:py-5 w-screen left-1/2 -translate-x-1/2">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-32 lg:w-48 z-10 bg-gradient-to-r from-brand-navy via-brand-navy/85 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-32 lg:w-48 z-10 bg-gradient-to-l from-brand-navy via-brand-navy/85 to-transparent" />

      <div
        className="flex w-max"
        style={{
          animation: `marquee ${duration} linear infinite ${reverse ? "reverse" : "normal"}`,
          willChange: "transform",
        }}
      >
        {items.map((name, i) => (
          <span
            key={i}
            className={`mx-5 sm:mx-9 lg:mx-12 shrink-0 whitespace-nowrap 
                       text-[1.75rem] sm:text-[2.75rem] lg:text-[3.75rem] 
                       font-black tracking-[0.02em] uppercase 
                       leading-none transition-colors duration-300
                       hover:text-brand-white
                       ${textColor}`}
          >
            {name}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="animation: marquee"] {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  )
}

export const TrustedBySection = memo(function TrustedBySection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-brand-navy overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -62deg,
            transparent,
            transparent 70px,
            rgba(114,145,199,0.05) 70px,
            rgba(114,145,199,0.05) 71px
          )`,
        }}
      />

      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 lg:left-auto lg:-left-32 lg:translate-x-0 w-[360px] h-[360px] lg:w-[520px] lg:h-[520px] rounded-full bg-white-coral/18 blur-[100px] lg:blur-[120px] pointer-events-none"
      />

      <div
        aria-hidden
        className="hidden lg:block absolute top-[48%] -right-32 w-[420px] h-[420px] rounded-full bg-white-teal/18 blur-[130px] pointer-events-none"
      />
      <div
        aria-hidden
        className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(12rem,22vw,20rem)] font-black uppercase leading-[0.85] tracking-tighter text-brand-white/[0.025] select-none pointer-events-none whitespace-nowrap"
      >
        TRUSTED
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center px-5 sm:px-8 mb-12 sm:mb-14 lg:mb-16">
        <div className="flex items-center justify-center gap-3 sm:gap-3.5 mb-5 sm:mb-6">
          <span className="block w-6 sm:w-9 h-px bg-brand-coral" />
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] sm:tracking-[0.32em] uppercase text-brand-coral">
            Our Clients
          </span>
          <span className="block w-6 sm:w-9 h-px bg-brand-coral" />
        </div>

        <h2 className="text-[clamp(1.75rem,6vw,3.5rem)] font-black leading-[0.95] sm:leading-[0.92] tracking-tight uppercase text-brand-white mb-5 sm:mb-6">
          Companies we&apos;ve
          <br />
          <span className="text-brand-coral">partnered with.</span>
        </h2>

        <div className="mx-auto h-[2px] w-12 sm:w-16 bg-brand-coral mb-6 sm:mb-8" />

        <p className="text-sm sm:text-base text-brand-white/55 leading-relaxed max-w-xl mx-auto px-2 sm:px-0">
          From early-stage startups to scaling enterprises
        </p>
      </div>

      <div className="relative z-10 flex flex-col gap-1 sm:gap-2">
        <MarqueeRow companies={COMPANIES} duration="50s" variant="white" />
        <MarqueeRow
          companies={COMPANIES}
          duration="65s"
          variant="coral"
          reverse
        />
      </div>

      <div className="relative z-10 flex justify-center mt-12 sm:mt-14 lg:mt-16 px-5">

        <Link
          href="/partnerships"
          rel="noopener noreferrer"
          className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-5 sm:py-6 
                     bg-brand-coral hover:bg-brand-coral-hover 
                     text-brand-white text-sm font-semibold tracking-[0.22em] uppercase
                     rounded-full transition-colors duration-200"
        >
          View all partnerships
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </section>
  )
})