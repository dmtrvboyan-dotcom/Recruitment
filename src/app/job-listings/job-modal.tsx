import { memo } from "react"
import * as ReactDOM from "react-dom"
import { MapPin, X, Briefcase, Layers, CheckCircle2 } from "lucide-react"
import { JOB_DETAILS, type Job } from "@/lib/data/jobs"
import { useEscapeKey, useBodyScrollLockWithPosition } from "@/lib/hooks"
import { BulletList } from "./bullet-list"

interface JobModalProps {
  job: Job
  onClose: () => void
}

export const JobModal = memo(function JobModal({ job, onClose }: JobModalProps) {
  const details = JOB_DETAILS[job.id]

  useEscapeKey(onClose)
  useBodyScrollLockWithPosition(true)

  if (!details) return null

  const modalContent = (
    <div
      className="fixed inset-0 z-[99999] bg-brand-navy/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to   { transform: translateY(0); opacity: 1; }
        }
        .animate-modal {
          animation: slideUp 0.4s cubic-bezier(0.32, 0.72, 0, 1) forwards;
        }
      `}</style>

      <div className="animate-modal bg-brand-white w-full max-w-6xl h-[100dvh] sm:h-[90dvh] sm:rounded-[40px] flex flex-col overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="bg-brand-navy px-5 pt-5 pb-6 md:p-12 text-brand-white relative shrink-0 overflow-hidden">
          {/* texture */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none opacity-60"
            style={{
              backgroundImage: `repeating-linear-gradient(
                -62deg,
                transparent,
                transparent 60px,
                rgba(114,145,199,0.06) 60px,
                rgba(114,145,199,0.06) 61px
              )`,
            }}
          />
          <div
            aria-hidden
            className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-brand-coral/20 blur-[100px] pointer-events-none"
          />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-brand-white/10 hover:bg-brand-coral hover:text-brand-navy transition-all active:scale-90 z-10 cursor-pointer"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div className="relative space-y-3 sm:space-y-5">
            <div className="flex items-center gap-2.5">
              <span className="block w-6 h-px bg-brand-coral" />
              <span className="text-brand-coral font-semibold uppercase tracking-[0.28em] text-[10px] sm:text-[11px]">
                {job.seniority} Position
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-[0.95] tracking-tight pr-12 max-w-3xl">
              {job.title}
            </h2>

            <div className="flex flex-wrap gap-2 pt-2 sm:pt-3">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-white/10 rounded-full text-[10px] sm:text-xs font-semibold border border-brand-white/10">
                <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-coral shrink-0" />
                <span className="truncate max-w-[140px] sm:max-w-none">
                  {job.location}
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-white/10 rounded-full text-[10px] sm:text-xs font-semibold border border-brand-white/10">
                <Briefcase className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-coral shrink-0" />{" "}
                {job.contract}
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-coral/15 rounded-full text-[10px] sm:text-xs font-semibold border border-brand-coral/30">
                <Layers className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-coral shrink-0" />
                <span className="truncate max-w-[180px] sm:max-w-none">
                  {job.techStack.join(" · ")}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto px-5 py-6 sm:p-8 md:p-12 space-y-10 sm:space-y-14 bg-brand-white">
          {/* Overview */}
          <section>
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <span className="font-serif italic text-brand-coral text-base">-</span>
              <h4 className="text-[10px] sm:text-xs font-semibold text-brand-navy uppercase tracking-[0.28em]">
                Role Overview
              </h4>
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-brand-navy/80 leading-relaxed max-w-4xl font-light">
              {details.overview}
            </p>
          </section>

          {/* Primary details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
            <div className="bg-brand-navy/[0.03] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-brand-navy/5">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[10px] tabular-nums font-semibold tracking-[0.22em] uppercase text-brand-coral">
                  01
                </span>
                <span className="block w-6 h-px bg-brand-coral" />
              </div>
              <h5 className="font-black text-brand-navy text-lg sm:text-xl uppercase tracking-tight mb-4 sm:mb-5">
                Core Responsibilities
              </h5>
              <BulletList
                items={details.responsibilities}
                color="var(--color-brand-coral)"
              />
            </div>
            <div className="bg-brand-navy/[0.03] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-brand-navy/5">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[10px] tabular-nums font-semibold tracking-[0.22em] uppercase text-brand-coral">
                  02
                </span>
                <span className="block w-6 h-px bg-brand-coral" />
              </div>
              <h5 className="font-black text-brand-navy text-lg sm:text-xl uppercase tracking-tight mb-4 sm:mb-5">
                Requirements
              </h5>
              <BulletList
                items={details.requirements}
                color="var(--color-brand-coral)"
              />
            </div>
          </div>

          {/* Secondary details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
            <div className="bg-brand-navy/[0.03] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-brand-navy/5">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[10px] tabular-nums font-semibold tracking-[0.22em] uppercase text-brand-coral">
                  03
                </span>
                <span className="block w-6 h-px bg-brand-coral" />
              </div>
              <h5 className="font-black text-brand-navy text-lg sm:text-xl uppercase tracking-tight mb-4 sm:mb-5">
                Bonus / Nice to Have
              </h5>
              <BulletList
                items={details.niceToHave}
                color="var(--color-brand-coral)"
              />
            </div>
            <div className="bg-brand-navy text-brand-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 relative overflow-hidden">
              <div
                aria-hidden
                className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-brand-coral/20 blur-[60px]"
              />
              <div className="relative">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] tabular-nums font-semibold tracking-[0.22em] uppercase text-brand-coral">
                    04
                  </span>
                  <span className="block w-6 h-px bg-brand-coral" />
                </div>
                <h5 className="font-black text-brand-white text-lg sm:text-xl uppercase tracking-tight mb-4 sm:mb-5">
                  What We Offer
                </h5>
                <ul className="space-y-2.5 mt-3">
                  {details.offers.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-brand-white/80 leading-relaxed"
                    >
                      <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-brand-coral" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Privacy disclaimer */}
          <div className="pt-6 sm:pt-8 border-t border-brand-navy/10 text-center">
            <p className="text-xs sm:text-sm text-brand-navy/50 max-w-2xl mx-auto font-serif italic">
              By applying for this position, you agree that your personal data
              will be processed according to our privacy policy. We are an equal
              opportunity employer.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="shrink-0 px-5 py-4 sm:px-8 sm:py-6 border-t border-brand-navy/10 bg-brand-white flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6">
          <div className="flex items-center gap-3 text-brand-navy/60">
            <div className="hidden sm:flex w-10 h-10 rounded-full bg-brand-coral/15 items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-brand-coral" />
            </div>
            <p className="text-xs font-medium">
              Estimated response time:{" "}
              <span className="text-brand-navy font-bold">
                2–4 business days
              </span>
            </p>
          </div>
          <button
            onClick={() => console.log(`Applying for: ${job.title}`)}
            className="w-full sm:w-auto px-10 sm:px-12 bg-brand-navy hover:bg-brand-teal text-brand-white py-4 sm:py-5 rounded-full font-semibold uppercase tracking-[0.22em] text-[11px] transition-colors shadow-xl shadow-brand-navy/10 active:scale-[0.98] cursor-pointer"
          >
            Submit Application
          </button>
        </div>
      </div>
    </div>
  )

  return ReactDOM.createPortal(modalContent, document.body)
})
