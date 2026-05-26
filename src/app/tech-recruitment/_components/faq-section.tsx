"use client"

import { useState, useCallback, useRef, useEffect } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { FAQ_DATA, FAQ_ITEMS } from "../data"
import { FAQItem } from "./faq-item"
import { AppButton } from '@/components/ui/app-button';


function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, visible }
}

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([0])
  const { ref: listRef, visible: listVisible } = useInView()

  const toggleItem = useCallback((index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    )
  }, [])

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 bg-brand-white overflow-hidden">

      {/* Coral glow */}
      <div
        aria-hidden
        className="absolute -top-32 right-1/4 w-100 h-100 lg:w-130 lg:h-130 rounded-full bg-brand-coral/15 blur-[120px] pointer-events-none"
      />

      {/* Watermark */}
      <div
        aria-hidden
        className="hidden lg:block absolute -bottom-8 -left-8 text-[clamp(12rem,20vw,18rem)] font-bold uppercase leading-[0.85] tracking-tighter text-brand-navy/3 select-none pointer-events-none whitespace-nowrap"
      >
        Q &amp; A
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Header — untouched */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14 lg:mb-20">
          <div className="flex items-center justify-center gap-3 sm:gap-3.5 mb-5 sm:mb-6">
            <span className="block w-6 sm:w-9 h-px bg-brand-coral" />
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] sm:tracking-[0.32em] uppercase text-brand-coral">
              {FAQ_DATA.tagline}
            </span>
            <span className="block w-6 sm:w-9 h-px bg-brand-coral" />
          </div>
          <h2 className="text-[clamp(1.75rem,6vw,3.5rem)] font-bold leading-[0.95] sm:leading-[0.92] tracking-tight uppercase text-brand-navy mb-5 sm:mb-6">
            Frequently
            <br />
            <span className="text-brand-coral">Asked.</span>
          </h2>
          <div className="mx-auto h-0.5 w-12 sm:w-16 bg-brand-coral" />
        </div>

        {/* Q&A list */}
        <div ref={listRef} className="max-w-4xl mx-auto">
          {FAQ_ITEMS.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openItems.includes(i)}
              onToggle={() => toggleItem(i)}
              visible={listVisible}
            />
          ))}
        </div>

        {/* CTA — untouched */}
        <div className="flex flex-col items-center mt-16 sm:mt-20 lg:mt-24 gap-4 sm:gap-5">
          <p className="text-[11px] sm:text-[12px] tracking-[0.22em] uppercase text-brand-navy/45 text-center">
            Still have questions?
          </p>



          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto animate-fade-in-up delay-300">
            <AppButton href="/contacts" icon="arrow" className="sm:w-auto">
              Contact our team
            </AppButton>
          </div>


        </div>

      </div>
    </section>
  )
}