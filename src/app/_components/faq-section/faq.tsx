"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { FAQ_ITEMS } from "@/lib/constants/faq"
import { scrollToSection } from "@/lib/utils/scroll"
import { FAQItem } from "./faq-item"

const LEFT_COUNT = Math.ceil(FAQ_ITEMS.length / 2)

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = useCallback((index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }, [])

  const leftFaqs = FAQ_ITEMS.slice(0, LEFT_COUNT)
  const rightFaqs = FAQ_ITEMS.slice(LEFT_COUNT)

  return (
    <section
      id="faq"
      className="py-20 lg:py-32"
     
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span 
            className="text-xs font-black uppercase tracking-[0.3em] block mb-4"
            style={{ color: "var(--color-brand-coral)" }}
          >
            Support Center
          </span>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-6 text-balance"
            style={{ color: "var(--color-brand-navy)" }}
          >
            Frequently Asked <br className="hidden md:block" /> Questions
          </h2>
          <div className="w-20 h-1.5 bg-brand-blue mx-auto rounded-full" />
        </div>

        {/* Two-column grid */}
        <div className="grid lg:grid-cols-2 gap-x-12 items-start">
          <div className="flex flex-col">
            {leftFaqs.map((faq, i) => (
              <FAQItem
                key={`left-${i}`}
                faq={faq}
                index={i}
                isOpen={openItems.includes(i)}
                onToggle={() => toggleItem(i)}
              />
            ))}
          </div>
          <div className="flex flex-col">
            {rightFaqs.map((faq, i) => (
              <FAQItem
                key={`right-${i}`}
                faq={faq}
                index={i + LEFT_COUNT}
                isOpen={openItems.includes(i + LEFT_COUNT)}
                onToggle={() => toggleItem(i + LEFT_COUNT)}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center justify-center mt-20">
          <p className="mb-6 text-brand-navy-mid font-medium">Still haven't found your answer?</p>
          <Button
            onClick={() => scrollToSection("#contact")}
            className="text-white rounded-2xl px-10 py-7 text-sm font-bold uppercase tracking-widest transition-all hover:scale-105 shadow-xl shadow-brand-blue/20 cursor-pointer"
            style={{ 
              backgroundColor: "var(--color-brand-blue)"
            }}
          >
            Contact Our Team
          </Button>
        </div>
      </div>
    </section>
  )
}