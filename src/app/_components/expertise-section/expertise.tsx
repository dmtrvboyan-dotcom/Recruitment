"use client"

import { EXPERTISE_AREAS, EXPERTISE_FEATURED_AREA } from "@/lib/constants/expertise"
import { ExpertiseCard } from "./expertise-card"
import { FeaturedExpertiseCard } from "./featured-expertise-card"

const CARD_THEMES = [
  { color: "text-blue-600", bg: "bg-blue-50" },
  { color: "text-emerald-600", bg: "bg-emerald-50" },
  { color: "text-orange-600", bg: "bg-orange-50" },
  { color: "text-rose-600", bg: "bg-rose-50" },
  { color: "text-indigo-600", bg: "bg-indigo-50" },
  { color: "text-purple-600", bg: "bg-purple-50" },
]

export function ExpertiseSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
    

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 xl:px-12 w-full">
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-coral mb-6 animate-fade-in-up">
            Our Expertise
          </p>
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold text-brand-navy leading-[1.1] tracking-tight mb-7 max-w-4xl animate-fade-in-up delay-100">
            We help companies hire <br /> across <span className="text-brand-blue">industries</span>
          </h2>
          <p className="text-base lg:text-lg text-brand-navy/55 max-w-2xl leading-relaxed animate-fade-in-up delay-200">
            From specialized technical roles to executive leadership, we deliver tailored
            recruitment solutions across key industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 animate-fade-in-up delay-300">
          {EXPERTISE_AREAS.map((item, index) => (
            <ExpertiseCard 
              key={index} 
              item={item} 
              iconColor={CARD_THEMES[index % CARD_THEMES.length].color}
              iconBg={CARD_THEMES[index % CARD_THEMES.length].bg}
            />
          ))}
          <FeaturedExpertiseCard data={EXPERTISE_FEATURED_AREA} />
        </div>

        <div className="mt-20 text-center animate-fade-in-up delay-[400ms]">
          <p className="text-sm font-medium text-brand-navy/40">
            Not sure where to start?{" "}
            <a href="#contact" className="text-brand-coral hover:text-brand-coral-hover font-bold underline underline-offset-8 decoration-brand-coral/20 transition-all">
              Contact us
            </a> and we&apos;ll guide you.
          </p>
        </div>
      </div>
    </section>
  )
}