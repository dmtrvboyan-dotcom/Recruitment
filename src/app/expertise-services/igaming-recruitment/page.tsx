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
            <p className="text-sm font-medium text-[#085689] uppercase tracking-widest mb-4">
              {HERO_DATA.tagline}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight text-balance mb-6">
              {HERO_DATA.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              {HERO_DATA.description}
            </p>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
        {STATS_DATA.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl font-semibold text-[#085689]">
              {stat.value}
            </div>
<div className="text-sm text-slate-600 mt-1 leading-snug max-w-[160px] sm:max-w-[180px] mx-auto">
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
        <section className="px-4 py-20 md:px-8 md:py-28 bg-[#f5f5f5]/50">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-14">
              <p className="text-sm font-medium text-[#085689] uppercase tracking-widest mb-3">
                {ROLES_HEADER.tagline}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-4">
                {ROLES_HEADER.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ROLES.map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className="group p-8 bg-[#f5f5f5] rounded-3xl border border-slate-100 hover:border-[#78B6D9]/30 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="mb-6">
                      <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#085689]/5 text-[#085689] group-hover:bg-[#78B6D9] group-hover:text-white transition-colors">
                        <Icon className="w-7 h-7" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-xl text-black mb-3 leading-tight group-hover:text-[#085689] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-[15px] leading-relaxed">
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
              <p className="text-sm font-medium text-[#085689] uppercase tracking-widest mb-3">
                {DIFFERENTIATORS_HEADER.tagline}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-4">
                {DIFFERENTIATORS_HEADER.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {DIFFERENTIATORS.map((item, index) => (
                <div
                  key={index}
                  className="group p-8 bg-white rounded-3xl border border-slate-100 hover:border-[#78B6D9]/30 hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#085689] text-white text-xl font-bold mx-auto mb-6">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-xl text-black mb-3 leading-tight group-hover:text-[#085689] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-[15px] leading-relaxed">
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
        <section className="px-4 py-20 md:px-8 md:py-28 mb-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-6">
              {CTA_DATA.title}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">
              {CTA_DATA.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                className="bg-[#085689] text-white hover:bg-[#78B6D9] hover:text-black rounded-xl px-8 py-6 text-base font-medium"
              >
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
