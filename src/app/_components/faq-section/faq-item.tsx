"use client"

import { memo } from "react"
import { Plus } from "lucide-react"
import type { FAQItem as FAQItemType } from "@/lib/constants/faq"

interface FAQItemProps {
  faq: FAQItemType
  index: number
  isOpen: boolean
  onToggle: () => void
  visible: boolean
}

export const FAQItem = memo(function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
  visible,
}: FAQItemProps) {
  const number = String(index + 1).padStart(2, "0")

  return (
    <div
      className="border-b border-brand-navy/10 last:border-b-0"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.5s ease ${150 + index * 60}ms, transform 0.5s ease ${150 + index * 60}ms`,
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        className="group w-full flex items-center justify-between gap-6 py-6 sm:py-7 text-left cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-4 sm:gap-6 min-w-0">
          {/* Number + Q label */}
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-brand-coral tabular-nums shrink-0">
            {number}. Q
          </span>

          {/* Question */}
          <h3
            className={`text-base sm:text-lg lg:text-xl font-bold uppercase tracking-[-0.015em] leading-snug transition-colors duration-300 ${
              isOpen
                ? "text-brand-coral"
                : "text-brand-navy group-hover:text-brand-coral"
            }`}
          >
            {faq.q}
          </h3>
        </span>

        {/* Plus / × button */}
        <span
          className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
            isOpen
              ? "bg-brand-coral rotate-45"
              : "bg-brand-navy/5 group-hover:bg-brand-coral/15"
          }`}
        >
          <Plus
            className={`w-4 h-4 transition-colors duration-300 ${
              isOpen
                ? "text-white"
                : "text-brand-navy/60 group-hover:text-brand-coral"
            }`}
            strokeWidth={2}
          />
        </span>
      </button>

      {/* Answer — grid-row expand */}
      <div
        className="grid transition-all duration-[400ms] ease-out"
        style={{
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          opacity: isOpen ? 1 : 0,
          transition: "grid-template-rows 400ms ease, opacity 400ms ease",
        }}
      >
        <div className="overflow-hidden">
          <div className="pl-8 sm:pl-12 pr-12 pb-7 sm:pb-8 -mt-1 flex gap-4 sm:gap-5">
            <div className="w-[2px] bg-brand-coral shrink-0 rounded-full" />
            <p className="text-sm sm:text-base text-brand-navy/60 leading-relaxed max-w-2xl">
              {faq.a}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
})