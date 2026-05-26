"use client"

import { memo } from "react"
import { Check } from "lucide-react"

interface SuccessStateProps {
    firstName: string
}

export const SuccessState = memo(function SuccessState({
    firstName,
}: SuccessStateProps) {
    return (
        <section
            id="apply"
            className="relative w-full bg-brand-navy overflow-hidden"
        >
            <div
                aria-hidden
                className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-150 rounded-full bg-brand-coral/15 blur-[140px] pointer-events-none"
            />

            <div className="relative max-w-3xl mx-auto px-5 sm:px-10 py-28 lg:py-40 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-coral/15 border border-brand-coral/30 mb-8 animate-fade-in-up">
                    <Check className="w-10 h-10 text-brand-coral" strokeWidth={2.5} />
                </div>

                <h2 className="text-[clamp(2.25rem,5vw,4rem)] font-bold uppercase leading-none tracking-tight text-brand-white mb-6 animate-fade-in-up delay-100">
                    You&apos;re <span className="text-brand-coral">in.</span>
                </h2>

                <p className="text-base sm:text-lg text-brand-white/60 leading-relaxed max-w-xl mx-auto animate-fade-in-up delay-200">
                    Thanks,{" "}
                    <span className="text-brand-white font-medium">
                        {firstName || "there"}
                    </span>
                    . A senior recruiter will review your profile within 48 hours. When something aligned opens up, we&apos;ll reach out directly.
                </p>

                <div className="mt-10 inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-brand-white/40 animate-fade-in-up delay-300">
                    <span className="block w-9 h-px bg-brand-coral" />
                    Check your inbox for confirmation
                    <span className="block w-9 h-px bg-brand-coral" />
                </div>
            </div>
        </section>
    )
})