"use client"

import { memo, Fragment } from "react"
import { PROCESS_STEPS, type ProcessStep } from "./data"
import { AppButton } from "@/components/ui/app-button"

const StepCard = memo(function StepCard({
  step,
  index,
}: {
  step: ProcessStep
  index: number
}) {
  const isLeft = index % 2 === 0
  const Icon = step.icon

  return (
    <div className="relative flex items-start w-full">

      {/* ── Desktop: alternating layout ── */}
      <div className="hidden lg:grid lg:grid-cols-[1fr_80px_1fr] w-full">

        {/* Left slot */}
        <div className="pr-16 flex flex-col justify-start items-end text-right">
          {isLeft && (
            <div className="max-w-lg">
              {/* Phase label + icon */}
              <div className="flex items-center justify-end gap-3 mb-4">
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-brand-navy/30">
                  {step.phase}
                </span>
                <div className="w-11 h-11 rounded-2xl bg-brand-coral/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-brand-coral" strokeWidth={1.6} />
                </div>
              </div>
              <h3 className="text-2xl xl:text-3xl font-bold uppercase tracking-tight text-brand-navy mb-3">
                {step.heading}
              </h3>
              <p className="text-base xl:text-lg text-brand-navy/55 leading-relaxed">
                {step.body}
              </p>
            </div>
          )}
        </div>

        {/* Centre - node */}
        <div className="flex flex-col items-center pt-3">
          {/* Numbered circle */}
          <div className="w-8 h-8 rounded-full bg-brand-coral flex items-center justify-center z-10 shadow-md ring-4 ring-brand-white">
            <span className="text-[10px] font-bold text-white leading-none">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Right slot */}
        <div className="pl-16 flex flex-col justify-start items-start text-left">
          {!isLeft && (
            <div className="max-w-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-2xl bg-brand-coral/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-brand-coral" strokeWidth={1.6} />
                </div>
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-brand-navy/30">
                  {step.phase}
                </span>
              </div>
              <h3 className="text-2xl xl:text-3xl font-bold uppercase tracking-tight text-brand-navy mb-3">
                {step.heading}
              </h3>
              <p className="text-base xl:text-lg text-brand-navy/55 leading-relaxed">
                {step.body}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* ── Mobile: single column ── */}
      <div className="flex lg:hidden items-start gap-5 w-full">
        <div className="flex flex-col items-center shrink-0 pt-1">
          <div className="w-7 h-7 rounded-full bg-brand-coral flex items-center justify-center shadow-sm ring-4 ring-brand-white z-10">
            <span className="text-[9px] font-bold text-white leading-none">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        </div>
        <div className="flex-1 pb-2">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-xl bg-brand-coral/10 flex items-center justify-center shrink-0">
              <Icon className="w-4 h-4 text-brand-coral" strokeWidth={1.6} />
            </div>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-navy/30">
              {step.phase}
            </span>
          </div>
          <h3 className="text-xl font-bold uppercase tracking-tight text-brand-navy mb-2">
            {step.heading}
          </h3>
          <p className="text-sm text-brand-navy/55 leading-relaxed">
            {step.body}
          </p>
        </div>
      </div>
    </div>
  )
})

export const ProcessTimeline = memo(function ProcessTimeline() {
  return (
    <section className="relative w-full bg-brand-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 xl:px-16 py-20 lg:py-32">

        {/* Section header */}
        <div className="text-center mb-16 lg:mb-24">
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-brand-coral block mb-3">
            Step by Step
          </span>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-none tracking-tight text-brand-navy mb-5">
            THE <span className="text-brand-coral">SIX</span> PHASES
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-brand-navy/50 max-w-lg mx-auto leading-relaxed">
            From first conversation to signed offer - here is exactly what happens and when.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical spine */}
          <div className="absolute top-0 bottom-0 left-3.25 lg:left-1/2 lg:-translate-x-px w-px bg-brand-navy/10" />

          <div className="flex flex-col gap-14 lg:gap-20 relative pl-10 lg:pl-0">
            {PROCESS_STEPS.map((step, i) => (
              <Fragment key={step.id}>
                <StepCard step={step} index={i} />

                {step.ctaAfter && (
                  <div className="flex justify-center lg:justify-center">
                    <AppButton href={step.ctaAfter.href} icon="arrow" className="sm:w-auto">
                      {step.ctaAfter.text}
                    </AppButton>
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-16 lg:mt-24 rounded-2xl border border-brand-coral/20 bg-brand-coral/5 px-8 py-6 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="w-1 self-stretch bg-brand-coral rounded-full shrink-0 hidden sm:block" />
          <p className="text-sm sm:text-base text-brand-navy/70 leading-relaxed">
            <span className="font-bold text-brand-navy">No hire, no invoice.</span>{" "}
            Our fee is only due upon a successful placement. If the process starts over, so do we - at no extra cost.
          </p>
        </div>

      </div>
    </section>
  )
})