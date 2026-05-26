"use client"

import { memo } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { type EXPERTISE_AREAS } from "@/lib/constants/expertise"

type CardItem = (typeof EXPERTISE_AREAS)[0]

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

  return (
    <Link
      href={item.href}
      rel="noopener noreferrer"
      className={`group relative block overflow-hidden rounded-3xl bg-brand-navy ${className}`}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-linear-to-t from-brand-navy via-brand-navy/55 to-brand-navy/10" />

      <div className="absolute top-5 left-5 right-5 sm:top-6 sm:left-6 sm:right-6 flex items-start justify-between">
        <span className="font-bold italic text-[11px] sm:text-[12px] tracking-[0.18em] text-brand-white">
          — Sector · {number}
        </span>
        <span className="text-[10px] tracking-[0.22em] uppercase  bg-brand-navy/40 p-2 rounded-2xl text-brand-white font-bold">
          {item.stats}
        </span>
      </div>

      <div className="absolute inset-x-5 bottom-5 sm:inset-x-6 sm:bottom-6">
        <h3 className="font-bold uppercase tracking-[-0.02em] leading-[1.05] text-brand-white text-lg sm:text-xl lg:text-2xl mb-2">
          {item.title}
        </h3>
        <p className="text-brand-white/65 text-sm leading-snug line-clamp-2 mb-4 max-w-sm">
          {item.description}
        </p>
        <span className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-[0.22em] uppercase text-brand-coral group-hover:gap-3 transition-all duration-300">
          Learn more
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </span>
      </div>
    </Link>
  )
})
