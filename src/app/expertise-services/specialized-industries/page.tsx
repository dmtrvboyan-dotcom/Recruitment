import type { Metadata } from "next"
import Link from "next/link"
import { ScrollReveal } from "@/components/common"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Globe } from "lucide-react"
import { HERO_DATA, INDUSTRIES, CTA_DATA, STATS } from "./data"

export const metadata: Metadata = {
  title:
    "Specialized Industry Recruitment | Manufacturing, Energy, Fintech & More",
  description:
    "Expert tech recruitment across specialized industries including Manufacturing IT, Renewable Energy, Logistics, Hospitality, Retail, Media, LegalTech, Banking, and EdTech. Find industry-specific talent that understands your domain.",
  keywords: [
    "industry recruitment",
    "manufacturing IT recruitment",
    "renewable energy tech jobs",
    "logistics technology hiring",
    "hospitality tech recruitment",
    "retail ecommerce developers",
    "media entertainment engineers",
    "legaltech recruitment",
    "banking fintech jobs",
    "edtech hiring",
    "specialized tech talent",
  ],
  openGraph: {
    title: "Specialized Industry Tech Recruitment",
    description:
      "Connect with tech talent that understands your industry. Expert recruitment across 9+ specialized sectors.",
    type: "website",
  },
}

export default function SpecializedIndustries() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        {/* Background Pattern */}
        <div className="absolute inset-0 " />
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#78B6D9]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#085689]/5 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-medium text-[#085689] uppercase tracking-widest mb-4 flex items-center justify-center gap-2">
              <Globe className="w-4 h-4" />
              {HERO_DATA.tagline}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight text-balance mb-6">
              {HERO_DATA.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty mb-10">
              {HERO_DATA.description}
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {STATS.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#085689] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid Section */}
      <ScrollReveal>
        <section className="px-4 py-20 md:px-8 md:py-28 bg-[#f5f5f5]/50">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-14">
              <p className="text-sm font-medium text-[#085689] uppercase tracking-widest mb-3">
                Our Expertise
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-4">
                Industries We Serve
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                From regulated environments to high-scale platforms, we deliver
                precise hiring solutions for niche and complex sectors.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {INDUSTRIES.map((industry, index) => {
                const Icon = industry.icon
                return (
                  <article
                    key={index}
                    className="group p-8 bg-white rounded-3xl border border-slate-100 hover:border-[#78B6D9]/30 hover:shadow-xl transition-all duration-300"
                    id={industry.slug}
                  >
                    <div className="flex items-start gap-6 mb-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#085689]/5 text-[#085689] group-hover:bg-[#78B6D9] group-hover:text-white transition-colors">
                          <Icon className="w-8 h-8" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-2xl text-black mb-2 leading-tight group-hover:text-[#085689] transition-colors">
                          {industry.title}
                        </h3>
                        <p className="text-slate-600 text-[15px] leading-relaxed">
                          {industry.description}
                        </p>
                      </div>
                    </div>

                    <div className="pl-0 lg:pl-22">
                      <p className="text-sm font-medium text-[#085689] mb-3 uppercase tracking-wide">
                        Key Focus Areas
                      </p>
                      <ul className="space-y-2">
                        {industry.highlights.map((highlight, hIndex) => (
                          <li
                            key={hIndex}
                            className="flex items-start gap-3 text-slate-600 text-[15px]"
                          >
                            <CheckCircle2 className="w-5 h-5 text-[#78B6D9] flex-shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Why Industry Expertise Matters */}
      <ScrollReveal>
        <section className="px-4 py-20 md:px-8 md:py-28 bg-transparent">
          <div className="mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm font-medium text-[#085689] uppercase tracking-widest mb-3">
                  Why It Matters
                </p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-6">
                  Domain Knowledge Drives Success
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Technical skills alone aren&apos;t enough. The best hires
                  understand the unique challenges, regulations, and
                  opportunities within your industry.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We understand the intersection between technology and
                  operational efficiency, ensuring candidates can operate in
                  highly technical environments while speaking your
                  industry&apos;s language.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    title: "Regulatory Knowledge",
                    desc: "Candidates who understand compliance requirements",
                  },
                  {
                    title: "Industry Networks",
                    desc: "Deep connections in specialized tech communities",
                  },
                  {
                    title: "Domain Expertise",
                    desc: "Technical skills paired with business context",
                  },
                  {
                    title: "Faster Ramp-Up",
                    desc: "Reduced onboarding time with industry experience",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-6 bg-[#f5f5f5] rounded-2xl border border-slate-100"
                  >
                    <h4 className="font-semibold text-black mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Industry Navigation */}
      <ScrollReveal>
        <section className="px-4 py-16 md:px-8 bg-[#085689]">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Jump to Industry
              </h3>
              <p className="text-[#78B6D9]">
                Quick navigation to your sector of interest
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {INDUSTRIES.map((industry, index) => {
                const Icon = industry.icon
                return (
                  <Link
                    key={index}
                    href={`#${industry.slug}`}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full text-sm font-medium transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                    {industry.title.split(" ")[0]}
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal>
        <section className="px-4 py-20 md:px-8 md:py-28 mb-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#085689]/5 rounded-full text-[#085689] text-sm font-medium mb-6">
              <Globe className="w-4 h-4" />
              Global Reach, Industry Focus
            </div>
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
