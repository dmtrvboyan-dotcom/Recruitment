import type { Metadata } from "next"
import Link from "next/link"
import { ScrollReveal } from "@/components/layout"
import { ArrowUpRight } from "lucide-react"
import { AppButton } from "@/components/ui/app-button"

import {
  HERO_DATA,
  STATS,
  PROCESS_STEPS,
  SERVICE_CARDS,
  BENEFITS,
  TRUST_ITEMS,
  CTA_DATA,
} from "./data"

export const metadata: Metadata = {
  title: "Permanent IT Recruitment Services | Tech Talent Acquisition",
  description:
    "Strategic permanent IT recruitment. We help companies hire high-performing tech professionals who align technically and culturally for long-term success.",
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

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ExecutiveSearchPage() {
  // Last card gets full-width treatment if total is odd
  const mainCards = SERVICE_CARDS.slice(0, -1)
  const featuredCard = SERVICE_CARDS[SERVICE_CARDS.length - 1]
  const isOdd = SERVICE_CARDS.length % 2 !== 0

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative w-full bg-brand-navy overflow-hidden flex flex-col mt-20 sm:mt-5">
        {/* Coral glows */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-brand-coral/15 blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-60 -left-40 w-[500px] h-[500px] rounded-full bg-brand-coral/10 blur-[130px] pointer-events-none" />

        {/* Plus marks */}
        <div aria-hidden className="absolute top-32 right-24 text-white/[0.08] text-3xl font-thin pointer-events-none hidden lg:block">+</div>
        <div aria-hidden className="absolute top-72 right-72 text-white/[0.06] text-xl font-thin pointer-events-none hidden lg:block">+</div>
        <div aria-hidden className="absolute bottom-44 right-44 text-white/[0.06] text-2xl font-thin pointer-events-none hidden lg:block">+</div>

        {/* Vertical text rail */}
        <div className="hidden lg:flex absolute left-7 top-1/2 -translate-y-1/2 flex-col items-center gap-6 pointer-events-none z-10">
          <div className="h-16 w-px bg-white/15" />
          <span
            className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/40 whitespace-nowrap"
            style={{ writingMode: "vertical-rl" }}
          >
            {HERO_DATA.eyebrow}
          </span>
          <div className="h-16 w-px bg-white/15" />
        </div>

        {/* Main — centered */}
        <div className="relative flex-1 w-full pt-32 lg:pt-44 pb-12 lg:pb-20">
          <div className="w-full max-w-5xl mx-auto px-5 sm:px-10 lg:px-20 text-center">
            <div className="flex items-center justify-center gap-3 mb-6 lg:mb-8">
              <span className="block h-px w-12 bg-brand-coral" />
              <Eyebrow>{HERO_DATA.tagline}</Eyebrow>
              <span className="block h-px w-12 bg-brand-coral" />
            </div>

            <h1 className="text-[clamp(3rem,9vw,7rem)] font-black uppercase leading-[0.88] tracking-[-0.02em] text-white text-balance mb-8 lg:mb-12">
              {HERO_DATA.title}
            </h1>

            <p className="text-base lg:text-lg text-white/65 leading-relaxed text-pretty max-w-2xl mx-auto mb-8 lg:mb-10">
              {HERO_DATA.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto animate-fade-in-up delay-300">
              <AppButton href={CTA_DATA.primaryButton.href} icon="arrow" className="sm:w-auto">
                {CTA_DATA.primaryButton.text}
              </AppButton>
              <AppButton href={CTA_DATA.secondaryButton.href} variant="outline" className="sm:w-auto">
                {CTA_DATA.secondaryButton.text}
              </AppButton>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="relative w-full border-t border-white/10">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
              {STATS.map((stat, i) => (
                <div
                  key={i}
                  className={`py-8 lg:py-12 px-4 sm:px-6 group ${i >= 2 ? "border-t lg:border-t-0 border-white/10" : ""
                    }`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-mono text-brand-coral/80">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="h-px w-6 bg-white/20" />
                  </div>
                  <p className="text-3xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-none mb-3 group-hover:text-brand-coral transition-colors duration-300">
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

      {/* ── Trust marquee ─────────────────────────────────────────────────── */}
      <div className="relative bg-brand-coral overflow-hidden py-3.5 select-none">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...TRUST_ITEMS, ...TRUST_ITEMS, ...TRUST_ITEMS].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 sm:gap-4 px-5 sm:px-8 text-[11px] sm:text-[13px] font-semibold text-white uppercase tracking-[0.15em]"
            >
              <span className="text-white/50">✦</span>
              {item.text}
            </span>
          ))}
        </div>
      </div>

      {/* ── SERVICES: 2-column role grid ──────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative w-full bg-brand-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20 py-20 lg:py-32">
            <div className="mb-12 lg:mb-16 text-center">
              <SectionIndicator index={1} label="Specialisms" centered />
              <h2 className="mt-8 text-[clamp(2.5rem,6vw,4.5rem)] font-black uppercase leading-[0.9] tracking-tight text-brand-navy">
                Roles{" "}
                <span className="text-brand-coral">we hire</span>
              </h2>
              <div className="flex items-center justify-center gap-3 mt-4">
                <div className="h-px w-10 bg-brand-coral" />
                <span className="text-[11px] font-mono text-brand-navy/40">
                  {String(SERVICE_CARDS.length).padStart(2, "0")} / {String(SERVICE_CARDS.length).padStart(2, "0")}
                </span>
                <div className="h-px w-10 bg-brand-coral" />
              </div>
            </div>

            {/* 2-column grid — first 8 cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-t border-brand-navy/10 border-l border-brand-navy/10">
              {mainCards.map((card, i) => {
                const Icon = card.icon
                return (
                  <Link
                    key={i}
                    href={card.href}
                    className="group relative flex gap-3 sm:gap-5 p-6 lg:p-8 items-start border-b border-r border-brand-navy/10 hover:bg-brand-navy/[0.025] transition-all duration-500 ease-out overflow-hidden"
                  >
                    <div className="pt-1 shrink-0">
                      <span className="block text-[clamp(2rem,5vw,3.5rem)] font-black text-brand-navy/[0.12] leading-none tracking-tighter group-hover:text-brand-coral transition-colors duration-500">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start gap-3 mb-3">
                        <div
                          className={`w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl ${card.iconBg} group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                        >
                          <Icon className="w-5 h-5" style={{ color: card.accent }} strokeWidth={1.7} />
                        </div>
                        <h3 className="flex-1 text-base sm:text-lg font-bold text-brand-navy leading-tight pt-1 group-hover:text-brand-coral transition-colors duration-200">
                          {card.title}
                        </h3>
                        <ArrowUpRight className="w-4 h-4 text-brand-navy/25 group-hover:text-brand-coral group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0 mt-2" />
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

                    <span
                      aria-hidden
                      className="absolute left-0 right-0 bottom-0 h-px w-0 bg-brand-coral group-hover:w-full transition-all duration-700 ease-out"
                    />
                  </Link>
                )
              })}

              {/* ── Card 09: VP Engineering & Executive Search — full-width featured ── */}
              {isOdd && (() => {
                const Icon = featuredCard.icon
                const i = SERVICE_CARDS.length - 1
                return (
                  <Link
                    href={featuredCard.href}
                    className="group relative sm:col-span-2 flex flex-col sm:flex-row gap-0 border-b border-r border-brand-navy/10 overflow-hidden bg-brand-navy hover:bg-brand-navy/90 transition-all duration-500 ease-out"
                  >
                    {/* Left: index + icon block */}
                    <div className="relative flex flex-col justify-between p-6 lg:p-8 sm:w-56 lg:w-64 shrink-0 border-b sm:border-b-0 sm:border-r border-white/10">
                      {/* Coral glow */}
                      <div className="absolute -top-20 -left-20 w-48 h-48 rounded-full bg-brand-coral/20 blur-[80px] pointer-events-none" />

                      <div className="relative">
                        <span className="block text-[clamp(3rem,6vw,5rem)] font-black text-white/[0.10] leading-none tracking-tighter mb-6">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div
                          className={`w-12 h-12 flex items-center justify-center rounded-xl ${featuredCard.iconBg} group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                        >
                          <Icon className="w-6 h-6" style={{ color: featuredCard.accent }} strokeWidth={1.7} />
                        </div>
                      </div>

                      {/* "Executive Search" badge */}
                      <div className="relative mt-6">
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.25em] text-brand-coral">
                          <span>✦</span> Executive Search
                        </span>
                      </div>
                    </div>

                    {/* Right: content */}
                    <div className="relative flex-1 flex flex-col justify-between p-6 lg:p-8">
                      <div>
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight group-hover:text-brand-coral transition-colors duration-200">
                            {featuredCard.title}
                          </h3>
                          <ArrowUpRight className="w-5 h-5 text-white/25 group-hover:text-brand-coral group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0 mt-1" />
                        </div>

                        <p className="text-sm lg:text-base text-white/55 leading-relaxed mb-6 max-w-2xl">
                          {featuredCard.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {featuredCard.tags.map((tag, j) => (
                          <span
                            key={j}
                            className="text-[11px] font-semibold px-3 py-1 rounded-full bg-white/[0.07] text-white/60 group-hover:bg-brand-coral/20 group-hover:text-brand-coral transition-colors duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>



                    {/* Coral bottom line */}
                    <span
                      aria-hidden
                      className="absolute left-0 right-0 bottom-0 h-[2px] w-0 bg-brand-coral group-hover:w-full transition-all duration-700 ease-out"
                    />
                  </Link>
                )
              })()}
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto animate-fade-in-up delay-300 mt-12">
              <AppButton href={CTA_DATA.specialismsBtn.href} icon="arrow" className="sm:w-auto">
                {CTA_DATA.specialismsBtn.text}
              </AppButton>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── PROCESS ───────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative w-full bg-brand-navy overflow-hidden py-20 lg:py-32">
          <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-coral/12 blur-[140px] pointer-events-none" />

          <div
            aria-hidden
            className="absolute -top-6 right-0 text-[18vw] font-black uppercase leading-none tracking-tighter text-white/[0.025] select-none pointer-events-none"
          >
            METHOD
          </div>

          <div className="relative w-full max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-20 mb-12 lg:mb-20">
            <div className="mb-8 lg:mb-10">
              <SectionIndicator index={2} label="HOW WE WORK" tone="dark" centered />
            </div>
            <div className="text-center">
              <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-black uppercase leading-[0.9] tracking-tight text-white mb-4">
                Our search{" "}
                <span className="text-brand-coral">methodology</span>
              </h2>
              <p className="text-white/45 text-sm lg:text-base leading-relaxed max-w-xl mx-auto">
                A five-stage process refined across 300+ senior mandates.
              </p>
            </div>
          </div>

          <div className="relative w-full max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-20">
            <div
              aria-hidden
              className="hidden lg:block absolute left-20 right-20 top-[54px] h-px bg-gradient-to-r from-transparent via-brand-coral/30 to-transparent pointer-events-none z-0"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
              {PROCESS_STEPS.map((step, i) => {
                const Icon = step.icon
                return (
                  <div key={i} className="relative">
                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 -top-[calc(54px-8px)] w-4 h-4 rounded-full bg-brand-navy border-2 border-brand-coral z-10 items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-coral" />
                    </div>

                    <div className="group relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 lg:p-7 hover:bg-white/[0.08] hover:border-brand-coral/40 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col overflow-hidden">
                      <span
                        aria-hidden
                        className="absolute -top-4 -right-2 text-[6rem] lg:text-[7rem] font-black text-white/[0.04] leading-none pointer-events-none select-none"
                      >
                        {step.number}
                      </span>

                      <div className="relative">
                        <div className="flex items-center gap-3 mb-5">
                          <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-brand-coral/15 group-hover:bg-brand-coral/25 transition-colors duration-300 shrink-0">
                            <Icon className="w-5 h-5 text-brand-coral" strokeWidth={1.7} />
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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto animate-fade-in-up delay-300 mt-12">
              <AppButton href={CTA_DATA.processBtn.href} icon="arrow" className="sm:w-auto">
                {CTA_DATA.processBtn.text}
              </AppButton>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── BENEFITS: Asymmetric bento ────────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative w-full bg-brand-white py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20">
            <div className="mb-12 lg:mb-16 text-center">
              <SectionIndicator index={3} label="Why us" centered />
              <h2 className="mt-8 text-[clamp(2.5rem,6vw,4.5rem)] font-black uppercase leading-[0.9] tracking-tight text-brand-navy">
                Precision <span className="text-brand-coral">hiring</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 lg:gap-4">
              <div className="sm:col-span-2 lg:col-span-3 lg:row-span-2 rounded-3xl bg-brand-navy text-white p-8 lg:p-10 relative overflow-hidden flex flex-col justify-between min-h-[320px] lg:min-h-[440px]">
                <div className="absolute -top-24 -right-24 w-[320px] h-[320px] rounded-full bg-brand-coral/20 blur-[100px] pointer-events-none" />

                <div className="relative">
                  <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-black uppercase leading-[0.92] tracking-tight mb-6">
                    Precision
                    <br />
                    <span className="text-brand-coral">hiring</span>
                  </h2>
                  <p className="text-sm lg:text-base text-white/60 leading-relaxed max-w-sm">
                    We don't compete on volume. Every mandate we accept gets a
                    partner's full attention from brief to onboarding.
                  </p>
                </div>

                <Link
                  href="/partnerships"
                  className="relative inline-flex items-center justify-between gap-4 mt-8 group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-coral/40 rounded-2xl px-5 py-4 transition-all duration-300"
                >
                  <span className="text-sm font-bold text-white">
                    Meet the companies we've worked with 
                  </span>
                  <span className="flex items-center justify-center w-9 h-9 rounded-full bg-brand-coral group-hover:rotate-45 transition-transform duration-300">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </span>
                </Link>
              </div>

              {BENEFITS.map((benefit, i) => {
                const Icon = benefit.icon
                return (
                  <div
                    key={i}
                    className="lg:col-span-3 rounded-3xl bg-brand-navy/[0.025] border border-brand-navy/10 p-7 lg:p-8 hover:bg-brand-navy/[0.045] hover:border-brand-coral/30 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden min-h-[200px] lg:min-h-[210px]"
                  >
                    <span
                      aria-hidden
                      className="absolute top-5 right-6 text-[3rem] font-black text-brand-navy/[0.06] leading-none pointer-events-none select-none"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="relative h-full flex flex-col">
                      <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-brand-coral/12 mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <Icon className="w-5 h-5 text-brand-coral" strokeWidth={1.7} />
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

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative w-full px-3 sm:px-5 lg:px-10 pb-12 lg:pb-20">
          <div className="relative bg-brand-navy rounded-3xl lg:rounded-[2.5rem] overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-coral/20 blur-[150px] pointer-events-none" />
            <div className="absolute -top-20 -left-20 w-[300px] h-[300px] rounded-full bg-brand-coral/15 blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] rounded-full bg-brand-coral/10 blur-[100px] pointer-events-none" />

            <div aria-hidden className="absolute top-5 left-5 w-8 h-8 border-l-2 border-t-2 border-brand-coral/40 rounded-tl-xl pointer-events-none" />
            <div aria-hidden className="absolute top-5 right-5 w-8 h-8 border-r-2 border-t-2 border-brand-coral/40 rounded-tr-xl pointer-events-none" />
            <div aria-hidden className="absolute bottom-5 left-5 w-8 h-8 border-l-2 border-b-2 border-brand-coral/40 rounded-bl-xl pointer-events-none" />
            <div aria-hidden className="absolute bottom-5 right-5 w-8 h-8 border-r-2 border-b-2 border-brand-coral/40 rounded-br-xl pointer-events-none" />

            <p
              aria-hidden
              className="hidden lg:block absolute inset-x-0 bottom-[-2rem] text-center text-[20rem] xl:text-[24rem] font-black uppercase tracking-tighter text-white/[0.03] leading-[0.8] pointer-events-none select-none whitespace-nowrap"
            >
              EXEC
            </p>

            <div className="relative max-w-4xl mx-auto px-6 sm:px-10 py-20 lg:py-32 text-center">
              <div className="flex items-center justify-center gap-3 mb-6 lg:mb-8">
                <span className="block h-px w-10 bg-brand-coral" />
                <Eyebrow>{CTA_DATA.eyebrow}</Eyebrow>
                <span className="block h-px w-10 bg-brand-coral" />
              </div>

              <h2 className="text-[clamp(2.5rem,7vw,5.5rem)] font-black uppercase leading-[0.92] tracking-tight text-white mb-6 lg:mb-8 text-balance">
                {CTA_DATA.title}
              </h2>

              <p className="text-base lg:text-ig text-white/60 leading-relaxed max-w-xl mx-auto mb-10 lg:mb-12">
                {CTA_DATA.description}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto animate-fade-in-up delay-300">
                <AppButton href={CTA_DATA.primaryButton.href} icon="arrow" className="sm:w-auto">
                  {CTA_DATA.primaryButton.text}
                </AppButton>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  )
}