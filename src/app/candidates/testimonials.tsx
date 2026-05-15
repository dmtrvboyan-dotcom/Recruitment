"use client"

import { memo, useState, useRef, useEffect } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { testimonials } from "./testimonials-data"

const PAGE_SIZE = 8

function useInView(threshold = 0.15) {
    const ref = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        const el = ref.current
        if (!el) return
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
            { threshold }
        )
        obs.observe(el)
        return () => obs.disconnect()
    }, [threshold])
    return { ref, visible }
}

export const PeopleTestimonialsSection = memo(function PeopleTestimonialsSection() {
    const { ref: headerRef, visible: headerVisible } = useInView()
    const { ref: bodyRef, visible: bodyVisible } = useInView()

    const total = testimonials.length
    const totalPages = Math.ceil(total / PAGE_SIZE)

    const [active, setActive] = useState(0)
    const [page, setPage] = useState(0)
    const [animating, setAnimating] = useState(false)
    const [direction, setDirection] = useState<"next" | "prev">("next")

    const gridSlice = testimonials.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE)

    function selectTestimonial(idx: number) {
        if (idx === active || animating) return
        setDirection(idx > active ? "next" : "prev")
        setAnimating(true)
        setTimeout(() => { setActive(idx); setAnimating(false) }, 320)
    }

    function prevPage() { if (page > 0) setPage(p => p - 1) }
    function nextPage() { if (page < totalPages - 1) setPage(p => p + 1) }

    useEffect(() => {
        setPage(Math.floor(active / PAGE_SIZE))
    }, [active])

    // Mobile: show 3 thumbnails around the active one
    const mobileSlice = (() => {
        const half = 1
        let start = Math.max(0, active - half)
        let end = start + 3
        if (end > total) { end = total; start = Math.max(0, end - 3) }
        return testimonials.slice(start, end)
    })()

    return (
        <section id="client-testimonials" className="relative w-full bg-brand-white overflow-hidden">
          
            <div className="relative max-w-7xl mx-auto px-5 sm:px-10 xl:px-16 py-20 lg:py-32">

                {/* Header */}
                <div
                    ref={headerRef}
                    className="mb-14 lg:mb-20"
                    style={{
                        opacity: headerVisible ? 1 : 0,
                        transform: headerVisible ? "translateY(0)" : "translateY(24px)",
                        transition: "opacity 0.7s ease, transform 0.7s ease",
                    }}
                >
                    <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-brand-coral block mb-3 text-center">
                        Candidate Stories
                    </span>
                    <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-none tracking-tight text-brand-navy uppercase text-center">
                        Words from the
                        <br />
                        <span className="text-brand-coral">People We've Placed.</span>
                    </h2>
                </div>

                {/* Body */}
                <div
                    ref={bodyRef}
                    style={{
                        opacity: bodyVisible ? 1 : 0,
                        transform: bodyVisible ? "translateY(0)" : "translateY(32px)",
                        transition: "opacity 0.7s ease, transform 0.7s ease",
                    }}
                >
                    {/* ── DESKTOP layout ── */}
                    <div className="hidden lg:flex gap-6 xl:gap-8 items-start">

                        {/* Left: featured */}
                        <div className="flex-1 min-w-0">
                            <div className="sticky top-8">
                                <div className="relative rounded-3xl overflow-hidden bg-brand-navy shadow-2xl">
                                    <div className="absolute -top-20 -left-20 w-72 h-72 bg-brand-coral/15 rounded-full blur-3xl pointer-events-none" />

                                    {/* fixed-size image container so controls never shift */}
                                    <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                                        <div
                                            className="absolute inset-0"
                                            style={{
                                                opacity: animating ? 0 : 1,
                                                transform: animating
                                                    ? direction === "next" ? "translateX(-24px)" : "translateX(24px)"
                                                    : "translateX(0)",
                                                transition: "opacity 0.32s ease, transform 0.32s ease",
                                            }}
                                        >
                                            <img
                                                src={testimonials[active].image}
                                                alt={`Testimonial ${active + 1}`}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    </div>

                                    {/* bottom bar — always same height */}
                                    <div className="flex items-center justify-between px-6 py-4 border-t border-white/10 bg-brand-navy">
                                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-brand-white/30">
                                            {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                                        </span>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => selectTestimonial((active - 1 + total) % total)}
                                                className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-brand-white/40 hover:border-brand-coral/60 hover:text-brand-coral transition-colors duration-200 cursor-pointer"
                                                aria-label="Previous"
                                            >
                                                <ArrowLeft className="w-3.5 h-3.5" />
                                            </button>
                                            <button
                                                onClick={() => selectTestimonial((active + 1) % total)}
                                                className="w-8 h-8 rounded-full bg-brand-coral flex items-center justify-center text-brand-white hover:bg-brand-coral-hover transition-colors duration-200 cursor-pointer"
                                                aria-label="Next"
                                            >
                                                <ArrowRight className="w-3.5 h-3.5" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: 2×4 grid */}
                        <div className="w-[44%] xl:w-[42%] flex flex-col gap-4">

                            {/* grid pagination arrows — top right */}
                            {totalPages > 1 && (
                                <div className="flex items-center justify-end gap-2">
                                    <button
                                        onClick={prevPage}
                                        disabled={page === 0}
                                        className="w-8 h-8 rounded-full border border-brand-navy/12 bg-brand-white flex items-center justify-center text-brand-navy/40 hover:border-brand-coral/40 hover:text-brand-coral disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200 cursor-pointer"
                                        aria-label="Previous page"
                                    >
                                        <ArrowLeft className="w-3.5 h-3.5" />
                                    </button>
                                    <button
                                        onClick={nextPage}
                                        disabled={page >= totalPages - 1}
                                        className="w-8 h-8 rounded-full bg-brand-coral flex items-center justify-center text-brand-white hover:bg-brand-coral-hover disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200 cursor-pointer"
                                        aria-label="Next page"
                                    >
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            )}

                            {/* thumbnails */}
                            <div className="grid grid-cols-2 gap-3">
                                {gridSlice.map((t) => {
                                    const isActive = t.id - 1 === active
                                    return (
                                        <button
                                            key={t.id}
                                            onClick={() => selectTestimonial(t.id - 1)}
                                            className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 text-left ${isActive
                                                ? "ring-2 ring-brand-coral shadow-lg shadow-brand-coral/20 scale-[1.02]"
                                                : "ring-1 ring-brand-navy/8 hover:ring-brand-coral/40 hover:scale-[1.01] opacity-60 hover:opacity-100"
                                                }`}
                                        >
                                            {/* fixed ratio container */}
                                            <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                                                <img
                                                    src={t.image}
                                                    alt={`Testimonial ${t.id}`}
                                                    className="absolute inset-0 w-full h-full object-cover"
                                                />
                                            </div>
                                            {isActive && <div className="absolute inset-0 bg-brand-coral/5 pointer-events-none" />}
                                        </button>
                                    )
                                })}
                                {Array.from({ length: PAGE_SIZE - gridSlice.length }).map((_, i) => (
                                    <div key={`empty-${i}`} className="rounded-2xl bg-brand-navy/4" style={{ aspectRatio: "4/3" }} />
                                ))}
                            </div>

                            {/* centered dots below grid */}
                            {totalPages > 1 && (
                                <div className="flex gap-1.5 justify-center pt-1">
                                    {Array.from({ length: totalPages }).map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setPage(i)}
                                            className={`rounded-full transition-all duration-300 cursor-pointer ${i === page
                                                ? "w-6 h-2 bg-brand-coral"
                                                : "w-2 h-2 bg-brand-navy/15 hover:bg-brand-coral/40"
                                                }`}
                                            aria-label={`Page ${i + 1}`}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* ── MOBILE layout ── */}
                    <div className="flex lg:hidden flex-col gap-4">

                        {/* Featured */}
                        <div className="relative rounded-3xl overflow-hidden bg-brand-navy shadow-xl">
                            <div className="absolute -top-20 -left-20 w-64 h-64 bg-brand-coral/15 rounded-full blur-3xl pointer-events-none" />

                            <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        opacity: animating ? 0 : 1,
                                        transform: animating
                                            ? direction === "next" ? "translateX(-20px)" : "translateX(20px)"
                                            : "translateX(0)",
                                        transition: "opacity 0.32s ease, transform 0.32s ease",
                                    }}
                                >
                                    <img
                                        src={testimonials[active].image}
                                        alt={`Testimonial ${active + 1}`}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between px-5 py-3.5 border-t border-white/10 bg-brand-navy">
                                <span className="text-xs font-bold tracking-[0.2em] uppercase text-brand-white/30">
                                    {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                                </span>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => selectTestimonial((active - 1 + total) % total)}
                                        className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-brand-white/40 hover:border-brand-coral/60 hover:text-brand-coral transition-colors duration-200 cursor-pointer"
                                        aria-label="Previous"
                                    >
                                        <ArrowLeft className="w-3.5 h-3.5" />
                                    </button>
                                    <button
                                        onClick={() => selectTestimonial((active + 1) % total)}
                                        className="w-8 h-8 rounded-full bg-brand-coral flex items-center justify-center text-brand-white transition-colors duration-200 cursor-pointer"
                                        aria-label="Next"
                                    >
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Mobile thumbnails: 3 in a row */}
                        <div className="flex gap-2.5 justify-center">
                            {mobileSlice.map((t) => {
                                const isActive = t.id - 1 === active
                                return (
                                    <button
                                        key={t.id}
                                        onClick={() => selectTestimonial(t.id - 1)}
                                        className={`relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 flex-1 max-w-[30%] ${isActive
                                            ? "ring-2 ring-brand-coral shadow-md shadow-brand-coral/20"
                                            : "ring-1 ring-brand-navy/8 opacity-50 hover:opacity-80"
                                            }`}
                                    >
                                        <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
                                            <img
                                                src={t.image}
                                                alt={`Testimonial ${t.id}`}
                                                className="absolute inset-0 w-full h-full object-cover"
                                            />
                                        </div>
                                        {isActive && <div className="absolute inset-0 bg-brand-coral/5 pointer-events-none" />}
                                    </button>
                                )
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
})
