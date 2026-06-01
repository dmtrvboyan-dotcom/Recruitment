"use client"

import { memo } from "react"
import { X, ArrowUpRight, CheckCircle } from "lucide-react"
import { type Service } from "@/lib/constants/services"
import { AppButton } from '@/components/ui/app-button'

export const DesktopPanel = memo(function DesktopPanel({
  service,
  onClose,
}: {
  service: Service | null
  onClose: () => void
}) {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-start justify-end transition-all duration-300 ${service ? "visible" : "invisible"
        }`}
    >
      <div
        className={`absolute inset-0 bg-brand-navy/40 backdrop-blur-sm transition-opacity duration-300 ${service ? "opacity-100" : "opacity-0"
          }`}
        onClick={onClose}
      />

      <div
        className={`relative h-full w-full md:w-[55%] lg:w-[50%] bg-brand-white shadow-2xl transform transition-transform duration-500 ease-out overflow-y-auto ${service ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="sticky top-0 left-0 right-0 h-0.75 bg-brand-coral z-20" />

        {service && (
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 lg:top-7 lg:right-7 z-10 w-11 h-11 rounded-full bg-brand-navy hover:bg-brand-coral text-brand-white flex items-center justify-center transition-colors duration-200"
              aria-label="Close"
            >
              <X className="w-5 h-5" strokeWidth={2} />
            </button>

            <div className="px-6 lg:px-12 pt-14 lg:pt-16 pb-12 flex flex-col items-center text-center">
              {/* Eyebrow */}
              <div className="flex items-center gap-3.5 mb-7">
                <span className="block w-9 h-px bg-brand-coral" />
                <span className="text-[11px] font-semibold tracking-[0.32em] uppercase text-brand-coral">
                  Service
                </span>
                <span className="block w-9 h-px bg-brand-coral" />
              </div>

              {/* Service icon */}
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-brand-navy/5 flex items-center justify-center mb-7">
                <service.icon
                  className={`w-6 h-6 lg:w-7 lg:h-7 ${service.iconColor}`}
                  strokeWidth={1.5}
                />
              </div>

              {/* Title */}
              <h3 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold uppercase tracking-tight leading-[1.05] text-brand-navy mb-3 max-w-xl">
                {service.title}
              </h3>

              {/* Intro */}
              {service.intro && (
                <p className="text-base lg:text-lg text-brand-coral font-semibold mb-5 max-w-lg">
                  {service.intro}
                </p>
              )}

              <div className="h-0.5 w-12 bg-brand-coral mb-10" />

              {/* Sections — two columns */}
              <div className="w-full grid grid-cols-1 [@media(min-width:1235px)]:grid-cols-2 gap-8 lg:gap-10 mb-12 text-left">
                {service.sections.map((section, idx) => {
                  const HeadingIcon = section.headingIcon
                  return (
                    <div key={idx}>
                      {/* Section heading with icon */}
                      <div className="flex items-center gap-2.5 mb-5">
                        <div className="w-8 h-8 rounded-lg bg-brand-navy flex items-center justify-center shrink-0">
                          <HeadingIcon className="w-4 h-4 text-brand-white" strokeWidth={1.75} />
                        </div>
                        <h4 className="text-sm font-bold tracking-[0.15em] uppercase text-brand-navy">
                          {section.heading}
                        </h4>
                      </div>

                      {/* Points with checkmark + bold title + description */}
                      <ul className="space-y-4">
                        {section.points.map((point, i) => (
                          point.title ? (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle
                                className="w-5 h-5 text-brand-coral shrink-0 mt-0.5"
                                strokeWidth={1.75}
                              />
                              <div>
                                <p className="text-sm font-bold text-brand-navy leading-snug">
                                  {point.title}
                                </p>
                                {point.description && (
                                  <p className="text-sm text-brand-navy/60 leading-relaxed mt-0.5">
                                    {point.description}
                                  </p>
                                )}
                              </div>
                            </li>
                          ) : null
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>

              {/* CTA */}
              <div className="flex flex-row items-center justify-center gap-4">
                <AppButton href={service.href} ping>
                  Learn more about our service{" "}
                  <span className="sr-only">about {service.title}</span>
                  <ArrowUpRight
                    className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                    strokeWidth={1.5}
                  />
                </AppButton>
              </div>
            </div>

            {/* Stats bar */}
            <div className="bg-brand-navy text-brand-white px-6 lg:px-12 py-10 lg:py-12">
              <div className="grid grid-cols-3 gap-4 lg:gap-6 max-w-3xl mx-auto w-full">
                {service.stats.filter(s => s.value).map((stat, idx) => {
                  const StatIcon = stat.icon
                  return (
                    <div key={idx} className="flex items-start gap-3 min-w-0">
                      {/* Icon */}
                      <div className="shrink-0 w-10 h-10 rounded-full border border-brand-white/15 flex items-center justify-center mt-0.5">
                        <StatIcon className="w-4 h-4 text-brand-white/60" strokeWidth={1.5} />
                      </div>
                      {/* Text */}
                      <div>
                        <div className="text-lg lg:text-xl font-bold text-brand-white leading-tight tracking-tight break-words">
                          {stat.value}
                        </div>
                        <div className="text-[10px] tracking-[0.2em] uppercase text-brand-coral font-semibold mt-1.5 leading-snug">
                          {stat.label}
                        </div>
                        {stat.sublabel && (
                          <div className="text-[11px] text-brand-white/40 mt-0.5 leading-snug">
                            {stat.sublabel}
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
})