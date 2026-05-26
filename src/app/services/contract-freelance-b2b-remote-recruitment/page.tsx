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
} from "./data";
import { AppButton } from '@/components/ui/app-button';
import { BackToTop } from "@/components/navigation/back-to-top";

export const metadata: Metadata = {
  title: "Hire Contract & Freelance Developers | Start in 3–10 Days",
  description:
    "Pre-vetted contract developers and freelance programmers ready to join your team in days. Flexible contracts, no long-term commitment, immediate impact.",
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

export default function ContractHiringPage() {
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
            <h1 className="text-[clamp(3rem,9vw,7rem)] font-bold uppercase leading-[0.88] tracking-[-0.02em] text-white text-balance mb-8 lg:mb-12">
              {HERO_DATA.title}
            </h1>

            {/* Description */}
            <p className="text-base lg:text-lg text-white/65 leading-relaxed text-pretty max-w-2xl mx-auto mb-8 lg:mb-10">
              {HERO_DATA.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto animate-fade-in-up delay-300">
              <AppButton href={CTA_DATA.primaryButton.href} icon="arrow" className="sm:w-auto">
                {CTA_DATA.primaryButton.text}
              </AppButton>
              <AppButton href={CTA_DATA.secondaryButton.href} icon="arrow" variant="outline" className="sm:w-auto">
                {CTA_DATA.secondaryButton.text}
              </AppButton>


            </div>
          </div>
        </div>

        {/* Stats — editorial strip */}
        <div className="relative w-full  border-white/10">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 ">
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

      {/* ── WHY CONTRACT HIRING ───────────────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative w-full bg-brand-white py-20 lg:py-32 overflow-hidden">
          {/* Subtle diagonal fill */}
          <div
            className="absolute inset-y-0 right-0 w-1/2 lg:w-2/5 bg-brand-navy/2.5 -skew-x-6 origin-top-right pointer-events-none"
            aria-hidden
          />

          <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              {/* Left — heading block */}
              <div>
                <SectionIndicator index={1} label="Why contract hiring" />
                <h2 className="mt-8 text-[clamp(2rem,5vw,3.5rem)] font-bold uppercase leading-[0.92] tracking-tight text-brand-navy text-balance">
                  The fastest way to{" "}
                  <span className="text-brand-coral">strengthen</span> your team
                </h2>
                <p className="mt-5 text-sm lg:text-[15px] text-brand-navy/50 leading-relaxed max-w-md">
                  When deadlines are tight and permanent hiring takes too long, contract developers give you
                  experienced talent without the wait — or the commitment.
                </p>
              </div>

              {/* Right — benefit cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "Speed", detail: "Developers ready to start in 3–10 days" },
                  { label: "Flexibility", detail: "Scale your team up or down as needed" },
                  { label: "Immediate results", detail: "Jump into sprints and deliver from day one" },
                  { label: "Low risk", detail: "No long-term commitments or notice periods" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`group rounded-2xl border border-brand-navy/10 p-5 lg:p-6 bg-brand-white hover:border-brand-coral/40 hover:-translate-y-1 hover:shadow-sm transition-all duration-300 relative overflow-hidden ${i % 2 !== 0 ? "lg:mt-5" : ""
                      }`}
                  >
                    {/* Ghost index */}
                    <span
                      aria-hidden
                      className="absolute top-3 right-4 text-[3rem] font-bold text-brand-navy/5 leading-none pointer-events-none select-none"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-brand-coral mb-3">
                      {item.label}
                    </span>
                    <p className="text-[14px] lg:text-[15px] font-semibold text-brand-navy leading-snug group-hover:text-brand-coral transition-colors duration-200">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── SERVICES: 2-column role grid ─────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative w-full bg-brand-navy/2,5 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20">
            {/* Centered header */}
            <div className="mb-12 lg:mb-16 text-center">
              <SectionIndicator index={2} label="Specialisms" centered />
              <h2 className="mt-8 text-[clamp(2.5rem,6vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-tight text-brand-navy">
                Roles{" "}
                <span className="text-brand-coral">we fill</span>
              </h2>
              <div className="flex items-center justify-center gap-3 mt-4">
                <div className="h-px w-10 bg-brand-coral" />
                <span className="text-[11px] font-mono text-brand-navy/40">
                  {String(SERVICE_CARDS.length).padStart(2, "0")} / {String(SERVICE_CARDS.length).padStart(2, "0")}
                </span>
                <div className="h-px w-10 bg-brand-coral" />
              </div>
              <p className="mt-4 text-brand-navy/45 text-sm max-w-sm mx-auto leading-relaxed">
                100+ vetted developers across every major stack — available now, not months away.
              </p>
            </div>

            {/* Table-style list */}
            <div className="rounded-2xl overflow-hidden border border-brand-navy/10">
              {SERVICE_CARDS.map((card, i) => {
                const Icon = card.icon
                return (
                  <Link
                    key={i}
                    href={card.href}
                    className={`group grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 py-6 lg:py-8 px-6 lg:px-8 items-start transition-all duration-300 hover:bg-brand-coral/4 relative overflow-hidden ${i % 2 === 0 ? "bg-brand-white" : "bg-brand-navy/2"
                      } ${i < SERVICE_CARDS.length - 1 ? "border-b border-brand-navy/8" : ""}`}
                  >
                    {/* Animated coral underline */}
                    <span
                      aria-hidden
                      className="absolute left-0 right-0 bottom-0 h-px w-0 bg-brand-coral group-hover:w-full transition-all duration-700 ease-out"
                    />

                    {/* Index */}
                    <div className="md:col-span-1 hidden md:flex pt-1">
                      <span className="text-[13px] font-mono text-brand-navy/25 group-hover:text-brand-coral transition-colors duration-300">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Icon + Title */}
                    <div className="md:col-span-4 flex items-start gap-3 lg:gap-4">
                      <div
                        className={`w-9 h-9 lg:w-10 lg:h-10 shrink-0 flex items-center justify-center rounded-xl ${card.iconBg} group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                      >
                        <Icon className="w-4 h-4 lg:w-5 lg:h-5" style={{ color: card.accent }} strokeWidth={1.7} />
                      </div>
                      <h3 className="text-base lg:text-[17px] font-bold text-brand-navy leading-tight pt-1 lg:pt-1.5 group-hover:text-brand-coral transition-colors duration-200">
                        {card.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-4">
                      <p className="text-[13px] lg:text-[14px] text-brand-navy/50 leading-relaxed">
                        {card.description}
                      </p>
                    </div>

                    {/* Tags + Arrow */}
                    <div className="md:col-span-3 flex flex-wrap items-start gap-2 md:justify-end">
                      {card.tags.map((tag, j) => (
                        <span
                          key={j}
                          className="text-[11px] font-semibold px-3 py-1 rounded-full bg-brand-navy/5 text-brand-navy/65 group-hover:bg-brand-coral/10 group-hover:text-brand-coral transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                      <ArrowUpRight className="w-4 h-4 text-brand-navy/20 group-hover:text-brand-coral group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 mt-0.5" />
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── PROCESS: Timeline grid ────────────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative w-full bg-brand-navy overflow-hidden py-20 lg:py-32">
          {/* Glow */}
          <div className="absolute top-1/2 left-1/3 w-150 h-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-coral/12 blur-[140px] pointer-events-none" />

          {/* Watermark */}
          <div
            aria-hidden
            className="absolute -top-6 right-0 text-[18vw] font-bold uppercase leading-none tracking-tighter text-white/2.5 select-none pointer-events-none"
          >
            METHOD
          </div>

          {/* Header */}
          <div className="relative w-full max-w-400 mx-auto px-5 sm:px-10 lg:px-20 mb-12 lg:mb-20">
            <div className="mb-8 lg:mb-10">
              <SectionIndicator index={3} label="HOW WE WORK" tone="dark" centered />
            </div>
            <div className="text-center">
              <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-tight text-brand-white mb-4">
                From brief to hired{" "}
                <span className="text-brand-coral">in days</span>
              </h2>
              <p className="text-white/45 text-sm lg:text-base leading-relaxed max-w-xl mx-auto">
                A five-step process built for speed — without cutting corners on quality.
              </p>
            </div>
          </div>

          {/* Cards grid */}
          <div className="relative w-full max-w-400 mx-auto px-5 sm:px-10 lg:px-20">
            {/* Connecting line (desktop) */}
            <div
              aria-hidden
              className="hidden lg:block absolute left-20 right-20 top-13.5 h-px bg-linear-to-r from-transparent via-brand-coral/30 to-transparent pointer-events-none z-0"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
              {PROCESS_STEPS.map((step, i) => {
                const Icon = step.icon
                return (
                  <div key={i} className="relative">
                    {/* Node dot (desktop) */}
                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 -top-11.5 w-4 h-4 rounded-full bg-brand-navy border-2 border-brand-coral z-10 items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-coral" />
                    </div>

                    {/* Card */}
                    <div className="group relative rounded-2xl border border-white/10 bg-brand-white/4 backdrop-blur-sm p-6 lg:p-7 hover:bg-brand-white/4 hover:border-brand-coral/40 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col overflow-hidden">
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
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto animate-fade-in-up delay-300 mt-12">
            <AppButton href={CTA_DATA.methodCTA.href} icon="arrow" className="sm:w-auto">
              {CTA_DATA.methodCTA.text}
            </AppButton>
            <AppButton href={CTA_DATA.secondMethodCTA.href} variant="outline" icon="arrow" className="sm:w-auto">
              {CTA_DATA.secondMethodCTA.text}
            </AppButton>
          </div>
        </section>
      </ScrollReveal>

      {/* ── BENEFITS: Asymmetric bento ──────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative w-full bg-brand-white py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20">
            <div className="mb-12 lg:mb-16 text-center">
              <SectionIndicator index={4} label="Our advantage" centered />
              <h2 className="mt-8 text-[clamp(2.5rem,6vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-tight text-brand-navy">
                Why teams{" "}
                <span className="text-brand-coral">choose us</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 lg:gap-4">
              {/* Hero card */}
              <div className="sm:col-span-2 lg:col-span-3 lg:row-span-2 rounded-3xl bg-brand-navy text-white p-8 lg:p-10 relative overflow-hidden flex flex-col justify-between min-h-80 lg:min-h-110">
                <div className="absolute -top-24 -right-24 w-[320px] h-80 rounded-full bg-brand-coral/20 blur-[100px] pointer-events-none" />

                <div className="relative">
                  <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold uppercase leading-[0.92] tracking-tight mb-6">
                    Why teams
                    <br />
                    <span className="text-brand-coral">choose us</span>
                  </h2>
                  <p className="text-sm lg:text-base text-white/60 leading-relaxed max-w-sm">
                    We don't compete on volume. Every brief we take on gets
                    expert attention — from first call to the developer's first
                    day.
                  </p>
                </div>

                {/* Pill footer */}
                <div className="relative mt-8 flex flex-wrap gap-3">
                  {[
                    "No hire, no commitment",
                    "Hourly, weekly, or project-based",
                    "Scale anytime",
                  ].map((item, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-2 text-[11px] font-semibold text-white/60 bg-white/5 border border-white/10 rounded-full px-3 py-1.5"
                    >
                      <span className="w-1 h-1 rounded-full bg-brand-coral inline-block shrink-0" />
                      {item}
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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto animate-fade-in-up delay-300 mt-12">
            <AppButton href={CTA_DATA.advantageCTA.href} icon="arrow" className="sm:w-auto">
              {CTA_DATA.advantageCTA.text}
            </AppButton>
           
          </div>
        </section>
      </ScrollReveal>

      {/* ── CTA: Dramatic finale ────────────────────────────────────────── */}
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
              CONTRACT
            </p>

            <div className="relative max-w-4xl mx-auto px-6 sm:px-10 py-20 lg:py-32 text-center">
              <div className="flex items-center justify-center gap-3 mb-6 lg:mb-8">
                <span className="block h-px w-10 bg-brand-coral" />
                <Eyebrow>{CTA_DATA.eyebrow}</Eyebrow>
                <span className="block h-px w-10 bg-brand-coral" />
              </div>

              <h2 className="text-[clamp(2.5rem,7vw,5.5rem)] font-bold uppercase leading-[0.92] tracking-tight text-white mb-6 lg:mb-8 text-balance">
                {CTA_DATA.title}
              </h2>

              <p className="text-base lg:text-lg text-white/60 leading-relaxed max-w-xl mx-auto mb-10 lg:mb-12">
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
      < BackToTop hideOnMobile />
    </>
  )
}