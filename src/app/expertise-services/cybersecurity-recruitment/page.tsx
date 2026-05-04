import type { Metadata } from "next"
import Link from "next/link"
import { ScrollReveal } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import {
  HERO_DATA,
  SERVICES_HEADER,
  SERVICES,
  CTA_DATA,
} from "./data"

export const metadata: Metadata = {
  title: "Cybersecurity Recruitment | Hire Security Engineers & SOC Analysts",
  description:
    "Cybersecurity recruitment for security engineers, SOC analysts, and DevSecOps specialists. Hire top information security talent.",
}

export default function RecruitmentAgencyBulgariaPage() {
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
            <p className="text-lg md:text-xl text-brand-navy/55 max-w-3xl mx-auto mb-4 text-pretty">
              {HERO_DATA.description}
            </p>
            <p className="text-base md:text-lg text-brand-navy/50 max-w-2xl mx-auto">
              {HERO_DATA.marketInsight}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ScrollReveal>
        <section className="px-4 py-20 md:px-8 md:py-28 bg-brand-white/30">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-14">
              <p className="text-sm font-medium text-brand-coral uppercase tracking-widest mb-3">
                {SERVICES_HEADER.tagline}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-navy mb-4">
                {SERVICES_HEADER.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SERVICES.map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className="group p-8 bg-brand-white rounded-3xl border border-brand-navy/10 hover:border-brand-coral-hover/80 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="mb-6">
                      <div className={`w-14 h-14 flex items-center justify-center rounded-2xl ${item.iconBg} ${item.color} transition-colors`}
                      >
                        <Icon className="w-7 h-7" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-xl text-brand-navy mb-3 leading-tight group-hover:text-brand-blue transition-colors">
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
              <Button
                asChild
                variant="outline"
                className="bg-transparent text-brand-white hover:bg-brand-white hover:text-brand-navy rounded-xl px-8 py-6 border-2 border-brand-white/30 text-base font-medium"              >
                <Link href={CTA_DATA.secondaryButton.href}>
                  {CTA_DATA.secondaryButton.text}
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  )
}
