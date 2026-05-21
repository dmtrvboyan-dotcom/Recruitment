import type { Metadata } from "next"
import Link from "next/link"
import { ScrollReveal } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import {
  HERO_DATA,
  ROLES_WE_HIRE_HEADER,
  ROLES_WE_HIRE,
  BULGARIA_DELIVERS_HEADER,
  BULGARIA_DELIVERS,
  HOW_WE_HELP_HEADER,
  HOW_WE_HELP,
  CTA_DATA,
} from "./data"
import { AppButton } from '@/components/ui/app-button';


export const metadata: Metadata = {
  title: "Ecommerce Recruitment | Hire Shopify, Magento & Ecommerce Talent",
  description:
    "Ecommerce recruitment for Shopify, Magento, and online retail teams. Hire ecommerce developers, marketers, and growth specialists.",
}

export default function EcommerceRecruitment() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative w-full min-h-[85vh] bg-brand-navy overflow-hidden flex items-end">


        {/* Glow blobs */}
        <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full bg-brand-coral/15 blur-[130px] pointer-events-none" />
        <div className="absolute top-10 left-0 w-[300px] h-[300px] rounded-full bg-brand-coral/6 blur-[100px] pointer-events-none" />

        {/* Giant background word */}
        <div
          aria-hidden
          className="absolute bottom-0 left-0 text-[20vw] font-black uppercase leading-none tracking-tighter text-brand-white/[0.025] select-none pointer-events-none"
        >
          ECOM
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

            <h1 className="text-[clamp(3.2rem,10vw,6rem)] font-black leading-[0.92] tracking-tight text-brand-white uppercase mb-8">
              Ecommerce Experts & Online <span className="text-brand-coral">Retail Hiring</span>
            </h1>

            <p className="text-sm sm:text-base text-brand-white/45 max-w-xl mx-auto leading-relaxed">
              {HERO_DATA.description}
            </p>

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

      {/* ─── ROLES WE HIRE ────────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative w-full bg-brand-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 xl:px-16 py-20 lg:py-32">

            <div className="text-center mb-16">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-coral block mb-4">
                {ROLES_WE_HIRE_HEADER.tagline}
              </span>
              <h2 className="text-[clamp(2.4rem,5.5vw,3.5rem)] font-black uppercase leading-none tracking-tight text-brand-navy">
                {ROLES_WE_HIRE_HEADER.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {ROLES_WE_HIRE.map((item, i) => {
                const Icon = item.icon
                return (
                  <div
                    key={i}
                    className="group relative rounded-2xl border border-brand-navy/8 bg-brand-white p-6 hover:border-brand-coral/40 hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    <div
                      aria-hidden
                      className="absolute right-4 top-2 text-[4rem] font-black leading-none text-brand-navy/[0.04] select-none"
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

            {/* CTAs: permanent hire + contract specialist — below roles grid */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto animate-fade-in-up delay-300 mt-12">
              <AppButton href={CTA_DATA.rolesWeCTA.href} icon="arrow" className="sm:w-auto">
                {CTA_DATA.rolesWeCTA.text}
              </AppButton>
              <AppButton href={CTA_DATA.rolesWeSecondCTA.href} variant="navy" icon="arrow" className="sm:w-auto">
                {CTA_DATA.rolesWeSecondCTA.text}
              </AppButton>
            </div>

          </div>
        </section>
      </ScrollReveal>

      {/* ─── BULGARIA DELIVERS ────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative w-full bg-brand-navy overflow-hidden">

          {/* Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-coral/12 blur-[140px] pointer-events-none" />

          {/* Watermark */}
          <div
            aria-hidden
            className="absolute bottom-0 left-0 text-[14vw] font-black uppercase leading-none tracking-tighter text-brand-white/[0.025] select-none pointer-events-none whitespace-nowrap"
          >
            BULGARIA
          </div>

          <div className="relative max-w-7xl mx-auto px-5 sm:px-10 xl:px-16 py-20 lg:py-32">

            <div className="text-center mb-14">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-coral block mb-6">
                {BULGARIA_DELIVERS_HEADER.tagline}
              </span>
              <h2 className="text-[clamp(2.4rem,5vw,3.5rem)] font-black uppercase leading-none tracking-tight text-brand-white">
                {BULGARIA_DELIVERS_HEADER.title}
              </h2>
              <div className="flex items-center justify-center gap-3 mt-8">
                <div className="h-px w-16 bg-brand-coral/40" />
                <div className="h-px w-6 bg-brand-coral/20" />
              </div>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
              {BULGARIA_DELIVERS.map((item, i) => {
                const Icon = item.icon
                return (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center rounded-xl border border-brand-white/6 bg-brand-white/4 px-6 py-8 hover:border-brand-coral/30 hover:bg-brand-white/6 transition-all duration-300"
                    style={{ backdropFilter: "blur(6px)" }}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${item.iconBg} ${item.color}`}>
                      <Icon className="w-6 h-6" strokeWidth={1.6} />
                    </div>
                    <h3 className="text-sm font-bold tracking-[0.1em] uppercase text-brand-white mb-3 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-brand-white/50 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                )
              })}
            </div>

           

          </div>
        </section>
      </ScrollReveal>

      {/* ─── HOW WE HELP ──────────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative w-full bg-brand-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 xl:px-16 py-20 lg:py-32">

            <div className="text-center mb-16">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-coral block mb-4">
                {HOW_WE_HELP_HEADER.tagline}
              </span>
              <h2 className="text-[clamp(2.4rem,5.5vw,3.5rem)] font-black uppercase leading-none tracking-tight text-brand-navy">
                {HOW_WE_HELP_HEADER.title}
              </h2>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
              {HOW_WE_HELP.map((item, i) => {
                const Icon = item.icon
                return (
                  <div
                    key={i}
                    className="group relative rounded-2xl border border-brand-navy/8 bg-brand-white p-6 hover:border-brand-coral/40 hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    {/* Step watermark */}
                    <div
                      aria-hidden
                      className="absolute right-4 top-2 text-[4rem] font-black leading-none text-brand-navy/[0.04] select-none"
                    >
                      {item.step}
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

            {/* CTA: full recruitment process — below the 3-step overview */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto animate-fade-in-up delay-300 mt-12">
              <AppButton href={CTA_DATA.howWeHelpCTA.href} icon="arrow" className="sm:w-auto">
                {CTA_DATA.howWeHelpCTA.text}
              </AppButton>
            </div>

          </div>
        </section>
      </ScrollReveal>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative w-full bg-brand-navy overflow-hidden">

          {/* Glow */}
          <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full bg-brand-coral/15 blur-[130px] pointer-events-none" />

          {/* Watermark */}
          <div
            aria-hidden
            className="absolute bottom-0 right-0 text-[18vw] font-black uppercase leading-none tracking-tighter text-brand-white/[0.025] select-none pointer-events-none"
          >
            GO
          </div>


          <div className="relative max-w-5xl mx-auto px-5 sm:px-10 xl:px-16 py-20 lg:py-32 text-center">

            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-coral block mb-5">
              Ready to Start?
            </span>
            <h2 className="text-[clamp(2.5rem,7vw,4rem)] font-black uppercase leading-none tracking-tight text-brand-white mb-6">
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

              <AppButton href={CTA_DATA.secondaryButton.href} variant="outline" className="sm:w-auto">
                {CTA_DATA.secondaryButton.text}
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
             
            </div>

          </div>
        </section>
      </ScrollReveal>
    </>
  )
}