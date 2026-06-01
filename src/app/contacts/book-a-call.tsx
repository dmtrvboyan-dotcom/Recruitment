"use client"

import * as React from "react"
import { getCalApi } from "@calcom/embed-react"
import { CalendarDays, CheckCircle, ArrowRight } from "lucide-react"

const CAL_NAMESPACE = process.env.NEXT_PUBLIC_CAL_NAMESPACE
const CAL_LINK = process.env.NEXT_PUBLIC_CAL_LINK

if (!CAL_NAMESPACE || !CAL_LINK) {
  throw new Error(
    "Missing Cal.com env vars. Add NEXT_PUBLIC_CAL_NAMESPACE and NEXT_PUBLIC_CAL_LINK to .env.local and Vercel."
  )
}

export function BookACall() {
  const [booked, setBooked] = React.useState(false)

  React.useEffect(() => {
    ;(async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE })
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" })
      cal("on", { action: "bookingSuccessful", callback: () => setBooked(true) })
    })()
  }, [])

  if (booked) {
    return (
      <div className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border border-brand-teal/30 bg-brand-teal/8 mb-6 animate-in fade-in slide-in-from-bottom-2 duration-400">
        <span className="shrink-0 w-7 h-7 rounded-full bg-brand-teal flex items-center justify-center">
          <CheckCircle className="w-3.5 h-3.5 text-white" strokeWidth={2} />
        </span>
        <div className="min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-teal">
            Meeting booked! Check your inbox.
          </p>
        </div>
      </div>
    )
  }

  return (
    <button
      type="button"
      data-cal-namespace={CAL_NAMESPACE}
      data-cal-link={CAL_LINK}
      data-cal-config='{"layout":"month_view"}'
      aria-label="Open calendar to schedule a 30-minute intro call"
      className="
        group relative w-full overflow-hidden text-left cursor-pointer
        flex items-center gap-4
        rounded-xl bg-brand-navy
        px-4 py-3.5
        mb-6
        transition-all duration-300
        hover:shadow-[0_8px_30px_-8px_rgba(26,26,46,0.5)]
        hover:-translate-y-0.5
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2
        active:translate-y-0 active:shadow-none
      "
    >
      <div
        aria-hidden
        className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-brand-coral/20 blur-2xl pointer-events-none transition-all duration-500 group-hover:scale-150 group-hover:opacity-60"
      />

      {/* Live ping dot */}
      <span className="relative shrink-0 flex items-center justify-center w-8 h-8">
        <span className="absolute inline-flex h-full w-full rounded-full bg-brand-coral/40 animate-ping opacity-75" />
        <span className="relative w-2 h-2 rounded-full bg-brand-coral" />
      </span>

      <span className="shrink-0 w-8 h-8 rounded-lg border border-white/15 bg-white/8 flex items-center justify-center text-brand-coral transition-all duration-300 group-hover:bg-brand-coral group-hover:text-white group-hover:border-brand-coral">
        <CalendarDays className="w-4 h-4" strokeWidth={1.75} />
      </span>

      <div className="flex-1 min-w-0">
        <p className="text-[11px] sm:text-[15px] font-bold text-brand-white leading-tight">
          Schedule a free intro call
        </p>
        <p className="text-[9px] sm:text-[12px]  text-brand-white/45 mt-0.5">
          Mon–Fri, 9–18 EET · 30 min
        </p>
      </div>

      <span className="shrink-0 flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-coral transition-all duration-300 group-hover:gap-2">
        Book
        <ArrowRight className="w-3 h-3" strokeWidth={2.5} />
      </span>
    </button>
  )
}