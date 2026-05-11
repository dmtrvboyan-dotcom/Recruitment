"use client"

import { memo, useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { RiCheckLine } from "react-icons/ri"

const FEATURES = [
  "Candidates in one place",
  "Customizable workflows",
  "Team collaboration",
  "Analytics & reporting",
  "Ready for any domain",
  "Hiring manager tools",
  "GDPR Ready",
  "In BG, EN, DE, ES, RU",
  "Smart.R AI insights",
]

const STATS = [
  { value: 3, suffix: "x", label: "Faster hiring" },
  { value: 94, suffix: "%", label: "Client retention" },
  { value: 12, suffix: "k+", label: "Candidates tracked" },
]

function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])
  return count
}

function StatCounter({
  value,
  suffix,
  label,
  animate,
}: {
  value: number
  suffix: string
  label: string
  animate: boolean
}) {
  const count = useCountUp(value, 1600, animate)
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="text-[clamp(2rem,5vw,3.5rem)] font-black leading-none tracking-tight text-brand-white tabular-nums">
        {count}
        <span className="text-brand-coral">{suffix}</span>
      </div>
      <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-brand-white/40">
        {label}
      </div>
    </div>
  )
}

export const SmartRSection = memo(function SmartRSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="smartr"
      className="relative py-20 sm:py-28 lg:py-36 bg-brand-navy overflow-hidden"
    >

      {/* ── Background texture: diagonal slashes (mirrors TrustedBy) ── */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -62deg,
            transparent,
            transparent 70px,
            rgba(114,145,199,0.05) 70px,
            rgba(114,145,199,0.05) 71px
          )`,
        }}
      />

      {/* ── Coral glow — top left ── */}
      <div
        aria-hidden
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-brand-coral/15 blur-[130px] pointer-events-none"
      />

      {/* ── Teal glow — bottom right ── */}
      <div
        aria-hidden
        className="absolute bottom-0 -right-40 w-[460px] h-[460px] rounded-full bg-white-teal/15 blur-[120px] pointer-events-none"
      />

      {/* ── Giant watermark ── */}
      <div
        aria-hidden
        className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(10rem,18vw,18rem)] font-black uppercase leading-[0.85] tracking-tighter text-brand-white/[0.022] select-none pointer-events-none whitespace-nowrap"
      >
        SMART.R
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">

        {/* ════════════════════════════════════════
            TOP: eyebrow + headline + stats
        ════════════════════════════════════════ */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 lg:mb-24">

          {/* Eyebrow — exact TrustedBy pattern */}
          <div className="flex items-center justify-center gap-3 sm:gap-3.5 mb-5 sm:mb-6">
            <span className="block w-6 sm:w-9 h-px bg-brand-coral" />
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] sm:tracking-[0.32em] uppercase text-brand-coral">
              Proprietary Tech
            </span>
            <span className="block w-6 sm:w-9 h-px bg-brand-coral" />
          </div>

          {/* Headline */}
          <h2 className="text-[clamp(2.2rem,7vw,4.5rem)] font-black leading-[0.92] tracking-tight uppercase text-brand-white mb-5 sm:mb-6">
           Smart.R— Our Own

            <br />
            <span className="text-brand-coral">Applicant Tracking</span>
            <br />
            System.
          </h2>

          {/* Coral rule */}
          <div className="mx-auto h-[2px] w-12 sm:w-16 bg-brand-coral mb-6 sm:mb-8" />

        
          {/* Availability pill */}
          <div className="inline-flex items-center gap-2.5 border border-brand-white/10 bg-brand-white/5 rounded-full px-5 py-2.5 mb-14 sm:mb-16">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-green-400">
              Now available for purchase
            </span>
          </div>

          {/* Stats row */}
          <div className="flex items-center justify-center gap-10 sm:gap-16 lg:gap-24 pt-4 border-t border-brand-white/10">
            {STATS.map((stat, i) => (
              <StatCounter key={i} {...stat} animate={visible} />
            ))}
          </div>
        </div>

     

        <div className="relative mb-16 sm:mb-20 lg:mb-24">

          {/* Glow behind image */}
          <div
            aria-hidden
            className="absolute inset-x-[10%] top-[15%] bottom-0 bg-brand-coral/10 blur-[80px] rounded-full pointer-events-none"
          />

          {/* Frame */}
          <div
            className="relative mx-auto rounded-2xl overflow-hidden"
            style={{
              boxShadow: `
                0 0 0 1px rgba(255,255,255,0.07),
                0 40px 120px -20px rgba(0,0,0,0.7),
                0 0 80px -10px rgba(255,90,60,0.12)
              `,
            }}
          >
       

            {/* Product image */}
            <div className="relative aspect-[16/9]">
              <Image
                src="/uploaded/main.png"
                alt="Smart.R Applicant Tracking System Dashboard"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 90vw"
                priority
              />
              {/* Subtle vignette bottom */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brand-navy/50 to-transparent" />
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════
            BOTTOM: features + CTA
        ════════════════════════════════════════ */}
        <div className="max-w-5xl mx-auto">

          {/* Feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-white/8 rounded-2xl overflow-hidden mb-12 sm:mb-16"
            style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.08)" }}
          >
            {FEATURES.map((feature, i) => (
              <div
                key={feature}
                className="group flex items-center gap-3.5 px-6 py-5 bg-brand-navy hover:bg-brand-white/5 transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full border border-brand-coral/40 group-hover:border-brand-coral group-hover:bg-brand-coral/10 flex items-center justify-center transition-all duration-300">
                  <RiCheckLine
                    className="text-brand-coral"
                    size={13}
                  />
                </div>
                <span className="text-[13px] sm:text-sm font-semibold tracking-tight text-brand-white/60 group-hover:text-brand-white/90 transition-colors duration-300">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/applicant-tracking-system"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-5 sm:py-6
                         bg-brand-coral hover:bg-brand-coral-hover
                         text-brand-white text-sm font-semibold tracking-[0.22em] uppercase
                         rounded-full transition-colors duration-200"
            >
              Learn more about Smart.R
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            <Link
              href="/contact"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-5 sm:py-6
                         border border-brand-white/20 hover:border-brand-white/40 hover:bg-brand-white/5
                         text-brand-white/70 hover:text-brand-white text-sm font-semibold tracking-[0.22em] uppercase
                         rounded-full transition-all duration-200"
            >
              Request a demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
})