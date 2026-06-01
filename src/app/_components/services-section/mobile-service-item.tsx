"use client"

import { memo } from "react"
import { ChevronDown, ArrowUpRight, CheckCircle } from "lucide-react"
import { type Service } from "@/lib/constants/services"
import { AppButton } from '@/components/ui/app-button'

export const MobileServiceItem = memo(function MobileServiceItem({
  service,
  index,
  isOpen,
  onToggle,
  variant = "default",
}: {
  service: Service
  index: number
  isOpen: boolean
  onToggle: () => void
  variant?: "default" | "feature" | "wide"
}) {
  const isFeature = variant === "feature"
  const isWide = variant === "wide"
  const number = String(index + 1).padStart(2, "0")

  return (
    <div
      className={`relative overflow-hidden transition-colors duration-300
        ${isFeature
          ? "bg-brand-navy text-brand-white border-t-2 border-b-2 border-l-2 border-r-2"
          : isWide
          ? "bg-brand-navy text-brand-white border-t-2 border-b-2 border-l-2 border-r-2"
          : `bg-brand-white border-l-2 border-r-2 border-b-2 text-brand-navy ${isOpen ? "bg-brand-coral/5" : ""}`
        }
      `}
    >
      <button
        onClick={onToggle}
        className="w-full text-left p-5 sm:p-6 flex flex-col gap-4"
      >
        <div className="flex items-start justify-between">
          {isFeature || isWide ? (
            <span className="font-serif italic text-[12px] tracking-[0.18em] text-brand-coral" />
          ) : (
            <span
              className={`font-bold leading-[0.85] tracking-[-0.04em] text-4xl sm:text-5xl transition-colors duration-300
                ${isOpen ? "text-brand-coral/40" : "text-brand-navy/50"}
              `}
            >
              {number}
            </span>
          )}

          {isFeature || isWide ? (
            <ChevronDown
              className={`w-6 h-6 text-brand-coral shrink-0 transition-transform duration-500 ${
                isOpen ? "rotate-180" : ""
              }`}
              strokeWidth={1.5}
            />
          ) : (
            <ChevronDown
              className={`w-5 h-5 text-brand-navy/40 shrink-0 transition-transform duration-500 ${
                isOpen ? "rotate-180 text-brand-coral" : ""
              }`}
              strokeWidth={1.5}
            />
          )}
        </div>

        <div className="flex items-end justify-between gap-4">
          <div className="flex-1 min-w-0">
            {(isFeature || isWide) && (
              <div className="font-bold leading-[0.85] tracking-[-0.04em] text-brand-coral/20 text-6xl sm:text-7xl mb-2">
                {number}
              </div>
            )}
            <h3
              className={`font-bold uppercase tracking-[-0.015em] leading-[1.05]
                ${isFeature || isWide ? "text-xl sm:text-2xl" : "text-base sm:text-lg"}
              `}
            >
              {service.title}
            </h3>
            {service.subtitle && !isOpen && (
              <p
                className={`mt-1.5 text-[13px] leading-snug
                  ${isFeature || isWide ? "text-brand-white/55" : "text-brand-navy/55"}
                `}
              >
                {service.subtitle}
              </p>
            )}
          </div>
        </div>
      </button>

      {/* Expanded content */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 sm:px-6 pb-6 sm:pb-7">
          <div
            className={`h-px w-full mb-6 ${
              isFeature || isWide ? "bg-brand-coral/30" : "bg-brand-navy/10"
            }`}
          />

          {service.intro && (
            <p className="text-sm font-medium mb-6 text-brand-coral">
              {service.intro}
            </p>
          )}

          <div className="space-y-7">
            {service.sections.map((section, idx) => {
              const HeadingIcon = section.headingIcon
              const dark = isFeature || isWide
              return (
                <div key={idx}>
                  {/* Section heading with icon */}
                  <div className="flex items-center gap-2.5 mb-4">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                        dark ? "bg-brand-white/10" : "bg-brand-navy"
                      }`}
                    >
                      <HeadingIcon
                        className={`w-3.5 h-3.5 ${
                          dark ? "text-brand-coral" : "text-brand-white"
                        }`}
                        strokeWidth={1.75}
                      />
                    </div>
                    <h4
                      className={`text-[11px] font-bold tracking-[0.22em] uppercase ${
                        dark ? "text-brand-coral" : "text-brand-navy"
                      }`}
                    >
                      {section.heading}
                    </h4>
                  </div>

                  {/* Points */}
                  <ul className="space-y-3.5">
                    {section.points.map((point, i) =>
                      point.title ? (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle
                            className="w-4 h-4 text-brand-coral shrink-0 mt-0.5"
                            strokeWidth={1.75}
                          />
                          <div>
                            <p
                              className={`text-sm font-bold leading-snug ${
                                dark ? "text-brand-white" : "text-brand-navy"
                              }`}
                            >
                              {point.title}
                            </p>
                            {point.description && (
                              <p
                                className={`text-xs leading-relaxed mt-0.5 ${
                                  dark ? "text-brand-white/60" : "text-brand-navy/60"
                                }`}
                              >
                                {point.description}
                              </p>
                            )}
                          </div>
                        </li>
                      ) : null
                    )}
                  </ul>
                </div>
              )
            })}
          </div>

          {/* Stats */}
          <div
            className={`mt-7 pt-6 grid grid-cols-2 gap-4 border-t ${
              isFeature || isWide ? "border-brand-white/10" : "border-brand-navy/8"
            }`}
          >
            {service.stats.filter(s => s.value).map((stat, idx) => {
              const StatIcon = stat.icon
              const dark = isFeature || isWide
              return (
                <div key={idx} className="flex items-start gap-2.5">
                  <div className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center mt-0.5 ${
                    dark ? "border-brand-white/15" : "border-brand-navy/20"
                  }`}>
                    <StatIcon className={`w-3.5 h-3.5 ${dark ? "text-brand-white/50" : "text-brand-navy/50"}`} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className={`text-lg font-bold tracking-tight leading-none ${
                      dark ? "text-brand-white" : "text-brand-navy"
                    }`}>
                      {stat.value}
                    </div>
                    <div className="text-[9px] tracking-[0.18em] uppercase text-brand-coral font-semibold mt-1 leading-snug">
                      {stat.label}
                    </div>
                    {stat.sublabel && (
                      <div className={`text-[10px] mt-0.5 leading-snug ${
                        dark ? "text-brand-white/40" : "text-brand-navy/40"
                      }`}>
                        {stat.sublabel}
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <AppButton href={service.href} className="w-full">
              Learn more about our service
              <span className="sr-only"> about {service.title}</span>
              <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
            </AppButton>
          </div>
        </div>
      </div>
    </div>
  )
})