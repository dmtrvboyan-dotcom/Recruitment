import type { Metadata } from "next"
import Link from "next/link"
import { ScrollReveal } from "@/components/layout"
import { ArrowRight, ArrowUpRight, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
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
  title: "Employer of Record (EOR) Bulgaria & Eastern Europe | Hire Without a Local Entity",
  description:
    "Hire employees in Bulgaria and Eastern Europe without setting up a local entity. Full employment compliance, contractor-to-employee conversions, and cross-border workforce expansion - handled end to end.",
}

// ─── Shared primitives ────────────────────────────────────────────────────────

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`text-xs font-semibold uppercase tracking-[0.2em] mb-3 ${light ? "text-brand-coral" : "text-brand-coral"}`}>
      {children}
    </p>
  )
}

function HRule({ className = "" }: { className?: string }) {
  return <hr className={`border-t border-brand-navy/10 ${className}`} />
}

// ─── FAQ Item (client component pattern using details/summary) ────────────────

function FaqRow({ question, answer, index }: { question: string; answer: string; index: number }) {
  return (
    <details className="group border-t border-brand-navy/10 last:border-b last:border-brand-navy/10">
      <summary className="flex items-center justify-between gap-6 py-5 lg:py-6 cursor-pointer list-none select-none">
        <div className="flex items-start gap-4">
          <span className="text-[11px] font-mono text-brand-navy/25 pt-0.5 flex-shrink-0 hidden sm:block">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-[15px] lg:text-[16px] font-semibold text-brand-navy leading-snug">
            {question}
          </span>
        </div>
        <span className="flex-shrink-0 w-6 h-6 rounded-full border border-brand-navy/15 flex items-center justify-center">
          <Plus className="w-3 h-3 text-brand-navy/40 group-open:hidden" />
          <Minus className="w-3 h-3 text-brand-coral hidden group-open:block" />
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
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-24 pb-0 lg:pt-48 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

          {/* Top rule + eyebrow */}
          <div className="flex items-center gap-3 sm:gap-5 mb-8 lg:mb-10">
            <span className="block h-px flex-1 bg-brand-navy/15" />
            <Eyebrow>{HERO_DATA.eyebrow}</Eyebrow>
            <span className="block h-px flex-1 bg-brand-navy/15" />
          </div>

          {/* Split layout: big title left, description right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end pb-16 lg:pb-28">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold text-brand-coral uppercase tracking-[0.2em] mb-4 lg:mb-6">
                {HERO_DATA.tagline}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-[4.5rem] font-semibold text-brand-navy leading-[1.05] tracking-tight text-balance">
                {HERO_DATA.title}
              </h1>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-end gap-6 lg:gap-8">
              <p className="text-base lg:text-lg text-brand-navy/55 leading-relaxed text-pretty">
                {HERO_DATA.description}
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Button
                  asChild
                  className="w-full sm:w-auto bg-brand-navy text-brand-white hover:bg-brand-blue rounded-xl px-7 py-5 text-sm font-medium transition-colors duration-200"
                >
                  <Link href={CTA_DATA.primaryButton.href}>
                    {CTA_DATA.primaryButton.text}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  className="w-full sm:w-auto bg-brand-coral text-brand-white hover:bg-brand-navy rounded-xl px-7 py-5 text-sm font-medium transition-colors duration-200"
                >
                  <Link href={CTA_DATA.secondaryButton.href}>
                    {CTA_DATA.secondaryButton.text}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Stats strip */}
          <div className="border-t border-brand-navy/10 grid grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat, i) => (
              <div
                key={i}
                className={`py-8 lg:py-10 px-4 sm:px-6 ${i % 2 === 0 ? "border-r border-brand-navy/10" : ""
                  } ${i < 2 ? "border-b border-brand-navy/10 lg:border-b-0" : ""
                  } ${i < STATS.length - 1 ? "lg:border-r lg:border-brand-navy/10" : ""
                  }`}
              >
                <p className="text-3xl lg:text-5xl font-semibold text-brand-navy tracking-tight mb-1">
                  {stat.value}
                </p>
                <p className="text-[12px] lg:text-[13px] text-brand-navy/45 leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust marquee strip ────────────────────────────────────────────── */}
      <div className="bg-brand-navy overflow-hidden py-3 sm:py-4 select-none">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...TRUST_ITEMS, ...TRUST_ITEMS].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-8 text-[11px] sm:text-[13px] font-medium text-brand-white/55"
            >
              <span className="w-1 h-1 rounded-full bg-brand-coral inline-block flex-shrink-0" />
              {item.text}
            </span>
          ))}
        </div>
      </div>

      {/* ── Services grid ─────────────────────────────────────────────────── */}
      <ScrollReveal>
        <section className="py-16 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-6 mb-10 lg:mb-16">
              <div>
                <Eyebrow>EOR Coverage</Eyebrow>
                <h2 className="text-2xl lg:text-4xl font-semibold text-brand-navy tracking-tight">
                  Hiring solutions across Eastern Europe
                </h2>
              </div>
              <p className="text-brand-navy/45 text-sm lg:text-[15px] max-w-sm leading-relaxed">
                From international hiring and cross-border employment to contractor conversions - all without incorporating locally.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
              {SERVICE_CARDS.map((card, i) => {
                const Icon = card.icon
                return (
                  <div
                    key={i}
                    className="group relative rounded-2xl border border-brand-navy/10 bg-white p-6 lg:p-7 hover:border-brand-navy/25 hover:shadow-[0_8px_32px_rgba(8,30,60,0.07)] transition-all duration-300 flex flex-col gap-4"
                  >
                    {/* Contract type badge - top right */}
                    <span className="absolute top-5 right-5 text-[10px] font-medium text-brand-navy/30 bg-brand-navy/[0.05] rounded-full px-2.5 py-1">
                      {card.contractTypes}
                    </span>

                    {/* Icon */}
                    <div
                      className={`w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl ${card.iconBg}`}
                    >
                      <Icon className="w-5 h-5" style={{ color: card.accent }} />
                    </div>

                    {/* Title */}
                    <h3 className="text-[15px] lg:text-[16px] font-semibold text-brand-navy leading-tight pr-24 group-hover:text-brand-blue transition-colors duration-200">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[13px] text-brand-navy/50 leading-relaxed flex-1">
                      {card.description}
                    </p>

                    {/* Divider + tags */}
                    <div className="pt-2 border-t border-brand-navy/8 flex flex-wrap gap-1.5 items-center">
                      {card.tags.map((tag, j) => (
                        <span
                          key={j}
                          className="text-[11px] font-medium px-2.5 py-0.5 rounded-full border border-brand-navy/12 text-brand-navy/45"
                        >
                          {tag}
                        </span>
                      ))}
                      <ArrowUpRight className="w-3.5 h-3.5 text-brand-navy/20 group-hover:text-brand-coral ml-auto group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── Process ───────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <section className="py-16 lg:py-32 bg-brand-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-6 mb-12 lg:mb-20">
              <div>
                <p className="text-xs font-semibold text-brand-coral uppercase tracking-[0.2em] mb-3">
                  How it works
                </p>
                <h2 className="text-2xl lg:text-4xl font-semibold text-brand-white tracking-tight">
                  From brief to employed - no entity required
                </h2>
              </div>
              <p className="text-brand-white/35 text-sm lg:text-[15px] max-w-xs leading-relaxed">
                A lean five-step process that gets your people hired, compliant, and working - fast.
              </p>
            </div>

            {/* Timeline list */}
            <div className="relative">
              {/* Vertical line - desktop only */}
              <div className="hidden lg:block absolute left-[calc(50%-0.5px)] top-0 bottom-0 w-px bg-brand-white/10" />

              <div className="flex flex-col gap-0">
                {PROCESS_STEPS.map((step, i) => {
                  const Icon = step.icon
                  const isEven = i % 2 === 0

                  return (
                    <div
                      key={i}
                      className={`group relative grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-10 ${i < PROCESS_STEPS.length - 1 ? "mb-0" : ""}`}
                    >
                      {/* Desktop: left column */}
                      <div
                        className={`hidden lg:flex items-start py-8 ${isEven ? "justify-end pr-10 text-right" : "order-2 pl-10"}`}
                      >
                        {isEven ? (
                          <div className="max-w-[340px]">
                            <p className="text-[11px] font-semibold text-brand-coral/70 uppercase tracking-widest mb-2">
                              Step {step.number}
                            </p>
                            <h3 className="text-[17px] font-semibold text-brand-white mb-2 leading-tight">
                              {step.title}
                            </h3>
                            <p className="text-[13px] text-brand-white/40 leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        ) : (
                          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-brand-white/10 group-hover:bg-brand-coral/20 transition-colors duration-300">
                            <Icon className="w-5 h-5 text-brand-coral" />
                          </div>
                        )}
                      </div>

                      {/* Center dot */}
                      <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10">
                        <div className="w-3 h-3 rounded-full bg-brand-coral ring-4 ring-brand-navy" />
                      </div>

                      {/* Desktop: right column */}
                      <div
                        className={`hidden lg:flex items-start py-8 ${isEven ? "pl-10 order-2" : "justify-end pr-10"}`}
                      >
                        {isEven ? (
                          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-brand-white/10 group-hover:bg-brand-coral/20 transition-colors duration-300">
                            <Icon className="w-5 h-5 text-brand-coral" />
                          </div>
                        ) : (
                          <div className="max-w-[340px] text-right">
                            <p className="text-[11px] font-semibold text-brand-coral/70 uppercase tracking-widest mb-2">
                              Step {step.number}
                            </p>
                            <h3 className="text-[17px] font-semibold text-brand-white mb-2 leading-tight">
                              {step.title}
                            </h3>
                            <p className="text-[13px] text-brand-white/40 leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Mobile: simple stacked card */}
                      <div className="lg:hidden flex gap-4 py-5 border-t border-brand-white/10 first:border-t-0">
                        <div className="flex flex-col items-center gap-2 flex-shrink-0">
                          <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-brand-white/10">
                            <Icon className="w-4 h-4 text-brand-coral" />
                          </div>
                          {i < PROCESS_STEPS.length - 1 && (
                            <div className="w-px flex-1 bg-brand-white/10 min-h-[20px]" />
                          )}
                        </div>
                        <div className="pb-2">
                          <p className="text-[10px] font-semibold text-brand-coral/70 uppercase tracking-widest mb-1">
                            Step {step.number}
                          </p>
                          <h3 className="text-[15px] font-semibold text-brand-white mb-1.5 leading-tight">
                            {step.title}
                          </h3>
                          <p className="text-[13px] text-brand-white/40 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── Benefits ──────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <section className="py-16 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-6 mb-10 lg:mb-16">
              <div>
                <Eyebrow>Why EOR</Eyebrow>
                <h2 className="text-2xl lg:text-4xl font-semibold text-brand-navy tracking-tight max-w-xs lg:max-w-md text-balance">
                  The smarter way to build teams across borders
                </h2>
              </div>
              <p className="text-brand-navy/45 text-sm lg:text-[15px] max-w-sm leading-relaxed">
                Expand into Bulgaria and Eastern Europe with full legal compliance - without the cost, complexity, or time of entity setup.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
              {BENEFITS.map((benefit, i) => {
                const Icon = benefit.icon
                return (
                  <div
                    key={i}
                    className="group relative rounded-2xl border border-brand-navy/10 bg-white p-6 lg:p-8 hover:border-brand-navy/20 hover:shadow-[0_8px_32px_rgba(8,30,60,0.06)] transition-all duration-300 overflow-hidden"
                  >
                    {/* Stat callout */}
                    <p className="absolute bottom-4 right-5 text-[11px] font-semibold text-brand-coral/60 tracking-wide">
                      {benefit.stat}
                    </p>

                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#e8f3ff] mb-5">
                      <Icon className="w-5 h-5 text-brand-blue" />
                    </div>

                    <h3 className="text-[15px] lg:text-[16px] font-semibold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors duration-200">
                      {benefit.title}
                    </h3>
                    <p className="text-[13px] lg:text-[14px] text-brand-navy/45 leading-relaxed pr-4">
                      {benefit.body}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <section className="py-16 lg:py-32 mb-8 lg:mb-16 mx-3 sm:mx-4 lg:mx-10 rounded-2xl lg:rounded-3xl bg-brand-navy overflow-hidden relative">

          {/* Decorative background text */}
          <p
            className="hidden lg:block absolute inset-x-0 top-1/2 -translate-y-1/2 text-center text-[14rem] font-semibold text-brand-white/[0.03] leading-none pointer-events-none select-none whitespace-nowrap overflow-hidden"
            aria-hidden
          >
            EMPLOY
          </p>

          {/* Subtle top gradient */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-brand-coral/40 to-transparent" />

          <div className="relative max-w-4xl mx-auto px-6 sm:px-8 text-center">
            <p className="text-xs font-semibold text-brand-coral uppercase tracking-[0.2em] mb-3 lg:mb-4">
              {CTA_DATA.eyebrow}
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-brand-white tracking-tight mb-4 lg:mb-6 text-balance">
              {CTA_DATA.title}
            </h2>
            <p className="text-sm lg:text-[15px] text-brand-white/45 leading-relaxed max-w-xl mx-auto mb-8 lg:mb-10">
              {CTA_DATA.description}
            </p>

            {/* EOR service type pills */}
            <div className="flex flex-wrap justify-center gap-2 mb-8 lg:mb-10">
              {[
                "International Hiring",
                "Cross-Border Employment",
                "Local Compliance",
                "Contractor-to-Employee",
                "Global Workforce Expansion",
              ].map((label) => (
                <span
                  key={label}
                  className="text-[11px] font-medium px-3 py-1.5 rounded-full border border-brand-white/15 text-brand-white/40"
                >
                  {label}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
              <Button
                asChild
                className="bg-brand-coral text-brand-white hover:bg-brand-coral-hover rounded-xl px-8 py-5 text-sm lg:text-[15px] font-medium transition-colors duration-200"
              >
                <Link href={CTA_DATA.primaryButton.href}>
                  {CTA_DATA.primaryButton.text}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="text-brand-white/55 hover:text-brand-white hover:bg-brand-white/10 rounded-xl px-8 py-5 text-sm lg:text-[15px] font-medium transition-colors duration-200"
              >
                <Link href={CTA_DATA.secondaryButton.href}>
                  {CTA_DATA.secondaryButton.text}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  )
}