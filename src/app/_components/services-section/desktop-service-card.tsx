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

  // ── FEATURE card (service 01 — large, dark, top-left) ──────────────────────
  if (isFeature) {
    return (
      <button
        onClick={onSelect}
        className={`group relative w-full h-full text-left flex flex-col justify-between overflow-hidden p-6 sm:p-7 lg:p-8 min-h-55 lg:min-h-65 transition-colors duration-500 cursor-pointer ${isSelected ? "bg-brand-coral" : "bg-brand-navy"
          }`}
      >
        {/* Atmospheric glow */}
        <div className={`absolute -top-16 -right-16 w-56 h-56 rounded-full blur-[80px] pointer-events-none transition-all duration-500 ${isSelected ? "bg-brand-white/15" : "bg-brand-coral/20"
          }`} />
        <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-brand-teal/10 blur-[60px] pointer-events-none" />

        {/* Top row: number + icon */}
        <div className="relative flex items-start justify-between">
          <span className={`font-bold leading-[0.85] tracking-[-0.04em] text-6xl sm:text-7xl lg:text-8xl transition-colors duration-300 ${isSelected ? "text-brand-white/20" : "text-brand-coral/30"
            }`}>
            {number}
          </span>
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 ${isSelected
            ? "bg-brand-white/15 border-brand-white/20"
            : "bg-brand-white/8 border-brand-white/10 group-hover:bg-brand-coral/20 group-hover:border-brand-coral/30"
            }`}>
            <service.icon className="w-5 h-5 text-brand-white" strokeWidth={1.4} />
          </div>
        </div>

        {/* Bottom row: text + CTA */}
        <div className="relative">
          <h3 className="font-bold uppercase tracking-[-0.02em] leading-[1.05] text-brand-white mb-2 text-lg sm:text-xl lg:text-2xl">
            {service.title}
          </h3>
          {service.subtitle && (
            <p className={`text-[13px] leading-snug mb-5 transition-colors duration-300 ${isSelected ? "text-brand-white/70" : "text-brand-white/45"
              }`}>
              {service.subtitle}
            </p>
          )}
          <span className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-[10px] font-bold tracking-[0.22em] uppercase border transition-all duration-300 ${isSelected
            ? "bg-brand-white text-brand-coral border-brand-white"
            : "border-brand-coral/40 text-brand-coral group-hover:bg-brand-coral group-hover:text-brand-white group-hover:border-brand-coral"
            }`}>
            Explore
            <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </span>
        </div>

        {/* Selected indicator line */}
        <div className={`absolute left-0 top-0 bottom-0 w-1 bg-brand-coral transition-all duration-300 ${isSelected ? "opacity-100" : "opacity-0"
          }`} />
      </button>
    )
  }

  // ── WIDE card (service 06 + 07 — full-width bottom row) ───────────────────
  if (isWide) {
    return (
      <button
        onClick={onSelect}
        className={`group relative w-full h-full text-left overflow-hidden p-6 sm:p-7 lg:p-8 min-h-35 lg:min-h-40 transition-all duration-300 cursor-pointer ${isSelected ? "bg-brand-navy" : "bg-brand-white hover:bg-brand-navy/3 border-r-2"
          }`}
      >
        {/* Coral left accent — always visible on selected */}
        <div className={`absolute left-0 top-0 bottom-0 w-1  transition-all duration-300 ${isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-40"
          }`} />

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-8 h-full">
          {/* Left: number + icon */}
          <div className="flex items-center gap-4 lg:shrink-0">
            <span className={`font-bold leading-[0.85] tracking-[-0.04em] text-5xl sm:text-6xl transition-colors duration-300 ${isSelected ? "text-brand-coral/40" : "text-brand-navy/20 group-hover:text-brand-navy/40"
              }`}>
              {number}
            </span>

          </div>

          {/* Middle: text */}
          <div className="flex-1 lg:max-w-2xl">
            <h3 className={`font-bold uppercase tracking-[-0.015em] leading-[1.05] mb-1.5 text-lg sm:text-xl lg:text-[1.35rem] transition-colors duration-300 ${isSelected ? "text-brand-white" : "text-brand-navy"
              }`}>
              {service.title}
            </h3>
            {service.subtitle && (
              <p className={`text-[13px] leading-snug transition-colors duration-300 ${isSelected ? "text-brand-white/50" : "text-brand-navy/50"
                }`}>
                {service.subtitle}
              </p>
            )}
          </div>

          <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 ${isSelected
            ? "bg-brand-coral text-brand-white rotate-0"
            : "bg-brand-navy/5 text-brand-navy/40 group-hover:bg-brand-navy group-hover:text-brand-white"
            }`}>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" strokeWidth={1.75} />
          </div>

          <ArrowUpRight
            className={`w-5 h-5 lg:hidden shrink-0 transition-colors duration-300 ${isSelected ? "text-brand-coral" : "text-brand-navy/30 group-hover:text-brand-navy/60"
              }`}
            strokeWidth={1.5}
          />
        </div>
      </button>
    )
  }

  // ── DEFAULT card (services 02–05) ──────────────────────────────────────────
  return (
    <button
      onClick={onSelect}
      className={`group relative w-full h-full text-left flex flex-col justify-between overflow-hidden p-5 sm:p-6 lg:p-7 min-h-40 sm:min-h-45 lg:min-h-50 transition-all duration-300 cursor-pointer ${isSelected ? "bg-brand-navy" : "bg-brand-white hover:bg-brand-navy/2"
        }`}
    >
      {isSelected && (
        <div className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full bg-brand-coral/20 blur-[60px] pointer-events-none" />
      )}

      <div className="relative flex items-start justify-between">
        <span className={`font-bold leading-[0.85] tracking-[-0.04em] text-4xl sm:text-5xl transition-colors duration-300 ${isSelected ? "text-brand-coral/40" : "text-brand-navy/15 group-hover:text-brand-navy/30"
          }`}>
          {number}
        </span>
        <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 ${isSelected
          ? "bg-brand-coral text-brand-white rotate-0"
          : "bg-brand-navy/5 text-brand-navy/40 group-hover:bg-brand-navy group-hover:text-brand-white"
          }`}>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" strokeWidth={1.75} />
        </div>
      </div>

      <div className="relative">
        <h3 className={`font-bold uppercase tracking-[-0.015em] leading-[1.05] mb-1.5 text-base sm:text-lg transition-colors duration-300 ${isSelected ? "text-brand-white" : "text-brand-navy"
          }`}>
          {service.title}
        </h3>
        {service.subtitle && (
          <p className={`text-[12px] sm:text-[13px] leading-snug transition-colors duration-300 ${isSelected ? "text-brand-white/45" : "text-brand-navy/50"
            }`}>
            {service.subtitle}
          </p>
        )}
      </div>

    </button>
  )
})