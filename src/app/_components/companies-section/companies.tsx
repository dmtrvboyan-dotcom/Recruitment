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
      className="py-16 sm:py-20 lg:py-32"
    >
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 lg:left-auto lg:-left-32 lg:translate-x-0 w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] lg:w-[520px] lg:h-[520px] rounded-full bg-brand-coral/18 blur-[80px] sm:blur-[100px] lg:blur-[120px] pointer-events-none"
      />

      <div
        aria-hidden
        className="hidden lg:block absolute top-[48%] -right-32 w-[420px] h-[420px] rounded-full bg-brand-teal/18 blur-[130px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14 lg:mb-20">
          <div className="flex items-center justify-center gap-3 sm:gap-3.5 mb-4 sm:mb-6">
            <span className="block w-5 sm:w-9 h-px bg-brand-coral" />
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] sm:tracking-[0.32em] uppercase text-brand-coral">
              Who we work with
            </span>
            <span className="block w-5 sm:w-9 h-px bg-brand-coral" />
          </div>
          <h2 className="text-[clamp(1.5rem,6vw,3.5rem)] font-black leading-[0.95] sm:leading-[0.92] tracking-tight uppercase text-brand-navy mb-4 sm:mb-6">
            Why <span className="text-brand-coral">Companies</span> Work With Us
          </h2>
          <div className="mx-auto h-[2px] w-10 sm:w-16 bg-brand-coral" />
        </div>

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 items-stretch max-w-5xl mx-auto">
          <div className="bg-brand-navy px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14 rounded-2xl sm:rounded-3xl">
            <SectionHeader label="Why Companies Choose Us" variant="dark" />
            <ul className="divide-y divide-white/10">
              {WHY_CHOOSE_US_POINTS.map((item, index) => (
                <CheckListItem key={index} item={item} variant="dark" />
              ))}
            </ul>
          </div>

          <div className="bg-brand-white border rounded-2xl sm:rounded-3xl border-brand-navy/8 px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14 -mt-1">
            <SectionHeader label="Hire with Clarity" variant="brand" />
            <ul className="divide-y divide-brand-navy/8">
              {HIRE_WITH_CLARITY_POINTS.map((item, index) => (
                <CheckListItem key={index} item={item} variant="brand" />
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-12 sm:mt-16 lg:mt-20">
          <Button
            asChild
            variant="outline"
            className="w-full sm:w-auto bg-brand-coral hover:bg-brand-coral-hover text-white px-8 py-6 sm:px-10 sm:py-7 text-sm font-bold tracking-widest uppercase rounded-full transition-all duration-300 shadow-xl shadow-brand-coral/20 cursor-pointer active:scale-95"
          >
            <Link href="/process" rel="noopener noreferrer">
              learn more how we work
            </Link>
          </Button>
          <Button
            onClick={handleNavigate}
            variant="outline"
            className="w-full sm:w-auto bg-transparent hover:bg-brand-navy text-brand-navy hover:text-white rounded-3xl px-8 py-6 text-sm font-semibold tracking-widest uppercase border-2 border-brand-navy cursor-pointer transition-colors duration-200"
          >
           <Link href="/contacts" rel="noopener noreferrer">
              Contact Us
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
