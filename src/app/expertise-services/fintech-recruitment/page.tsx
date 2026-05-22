import type { Metadata } from "next"
import Link from "next/link"
import { ScrollReveal } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import {
  HERO_DATA,
  BULGARIA_STRENGTHS_HEADER,
  BULGARIA_STRENGTHS,
  CTA_DATA,
  FULL_TALENT_HEADER,
  FULL_TALENT_SUBTITLE,
  ROLE_CATEGORIES,
} from "./data";
import { AppButton } from '@/components/ui/app-button';


export const metadata: Metadata = {
  title: "Fintech Recruitment Bulgaria | Hire Fintech Talent",
  description:
    "Specialized fintech recruitment in Bulgaria. Hire backend engineers, risk & compliance specialists, data analysts, and product roles for your fintech company.",
}

export default function FintechRecruitmentPage() {
  return (
    <>
      <section className="relative w-full min-h-[85vh] bg-brand-navy overflow-hidden flex items-end">



        <div className="absolute -bottom-40 -left-40 w-[520px] h-[520px] rounded-full bg-brand-coral/15 blur-[130px] pointer-events-none" />
        <div className="absolute top-10 right-0 w-[300px] h-[300px] rounded-full bg-brand-coral/6 blur-[100px] pointer-events-none" />
        <div
          aria-hidden
          className="absolute bottom-0 right-0 text-[22vw] font-bold uppercase leading-none tracking-tighter text-brand-white/[0.025] select-none pointer-events-none"
        >
          FINTECH
        </div>

        <div className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-4 pointer-events-none">
          <div className="h-16 w-px bg-brand-white/10" />
          <span
            className="text-[9px] font-bold tracking-[0.35em] uppercase text-brand-white/20 rotate-90 whitespace-nowrap"
            style={{ writingMode: "vertical-rl" }}
          >
            Expertise Services
          </span>
          <div className="h-16 w-px bg-brand-white/10" />
        </div>

        <div className="relative w-full">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-center px-5 pt-28 pb-32 lg:pb-16 sm:px-8 lg:px-12 xl:px-16">

            <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
              <span className="mb-5 inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-brand-coral sm:mb-6">
                {HERO_DATA.tagline}
              </span>


              <h1 className="mb-6 text-[clamp(2.8rem,14vw,7rem)] font-bold uppercase leading-[0.92] tracking-tight text-brand-white sm:mb-8">
                Fintech{" "}
                <span className="text-brand-coral">
                  Recruitment
                </span>{" "}
                & Hiring
              </h1>


              <p className="mx-auto max-w-md px-2 text-sm leading-relaxed text-brand-white/50 sm:max-w-xl sm:px-0 sm:text-base">
                {HERO_DATA.description}
              </p>

              {/* Stats row */}
              <div className="mt-10 grid w-full max-w-lg grid-cols-3 gap-4 sm:mt-12 sm:gap-8">
                {[
                  { num: "13+", label: "Years in market" },
                  { num: "400+", label: "Placements made" },
                  { num: "94%", label: "Retention rate" },
                ].map(({ num, label }) => (
                  <div key={label} className="text-center">
                    <div className="text-2xl font-bold leading-none text-brand-coral sm:text-3xl">
                      {num}
                    </div>

                    <div className="mt-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-brand-white/25 sm:text-[10px]">
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="mt-10 flex items-center justify-center gap-3 sm:mt-12 sm:gap-4">
                <div className="h-px w-10 bg-brand-white/10 sm:w-16" />

                <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-brand-white/20 sm:text-[9px]">
                  Scroll to explore
                </span>

                <div className="h-px w-10 bg-brand-white/10 sm:w-16" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ROLES ────────────────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative w-full bg-brand-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 xl:px-16 py-20 lg:py-32">

            {/* Header */}
            <div className="text-center mb-16">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-coral block mb-4">
                {FULL_TALENT_HEADER.tagline}
              </span>
              <h2 className="text-[clamp(2.4rem,5.5vw,3.5rem)] font-bold uppercase leading-none tracking-tight text-brand-navy mb-5">
                {FULL_TALENT_HEADER.title}
              </h2>
              <p className="text-sm text-brand-navy/45 max-w-sm mx-auto leading-relaxed">
                {FULL_TALENT_SUBTITLE}
              </p>
            </div>

            {/* Role cards — horizontal scroll on mobile, grid on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {ROLE_CATEGORIES.map((cat, i) => {
                const Icon = cat.icon
                const isLast =
                  i === ROLE_CATEGORIES.length - 1 &&
                  ROLE_CATEGORIES.length % 3 !== 0

                return (
                  <div
                    key={i}
                    className={`group relative rounded-2xl border border-brand-navy/8 bg-brand-white p-6 hover:border-brand-coral/40 hover:shadow-lg transition-all duration-300 overflow-hidden${isLast ? " sm:col-span-2 lg:col-span-1" : ""
                      }`}
                  >
                    {/* Card index watermark */}
                    <div
                      aria-hidden
                      className="absolute right-4 top-2 text-[4rem] font-bold leading-none text-brand-navy/[0.04] select-none"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    <div className="relative">
                      {/* Icon + label */}
                      <div className="flex items-center gap-3 mb-5">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${cat.iconBg} ${cat.color}`}
                        >
                          <Icon className="w-5 h-5" strokeWidth={1.6} />
                        </div>
                        <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-navy/50">
                          {cat.tagline}
                        </span>
                      </div>

                      {/* Role pills */}
                      <div className="flex flex-wrap gap-2">
                        {cat.roles.map((role, j) => (
                          <span
                            key={j}
                            className="text-[12px] text-brand-navy/60 bg-brand-navy/5 rounded-lg px-3 py-1.5 leading-snug font-medium"
                          >
                            {role.title}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto animate-fade-in-up delay-300 mt-12">
              <AppButton href={CTA_DATA.spectrumCTA.href} icon="arrow" className="sm:w-auto">
                {CTA_DATA.spectrumCTA.text}
              </AppButton>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── STRENGTHS ────────────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative w-full bg-brand-navy overflow-hidden">

          {/* Coral glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-coral/12 blur-[140px] pointer-events-none" />

          {/* Watermark */}
          <div
            aria-hidden
            className="absolute bottom-0 left-0 text-[14vw] font-bold uppercase leading-none tracking-tighter text-brand-white/[0.025] select-none pointer-events-none whitespace-nowrap"
          >
            BULGARIA
          </div>

          <div className="relative max-w-7xl mx-auto px-5 sm:px-10 xl:px-16 py-20 lg:py-32">

            {/* Header */}
            <div className="text-center mb-14">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-coral block mb-6">
                {BULGARIA_STRENGTHS_HEADER.tagline}
              </span>
              <h2 className="text-[clamp(2.4rem,5vw,3.5rem)] font-bold uppercase leading-none tracking-tight text-brand-white">
                {BULGARIA_STRENGTHS_HEADER.title}
              </h2>
              <div className="flex items-center justify-center gap-3 mt-8">
                <div className="h-px w-16 bg-brand-coral/40" />
                <div className="h-px w-6 bg-brand-coral/20" />
              </div>
            </div>

            {/* Items grid */}
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3">
              {BULGARIA_STRENGTHS.items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-xl border border-white/6 bg-brand-white/4 px-5 py-4 hover:border-brand-coral/30 hover:bg-brand-white/6 transition-all duration-300"
                  style={{ backdropFilter: "blur(6px)" }}
                >
                  <span className="text-[11px] font-bold text-brand-coral/70 mt-0.5 w-5 shrink-0 leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-brand-white/70 leading-relaxed font-medium">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto animate-fade-in-up delay-300 mt-12">
              <AppButton href={CTA_DATA.whyCTA.href} icon="arrow" className="sm:w-auto">
                {CTA_DATA.whyCTA.text}
              </AppButton>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative w-full bg-brand-white overflow-hidden">

          {/* Diagonal accent */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none opacity-50"
            style={{
              backgroundImage: `repeating-linear-gradient(
                -55deg,
                transparent,
                transparent 40px,
                rgba(10,20,60,0.02) 40px,
                rgba(10,20,60,0.02) 41px
              )`,
            }}
          />

          <div className="relative max-w-5xl mx-auto px-5 sm:px-10 xl:px-16 py-20 lg:py-32 text-center">

            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-coral block mb-5">
              Ready to Start?
            </span>
            <h2 className="text-[clamp(2.5rem,7vw,4rem)] font-bold uppercase leading-none tracking-tight text-brand-navy mb-6">
              {CTA_DATA.title.split(" ").slice(0, 3).join(" ")}
              <br />
              <span className="text-brand-coral">
                {CTA_DATA.title.split(" ").slice(3).join(" ")}
              </span>
            </h2>
            <p className="text-sm text-brand-navy/50 max-w-md mx-auto leading-relaxed mb-10">
              {CTA_DATA.description}
            </p>


            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto animate-fade-in-up delay-300">
              <AppButton href={CTA_DATA.primaryButton.href} icon="arrow" className="sm:w-auto">
                {CTA_DATA.primaryButton.text}
              </AppButton>

              <AppButton href={CTA_DATA.secondaryButton.href} variant="navy" className="w-[95%] sm:w-auto">
                {CTA_DATA.secondaryButton.text}
              </AppButton>
            </div>



            <div className="mt-16 pt-10 border-t border-brand-navy/8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 rounded-full bg-brand-coral" />
                <p className="text-xs text-brand-navy/45 leading-relaxed max-w-sm text-left">
                  <span className="font-bold text-brand-navy">No hire, no invoice.</span>{" "}
                  Our fee is only due on a successful placement.
                </p>
              </div>
              <Link
                href="/#expertise-services"
                className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-navy/30 hover:text-brand-coral transition-colors flex items-center gap-1"
              >
                All expertise services
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>

          </div>
        </section>
      </ScrollReveal>
    </>
  )
}
