import type { Metadata } from "next"
import Link from "next/link"
import { ScrollReveal } from "@/components/layout"
import { ArrowRight, ArrowUpRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  HERO_DATA,
  STATS,
  PROCESS_STEPS,
  SERVICE_CARDS,
  BENEFITS,
  INDUSTRIES,
  TRUST_ITEMS,
  CTA_DATA,
} from "./data"

export const metadata: Metadata = {
  title: "Executive Search & Headhunting for Technology Leaders | Tech Recruitment",
  description:
    "Partner-led executive search and headhunting for senior technology roles - CTO, VP Engineering, CISO, CPO, and beyond. 92% two-year retention. 300+ mandates completed. Discreet, strategic, and results-driven.",
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
      {/* ── HERO ── design completely unchanged ───────────────────────────── */}
      <section className="relative pt-24 pb-0 lg:pt-48 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

          <div className="flex items-center gap-3 sm:gap-5 mb-8 lg:mb-10">
            <span className="block h-px flex-1 bg-brand-navy/15" />
            <Eyebrow>{HERO_DATA.eyebrow}</Eyebrow>
            <span className="block h-px flex-1 bg-brand-navy/15" />
          </div>

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

      {/* ── TRUST MARQUEE ──────────────────────────────────────────────────── */}
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

      {/* ── ROLES WE PLACE ─────────────────────────────────────────────────── */}
      <ScrollReveal>
        <section className="py-16 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-6 mb-10 lg:mb-16">
              <div>
                <Eyebrow>Specialisms</Eyebrow>
                <h2 className="text-2xl lg:text-4xl font-semibold text-brand-navy tracking-tight">
                  Roles we lead
                </h2>
              </div>
              <p className="text-brand-navy/45 text-sm lg:text-[15px] max-w-sm leading-relaxed">
                We operate at the principal level - every search run by a senior partner with direct skin in the game.
              </p>
            </div>

            <HRule className="mb-0" />

            <div className="divide-y divide-brand-navy/10">
              {SERVICE_CARDS.map((card, i) => {
                const Icon = card.icon
                return (
                  <div
                    key={i}
                    className="group grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 py-6 lg:py-8 items-start hover:bg-brand-navy/[0.025] transition-colors duration-300 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10"
                  >
                    <div className="md:col-span-1 hidden md:flex pt-1">
                      <span className="text-[13px] font-mono text-brand-navy/25">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="md:col-span-4 flex items-start gap-3 lg:gap-4">
                      <div
                        className={`w-9 h-9 lg:w-10 lg:h-10 flex-shrink-0 flex items-center justify-center rounded-xl ${card.iconBg}`}
                      >
                        <Icon className="w-4 h-4 lg:w-5 lg:h-5" style={{ color: card.accent }} />
                      </div>
                      <h3 className="text-base lg:text-[17px] font-semibold text-brand-navy leading-tight pt-1 lg:pt-1.5 group-hover:text-brand-blue transition-colors duration-200">
                        {card.title}
                      </h3>
                    </div>

                    <div className="md:col-span-4">
                      <p className="text-[13px] lg:text-[14px] text-brand-navy/50 leading-relaxed">
                        {card.description}
                      </p>
                    </div>

                    <div className="md:col-span-3 flex flex-wrap items-start gap-2 md:justify-end">
                      {card.tags.map((tag, j) => (
                        <span
                          key={j}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-full border border-brand-navy/12 text-brand-navy/45 group-hover:border-brand-coral/30 group-hover:text-brand-navy/60 transition-colors duration-200"
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

      {/* ── INDUSTRIES ─────────────────────────────────────────────────────── */}
      {/*
        New section - split panel: dark left label, light right content.
        Communicates sector depth without being a generic logos strip.
      */}
      <ScrollReveal>
        <section className="py-16 lg:py-24 bg-brand-navy/[0.025]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              <div className="lg:col-span-4 lg:sticky lg:top-32">
                <Eyebrow>Sectors</Eyebrow>
                <h2 className="text-2xl lg:text-4xl font-semibold text-brand-navy tracking-tight mb-4 lg:mb-6 text-balance">
                  Industries we know deeply
                </h2>
                <p className="text-sm lg:text-[15px] text-brand-navy/45 leading-relaxed">
                  Executive search only works when the recruiter genuinely understands the market. We've spent 15 years building that depth across four core technology sectors.
                </p>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
                {INDUSTRIES.map((item, i) => (
                  <div
                    key={i}
                    className="group rounded-2xl border border-brand-navy/10 bg-brand-white p-6 lg:p-8 hover:border-brand-coral/35 hover:shadow-sm transition-all duration-300"
                  >
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-brand-coral mb-4">
                      <span className="w-1 h-1 rounded-full bg-brand-coral inline-block" />
                      {item.roles}
                    </span>
                    <h3 className="text-[15px] lg:text-base font-semibold text-brand-navy mb-2 leading-snug group-hover:text-brand-blue transition-colors duration-200">
                      {item.sector}
                    </h3>
                    <p className="text-[12px] lg:text-[13px] text-brand-navy/45 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── SEARCH METHODOLOGY (PROCESS) ───────────────────────────────────── */}
      <ScrollReveal>
        <section className="py-16 lg:py-32 bg-brand-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-6 mb-10 lg:mb-16">
              <div>
                <p className="text-xs font-semibold text-brand-coral/80 uppercase tracking-[0.2em] mb-3">
                  HOW WE WORK
                </p>
                <h2 className="text-2xl lg:text-4xl font-semibold text-brand-white tracking-tight">
                  Our search methodology
                </h2>
              </div>
              <p className="text-brand-white/35 text-sm lg:text-[15px] max-w-xs leading-relaxed">
                A five-stage process refined across 300+ senior mandates - rigorous enough to be worth trusting, structured enough to move at pace.
              </p>
            </div>

            {/* Card grid: 3-col on desktop, 2-col tablet, 1-col mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {PROCESS_STEPS.map((step, i) => {
                const Icon = step.icon
                const isLast = i === PROCESS_STEPS.length - 1

                return (
                  <div
                    key={i}
                    className={`
                      group relative rounded-2xl border border-brand-white/10
                      bg-brand-white/[0.04] p-6 lg:p-8
                      hover:bg-brand-white/[0.08] hover:border-brand-coral/30
                      transition-all duration-300
                      flex flex-col min-h-[280px] lg:min-h-[320px]
                      ${isLast ? "sm:col-span-2 lg:col-span-1 lg:col-start-2" : ""}
                    `}
                  >
                    {/* Large faded number */}
                    <span className="absolute top-5 right-6 lg:top-6 lg:right-7 text-[2.5rem] lg:text-[3.5rem] font-semibold text-brand-white/[0.06] leading-none pointer-events-none select-none">
                      {step.number}
                    </span>

                    <div className="w-9 h-9 lg:w-10 lg:h-10 flex items-center justify-center rounded-xl bg-brand-white/10 mb-5 lg:mb-6 flex-shrink-0">
                      <Icon className="w-4 h-4 lg:w-5 lg:h-5 text-brand-coral" />
                    </div>

                    <p className="text-[11px] font-semibold text-brand-coral/70 uppercase tracking-widest mb-2">
                      STEP {step.number}
                    </p>

                    <h3 className="text-base lg:text-[17px] font-semibold text-brand-white mb-3 leading-tight">
                      {step.title}
                    </h3>

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

      {/* ── WHY US (BENEFITS) ──────────────────────────────────────────────── */}
      <ScrollReveal>
        <section className="py-16 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-start">

              {/* Left: sticky heading block */}
              <div className="lg:col-span-4 lg:sticky lg:top-32">
                <Eyebrow>Why us</Eyebrow>
                <h2 className="text-2xl lg:text-4xl font-semibold text-brand-navy tracking-tight mb-4 lg:mb-6 text-balance">
                  Built on two decades of trust
                </h2>
                <p className="text-sm lg:text-[15px] text-brand-navy/45 leading-relaxed mb-6 lg:mb-8">
                  We don't compete on volume. Every mandate we accept gets a senior partner's full attention from brief to onboarding - and beyond.
                </p>
                {/* Inline trust signals */}
                <ul className="space-y-2.5">
                  {[
                    "No junior handoffs - ever",
                    "Full confidentiality guaranteed",
                    "Off-market candidate access",
                    "Replacement guarantee included",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-[13px] text-brand-navy/60">
                      <span className="w-4 h-4 rounded-full bg-brand-coral/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-2.5 h-2.5 text-brand-coral" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: benefit cards */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-brand-navy/10 rounded-2xl overflow-hidden border border-brand-navy/10">
                {BENEFITS.map((benefit, i) => {
                  const Icon = benefit.icon
                  return (
                    <div
                      key={i}
                      className="relative bg-brand-white p-6 lg:p-8 hover:bg-brand-navy/[0.02] transition-colors duration-300 group overflow-hidden"
                    >
                      {/* Faded large number */}
                      <span
                        className="absolute top-4 right-5 text-[3.5rem] lg:text-[4.5rem] font-semibold text-brand-navy/[0.04] leading-none select-none pointer-events-none"
                        aria-hidden
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="relative">
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
                    </div>
                  )
                })}
              </div>

            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── CTA ────────────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <section className="py-16 lg:py-32 mb-8 lg:mb-16 mx-3 sm:mx-4 lg:mx-10 rounded-2xl lg:rounded-3xl bg-brand-navy overflow-hidden relative">

          <p
            className="hidden lg:block absolute inset-x-0 top-1/2 -translate-y-1/2 text-center text-[16rem] font-semibold text-brand-white/[0.03] leading-none pointer-events-none select-none whitespace-nowrap overflow-hidden"
            aria-hidden
          >
            EXEC
          </p>

          {/* Decorative rings */}
          <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full border border-brand-coral/10 pointer-events-none" aria-hidden />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full border border-brand-coral/8 pointer-events-none" aria-hidden />
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full border border-brand-white/5 pointer-events-none" aria-hidden />

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
