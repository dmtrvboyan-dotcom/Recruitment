"use client"

import { memo } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { scrollToSection } from "@/lib/utils/scroll"
import { ABOUT_CONTENT } from "./data"

export const About = memo(function About() {
  return (
    /* Outer wrapper — full viewport height, 97vw, centered */
    <section className="relative w-full h-dvh mx-auto overflow-hidden  mt-25">

      {/* ── Full-bleed Team Photo ── */}
      <Image
        src="/uploaded/team.jpg"
        alt="Our team"
        fill
        sizes="97vw"
        className="object-cover object-center"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/30 to-brand-navy/10 pointer-events-none" />

      {/* ── Text content — bottom-anchored ── */}
      <div className="absolute inset-0 flex flex-col justify-end px-5 pb-12 sm:px-10 sm:pb-16 lg:px-16 lg:pb-30 max-w-6xl mx-auto left-0 right-0">

        {/* Tagline + Heading — tight together */}
        <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-brand-coral mb-2">
          {ABOUT_CONTENT.tagline}
        </span>

        <h1 className="text-[clamp(3rem,10vw,8rem)] font-black leading-none tracking-tight text-brand-white mb-5 sm:mb-6">
          {ABOUT_CONTENT.title}
        </h1>

        {/* Subtitle + CTA — stacked on mobile, side-by-side on sm+ */}
        {/* Subtitle + CTA — always stacked */}
        <div className="flex flex-col gap-5">
          <p className="text-sm sm:text-base lg:text-lg text-brand-white/70  leading-relaxed">
            {ABOUT_CONTENT.subtitle}
          </p>

          {/* <Button
            onClick={() => scrollToSection("#contact", { highlightDuration: 0 })}
            className="sm:w-50 shrink-0 bg-brand-coral hover:bg-brand-coral-hover text-brand-white px-8 py-5 text-xs sm:text-sm font-semibold tracking-widest uppercase cursor-pointer transition-colors duration-200 rounded-3xl"
          >
            Contact Us
          </Button> */}
        </div>
      </div>

    </section>
  )
})
