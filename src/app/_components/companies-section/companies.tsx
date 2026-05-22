"use client"

import { useCallback } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { WHY_CHOOSE_US_POINTS, HIRE_WITH_CLARITY_POINTS } from "@/lib/constants/companies"
import { scrollToSection } from "@/lib/utils/scroll"
import { CheckListItem } from "./check-list-item"
import { SectionHeader } from "./section-header"
import { AppButton } from '@/components/ui/app-button';


export function CompaniesSection() {
  const handleNavigate = useCallback(() => {
    scrollToSection("#contact")
  }, [])

  return (
    <section
      id="companies"
      className="py-16 sm:py-20 lg:py-32 bg-brand-navy"
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
          <h2 className="text-[clamp(1.5rem,6vw,3.5rem)] font-bold leading-[0.95] sm:leading-[0.92] tracking-tight uppercase text-brand-white mb-4 sm:mb-6">
            Why <span className="text-brand-coral">Companies</span> Work With Us
          </h2>
          <div className="mx-auto h-[2px] w-10 sm:w-16 bg-brand-coral" />
        </div>

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 items-stretch max-w-5xl mx-auto">

          {/* Glass card — white/frosted */}
          <div
            className="relative bg-brand-white/92 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/90 px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14 overflow-hidden"
            style={{
              boxShadow:
                "inset 0 2px 0 rgba(255,255,255,0.8), 0 24px 48px rgba(0,0,0,0.28), 0 4px 12px rgba(0,0,0,0.12)",
            }}
          >
            {/* Top sheen */}
            <div
              aria-hidden
              className="absolute top-0 left-8 right-8 h-px bg-white/80 pointer-events-none"
            />
            {/* Soft corner tint */}
            <div
              aria-hidden
              className="absolute -bottom-10 -right-8 w-36 h-36 bg-brand-coral/6 blur-2xl rounded-full pointer-events-none"
            />
            <SectionHeader label="Why Companies Choose Us" variant="brand" />
            <ul className="divide-y divide-brand-navy/8">
              {WHY_CHOOSE_US_POINTS.map((item, index) => (
                <CheckListItem key={index} item={item} variant="brand" />
              ))}
            </ul>
          </div>

          {/* Dark blend card — melts into the section bg */}
          <div
            className="relative bg-brand-navy/50 rounded-2xl sm:rounded-3xl border border-brand-coral/14 px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14 overflow-hidden"
            style={{
              boxShadow:
                "inset 0 0 0 1px rgba(255,255,255,0.04), 0 24px 48px rgba(0,0,0,0.22)",
            }}
          >
            {/* Subtle top glow line */}
            <div
              aria-hidden
              className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-coral/30 to-transparent pointer-events-none"
            />
            {/* Corner radial */}
            <div
              aria-hidden
              className="absolute -top-12 -right-10 w-44 h-44 bg-brand-teal/15 blur-2xl rounded-full pointer-events-none"
            />
            <SectionHeader label="Hire with Clarity" variant="dark" />
            <ul className="divide-y divide-white/6">
              {HIRE_WITH_CLARITY_POINTS.map((item, index) => (
                <CheckListItem key={index} item={item} variant="dark" />
              ))}
            </ul>
          </div>

        </div>
      </div>


      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-12 sm:mt-16 lg:mt-20">
        <AppButton href="/process" icon="arrow">
          learn more how we work
        </AppButton>

        <AppButton href="/contacts" variant="outline">
          Contact Us
        </AppButton>
      </div>
    </section>
  )
}