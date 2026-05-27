import type { Metadata } from "next"
import Link from "next/link"
import { ScrollReveal } from "@/components/layout"
import { AppButton } from "@/components/ui/app-button"
import { ArrowUpRight, ArrowRight } from "lucide-react"

import {
  HERO,
  STATS,
  TRUST_ITEMS,
  SERVICE_CARDS,
  PROCESS_STEPS,
  WHY_ITEMS,
  BENEFITS,
  FAQ_ITEMS,
  MID_CTA,
  CTA,
  CROSS_SELLS,
} from "./data";
import { BackToTop } from "@/components/navigation/back-to-top"


export const metadata: Metadata = {
  title: "Employer of Record (EoR) Services | Hire Globally Without a Local Entity",
  description:
    "Hire employees in Bulgaria and Eastern Europe without setting up a local entity. Full employment compliance, payroll, and benefits — handled end to end.",
}



// ─── Atoms ────────────────────────────────────────────────────────────────────

function Eyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={`inline-block text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] text-brand-coral ${className}`}
    >
      {children}
    </span>
  )
}

function SectionIndicator({
  index,
  label,
  tone = "light",
  centered = false,
}: {
  index: number
  label: string
  tone?: "light" | "dark"
  centered?: boolean
}) {
  const muted = tone === "dark" ? "text-white/30" : "text-brand-navy/30"
  const line = tone === "dark" ? "bg-white/15" : "bg-brand-navy/15"

  if (centered) {
    return (
      <div className="flex items-center justify-center gap-3 sm:gap-4">
        <span className={`block h-px w-8 sm:w-16 ${line}`} />
        <span className={`text-[10px] font-mono ${muted}`}>
          {String(index).padStart(2, "0")}
        </span>
        <span className="block h-px w-8 bg-brand-coral" />
        <Eyebrow>{label}</Eyebrow>
        <span className="block h-px w-8 bg-brand-coral" />
        <span className={`block h-px w-8 sm:w-16 ${line}`} />
      </div>
    )
  }

  return (
    <div className="flex items-center gap-3 sm:gap-4">
      <span className={`text-[10px] font-mono ${muted}`}>
        {String(index).padStart(2, "0")}
      </span>
      <span className="block h-px w-8 bg-brand-coral" />
      <Eyebrow>{label}</Eyebrow>
      <span className={`block h-px flex-1 ${line}`} />
    </div>
  )
}

