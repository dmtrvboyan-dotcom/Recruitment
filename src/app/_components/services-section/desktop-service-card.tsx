"use client"

import { memo } from "react"
import { ArrowUpRight } from "lucide-react"
import { type Service } from "@/lib/constants/services"

export const DesktopServiceCard = memo(function DesktopServiceCard({
  service,
  index,
  isSelected,
  onSelect,
  variant = "default",
}: {
  service: Service
  index: number
  isSelected: boolean
  onSelect: () => void
  variant?: "default" | "feature" | "wide"
}) {
  const isFeature = variant === "feature"
  const isWide = variant === "wide"
  const number = String(index + 1).padStart(2, "0")

  if (isFeature) {
    return (
      <button
        onClick={onSelect}
        className={`group relative w-full h-full text-left flex flex-col justify-between overflow-hidden p-6 sm:p-7 lg:p-8 min-h-55 lg:min-h-65 bg-brand-navy text-brand-white transition-colors duration-300 cursor-pointer ${isSelected ? "bg-brand-navy/95" : ""
          }`}
      >
        <div>
          <div className="font-bold leading-[0.85] tracking-[-0.04em] text-brand-coral/50 text-5xl sm:text-6xl lg:text-7xl mb-2">
            {number}
          </div>
          <h3 className="font-bold uppercase tracking-[-0.02em] leading-[1.05] mb-3 text-lg sm:text-xl lg:text-[1.5rem]">
            {service.title}
          </h3>
          {service.subtitle && (
            <p className="text-sm text-brand-white/55 max-w-sm leading-snug mb-4">
              {service.subtitle}
            </p>
          )}
          <span className="inline-flex items-center gap-2 px-3.5 py-2 border border-brand-coral/40 rounded-full text-[10px] font-semibold tracking-[0.22em] uppercase text-brand-coral group-hover:bg-brand-coral group-hover:text-brand-white group-hover:border-brand-coral transition-colors duration-300">
            Explore
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </button>
    )
  }

  if (isWide) {
    return (
      <button
        onClick={onSelect}
        className={`group relative w-full h-full text-left overflow-hidden p-6 sm:p-7 lg:p-8 min-h-35 lg:min-h-40 bg-brand-white transition-colors duration-300 cursor-pointer ${isSelected ? "bg-brand-coral/5" : ""
          }`}
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 lg:gap-8 h-full">
          <div className="flex items-center justify-between lg:justify-start lg:gap-6 lg:shrink-0">
            <span className="font-bold leading-[0.85] tracking-[-0.04em] text-brand-navy/50 group-hover:text-brand-navy/80 transition-colors duration-300 text-5xl sm:text-6xl lg:text-6xl">
              {number}
            </span>
            <ArrowUpRight
              className="w-5 h-5 lg:hidden text-brand-navy/30 group-hover:text-brand-navy/80  transition-colors duration-300"
              strokeWidth={1.5}
            />
          </div>

          <div className="flex-1 lg:max-w-2xl">
            <h3 className="font-bold uppercase tracking-[-0.015em] leading-[1.05] text-brand-navy mb-1.5 text-lg sm:text-xl lg:text-[1.4rem]">
              {service.title}
            </h3>
            {service.subtitle && (
              <p className="text-[13px] lg:text-sm text-brand-navy/55 leading-snug">
                {service.subtitle}
              </p>
            )}
          </div>

          <span className="hidden lg:inline-flex items-center gap-2 px-4 py-2.5 border border-brand-navy/15 rounded-full text-[10px] font-semibold tracking-[0.22em] uppercase text-brand-navy group-hover:bg-brand-navy group-hover:text-brand-white group-hover:border-brand-navy transition-colors duration-300 shrink-0">
            Explore
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </button>
    )
  }

  return (
    <button
      onClick={onSelect}
      className={`group relative w-full h-full text-left flex flex-col justify-between overflow-hidden p-5 sm:p-6 lg:p-7 min-h-40 sm:min-h-45 lg:min-h-50 bg-brand-white transition-colors duration-300 cursor-pointer ${isSelected ? "bg-brand-coral/5" : ""
        }`}
    >
      <div className="flex items-start justify-between">
        <span className="font-bold leading-[0.85] tracking-[-0.04em] text-brand-navy/50 group-hover:text-brand-navy/80 transition-colors duration-300 text-4xl sm:text-5xl lg:text-5xl">
          {number}
        </span>
        <ArrowUpRight
          className="w-5 h-5 text-brand-navy/80 group-hover:text-brand-navy/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
          strokeWidth={1.5}
        />
      </div>

      <div>
        <h3 className="font-bold uppercase tracking-[-0.015em] leading-[1.05] text-brand-navy mb-1.5 text-base sm:text-lg lg:text-[1.15rem]">
          {service.title}
        </h3>
        {service.subtitle && (
          <p className="text-[12px] sm:text-[13px] text-brand-navy/55 leading-snug">
            {service.subtitle}
          </p>
        )}
      </div>
    </button>
  )
})