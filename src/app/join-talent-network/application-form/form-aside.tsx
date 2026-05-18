"use client"

import { memo } from "react"
import { useInView } from "./use-in-view"
import { APPLICATION_BENEFITS } from "../data"

export const FormAside = memo(function FormAside() {
    const { ref, visible } = useInView()

    return (
        <div
            ref={ref}
            className="lg:sticky lg:top-24"
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
        >
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-brand-coral block mb-4">
                Candidate Application
            </span>

            <h2 className="text-[clamp(2.25rem,5vw,4rem)] font-black leading-none tracking-tight text-brand-white mb-6">
                TELL US
                <br />
                ABOUT
                <br />
                <span className="text-brand-coral">YOURSELF.</span>
            </h2>

            <ul className="space-y-5">
                {APPLICATION_BENEFITS.map((b, i) => {
                    const Icon = b.icon
                    return (
                        <li
                            key={b.title}
                            className="flex items-start gap-4"
                            style={{
                                opacity: visible ? 1 : 0,
                                transform: visible ? "translateX(0)" : "translateX(-16px)",
                                transition: `opacity 0.55s ease ${250 + i * 90}ms, transform 0.55s ease ${250 + i * 90}ms`,
                            }}
                        >
                            <div className="w-10 h-10 rounded-xl bg-brand-coral/10 border border-brand-coral/20 flex items-center justify-center shrink-0">
                                <Icon className="w-4 h-4 text-brand-coral" strokeWidth={1.8} />
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-brand-white mb-1">
                                    {b.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-brand-white/45 leading-relaxed">
                                    {b.body}
                                </p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
})