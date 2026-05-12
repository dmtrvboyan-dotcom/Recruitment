"use client"

import { memo } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TECHNOLOGY_PILLS } from "@/lib/constants/specialized"
import { HERO_DATA } from "../data"

export const HeroSection = memo(function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] bg-brand-navy overflow-hidden flex flex-col">
      {/* Diagonal slash texture */}
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

      {/* Coral glow top */}
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 lg:left-auto lg:-left-32 lg:translate-x-0 w-[360px] h-[360px] lg:w-[520px] lg:h-[520px] rounded-full bg-brand-coral/18 blur-[100px] lg:blur-[120px] pointer-events-none"
      />

      {/* Teal glow bottom right */}
      <div
        aria-hidden
        className="hidden lg:block absolute bottom-0 -right-32 w-[420px] h-[420px] rounded-full bg-brand-teal/15 blur-[130px] pointer-events-none"
      />

      {/* Watermark */}
      <div
        aria-hidden
        className="hidden lg:block absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(10rem,20vw,17rem)] font-black uppercase leading-[0.85] tracking-tighter text-brand-white/[0.025] select-none pointer-events-none whitespace-nowrap"
      >
        SPECIALIZED
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-5 sm:px-8 lg:px-16 max-w-7xl mx-auto w-full pt-32 sm:pt-36 lg:pt-40 pb-12">
        <div className="w-full flex flex-col items-center text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 sm:gap-3.5 mb-5 sm:mb-7">
            <span className="block w-6 sm:w-9 h-px bg-brand-coral" />
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] sm:tracking-[0.32em] uppercase text-brand-coral">
              {HERO_DATA.tagline}
            </span>
            <span className="block w-6 sm:w-9 h-px bg-brand-coral" />
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(2.25rem,8vw,6.5rem)] font-black leading-[0.95] sm:leading-[0.92] tracking-tight uppercase text-brand-white mb-6 sm:mb-8 max-w-5xl">
            {HERO_DATA.title.split(".")[0]}
            <span className="text-brand-coral">.</span>
          </h1>

          {/* Subhead */}
          <div className="flex flex-col items-center max-w-2xl mb-8 sm:mb-10">
            <p className="text-sm sm:text-base lg:text-lg text-brand-white/60 leading-relaxed px-2 sm:px-0">
              {HERO_DATA.subtitle}
            </p>
            <div className="mt-5 sm:mt-6 h-[2px] w-12 sm:w-16 bg-brand-coral" />
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto mb-12 sm:mb-14">
            <Button
              asChild
              className="w-full sm:w-auto group bg-brand-coral hover:bg-brand-coral-hover text-brand-white px-7 sm:px-8 py-5 sm:py-6 text-[11px] font-semibold tracking-[0.22em] uppercase rounded-full cursor-pointer transition-colors duration-200"
            >
              <Link target="_blank" href={HERO_DATA.primaryCta.href}>
                <span className="flex items-center justify-center gap-2.5">
                  {HERO_DATA.primaryCta.text}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="w-full sm:w-auto bg-transparent border border-brand-white/25 hover:bg-brand-white/10 text-brand-white px-7 sm:px-8 py-5 sm:py-6 text-[11px] font-semibold tracking-[0.22em] uppercase rounded-full cursor-pointer transition-colors duration-200"
            >
              <Link href={HERO_DATA.secondaryCta.href}>
                {HERO_DATA.secondaryCta.text}
              </Link>
            </Button>
          </div>

          {/* Tech pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 sm:mb-14 max-w-3xl mx-auto">
            {TECHNOLOGY_PILLS.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center px-3 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-[0.18em] bg-brand-white/5 text-brand-white/60 border border-brand-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative z-10 px-5 sm:px-8 lg:px-16 max-w-7xl mx-auto w-full pb-10">
        <div className="grid grid-cols-3 bg-brand-white/[0.04] backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-brand-white/10 overflow-hidden">
          {HERO_DATA.stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-4 py-5 sm:px-6 sm:py-7 text-center ${
                i !== HERO_DATA.stats.length - 1
                  ? "border-r border-brand-white/8"
                  : ""
              }`}
            >
              <div className="flex items-baseline justify-center gap-1.5 mb-1.5">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-white tabular-nums tracking-tight leading-none">
                  {stat.value}
                </span>
                {stat.suffix && (
                  <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-coral leading-none">
                    {stat.suffix}
                  </span>
                )}
              </div>
              <p className="text-[9px] sm:text-[10px] tracking-[0.22em] uppercase text-brand-white/45 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})
