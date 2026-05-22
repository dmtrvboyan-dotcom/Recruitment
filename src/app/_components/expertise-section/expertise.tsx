"use client"

import {
  EXPERTISE_AREAS,
  EXPERTISE_FEATURED_AREA,
} from "@/lib/constants/expertise"
import { ExpertiseCard } from "./expertise-card"
import { FeaturedExpertiseCard } from "./featured-expertise-card"

export function ExpertiseSection() {
  const [fintech, igaming, aiml, cyber, it, ecommerce] = EXPERTISE_AREAS

  return (
    <section
      id="expertise-services"
      className="relative py-20 sm:py-24 lg:py-32 bg-brand-white overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -top-32 right-1/4 w-[400px] h-[400px] lg:w-[520px] lg:h-[520px] rounded-full bg-brand-coral/15 blur-[120px] pointer-events-none"
      />

      


       <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 lg:left-auto lg:-left-32 lg:translate-x-0 w-[360px] h-[360px] lg:w-[520px] lg:h-[520px] rounded-full bg-brand-coral/18 blur-[100px] lg:blur-[120px] pointer-events-none"
      />

      <div
        aria-hidden
        className="hidden lg:block absolute top-[48%] -right-32 w-[420px] h-[420px] rounded-full bg-brand-teal/18 blur-[130px] pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14 lg:mb-20">
          <div className="flex items-center justify-center gap-3 sm:gap-3.5 mb-5 sm:mb-6">
            <span className="block w-6 sm:w-9 h-px bg-brand-coral" />
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] sm:tracking-[0.32em] uppercase text-brand-navy/75">
              Our Expertise
            </span>
            <span className="block w-6 sm:w-9 h-px bg-brand-coral" />
          </div>
          <h2 className="text-[clamp(1.75rem,6vw,3.5rem)] font-bold leading-[0.95] sm:leading-[0.92] tracking-tight uppercase text-brand-navy mb-5 sm:mb-6">
            We help companies hire across
            <span className="text-brand-coral"> different industries.</span>
          </h2>
          <div className="mx-auto h-[2px] w-12 sm:w-16 bg-brand-coral mb-6 sm:mb-8" />
          <p className="text-sm sm:text-base lg:text-lg text-brand-navy/55 leading-relaxed max-w-xl mx-auto px-2 sm:px-0">
            From specialized technical roles to executive leadership - tailored
            recruitment across every sector that matters.
          </p>
        </div>

        <div
          className={[
            "grid gap-3 sm:gap-4",
            "grid-cols-1",                         // mobile: 1 col
            "md:grid-cols-2",                      // tablet: 2 col
            "lg:grid-cols-12 lg:auto-rows-[260px]", // desktop: 12-col fixed rows
          ].join(" ")}
        >
          <ExpertiseCard
            item={fintech}
            index={0}
            className="h-64 md:h-auto lg:col-[1/6] lg:row-[1/3]"
          />

          {/* 1 — iGaming: col 6-12, row 1 */}
          <ExpertiseCard
            item={igaming}
            index={1}
            className="h-64 md:h-auto lg:col-[6/13] lg:row-[1/2]"
          />

          {/* 2 — AI/ML: col 6-12, row 2 */}
          <ExpertiseCard
            item={aiml}
            index={2}
            className="h-64 md:h-auto lg:col-[6/13] lg:row-[2/3]"
          />

          {/* 3 — Cybersecurity: col 1-7, row 3 (wider) */}
          <ExpertiseCard
            item={cyber}
            index={3}
            className="h-64 md:h-auto lg:col-[1/8] lg:row-[3/4]"
          />

          {/* 4 — IT Services: col 7-12, row 3 */}
          <ExpertiseCard
            item={it}
            index={4}
            className="h-64 md:h-auto lg:col-[8/13] lg:row-[3/4]"
          />

          {/* 5 — Ecommerce: col 1-4, row 4 (narrow/square-ish) */}
          <ExpertiseCard
            item={ecommerce}
            index={5}
            className="h-64 md:h-auto lg:col-[1/5] lg:row-[4/5]"
          />

          {/* ★ — More Industries: col 5-13, row 4 (wide, all tags visible) */}
          <div className="h-64 md:h-auto lg:col-[5/13] lg:row-[4/5]">
            <FeaturedExpertiseCard
              data={EXPERTISE_FEATURED_AREA}
              compact
            />
          </div>
        </div>

        {/* ── Bottom note ── */}
        <div className="mt-16 sm:mt-20 text-center">
          <p className="text-sm font-medium text-brand-navy/45">
            Not sure where to start?{" "}
            <a
              href="#contact"
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
