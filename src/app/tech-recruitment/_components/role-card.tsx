"use client"

import { memo } from "react"
import { ArrowUpRight } from "lucide-react"
import { type TechCategory } from "@/lib/constants/specialized"
import { SECTION_IDS } from "../data"

function getElementCode(title: string): string {
  const cleaned = title.replace(/[&,/]/g, "").replace(/\s+/g, " ").trim()
  const words = cleaned
    .split(" ")
    .filter((w) => !["and", "or", "the", "of", "for"].includes(w.toLowerCase()))
  if (words.length === 0) return "XX"
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase()
  return (words[0][0] + words[1][0]).toUpperCase()
}

export const RoleCard = memo(function RoleCard({
  category,
  index,
}: {
  category: TechCategory
  index: number
}) {
  const number = String(index + 1).padStart(2, "0")
  const code = getElementCode(category.title)
  const sectionId = SECTION_IDS[category.id] ?? category.id
  const visibleTechs = category.techs.slice(0, 4)
  const remaining = category.techs.length - visibleTechs.length

  return (
    <a
      href={`#${sectionId}`}
      className="group relative w-full text-left bg-brand-white/[0.02] border border-brand-white/10 hover:border-brand-coral/50 hover:bg-brand-white/[0.04] rounded-2xl p-5 sm:p-6 transition-all duration-300 overflow-hidden flex flex-col"
    >
      {/* Top: number + icon-area */}
      <div className="flex items-start justify-between mb-4 sm:mb-5">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-brand-coral">
            {number}
          </span>
          <div className="h-px w-4 sm:w-5 bg-brand-coral/40" />
        </div>
      </div>

  

      {/* Title */}
      <h3 className="font-bold uppercase tracking-[-0.01em] leading-[1.05] text-brand-white text-sm sm:text-base mb-1.5">
        {category.title}
      </h3>

      {/* Subtitle */}
      <p className="text-[11px] sm:text-[12px] text-brand-white/45 leading-snug mb-5 line-clamp-2">
        {category.subtitle}
      </p>

      {/* Tech pills */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {visibleTechs.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-medium uppercase tracking-wide bg-brand-white/5 text-brand-white/60 border border-brand-white/10 group-hover:bg-brand-coral/10 group-hover:text-brand-coral group-hover:border-brand-coral/30 transition-colors duration-300"
          >
            {tech}
          </span>
        ))}
      
      </div>

      {/* Mini stats */}
      {/* <div className="mt-auto pt-4 border-t border-brand-white/8 flex items-center justify-between">
        <div className="flex items-center gap-4 sm:gap-6">
          <div>
            <span className="text-base sm:text-lg font-bold text-brand-white leading-none">
              {category.stat1Value}
            </span>
            <span className="block text-[8px] sm:text-[9px] tracking-[0.18em] uppercase text-brand-white/40 mt-1">
              {category.stat1Label}
            </span>
          </div>
          <div className="h-6 w-px bg-brand-white/10" />
          <div>
            <span className="text-base sm:text-lg font-bold text-brand-white leading-none">
              {category.stat2Value}
            </span>
            <span className="block text-[8px] sm:text-[9px] tracking-[0.18em] uppercase text-brand-white/40 mt-1">
              {category.stat2Label}
            </span>
          </div>
        </div>
        <ArrowUpRight
          className="w-5 h-5 text-brand-coral opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
          strokeWidth={1.5}
        />
      </div> */}
    </a>
  )
})