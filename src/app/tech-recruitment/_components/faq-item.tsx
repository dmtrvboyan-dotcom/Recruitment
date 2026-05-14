"use client"

import { memo } from "react"
import { ChevronDown } from "lucide-react"
import { type FAQItem as FAQItemType } from "../data"

interface FAQItemProps {
  faq: FAQItemType
  index: number
  isOpen: boolean
  onToggle: () => void
}

export const FAQItem = memo(function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: FAQItemProps) {
  const number = String(index + 1).padStart(2, "0")

  return (
    <div className="group border-b border-brand-navy/8 last:border-b-0 transition-colors duration-300 hover:border-brand-coral/30">
      <button
        onClick={onToggle}
        className="w-full text-left py-6 sm:py-7 lg:py-8 flex items-start gap-4 sm:gap-5 lg:gap-6 cursor-pointer"
      >
        {/* Left rail: 01 + Q. */}
        <div className="shrink-0 w-10 sm:w-12 pt-1">
          <span
            className={`block text-[10px] font-semibold tracking-[0.22em] uppercase leading-none mb-2 transition-colors duration-300 ${
              isOpen
                ? "text-brand-coral"
                : "text-brand-coral/60 group-hover:text-brand-coral"
            }`}
          >
            {number}
          </span>
          <span className="font-bold text-2xl sm:text-[1.75rem] text-brand-coral leading-none">
            Q.
          </span>
        </div>

        {/* Question */}
        <h3
          className={`flex-1 font-black uppercase tracking-[-0.015em] leading-[1.15] text-base sm:text-lg lg:text-xl pt-0.5 transition-colors duration-300 ${
            isOpen
              ? "text-brand-coral"
              : "text-brand-navy group-hover:text-brand-coral"
          }`}
        >
          {faq.q}
        </h3>

        {/* Chevron */}
        <ChevronDown
          className={`w-5 h-5 shrink-0 mt-1 text-brand-coral transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          strokeWidth={1.5}
        />
      </button>

      {/* Answer */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-8 sm:pb-10 pl-14 sm:pl-[4.25rem] pr-2 sm:pr-8 flex gap-4 sm:gap-5">
          <div className="w-[2px] bg-brand-coral shrink-0" />
          <div className="flex-1">
            <span className="font-serif italic text-base sm:text-lg text-brand-coral block mb-3 leading-none">
              A.
            </span>
            <p className="text-sm sm:text-base lg:text-lg text-brand-navy/65 leading-relaxed max-w-2xl">
              {faq.a}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
})