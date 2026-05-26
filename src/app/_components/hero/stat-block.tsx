"use client"

import { memo, useState, useEffect, useRef, useMemo } from "react"

const NUM_RE = /^(\D*)(\d[\d,]*)(\D*)$/

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
export interface StatBlockProps {
    value: string
    suffix?: string
    label: string
    isLast?: boolean
    isMobileTop?: boolean
    animate: boolean
}

export const StatBlock = memo(function StatBlock({
    value,
    suffix,
    label,
    isLast,
    isMobileTop,
    animate,
}: StatBlockProps) {
    const { zero, pre, post, target, isNum } = useMemo(() => {
        const m = value.match(NUM_RE)
        if (!m) return { zero: value, pre: "", post: "", target: 0, isNum: false }
        return {
            pre: m[1],
            post: m[3],
            target: parseInt(m[2].replace(/,/g, ""), 10),
            zero: `${m[1]}0${m[3]}`,
            isNum: true,
        }
    }, [value])

    const [display, setDisplay] = useState(zero)
    const startedRef = useRef(false)

    useEffect(() => {
        if (!isNum) return

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setDisplay(value)
            return
        }

        if (!animate || startedRef.current) return
        startedRef.current = true

        const DURATION = 1_400
        const t0 = performance.now()
        let raf = 0

        const tick = (now: number) => {
            const p = Math.min(1, (now - t0) / DURATION)
            const eased = 1 - Math.pow(1 - p, 3) 
            setDisplay(`${pre}${Math.round(target * eased)}${post}`)
            if (p < 1) raf = requestAnimationFrame(tick)
        }

        raf = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(raf)
    }, [animate, isNum, value, pre, post, target])

    return (
        <div
            className={[
                "px-5 py-5 sm:px-6 sm:py-6 lg:px-8 text-center",
                isMobileTop ? "border-b border-brand-white/8 lg:border-b-0" : "",
                !isLast ? "lg:border-r border-brand-white/8" : "",
            ].join(" ")}
        >
            <div className="flex items-baseline justify-center gap-1.5 sm:gap-2 mb-1.5">
                <span
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-white tabular-nums tracking-tight leading-none"
                    style={{ minWidth: `${value.length}ch` }}
                >
                    {display}
                </span>

                {suffix && (
                    <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-white/80 leading-none">
                        {suffix}
                    </span>
                )}
            </div>

            <p className="text-[9px] sm:text-[10px] tracking-[0.22em] sm:tracking-[0.25em] uppercase text-brand-white/70 font-medium">
                {label}
            </p>
        </div>
    )
})