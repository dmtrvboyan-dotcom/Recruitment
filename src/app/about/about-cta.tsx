"use client"

import { memo } from "react"
import { AppButton } from '@/components/ui/app-button';

export const AboutCTA = memo(function AboutCTA() {

    return (
        <section className="relative w-full bg-brand-navy overflow-hidden">

            <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(ellipse_at_top_left,var(--tw-gradient-stops))] from-brand-coral via-transparent to-transparent pointer-events-none" />

            <div className="relative max-w-5xl mx-auto px-5 sm:px-10 xl:px-16 py-16 sm:py-20 lg:py-28 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-10">

                <div>
                    <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-brand-coral block mb-4">
                        Let's Talk
                    </span>
                    <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-none tracking-tight text-brand-white">
                        READY TO HIRE
                        <br />
                        <span className="text-brand-coral">SMART.R?</span>
                    </h2>
                </div>

                <div className="flex flex-col gap-4">
                    <p className="text-sm text-brand-white/50 max-w-xs leading-relaxed sm:text-base lg:text-right">
                        No templates, no automated replies. A real person will get back to you within one business day.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto animate-fade-in-up delay-300 mt-4">
                        <AppButton href="/contacts" icon="arrow" className="w sm:w-auto">
                            Contact Us
                        </AppButton>
                    </div>
                </div>
            </div>
        </section>
    )
})