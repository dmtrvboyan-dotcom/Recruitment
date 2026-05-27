import type { Metadata } from "next"
import Link from "next/link"
import { ScrollReveal } from "@/components/layout"
import { ArrowUpRight, TrendingUp, Minus } from "lucide-react"
import { AppButton } from "@/components/ui/app-button"
import {
  HERO_DATA,
  STATS,
  PROCESS_STEPS,
  BENCHMARK_CATEGORIES,
  ROLE_INSIGHTS,
  BENEFITS,
  TRUST_ITEMS,
  CTA_DATA,
} from "./data";
import { BackToTop } from "@/components/navigation/back-to-top"


export const metadata: Metadata = {
  title: "IT Salary Benchmarking & Hiring Insights | Tech Compensation Data",
  description:
    "Access real-time IT salary benchmarks and tech hiring insights across 200+ roles, 30+ markets, and every major tech stack. Make competitive offers, retain top talent, and budget with confidence.",
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
  const muted =
    tone === "dark" ? "text-white/30" : "text-brand-navy/30"
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

function TrendBadge({ trend }: { trend: "up" | "stable" | "high-demand" }) {
  if (trend === "high-demand") {
    return (
      <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded-full bg-brand-coral/10 text-brand-coral">
        <TrendingUp className="w-2.5 h-2.5" />
        High demand
      </span>
    )
  }
  if (trend === "up") {
    return (
      <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded-full bg-blue-50 text-brand-blue">
        <TrendingUp className="w-2.5 h-2.5" />
        Rising
      </span>
    )
  }
  return (
    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded-full bg-brand-navy/6 text-brand-navy/50">
      <Minus className="w-2.5 h-2.5" />
      Stable
    </span>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SalaryBenchmarkingPage() {
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

        {/* Vertical text rail (lg+) */}
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
            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-3 mb-6 lg:mb-8">
              <span className="block h-px w-12 bg-brand-coral" />
              <Eyebrow>{HERO_DATA.tagline}</Eyebrow>
              <span className="block h-px w-12 bg-brand-coral" />
            </div>

            {/* Title */}
            <h1 className="text-[clamp(2.5rem,9vw,6rem)] font-bold uppercase leading-[0.88] tracking-[-0.02em] text-white text-balance mb-8 lg:mb-12">
              {HERO_DATA.title}
            </h1>

            {/* Description */}
            <p className="text-base lg:text-lg text-white/65 leading-relaxed text-pretty max-w-2xl mx-auto mb-8 lg:mb-10">
              {HERO_DATA.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto animate-fade-in-up delay-300">
              <AppButton href={CTA_DATA.primaryButton.href} icon="arrow" className="sm:w-auto">
                {CTA_DATA.primaryButton.text}
              </AppButton>
            </div>
          </div>
        </div>

        <div className="relative w-full">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20">
            <div className="grid grid-cols-2 lg:grid-cols-4">
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
                    <div className="w-6 bg-white/20" />
                  </div>
                  <p className="text-3xl lg:text-5xl xl:text-6xl font-bold text-brand-white tracking-tight leading-none mb-3 group-hover:text-brand-coral transition-colors duration-300">
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

      {/* ── Trust marquee (coral accent bar) ─────────────────────────────── */}
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

      {/* ── WHY SALARY BENCHMARKING ───────────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative w-full bg-brand-white py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20">
            {/* Centered header */}
            <div className="mb-12 lg:mb-16 text-center">
              <SectionIndicator index={1} label="Why it matters" centered />
              <h2 className="mt-8 text-[clamp(2.5rem,6vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-tight text-brand-navy">
                Decisions you can{" "}
                <span className="text-brand-coral">stand behind</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
              {/* Left: editorial prose block */}
              <div>
                <p className="text-base lg:text-lg text-brand-navy/55 leading-relaxed mb-8">
                  Outdated salary data costs you candidates at offer stage, drives attrition in your
                  existing team, and erodes trust with the board when headcount plans don't match
                  market reality. Benchmarking fixes all three.
                </p>
                {/* Decorative rule */}
                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-brand-coral" />
                  <span className="text-[10px] font-mono text-brand-navy/30">04 / OUTCOMES</span>
                  <div className="h-px w-8 bg-brand-navy/15" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-t border-brand-navy/10 border-l">
                {[
                  {
                    label: "Win more offers",
                    detail: "First offers grounded in real market data get accepted faster and at higher rates",
                  },
                  {
                    label: "Retain your team",
                    detail: "Identify pay gaps before they become resignation letters",
                  },
                  {
                    label: "Budget with confidence",
                    detail: "Accurate data turns headcount plans into credible board-level business cases",
                  },
                  {
                    label: "Move faster",
                    detail: "Less back-and-forth at offer stage means shorter hiring cycles",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group relative p-6 lg:p-8 border-b border-r border-brand-navy/10 hover:bg-brand-navy/2.5 transition-all duration-300 overflow-hidden"
                  >
                    <span className="block text-[10px] font-mono text-brand-coral/70 mb-3">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-sm font-bold uppercase tracking-tight text-brand-navy mb-2 group-hover:text-brand-coral transition-colors duration-200">
                      {item.label}
                    </h3>
                    <p className="text-[13px] text-brand-navy/55 leading-relaxed">
                      {item.detail}
                    </p>
                    {/* Animated coral underline */}
                    <span
                      aria-hidden
                      className="absolute left-0 right-0 bottom-0 h-px w-0 bg-brand-coral group-hover:w-full transition-all duration-700 ease-out"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto animate-fade-in-up delay-300 mt-12">
            <AppButton href={CTA_DATA.whyCTAPrimary.href} icon="arrow" className="sm:w-auto">
              {CTA_DATA.whyCTAPrimary.text}
            </AppButton>
          </div>
        </section>
      </ScrollReveal>

      {/* ── WHAT WE BENCHMARK ─────────────────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative w-full bg-brand-navy overflow-hidden py-20 lg:py-32">
          {/* Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 rounded-full bg-brand-coral/10 blur-[160px] pointer-events-none" />

          {/* Watermark */}
          <div
            aria-hidden
            className="absolute -top-6 right-0 text-[18vw] font-bold uppercase leading-none tracking-tighter text-brand-white/2.5 select-none pointer-events-none"
          >
            DATA
          </div>

          <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-10 lg:px-20">
            {/* Header */}
            <div className="mb-12 lg:mb-16">
              <SectionIndicator index={2} label="Coverage" tone="dark" centered />
              <div className="text-center mt-8">
                <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-tight text-white mb-4">
                  What our{" "}
                  <span className="text-brand-coral">benchmarks cover</span>
                </h2>
                <p className="text-white/45 text-sm lg:text-base leading-relaxed max-w-xl mx-auto">
                  Granular data across every dimension that actually matters for competitive compensation decisions.
                </p>
              </div>
            </div>

            {/* Category list */}
            <div className="rounded-2xl overflow-hidden border border-white/10">
              {BENCHMARK_CATEGORIES.map((cat, i) => {
                const Icon = cat.icon
                return (
                  <div
                    key={i}
                    className={`group grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 py-6 lg:py-8 px-6 lg:px-8 items-start transition-all duration-300 hover:bg-brand-white/5 hover:border-brand-coral/20 ${i % 2 === 0 ? "bg-brand-white/3" : "bg-brand-white/1.5"
                      } ${i < BENCHMARK_CATEGORIES.length - 1 ? "border-b border-white/08" : ""}`}
                  >
                    <div className="md:col-span-1 hidden md:flex pt-1">
                      <span className="text-[13px] font-mono text-brand-coral/40">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="md:col-span-4 flex items-start gap-3 lg:gap-4">
                      <div
                        className={`w-9 h-9 lg:w-10 lg:h-10 shrink-0 flex items-center justify-center rounded-xl ${cat.iconBg} group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                      >
                        <Icon className="w-4 h-4 lg:w-5 lg:h-5" style={{ color: cat.accent }} />
                      </div>
                      <h3 className="text-sm lg:text-base font-bold uppercase tracking-tight text-white leading-tight pt-1 lg:pt-1.5 group-hover:text-brand-coral transition-colors duration-200">
                        {cat.title}
                      </h3>
                    </div>

                    <div className="md:col-span-4">
                      <p className="text-[13px] lg:text-[14px] text-white/45 leading-relaxed">
                        {cat.description}
                      </p>
                    </div>

                    <div className="md:col-span-3 flex flex-wrap items-start gap-2 md:justify-end">
                      {cat.examples.map((ex, j) => (
                        <span
                          key={j}
                          className="text-[11px] font-semibold px-3 py-1 rounded-full bg-brand-white/6 text-white/45 group-hover:bg-brand-coral/15 group-hover:text-brand-coral transition-colors duration-300"
                        >
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── HOW WE GATHER DATA (PROCESS) ─────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative w-full bg-brand-white overflow-hidden py-20 lg:py-32">
          {/* Watermark */}
          <div
            aria-hidden
            className="absolute -top-6 right-0 text-[18vw] font-bold uppercase leading-none tracking-tighter text-brand-navy/4 select-none pointer-events-none"
          >
            METHOD
          </div>

          {/* Header */}
          <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-10 lg:px-20 mb-12 lg:mb-20">
            <SectionIndicator index={3} label="Methodology" centered />
            <div className="text-center mt-8">
              <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-tight text-brand-navy mb-4">
                How we{" "}
                <span className="text-brand-coral">gather the data</span>
              </h2>
              <p className="text-brand-navy/45 text-sm lg:text-base leading-relaxed max-w-xl mx-auto">
                Benchmarks are only as good as the data behind them. Ours come from live hiring
                activity — not self-reported surveys.
              </p>
            </div>
          </div>

          {/* Grid */}
          <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-10 lg:px-20">
            <div
              aria-hidden
              className="hidden lg:block absolute left-20 right-20 top-13.5  bg-linear-to-r from-transparent via-brand-coral/30 to-transparent pointer-events-none z-0"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
              {PROCESS_STEPS.map((step, i) => {
                const Icon = step.icon
                return (
                  <div key={i} className="relative">
                    {/* Card */}
                    <div className="group relative rounded-2xl border border-brand-navy/10 bg-brand-navy/2 p-6 lg:p-7 hover:bg-brand-navy/5 hover:border-brand-coral/40 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col overflow-hidden">
                      {/* Watermark step number */}
                      <span
                        aria-hidden
                        className="absolute -top-4 -right-2 text-[6rem] lg:text-[7rem] font-bold text-brand-navy/5 leading-none pointer-events-none select-none"
                      >
                        {step.number}
                      </span>

                      <div className="relative">
                        <div className="flex items-center gap-3 mb-5">
                          <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-brand-coral/12 group-hover:bg-brand-coral/22 transition-colors duration-300 shrink-0">
                            <Icon
                              className="w-5 h-5 text-brand-coral"
                              strokeWidth={1.7}
                            />
                          </div>
                          <div className="flex-1 h-px bg-brand-navy/10 group-hover:bg-brand-coral/40 transition-colors duration-300" />
                        </div>

                        <p className="text-[10px] font-bold text-brand-coral/80 uppercase tracking-[0.3em] mb-2">
                          STEP {step.number}
                        </p>

                        <h3 className="text-base lg:text-[17px] font-bold uppercase tracking-tight text-brand-navy mb-3 leading-tight group-hover:text-brand-coral transition-colors duration-200">
                          {step.title}
                        </h3>

                        <p className="text-[13px] text-brand-navy/50 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto animate-fade-in-up delay-300 mt-12">
            <AppButton href={CTA_DATA.methodologyCTA.href} icon="arrow" className="sm:w-auto">
              {CTA_DATA.methodologyCTA.text}
            </AppButton>
          </div>
        </section>
      </ScrollReveal>

      {/* ── BENEFITS: Asymmetric bento ────────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative w-full bg-brand-navy py-20 lg:py-32">
          {/* Glow */}
          <div className="absolute -top-40 right-0 w-125 h-125 rounded-full bg-brand-coral/10 blur-[130px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20">
            <div className="mb-12 lg:mb-16 text-center">
              <SectionIndicator index={4} label="Our advantage" tone="dark" centered />
              <h2 className="mt-8 text-[clamp(2.5rem,6vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-tight text-white">
                Better data,{" "}
                <span className="text-brand-coral">better outcomes</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 lg:gap-4">
              {/* Hero card */}
              <div className="sm:col-span-2 lg:col-span-3 lg:row-span-2 rounded-3xl bg-brand-white/4 border border-white/10 text-white p-8 lg:p-10 relative overflow-hidden flex flex-col justify-between min-h-80 lg:min-h-110">
                <div className="absolute -top-24 -right-24 w-[320px] h-80 rounded-full bg-brand-coral/20 blur-[100px] pointer-events-none" />

                <div className="relative">
                  <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold uppercase leading-[0.92] tracking-tight mb-6">
                    What better
                    <br />
                    data{" "}
                    <span className="text-brand-coral">changes</span>
                  </h2>
                  <p className="text-sm lg:text-base text-white/55 leading-relaxed max-w-sm">
                    Compensation decisions informed by live market data — not guesswork, not last
                    year's surveys. Every offer, every retention conversation, every board
                    presentation backed by real numbers.
                  </p>
                </div>

                <div className="relative flex flex-wrap items-center gap-4 mt-8 pt-8 border-t border-white/10">
                  {["200+ Tech Roles benchmarked", "30+ markets covered", "12 months of data", "10k+ compensation points"].map((tag, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50"
                    >
                      <span className="text-brand-coral mr-1.5">✦</span>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Benefit cards */}
              {BENEFITS.map((benefit, i) => {
                const Icon = benefit.icon
                return (
                  <div
                    key={i}
                    className="lg:col-span-3 rounded-3xl bg-brand-white/3 border border-white/10 p-7 lg:p-8 hover:bg-white/[0.07] hover:border-brand-coral/40 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden min-h-50 lg:min-h-52.5"
                  >
                    <span
                      aria-hidden
                      className="absolute top-5 right-6 text-[3rem] font-bold text-brand-white/6 leading-none pointer-events-none select-none"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="relative h-full flex flex-col">
                      <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-brand-coral/15 mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <Icon
                          className="w-5 h-5 text-brand-coral"
                          strokeWidth={1.7}
                        />
                      </div>
                      <h3 className="text-base font-bold uppercase tracking-tight text-white mb-2.5 group-hover:text-brand-coral transition-colors duration-200">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-white/45 leading-relaxed">
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

      {/* ── CTA: Dramatic finale ──────────────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative w-full px-3 sm:px-5 lg:px-10 pb-12 lg:pb-20">
          <div className="relative bg-brand-white rounded-3xl lg:rounded-[2.5rem] overflow-hidden">
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
              className="hidden lg:block absolute inset-x-0 -bottom-8 text-center text-[20rem] xl:text-[24rem] font-bold uppercase tracking-tighter text-brand-navy/3 leading-[0.8] pointer-events-none select-none whitespace-nowrap"
            >
              DATA
            </p>

            <div className="relative max-w-4xl mx-auto px-6 sm:px-10 py-20 lg:py-32 text-center">
              <div className="flex items-center justify-center gap-3 mb-6 lg:mb-8">
                <span className="block h-px w-10 bg-brand-coral" />
                <Eyebrow>{CTA_DATA.eyebrow}</Eyebrow>
                <span className="block h-px w-10 bg-brand-coral" />
              </div>

              <h2 className="text-[clamp(2.5rem,7vw,5.5rem)] font-bold uppercase leading-[0.92] tracking-tight text-brand-navy mb-6 lg:mb-8 text-balance">
                {CTA_DATA.title}
              </h2>

              <p className="text-base lg:text-lg text-brand-navy/60 leading-relaxed max-w-xl mx-auto mb-10 lg:mb-12">
                {CTA_DATA.description}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto animate-fade-in-up delay-300">
                <AppButton href={CTA_DATA.primaryButton.href} icon="arrow" className="sm:w-auto">
                  {CTA_DATA.primaryButton.text}
                </AppButton>
                 <AppButton href={CTA_DATA.lastCTA.href} variant="navy" icon="arrow" className="sm:w-auto">
                  {CTA_DATA.lastCTA.text}
                </AppButton>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
      < BackToTop hideOnMobile />
    </>
  )
}