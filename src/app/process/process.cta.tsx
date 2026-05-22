"use client"

import Link from 'next/link'
import { memo } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { scrollToSection } from "@/lib/utils/scroll";
import { AppButton } from '@/components/ui/app-button';


export const ProcessCTA = memo(function ProcessCTA() {
  return (
    <section className="relative w-full bg-brand-white overflow-hidden">



      <div className="relative max-w-5xl mx-auto px-5 sm:px-10 xl:px-16 py-20 lg:py-32 text-center">

        <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-brand-coral block mb-4">
          Ready to Start?
        </span>

        <h2 className="text-[clamp(2.5rem,7vw,6rem)] font-bold leading-none tracking-tight text-brand-navy mb-6">
          LET'S FIND
          <br />
          YOUR NEXT
          <br />
          <span className="text-brand-coral">HIRE.</span>
        </h2>

        <p className="text-sm sm:text-base lg:text-lg text-brand-navy/50 max-w-lg mx-auto leading-relaxed mb-10">
          An introductory call costs nothing. Tell us what you're looking for and we'll tell you honestly whether we're the right fit.
        </p>



        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto animate-fade-in-up delay-300">
          <AppButton href="/contacts" icon="arrow" className="sm:w-auto">
            Start the conversation
          </AppButton>

          <AppButton href="/about" variant="navy" className=" sm:w-auto">
            Learn about us
          </AppButton>
        </div>


       

      </div>
    </section>
  )
})
