import type { Metadata } from "next"
import Link from "next/link"
import { ScrollReveal } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import {
  HERO_DATA,
  ROLES_HEADER,
  ROLES,
  DIFFERENTIATORS_HEADER,
  DIFFERENTIATORS,
  CTA_DATA,
  STATS_DATA
} from "./data"

export const metadata: Metadata = {
  title: "iGaming Recruitment Bulgaria | Hire Gaming Talent",
  description:
    "Specialized iGaming and gaming recruitment in Bulgaria. Hire developers, game designers, multilingual support, and product specialists for your gaming company.",
}

export default function IGamingRecruitmentPage() {
  return (
    <>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden  mt-35 sm:mt-50 ">
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

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {STATS_DATA.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl text-brand-navy uppercase font-bold text-brand-navy">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-brand-teal uppercase mt-1 leading-snug max-w-[160px] sm:max-w-[180px] mx-auto">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Roles Section */}
      <ScrollReveal>
        <section className="px-4 py-20 md:px-8 md:py-28 bg-brand-white/30">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-14">
              <p className="text-sm font-medium text-brand-coral uppercase tracking-widest mb-3">
                {ROLES_HEADER.tagline}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-navy mb-4">
                {ROLES_HEADER.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ROLES.map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className="group p-8 bg-brand-white rounded-3xl border border-brand-navy/10 hover:border-brand-coral-hover/80  hover:shadow-xl transition-all duration-300"
                  >
                    <div className="mb-6">
                      <div className={`w-14 h-14 flex items-center justify-center rounded-2xl ${item.iconBg} ${item.color} transition-colors`}>
                        <Icon className="w-7 h-7" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-xl text-brand-navy mb-3 leading-tight group-hover:text-brand-blue transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-brand-navy/55 text-[15px] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Differentiators Section */}
      <ScrollReveal>
        <section className="px-4 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-14">
              <p className="text-sm font-medium text-brand-coral uppercase tracking-widest mb-3">
                {DIFFERENTIATORS_HEADER.tagline}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-navy mb-4">
                {DIFFERENTIATORS_HEADER.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {DIFFERENTIATORS.map((item, index) => (
                <div
                  key={index}
                  className="group p-8 bg-brand-white rounded-3xl border border-brand-navy/10 hover:border-brand-coral-hover hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-coral text-brand-white hover:bg-brand-coral-hover hover:text-brand-navy text-xl font-bold mx-auto mb-6">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-xl text-branv navy mb-3 leading-tight group-hover:text-brand-blue transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-brand-navy/55 text-[15px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
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
               className="bg-brand-blue text-brand-white hover:bg-brand-white hover:text-brand-navy rounded-xl px-8 py-6 text-base font-medium">
                <Link href={CTA_DATA.primaryButton.href}>
                  {CTA_DATA.primaryButton.text}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              {/* <Button
                asChild
                variant="outline"
                className="bg-transparent text-black hover:bg-[#78B6D9] hover:text-white rounded-xl px-8 py-6 border-2 border-[#78B6D9]/50 text-base font-medium"
              >
                <Link href={CTA_DATA.secondaryButton.href}>
                  {CTA_DATA.secondaryButton.text}
                </Link>
              </Button> */}
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  )
}
