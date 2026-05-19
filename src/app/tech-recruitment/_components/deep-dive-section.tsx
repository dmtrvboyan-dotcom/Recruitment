"use client"

import { memo } from "react"
import Link from "next/link"
import { ArrowRight, Search, CheckCircle } from "lucide-react"
import { type TechCategory } from "@/lib/constants/specialized"
import { SECTION_IDS } from "../data";
import { AppButton } from '@/components/ui/app-button';


export const DeepDiveSection = memo(function DeepDiveSection({
  category,
  index,
}: {
  category: TechCategory
  index: number
}) {
  const isDark = index % 2 === 0
  const number = String(index + 1).padStart(2, "0")
  const sectionId = SECTION_IDS[category.id] ?? category.id

  const bg = isDark ? "bg-brand-navy" : "bg-brand-white"
  const headingColor = isDark ? "text-brand-white" : "text-brand-navy"
  const bodyColor = isDark ? "text-brand-white/65" : "text-brand-navy/65"
  const mutedColor = isDark ? "text-brand-white/45" : "text-brand-navy/45"
  const borderColor = isDark ? "border-brand-white/10" : "border-brand-navy/8"
  const cardBg = isDark ? "bg-brand-white/[0.03]" : "bg-brand-navy/[0.02]"
  const pillBg = isDark
    ? "bg-brand-white/5 text-brand-white/65 border-brand-white/10"
    : "bg-brand-navy/5 text-brand-navy/65 border-brand-navy/10"
  const statColor = isDark ? "text-brand-white" : "text-brand-navy"
  const watermarkColor = isDark
    ? "text-brand-white/[0.025]"
    : "text-brand-navy/[0.03]"
  const diagonalColor = isDark
    ? "rgba(114,145,199,0.05)"
    : "rgba(26,26,46,0.022)"

  return (
    <section
      id={sectionId}
      className={`relative py-20 sm:py-24 lg:py-28 ${bg} overflow-hidden`}
    >



      {/* Coral glow — alternating position */}
      <div
        aria-hidden
        className={`absolute -top-32 w-[360px] h-[360px] lg:w-[480px] lg:h-[480px] rounded-full bg-brand-coral/12 blur-[120px] pointer-events-none ${index % 2 === 0
            ? "left-1/4"
            : "right-1/4"
          }`}
      />

      {/* Watermark — category element code */}
      <div
        aria-hidden
        className={`hidden lg:block absolute top-1/2 -translate-y-1/2 text-[clamp(10rem,18vw,15rem)] font-black uppercase leading-[0.85] tracking-tighter ${watermarkColor} select-none pointer-events-none whitespace-nowrap ${index % 2 === 0 ? "right-0" : "left-0"
          }`}
      >
        {number}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* ── Header ── */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-14 lg:mb-16">
          <div className="flex items-center justify-center gap-3 sm:gap-3.5 mb-5 sm:mb-6">
            <span className="block w-6 sm:w-9 h-px bg-brand-coral" />
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] sm:tracking-[0.32em] uppercase text-brand-coral">
              {category.categoryLabel} · {number}
            </span>
            <span className="block w-6 sm:w-9 h-px bg-brand-coral" />
          </div>

          <h2
            className={`text-[clamp(1.5rem,5vw,3rem)] font-black leading-[0.95] sm:leading-[0.92] tracking-tight uppercase ${headingColor} mb-4 sm:mb-5`}
          >
            {category.title}
          </h2>

          <p className={`text-sm sm:text-base ${mutedColor} leading-relaxed max-w-2xl mx-auto px-2 sm:px-0`}>
            {category.subtitle}
          </p>

          <div className="mx-auto h-[2px] w-12 sm:w-16 bg-brand-coral mt-6" />
        </div>

        {/* ── Tech pills: What we recruit for ── */}
        <div className="max-w-3xl mx-auto mb-12 sm:mb-14">
          <p className={`text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] uppercase text-brand-coral text-center mb-4 sm:mb-5`}>
            What we recruit for
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {category.techs
              .filter((t) => t.trim() !== "")
              .map((tech) => (
                <span
                  key={tech}
                  className={`inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.15em] border ${pillBg}`}
                >
                  {tech}
                </span>
              ))}
          </div>
        </div>

        {/* ── Two-column: How We Source / What You Get ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 max-w-5xl mx-auto mb-12 sm:mb-14">
          {/* How We Source */}
          <div
            className={`rounded-3xl ${cardBg} border ${borderColor} p-6 sm:p-8`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-brand-coral/15 flex items-center justify-center shrink-0">
                <Search className="w-5 h-5 text-brand-coral" strokeWidth={1.5} />
              </div>
              <h3 className="text-[11px] font-semibold tracking-[0.22em] uppercase text-brand-coral">
                How we source talent
              </h3>
            </div>

            <ul className="space-y-3 sm:space-y-4">
              {category.howWeSource.map((point, i) => (
                <li
                  key={i}
                  className={`flex items-start gap-3 text-sm sm:text-base ${bodyColor} leading-relaxed`}
                >
                  <span className="text-brand-coral text-lg leading-none mt-0.5 shrink-0">
                    &bull;
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What You Get */}
          <div
            className={`rounded-3xl ${cardBg} border ${borderColor} p-6 sm:p-8`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-brand-coral/15 flex items-center justify-center shrink-0">
                <CheckCircle
                  className="w-5 h-5 text-brand-coral"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-[11px] font-semibold tracking-[0.22em] uppercase text-brand-coral">
                What you get
              </h3>
            </div>

            <ul className="space-y-3 sm:space-y-4">
              {category.whatYouGet.map((point, i) => (
                <li
                  key={i}
                  className={`flex items-start gap-3 text-sm sm:text-base ${bodyColor} leading-relaxed`}
                >
                  <span className="text-brand-coral text-lg leading-none mt-0.5 shrink-0">
                    &bull;
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Stats + CTA ── */}
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          {/* Stats row */}
          <div
            className={`inline-flex items-center gap-6 sm:gap-8 px-6 sm:px-8 py-4 sm:py-5 rounded-2xl ${cardBg} border ${borderColor} mb-8 sm:mb-10`}
          >
            <div className="text-center">
              <span
                className={`text-2xl sm:text-3xl font-black ${statColor} tabular-nums tracking-tight leading-none`}
              >
                {category.stat1Value}
              </span>
              <span className="block text-[9px] sm:text-[10px] tracking-[0.22em] uppercase text-brand-coral mt-1.5 font-semibold">
                {category.stat1Label}
              </span>
            </div>
            <div className={`h-8 w-px ${borderColor}`} />
            <div className="text-center">
              <span
                className={`text-2xl sm:text-3xl font-black ${statColor} tabular-nums tracking-tight leading-none`}
              >
                {category.stat2Value}
              </span>
              <span className="block text-[9px] sm:text-[10px] tracking-[0.22em] uppercase text-brand-coral mt-1.5 font-semibold">
                {category.stat2Label}
              </span>
            </div>
          </div>


          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto animate-fade-in-up delay-300">
            <AppButton href="/contacts" icon="arrow" className="sm:w-auto">
               Hire {category.title.split(" ")[0]}{" "}
            {category.title.split(" ")[1] ?? "Talent"}
            </AppButton>
          </div>


        
        </div>
      </div>
    </section>
  )
})