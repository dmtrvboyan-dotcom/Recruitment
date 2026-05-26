"use client"

import { memo, useState, useRef, useEffect } from "react"
import { Plus } from "lucide-react"
import { FAQS } from "./data"

function useInView(threshold = 0.1) {
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

const FaqRow = memo(function FaqRow({
    q,
    a,
    open,
    onToggle,
    index,
    visible,
}: {
    q: string
    a: string
    open: boolean
    onToggle: () => void
    index: number
    visible: boolean
}) {
    return (
        <div
            className="border-b border-brand-navy/10 last:border-b-0"
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.5s ease ${150 + index * 60}ms, transform 0.5s ease ${150 + index * 60}ms`,
            }}
        >
            <button
                type="button"
                onClick={onToggle}
                className="group w-full flex items-center justify-between gap-6 py-6 sm:py-7 text-left cursor-pointer"
                aria-expanded={open}
            >
                <span className="flex items-center gap-4 sm:gap-6 min-w-0">
                    <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-brand-coral tabular-nums shrink-0">
                        {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base sm:text-lg lg:text-xl font-bold text-brand-navy leading-snug">
                        {q}
                    </span>
                </span>
                <span
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${open
                            ? "bg-brand-coral rotate-45"
                            : "bg-brand-navy/5 group-hover:bg-brand-coral/15"
                        }`}
                >
                    <Plus
                        className={`w-4 h-4 transition-colors duration-300 ${open ? "text-white" : "text-brand-navy/60 group-hover:text-brand-coral"
                            }`}
                        strokeWidth={2}
                    />
                </span>
            </button>

            <div
                className="grid transition-all duration-400 ease-out"
                style={{
                    gridTemplateRows: open ? "1fr" : "0fr",
                    opacity: open ? 1 : 0,
                }}
            >
                <div className="overflow-hidden">
                    <div className="pl-8 sm:pl-12 pr-12 pb-7 sm:pb-8 -mt-1">
                        <p className="text-sm sm:text-base text-brand-navy/60 leading-relaxed max-w-3xl">
                            {a}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
})

export const Faq = memo(function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)
    const { ref: headerRef, visible: headerVisible } = useInView()
    const { ref: listRef, visible: listVisible } = useInView()

    return (
        <section className="relative w-full bg-brand-white overflow-hidden">
            <div
                aria-hidden
                className="absolute -bottom-10 -right-10 text-[16vw] font-bold uppercase tracking-tighter text-brand-navy/2.5 leading-none select-none pointer-events-none whitespace-nowrap hidden lg:block"
            >
                FAQ
            </div>

            <div className="relative max-w-6xl mx-auto px-5 sm:px-10 xl:px-16 py-20 lg:py-32">

                <div className="grid lg:grid-cols-[0.85fr_1.4fr] gap-10 lg:gap-20 items-start">

                    <div
                        ref={headerRef}
                        className="lg:sticky lg:top-24"
                        style={{
                            opacity: headerVisible ? 1 : 0,
                            transform: headerVisible ? "translateY(0)" : "translateY(24px)",
                            transition: "opacity 0.7s ease, transform 0.7s ease",
                        }}
                    >
                        <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-brand-coral block mb-4">
                            Frequently Asked
                        </span>
                        <h2 className="text-[clamp(2.25rem,5vw,4rem)] font-bold leading-none tracking-tight text-brand-navy mb-6">
                            QUESTIONS,
                            <br />
                            <span className="text-brand-coral">ANSWERED.</span>
                        </h2>
                        <p className="text-sm sm:text-base text-brand-navy/55 leading-relaxed max-w-sm mb-8">
                            Everything candidates ask before joining the network. Still curious?{" "}
                            <a href="mailto:hello@example.com" className="text-brand-coral font-semibold hover:underline underline-offset-4">
                                Email us
                            </a>
                            .
                        </p>
                        <div className="hidden lg:flex items-center gap-3 pt-6 border-t border-brand-navy/10">
                            <div className="w-2 h-2 rounded-full bg-brand-coral animate-pulse" />
                            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-brand-navy/40">
                                Reply within 48 hrs
                            </span>
                        </div>
                    </div>

                    <div ref={listRef}>
                        {FAQS.map((item, i) => (
                            <FaqRow
                                key={i}
                                index={i}
                                q={item.q}
                                a={item.a}
                                open={openIndex === i}
                                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                                visible={listVisible}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
})
