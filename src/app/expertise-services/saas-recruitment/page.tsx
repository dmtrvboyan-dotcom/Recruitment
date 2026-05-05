import type { Metadata } from "next"
import Link from "next/link"
import { ScrollReveal } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import {
  HERO_DATA,
  WHAT_WE_COVER_HEADER,
  WHAT_WE_COVER,
  PERFECT_FOR_HEADER,
  PERFECT_FOR,
  FOOTER_BAR,
  CTA_DATA,
} from "./data"

export const metadata: Metadata = {
  title: "Hire SaaS Talent | SaaS Engineers, DevOps & Product Hiring",
  description:
    "Hire top SaaS talent across cloud engineering, DevOps, product management, and B2B software. Scale your SaaS team with experienced professionals at competitive EU rates.",
}

export default function SaasRecruitmentPage() {
  return (
    <>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-medium text-brand-coral uppercase tracking-widest mb-4">
              {HERO_DATA.tagline}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-brand-navy leading-tight text-balance mb-6">
              {HERO_DATA.title}
            </h1>
            <p className="text-lg md:text-xl text-brand-navy/55 max-w-3xl mx-auto text-pretty">
              {HERO_DATA.description}
            </p>
          </div>
        </div>
      </section>

      {/* What We Cover / Roles Section */}
      <ScrollReveal>
        <section className="px-4 py-20 md:px-8 md:py-28 bg-brand-white/30">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-14">
              <p className="text-sm font-medium text-brand-coral uppercase tracking-widest mb-3">
                {WHAT_WE_COVER_HEADER.tagline}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-navy mb-4">
                {WHAT_WE_COVER_HEADER.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {WHAT_WE_COVER.map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className="group p-6 bg-brand-white rounded-3xl border border-brand-navy/10 hover:border-brand-coral-hover/80 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="mb-5">
                      <div className={`w-12 h-12 flex items-center justify-center rounded-2xl ${item.iconBg} ${item.color} transition-colors`}>
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-base text-brand-navy mb-3 leading-tight group-hover:text-brand-blue transition-colors">
                      {item.title}
                    </h3>
                    <ul className="space-y-1.5">
                      {item.bullets.map((bullet, bIndex) => (
                        <li key={bIndex} className="flex items-start gap-2 text-[12.5px] text-brand-navy/60 leading-snug">
                          <span className={`mt-[5px] w-1.5 h-1.5 rounded-full flex-shrink-0 ${item.color} bg-current`} />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>

            {/* Footer Bar */}
            <div className="mt-8 rounded-3xl border border-brand-navy/10 bg-brand-white px-8 py-5 flex flex-col md:flex-row items-center gap-6 md:gap-0 md:justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#edecfe] text-[#3c3489] flex-shrink-0">
                  <FOOTER_BAR.moreRoles.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-brand-navy text-sm leading-tight">{FOOTER_BAR.moreRoles.title}</p>
                  <p className="text-brand-navy/55 text-[13px] leading-snug mt-0.5">{FOOTER_BAR.moreRoles.description}</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-5 md:gap-8">
                {FOOTER_BAR.badges.map((badge, index) => {
                  const BadgeIcon = badge.icon
                  return (
                    <div key={index} className="flex items-center gap-2 text-brand-navy/70">
                      <BadgeIcon className="w-4 h-4 text-brand-teal flex-shrink-0" />
                      <span className="text-[13px] font-medium whitespace-nowrap">{badge.label}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Perfect For Section */}
      <ScrollReveal>
        <section className="px-4 py-20 md:px-8 md:py-28 bg-transparent">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-14">
              <p className="text-sm font-medium text-brand-coral uppercase tracking-widest mb-3">
                {PERFECT_FOR_HEADER.tagline}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-navy mb-4">
                {PERFECT_FOR_HEADER.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PERFECT_FOR.map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className="group p-8 bg-brand-white rounded-3xl border border-brand-navy/10 hover:border-brand-coral-hover/80 hover:shadow-xl transition-all duration-300 text-center"
                  >
                    <div className="mb-6 flex justify-center">
                      <div className={`w-16 h-16 flex items-center justify-center rounded-2xl ${item.iconBg} ${item.color} transition-colors`}>
                        <Icon className="w-8 h-8" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-2xl text-brand-navy mb-3 leading-tight group-hover:text-brand-blue transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-brand-navy/60 text-[15px] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal>
        <section className="px-4 py-20 md:px-8 md:py-28 mb-20 bg-brand-navy">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-coral mb-6">
              {CTA_DATA.title}
            </h2>
            <p className="text-lg text-brand-white/70 leading-relaxed max-w-2xl mx-auto mb-10">
              {CTA_DATA.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                className="bg-brand-blue text-brand-white hover:bg-brand-white hover:text-brand-navy rounded-xl px-8 py-6 text-base font-medium"
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
