import type { Metadata } from "next"
import Link from "next/link"
import { ScrollReveal } from "@/components/layout"
import { ArrowUpRight } from "lucide-react"
import { AppButton } from "@/components/ui/app-button"
import { BackToTop } from "@/components/navigation/back-to-top"

import {
    HERO_DATA,
    STATS,
    PROCESS_STEPS,
    ROLE_CARDS,
    BENEFITS,
    TRUST_ITEMS,
    CTA_DATA,
} from "./data"

export const metadata: Metadata = {
    title: "Dedicated Development Teams Bulgaria | Staff Augmentation | Recruitment.bg",
    description:
        "Build a dedicated development team in Bulgaria with full legal, payroll and HR support. Predictable costs, zero admin overhead. Engineers integrated directly into your organisation.",
    keywords: [
        "dedicated development team Bulgaria",
        "staff augmentation Bulgaria",
        "hire developers Bulgaria",
        "IT team extension Bulgaria",
        "software development team Bulgaria",
        "remote team Bulgaria",
        "tech team augmentation Eastern Europe",
    ],
    authors: [{ name: "Recruitment.bg" }],
    openGraph: {
        title: "Dedicated Development Teams Bulgaria | Recruitment.bg",
        description:
            "Build a dedicated dev team in Bulgaria. Full payroll, legal and HR handled. Integrated into your org from day one.",
        url: "https://recruitment.bg/services/dedicated-development-teams",
        siteName: "Recruitment.bg",
        type: "website",
        locale: "en_BG",
    },
    twitter: {
        card: "summary_large_image",
        title: "Dedicated Development Teams Bulgaria | Recruitment.bg",
        description: "Staff augmentation & dedicated teams in Bulgaria. Zero admin, predictable costs.",
    },
    alternates: {
        canonical: "https://recruitment.bg/services/dedicated-development-teams",
    },
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
    const muted = tone === "dark" ? "text-brand-white/30" : "text-brand-navy/30"
    const line = tone === "dark" ? "bg-brand-white/15" : "bg-brand-navy/15"

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

export default function DedicatedTeamsPage() {
    return (
        <>
            {/* ── HERO ──────────────────────────────────────────────────────────── */}
            <section className="relative w-full bg-brand-navy overflow-hidden flex flex-col mt-20 sm:mt-5">
                {/* Glows */}
                <div className="absolute -top-40 -right-40 w-150 h-150 rounded-full bg-brand-coral/15 blur-[140px] pointer-events-none" />
                <div className="absolute -bottom-60 -left-40 w-125 h-125 rounded-full bg-brand-coral/10 blur-[130px] pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 rounded-full bg-brand-teal/8 blur-[120px] pointer-events-none" />

                {/* Decorative plus marks */}
                <div aria-hidden className="absolute top-32 right-24 text-brand-white/8 text-3xl font-thin pointer-events-none hidden lg:block">+</div>
                <div aria-hidden className="absolute top-72 right-72 text-brand-white/6 text-xl font-thin pointer-events-none hidden lg:block">+</div>
                <div aria-hidden className="absolute bottom-44 left-44 text-brand-white/6 text-2xl font-thin pointer-events-none hidden lg:block">+</div>

                {/* Vertical text rail */}
                <div className="hidden lg:flex absolute left-7 top-1/2 -translate-y-1/2 flex-col items-center gap-6 pointer-events-none z-10">
                    <div className="h-16 w-px bg-brand-white/15" />
                    <span
                        className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-white/40 whitespace-nowrap"
                        style={{ writingMode: "vertical-rl" }}
                    >
                        {HERO_DATA.eyebrow}
                    </span>
                    <div className="h-16 w-px bg-brand-white/15" />
                </div>

                {/* Main content */}
                <div className="relative flex-1 w-full pt-32 lg:pt-44 pb-12 lg:pb-20">
                    <div className="w-full max-w-5xl mx-auto px-5 sm:px-10 lg:px-20 text-center">
                        <div className="flex items-center justify-center gap-3 mb-6 lg:mb-8">
                            <span className="block h-px w-12 bg-brand-coral" />
                            <Eyebrow>{HERO_DATA.tagline}</Eyebrow>
                            <span className="block h-px w-12 bg-brand-coral" />
                        </div>

                        <h1 className="text-[clamp(3rem,9vw,5rem)] font-bold uppercase leading-[0.88] tracking-[-0.02em] text-brand-white text-balance mb-8 lg:mb-12">
                            {HERO_DATA.title}
                        </h1>

                        <p className="text-base lg:text-lg text-brand-white/65 leading-relaxed text-pretty max-w-2xl mx-auto mb-8 lg:mb-10">
                            {HERO_DATA.description}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
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
                <div className="relative w-full border-t border-brand-white/8">
                    <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20">
                        <div className="grid grid-cols-2 lg:grid-cols-4">
                            {STATS.map((stat, i) => (
                                <div
                                    key={i}
                                    className={`py-8 lg:py-12 px-4 sm:px-6 group ${i >= 2 ? "border-t lg:border-t-0 border-white/10" : ""
                                        } ${i > 0 ? "border-l border-white/10" : ""}`}
                                >
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-[10px] font-mono text-brand-coral/80">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        <div className="h-px w-6 bg-brand-white/20" />
                                    </div>
                                    <p className="text-2xl lg:text-4xl xl:text-5xl font-bold text-brand-white tracking-tight leading-none mb-3 group-hover:text-brand-coral transition-colors duration-300">
                                        {stat.value}
                                    </p>
                                    <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-brand-white/45 leading-snug">
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
                            className="inline-flex items-center gap-3 sm:gap-4 px-5 sm:px-8 text-[11px] sm:text-[13px] font-semibold text-brand-white uppercase tracking-[0.15em]"
                        >
                            <span className="text-brand-white/50">✦</span>
                            {item.text}
                        </span>
                    ))}
                </div>
            </div>

            {/* ── HOW IT WORKS: What's included ────────────────────────────────── */}
            <ScrollReveal>
                <section className="relative w-full bg-brand-white py-20 lg:py-32 overflow-hidden">
                    <div
                        aria-hidden
                        className="absolute -right-20 top-1/4 text-[18vw] font-bold uppercase leading-none tracking-tighter text-brand-navy/3 select-none pointer-events-none"
                    >
                        TEAM
                    </div>

                    <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20">
                        <div className="mb-14 lg:mb-20">
                            <SectionIndicator index={1} label="What's included" centered />
                            <h2 className="mt-8 text-[clamp(2.5rem,6vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-tight text-brand-navy text-center">
                                Everything <span className="text-brand-coral">handled</span> for you
                            </h2>
                            <p className="text-center text-brand-navy/50 text-sm lg:text-base leading-relaxed max-w-xl mx-auto mt-5">
                                From finding the right engineers to keeping them employed, paid and performing — we own the operational layer entirely.
                            </p>
                        </div>

                        {/* Bento grid — 3 columns */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">

                            {/* Feature card — recruitment */}
                            <div className="md:col-span-2 relative rounded-3xl bg-brand-navy text-brand-white p-8 lg:p-10 overflow-hidden min-h-64 flex flex-col justify-between group">
                                <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-brand-coral/20 blur-[100px] pointer-events-none" />
                                <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-brand-teal/10 blur-[80px] pointer-events-none" />
                                <div className="relative">
                                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-coral mb-4 block">01</span>
                                    <h3 className="text-2xl lg:text-3xl font-bold text-brand-white leading-tight mb-3">
                                        Recruitment &<br />talent sourcing
                                    </h3>
                                    <p className="text-sm text-brand-white/60 leading-relaxed max-w-sm">
                                        We map the Bulgarian and Eastern European talent market, headhunt the right engineers and manage the entire vetting and interview process.
                                    </p>
                                </div>
                                <div className="relative mt-8 flex items-center gap-3">
                                    <div className="h-px flex-1 bg-brand-white/10 group-hover:bg-brand-coral/40 transition-colors duration-500" />
                                    <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-brand-white/30">Active search · Passive candidates · Technical vetting</span>
                                </div>
                            </div>

                            {/* Employment & payroll */}
                            <div className="relative rounded-3xl bg-brand-navy/4 border border-brand-navy/10 p-7 lg:p-8 overflow-hidden group hover:border-brand-coral/30 hover:-translate-y-1 transition-all duration-300">
                                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-coral mb-4 block">02</span>
                                <h3 className="text-xl font-bold text-brand-navy mb-3 leading-tight">Employment & payroll</h3>
                                <p className="text-sm text-brand-navy/60 leading-relaxed">
                                    Engineers are employed under our legal entity. We handle contracts, salaries, taxes and social contributions — fully compliant, every month.
                                </p>
                                <div
                                    aria-hidden
                                    className="absolute bottom-4 right-5 text-[4rem] font-bold text-brand-navy/5 leading-none pointer-events-none select-none"
                                >
                                    02
                                </div>
                            </div>

                            {/* Legal compliance */}
                            <div className="relative rounded-3xl bg-brand-navy/4 border border-brand-navy/10 p-7 lg:p-8 overflow-hidden group hover:border-brand-coral/30 hover:-translate-y-1 transition-all duration-300">
                                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-coral mb-4 block">03</span>
                                <h3 className="text-xl font-bold text-brand-navy mb-3 leading-tight">Legal compliance</h3>
                                <p className="text-sm text-brand-navy/60 leading-relaxed">
                                    Bulgarian labor law, tax obligations and employment regulations handled without you needing to understand a single local requirement.
                                </p>
                                <div
                                    aria-hidden
                                    className="absolute bottom-4 right-5 text-[4rem] font-bold text-brand-navy/5 leading-none pointer-events-none select-none"
                                >
                                    03
                                </div>
                            </div>

                            {/* HR & team management */}
                            <div className="relative rounded-3xl bg-brand-navy/4 border border-brand-navy/10 p-7 lg:p-8 overflow-hidden group hover:border-brand-coral/30 hover:-translate-y-1 transition-all duration-300">
                                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-coral mb-4 block">04</span>
                                <h3 className="text-xl font-bold text-brand-navy mb-3 leading-tight">HR & team management</h3>
                                <p className="text-sm text-brand-navy/60 leading-relaxed">
                                    Ongoing HR support — performance reviews, retention strategy, team wellbeing and people operations — so you never manage HR locally.
                                </p>
                                <div
                                    aria-hidden
                                    className="absolute bottom-4 right-5 text-[4rem] font-bold text-brand-navy/5 leading-none pointer-events-none select-none"
                                >
                                    04
                                </div>
                            </div>

                            {/* Integration — feature card */}
                            <div className="md:col-span-1 relative rounded-3xl bg-brand-coral text-brand-white p-8 lg:p-10 overflow-hidden min-h-56 flex flex-col justify-between group">
                                <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-brand-white/10 blur-[60px] pointer-events-none" />
                                <div className="relative">
                                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-white/60 mb-4 block">05</span>
                                    <h3 className="text-xl font-bold text-brand-white mb-3 leading-tight">Team integration</h3>
                                    <p className="text-sm text-brand-white/75 leading-relaxed">
                                        Your team, your processes. Engineers work in your timezone, use your tools and report directly to your leadership.
                                    </p>
                                </div>
                                <div className="relative flex items-center gap-2 mt-6">
                                    <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-brand-white/50">Your timezone · Your tools · Your culture</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* ── ROLES WE PLACE ────────────────────────────────────────────────── */}
            <ScrollReveal>
                <section className="relative w-full bg-brand-navy pt-20">
                    <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20 pb-20 lg:pb-32">
                        <div className="mb-12 lg:mb-16 text-center">
                            <SectionIndicator index={2} label="Roles we place" centered />
                            <h2 className="mt-8 text-[clamp(2.5rem,6vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-tight text-brand-white">
                                Who we <span className="text-brand-coral">hire</span> for your team
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-brand-white/10">
                            {ROLE_CARDS.map((card, i) => {
                                const Icon = card.icon
                                return (
                                    <div
                                        key={i}
                                        className="group relative flex flex-col gap-4 p-6 lg:p-8 border-b border-r border-brand-white/10 hover:bg-brand-white/2.5 transition-all duration-300 overflow-hidden"
                                    >
                                        <span
                                            aria-hidden
                                            className="absolute top-4 right-5 text-[3.5rem] font-bold text-brand-white/5 leading-none pointer-events-none select-none group-hover:text-brand-coral/8 transition-colors duration-500"
                                        >
                                            {String(i + 1).padStart(2, "0")}
                                        </span>

                                        <div
                                            className={`w-10 h-10 shrink-0 flex items-center justify-center rounded-xl ${card.iconBg} group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                                        >
                                            <Icon className="w-5 h-5" style={{ color: card.accent }} strokeWidth={1.7} />
                                        </div>

                                        <div>
                                            <h3 className="text-base font-bold text-brand-white mb-2 leading-tight group-hover:text-brand-coral transition-colors duration-200">
                                                {card.title}
                                            </h3>
                                            <p className="text-sm text-brand-white/55 leading-relaxed mb-4">
                                                {card.description}
                                            </p>
                                            <div className="flex flex-wrap gap-1.5">
                                                {card.tags.map((tag, j) => (
                                                    <span
                                                        key={j}
                                                        className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-brand-white/5 text-brand-white/65 group-hover:bg-brand-coral/10 group-hover:text-brand-coral transition-colors duration-300"
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
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* ── PROCESS ───────────────────────────────────────────────────────── */}
            <ScrollReveal>
                <section className="relative w-full bg-brand-white overflow-hidden py-20 lg:py-32">
                    <div className="absolute top-1/2 left-1/3 w-150 h-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-coral/12 blur-[140px] pointer-events-none" />

                    <div
                        aria-hidden
                        className="absolute -top-6 right-0 text-[18vw] font-bold uppercase leading-none tracking-tighter text-brand-navy/2.5 select-none pointer-events-none"
                    >
                        SETUP
                    </div>

                    <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-10 lg:px-20 mb-12 lg:mb-20">
                        <SectionIndicator index={3} label="How we set up your team" tone="dark" centered />
                        <div className="text-center mt-8 lg:mt-10">
                            <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-tight text-brand-navy mb-4">
                                From brief to <span className="text-brand-coral">live team</span>
                            </h2>
                            <p className="text-brand-navy/45 text-sm lg:text-base leading-relaxed max-w-xl mx-auto">
                                A five-stage setup process. Most teams are operational within 2–4 weeks.
                            </p>
                        </div>
                    </div>

                    <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-10 lg:px-20">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
                            {PROCESS_STEPS.map((step, i) => {
                                const Icon = step.icon
                                return (
                                    <div key={i} className="relative">
                                        <div className="group relative rounded-2xl border border-brand-navy/10 bg-brand-navy/4 backdrop-blur-sm p-6 lg:p-7 hover:bg-brand-navy/8 hover:border-brand-coral/40 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col overflow-hidden">
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
                                                    <div className="flex-1 h-px bg-brand-navy/10 group-hover:bg-brand-coral/40 transition-colors duration-300" />
                                                </div>

                                                <p className="text-[10px] font-bold text-brand-coral/80 uppercase tracking-[0.3em] mb-2">
                                                    STEP {step.number}
                                                </p>
                                                <h3 className="text-base lg:text-lg font-bold text-brand-navy mb-3 leading-tight tracking-tight">
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

            {/* ── BENEFITS ──────────────────────────────────────────────────────── */}
            <ScrollReveal>
                <section className="relative w-full bg-brand-navy py-20 lg:py-32">
                    <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-20">
                        <div className="mb-12 lg:mb-16 text-center">
                            <SectionIndicator index={4} label="Why this model" centered />
                            <h2 className="mt-8 text-[clamp(2.5rem,6vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-tight text-brand-white">
                                Built for <span className="text-brand-coral">scale</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 lg:gap-4">
                            {/* Feature bento — left */}
                            <div className="sm:col-span-2 lg:col-span-3 lg:row-span-2 rounded-3xl bg-brand-white text-brand-navy p-8 lg:p-10 relative overflow-hidden flex flex-col justify-between min-h-80 lg:min-h-110">
                                <div className="absolute -top-24 -right-24 w-[320px] h-80 rounded-full bg-brand-coral/20 blur-[100px] pointer-events-none" />
                                <div className="relative">
                                    <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold uppercase leading-[0.92] tracking-tight mb-6">
                                        Your team.<br />
                                        <span className="text-brand-coral">Our admin.</span>
                                    </h2>
                                    <p className="text-sm lg:text-base text-brand-navy/60 leading-relaxed max-w-sm">
                                        You focus on product, roadmap and engineering decisions. We own every operational detail — employment, compliance, payroll and HR — so nothing slows you down.
                                    </p>
                                </div>
                                <Link
                                    href="/contacts"
                                    className="relative inline-flex items-center justify-between gap-4 mt-8 group bg-brand-navy/5 hover:bg-brand-navy/10 border border-navy/10 hover:border-brand-coral/40 rounded-2xl px-5 py-4 transition-all duration-300"
                                >
                                    <span className="text-sm font-bold text-brand-navy">
                                        Start building your team today
                                    </span>
                                    <span className="flex items-center justify-center w-9 h-9 rounded-full bg-brand-coral group-hover:rotate-45 transition-transform duration-300">
                                        <ArrowUpRight className="w-4 h-4 text-brand-navy" />
                                    </span>
                                </Link>
                            </div>

                            {/* Benefit cards */}
                            {BENEFITS.map((benefit, i) => {
                                const Icon = benefit.icon
                                return (
                                    <div
                                        key={i}
                                        className="lg:col-span-3 rounded-3xl bg-brand-white/2.5 border border-brand-white/10 p-7 lg:p-8 hover:bg-brand-white/4.5 hover:border-brand-coral/30 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
                                    >
                                        <span
                                            aria-hidden
                                            className="absolute top-5 right-6 text-[3rem] font-bold text-brand-white/6 leading-none pointer-events-none select-none"
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
                </section>
            </ScrollReveal>

            {/* ── CTA ───────────────────────────────────────────────────────────── */}
            <ScrollReveal>
                <section className="relative w-full px-3 sm:px-5 lg:px-10 pb-12 lg:pb-20">
                    <div className="relative bg-brand-white rounded-3xl lg:rounded-[2.5rem] overflow-hidden">
                       
                        <p
                            aria-hidden
                            className="hidden lg:block absolute inset-x-0 -bottom-8 text-center text-[16rem] xl:text-[20rem] font-bold uppercase tracking-tighter text-brand-navy/3 leading-[0.8] pointer-events-none select-none whitespace-nowrap"
                        >
                            TEAM
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

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                                <AppButton href={CTA_DATA.primaryButton.href} icon="arrow" className="sm:w-auto">
                                    {CTA_DATA.primaryButton.text}
                                </AppButton>
                                <AppButton href={CTA_DATA.secondaryButton.href} variant="navy" className="sm:w-auto">
                                    {CTA_DATA.secondaryButton.text}
                                </AppButton>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <BackToTop hideOnMobile />
        </>
    )
}