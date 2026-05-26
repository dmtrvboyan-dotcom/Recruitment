"use client"

import { memo, useRef, useState, useEffect } from "react"
import Image from "next/image"
import { featuresData } from "./data"

const featureImages: Record<string, string> = {
  "Automated Workflows": "/smartr/workflow.webp",
  "Real-time Analytics": "/smartr/analytics.webp",
  "Team Collaboration": "/smartr/collab.webp",
  "Email Integration": "/smartr/email.webp",
  "Bulgarian Support": "/smartr/support.webp",
  "Resume Parsing": "/smartr/resume.webp",
}

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])
  return { ref, visible }
}

const FeatureCard = memo(function FeatureCard({
  feature,
  index,
}: {
  feature: { title: string; description: string }
  index: number
}) {
  const { ref, visible } = useInView()
  const [hovered, setHovered] = useState(false)

  return (
    <div
      ref={ref}
      className="group flex flex-col cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.5s ease ${index * 70}ms, transform 0.5s ease ${index * 70}ms`,
      }}
    >
      {/* Image card */}
      <div
        className="relative w-full overflow-hidden rounded-2xl border transition-all duration-500 ease-out group-hover:-translate-y-2"
        style={{
          aspectRatio: "4/3",
          borderColor: hovered ? "rgba(114,145,199,0.25)" : "rgba(249,249,251,0.08)",
          boxShadow: hovered
            ? "0 24px 48px -12px rgba(26,26,46,0.5), 0 0 0 1px rgba(114,145,199,0.15)"
            : "none",
        }}
      >
        <Image
          src={featureImages[feature.title] || "/images/smartr-dashboard.jpg"}
          alt={feature.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Dark base overlay — heavier on navy bg */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/90 via-[#1A1A2E]/30 to-[#1A1A2E]/10 rounded-2xl transition-opacity duration-500 group-hover:opacity-80" />

        {/* Hover shimmer */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(114,145,199,0.12) 0%, transparent 60%)",
          }}
        />

        {/* Scan line effect on hover */}
        <div
          className="absolute inset-x-0 h-px pointer-events-none transition-all duration-700 ease-in-out"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(114,145,199,0.6), transparent)",
            top: hovered ? "100%" : "-10%",
            opacity: hovered ? 0 : 1,
            transition: "top 0.9s ease, opacity 0.4s ease 0.7s",
          }}
        />

        {/* Title inside image */}
        <div className="absolute bottom-0 left-0 right-0 p-5 transition-transform duration-500 ease-out group-hover:-translate-y-1">
          <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-brand-white leading-tight drop-shadow-md">
            {feature.title}
          </h3>
        </div>

        {/* Corner accent dot */}
        <div className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full bg-brand-white/0
                       transition-all duration-500 delay-100
                       group-hover:bg-brand-coral group-hover:shadow-[0_0_10px_3px_rgba(114,145,199,0.5)]" />

        {/* Bottom accent line */}
        <div
          className="absolute bottom-0 left-5 right-5 h-px transition-all duration-500 rounded-full"
          style={{
            background: hovered
              ? "linear-gradient(90deg, transparent, rgba(114,145,199,0.5), transparent)"
              : "transparent",
          }}
        />
      </div>

      {/* Description */}
      <div className="mt-5 overflow-hidden">
        <p className="text-brand-white/40 text-sm leading-relaxed
                     transition-all duration-500 ease-out
                     group-hover:text-brand-white/60 group-hover:translate-x-0.5">
          {feature.description}
        </p>

        {/* Animated underline */}
        <div className="mt-3 h-px w-0 bg-gradient-to-r from-brand-coral to-brand-navy/0
                       transition-all duration-500 ease-out group-hover:w-12" />
      </div>
    </div>
  )
})

export const FeaturesSection = memo(function FeaturesSection() {
  const { ref: headerRef, visible: headerVisible } = useInView(0.2)

  return (
    <section className="relative w-full bg-brand-navy overflow-hidden">

      {/* Radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(114,145,199,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Glow blob */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-coral/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-10 xl:px-16 py-20 lg:py-32">

        {/* Header */}
        <div
          ref={headerRef}
          className="text-center mb-16 lg:mb-20"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <span className="inline-flex items-center gap-3 text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-brand-coral mb-4">
            <span className="block w-6 h-px bg-brand-coral/40" />
            {featuresData.tagline}
            <span className="block w-6 h-px bg-brand-coral/40" />
          </span>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-none tracking-tight text-brand-white mb-6">
            {featuresData.title}
          </h2>
          <p className="text-sm sm:text-base text-brand-white/45 max-w-2xl mx-auto leading-relaxed">
            {featuresData.subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {featuresData.items.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
})