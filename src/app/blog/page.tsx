import type { Metadata } from "next"
import Link from "next/link"
import { ScrollReveal } from "@/components/common"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"
import {
  HERO_DATA,
  WHAT_YOU_GET_HEADER,
  WHAT_YOU_GET,
  WHY_BULGARIA_HEADER,
  WHY_BULGARIA,
  APPROACH_DATA,
  CTA_DATA,
} from "./data"

export const metadata: Metadata = {
  title: "AI Recruitment | Hire Machine Learning Engineers & Data Scientists",
  description:
    "AI recruitment for machine learning engineers, data scientists, and MLOps specialists. Hire top AI talent for deep learning, NLP, and computer vision.",
}

export default function AiMlRecruitment() {
  return (
    <>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-medium text-[#085689] uppercase tracking-widest mb-4">
              {HERO_DATA.tagline}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight text-balance mb-6">
              {HERO_DATA.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4 text-pretty">
              {HERO_DATA.description}
            </p>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
              {HERO_DATA.subDescription}
            </p>
          </div>
        </div>
      </section>



      {/* Why Bulgaria Section */}
      <ScrollReveal>
        <section className="px-4 py-20 md:px-8 md:py-28 bg-[#f5f5f5]/50">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-14">
              <p className="text-sm font-medium text-[#085689] uppercase tracking-widest mb-3">
                {WHY_BULGARIA_HEADER.tagline}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-4">
                {WHY_BULGARIA_HEADER.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="space-y-4">
                {WHY_BULGARIA.left.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-slate-100 hover:border-[#78B6D9]/30 hover:shadow-md transition-all duration-300"
                  >
                    <CheckCircle className="w-5 h-5 text-[#085689] mt-0.5 flex-shrink-0" />
                    <p className="text-slate-700 text-[15px] leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {WHY_BULGARIA.right.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-slate-100 hover:border-[#78B6D9]/30 hover:shadow-md transition-all duration-300"
                  >
                    <CheckCircle className="w-5 h-5 text-[#085689] mt-0.5 flex-shrink-0" />
                    <p className="text-slate-700 text-[15px] leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

           {/* What You Get Section */}
      <ScrollReveal>
        <section className="px-4 py-20 md:px-8 md:py-28 ">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-14">
              <p className="text-sm font-medium text-[#085689] uppercase tracking-widest mb-3">
                {WHAT_YOU_GET_HEADER.tagline}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-4">
                {WHAT_YOU_GET_HEADER.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {WHAT_YOU_GET.map((item, index) => {
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

      {/* Our Approach Section */}
      {/* <ScrollReveal>
        <section className="px-4 py-20 md:px-8 md:py-28 bg-[#f5f5f5]/50">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-medium text-[#085689] uppercase tracking-widest mb-3">
              {APPROACH_DATA.header.tagline}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-8">
              {APPROACH_DATA.header.title}
            </h2>
            <div className="bg-[#f5f5f5] rounded-3xl p-8 md:p-12 border border-slate-100">
              {APPROACH_DATA.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-lg text-slate-700 leading-relaxed ${
                    index < APPROACH_DATA.paragraphs.length - 1 ? "mb-6" : ""
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal> */}

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
              <Button
                asChild
                variant="outline"
                className="bg-transparent text-black hover:bg-[#78B6D9] hover:text-white rounded-xl px-8 py-6 border-2 border-[#78B6D9]/50 text-base font-medium"
              >
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
