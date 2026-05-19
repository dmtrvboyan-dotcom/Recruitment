import type { Metadata } from "next"
import Link from "next/link"
import { ScrollReveal } from "@/components/layout"
import { ArrowRight, ArrowUpRight } from "lucide-react"
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

export default function ExecutiveSearchPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-brand-navy overflow-hidden pt-32 pb-0 mt-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-coral/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-coral mb-5">
            {HERO_DATA.tagline}
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-brand-white max-w-3xl mb-6">
            {HERO_DATA.title}
          </h1>

          <p className="text-base text-brand-white/50 max-w-xl leading-relaxed mb-10">
            {HERO_DATA.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-16">
            <Link
              href={CTA_DATA.primaryButton.href}
              className="inline-flex items-center justify-center gap-2 bg-brand-coral hover:bg-brand-coral-hover text-brand-white px-7 py-3.5 text-sm font-semibold rounded-2xl transition-colors duration-200"
            >
              {CTA_DATA.primaryButton.text}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={CTA_DATA.secondaryButton.href}
              className="inline-flex items-center justify-center gap-2 border border-white/15 hover:border-white/30 text-brand-white/70 hover:text-brand-white px-7 py-3.5 text-sm font-semibold rounded-2xl transition-all duration-200"
            >
              {CTA_DATA.secondaryButton.text}
            </Link>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-white/8">
            {STATS.map((stat, i) => (
              <div
                key={i}
                className={`py-8 px-2 ${i % 2 === 0 && i !== STATS.length - 1 ? "border-r border-white/8 sm:border-r-0" : ""} ${i < STATS.length - 1 ? "sm:border-r sm:border-white/8" : ""} ${i < 2 ? "border-b border-white/8 sm:border-b-0" : ""} ${i > 0 ? "pl-5 sm:pl-6" : ""}`}
              >
                <p className="text-2xl sm:text-3xl font-black text-brand-white mb-1">{stat.value}</p>
                <p className="text-xs text-brand-white/30 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

     
      </section>

      {/* ── Marquee ── */}
      <div className="bg-brand-navy overflow-hidden py-3 select-none -mt-px">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...TRUST_ITEMS, ...TRUST_ITEMS].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-3 px-8 text-[11px] font-semibold tracking-widest uppercase text-brand-white/35">
              <span className="w-1 h-1 rounded-full bg-brand-coral shrink-0" />
              {item.text}
            </span>
          ))}
        </div>
      </div>

      {/* ── Services ── */}
      <ScrollReveal>
        <section className="bg-brand-white py-20 lg:py-28">
          <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className="mb-12">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-coral mb-3">Specialisms</p>
              <h2 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight">Roles we hire</h2>
            </div>

            <div className="divide-y divide-brand-navy/8 border-y border-brand-navy/8">
              {SERVICE_CARDS.map((card, i) => {
                const Icon = card.icon
                return (
                  <Link
                    key={i}
                    href={card.href}
                    className="group flex items-start gap-4 sm:gap-5 py-5 hover:bg-brand-navy/[0.02] -mx-4 px-4 sm:-mx-6 sm:px-6 transition-colors duration-200"
                  >
                    <span className="text-xs font-mono text-brand-navy/25 pt-1 w-5 shrink-0 hidden sm:block">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${card.accent}15` }}
                    >
                      <Icon className="w-4 h-4" style={{ color: card.accent }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-[15px] font-semibold text-brand-navy group-hover:text-brand-coral transition-colors duration-200 mb-0.5">
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-brand-navy/40 leading-relaxed hidden sm:block">
                        {card.description}
                      </p>
                    </div>
                    <div className="hidden lg:flex items-center gap-1.5 shrink-0 flex-wrap justify-end max-w-[200px]">
                      {card.tags.slice(0, 3).map((tag, j) => (
                        <span key={j} className="text-[10px] font-medium px-2 py-0.5 rounded-full border border-brand-navy/10 text-brand-navy/35">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-brand-navy/20 group-hover:text-brand-coral shrink-0 mt-0.5 transition-colors duration-200" />
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── Process ── */}
      <ScrollReveal>
        <section className="bg-brand-navy py-20 lg:py-28">
          <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-12">
              <div>
                <p className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-coral mb-3">How we work</p>
                <h2 className="text-3xl sm:text-4xl font-black text-brand-white tracking-tight">Our search methodology</h2>
              </div>
              <p className="text-sm text-brand-white/30 max-w-[200px] leading-relaxed sm:text-right shrink-0">
                Refined across 300+ senior mandates.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {PROCESS_STEPS.map((step, i) => {
                const Icon = step.icon
                const isLast = i === PROCESS_STEPS.length - 1
                return (
                  <div
                    key={i}
                    className={`rounded-2xl border border-white/8 bg-white/[0.03] p-6 flex flex-col gap-4 hover:border-brand-coral/30 hover:bg-white/[0.06] transition-all duration-300 ${isLast ? "sm:col-span-2 lg:col-span-1" : ""}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 rounded-xl bg-white/6 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-brand-coral" strokeWidth={1.6} />
                      </div>
                      <span className="text-[10px] font-bold text-brand-coral/40 tracking-widest">STEP {step.number}</span>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-brand-white mb-2">{step.title}</h3>
                      <p className="text-xs text-brand-white/35 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-6 rounded-2xl border border-brand-coral/20 bg-brand-coral/5 px-6 py-5 flex gap-4 items-start">
              <div className="w-0.5 self-stretch bg-brand-coral rounded-full shrink-0" />
              <p className="text-sm text-brand-white/50 leading-relaxed">
                <span className="font-semibold text-brand-white">No hire, no invoice.</span>{" "}
                Our fee is only due upon a successful placement. If the process starts over, so do we — at no extra cost.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── Benefits ── */}
      <ScrollReveal>
        <section className="bg-brand-white py-20 lg:py-28">
          <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className="flex flex-col lg:flex-row lg:items-start lg:gap-20 gap-10">
              {/* Left */}
              <div className="lg:w-64 shrink-0">
                <p className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-coral mb-3">Why us</p>
                <h2 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight mb-4">Precision hiring</h2>
                <p className="text-sm text-brand-navy/45 leading-relaxed mb-6">
                  We don't compete on volume. Every mandate we accept gets a partner's full attention from brief to onboarding.
                </p>
                <Link
                  href="/tech-recruitment"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-coral transition-colors duration-200"
                >
                  Explore our approach
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Right */}
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {BENEFITS.map((benefit, i) => {
                  const Icon = benefit.icon
                  return (
                    <div
                      key={i}
                      className="group rounded-2xl border border-brand-navy/8 p-6 hover:border-brand-coral/30 hover:shadow-sm transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-xl bg-brand-coral/10 flex items-center justify-center mb-4 group-hover:bg-brand-coral/20 transition-colors duration-300">
                        <Icon className="w-4 h-4 text-brand-coral" strokeWidth={1.6} />
                      </div>
                      <h3 className="text-sm font-bold text-brand-navy mb-1.5">{benefit.title}</h3>
                      <p className="text-xs text-brand-navy/45 leading-relaxed">{benefit.body}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── CTA ── */}
      <ScrollReveal>
        <section className="relative bg-brand-navy mx-3 sm:mx-5 lg:mx-10 mb-10 lg:mb-16 rounded-3xl py-16 lg:py-24 overflow-hidden">
          <div className="absolute top-0 left-0 w-72 h-72 bg-brand-coral/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 right-0 w-56 h-56 bg-brand-coral/8 rounded-full blur-[80px] pointer-events-none translate-x-1/4 translate-y-1/4" />

          <div className="relative max-w-xl mx-auto px-6 sm:px-10 text-center">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-coral mb-4">{CTA_DATA.eyebrow}</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-white tracking-tight mb-4">
              {CTA_DATA.title}
            </h2>
            <p className="text-sm text-brand-white/40 leading-relaxed max-w-sm mx-auto mb-8">
              {CTA_DATA.description}
            </p>
            <Link
              href={CTA_DATA.primaryButton.href}
              className="inline-flex items-center gap-2 bg-brand-coral hover:bg-brand-coral-hover text-brand-white px-8 py-3.5 text-sm font-semibold rounded-2xl transition-colors duration-200"
            >
              {CTA_DATA.primaryButton.text}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </>
  )
}