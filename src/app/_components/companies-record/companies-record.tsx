"use client"

import { COMPANIES } from "./companies"

function MarqueeRow({
  companies,
  reverse = false,
  duration = "60s",
}: {
  companies: string[]
  reverse?: boolean
  duration?: string
}) {
  const items = [...companies, ...companies, ...companies, ...companies]

  return (
    <div className="relative overflow-hidden py-6 w-screen left-1/2 -translate-x-1/2">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-white to-transparent" />

      <div
        className="flex w-max"
        style={{
          animation: `marquee ${duration} linear infinite ${reverse ? "reverse" : "normal"}`,
        }}
      >
        {items.map((name, i) => (
          <span
            key={i}
            className="mx-12 shrink-0 whitespace-nowrap text-[2.75rem] sm:text-[3.5rem] lg:text-[4rem] font-bold tracking-[0.06em] uppercase 
                       text-transparent"
            style={{
              WebkitTextStroke: "2.5px #0A2540",
              WebkitTextFillColor: "transparent",
            }}
          >
            {name}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-20%); }
        }
      `}</style>
    </div>
  )
}

export function TrustedBySection() {
  return (
    <section className="py-16 bg-transparent overflow-hidden">
      {/* Section header */}
      <div className="max-w-2xl mx-auto text-center mb-12">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-coral mb-4">
          Our Clients
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-navy mb-6 text-balance">
          Companies We&apos;ve Partnered With
        </h2>
      </div>

      <MarqueeRow companies={COMPANIES} duration="50s" />

      {/* Centered Button */}
      <div className="flex justify-center mt-12">
        <a
          href="/partnerships"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-3 px-10 py-4 
                     bg-brand-navy hover:bg-brand-navy/90 
                     text-white font-semibold text-lg tracking-wider
                     rounded-full transition-all duration-300 
                     "
        >
          View All Partnerships
          <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </section>
  )
}