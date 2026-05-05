"use client"

import { memo } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { EXPERTISE_AREAS } from "@/lib/constants/expertise"

export const ExpertiseCard = memo(function ExpertiseCard({
  item,
}: {
  item: (typeof EXPERTISE_AREAS)[0]
}) {
  return (
    <Link
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block relative overflow-hidden rounded-3xl border border-brand-white  hover:shadow-[0_8px_30px_rgb(0,0,0,0.10)] hover:-translate-y-1 transition-all duration-500"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0a3d62]/80 via-[#0a3d62]/40 to-transparent" />
      </div>

      {/* Stats badge */}
      <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-brand-navy/50 text-brand-white text-xs font-semibold shadow-sm">
        {item.stats}
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <h3 className="text-xl font-semibold text-brand-white mb-2">
          {item.title}
        </h3>

        <p className="text-brand-white/85 text-sm leading-relaxed mb-4 line-clamp-2">
          {item.description}
        </p>

        <div className="inline-flex self-start items-center text-brand-white p-1.5  text-[12px] font-bold uppercase tracking-widest rounded-3xl">
          <span>Learn more</span>
          <ArrowUpRight className="w-5 h-5 ml-1 text-brand-coral group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </div>
      </div>
      {/* Hover border overlay */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-brand-navy/15 transition-colors duration-300 pointer-events-none" />
    </Link>
  )
})