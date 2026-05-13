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
    REGIONS,
    TRUST_ITEMS,
    CTA_DATA,
} from "./data"

export const metadata: Metadata = {
  title: "Remote IT Hiring & Global Talent | Worldwide Tech Recruitment",
  description:
    "Expand your hiring reach with remote IT recruitment and global talent solutions. We help businesses connect with skilled tech professionals worldwide for remote roles, distributed teams, and international growth.",
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
    return (
        <p className={`text-xs font-semibold uppercase tracking-[0.2em] mb-3 ${light ? "text-brand-coral/80" : "text-brand-coral"}`}>
            {children}
        </p>
    )
}


export default function RemoteHiringPage() {
    return (
        <>
            {/* ── HERO ── design unchanged ──────────────────────────────────────── */}
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

            {/* ── WHY REMOTE GLOBAL HIRING ──────────────────────────────────────── */}
            <ScrollReveal>
                <section className="py-16 lg:py-28 relative overflow-hidden">
                    {/* Subtle dot-grid background */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            backgroundImage: "radial-gradient(circle, rgba(8,86,137,0.06) 1px, transparent 1px)",
                            backgroundSize: "28px 28px",
                        }}
                        aria-hidden
                    />
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                            <div>
                                <Eyebrow>Why global remote hiring</Eyebrow>
                                <h2 className="text-2xl lg:text-4xl font-semibold text-brand-navy tracking-tight mb-5 lg:mb-7 text-balance">
                                    The best engineers aren't always in your city
                                </h2>
                                <p className="text-sm lg:text-[15px] text-brand-navy/50 leading-relaxed max-w-md">
                                    Limiting hiring to a single geography means missing 95% of available talent.
                                    Remote-first companies consistently outperform on engineering quality —
                                    because they hire the best person, not just the closest one.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { label: "Wider talent pool", detail: "Access senior engineers in countries, invisible to local searches" },
                                    { label: "Lower hiring costs", detail: "Competitive global rates without compromising on seniority or output" },
                                    { label: "Round-the-clock coverage", detail: "Strategically placed time zones mean your product never stops moving" },
                                    { label: "Proven remote culture", detail: "We only place engineers with a demonstrable track record of async excellence" },
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className={`rounded-2xl border border-brand-navy/10 p-5 lg:p-6 bg-brand-white hover:border-brand-coral/40 hover:shadow-sm transition-all duration-300 ${i % 2 !== 0 ? "lg:mt-5" : ""}`}
                                    >
                                        <span className="inline-block text-[10px] font-semibold uppercase tracking-widest text-brand-coral mb-3">
                                            {item.label}
                                        </span>
                                        <p className="text-[14px] lg:text-[15px] font-medium text-brand-navy leading-snug">
                                            {item.detail}
                                        </p>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <ScrollReveal>
                <section className="py-16 lg:py-24 bg-brand-navy">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

                        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-6 mb-10 lg:mb-14">
                            <div>
                                <p className="text-xs font-semibold text-brand-coral/80 uppercase tracking-[0.2em] mb-3">
                                    WHERE WE HIRE FROM
                                </p>
                                <h2 className="text-2xl lg:text-4xl font-semibold text-brand-white tracking-tight">
                                    Global reach. Curated talent.
                                </h2>
                            </div>
                            <p className="text-brand-white/35 text-sm lg:text-[15px] max-w-xs leading-relaxed">
                                Deep networks across four major remote talent regions — each with its own strengths, time zone advantages, and technical expertise.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
                            {REGIONS.map((region, i) => (
                                <div
                                    key={i}
                                    className="group relative rounded-2xl border border-brand-white/10 bg-brand-white/[0.04] hover:bg-brand-white/[0.08] hover:border-brand-coral/30 transition-all duration-300 p-6 lg:p-7 overflow-hidden"
                                >
                                    <span
                                        className="absolute top-3 right-4 text-[4.5rem] font-semibold text-brand-white/[0.04] leading-none select-none pointer-events-none"
                                        aria-hidden
                                    >
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <div className="relative">
                                        <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-brand-coral/70 mb-4">
                                            <span className="w-1 h-1 rounded-full bg-brand-coral inline-block" />
                                            {region.overlap}
                                        </span>
                                        <h3 className="text-[15px] lg:text-base font-semibold text-brand-white mb-2 leading-snug">
                                            {region.region}
                                        </h3>
                                        <p className="text-[12px] lg:text-[13px] text-brand-white/35 leading-relaxed">
                                            {region.highlights}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>
            </ScrollReveal>

            {/* ── ROLES WE FILL ─────────────────────────────────────────────────── */}
            <ScrollReveal>
                <section className="py-16 lg:py-28 bg-brand-navy/[0.025]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

                        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-6 mb-10 lg:mb-16">
                            <div>
                                <Eyebrow>Specialisms</Eyebrow>
                                <h2 className="text-2xl lg:text-4xl font-semibold text-brand-navy tracking-tight">
                                    Remote roles we fill globally
                                </h2>
                            </div>
                            <p className="text-brand-navy/45 text-sm lg:text-[15px] max-w-sm leading-relaxed">
                                Every candidate is screened for both technical depth and the async communication skills that distributed teams actually need.
                            </p>
                        </div>

                        <div className="rounded-2xl overflow-hidden border border-brand-navy/10">
                            {SERVICE_CARDS.map((card, i) => {
                                const Icon = card.icon
                                return (
                                    <div
                                        key={i}
                                        className={`group grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 py-6 lg:py-8 px-6 lg:px-8 items-start transition-colors duration-300 hover:bg-brand-coral/[0.04] ${i % 2 === 0 ? "bg-brand-white" : "bg-brand-navy/[0.02]"
                                            } ${i < SERVICE_CARDS.length - 1 ? "border-b border-brand-navy/08" : ""}`}
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

            {/* ── HOW WE WORK ───────────────────────────────────────────────────── */}
            <ScrollReveal>
                <section className="py-16 lg:py-28 bg-brand-navy">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-6 mb-12 lg:mb-20">
                            <div>
                                <p className="text-xs font-semibold text-brand-coral/80 uppercase tracking-[0.2em] mb-3">
                                    HOW WE WORK
                                </p>
                                <h2 className="text-2xl lg:text-4xl font-semibold text-brand-white tracking-tight">
                                    From brief to hired across borders
                                </h2>
                            </div>
                            <p className="text-brand-white/35 text-sm lg:text-[15px] max-w-xs leading-relaxed">
                                A five-step global hiring process — rigorous enough for permanent remote hires, fast enough not to lose great candidates.
                            </p>
                        </div>

                        <div className="relative">
                            <div
                                className="hidden lg:block absolute top-[2.25rem] left-0 right-0 h-px bg-brand-white/10"
                                aria-hidden
                            />

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
                                {PROCESS_STEPS.map((step, i) => {
                                    const Icon = step.icon
                                    return (
                                        <div key={i} className="relative flex flex-col">
                                            <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-0 mb-4 lg:mb-6">
                                                <div className="relative z-10 w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-full border border-brand-white/15 bg-brand-navy">
                                                    <Icon className="w-4 h-4 text-brand-coral" />
                                                </div>
                                                <span className="text-[11px] font-semibold text-brand-coral/60 uppercase tracking-widest lg:hidden">
                                                    Step {step.number}
                                                </span>
                                            </div>

                                            <span className="hidden lg:block text-[11px] font-semibold text-brand-coral/60 uppercase tracking-widest mb-3">
                                                Step {step.number}
                                            </span>

                                            <h3 className="text-[15px] font-semibold text-brand-white mb-2 leading-tight">
                                                {step.title}
                                            </h3>
                                            <p className="text-[13px] text-brand-white/40 leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* ── OUR ADVANTAGE ─────────────────────────────────────────────────── */}
            <ScrollReveal>
                <section className="py-16 lg:py-28">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

                        <div className="mb-10 lg:mb-16">
                            <Eyebrow>Our advantage</Eyebrow>
                            <h2 className="text-2xl lg:text-4xl font-semibold text-brand-navy tracking-tight text-balance max-w-lg">
                                Why companies trust us with global remote hiring
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-brand-navy/10 rounded-2xl overflow-hidden border border-brand-navy/10">
                            {BENEFITS.map((benefit, i) => {
                                const Icon = benefit.icon
                                return (
                                    <div
                                        key={i}
                                        className="relative bg-brand-white p-7 lg:p-10 hover:bg-brand-navy/[0.02] transition-colors duration-300 group overflow-hidden"
                                    >
                                        <span
                                            className="absolute top-4 right-6 text-[4rem] lg:text-[5rem] font-semibold text-brand-navy/[0.04] leading-none select-none pointer-events-none"
                                            aria-hidden
                                        >
                                            {String(i + 1).padStart(2, "0")}
                                        </span>

                                        <div className="relative">
                                            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-brand-coral/10 mb-5">
                                                <Icon className="w-5 h-5 text-brand-coral" />
                                            </div>
                                            <h3 className="text-[16px] font-semibold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors duration-200">
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

                        <div className="mt-8 lg:mt-10 flex flex-wrap gap-6 lg:gap-10 items-center">
                            {[
                                "International contracts handled",
                                "Payroll & compliance included",
                                "Ongoing support post-placement",
                            ].map((item, i) => (
                                <span key={i} className="flex items-center gap-2 text-[13px] text-brand-navy/45">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-coral inline-block flex-shrink-0" />
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* ── CTA ───────────────────────────────────────────────────────────── */}
            <ScrollReveal>
                <section className="py-16 lg:py-32 mb-8 lg:mb-16 mx-3 sm:mx-4 lg:mx-10 rounded-2xl lg:rounded-3xl bg-brand-navy overflow-hidden relative">

                    <p
                        className="hidden lg:block absolute inset-x-0 top-1/2 -translate-y-1/2 text-center text-[16rem] font-semibold text-brand-white/[0.03] leading-none pointer-events-none select-none whitespace-nowrap overflow-hidden"
                        aria-hidden
                    >
                        GLOBAL
                    </p>

                    <div
                        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full border border-brand-coral/10 pointer-events-none"
                        aria-hidden
                    />
                    <div
                        className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full border border-brand-coral/8 pointer-events-none"
                        aria-hidden
                    />

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
