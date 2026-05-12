"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { TAG_ICON_MAP } from "./tag-icon-map"

/**
 * FeaturedExpertiseCard
 *
 * Two modes:
 *  - default (compact=false): full-width banner spanning all 12 cols — original behaviour.
 *  - compact (compact=true):  fits inside the bottom-right bento slot (col 7-12, row 4).
 *    In compact mode the layout stacks vertically and the CTA button is smaller.
 */
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
        target="_blank"
        className="group relative flex flex-col justify-between w-full h-full overflow-hidden rounded-3xl bg-brand-navy p-5 sm:p-6"
      >
        {/* Diagonal slash texture */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -62deg,
              transparent,
              transparent 70px,
              rgba(114,145,199,0.05) 70px,
              rgba(114,145,199,0.05) 71px
            )`,
          }}
        />

        {/* Coral glow */}
        <div
          aria-hidden
          className="absolute -top-20 -left-20 w-[280px] h-[280px] rounded-full bg-brand-coral/15 blur-[80px] pointer-events-none"
        />

        {/* Top label */}
        <div className="relative flex items-center gap-3 mb-4">
          <span className="block w-6 h-px bg-brand-coral" />
          <span className=" italic text-[11px] font-bold sm:text-[12px] tracking-[0.18em] text-brand-coral">
            — And more
          </span>
        </div>

        {/* Title + description */}
        <div className="relative flex-1">
          <h3 className="font-black uppercase tracking-[-0.02em] leading-[1.05] text-brand-white text-lg sm:text-xl mb-2">
            {title}
          </h3>
          <p className="text-brand-white/55 text-sm leading-snug line-clamp-2 mb-4">
            {description}
          </p>

          {/* Tags — all visible now that the card is wider */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tags.map((tag: string) => {
              const TagIcon =
                TAG_ICON_MAP[tag]?.icon ?? TAG_ICON_MAP._fallback.icon
              return (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-semibold uppercase tracking-[0.14em] bg-brand-white/5 text-brand-white/65 border border-brand-white/10"
                >
                  <TagIcon className="w-2.5 h-2.5 text-brand-coral" />
                  {tag}
                </span>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <span className="relative inline-flex items-center gap-2 text-[10px] font-semibold tracking-[0.22em] uppercase text-brand-coral group-hover:gap-3 transition-all duration-300">
          {cta ?? "Explore our reach"}
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
        </span>
      </Link>
    )
  }

  /* ── Default: full-width banner (original design) ── */
  return (
    <Link
      href={href}
      target="_blank"
      className="group relative block col-span-1 md:col-span-2 lg:col-span-12 overflow-hidden rounded-3xl bg-brand-navy"
    >
      {/* Diagonal slash texture */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -62deg,
            transparent,
            transparent 70px,
            rgba(114,145,199,0.05) 70px,
            rgba(114,145,199,0.05) 71px
          )`,
        }}
      />

      {/* Coral glow */}
      <div
        aria-hidden
        className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-brand-coral/15 blur-[110px] pointer-events-none"
      />

      {/* Watermark */}
      <div
        aria-hidden
        className="hidden lg:block absolute -bottom-6 -right-6 text-[10rem] font-black uppercase leading-[0.85] tracking-tighter text-brand-white/[0.035] select-none pointer-events-none"
      >
        REACH
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 p-7 sm:p-10 lg:p-14">
        {/* Left: editorial copy */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3.5 mb-6">
            <span className="block w-9 h-px bg-brand-coral" />
            <span className="font-serif italic text-[13px] tracking-[0.18em] text-brand-coral">
              — Global reach
            </span>
          </div>

          <h3 className="font-black uppercase tracking-[-0.02em] leading-[1.05] text-brand-white text-2xl sm:text-3xl lg:text-[2.5rem] mb-5 max-w-2xl">
            {title}
          </h3>

          <p className="text-brand-white/55 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 max-w-2xl">
            {description}
          </p>

          <span className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-brand-coral group-hover:bg-brand-coral-hover text-brand-white text-[11px] font-semibold tracking-[0.22em] uppercase rounded-full transition-colors duration-200">
            {cta ?? "Explore our reach"}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </div>

        {/* Right: industries tag cloud */}
        <div className="lg:col-span-5">
          <span className="text-[10px] tracking-[0.32em] uppercase text-brand-white/35 block mb-5">
            Industries we cover
          </span>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag: string) => {
              const TagIcon =
                TAG_ICON_MAP[tag]?.icon ?? TAG_ICON_MAP._fallback.icon
              return (
                <span
                  key={tag}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-[10px] font-semibold uppercase tracking-[0.18em] bg-brand-white/5 text-brand-white/70 border border-brand-white/10 hover:bg-brand-coral/10 hover:text-brand-coral hover:border-brand-coral/30 transition-colors duration-300"
                >
                  <TagIcon className="w-3 h-3 text-brand-coral" />
                  {tag}
                </span>
              )
            })}
          </div>
        </div>
      </div>
    </Link>
  )
}
