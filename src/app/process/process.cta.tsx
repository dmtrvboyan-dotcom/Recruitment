"use client"

import { memo } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { scrollToSection } from "@/lib/utils/scroll"

export const ProcessCTA = memo(function ProcessCTA() {
  return (
    <section className="relative w-full bg-[#f9f9fb] overflow-hidden">

      {/* Faint diagonal stripe accent */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -55deg,
            transparent,
            transparent 40px,
            rgba(10,20,60,0.02) 40px,
            rgba(10,20,60,0.02) 41px
          )`,
        }}
      />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-10 xl:px-16 py-20 lg:py-32 text-center">

        <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-brand-coral block mb-4">
          Ready to Start?
        </span>

        <h2 className="text-[clamp(2.5rem,7vw,6rem)] font-black leading-none tracking-tight text-brand-navy mb-6">
          LET'S FIND
          <br />
          YOUR NEXT
          <br />
          <span className="text-brand-coral">HIRE.</span>
        </h2>

        <p className="text-sm sm:text-base lg:text-lg text-brand-navy/50 max-w-lg mx-auto leading-relaxed mb-10">
          An introductory call costs nothing. Tell us what you're looking for and we'll tell you honestly whether we're the right fit.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-brand-coral hover:bg-brand-coral/90 text-white font-bold tracking-wide uppercase px-8 py-3 rounded-xl text-sm flex items-center gap-2 group cursor-pointer"
          >
            Start the conversation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollToSection("about")}
            className="border-brand-navy/20 text-brand-navy font-bold tracking-wide uppercase px-8 py-3 rounded-xl text-sm hover:bg-brand-navy/5 cursor-pointer"
          >
            Learn about us
          </Button>
        </div>

      </div>
    </section>
  )
})
