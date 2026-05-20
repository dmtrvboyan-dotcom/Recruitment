"use client"

import { memo, useRef, useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"
import { HOW_IT_WORKS, type HowItWorksStep } from "./data"

function useInView(threshold = 0.15) {
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

const StepCard = memo(function StepCard({
    step,
    index,
    visible,
}: {
    step: HowItWorksStep
    index: number
    visible: boolean
}) {
    const Icon = step.icon
    return (
        <div
            className="relative group"
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(28px)",
                transition: `opacity 0.7s ease ${200 + index * 140}ms, transform 0.7s ease ${200 + index * 140}ms`,
            }}
        >
            {index < HOW_IT_WORKS.length - 1 && (
                <div
                    aria-hidden
                    className="hidden lg:flex absolute top-[68px] -right-7 z-20 w-14 h-14 items-center justify-center"
                >
                    <div className="w-full h-px bg-gradient-to-r from-brand-coral/40 via-brand-coral/20 to-transparent" />
                    <ArrowRight
                        className="absolute right-0 w-4 h-4 text-brand-coral/50"
                        strokeWidth={2}
                    />
                </div>
            )}

            <div className="relative h-full bg-white rounded-3xl p-8 lg:p-10 border border-brand-navy/8 shadow-sm hover:shadow-xl hover:border-brand-coral/30 transition-all duration-300 hover:-translate-y-1">

                <div
                    aria-hidden
                    className="absolute top-5 right-6 text-[5.5rem] lg:text-[6.5rem] font-black leading-none tracking-tighter text-brand-navy/[0.04] select-none pointer-events-none"
                >
                    {step.number}
                </div>

                <div className="relative w-14 h-14 rounded-2xl bg-brand-coral/10 flex items-center justify-center mb-6 group-hover:bg-brand-coral group-hover:scale-105 transition-all duration-300">
                    <Icon
                        className="w-6 h-6 text-brand-coral group-hover:text-white transition-colors duration-300"
                        strokeWidth={1.6}
                    />
                </div>

                <span className="relative text-[10px] font-bold tracking-[0.25em] uppercase text-brand-coral block mb-3">
                    {step.phase}
                </span>

                <h3 className="relative text-2xl lg:text-3xl font-black uppercase tracking-tight text-brand-navy mb-3">
                    {step.heading}
                </h3>

                <p className="relative text-sm lg:text-base text-brand-navy/55 leading-relaxed">
                    {step.body}
                </p>

                <div className="relative mt-7 h-0.5 w-10 bg-brand-coral/30 group-hover:w-20 group-hover:bg-brand-coral transition-all duration-300" />
            </div>
        </div>
    )
})

export const HowItWorks = memo(function HowItWorks() {
    const { ref: headerRef, visible: headerVisible } = useInView()
    const { ref: gridRef, visible: gridVisible } = useInView(0.1)

    return (
        <section
            id="how-it-works"
            className="relative w-full bg-brand-white overflow-hidden"
        >      <div
                aria-hidden
                className="absolute top-1/2 -translate-y-1/2 -left-32 w-[420px] h-[420px] rounded-full bg-brand-coral/8 blur-[140px] pointer-events-none"
            />

            <div className="relative max-w-7xl mx-auto px-5 sm:px-10 xl:px-16 py-20 lg:py-32">

                <div
                    ref={headerRef}
                    className="text-center mb-14 lg:mb-20 max-w-2xl mx-auto"
                    style={{
                        opacity: headerVisible ? 1 : 0,
                        transform: headerVisible ? "translateY(0)" : "translateY(24px)",
                        transition: "opacity 0.7s ease, transform 0.7s ease",
                    }}
                >
                    <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-brand-coral block mb-3">
                        How It Works
                    </span>
                    <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-none tracking-tight text-brand-navy mb-5">
                        THREE STEPS.
                        <br />
                        <span className="text-brand-coral">THAT&apos;S IT.</span>
                    </h2>
                  
                </div>

                <div ref={gridRef} className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                    {HOW_IT_WORKS.map((step, i) => (
                        <StepCard key={step.id} step={step} index={i} visible={gridVisible} />
                    ))}
                </div>

            </div>
        </section>
    )
})
