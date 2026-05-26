import type { Metadata } from "next"
import Link from "next/link"
import { ScrollReveal } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import {
  HERO_DATA,
  ROLES_HEADER,
  ROLES,
  DIFFERENTIATORS_HEADER,
  DIFFERENTIATORS,
  CTA_DATA,
  STATS_DATA,
} from "./data";
import { AppButton } from '@/components/ui/app-button';


export const metadata: Metadata = {
  title: "iGaming Recruitment Bulgaria | Hire Gaming Talent",
  description:
    "Specialized iGaming and gaming recruitment in Bulgaria. Hire developers, game designers, multilingual support, and product specialists for your gaming company.",
}

export default function IGamingRecruitmentPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative w-full min-h-[85vh] bg-brand-navy overflow-hidden flex items-end">


        {/* Glow blobs */}
        <div className="absolute -bottom-40 -right-40 w-130 h-130 rounded-full bg-brand-coral/15 blur-[130px] pointer-events-none" />
        <div className="absolute top-10 left-0 w-75 h-75 rounded-full bg-brand-coral/6 blur-[100px] pointer-events-none" />

        {/* Giant background word */}
        <div
          aria-hidden
          className="absolute bottom-0 left-0 text-[22vw] font-bold uppercase leading-none tracking-tighter text-brand-white/2.5 select-none pointer-events-none"
        >
          IGAMING
        </div>

        {/* Vertical tag — desktop only */}
        <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-4 pointer-events-none">
          <div className="h-16 w-px bg-brand-white/10" />
          <span
            className="text-[9px] font-bold tracking-[0.35em] uppercase text-brand-white/20 whitespace-nowrap"
            style={{ writingMode: "vertical-rl" }}
          >
            Expertise Services
          </span>
          <div className="h-16 w-px bg-brand-white/10" />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-10 xl:px-16 pt-36 pb-16 lg:pb-28 w-full">
          <div className="max-w-4xl mx-auto text-center">

            <span className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-brand-coral mb-6">
              {HERO_DATA.tagline}
            </span>

            <h1 className="text-[clamp(3.2rem,10vw,7rem)] font-bold leading-[0.92] tracking-tight text-brand-white uppercase mb-8">
              iGaming & Gambling <span className="text-brand-coral">Recruitment</span>
            </h1>

            <p className="text-sm sm:text-base text-brand-white/45 max-w-xl mx-auto leading-relaxed">
              {HERO_DATA.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto animate-fade-in-up delay-300 mt-12">
              <AppButton href={CTA_DATA.heroCTA.href} icon="arrow" className="sm:w-auto">
                {CTA_DATA.heroCTA.text}
              </AppButton>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 mt-14">
              {STATS_DATA.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-brand-coral leading-none">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-white/25 mt-1 max-w-30 mx-auto leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center gap-4 mt-12">
              <div className="h-px w-16 bg-brand-white/10" />
              <span className="text-[9px] font-bold tracking-[0.35em] uppercase text-brand-white/20">
                Scroll to explore
              </span>
              <div className="h-px w-16 bg-brand-white/10" />
            </div>

          </div>
        </div>
      </section>

      {/* ─── ROLES ────────────────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative w-full bg-brand-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 xl:px-16 py-20 lg:py-32">

            <div className="text-center mb-16">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-coral block mb-4">
                {ROLES_HEADER.tagline}
              </span>
              <h2 className="text-[clamp(2.4rem,5.5vw,3.5rem)] font-bold uppercase leading-none tracking-tight text-brand-navy">
                {ROLES_HEADER.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {ROLES.map((item, i) => {
                const Icon = item.icon
                return (
                  <div
                    key={i}
                    className="group relative rounded-2xl border border-brand-navy/8 bg-brand-white p-6 hover:border-brand-coral/40 hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    {/* Card index watermark */}
                    <div
                      aria-hidden
                      className="absolute right-4 top-2 text-[4rem] font-bold leading-none text-brand-navy/4 select-none"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    <div className="relative">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mb-5 ${item.iconBg} ${item.color}`}>
                        <Icon className="w-5 h-5" strokeWidth={1.6} />
                      </div>

                      <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-navy/50 mb-4">
                        {item.title}
                      </h3>

                      <ul className="flex flex-col gap-1.5">
                        {item.bullets.map((bullet, j) => (
                          <li
                            key={j}
                            className="text-[12px] text-brand-navy/60 bg-brand-navy/5 rounded-lg px-3 py-1.5 leading-snug font-medium"
                          >
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto animate-fade-in-up delay-300 mt-12">
              <AppButton href={CTA_DATA.itRecruitmentCTA.href} icon="arrow" className="sm:w-auto">
                {CTA_DATA.itRecruitmentCTA.text}
              </AppButton>
              <AppButton href={CTA_DATA.itSecondRecruitmentCTA.href} variant="navy" icon="arrow" className="sm:w-auto">
                {CTA_DATA.itSecondRecruitmentCTA.text}
              </AppButton>
            </div>

          </div>
        </section>
      </ScrollReveal>

      {/* ─── DIFFERENTIATORS ──────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative w-full bg-brand-navy overflow-hidden">

          {/* Glow */}
          <div className="absolute top-0 left-0 w-125 h-125 rounded-full bg-brand-coral/12 blur-[140px] pointer-events-none" />

          {/* Watermark */}
          <div
            aria-hidden
            className="absolute bottom-0 right-0 text-[14vw] font-bold uppercase leading-none tracking-tighter text-brand-white/2.5 select-none pointer-events-none whitespace-nowrap"
          >
            WHY US
          </div>

          <div className="relative max-w-7xl mx-auto px-5 sm:px-10 xl:px-16 py-20 lg:py-32">

            <div className="text-center mb-14">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-coral block mb-6">
                {DIFFERENTIATORS_HEADER.tagline}
              </span>
              <h2 className="text-[clamp(2.4rem,5vw,3.5rem)] font-bold uppercase leading-none tracking-tight text-brand-white">
                {DIFFERENTIATORS_HEADER.title}
              </h2>
              <div className="flex items-center justify-center gap-3 mt-8">
                <div className="h-px w-16 bg-brand-coral/40" />
                <div className="h-px w-6 bg-brand-coral/20" />
              </div>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
              {DIFFERENTIATORS.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center rounded-xl border border-white/6 bg-brand-white/4 px-6 py-8 hover:border-brand-coral/30 hover:bg-brand-white/6 transition-all duration-300"
                  style={{ backdropFilter: "blur(6px)" }}
                >
                  {/* Number badge */}
                  <div className="w-10 h-10 rounded-full border border-brand-coral/30 flex items-center justify-center mb-5 shrink-0">
                    <span className="text-[11px] font-bold text-brand-coral leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold tracking-widest uppercase text-brand-white mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-brand-white/50 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
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

              <AppButton href={CTA_DATA.secondaryButton.href} variant="navy" className="sm:w-auto">
                {CTA_DATA.secondaryButton.text}
              </AppButton>
            </div>

         
            {/* Bottom row */}
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
