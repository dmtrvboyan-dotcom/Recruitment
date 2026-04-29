import Link from "next/link"
import { ScrollReveal } from "@/components/layout"
import { Button } from "@/components/ui/button"
import {
  CheckCircle,
  ArrowRight,
  Upload,
  Globe,
  Briefcase,
  Zap,
} from "lucide-react"

import {
  candidatesMetadata,
  candidatesJsonLd,
  heroData,
  howItWorksData,
  yourGoalsData,
  whatYouGetData,
  whyChooseUsData,
  opportunitiesData,
  testimonialData,
  faqData,
  ctaData,
} from "./data"

// ============================================================================
// Metadata Export
// ============================================================================

export const metadata = candidatesMetadata


export default function CandidatesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(candidatesJsonLd) }}
      />

      <HeroSection />
      <HowItWorksSection />
      <YourGoalsSection />
      <WhatYouGetSection />
      <WhyChooseUsSection />
      <OpportunitiesSection />
      <TestimonialSection />
      <FAQSection />
      <CTASection />
    </>
  )
}


function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-32 pb-20 lg:pt-40 mt-20">
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium text-[#085689] uppercase tracking-widest mb-4">
            {heroData.tagline}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight text-balance mb-6">
            {heroData.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 text-pretty">
            {heroData.subtitle}
          </p>
          {/* <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto mb-10">
            {heroData.description}
          </p> */}
          <div className="flex flex-row sm:flex-row text-sm items-center justify-center gap-4">
            <Button
              asChild
              className="group lg:w-37.5 w-30 bg-[#085689] text-white hover:bg-[#78B6D9] hover:text-black rounded-xl px-8 py-6 text-sm font-medium"
            >
              <Link href={heroData.primaryCta.href}>
                {heroData.primaryCta.text}
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-transparent lg:w-37.5 w-30 text-black hover:bg-[#78B6D9] hover:text-white rounded-xl px-8 py-6 border-2 border-[#78B6D9]/50 text-base font-medium"
            >
              <Link href={heroData.secondaryCta.href}>
                {heroData.secondaryCta.text}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// How It Works Section
// ============================================================================

function HowItWorksSection() {
  return (
    <ScrollReveal>
      <section className="px-4 py-20 md:px-8 md:py-28 bg-transparent">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-[#085689] uppercase tracking-widest mb-3">
              {howItWorksData.tagline}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-4">
              {howItWorksData.title}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {howItWorksData.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {howItWorksData.items.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="text-center">
                  {/* Desktop & Mobile: number centered with tight background */}
                  <div className="flex justify-center mb-4">
                    <span className="inline-flex items-center justify-center text-3xl font-bold text-[#78B6D9] bg-[#78B6D9]/10 rounded-4xl px-4 py-4.5 leading-none hover:bg-[#085689] hover:text-[#f3f3f3] transition-all">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-semibold text-xl text-black mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-[15px] leading-relaxed mb-4 text-center">
                    {step.description}
                  </p>
                  <p className="text-sm text-[#085689] italic text-center">
                    {step.example}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}

// ============================================================================
// Your Goals Section
// ============================================================================

function YourGoalsSection() {
  return (
    <ScrollReveal>
      <section className="px-4 py-20 md:px-8 md:py-28 ">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-sm font-medium text-[#085689] uppercase tracking-widest mb-3">
              {yourGoalsData.tagline}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-4">
              {yourGoalsData.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {yourGoalsData.items.map((point, index) => {
              const Icon = point.icon
              return (
                <div
                  key={index}
                  className="group p-8 bg-[#f5f5f5] rounded-3xl border border-slate-100 hover:border-[#78B6D9]/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-2xl bg-[#085689]/5 text-[#085689] group-hover:bg-[#78B6D9] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-black mb-2 group-hover:text-[#085689] transition-colors">
                        {point.title}
                      </h3>
                      <p className="text-slate-600 text-[15px] leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}

// ============================================================================
// What You Get Section
// ============================================================================

function WhatYouGetSection() {
  return (
    <ScrollReveal>
      <section className="px-4 py-20 md:px-8 md:py-28 bg-transparent">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-sm font-medium text-[#085689] uppercase tracking-widest mb-3">
              {whatYouGetData.tagline}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-4">
              {whatYouGetData.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatYouGetData.items.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={index}
                  className="group p-8 bg-[f5f5f5] rounded-3xl border border-slate-100 hover:border-[#78B6D9]/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="mb-6">
                    <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#085689]/5 text-[#085689] group-hover:bg-[#78B6D9] group-hover:text-white transition-colors">
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-xl text-black mb-3 leading-tight group-hover:text-[#085689] transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 text-[15px] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}

// ============================================================================
// Why Choose Us Section
// ============================================================================

function WhyChooseUsSection() {
  return (
    <ScrollReveal>
      <section className="px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-sm font-medium text-[#085689] uppercase tracking-widest mb-3">
              {whyChooseUsData.tagline}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-4">
              {whyChooseUsData.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyChooseUsData.items.map((reason, index) => {
              const Icon = reason.icon
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-[#f5f5f5] rounded-2xl border border-slate-100 hover:border-[#78B6D9]/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-[#085689]/10 text-[#085689]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-black mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-slate-600 text-[15px] leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}

// ============================================================================
// Opportunities Section
// ============================================================================

function OpportunitiesSection() {
  return (
    <ScrollReveal>
      <section className="px-4 py-20 md:px-8 md:py-28 bg-transparent">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-sm font-medium text-[#085689] uppercase tracking-widest mb-3">
              {opportunitiesData.tagline}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-4">
              {opportunitiesData.title}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {opportunitiesData.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Industries */}
            <div>
              <h3 className="text-xl font-semibold text-black mb-6 flex items-center gap-3">
                <Globe className="w-6 h-6 text-[#085689]" />
                Industries
              </h3>
              <div className="space-y-3">
                {opportunitiesData.industries.map((industry, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-[#f5f5f5] rounded-xl border border-slate-100 hover:border-[#78B6D9]/30 transition-colors"
                  >
                    <CheckCircle className="w-5 h-5 text-[#085689] shrink-0" />
                    <span className="text-slate-700">{industry}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Roles */}
            <div>
              <h3 className="text-xl font-semibold text-black mb-6 flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-[#085689]" />
                Roles
              </h3>
              <div className="space-y-3">
                {opportunitiesData.roles.map((role, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-[#f5f5f5] rounded-xl border border-slate-100 hover:border-[#78B6D9]/30 transition-colors"
                  >
                    <CheckCircle className="w-5 h-5 text-[#085689] flex-shrink-0" />
                    <span className="text-slate-700">{role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}

// ============================================================================
// Testimonial Section
// ============================================================================

function TestimonialSection() {
  return (
    <ScrollReveal>
      <section className="px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <div className="bg-[#78B6D9]/10 rounded-3xl p-10 md:p-14">
            <Zap className="w-12 h-12 text-[#78B6D9] mx-auto mb-6" />
            <blockquote className="text-xl md:text-2xl text-black font-medium leading-relaxed mb-6 text-balance">
              &ldquo;{testimonialData.quote}&rdquo;
            </blockquote>
            <p className="text-[#085689] font-medium">{testimonialData.author}</p>
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}

// ============================================================================
// FAQ Section
// ============================================================================

function FAQSection() {
  return (
    <ScrollReveal>
      <section className="px-4 py-20 md:px-8 md:py-28 bg-transparent">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <p className="text-sm font-medium text-[#085689] uppercase tracking-widest mb-3">
              {faqData.tagline}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-4">
              {faqData.title}
            </h2>
          </div>

          <div className="space-y-4">
            {faqData.items.map((faq, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-2xl border border-slate-100"
              >
                <h3 className="font-semibold text-lg text-black mb-2">
                  {faq.question}
                </h3>
                <p className="text-slate-600 text-[15px] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}

// ============================================================================
// CTA Section
// ============================================================================

function CTASection() {
  return (
    <ScrollReveal>
      <section className="px-4 py-20 md:px-8 md:py-28 mb-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-6">
            {ctaData.title}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">
            {ctaData.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              className="group bg-[#085689] text-white hover:bg-[#78B6D9] hover:text-black rounded-xl px-8 py-6 text-base font-medium"
            >
              <Link href={ctaData.primaryCta.href}>
                <Upload className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                {ctaData.primaryCta.text}
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-transparent text-black hover:bg-[#78B6D9] hover:text-white rounded-xl px-8 py-6 border-2 border-[#78B6D9]/50 text-base font-medium"
            >
              <Link href={ctaData.secondaryCta.href}>
                {ctaData.secondaryCta.text}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}
