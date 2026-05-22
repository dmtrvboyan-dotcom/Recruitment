import { ctaData } from "./data"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react";
import { AppButton } from '@/components/ui/app-button';


export function CTASection() {
  return (
    <section className="py-20 md:py-40 bg-brand-white relative overflow-hidden">

      {/* Radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(114,145,199,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center px-5 sm:px-10">

        <span className="inline-flex items-center gap-3 text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-brand-coral mb-6">

        </span>

        <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-none tracking-tight text-brand-navy mb-6">
          {ctaData.title}
        </h2>

        <p className="text-sm sm:text-base text-brand-navy/45 leading-relaxed mb-12 max-w-2xl mx-auto">
          {ctaData.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto animate-fade-in-up delay-300 mt-14">
          <AppButton href={ctaData.primaryCta.href} icon="arrow" className="sm:w-auto">
            {ctaData.primaryCta.text}
          </AppButton>
        </div>

      </div>
    </section>
  )
}