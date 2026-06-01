"use client"

import { EXPERTISE_AREAS, EXPERTISE_FEATURED_AREA } from "@/lib/constants/expertise"
import { ExpertiseCard } from "./expertise-card"
import { FeaturedExpertiseCard } from "./featured-expertise-card"

export function ExpertiseSection() {
  const [fintech, igaming, aiml, cyber, it, ecommerce] = EXPERTISE_AREAS

  return (
    <section
      id="expertise-services"
      className="relative py-16 sm:py-20 lg:py-28 bg-brand-white overflow-hidden"
    >
      {/* Background glows */}
      <div
        aria-hidden
        className="absolute -top-32 right-1/4 w-80 h-80 lg:w-md lg:h-112 rounded-full bg-brand-coral/10 blur-[120px] pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute top-1/2 -left-20 w-72 h-72 rounded-full bg-brand-teal/10 blur-[100px] pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* ── Section header ── */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-3 sm:gap-3.5 mb-4 sm:mb-5">
            <span className="block w-6 sm:w-8 h-px bg-brand-coral" />
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] sm:tracking-[0.32em] uppercase text-brand-navy/75">
              Our Expertise
            </span>
            <span className="block w-6 sm:w-8 h-px bg-brand-coral" />
          </div>

          <h2 className="text-[clamp(1.75rem,6vw,3.5rem)] font-bold leading-[0.95] sm:leading-[0.92] tracking-tight uppercase text-brand-navy mb-4 sm:mb-5">
            We help companies hire across
            <span className="text-brand-coral"> different industries.</span>
          </h2>

          <div className="mx-auto h-0.5 w-12 sm:w-16 bg-brand-coral mb-5 sm:mb-7" />

          <p className="text-sm sm:text-base lg:text-[1.0625rem] text-brand-navy/55 leading-relaxed max-w-xl mx-auto px-2 sm:px-0">
            From specialized technical roles to executive leadership — tailored
            recruitment across every sector that matters.
          </p>
        </div>

        {/* ── Main grid: rows list (left) + dark panel (right) ── */}
        {/*
          items-stretch makes both columns the same height.
          The left column is a flex column that distributes its cards.
          The right panel uses h-full so it fills the entire row height.
        */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_360px] gap-3 sm:gap-4 lg:gap-4 items-stretch">

          {/* Left: stacked row cards — flex column, each card grows equally */}
          <div className="flex flex-col gap-2 sm:gap-2.5">
            <ExpertiseCard item={fintech}   index={0} className="flex-1" />
            <ExpertiseCard item={igaming}   index={1} className="flex-1" />
            <ExpertiseCard item={aiml}      index={2} className="flex-1" />
            <ExpertiseCard item={cyber}     index={3} className="flex-1" />
            <ExpertiseCard item={it}        index={4} className="flex-1" />
            <ExpertiseCard item={ecommerce} index={5} className="flex-1" />
          </div>

          {/* Right: featured dark panel — h-full stretches to match left column */}
          <div className="h-full min-h-90">
            <FeaturedExpertiseCard
              data={EXPERTISE_FEATURED_AREA}
              compact
            />
          </div>
        </div>

        {/* ── Footer nudge ── */}
        <div className="mt-12 sm:mt-14 text-center">
          <p className="text-sm font-medium text-brand-navy/45">
            Not sure where to start?{" "}
            <a
              href="/contacts"
              className="text-brand-coral hover:text-brand-coral-hover font-bold underline underline-offset-8 decoration-brand-coral/30 hover:decoration-brand-coral transition-all duration-200"
            >
              Contact us
            </a>{" "}
            and we&apos;ll guide you.
          </p>
        </div>
      </div>
    </section>
  )
}