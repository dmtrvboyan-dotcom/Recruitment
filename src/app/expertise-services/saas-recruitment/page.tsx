import type { Metadata } from "next"
import Link from "next/link"
import { ScrollReveal } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import {
  HERO_DATA,
  WHAT_WE_COVER_HEADER,
  WHAT_WE_COVER,
  PERFECT_FOR_HEADER,
  PERFECT_FOR,
  FOOTER_BAR,
  CTA_DATA,
} from "./data";
import { AppButton } from '@/components/ui/app-button';


export const metadata: Metadata = {
  title: "Hire SaaS Talent | SaaS Engineers, DevOps & Product Hiring",
  description:
    "Hire top SaaS talent across cloud engineering, DevOps, product management, and B2B software. Scale your SaaS team with experienced professionals at competitive EU rates.",
}

export default function SaasRecruitmentPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative w-full min-h-[85vh] bg-brand-navy overflow-hidden flex items-end">

     

        {/* Glow blobs */}
        <div className="absolute -bottom-40 -left-40 w-[520px] h-[520px] rounded-full bg-brand-coral/15 blur-[130px] pointer-events-none" />
        <div className="absolute top-10 right-0 w-[300px] h-[300px] rounded-full bg-brand-coral/6 blur-[100px] pointer-events-none" />

        {/* Giant background word */}
        <div
          aria-hidden
          className="absolute bottom-0 right-0 text-[22vw] font-black uppercase leading-none tracking-tighter text-brand-white/[0.025] select-none pointer-events-none"
        >
          SAAS
        </div>

        {/* Vertical tag — desktop only */}
        <div className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-4 pointer-events-none">
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

            <h1 className="text-[clamp(2.7rem,10vw,6rem)] font-black leading-[0.92] tracking-tight text-brand-white uppercase mb-8">
              SaaS Specialists Acquisition & B2B <span className="text-brand-coral">Software Hiring</span>
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

      {/* ─── WHAT WE COVER ────────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative w-full bg-brand-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 xl:px-16 py-20 lg:py-32">

            <div className="text-center mb-16">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-coral block mb-4">
                {WHAT_WE_COVER_HEADER.tagline}
              </span>
              <h2 className="text-[clamp(2.4rem,5.5vw,3.5rem)] font-black uppercase leading-none tracking-tight text-brand-navy">
                {WHAT_WE_COVER_HEADER.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {WHAT_WE_COVER.map((item, i) => {
                const Icon = item.icon
                return (
                  <div
                    key={i}
                    className="group relative rounded-2xl border border-brand-navy/8 bg-brand-white p-6 hover:border-brand-coral/40 hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    {/* Card index watermark */}
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

            {/* Footer Bar */}
            <div className="mt-8 rounded-2xl border border-brand-navy/8 bg-brand-navy/3 px-7 py-5 flex flex-col md:flex-row items-center gap-5 md:justify-between">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 flex items-center justify-center rounded-xl bg-brand-coral/10 text-brand-coral flex-shrink-0`}>
                  <FOOTER_BAR.moreRoles.icon className="w-5 h-5" strokeWidth={1.6} />
                </div>
                <div>
                  <p className="font-bold text-brand-navy text-sm leading-tight tracking-wide uppercase">
                    {FOOTER_BAR.moreRoles.title}
                  </p>
                  <p className="text-brand-navy/45 text-[12px] leading-snug mt-0.5">
                    {FOOTER_BAR.moreRoles.description}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-5 md:gap-8">
                {FOOTER_BAR.badges.map((badge, i) => {
                  const BadgeIcon = badge.icon
                  return (
                    <div key={i} className="flex items-center gap-2 text-brand-navy/60">
                      <BadgeIcon className="w-4 h-4 text-brand-coral flex-shrink-0" strokeWidth={1.6} />
                      <span className="text-[12px] font-semibold tracking-wide uppercase whitespace-nowrap">
                        {badge.label}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>

          </div>
        </section>
      </ScrollReveal>

      {/* ─── PERFECT FOR ──────────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative w-full bg-brand-navy overflow-hidden">

          {/* Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-coral/12 blur-[140px] pointer-events-none" />

          {/* Watermark */}
          <div
            aria-hidden
            className="absolute bottom-0 left-0 text-[14vw] font-black uppercase leading-none tracking-tighter text-brand-white/[0.025] select-none pointer-events-none whitespace-nowrap"
          >
            PERFECT FIT
          </div>

          <div className="relative max-w-7xl mx-auto px-5 sm:px-10 xl:px-16 py-20 lg:py-32">

            <div className="text-center mb-14">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-coral block mb-6">
                {PERFECT_FOR_HEADER.tagline}
              </span>
              <h2 className="text-[clamp(2.4rem,5vw,3.5rem)] font-black uppercase leading-none tracking-tight text-brand-white">
                {PERFECT_FOR_HEADER.title}
              </h2>
              <div className="flex items-center justify-center gap-3 mt-8">
                <div className="h-px w-16 bg-brand-coral/40" />
                <div className="h-px w-6 bg-brand-coral/20" />
              </div>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
              {PERFECT_FOR.map((item, i) => {
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

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative w-full bg-brand-white overflow-hidden">

        
          <div className="relative max-w-5xl mx-auto px-5 sm:px-10 xl:px-16 py-20 lg:py-32 text-center">

            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-coral block mb-5">
              Ready to Start?
            </span>
            <h2 className="text-[clamp(2.5rem,7vw,4rem)] font-black uppercase leading-none tracking-tight text-brand-navy mb-6">
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
