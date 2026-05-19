import type { Metadata } from "next"
import Link from "next/link"
import { ScrollReveal } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { HERO_DATA, INDUSTRIES, CTA_DATA, STATS } from "./data"

export const metadata: Metadata = {
  title: "Specialized Industry Recruitment | Manufacturing, Energy, Fintech & More",
  description:
    "Expert tech recruitment across specialized industries including Manufacturing IT, Renewable Energy, Logistics, Hospitality, Retail, Media, LegalTech, Banking, and EdTech. Find industry-specific talent that understands your domain.",
  keywords: [
    "industry recruitment",
    "manufacturing IT recruitment",
    "renewable energy tech jobs",
    "logistics technology hiring",
    "hospitality tech recruitment",
    "retail ecommerce developers",
    "media entertainment engineers",
    "legaltech recruitment",
    "banking fintech jobs",
    "edtech hiring",
    "specialized tech talent",
  ],
  openGraph: {
    title: "Specialized Industry Tech Recruitment",
    description:
      "Connect with tech talent that understands your industry. Expert recruitment across 9+ specialized sectors.",
    type: "website",
  },
}

export default function SpecializedIndustries() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative w-full min-h-[85vh] bg-brand-navy overflow-hidden flex items-end">

       

        {/* Glow blobs */}
        <div className="absolute -bottom-40 -left-40 w-[520px] h-[520px] rounded-full bg-brand-coral/15 blur-[130px] pointer-events-none" />
        <div className="absolute top-10 right-0 w-[300px] h-[300px] rounded-full bg-brand-coral/6 blur-[100px] pointer-events-none" />

        {/* Giant background word */}
        <div
          aria-hidden
          className="absolute bottom-0 right-0 text-[18vw] font-black uppercase leading-none tracking-tighter text-brand-white/[0.025] select-none pointer-events-none"
        >
          INDUSTRIES
        </div>

        {/* Vertical tag - desktop only */}
        <div className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-4 pointer-events-none">
          <div className="h-16 w-px bg-brand-white/10" />
          <span
            className="text-[9px] font-bold tracking-[0.35em] uppercase text-brand-white/20 whitespace-nowrap"
            style={{ writingMode: "vertical-rl" }}
          >
            Expertise Services
          </span>
          <div className="h-16 w-px bg-brand-white/10" />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-10 xl:px-16 pt-36 pb-16 lg:pb-28 w-full">
          <div className="max-w-4xl mx-auto text-center">

            <span className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-brand-coral mb-6">
              {HERO_DATA.tagline}
            </span>

            <h1 className="text-[clamp(3.2rem,10vw,7rem)] font-black leading-[0.92] tracking-tight text-brand-white uppercase mb-8">
              Industry-Specific Tech <span className="text-brand-coral">Recruitment</span>
            </h1>

            <p className="text-sm sm:text-base text-brand-white/45 max-w-xl mx-auto leading-relaxed">
              {HERO_DATA.description}
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 mt-14">
              {STATS.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl sm:text-3xl font-black text-brand-coral leading-none">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-white/25 mt-1 max-w-[120px] mx-auto leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center gap-4 mt-12">
              <div className="h-px w-16 bg-brand-white/10" />
              <span className="text-[9px] font-bold tracking-[0.35em] uppercase text-brand-white/20">
                Scroll to explore
              </span>
              <div className="h-px w-16 bg-brand-white/10" />
            </div>

          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES GRID ──────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative w-full bg-brand-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 xl:px-16 py-20 lg:py-32">

            <div className="text-center mb-16">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-coral block mb-4">
                Our Expertise
              </span>
              <h2 className="text-[clamp(2.4rem,5.5vw,3.5rem)] font-black uppercase leading-none tracking-tight text-brand-navy mb-5">
                INDUSTRIES WE SERVE
              </h2>
              <p className="text-sm text-brand-navy/45 max-w-sm mx-auto leading-relaxed">
                From regulated environments to high-scale platforms - precise hiring for niche and complex sectors.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {INDUSTRIES.map((industry, i) => {
                const Icon = industry.icon
                return (
                  <article
                    key={i}
                    id={industry.slug}
                    className="group relative rounded-2xl border border-brand-navy/8 bg-brand-white p-7 hover:border-brand-coral/40 hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    {/* Index watermark */}
                    <div
                      aria-hidden
                      className="absolute right-5 top-3 text-[5rem] font-black leading-none text-brand-navy/[0.04] select-none"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    <div className="relative">
                      {/* Icon + title row */}
                      <div className="flex items-start gap-4 mb-5">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${industry.iconBg ?? "bg-brand-coral/10"} ${industry.color ?? "text-brand-coral"}`}>
                          <Icon className="w-5 h-5" strokeWidth={1.6} />
                        </div>
                        <div>
                          <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-navy/50 mb-1">
                            {industry.title}
                          </h3>
                          <p className="text-sm text-brand-navy/60 leading-relaxed">
                            {industry.description}
                          </p>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2 pt-2 border-t border-brand-navy/5">
                        {industry.highlights.map((highlight, j) => (
                          <span
                            key={j}
                            className="text-[12px] text-brand-navy/55 bg-brand-navy/5 rounded-lg px-3 py-1.5 leading-snug font-medium"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>

          </div>
        </section>
      </ScrollReveal>

      {/* ─── DOMAIN KNOWLEDGE ─────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative w-full bg-brand-navy overflow-hidden">

          {/* Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-coral/12 blur-[140px] pointer-events-none" />

          {/* Watermark */}
          <div
            aria-hidden
            className="absolute bottom-0 left-0 text-[13vw] font-black uppercase leading-none tracking-tighter text-brand-white/[0.025] select-none pointer-events-none whitespace-nowrap"
          >
            DOMAIN
          </div>

          <div className="relative max-w-7xl mx-auto px-5 sm:px-10 xl:px-16 py-20 lg:py-32">

            <div className="text-center mb-14">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-coral block mb-6">
                Why It Matters
              </span>
              <h2 className="text-[clamp(2.4rem,5vw,3.5rem)] font-black uppercase leading-none tracking-tight text-brand-white">
                DOMAIN KNOWLEDGE<br />
                <span className="text-brand-coral">DRIVES SUCCESS.</span>
              </h2>
              <div className="flex items-center justify-center gap-3 mt-8">
                <div className="h-px w-16 bg-brand-coral/40" />
                <div className="h-px w-6 bg-brand-coral/20" />
              </div>
              <p className="text-sm text-brand-white/40 max-w-md mx-auto leading-relaxed mt-8">
                Technical skills alone aren't enough. The best hires understand the unique challenges, regulations, and opportunities within your industry.
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Regulatory Knowledge",
                  desc: "Candidates who understand compliance requirements from day one.",
                },
                {
                  title: "Industry Networks",
                  desc: "Deep connections inside specialized tech communities.",
                },
                {
                  title: "Domain Expertise",
                  desc: "Technical skills paired with real business context.",
                },
                {
                  title: "Faster Ramp-Up",
                  desc: "Reduced onboarding time with genuine industry experience.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-xl border border-brand-white/6 bg-brand-white/4 px-5 py-5 hover:border-brand-coral/30 hover:bg-brand-white/6 transition-all duration-300"
                  style={{ backdropFilter: "blur(6px)" }}
                >
                  <span className="text-[11px] font-black text-brand-coral/70 mt-0.5 w-5 shrink-0 leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-sm font-bold tracking-[0.05em] uppercase text-brand-white/80 mb-1">
                      {item.title}
                    </p>
                    <p className="text-sm text-brand-white/45 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="relative w-full bg-brand-white overflow-hidden border-y border-brand-navy/6">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 xl:px-16 py-12">

            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-navy/30 shrink-0">
                Jump to sector
              </span>
              <div className="h-px bg-brand-navy/8 hidden sm:block w-8 shrink-0" />
              <div className="flex flex-wrap gap-2">
                {INDUSTRIES.map((industry, i) => {
                  const Icon = industry.icon
                  return (
                    <Link
                      key={i}
                      href={`#${industry.slug}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-brand-navy/10 text-[11px] font-semibold tracking-wide uppercase text-brand-navy/50 hover:border-brand-coral/40 hover:text-brand-coral transition-all duration-200"
                    >
                      <Icon className="w-3 h-3" strokeWidth={1.8} />
                      {industry.title.split(" ")[0]}
                    </Link>
                  )
                })}
              </div>
            </div>

          </div>
        </section>
      </ScrollReveal>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <ScrollReveal>
        <section className="relative w-full bg-brand-navy overflow-hidden">

          {/* Glow */}
          <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full bg-brand-coral/15 blur-[130px] pointer-events-none" />

          {/* Watermark */}
          <div
            aria-hidden
            className="absolute bottom-0 left-0 text-[18vw] font-black uppercase leading-none tracking-tighter text-brand-white/[0.025] select-none pointer-events-none"
          >
            HIRE
          </div>

          <div className="relative max-w-5xl mx-auto px-5 sm:px-10 xl:px-16 py-20 lg:py-32 text-center">

            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-coral block mb-5">
              Ready to Start?
            </span>
            <h2 className="text-[clamp(2.5rem,7vw,4rem)] font-black uppercase leading-none tracking-tight text-brand-white mb-6">
              {CTA_DATA.title.split(" ").slice(0, 3).join(" ")}
              <br />
              <span className="text-brand-coral">
                {CTA_DATA.title.split(" ").slice(3).join(" ")}
              </span>
            </h2>
            <p className="text-sm text-brand-white/50 max-w-md mx-auto leading-relaxed mb-10">
              {CTA_DATA.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                className="bg-brand-coral hover:bg-brand-coral/90 text-brand-white font-bold tracking-wide uppercase px-8 py-6 font-semibold rounded-3xl text-sm flex items-center gap-2 group"
              >
                <Link href={CTA_DATA.primaryButton.href}>
                  {CTA_DATA.primaryButton.text}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-brand-white/20 text-brand-white font-semibold rounded-3xl tracking-wide uppercase px-8 py-6  text-sm bg-brand-navy/0 hover:bg-brand-white"
              >
                <Link href={CTA_DATA.secondaryButton.href}>
                  {CTA_DATA.secondaryButton.text}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            {/* Bottom row */}
            <div className="mt-16 pt-10 border-t border-brand-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 rounded-full bg-brand-coral" />
                <p className="text-xs text-brand-white/40 leading-relaxed max-w-sm text-left">
                  <span className="font-bold text-brand-white/70">No hire, no invoice.</span>{" "}
                  Our fee is only due on a successful placement.
                </p>
              </div>
              <Link
                href="/#expertise-services"
                className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-white/25 hover:text-brand-coral transition-colors flex items-center gap-1"
              >
                All expertise services
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>

          </div>
        </section>
      </ScrollReveal>
    </>
  )
}