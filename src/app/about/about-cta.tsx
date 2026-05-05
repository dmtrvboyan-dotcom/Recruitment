"use client"

import { memo } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { scrollToSection } from "@/lib/utils/scroll"

export const AboutCTA = memo(function AboutCTA() {

    const handleContactClick = () => {
        const id = "#contact"

        if (window.location.pathname === "/") {
            scrollToSection(id)
        } else {
            window.location.href = `/${id}`
        }
    }

    return (
        <section className="relative w-full bg-brand-navy overflow-hidden">

            <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(ellipse_at_top_left,var(--tw-gradient-stops))] from-brand-coral via-transparent to-transparent pointer-events-none" />

            <div className="relative max-w-5xl mx-auto px-5 sm:px-10 xl:px-16 py-16 sm:py-20 lg:py-28 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-10">

                <div>
                    <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-brand-coral block mb-4">
                        Let's Talk
                    </span>
                    <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-none tracking-tight text-brand-white">
                        READY TO HIRE
                        <br />
                        <span className="text-brand-coral">SMARTER?</span>
                    </h2>
                </div>

                <div className="flex flex-col gap-4">
                    <p className="text-sm text-brand-white/50 max-w-xs leading-relaxed sm:text-base lg:text-right">
                        No templates, no automated replies. A real person will get back to you within one business day.
                    </p>
                    <Button
                        onClick={handleContactClick}
                        className="w-full sm:w-auto group bg-brand-coral hover:bg-brand-coral-hover text-white px-8 py-5 sm:py-6 text-xs sm:text-sm font-semibold tracking-widest uppercase cursor-pointer transition-colors duration-200 rounded-3xl"
                    >
                        <span className="flex items-center justify-center gap-2.5">
                            Contact Us
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                    </Button>
                </div>

            </div>
        </section>
    )
})