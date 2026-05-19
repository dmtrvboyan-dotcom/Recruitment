"use client"

import Link from 'next/link';
import { ArrowRight, ArrowDown } from "lucide-react"
import { AppButton } from '@/components/ui/app-button';


export function HeroSection() {
  const handleScrollToJobs = () => {
    document.getElementById("jobs")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-[100svh] bg-brand-navy overflow-hidden flex flex-col">


      <div
        aria-hidden
        className="absolute -top-32 -left-20 w-[420px] h-[420px] lg:w-[640px] lg:h-[640px] rounded-full bg-brand-coral/15 blur-[140px] pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute bottom-0 right-0 w-[320px] h-[320px] lg:w-[520px] lg:h-[520px] rounded-full bg-brand-teal/20 blur-[140px] pointer-events-none"
      />

      <div
        aria-hidden
        className="hidden md:block absolute -bottom-12 lg:-bottom-20 -left-4 text-[clamp(11rem,22vw,22rem)] font-black uppercase leading-[0.85] tracking-tighter text-brand-white/[0.025] select-none pointer-events-none whitespace-nowrap"
      >
        Careers
      </div>

      <div className="relative z-10 flex-1 flex flex-col">
        <div className="max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-12 pt-24 sm:pt-28 lg:pt-32">
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.32em] uppercase text-brand-coral tabular-nums">
              01
            </span>
            <span className="block w-10 sm:w-14 h-px bg-brand-coral" />
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.32em] uppercase text-brand-coral">
              Careers
            </span>
          </div>
        </div>

        <div className="flex-1 flex items-center">
          <div className="max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-end">
              <div className="lg:col-span-8">
                <h1 className="font-black uppercase leading-[0.9] tracking-[-0.02em] text-brand-white">
                  <span className="block text-[clamp(2.75rem,9vw,7.5rem)]">
                    Get
                  </span>
                  <span className="block text-[clamp(2.75rem,9vw,7.5rem)]">
                    <span className="text-brand-coral tracking-tight pr-2">
                      matched
                    </span>
                    <span className="">to</span>
                  </span>
                  <span className="block text-[clamp(2.75rem,9vw,7.5rem)]">the right roles<span className="text-brand-coral">.</span>
                  </span>
                </h1>
              </div>

              <div className="lg:col-span-4 lg:pl-6 lg:border-l lg:border-brand-white/10 space-y-6 sm:space-y-7">
                <p className="text-sm sm:text-base text-brand-white/65 leading-relaxed max-w-md">
                  Engineering, product, and design roles from European and US
                  companies. Curated briefs for senior makers -{" "}
                  <span className="text-brand-white underline">
                    many never advertised
                  </span>{" "}
                  publicly.
                </p>


                <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto animate-fade-in-up delay-300">
                  <AppButton href="/contacts" icon="arrow" className="sm:w-auto">
                   Send us your CV
                  </AppButton>

                  <AppButton    onClick={handleScrollToJobs} variant="outline" className="sm:w-auto">
                    Explore Open Roles
                  </AppButton>
                </div>


                {/* CTAs */}
                {/* <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:gap-3 pt-2">
                  <Link
                    href={"/contacts"}
                    className="group relative inline-flex items-center justify-between gap-4 px-6 py-4 bg-brand-coral text-brand-navy rounded-full hover:bg-brand-coral-hover transition-colors duration-200 text-[11px] font-semibold tracking-[0.22em] uppercase cursor-pointer"
                  >
                    <span>Send us your CV</span>
                    <ArrowRight
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                      strokeWidth={2}
                    />
                  </Link>
                  <button
                    onClick={handleScrollToJobs}
                    className="group relative inline-flex items-center justify-between gap-4 px-6 py-4 bg-transparent border border-brand-white/20 text-brand-white rounded-full hover:border-brand-coral hover:text-brand-coral transition-colors duration-200 text-[11px] font-semibold tracking-[0.22em] uppercase cursor-pointer"
                  >
                    <span>Explore Open Roles</span>
                    <ArrowDown
                      className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-200"
                      strokeWidth={2}
                    />
                  </button>
                </div> */}
              </div>
            </div>

            <div className="mt-14 sm:mt-20 lg:mt-24 pt-8 border-t border-brand-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {[
                { n: "120+", l: "Companies hiring" },
                { n: "EU", l: "Geographic focus" },
                { n: "48h", l: "Average response" },
                { n: "Senior+", l: "Curated level" },
              ].map((item) => (
                <div key={item.l}>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-white tabular-nums tracking-tight leading-none mb-2 sm:mb-3">
                    {item.n}
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] uppercase text-brand-coral">
                    {item.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="relative border-t border-brand-white/10 overflow-hidden py-5 sm:py-6">
          <div className="flex whitespace-nowrap animate-[scroll_40s_linear_infinite]">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="flex items-center gap-8 sm:gap-12 px-6 sm:px-8 text-[11px] sm:text-xs font-semibold tracking-[0.28em] uppercase text-brand-white/50 shrink-0"
              >
                <span>Open positions</span>
                <span className="text-brand-coral">★</span>
                <span>Engineering</span>
                <span className="text-brand-coral">★</span>
                <span>Product</span>
                <span className="text-brand-coral">★</span>
                <span>Design</span>
                <span className="text-brand-coral">★</span>
                <span>Confidential briefs</span>
                <span className="text-brand-coral">★</span>
                <span>EU · US · Remote</span>
                <span className="text-brand-coral">★</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
