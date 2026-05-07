"use client"

import { useCallback } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { WHY_CHOOSE_US_POINTS, HIRE_WITH_CLARITY_POINTS } from "@/lib/constants/companies"
import { scrollToSection } from "@/lib/utils/scroll"
import { CheckListItem } from "./check-list-item"
import { SectionHeader } from "./section-header"

export function CompaniesSection() {
  const handleNavigate = useCallback(() => {
    scrollToSection("#contact")
  }, [])

  return (
    <section
      id="companies"
      className="py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <p className="text-xs font-bold text-brand-coral uppercase tracking-[0.2em] mb-4">
            Who we work with
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-brand-navy text-balance">
            Why Companies Work With Us
          </h2>
        </div>

        {/* Two-column content */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start max-w-6xl mx-auto">
          <div className="bg-white p-8 lg:p-0 rounded-3xl lg:bg-transparent">
            <SectionHeader label="Why Companies Choose Us" variant="dark" />
            <ul className="space-y-8">
              {WHY_CHOOSE_US_POINTS.map((item, index) => (
                <CheckListItem key={index} item={item} variant="dark" />
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 lg:p-0 rounded-3xl lg:bg-transparent border border-brand-navy/5 lg:border-none">
            <SectionHeader label="Hire with Clarity" variant="brand" />
            <ul className="space-y-8">
              {HIRE_WITH_CLARITY_POINTS.map((item, index) => (
                <CheckListItem key={index} item={item} variant="brand" />
              ))}
            </ul>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-20">

       
          <Button
            asChild
            variant="outline"
            className="bg-brand-coral hover:bg-brand-coral-hover text-white px-10 py-7 text-sm font-bold tracking-widest uppercase rounded-full transition-all duration-300 shadow-xl shadow-brand-coral/20 cursor-pointer active:scale-95"
          >
            <Link href="/process" target="_blank" rel="noopener noreferrer">How We Work</Link>
          </Button>

        </div>
      </div>
    </section>
  )
}
