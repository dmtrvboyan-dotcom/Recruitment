"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { TAG_ICON_MAP } from "./tag-icon-map"

export function FeaturedExpertiseCard({
  data,
  compact = false,
}: {
  data: any
  compact?: boolean
}) {
  const { title, description, href, tags, cta } = data

  if (compact) {
    return (
      <Link
        href={href}
        className="group relative flex flex-col w-full h-full overflow-hidden rounded-2xl sm:rounded-3xl bg-brand-navy px-5 sm:px-6 py-6 sm:py-8 transition-all duration-300 hover:shadow-xl"
      >
        {/* Subtle glow blob */}
        <div
          aria-hidden
          className="absolute -top-16 -left-16 w-56 h-56 rounded-full bg-brand-coral/10 blur-[80px] pointer-events-none"
        />

        {/* Label */}
        <div className="relative flex items-center gap-2.5 mb-4 sm:mt-20 mt-0">
          <span className="block w-5 h-px bg-brand-coral" />
          <span className="italic text-[11px] font-bold tracking-[0.18em] text-brand-coral ">
            — And more
          </span>
        </div>

        {/* Heading */}
        <h3 className="relative font-bold uppercase tracking-[-0.01em] leading-[1.05] text-brand-white text-lg sm:text-xl mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="relative text-brand-white/50 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4">
          {description}
        </p>

        {/* Tags */}
        <div className="relative flex flex-wrap gap-1.5 mb-5 ">
          {tags.map((tag: string) => {
            const TagIcon =
              TAG_ICON_MAP[tag]?.icon ?? TAG_ICON_MAP._fallback.icon
            return (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-semibold uppercase tracking-[0.12em] bg-brand-white/5 text-brand-white/60 border border-brand-white/10"
              >
                <TagIcon className="w-2.5 h-2.5 text-brand-coral shrink-0" />
                {tag}
              </span>
            )
          })}
        </div>

        {/* CTA */}
        <span className="relative mt-auto inline-flex items-center gap-2 text-[10px] font-semibold tracking-[0.22em] uppercase text-brand-coral group-hover:gap-3 transition-all duration-300">
          {cta ?? "Learn more about our reach"}
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
        </span>
      </Link>
    )
  }

  // Full (non-compact) variant — unchanged from original
 
  
}