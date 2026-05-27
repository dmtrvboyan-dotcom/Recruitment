// src/app/privacy-policy/page.tsx

import type { Metadata } from "next"
import Link from "next/link"
import { privacyData } from "./data"

export const metadata: Metadata = {
    title: "Privacy Policy | Recruitment.bg",
    description:
        "How Recruitment.bg collects, processes and protects your personal data. GDPR compliant. Last updated May 2026.",
    alternates: { canonical: "https://recruitment.bg/privacy-policy" },
}

export default function PrivacyPolicyPage() {
    const { meta, stats, ticker, sections } = privacyData

    return (
        <main className="w-full min-h-screen bg-brand-white text-brand-navy pt-24">

            <section className="bg-brand-navy text-brand-white">
                <div className="mx-auto max-w-7xl px-6">


                    <div className="flex justify-center pb-20 border-b border-white/10">
                        <div className="flex flex-col justify-between gap-10">
                            <div>
                                <p className="text-xs uppercase tracking-[0.3em] text-brand-coral mb-5">
                                    Legal · Privacy Policy
                                </p>
                                <h1 className="text-6xl md:text-8xl font-bold uppercase  tracking-tight mb-8">
                                    PRIVACY<br />POLICY.
                                </h1>
                                <p className="text-base text-white/50 leading-relaxed max-w-sm">
                                    How we collect, store, and protect your data — in full
                                    compliance with GDPR and Bulgarian data protection law.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <span className="text-[11px] uppercase tracking-[0.2em] px-3 py-1.5 border border-white/20 text-white/60 rounded-sm">
                                    GDPR Compliant
                                </span>
                                <span className="text-[11px] uppercase tracking-[0.2em] px-3 py-1.5 border border-white/20 text-white/60 rounded-sm">
                                    Version {meta.version}
                                </span>
                                <span className="text-[11px] uppercase tracking-[0.2em] px-3 py-1.5 border border-white/20 text-white/60 rounded-sm">
                                    Effective {meta.effective}
                                </span>
                            </div>
                        </div>

                        {/* Right — stats */}


                    </div>

                    {/* Ticker */}
                    <div className="py-5 overflow-hidden border-b border-white/10">
                        <div className="flex gap-12 animate-none whitespace-nowrap">
                            {[...ticker, ...ticker].map((item, i) => (
                                <span
                                    key={i}
                                    className="text-[11px] uppercase tracking-[0.25em] text-white/30 flex items-center gap-12"
                                >
                                    {item}
                                    <span className="text-brand-coral text-xs">✦</span>
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6">
                <div className="flex flex-col gap-0">

                    {/* Sticky sidebar */}
                    <aside className="hidden lg:block border-r border-brand-navy/10">
                        <div className="sticky top-28 py-12 pr-8">

                            <div className="mt-10 pt-8 border-t border-brand-navy/10">
                                <p className="text-[10px] uppercase tracking-[0.2em] text-brand-navy/30 mb-3">
                                    Questions?
                                </p>
                                <a
                                    href="mailto:office@recruitment.bg"
                                    className="text-sm text-brand-blue hover:text-brand-navy transition-colors block mb-1"
                                >
                                    office@recruitment.bg
                                </a>
                                <p className="text-xs text-brand-navy/30">Response within 24h</p>
                            </div>
                        </div>
                    </aside>

                    {/* Sections */}
                    <div className="lg:pl-16">
                        {sections.map((section, index) => (
                            <div
                                id={section.id}
                                key={section.id}
                                className="py-16 border-b border-brand-navy/10 scroll-mt-28"
                            >

                                {/* Section header */}
                                <div className="flex items-start gap-4 mb-8">
                                    <span className="text-[10px] font-mono text-brand-navy/25 uppercase tracking-[0.3em] mt-1.5 w-6 shrink-0">
                                        {section.number}
                                    </span>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-[10px] uppercase tracking-[0.2em] text-brand-blue border border-brand-blue/25 px-2.5 py-1 rounded-sm">
                                                {section.tag}
                                            </span>
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-brand-navy">
                                            {section.title}
                                        </h2>
                                    </div>
                                </div>

                                {/* Lead + content — 50/50 */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 ml-10">
                                    <p className="text-base font-medium text-brand-navy/80 leading-relaxed">
                                        {section.lead}
                                    </p>
                                    <p className="text-sm text-brand-navy/55 leading-relaxed">
                                        {section.content}
                                    </p>
                                </div>

                                {/* Highlight callout */}
                                <div className="ml-10 flex items-start gap-4 bg-brand-navy/[0.03] border-l-[3px] border-brand-blue px-5 py-4 rounded-r-sm">
                                    <div>
                                        <span className="text-[10px] uppercase tracking-[0.2em] text-brand-blue font-medium block mb-1">
                                            {section.highlight.label}
                                        </span>
                                        <p className="text-sm text-brand-navy/60">
                                            {section.highlight.text}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* ── CTA ── dark navy, 50/50 */}
            <section className="bg-brand-navy text-brand-white mt-0">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-white/10">

                        {/* Left */}
                        <div className="py-20 pr-0 lg:pr-20 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between gap-10">
                            <div>
                                <p className="text-xs uppercase tracking-[0.3em] text-brand-coral mb-5">
                                    Questions about your data?
                                </p>
                                <h2 className="text-4xl md:text-5xl font-bold uppercase leading-[0.92] tracking-tight">
                                    STILL HAVE<br />QUESTIONS?
                                </h2>
                            </div>
                            <p className="text-sm text-white/40 leading-relaxed max-w-sm">
                                Our Data Protection lead responds to all privacy requests
                                within 24 hours. You also have the right to lodge a complaint
                                with the CPDP — Bulgaria's supervisory authority.
                            </p>
                        </div>

                        {/* Right */}
                        <div className="py-20 lg:pl-20 flex flex-col justify-between gap-10">
                            <div className="flex flex-col gap-8">
                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/25 mb-2">Email</p>
                                    <a
                                        href="mailto:office@recruitment.bg"
                                        className="text-xl font-medium text-brand-coral hover:text-white transition-colors"
                                    >
                                        office@recruitment.bg
                                    </a>
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/25 mb-2">Phone</p>
                                    <a
                                        href="tel:+359876449229"
                                        className="text-xl font-medium text-white/80 hover:text-white transition-colors"
                                    >
                                        +359 876 449 229
                                    </a>
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/25 mb-2">Response</p>
                                    <p className="text-sm text-white/50">Within 24 hours · Mon–Fri, 9–18 EET</p>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <Link
                                    href="/contacts"
                                    className="inline-flex items-center justify-center px-7 py-3.5 text-xs uppercase tracking-[0.2em] bg-brand-blue text-white hover:bg-opacity-90 transition-all rounded-sm"
                                >
                                    Contact Us
                                </Link>
                                <Link
                                    href="/terms-of-service"
                                    className="inline-flex items-center justify-center px-7 py-3.5 text-xs uppercase tracking-[0.2em] border border-white/20 text-white/50 hover:border-white/40 hover:text-white transition-all rounded-sm"
                                >
                                    Terms of Service →
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </main>
    )
}