function FaqRow({
  question,
  answer,
  index,
}: {
  question: string
  answer: string
  index: number
}) {
  return (
    <details className="group border-t border-brand-navy/10 last:border-b last:border-brand-navy/10">
      <summary className="flex items-center justify-between gap-6 py-5 lg:py-6 cursor-pointer list-none select-none">
        <div className="flex items-start gap-4">
          <span className="text-[11px] font-mono text-brand-navy/25 pt-0.5 shrink-0 hidden sm:block">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-[15px] lg:text-[16px] font-semibold text-brand-navy leading-snug">
            {question}
          </span>
        </div>
        <span className="shrink-0 w-7 h-7 rounded-full border border-brand-navy/15 flex items-center justify-center">
          <span className="text-brand-navy/40 group-open:hidden text-lg leading-none">+</span>
          <span className="text-brand-coral hidden group-open:block text-lg leading-none">−</span>
        </span>
      </summary>
      <div className="pb-5 lg:pb-6 sm:pl-9">
        <p className="text-sm lg:text-[14px] text-brand-navy/50 leading-relaxed max-w-2xl">
          {answer}
        </p>
      </div>
    </details>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function EmployerOfRecordPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative w-full bg-brand-navy overflow-hidden flex flex-col mt-20 sm:mt-5">
        {/* Coral glows */}
        <div className="absolute -top-40 -right-40 w-150 h-150 rounded-full bg-brand-coral/15 blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-60 -left-40 w-125 h-125 rounded-full bg-brand-coral/10 blur-[130px] pointer-events-none" />

        {/* Plus marks (decorative) */}
        <div aria-hidden className="absolute top-32 right-24 text-brand-white/8 text-3xl font-thin pointer-events-none hidden lg:block">+</div>
        <div aria-hidden className="absolute top-72 right-72 text-brand-white/6 text-xl font-thin pointer-events-none hidden lg:block">+</div>
        <div aria-hidden className="absolute bottom-44 right-44 text-brand-white/6 text-2xl font-thin pointer-events-none hidden lg:block">+</div>

        {/* Vertical text rail */}
        <div className="hidden lg:flex absolute left-7 top-1/2 -translate-y-1/2 flex-col items-center gap-6 pointer-events-none z-10">
          <div className="h-16 w-px bg-white/15" />
          <span
            className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/40 whitespace-nowrap"
            style={{ writingMode: "vertical-rl" }}
          >
            {HERO.eyebrow}
          </span>
          <div className="h-16 w-px bg-white/15" />
        </div>

        {/* Main — centered */}
        <div className="relative flex-1 w-full pt-32 lg:pt-44 pb-12 lg:pb-20">
          <div className="w-full max-w-5xl mx-auto px-5 sm:px-10 lg:px-20 text-center">
            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-3 mb-6 lg:mb-8">
              <span className="block h-px w-12 bg-brand-coral" />
              <Eyebrow>{HERO.tagline}</Eyebrow>
              <span className="block h-px w-12 bg-brand-coral" />
            </div>

            {/* Title */}
            <h1 className="text-[clamp(2.8rem,8vw,6.5rem)] font-bold uppercase leading-[0.88] tracking-[-0.02em] text-white text-balance mb-8 lg:mb-12">
              {HERO.title}
            </h1>

            {/* Description */}
            <p className="text-base lg:text-lg text-brand-white/65 leading-relaxed text-pretty max-w-2xl mx-auto mb-8 lg:mb-10">
              {HERO.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
              <AppButton href={CTA.primaryButton.href} icon="arrow" className="sm:w-auto">
                {CTA.primaryButton.text}
              </AppButton>
              <AppButton href={CTA.secondaryButton.href} variant="outline" className="sm:w-auto">
                {CTA.secondaryButton.text}
              </AppButton>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="relative w-full">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {STATS.map((stat, i) => (
                <div
                  key={i}
                  className={`py-8 lg:py-12 px-4 sm:px-6 group ${i >= 2 ? "border-t lg:border-t-0 border-white/10" : ""}`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-mono text-brand-coral/80">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="h-px w-6 bg-white/20" />
                  </div>
                  <p className="text-3xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight leading-none mb-3 group-hover:text-brand-coral transition-colors duration-300">
                    {stat.value}
                  </p>
                  <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-white/45 leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── Trust marquee ──────────────────────────────────────────────────── */}
      <div className="relative bg-brand-coral overflow-hidden py-3.5 select-none">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...TRUST_ITEMS, ...TRUST_ITEMS, ...TRUST_ITEMS].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 sm:gap-4 px-5 sm:px-8 text-[11px] sm:text-[13px] font-semibold text-brand-white uppercase tracking-[0.15em]"
            >
              <span className="text-white/50">✦</span>
              {item.text}
            </span>
          ))}
        </div>
      </div>

      {/* ── SERVICES: 2-column grid ────────────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative w-full bg-brand-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20 py-20 lg:py-32">
            {/* Header */}
            <div className="mb-12 lg:mb-16 text-center">
              <SectionIndicator index={1} label="What we do" centered />
              <h2 className="mt-8 text-[clamp(2.5rem,6vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-tight text-brand-navy">
                One partner.{" "}
                <span className="text-brand-coral">Every market.</span>
              </h2>
              <div className="flex items-center justify-center gap-3 mt-4">
                <div className="h-px w-10 bg-brand-coral" />
                <span className="text-[11px] font-mono text-brand-navy/40">
                  {String(SERVICE_CARDS.length).padStart(2, "0")} / {String(SERVICE_CARDS.length).padStart(2, "0")}
                </span>
                <div className="h-px w-10 bg-brand-coral" />
              </div>
            </div>

            {/* 2-column grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-t border-brand-navy/10 border-l">
              {SERVICE_CARDS.map((card, i) => {
                const Icon = card.icon
                return (
                  <div
                    key={i}
                    className="group relative flex gap-3 sm:gap-5 p-6 lg:p-8 items-start border-b border-r border-brand-navy/10 hover:bg-brand-navy/2.5] transition-all duration-500 ease-out overflow-hidden"
                  >
                    {/* Massive index */}
                    <div className="pt-1 shrink-0">
                      <span className="block text-[clamp(2rem,5vw,3.5rem)] font-bold text-brand-navy/12 leading-none tracking-tighter group-hover:text-brand-coral transition-colors duration-500">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start gap-3 mb-3">
                        <div
                          className={`w-10 h-10 shrink-0 flex items-center justify-center rounded-xl ${card.iconBg} group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                        >
                          <Icon
                            className="w-5 h-5 text-brand-coral"
                            strokeWidth={1.7}
                          />
                        </div>
                        <h3 className="flex-1 text-base sm:text-lg font-bold text-brand-navy leading-tight pt-1 group-hover:text-brand-coral transition-colors duration-200">
                          {card.title}
                        </h3>

                      </div>

                      <p className="text-sm text-brand-navy/55 leading-relaxed mb-4">
                        {card.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {card.tags.map((tag, j) => (
                          <span
                            key={j}
                            className="text-[11px] font-semibold px-3 py-1 rounded-full bg-brand-navy/5 text-brand-navy/65 group-hover:bg-brand-coral/10 group-hover:text-brand-coral transition-colors duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                    </div>

                    {/* Animated coral underline */}
                    <span
                      aria-hidden
                      className="absolute left-0 right-0 bottom-0 h-px w-0 bg-brand-coral group-hover:w-full transition-all duration-700 ease-out"
                    />
                  </div>
                )
              })}
            </div>

            {/* ✅ FIX: Kept payroll cross-sell here — it's well-placed after services */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto animate-fade-in-up delay-300 mt-12">
              <AppButton href="/services/it-payroll-compliance-advisory" icon="arrow" className="sm:w-auto">
                Need payroll &amp; compliance managed?
              </AppButton>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── PROCESS: 6-step timeline ──────────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative w-full bg-brand-navy overflow-hidden py-20 lg:py-32">
          {/* Glow */}
          <div className="absolute top-1/2 left-1/3 w-150 h-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-coral/12 blur-[140px] pointer-events-none" />

          {/* Watermark */}
          <div
            aria-hidden
            className="absolute -top-6 right-0 text-[18vw] font-bold uppercase leading-none tracking-tighter text-brand-white/2.5 select-none pointer-events-none"
          >
            PROCESS
          </div>

          {/* Header */}
          <div className="relative w-full max-w-400 mx-auto px-5 sm:px-10 lg:px-20 mb-12 lg:mb-20">
            <div className="mb-8 lg:mb-10">
              <SectionIndicator index={2} label="How it works" tone="dark" centered />
            </div>
            <div className="text-center">
              <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-tight text-white mb-4">
                Our EoR{" "}
                <span className="text-brand-coral">process</span>
              </h2>
              <p className="text-white/45 text-sm lg:text-base leading-relaxed max-w-xl mx-auto">
                From talent selection to fully employed — no entity required.
              </p>
            </div>
          </div>

          <div className="relative w-full max-w-400 mx-auto px-5 sm:px-10 lg:px-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
              {PROCESS_STEPS.map((step, i) => {
                const Icon = step.icon
                return (
                  <div key={i} className="relative">
                    <div className="group relative rounded-2xl border border-white/10 bg-brand-white/4 backdrop-blur-sm p-6 lg:p-7 hover:bg-brand-whit/8 hover:border-brand-coral/40 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col overflow-hidden">
                      {/* Watermark step number */}
                      <span
                        aria-hidden
                        className="absolute -top-4 -right-2 text-[6rem] lg:text-[7rem] font-bold text-brand-white/4 leading-none pointer-events-none select-none"
                      >
                        {step.number}
                      </span>

                      <div className="relative">
                        <div className="flex items-center gap-3 mb-5">
                          <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-brand-coral/15 group-hover:bg-brand-coral/25 transition-colors duration-300 shrink-0">
                            <Icon
                              className="w-5 h-5 text-brand-coral"
                              strokeWidth={1.7}
                            />
                          </div>
                          <div className="flex-1 h-px bg-white/10 group-hover:bg-brand-coral/40 transition-colors duration-300" />
                        </div>

                        <p className="text-[10px] font-bold text-brand-coral/80 uppercase tracking-[0.3em] mb-2">
                          STEP {step.number}
                        </p>

                        <h3 className="text-base lg:text-lg font-bold text-white mb-3 leading-tight tracking-tight">
                          {step.title}
                        </h3>

                        <p className="text-[13px] text-white/45 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── WHY EoR: Asymmetric bento ─────────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative w-full bg-brand-white py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20">
            <div className="mb-12 lg:mb-16 text-center">
              <SectionIndicator index={3} label="Why EoR" centered />
              <h2 className="mt-8 text-[clamp(2.5rem,6vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-tight text-brand-navy">
                Why companies choose{" "}
                <span className="text-brand-coral">Employer of Record</span>
              </h2>
            </div>

            {/* Bento: hero card + 4 benefit cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 lg:gap-4">
              {/* Hero card */}
              <div className="sm:col-span-2 lg:col-span-3 lg:row-span-2 rounded-3xl bg-brand-navy text-white p-8 lg:p-10 relative overflow-hidden flex flex-col justify-between min-h-80 lg:min-h-110">
                <div className="absolute -top-24 -right-24 w-[320px] h-80 rounded-full bg-brand-coral/20 blur-[100px] pointer-events-none" />

                <div className="relative">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-coral mb-4">
                    The smart global hiring solution
                  </p>
                  <h3 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold uppercase leading-[0.92] tracking-tight mb-6">
                    EoR is the smarter way
                    <br />
                    to build teams
                    <br />
                    <span className="text-brand-coral">across borders</span>
                  </h3>
                  <p className="text-sm lg:text-base text-white/60 leading-relaxed max-w-sm">
                    EoR is the smart solution for companies that want to expand
                    globally, test new markets, or hire specialised talent without
                    the complexity of establishing a local entity.
                  </p>
                </div>

                {/* Why checklist */}
                <div className="relative mt-8 grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                  {WHY_ITEMS.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-brand-coral/20 flex items-center justify-center shrink-0">
                        <svg className="w-2.5 h-2.5 text-brand-coral" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="text-[12px] text-white/65 leading-none">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefit cards */}
              {BENEFITS.map((benefit, i) => {
                const Icon = benefit.icon
                return (
                  <div
                    key={i}
                    className="lg:col-span-3 rounded-3xl bg-brand-navy/2.5 border border-brand-navy/10 p-7 lg:p-8 hover:bg-brand-navy/4.5 hover:border-brand-coral/30 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden min-h-50 lg:min-h-52.5"
                  >
                    <span
                      aria-hidden
                      className="absolute top-5 right-6 text-[3rem] font-bold text-brand-navy/6 leading-none pointer-events-none select-none"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="relative h-full flex flex-col">
                      <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-brand-coral/12 mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <Icon
                          className="w-5 h-5 text-brand-coral"
                          strokeWidth={1.7}
                        />
                      </div>
                      <h3 className="text-lg font-bold text-brand-navy mb-2.5 group-hover:text-brand-coral transition-colors duration-200">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-brand-navy/55 leading-relaxed">
                        {benefit.body}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </ScrollReveal>

  
      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative w-full bg-brand-white py-20 lg:py-28 border-t border-brand-navy/8">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20">
            <div className="mb-12 lg:mb-16 text-center">
              <SectionIndicator index={4} label="Your questions answered" centered />
              <h2 className="mt-8 text-[clamp(2rem,5vw,3.5rem)] font-bold uppercase leading-[0.9] tracking-tight text-brand-navy">
                Employer of Record (EoR)
                <br />
                <span className="text-brand-coral">your questions answered</span>
              </h2>
            </div>

            {/* Two-column FAQ grid on lg */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16">
              <div>
                {FAQ_ITEMS.slice(0, 5).map((item, i) => (
                  <FaqRow key={i} question={item.question} answer={item.answer} index={i} />
                ))}
              </div>
              <div>
                {FAQ_ITEMS.slice(5).map((item, i) => (
                  <FaqRow key={i + 5} question={item.question} answer={item.answer} index={i + 5} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="relative w-full px-3 sm:px-5 lg:px-10 pb-12 lg:pb-20">
          <div className="relative bg-brand-navy rounded-3xl lg:rounded-[2.5rem] overflow-hidden">
            {/* Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-brand-coral/20 blur-[150px] pointer-events-none" />
            <div className="absolute -top-20 -left-20 w-75 h-75 rounded-full bg-brand-coral/15 blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-75 h-75 rounded-full bg-brand-coral/10 blur-[100px] pointer-events-none" />

            {/* Corner brackets */}
            <div aria-hidden className="absolute top-5 left-5 w-8 h-8 border-l-2 border-t-2 border-brand-coral/40 rounded-tl-xl pointer-events-none" />
            <div aria-hidden className="absolute top-5 right-5 w-8 h-8 border-r-2 border-t-2 border-brand-coral/40 rounded-tr-xl pointer-events-none" />
            <div aria-hidden className="absolute bottom-5 left-5 w-8 h-8 border-l-2 border-b-2 border-brand-coral/40 rounded-bl-xl pointer-events-none" />
            <div aria-hidden className="absolute bottom-5 right-5 w-8 h-8 border-r-2 border-b-2 border-brand-coral/40 rounded-br-xl pointer-events-none" />

            {/* Watermark */}
            <p
              aria-hidden
              className="hidden lg:block absolute inset-x-0 -bottom-8 text-center text-[20rem] xl:text-[24rem] font-bold uppercase tracking-tighter text-brand-white/3 leading-[0.8] pointer-events-none select-none whitespace-nowrap"
            >
              EoR
            </p>

            <div className="relative max-w-4xl mx-auto px-6 sm:px-10 py-20 lg:py-32 text-center">
              <div className="flex items-center justify-center gap-3 mb-6 lg:mb-8">
                <span className="block h-px w-10 bg-brand-coral" />
                <Eyebrow>{CTA.eyebrow}</Eyebrow>
                <span className="block h-px w-10 bg-brand-coral" />
              </div>

              <h2 className="text-[clamp(2.5rem,7vw,5.5rem)] font-bold uppercase leading-[0.92] tracking-tight text-white mb-6 lg:mb-8 text-balance">
                {CTA.title}
              </h2>

              <p className="text-base lg:text-lg text-white/60 leading-relaxed max-w-xl mx-auto mb-10 lg:mb-12">
                {CTA.description}
              </p>

              {/* Service pills */}
              <div className="flex flex-wrap justify-center gap-2 mb-8 lg:mb-10">
                {[
                  "Global Hiring",
                  "Cross-Border Employment",
                  "Local Compliance",
                  "Payroll & Benefits",
                  "Contractor Conversion",
                ].map((label) => (
                  <span
                    key={label}
                    className="text-[11px] font-semibold px-3 py-1.5 rounded-full border border-white/15 text-white/40"
                  >
                    {label}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <AppButton href={CTA.primaryButton.href} icon="arrow" className="sm:w-auto">
                  {CTA.primaryButton.text}
                </AppButton>
                <AppButton href={CTA.secondaryButton.href} variant="outline" className="sm:w-auto">
                  {CTA.secondaryButton.text}
                </AppButton>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
      <BackToTop hideOnMobile />

    </>
  )
}