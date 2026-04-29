"use client"

import Link from "next/link"
import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FeatureList } from "./feature-list"
import { ProductImage } from "./product-image"

export function SmartRSection() {
  return (
    <section
      id="smartr"
      className="py-24 md:py-32 px-6 lg:pb-[170px] md:pb-[50px] bg-linear-to-b from-[#f9f9f9] to-[#085689]/12 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Sparkles className="w-4 h-4 text-orange-500" />
          <span className="text-sm font-medium text-[#085689] uppercase tracking-wider">
            Own Technology
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-12">
          Smart.R — Own{" "}
          <span className="text-[#085689]">Applicant Tracking</span> system
        </h2>

        {/* Availability + features */}
        <div className="text-lg leading-relaxed mb-12 max-w-2xl">
          <span className="font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full">
            ✦ Now available for purchase
          </span>
          <FeatureList />
        </div>

        {/* CTA */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <Link href="/applicant-tracking-system" target="_blank">
            <Button className="bg-[#085689] text-white hover:bg-[#78B6D9] hover:text-black rounded-lg px-8 py-6 text-base cursor-pointer">
              Learn more
            </Button>
          </Link>
        </div>

        <ProductImage />
      </div>
    </section>
  )
}
