"use client"

import Link from 'next/link';
import { memo } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { scrollToSection } from "@/lib/utils/scroll"

export const ClientsCTA = memo(function ClientsCTA() {
  const handleContact = () => {
    const id = "#contact"
    if (window.location.pathname === "/") {
      scrollToSection(id)
    } else {
      window.location.href = `/${id}`
    }
  }

  return (
    <section className="relative w-full bg-brand-white overflow-hidden py-20 lg:py-32">

      {/* Top chapter divider — bridges from previous section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-32 bg-gradient-to-r from-transparent via-brand-coral to-transparent" />

      {/* Mesh gradient (boosted for visibility on pure white) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-brand-coral/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[35vw] h-[35vw] max-w-[450px] max-h-[450px] bg-brand-teal/12 rounded-full blur-3xl" />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage: "radial-gradient(circle, #1A1A2E10 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-10 xl:px-16 flex flex-col items-center text-center gap-8">

        <div>
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-brand-coral block mb-4">
            Let's Build Together
          </span>
          <h2 className="text-[clamp(2.8rem,8vw,7rem)] font-black leading-none tracking-tight uppercase text-brand-navy mb-6">
            Ready to
            <br />
            <span className="text-brand-coral">Work with us?</span>
          </h2>
          <p className="text-sm sm:text-lg text-brand-navy/55 max-w-lg mx-auto leading-relaxed">
            Whether you're hiring for one critical role or scaling an entire department — we help you find people who make an impact.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href={"contacts"}
            className="group bg-brand-coral hover:bg-brand-coral-hover text-white px-10 py-5 sm:py-6 text-xs sm:text-sm font-semibold tracking-widest uppercase cursor-pointer transition-all duration-300 rounded-3xl w-full sm:w-aut hover:-translate-y-0.5"
          >
            <span className="flex items-center justify-center gap-2.5">
              Start Hiring
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Link>
        </div>

      </div>
    </section>
  )
})