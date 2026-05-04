"use client"

import { memo } from "react"
import { PILLARS, type Pillar } from "./data"

const TimelineCard = memo(function TimelineCard({
  pillar,
  index,
}: {
  pillar: Pillar
  index: number
}) {
  const isLeft = index % 2 === 0
  const Icon = pillar.icon

  return (
    <div className="relative flex items-start w-full">

      {/* ── Desktop: alternating ── */}
      <div className="hidden lg:grid lg:grid-cols-[1fr_80px_1fr] w-full">

        {/* Left slot */}
        <div className="pr-16 flex flex-col justify-start items-end text-right">
          {isLeft && (
            <div className="max-w-lg">
              <div className="flex items-center justify-end gap-3 mb-4">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-brand-navy/25">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="w-10 h-10 rounded-xl bg-brand-coral/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-brand-coral" strokeWidth={1.6} />
                </div>
              </div>
              <h3 className="text-2xl xl:text-3xl font-black uppercase tracking-tight text-brand-navy mb-3">
                {pillar.heading}
              </h3>
              <p className="text-base xl:text-lg text-brand-navy/55 leading-relaxed">
                {pillar.body}
              </p>
            </div>
          )}
        </div>

        {/* Center spine */}
        <div className="flex flex-col items-center pt-3">
          <div className="w-5 h-5 rounded-full bg-brand-coral border-4 border-[#f9f9fb] shadow-sm ring-1 ring-brand-coral/30 z-10" />
        </div>

        {/* Right slot */}
        <div className="pl-16 flex flex-col justify-start items-start text-left">
          {!isLeft && (
            <div className="max-w-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-coral/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-brand-coral" strokeWidth={1.6} />
                </div>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-brand-navy/25">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-2xl xl:text-3xl font-black uppercase tracking-tight text-brand-navy mb-3">
                {pillar.heading}
              </h3>
              <p className="text-base xl:text-lg text-brand-navy/55 leading-relaxed">
                {pillar.body}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* ── Mobile: left-spine stacked ── */}
      <div className="flex lg:hidden items-start gap-5 w-full">
        <div className="flex flex-col items-center shrink-0 pt-1">
          <div className="w-4 h-4 rounded-full bg-brand-coral border-4 border-[#f9f9fb] shadow-sm ring-1 ring-brand-coral/30 z-10" />
        </div>
        <div className="flex-1 pb-2">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-xl bg-brand-coral/10 flex items-center justify-center shrink-0">
              <Icon className="w-4 h-4 text-brand-coral" strokeWidth={1.6} />
            </div>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-navy/25">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <h3 className="text-xl font-black uppercase tracking-tight text-brand-navy mb-2">
            {pillar.heading}
          </h3>
          <p className="text-sm text-brand-navy/55 leading-relaxed">
            {pillar.body}
          </p>
        </div>
      </div>

    </div>
  )
})

export const HowWeWork = memo(function HowWeWork() {
  return (
    <section className="relative w-full bg-[#f9f9fb]">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 xl:px-16 py-20 lg:py-32">

        {/* ── Section Header ── */}
        <div className="text-center mb-16 lg:mb-24">
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-brand-coral block mb-3">
            How We Work
          </span>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-none tracking-tight text-brand-navy mb-5">
            THE WAY WE OPERATE
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-brand-navy/50 max-w-lg mx-auto leading-relaxed">
            Every step is intentional. Here's what working with this team actually looks like.
          </p>
        </div>

        {/* ── Timeline ── */}
        <div className="relative">
          {/* Spine line */}
          <div className="absolute top-0 bottom-0 left-[7px] lg:left-1/2 lg:-translate-x-px w-px bg-brand-navy/10" />

          <div className="flex flex-col gap-14 lg:gap-20 relative pl-8 lg:pl-0">
            {PILLARS.map((pillar, i) => (
              <TimelineCard key={pillar.id} pillar={pillar} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
})
