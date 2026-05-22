"use client"

import { memo } from "react"
import { TECH_CATEGORIES } from "@/lib/constants/specialized"
import { RoleCard } from "./role-card"
import { AppButton } from "@/components/ui/app-button"

// Vertical pages that exist for specific niches — route visitors there
// for far better conversion than the hub overview.
const VERTICAL_CALLOUTS = [
  {
    label: "AI / ML Recruitment",
    href: "/industries/ai-ml",
    // Match against category IDs that belong to this niche
    matchIds: ["ai-ml", "machine-learning", "artificial-intelligence", "data-science"],
  },
  {
    label: "Cybersecurity Recruitment",
    href: "/industries/cybersecurity",
    matchIds: ["cybersecurity", "security", "infosec", "cloud-security"],
  },
]

export const RolesSection = memo(function RolesSection() {
  return (
    <section
      id="roles"
      className="relative py-20 sm:py-24 lg:py-32 bg-brand-navy overflow-hidden"
    >
      {/* Coral glow */}
      <div
        aria-hidden
        className="absolute -top-32 right-1/4 w-[400px] h-[400px] lg:w-[520px] lg:h-[520px] rounded-full bg-brand-coral/12 blur-[120px] pointer-events-none"
      />

      {/* Watermark */}
      <div
        aria-hidden
        className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(10rem,18vw,16rem)] font-bold uppercase leading-[0.85] tracking-tighter text-brand-white/[0.025] select-none pointer-events-none whitespace-nowrap"
      >
        ROLES
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14 lg:mb-20">
          <div className="flex items-center justify-center gap-3 sm:gap-3.5 mb-5 sm:mb-6">
            <span className="block w-6 sm:w-9 h-px bg-brand-coral" />
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] sm:tracking-[0.32em] uppercase text-brand-coral">
              What We Recruit
            </span>
            <span className="block w-6 sm:w-9 h-px bg-brand-coral" />
          </div>
          <h2 className="text-[clamp(1.75rem,5.5vw,3.25rem)] font-bold leading-[0.95] sm:leading-[0.92] tracking-tight uppercase text-brand-white mb-5 sm:mb-6">
            Specialist Hiring For Every
            <br />
            <span className="text-brand-coral">
              Technical Team
            </span>
          </h2>
          <div className="mx-auto h-[2px] w-12 sm:w-16 bg-brand-coral mb-6 sm:mb-8" />
          <p className="text-sm sm:text-base text-brand-white/55 leading-relaxed max-w-xl mx-auto px-2 sm:px-0">
            From software engineering to executive leadership - click any
            specialization to see how we source and deliver.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {TECH_CATEGORIES.map((category, index) => (
            <RoleCard key={category.id} category={category} index={index} />
          ))}
        </div>

        {/* AI/ML + Cybersecurity vertical callout —
            Placed after the grid so it doesn't compete with individual cards.
            Avoids nested <a> inside RoleCard while still routing niche visitors
            to dedicated vertical pages that convert far better than the hub. */}
    
      </div>
    </section>
  )
})