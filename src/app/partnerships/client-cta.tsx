"use client"

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
    <section className="relative w-full bg-brand-navy overflow-hidden py-20 lg:py-28">

      {/* Mesh gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-brand-coral/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] bg-brand-teal/8 rounded-full blur-3xl" />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle, #f9f9fb 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-10 xl:px-16 flex flex-col items-center text-center gap-8">

        <div>
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-brand-coral block mb-4">
            Let's Build Together
          </span>
          <h2 className="text-[clamp(2.8rem,8vw,7rem)] font-black leading-none tracking-tight uppercase text-brand-white mb-5">
        Ready to
            <br />
            <span className="text-brand-coral">Work with us?</span>
          </h2>
          <p className="text-sm sm:text-lg text-white/45 max-w-lg mx-auto leading-relaxed">
            Whether you're hiring for one critical role or scaling an entire department — we help you find people who make an impact.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button
            onClick={handleContact}
            className="group bg-brand-coral hover:bg-brand-coral-hover text-white px-10 py-5 sm:py-6 text-xs sm:text-sm font-semibold tracking-widest uppercase cursor-pointer transition-colors duration-200 rounded-3xl w-full sm:w-auto"
          >
            <span className="flex items-center justify-center gap-2.5">
              Start Hiring
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>
         
        </div>

      
      </div>
    </section>
  )
})
