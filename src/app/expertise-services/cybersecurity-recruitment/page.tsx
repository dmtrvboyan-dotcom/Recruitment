import type { Metadata } from "next"
import Link from "next/link"
import { ScrollReveal } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import {
  HERO_DATA,
  SERVICES_HEADER,
  SERVICES,
  CTA_DATA,
} from "./data";
import { AppButton } from '@/components/ui/app-button';


export const metadata: Metadata = {
  title: "Cybersecurity Recruitment | Hire Security Engineers & SOC Analysts",
  description:
    "Cybersecurity recruitment for security engineers, SOC analysts, and DevSecOps specialists. Hire top information security talent.",
}

export default function RecruitmentAgencyBulgariaPage() {
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
          className="absolute bottom-0 left-0 text-[18vw] font-bold uppercase leading-none tracking-tighter text-brand-white/2.5 select-none pointer-events-none"
        >
          CYBER
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

            <h1 className="text-[clamp(2.7rem,10vw,5rem)] font-bold leading-[0.92] tracking-tight text-brand-white uppercase mb-8">
              Hire Cybersecurity & Information Security <span className="text-brand-coral">specialists</span>
            </h1>

            <p className="text-sm sm:text-base text-brand-white/45 max-w-xl mx-auto leading-relaxed mb-3">
              {HERO_DATA.description}
            </p>

            {HERO_DATA.marketInsight && (
              <p className="text-sm text-brand-white/30 max-w-lg mx-auto leading-relaxed">
                {HERO_DATA.marketInsight}
              </p>
            )}

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

      {/* ─── SERVICES ─────────────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative w-full bg-brand-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 xl:px-16 py-20 lg:py-32">

            <div className="text-center mb-16">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-coral block mb-4">
                {SERVICES_HEADER.tagline}
              </span>
              <h2 className="text-[clamp(2.4rem,5.5vw,3.5rem)] font-bold uppercase leading-none tracking-tight text-brand-navy">
                {SERVICES_HEADER.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {SERVICES.map((item, i) => {
                const Icon = item.icon
                return (
                  <div
                    key={i}
                    className="group relative rounded-2xl border border-brand-navy/8 bg-brand-white p-6 hover:border-brand-coral/40 hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
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

                      <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-navy/50 mb-3">
                        {item.title}
                      </h3>

                      <p className="text-sm text-brand-navy/55 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto animate-fade-in-up delay-300 mt-12">
              <AppButton href={CTA_DATA.whatWeCoverCTA.href} icon="arrow" className="sm:w-auto">
                {CTA_DATA.whatWeCoverCTA.text}
              </AppButton>
              <AppButton href={CTA_DATA.whatWeCoverSecondCTA.href} variant="navy" icon="arrow" className="sm:w-auto">
                {CTA_DATA.whatWeCoverSecondCTA.text}
              </AppButton>
            </div>

          </div>
        </section>
      </ScrollReveal>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative w-full bg-brand-navy overflow-hidden">

          {/* Glow */}
          <div className="absolute -bottom-40 -left-40 w-130 h-130 rounded-full bg-brand-coral/15 blur-[130px] pointer-events-none" />

          {/* Watermark */}
          <div
            aria-hidden
            className="absolute bottom-0 right-0 text-[18vw] font-bold uppercase leading-none tracking-tighter text-brand-white/2.5 select-none pointer-events-none"
          >
            SECURE
          </div>



          <div className="relative max-w-5xl mx-auto px-5 sm:px-10 xl:px-16 py-20 lg:py-32 text-center">

            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-coral block mb-5">
              Ready to Start?
            </span>
            <h2 className="text-[clamp(2.5rem,7vw,4rem)] font-bold uppercase leading-none tracking-tight text-brand-white mb-6">
              {CTA_DATA.title.split(" ").slice(0, 3).join(" ")}
              <br />
              <span className="text-brand-coral">
                {CTA_DATA.title.split(" ").slice(3).join(" ")}
              </span>
            </h2>
            <p className="text-sm text-brand-white/50 max-w-md mx-auto leading-relaxed mb-10">
              {CTA_DATA.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto animate-fade-in-up delay-300">
              <AppButton href={CTA_DATA.primaryButton.href} icon="arrow" className="sm:w-auto">
                {CTA_DATA.primaryButton.text}
              </AppButton>
            </div>


            {/* Bottom row */}
            <div className="mt-16 pt-10 border-t border-brand-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 rounded-full bg-brand-coral" />
                <p className="text-xs text-brand-white/40 leading-relaxed max-w-sm text-left">
                  <span className="font-bold text-brand-white/70">No hire, no invoice.</span>{" "}
                  Our fee is only due on a successful placement.
                </p>
              </div>
              <Link
                href="/#expertise-services"
                className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-white/25 hover:text-brand-coral transition-colors flex items-center gap-1"
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
