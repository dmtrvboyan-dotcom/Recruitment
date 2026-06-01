"use client"

import { memo } from "react"
import Link from "next/link"
import Image from "next/image"
import { Eye } from "lucide-react"
import { type EXPERTISE_AREAS } from "@/lib/constants/expertise"

type CardItem = (typeof EXPERTISE_AREAS)[0]

const STAT_COLORS = [
  "text-[#]",
  "text-[#c4b0f0]",
  "text-[#90d4b0]",
  "text-[#80e0a0]",
  "text-[#90c8e0]",
  "text-[#FFC067]",
]

const NUMBER_COLORS = [
  "text-[#a8c0f0]",
  "text-[#c4b0f0]",
  "text-[#90d4b0]",
  "text-[#80e0a0]",
  "text-[#90c8e0]",
  "text-[#FFC067]",
]

export const ExpertiseCard = memo(function ExpertiseCard({
  item,
  index,
  className = "",
}: {
  item: CardItem
  index: number
  className?: string
}) {
  const number = String(index + 1).padStart(2, "0")
  const statColor = STAT_COLORS[index % STAT_COLORS.length]
  const numberColor = NUMBER_COLORS[index % NUMBER_COLORS.length]

  return (
    <Link
      href={item.href}
      rel="noopener noreferrer"
      className={`group relative flex items-center gap-4 sm:gap-5 lg:gap-6 rounded-2xl sm:rounded-2xl px-4 sm:px-6 lg:px-7 py-4 sm:py-5 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-px min-h-20 sm:min-h-22.5 ${className}`}
    >
      {/* Background image */}
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width: 1024px) 100vw, 70vw"
        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        priority={index < 2}
      />

      {/* Dark overlay — heavier on left for text legibility, lighter on right */}
      <div className="absolute inset-0 bg-linear-to-r from-brand-navy/35 via-brand-white/80 to-brand-white" />

      {/* Number */}
      <span
        className={`relative shrink-0 font-bold text-base sm:text-lg lg:text-xl leading-none select-none ${numberColor}`}
        aria-hidden
      >
        {number}
      </span>

      {/* Text */}
      <div className="relative flex-1 min-w-0">
        <h3 className="font-bold uppercase tracking-wide text-brand-white text-sm sm:text-base lg:text-[0.9375rem] leading-tight mb-0.5 sm:mb-1">
          {item.title}
        </h3>
        <p className="text-brand-white/60 text-xs sm:text-[0.8125rem] leading-snug line-clamp-2 max-w-md">
          {item.description}
        </p>
      </div>

      {/* Stats — hidden on mobile, shown sm+ */}
      <div className={`relative shrink-0 text-right hidden sm:block ${statColor}`}>
        <p className="font-bold text-xl sm:text-2xl lg:text-[1.75rem] leading-none">
          {item.stats}
        </p>
        <p className="text-[9px] sm:text-[10px] font-semibold tracking-[0.18em] uppercase text-brand-white/35 mt-0.5">
          Placements
        </p>
      </div>

      {/* Eye CTA button */}
      <div className="relative shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-brand-white/20 flex items-center justify-center transition-all duration-300 group-hover:border-brand-coral/60 group-hover:bg-brand-coral/10">
        <Eye className={`w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-white/60 group-hover:text-brand-coral transition-colors duration-300`} />
      </div>
    </Link>
  )
})