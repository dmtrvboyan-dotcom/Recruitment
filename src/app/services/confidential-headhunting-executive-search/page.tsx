import type { Metadata } from "next"
import { ScrollReveal } from "@/components/layout"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  HERO_DATA,
  PROCESS_STEPS,
  SERVICE_CARDS,
  BENEFITS,
  INDUSTRIES,
  INDUSTRY_SECTORS,
  TRUST_ITEMS,
  CTA_DATA,
  ROLE_PRACTICES,
  PAGE_METADATA
} from "./data";

import { AppButton } from '@/components/ui/app-button';


export const metadata: Metadata = {
  title: PAGE_METADATA.title,
  description: PAGE_METADATA.description,
}


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


export default function ExecutiveSearchPage() {


  return (
    <>
      <section className="relative w-full bg-brand-navy overflow-hidden flex flex-col mt-20 sm:mt-5">
        {/* Coral glows */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-brand-coral/15 blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-60 -left-40 w-[500px] h-[500px] rounded-full bg-brand-coral/10 blur-[130px] pointer-events-none" />

        {/* Plus marks (decorative) */}
        <div aria-hidden className="absolute top-32 right-24 text-white/[0.08] text-3xl font-thin pointer-events-none hidden lg:block">+</div>
        <div aria-hidden className="absolute top-72 right-72 text-white/[0.06] text-xl font-thin pointer-events-none hidden lg:block">+</div>
        <div aria-hidden className="absolute bottom-44 right-44 text-white/[0.06] text-2xl font-thin pointer-events-none hidden lg:block">+</div>

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
              <AppButton href="#specialism" icon="arrow" className="sm:w-auto">
                Explore More
              </AppButton>
            </div>
          </div>
        </div>
      </section>

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

      {/* ── HOW WE DO IT: 2-column role grid ─────────────────────────────── */}
      <ScrollReveal>
        <section id="specialism" className="relative w-full bg-brand-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20 py-20 lg:py-32">
            {/* Centered header */}
            <div className="mb-12 lg:mb-16 text-center">
              <SectionIndicator index={1} label="Specialisms" centered />
              <h2 className="mt-8 text-[clamp(2.5rem,6vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-tight text-brand-navy">
                How we{" "}
                <span className="text-brand-coral">do it</span>
              </h2>
              <div className="flex items-center justify-center gap-3 mt-4">
                <div className="h-px w-10 bg-brand-coral" />
                <span className="text-[11px] font-mono text-brand-navy/40">
                  {String(SERVICE_CARDS.length).padStart(2, "0")} / {String(SERVICE_CARDS.length).padStart(2, "0")}
                </span>
                <div className="h-px w-10 bg-brand-coral" />
              </div>
              <p className="mt-4 text-brand-navy/45 text-sm max-w-sm mx-auto leading-relaxed">
                We operate at the principal level — every search run by a senior partner with direct skin in the game.
              </p>
            </div>

            {/* 2-column grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-t border-brand-navy/10 border-l border-brand-navy/10">
              {SERVICE_CARDS.map((card, i) => {
                const Icon = card.icon
                return (
                  <div
                    key={i}
                    className="group relative flex gap-3 sm:gap-5 p-6 lg:p-8 items-start border-b border-r border-brand-navy/10 hover:bg-brand-navy/[0.025] transition-all duration-500 ease-out overflow-hidden"
                  >
                    <div className="pt-1 shrink-0">
                      <span className="block text-[clamp(2rem,5vw,3.5rem)] font-bold text-brand-navy/[0.12] leading-none tracking-tighter group-hover:text-brand-coral transition-colors duration-500">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start gap-3 mb-3">
                        <div
                          className={`w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl ${card.iconBg} group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                        >
                          <Icon
                            className="w-5 h-5"
                            style={{ color: card.accent }}
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
          </div>
        </section>
      </ScrollReveal>

      {/* ── INDUSTRIES ────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative w-full bg-brand-navy py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20">
            <div className="mb-12 lg:mb-16 text-center">
              <SectionIndicator index={2} label="Sectors" centered />
              <h2 className="mt-8 text-[clamp(2.5rem,6vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-tight text-brand-white">
                When Companies Use{" "}
                <span className="text-brand-coral">Executive Search</span>
              </h2>
              <p className="mt-4 text-brand-white/45 text-sm max-w-md mx-auto leading-relaxed">
                Executive search only works when the recruiter genuinely understands the market. We've spent 15 years building that depth.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-t border-brand-white/10 border-l border-white-navy/10">
              {INDUSTRIES.map((item, i) => (
                <div
                  key={i}
                  className="group relative p-6 lg:p-8 border-b border-r border-brand-white/10 hover:bg-brand-white/[0.025] transition-all duration-300 overflow-hidden"
                >
                  {/* Ghost index */}
                  <span
                    aria-hidden
                    className="absolute top-4 right-5 text-[clamp(2rem,5vw,3.5rem)] font-bold text-brand-white/[0.07] leading-none pointer-events-none select-none group-hover:text-brand-coral/20 transition-colors duration-500"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-coral mb-4">
                    <span className="w-1 h-1 rounded-full bg-brand-coral inline-block" />
                    {item.roles}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-brand-white mb-2 leading-snug group-hover:text-brand-coral transition-colors duration-200">
                    {item.sector}
                  </h3>
                  <p className="text-[13px] text-brand-white/50 leading-relaxed">
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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto animate-fade-in-up delay-300 mt-12">
              <AppButton href={CTA_DATA.sectorsBtn.href} icon="arrow" className="sm:w-auto">
                {CTA_DATA.sectorsBtn.text}
              </AppButton>
              <AppButton variant="outline" href={CTA_DATA.sectorsBtnSecond.href} icon="arrow" className="sm:w-auto">
                {CTA_DATA.sectorsBtnSecond.text}
              </AppButton>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── ROLES WE PLACE ────────────────────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative w-full bg-brand-white overflow-hidden py-20 lg:py-32">
          {/* Glows */}
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-brand-coral/10 blur-[140px] pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-brand-coral/08 blur-[130px] pointer-events-none" />

          {/* Watermark */}
          <div
            aria-hidden
            className="absolute -top-6 right-0 text-[18vw] font-bold uppercase leading-none tracking-tighter text-white/[0.025] select-none pointer-events-none"
          >
            ROLES
          </div>

          <div className="relative max-w-7xl mx-auto px-5 sm:px-10 lg:px-20">
            {/* Header */}
            <div className="mb-12 lg:mb-16 text-center">
              <SectionIndicator index={3} label="Practices" tone="dark" centered />
              <h2 className="mt-8 text-[clamp(2.5rem,6vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-tight text-brand-navy">
                Roles we{" "}
                <span className="text-brand-coral">place</span>
              </h2>
              <div className="flex items-center justify-center gap-3 mt-4">
                <div className="h-px w-10 bg-brand-coral" />
                <span className="text-[11px] font-mono text-brand-navy/40">
                  {String(ROLE_PRACTICES.length).padStart(2, "0")} practices
                </span>
                <div className="h-px w-10 bg-brand-coral" />
              </div>
              <p className="mt-4 text-navy/45 text-sm max-w-md mx-auto leading-relaxed">
                Senior leadership search across every critical function — from the boardroom to the leadership layer that drives execution.
              </p>
            </div>

            <div className="space-y-0 border-t border-navy/10">
              {ROLE_PRACTICES.map((practice, i) => {
                const Icon = practice.icon
                return (
                  <div
                    key={i}
                    className="group relative border-b border-navy/10 hover:bg-navy/[0.04] transition-all duration-500 overflow-hidden"
                  >
                    {/* Coral left accent line on hover */}
                    <span
                      aria-hidden
                      className="absolute left-0 top-0 bottom-0 w-0.5 bg-brand-coral scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"
                    />

                    <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10 px-6 lg:px-8 py-8 lg:py-10">

                      {/* Left: number + icon + practice name */}
                      <div className="flex items-start gap-4 lg:w-72 shrink-0">
                        <span className="text-[clamp(2rem,4vw,3rem)] font-bold text-navy/[0.12] leading-none tracking-tighter group-hover:text-brand-coral/40 transition-colors duration-500 select-none w-14 shrink-0 pt-0.5">
                          {practice.number}
                        </span>
                        <div className="flex flex-col gap-3">
                          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-brand-coral/15 group-hover:bg-brand-coral/25 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shrink-0">
                            <Icon className="w-5 h-5 text-brand-coral" strokeWidth={1.7} />
                          </div>
                          <h3 className="text-base sm:text-lg font-bold text-navy leading-tight group-hover:text-brand-coral transition-colors duration-200">
                            {practice.practice}
                          </h3>
                        </div>
                      </div>

                      {/* Middle: description */}
                      <div className="lg:flex-1 lg:max-w-md">
                        <p className="text-[13px] sm:text-sm text-navy/50 leading-relaxed">
                          {practice.description}
                        </p>
                      </div>

                      {/* Right: role pills */}
                      <div className="lg:w-80 shrink-0">
                        <div className="flex flex-wrap gap-2">
                          {practice.roles.map((role, j) => (
                            <span
                              key={j}
                              className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1.5 rounded-full border border-navy/10 text-navy/55 group-hover:border-brand-coral/30 group-hover:text-navy/80 transition-all duration-300"
                            >
                              <span className="w-1 h-1 rounded-full bg-brand-coral/60 inline-block flex-shrink-0" />
                              {role}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── INDUSTRIES WE SERVE ───────────────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative w-full bg-brand-navy overflow-hidden py-20 lg:py-28">
          {/* Subtle glow behind grid */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-brand-coral/10 blur-[160px] pointer-events-none" />

          {/* Watermark */}
          <div
            aria-hidden
            className="absolute -bottom-8 left-0 text-[20vw] font-bold uppercase leading-none tracking-tighter text-white/[0.025] select-none pointer-events-none whitespace-nowrap"
          >
            SECTORS
          </div>

          <div className="relative max-w-7xl mx-auto px-5 sm:px-10 lg:px-20">
            {/* Header */}
            <div className="mb-12 lg:mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <SectionIndicator index={4} label="Industries" tone="dark" />
                <h2 className="mt-6 text-[clamp(2.5rem,6vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-tight text-white">
                  Industries we{" "}
                  <span className="text-brand-coral">serve</span>
                </h2>
              </div>
              <p className="text-white/40 text-sm max-w-xs leading-relaxed lg:text-right lg:pb-2">
                Sector-deep expertise built across 300+ senior mandates in the world's most competitive talent markets.
              </p>
            </div>

            {/* Icon grid — 5 across on desktop, 2 on mobile */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-0 border-t border-l border-white/10">
              {INDUSTRY_SECTORS.map((sector, i) => {
                const Icon = sector.icon
                return (
                  <div
                    key={i}
                    className="group relative flex flex-col items-start gap-3 p-5 lg:p-6 border-b border-r border-white/10 hover:bg-white/[0.04] transition-all duration-300 overflow-hidden cursor-default"
                  >
                    {/* Hover coral top bar */}
                    <span
                      aria-hidden
                      className="absolute left-0 top-0 right-0 h-0.5 bg-brand-coral scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                    />

                    {/* Ghost index */}
                    <span
                      aria-hidden
                      className="absolute bottom-3 right-4 text-[2.5rem] font-bold text-white/[0.04] leading-none pointer-events-none select-none group-hover:text-brand-coral/10 transition-colors duration-500"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Icon */}
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-brand-coral/10 border border-brand-coral/20 group-hover:bg-brand-coral/20 group-hover:border-brand-coral/40 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 shrink-0">
                      <Icon className="w-4.5 h-4.5 text-brand-coral" strokeWidth={1.6} />
                    </div>

                    {/* Name + description */}
                    <div>
                      <p className="text-[13px] font-bold text-white group-hover:text-brand-coral transition-colors duration-200 leading-tight mb-1.5">
                        {sector.name}
                      </p>
                      <p className="text-[11px] text-white/35 leading-relaxed group-hover:text-white/55 transition-colors duration-300">
                        {sector.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Footnote row */}
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
              <p className="text-[12px] text-white/30 leading-relaxed">
                Don't see your sector? We place senior leaders across all industries — speak with our team.
              </p>
              <AppButton href={CTA_DATA.primaryButton.href} icon="arrow" className="shrink-0">
                Discuss Your Search
              </AppButton>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── PROCESS: Horizontal timeline ──────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative w-full bg-brand-whtie overflow-hidden py-20 lg:py-32">
          {/* Glow */}
          <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-coral/12 blur-[140px] pointer-events-none" />

          {/* Watermark */}
          <div
            aria-hidden
            className="absolute -top-6 right-0 text-[18vw] font-bold uppercase leading-none tracking-tighter text-brand-navy/[0.025] select-none pointer-events-none"
          >
            METHOD
          </div>

          {/* Header */}
          <div className="relative w-full max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-20 mb-12 lg:mb-20">
            <div className="mb-8 lg:mb-10">
              <SectionIndicator index={5} label="HOW WE WORK" tone="dark" centered />
            </div>
            <div className="text-center">
              <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-tight text-brand-navy mb-4">
                Our search{" "}
                <span className="text-brand-coral">methodology</span>
              </h2>
              <p className="text-brand-navy/45 text-sm lg:text-base leading-relaxed max-w-xl mx-auto">
                A five-stage process refined across 300+ senior mandates.
              </p>
            </div>
          </div>

          {/* Grid */}
          <div className="relative w-full max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-20">
            {/* Connecting line (desktop) */}
            <div
              aria-hidden
              className="hidden lg:block absolute left-20 right-20 top-[54px] h-px bg-gradient-to-r from-transparent via-brand-coral/30 to-transparent pointer-events-none z-0"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
              {PROCESS_STEPS.map((step, i) => {
                const Icon = step.icon
                return (
                  <div key={i} className="relative">
                    {/* Node dot (desktop) */}
                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 -top-[calc(54px-8px)] w-4 h-4 rounded-full bg-brand-white border-2 border-brand-coral z-10 items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-coral" />
                    </div>

                    {/* Card */}
                    <div className="group relative rounded-2xl border border-navy/10 bg-navy/[0.04] backdrop-blur-sm p-6 lg:p-7 hover:bg-navy/[0.08] hover:border-brand-coral/40 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col overflow-hidden">
                      {/* Watermark step number */}
                      <span
                        aria-hidden
                        className="absolute -top-4 -right-2 text-[6rem] lg:text-[7rem] font-bold text-brand-navy/[0.04] leading-none pointer-events-none select-none"
                      >
                        {step.number}
                      </span>

                      <div className="relative">
                        <div className="flex items-center gap-3 mb-5">
                          <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-brand-coral/15 group-hover:bg-brand-coral/25 transition-colors duration-300 shrink-0">
                            <Icon className="w-5 h-5 text-brand-coral" strokeWidth={1.7} />
                          </div>
                          <div className="flex-1 h-px bg-brand-navy/10 group-hover:bg-brand-coral/40 transition-colors duration-300" />
                        </div>

                        <p className="text-[10px] font-bold text-brand-coral/80 uppercase tracking-[0.3em] mb-2">
                          STEP {step.number}
                        </p>
                        <h3 className="text-base lg:text-lg font-bold text-brand-navvy mb-3 leading-tight tracking-tight">
                          {step.title}
                        </h3>
                        <p className="text-[13px] text-brand-navy/45 leading-relaxed">
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

      {/* ── BENEFITS: Asymmetric bento ──────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative w-full bg-brand-navy py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20">
            <div className="mb-12 lg:mb-16 text-center">
              <SectionIndicator index={6} label="Why us" centered />
              <h2 className="mt-8 text-[clamp(2.5rem,6vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-tight text-brand-white">
                Precision <span className="text-brand-coral">hiring</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 lg:gap-4">
              {/* Hero card */}
              <div className="sm:col-span-2 lg:col-span-3 lg:row-span-2 rounded-3xl bg-brand-white text-brand-navy p-8 lg:p-10 relative overflow-hidden flex flex-col justify-between min-h-[320px] lg:min-h-[440px]">
                <div className="absolute -top-24 -right-24 w-[320px] h-[320px] rounded-full bg-brand-coral/20 blur-[100px] pointer-events-none" />

                <div className="relative">
                  <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold uppercase leading-[0.92] tracking-tight mb-6">
                    Built on two
                    <br />
                    <span className="text-brand-coral">decades of trust</span>
                  </h2>
                  <p className="text-sm lg:text-base text-brand-navy/60 leading-relaxed max-w-sm">
                    We don't compete on volume. Every mandate we accept gets a
                    senior partner's full attention from brief to onboarding —
                    and beyond.
                  </p>
                </div>

                <ul className="relative mt-8 space-y-2.5">
                  {[
                    "No junior handoffs — ever",
                    "Full confidentiality guaranteed",
                    "Off-market candidate access",
                    "Replacement guarantee included",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-[13px] text-brand-navy/60">
                      <span className="w-4 h-4 rounded-full bg-brand-coral/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-2.5 h-2.5 text-brand-coral" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefit cards */}
              {BENEFITS.map((benefit, i) => {
                const Icon = benefit.icon
                return (
                  <div
                    key={i}
                    className="lg:col-span-3 rounded-3xl bg-brand-white/[0.025] border border-brand-white/10 p-7 lg:p-8 hover:bg-brand-white/[0.045] hover:border-brand-coral/30 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden min-h-[200px] lg:min-h-[210px]"
                  >
                    <span
                      aria-hidden
                      className="absolute top-5 right-6 text-[3rem] font-bold text-brand-white/[0.06] leading-none pointer-events-none select-none"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="relative h-full flex flex-col">
                      <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-brand-coral/12 mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <Icon className="w-5 h-5 text-brand-coral" strokeWidth={1.7} />
                      </div>
                      <h3 className="text-lg font-bold text-brand-white mb-2.5 group-hover:text-brand-coral transition-colors duration-200">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-brand-white/55 leading-relaxed">
                        {benefit.body}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto animate-fade-in-up delay-300 mt-12">
            <AppButton href={CTA_DATA.whyUsBtn.href} icon="arrow" className="sm:w-auto">
              {CTA_DATA.whyUsBtn.text}
            </AppButton>
          </div>
        </section>
      </ScrollReveal>

      {/* ── CTA: Dramatic finale ────────────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative w-full px-3 sm:px-5 lg:px-10 pb-12 lg:pb-20">
          <div className="relative bg-brand-white rounded-3xl lg:rounded-[2.5rem] overflow-hidden">
          

            {/* Corner brackets */}
            <div aria-hidden className="absolute top-5 left-5 w-8 h-8 border-l-2 border-t-2 border-brand-coral/40 rounded-tl-xl pointer-events-none" />
            <div aria-hidden className="absolute top-5 right-5 w-8 h-8 border-r-2 border-t-2 border-brand-coral/40 rounded-tr-xl pointer-events-none" />
            <div aria-hidden className="absolute bottom-5 left-5 w-8 h-8 border-l-2 border-b-2 border-brand-coral/40 rounded-bl-xl pointer-events-none" />
            <div aria-hidden className="absolute bottom-5 right-5 w-8 h-8 border-r-2 border-b-2 border-brand-coral/40 rounded-br-xl pointer-events-none" />

            {/* Watermark */}
            <p
              aria-hidden
              className="hidden lg:block absolute inset-x-0 bottom-[-2rem] text-center text-[20rem] xl:text-[24rem] font-bold uppercase tracking-tighter text-brand-navy/[0.03] leading-[0.8] pointer-events-none select-none whitespace-nowrap"
            >
              EXEC
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
              </div>

            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  )
}