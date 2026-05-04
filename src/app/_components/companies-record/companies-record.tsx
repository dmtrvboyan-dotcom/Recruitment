"use client"

import { COMPANIES_ROW_1, COMPANIES_ROW_2 } from "./companies"

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
    <div className="relative overflow-hidden py-2 w-screen left-1/2 -translate-x-1/2">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-white to-transparent" />

      <div
        className="flex w-max"
        style={{
          animation: `marquee ${duration} linear infinite ${reverse ? "reverse" : "normal"}`,
        }}
      >
        {items.map((name, i) => (
          <span
            key={i}
            className="text-sm font-bold tracking-[0.18em] uppercase text-brand-coral mx-8 shrink-0 whitespace-nowrap"
          >
            {name}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}

export function TrustedBySection() {
  return (
    <section className="py-10 bg-transparent overflow-hidden lg:-mt-30 -mt-25">

      <MarqueeRow companies={COMPANIES_ROW_1} duration="55s" />
      <div className="h-3" />

      <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-brand-navy/35 text-center ">
        Our Clients
      </p>

    </section>
  )
}
