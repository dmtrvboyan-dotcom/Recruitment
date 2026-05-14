import Link from "next/link"
import { Lock, ArrowRight } from "lucide-react"

export function CVUploadSection() {
  return (
    <section
      id="cv-upload"
      className="relative py-16 sm:py-20 lg:py-32 bg-brand-white overflow-hidden"
    >
      {/* Watermark — only decorative on large screens */}
      <div
        aria-hidden
        className="hidden lg:block absolute -bottom-20 -right-10 text-[clamp(11rem,22vw,22rem)] font-black uppercase leading-[0.85] tracking-tighter text-brand-navy/[0.025] select-none pointer-events-none whitespace-nowrap"
      >
        Radar
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">

        {/* ── Header ── */}
        <div className="mb-10 sm:mb-12 lg:mb-20">
          <div className="flex items-center gap-3 mb-5 sm:mb-6 sm:mb-8">
            <span className="text-[10px] font-semibold tracking-[0.32em] uppercase text-brand-coral tabular-nums">
              03
            </span>
            <span className="block w-10 h-px bg-brand-coral" />
            <span className="text-[10px] font-semibold tracking-[0.32em] uppercase text-brand-coral">
              Stay on our radar
            </span>
          </div>

          <h2 className="text-[clamp(2rem,9vw,5rem)] font-black uppercase leading-[0.92] tracking-tight text-brand-navy max-w-4xl">
            Share your background.{" "}
            <span className="font-bold uppercase text-brand-coral">
              we&apos;ll listen.
            </span>
          </h2>
        </div>

        {/* ── Body ──
              Mobile:  intro → list → badge → cta   (order-1/2/3/4)
              Desktop: [intro + badge + cta] | [list]  (lg:grid 12-col, explicit row placement)
        ── */}
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-12 lg:grid-rows-[auto_auto_auto] lg:gap-x-16 lg:gap-y-6">

          {/* Intro — row 1 left */}
          <p className="order-1 lg:col-span-5 lg:row-start-1 text-base text-brand-navy/75 leading-relaxed font-light">
            Share details, and we&apos;ll contact you when a relevant
            full-time opportunity matches your background and career goals.
            We work with selected product companies, scale-ups, and
            international engineering teams.
          </p>

          {/* Numbered list — row 1-3 right (spans all rows on desktop) */}
          <div className="order-2 lg:col-span-7 lg:row-start-1 lg:row-span-3">
            <div className="flex flex-col divide-y divide-brand-navy/10">
              {[
                {
                  n: "01",
                  t: "Confidential by default",
                  d: "Senior and leadership positions are often shared confidentially through our network first.",
                },
                {
                  n: "02",
                  t: "Beyond what's public",
                  d: "Many of the opportunities we work on are never publicly advertised.",
                },
                {
                  n: "03",
                  t: "Actively or just open",
                  d: "Whether actively exploring or simply open to the right opportunity, we'd be glad to stay in touch.",
                },
              ].map((item) => (
                <div
                  key={item.n}
                  className="flex gap-4 sm:gap-6 py-5 sm:py-6 first:pt-0 last:pb-0"
                >
                  <span className="text-base font-black tabular-nums tracking-tight text-brand-coral shrink-0 leading-none pt-0.5">
                    {item.n}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-base font-bold uppercase tracking-tight text-brand-navy mb-1.5">
                      {item.t}
                    </h3>
                    <p className="text-sm sm:text-base text-brand-navy/60 leading-relaxed font-light">
                      {item.d}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust badge — row 2 left */}
          <div className="order-3 lg:col-span-5 lg:row-start-2">
            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-brand-navy/[0.04] border border-brand-navy/10">
              <Lock className="w-3.5 h-3.5 text-brand-teal shrink-0" strokeWidth={2} />
              <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-brand-navy/70">
                Confidential · GDPR
              </span>
            </div>
          </div>

          {/* CTA — row 3 left */}
          <div className="order-4 lg:col-span-5 lg:row-start-3">
            <Link
              href="/contacts"
              className="group inline-flex w-full sm:w-auto items-center justify-between gap-6 px-7 py-4 bg-brand-navy text-brand-white rounded-full hover:bg-navy-button-hover active:scale-[0.98] transition-all duration-200 text-[11px] font-semibold tracking-[0.22em] uppercase"
            >
              <span>Get in touch</span>
              <ArrowRight
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                strokeWidth={2}
              />
            </Link>
            <p className="mt-3 text-[11px] text-brand-navy/40 font-serif italic leading-relaxed">
              Reach out through our contact page — we&apos;ll take it from
              there.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
