import type { Metadata } from "next"
import Link from "next/link"
import { ScrollReveal } from "@/components/layout"
import { ArrowRight, ArrowUpRight } from "lucide-react"
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
  title: "Permanent IT Recruitment Services | Tech Talent Acquisition",
  description:
    "Strategic permanent IT recruitment. We help companies hire high-performing tech professionals who align technically and culturally for long-term success.",
}


function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold text-brand-coral uppercase tracking-[0.2em] mb-3">
      {children}
    </p>
  )
}

function HRule({ className = "" }: { className?: string }) {
  return <hr className={`border-t border-brand-navy/10 ${className}`} />
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ExecutiveSearchPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
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
                  <Link href={CTA_DATA.secondaryButton.href} target="_blank">
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
                <Eyebrow>Specialisms</Eyebrow>
                <h2 className="text-2xl lg:text-4xl font-semibold text-brand-navy tracking-tight">
                  Roles we hire
                </h2>
              </div>
             
            </div>

            <HRule className="mb-0" />

            {/* Service rows */}
            <div className="divide-y divide-brand-navy/10">
              {SERVICE_CARDS.map((card, i) => {
                const Icon = card.icon
                return (
                  <div
                    key={i}
                    className="group grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 py-6 lg:py-8 items-start hover:bg-brand-navy/[0.025] transition-colors duration-300 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10"
                  >
                    {/* Number — hidden on mobile */}
                    <div className="md:col-span-1 hidden md:flex pt-1">
                      <span className="text-[13px] font-mono text-brand-navy/25">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Icon + title */}
                    <div className="md:col-span-4 flex items-start gap-3 lg:gap-4">
                      <div
                        className={`w-9 h-9 lg:w-10 lg:h-10 flex-shrink-0 flex items-center justify-center rounded-xl ${card.iconBg}`}
                      >
                        <Icon
                          className="w-4 h-4 lg:w-5 lg:h-5"
                          style={{ color: card.accent }}
                        />
                      </div>
                      <h3 className="text-base lg:text-[17px] font-semibold text-brand-navy leading-tight pt-1 lg:pt-1.5 group-hover:text-brand-blue transition-colors duration-200">
                        {card.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-4">
                      <p className="text-[13px] lg:text-[14px] text-brand-navy/50 leading-relaxed">
                        {card.description}
                      </p>
                    </div>

                    {/* Tags + arrow */}
                    <div className="md:col-span-3 flex flex-wrap items-start gap-2 md:justify-end">
                      {card.tags.map((tag, j) => (
                        <span
                          key={j}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-full border border-brand-navy/12 text-brand-navy/45"
                        >
                          {tag}
                        </span>
                      ))}
                      <ArrowUpRight className="w-4 h-4 text-brand-navy/20 group-hover:text-brand-coral group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 mt-0.5" />
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
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-6 mb-10 lg:mb-16">
              <div>
                <p className="text-xs font-semibold text-brand-coral uppercase tracking-[0.2em] mb-3">
                  HOW WE WORK
                </p>
                <h2 className="text-2xl lg:text-4xl font-semibold text-brand-white tracking-tight">
                  Our search methodology
                </h2>
              </div>
              <p className="text-brand-white/35 text-sm lg:text-[15px] max-w-xs leading-relaxed">
                A five-stage process refined across 300+ senior mandates.
              </p>
            </div>

            {/* Equal Height Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {PROCESS_STEPS.map((step, i) => {
                const Icon = step.icon
                const isLast = i === PROCESS_STEPS.length - 1

                return (
                  <div
                    key={i}
                    className={`
                      group relative rounded-2xl border border-brand-white/10 
                      bg-brand-white/[0.04] p-6 lg:p-8 hover:bg-brand-white/[0.08] 
                      hover:border-brand-coral/30 transition-all duration-300
                      flex flex-col min-h-[280px] lg:min-h-[340px]
                      ${isLast ? "sm:col-span-2 lg:col-span-1 lg:col-start-2" : ""}
                    `}
                  >
                    {/* Large decorative step number */}
                    <span className="absolute top-5 right-6 lg:top-6 lg:right-7 text-[2.5rem] lg:text-[3.5rem] font-semibold text-brand-white/[0.06] leading-none pointer-events-none select-none">
                      {step.number}
                    </span>

                    {/* Icon */}
                    <div className="w-9 h-9 lg:w-10 lg:h-10 flex items-center justify-center rounded-xl bg-brand-white/10 mb-5 lg:mb-6 flex-shrink-0">
                      <Icon className="w-4 h-4 lg:w-5 lg:h-5 text-brand-coral" />
                    </div>

                    {/* Step label */}
                    <p className="text-[11px] font-semibold text-brand-coral/70 uppercase tracking-widest mb-2">
                      STEP {step.number}
                    </p>

                    {/* Title */}
                    <h3 className="text-base lg:text-[17px] font-semibold text-brand-white mb-3 leading-tight">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[13px] lg:text-[14px] text-brand-white/40 leading-relaxed flex-1">
                      {step.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── Benefits ──────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <section className="py-16 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20">

              {/* Left: heading */}
              <div className="lg:col-span-4">
                <Eyebrow>Why us</Eyebrow>
                <h2 className="text-2xl lg:text-4xl font-semibold text-brand-navy tracking-tight mb-4 lg:mb-6 text-balance">
                  Built on two decades of trust
                </h2>
                <p className="text-sm lg:text-[15px] text-brand-navy/45 leading-relaxed">
                  We don't compete on volume. Every mandate we accept gets a
                  partner's full attention from brief to onboarding.
                </p>
              </div>

              {/* Right: benefit items */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-brand-navy/10 rounded-2xl overflow-hidden border border-brand-navy/10">
                {BENEFITS.map((benefit, i) => {
                  const Icon = benefit.icon
                  return (
                    <div
                      key={i}
                      className="bg-brand-white p-6 lg:p-8 hover:bg-brand-navy/[0.025] transition-colors duration-300 group"
                    >
                      <div className="w-9 h-9 lg:w-10 lg:h-10 flex items-center justify-center rounded-xl bg-[#e8f3ff] mb-4 lg:mb-5">
                        <Icon className="w-4 h-4 lg:w-5 lg:h-5 text-brand-blue" />
                      </div>
                      <h3 className="text-[15px] lg:text-[16px] font-semibold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors duration-200">
                        {benefit.title}
                      </h3>
                      <p className="text-[13px] lg:text-[14px] text-brand-navy/45 leading-relaxed">
                        {benefit.body}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <section className="py-16 lg:py-32 mb-8 lg:mb-16 mx-3 sm:mx-4 lg:mx-10 rounded-2xl lg:rounded-3xl bg-brand-navy overflow-hidden relative">

          {/* Decorative large text — hidden on mobile to prevent overflow issues */}
          <p
            className="hidden lg:block absolute inset-x-0 top-1/2 -translate-y-1/2 text-center text-[16rem] font-semibold text-brand-white/[0.03] leading-none pointer-events-none select-none whitespace-nowrap overflow-hidden"
            aria-hidden
          >
            EXEC
          </p>

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

            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  )
}