"use client"

import * as React from "react"
import { getCalApi } from "@calcom/embed-react"
import { CalendarDays, Clock, ArrowRight, CheckCircle } from "lucide-react"

// ─── Constants ────────────────────────────────────────────────────────────────

const CAL_NAMESPACE = process.env.NEXT_PUBLIC_CAL_NAMESPACE
const CAL_LINK      = process.env.NEXT_PUBLIC_CAL_LINK

if (!CAL_NAMESPACE || !CAL_LINK) {
  throw new Error(
    "Missing Cal.com env vars. Add NEXT_PUBLIC_CAL_NAMESPACE and NEXT_PUBLIC_CAL_LINK to .env.local and Vercel."
  )
}

// ─── BookACall ────────────────────────────────────────────────────────────────

export function BookACall() {
  const [booked, setBooked] = React.useState(false)

  React.useEffect(() => {
    ;(async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE })

      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      })

      cal("on", {
        action: "bookingSuccessful",
        callback: () => setBooked(true),
      })
    })()
  }, [])

  // ── Booked confirmation ────────────────────────────────────────────────────

  if (booked) {
    return (
      <div className="
        relative overflow-hidden
        flex items-center gap-3 sm:gap-4
        rounded-2xl border border-brand-teal/30 bg-brand-teal/8
        px-4 sm:px-5 py-4 sm:py-5
        mb-1
        animate-in fade-in slide-in-from-bottom-2 duration-400
      ">
        {/* Subtle glow */}
        <div
          aria-hidden
          className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-brand-teal/20 blur-2xl pointer-events-none"
        />

        <span className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-brand-teal flex items-center justify-center">
          <CheckCircle className="w-4 h-4 text-white" strokeWidth={1.75} />
        </span>

        <div className="min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-teal mb-0.5">
            Meeting booked!
          </p>
          <p className="text-xs sm:text-sm font-semibold text-brand-navy leading-snug">
            Check your inbox for the confirmation email.
          </p>
        </div>
      </div>
    )
  }

  // ── CTA card ───────────────────────────────────────────────────────────────

  return (
    <button
      type="button"
      data-cal-namespace={CAL_NAMESPACE}
      data-cal-link={CAL_LINK}
      data-cal-config='{"layout":"month_view"}'
      aria-label="Open calendar to schedule a 30-minute intro call"
      className="
        group relative w-full overflow-hidden text-left cursor-pointer
        rounded-2xl bg-brand-navy
        px-5 sm:px-6 py-5 sm:py-6
        mb-1
        transition-all duration-300
        hover:shadow-[0_20px_50px_-10px_rgba(26,26,46,0.4)]
        hover:-translate-y-0.5
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2
        active:translate-y-0 active:shadow-none
      "
    >
      {/* ── Background atmosphere ─────────────────────────────────────────── */}

      {/* Coral (blue) glow — top-right, blooms on hover */}
      <div
        aria-hidden
        className="
          absolute -top-8 -right-8 w-36 h-36 rounded-full
          bg-brand-coral/20 blur-3xl pointer-events-none
          transition-all duration-500
          group-hover:scale-[1.6] group-hover:opacity-75
        "
      />

      {/* Teal (deep blue) glow — bottom-left */}
      <div
        aria-hidden
        className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-brand-teal/15 blur-2xl pointer-events-none"
      />

      {/* ── Top badge row ─────────────────────────────────────────────────── */}
      <div className="relative flex items-center justify-between mb-4 sm:mb-5">
        {/* Pulsing "live" availability badge */}
        <span className="inline-flex items-center gap-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] text-brand-coral">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-coral animate-pulse" />
          Available now
        </span>

        {/* Duration pill */}
        <span className="
          inline-flex items-center gap-1
          px-2.5 py-1 rounded-full
          border border-white/10 bg-white/6
          text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50
        ">
          Free · 30 min
        </span>
      </div>

      {/* ── Icon + heading ────────────────────────────────────────────────── */}
      <div className="relative flex items-start gap-3 sm:gap-4">
        {/* Icon circle */}
        <span className="
          flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl
          border border-white/15 bg-white/8
          flex items-center justify-center
          text-brand-coral
          transition-all duration-300
          group-hover:bg-brand-coral group-hover:text-white group-hover:border-brand-coral
        ">
          <CalendarDays className="w-5 h-5" strokeWidth={1.75} />
        </span>

        <div className="flex-1 min-w-0 pt-0.5">
          <p className="text-sm sm:text-base font-bold text-white leading-tight mb-1">
            Schedule a 30-min intro call
          </p>
          <p className="text-[11px] sm:text-xs text-white/50 leading-snug">
            Pick a slot that works — no back-and-forth
          </p>
        </div>
      </div>

      {/* ── Bottom row ────────────────────────────────────────────────────── */}
      <div className="
        relative flex items-center justify-between
        mt-4 sm:mt-5 pt-4
        border-t border-white/10
      ">
        {/* Availability hours */}
        <span className="flex items-center gap-1.5 text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-white/35 font-semibold">
          <Clock className="w-3 h-3 flex-shrink-0" strokeWidth={1.75} />
          Mon–Fri, 9–18 EET
        </span>

        {/* CTA */}
        <span className="
          inline-flex items-center gap-1.5
          text-[9px] sm:text-[10px] uppercase tracking-[0.22em] font-bold text-brand-coral
          transition-all duration-300
          group-hover:gap-2.5
        ">
          Book now
          <ArrowRight className="w-3 h-3 flex-shrink-0" strokeWidth={2} />
        </span>
      </div>
    </button>
  )
}