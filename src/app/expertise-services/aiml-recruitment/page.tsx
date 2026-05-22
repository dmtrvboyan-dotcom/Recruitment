import type { Metadata } from "next"
import Link from "next/link"
import { ScrollReveal } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import {
  HERO_DATA,
  WHAT_YOU_GET_HEADER,
  WHAT_YOU_GET,
  WHY_BULGARIA_HEADER,
  WHY_BULGARIA,
  CTA_DATA,
} from "./data";
import { AppButton } from '@/components/ui/app-button';


export const metadata: Metadata = {
  title: "AI Recruitment | Hire Machine Learning Engineers & Data Scientists",
  description:
    "AI recruitment for machine learning engineers, data scientists, and MLOps specialists. Hire top AI talent for deep learning, NLP, and computer vision.",
}

export default function AiMlRecruitment() {
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
          className="absolute bottom-0 right-0 text-[22vw] font-bold uppercase leading-none tracking-tighter text-brand-white/[0.025] select-none pointer-events-none"
        >
          AI
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

            <h1 className="text-[clamp(2.7rem,10vw,6rem)] font-bold leading-[0.92] tracking-tight text-brand-white uppercase mb-8">
              Hire AI Engineers & Machine <span className="text-brand-coral">Learning Experts</span>
            </h1>

            <p className="text-sm sm:text-base text-brand-white/45 max-w-xl mx-auto leading-relaxed mb-3">
              {HERO_DATA.description}
            </p>
            {HERO_DATA.subDescription && (
              <p className="text-sm text-brand-white/30 max-w-lg mx-auto leading-relaxed">
                {HERO_DATA.subDescription}
              </p>
            )}

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto animate-fade-in-up delay-300 mt-12">
              <AppButton href={CTA_DATA.heroCTA.href} icon="arrow" className="sm:w-auto">
                {CTA_DATA.heroCTA.text}
              </AppButton>
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

      {/* ─── WHY BULGARIA ─────────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative w-full bg-brand-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 xl:px-16 py-20 lg:py-32">

            <div className="text-center mb-16">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-coral block mb-4">
                {WHY_BULGARIA_HEADER.tagline}
              </span>
              <h2 className="text-[clamp(2.4rem,5.5vw,3.5rem)] font-bold uppercase leading-none tracking-tight text-brand-navy">
                {WHY_BULGARIA_HEADER.title}
              </h2>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3">
              {[...WHY_BULGARIA.left, ...WHY_BULGARIA.right].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-xl border border-brand-navy/8 bg-brand-white p-5 hover:border-brand-coral/40 hover:shadow-md transition-all duration-300"
                >
                  <span className="text-[11px] font-bold text-brand-coral/70 mt-0.5 w-5 shrink-0 leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-brand-navy/70 leading-relaxed font-medium">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto animate-fade-in-up delay-300 mt-12">
              <AppButton href={CTA_DATA.permanentRecruitmentCTA.href} icon="arrow" className="sm:w-auto">
                {CTA_DATA.permanentRecruitmentCTA.text}
              </AppButton>
            </div>

          </div>
        </section>
      </ScrollReveal>

      {/* ─── WHAT YOU GET ─────────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative w-full bg-brand-navy overflow-hidden">

          {/* Glow */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-brand-coral/12 blur-[140px] pointer-events-none" />

          {/* Watermark */}
          <div
            aria-hidden
            className="absolute bottom-0 right-0 text-[14vw] font-bold uppercase leading-none tracking-tighter text-brand-white/[0.025] select-none pointer-events-none whitespace-nowrap"
          >
            WHAT YOU GET
          </div>

          <div className="relative max-w-7xl mx-auto px-5 sm:px-10 xl:px-16 py-20 lg:py-32">

            <div className="text-center mb-14">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-coral block mb-6">
                {WHAT_YOU_GET_HEADER.tagline}
              </span>
              <h2 className="text-[clamp(2.4rem,5vw,3.5rem)] font-bold uppercase leading-none tracking-tight text-brand-white">
                {WHAT_YOU_GET_HEADER.title}
              </h2>
              <div className="flex items-center justify-center gap-3 mt-8">
                <div className="h-px w-16 bg-brand-coral/40" />
                <div className="h-px w-6 bg-brand-coral/20" />
              </div>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {WHAT_YOU_GET.map((item, i) => {
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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto animate-fade-in-up delay-300 mt-12">
              <AppButton href={CTA_DATA.whatYouGet.href} icon="arrow" className="sm:w-auto">
                {CTA_DATA.whatYouGet.text}
              </AppButton>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative w-full bg-brand-white overflow-hidden">

          {/* Diagonal accent */}


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
