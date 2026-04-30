"use client"

import Link from "next/link"
import { Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FeatureList } from "./feature-list"
import { ProductImage } from "./product-image"

export function SmartRSection() {
  return (
    <section
      id="smartr"
      className="py-24 md:py-32 px-6 relative overflow-hidden"
    >
      {/* Decorative background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-brand-blue)_0%,_transparent_15%)] opacity-[0.03] pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center flex flex-col items-center relative z-10">
        
        {/* Badge - Match Hero eyebrow style */}
        <div className="inline-flex items-center gap-2 bg-brand-blue/5 border border-brand-blue/10 px-4 py-2 rounded-full mb-8">
          <Sparkles className="w-4 h-4 text-orange-400" />
          <span className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.2em]">
            Proprietary Tech
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-navy mb-8 leading-[1.1]">
          Smart.R — Our Own <br />
          <span className="text-brand-blue">Applicant Tracking</span> System
        </h2>

        {/* Availability (untouched green) + features */}
        <div className="flex flex-col items-center mb-16">
          <span className="font-bold text-green-600 bg-green-100 px-4 py-1.5 rounded-full text-xs uppercase tracking-wider mb-2">
            ✦ Now available for purchase
          </span>
          <FeatureList />
        </div>

        {/* CTA - Coral for consistency with Hero's primary action */}
        <div className="mb-20">
          <Link href="/applicant-tracking-system" target="_blank">
            <Button className="bg-brand-coral hover:bg-brand-coral-hover text-white rounded-full px-10 py-7 text-sm font-bold uppercase tracking-widest transition-all duration-300 shadow-xl shadow-brand-coral/20 group">
              <span className="flex items-center gap-3">
                Learn more
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </Link>
        </div>

        <ProductImage />
      </div>
    </section>
  )
}