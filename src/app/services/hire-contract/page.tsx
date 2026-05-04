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
    title: "Hire Contract & Freelance Developers | Start in 3–10 Days",
    description:
        "Pre-vetted contract developers and freelance programmers ready to join your team in days. Flexible contracts, no long-term commitment, immediate impact.",
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
    return (
        <p className={`text-xs font-semibold uppercase tracking-[0.2em] mb-3 ${light ? "text-brand-coral/80" : "text-brand-coral"}`}>
            {children}
        </p>
    )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ContractHiringPage() {
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

            {/* ── Why contract hiring — angled band ─────────────────────────────── */}
            <ScrollReveal>
                <section className="py-16 lg:py-28 relative overflow-hidden">
                    {/* Diagonal accent stripe */}
                    <div
                        className="absolute inset-y-0 right-0 w-1/2 lg:w-2/5 bg-brand-navy/[0.03] -skew-x-6 origin-top-right pointer-events-none"
                        aria-hidden
                    />
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                            {/* Left: heading block */}
                            <div>
                                <Eyebrow>Why contract hiring</Eyebrow>
                                <h2 className="text-2xl lg:text-4xl font-semibold text-brand-navy tracking-tight mb-5 lg:mb-7 text-balance">
                                    The fastest way to strengthen your team
                                </h2>
                                <p className="text-sm lg:text-[15px] text-brand-navy/50 leading-relaxed max-w-md">
                                    When deadlines are tight and permanent hiring takes too long, contract developers give you
                                    experienced talent without the wait — or the commitment.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { label: "Speed", detail: "Developers ready to start in 3–10 days" },
                                    { label: "Flexibility", detail: "Scale your team up or down as needed" },
                                    { label: "Immediate results", detail: "Jump into sprints and deliver from day one" },
                                    { label: "Low risk", detail: "No long-term commitments or notice periods" },
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className={`rounded-2xl border border-brand-navy/10 p-5 lg:p-6 bg-brand-white hover:border-brand-coral/40 hover:shadow-sm transition-all duration-300 ${i % 2 !== 0 ? "lg:mt-5" : ""
                                            }`}
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
                <section className="py-16 lg:py-28 bg-brand-navy/[0.025]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

                        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-6 mb-10 lg:mb-16">
                            <div>
                                <Eyebrow>Specialisms</Eyebrow>
                                <h2 className="text-2xl lg:text-4xl font-semibold text-brand-navy tracking-tight">
                                    Roles we fill
                                </h2>
                            </div>
                            <p className="text-brand-navy/45 text-sm lg:text-[15px] max-w-sm leading-relaxed">
                                100+ vetted developers across every major stack — available now, not months away.
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

            {/* ── Process — horizontal timeline on desktop ───────────────────────── */}
            <ScrollReveal>
                <section className="py-16 lg:py-28 bg-brand-navy">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-6 mb-12 lg:mb-20">
                            <div>
                                <p className="text-xs font-semibold text-brand-coral/80 uppercase tracking-[0.2em] mb-3">
                                    HOW WE WORK
                                </p>
                                <h2 className="text-2xl lg:text-4xl font-semibold text-brand-white tracking-tight">
                                    From brief to hired in days
                                </h2>
                            </div>
                            <p className="text-brand-white/35 text-sm lg:text-[15px] max-w-xs leading-relaxed">
                                A five-step process built for speed — without cutting corners on quality.
                            </p>
                        </div>

                        {/* Timeline: horizontal connector line on lg, vertical on mobile */}
                        <div className="relative">
                            {/* Horizontal connector — desktop only */}
                            <div
                                className="hidden lg:block absolute top-[2.25rem] left-0 right-0 h-px bg-brand-white/10"
                                aria-hidden
                            />

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
                                {PROCESS_STEPS.map((step, i) => {
                                    const Icon = step.icon
                                    return (
                                        <div key={i} className="relative flex flex-col">
                                            {/* Step dot / icon badge */}
                                            <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-0 mb-4 lg:mb-6">
                                                <div className="relative z-10 w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-full border border-brand-white/15 bg-brand-navy">
                                                    <Icon className="w-4 h-4 text-brand-coral" />
                                                </div>
                                                {/* Mobile: step label beside icon */}
                                                <span className="text-[11px] font-semibold text-brand-coral/60 uppercase tracking-widest lg:hidden">
                                                    Step {step.number}
                                                </span>
                                            </div>

                                            {/* Step label — desktop below dot */}
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

            {/* ── Benefits — large split with accent numbers ─────────────────────── */}
            <ScrollReveal>
                <section className="py-16 lg:py-28">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

                        <div className="mb-10 lg:mb-16">
                            <Eyebrow>Our advantage</Eyebrow>
                            <h2 className="text-2xl lg:text-4xl font-semibold text-brand-navy tracking-tight text-balance max-w-lg">
                                Why teams choose us for contract hiring
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
                                        {/* Large decorative number */}
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

                        {/* Inline proof strip */}
                        <div className="mt-8 lg:mt-10 flex flex-wrap gap-6 lg:gap-10 items-center">
                            {[
                                "No hire, no commitment",
                                "Hourly, weekly, or project-based",
                                "Scale up or wind down anytime",
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

                    {/* Decorative large text */}
                    <p
                        className="hidden lg:block absolute inset-x-0 top-1/2 -translate-y-1/2 text-center text-[16rem] font-semibold text-brand-white/[0.03] leading-none pointer-events-none select-none whitespace-nowrap overflow-hidden"
                        aria-hidden
                    >
                        CONTRACT
                    </p>

                    {/* Decorative coral arc */}
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
                            <Link
                                href={CTA_DATA.secondaryButton.href}
                                className="text-sm font-medium text-brand-white/40 hover:text-brand-white transition-colors underline underline-offset-4 py-2"
                            >
                                {CTA_DATA.secondaryButton.text}
                            </Link>
                        </div>
                    </div>
                </section>
            </ScrollReveal>
        </>
    )
}
