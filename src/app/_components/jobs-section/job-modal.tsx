import { memo } from "react"
import * as ReactDOM from "react-dom"
import { MapPin, X, Briefcase, Globe, Layers, CheckCircle2 } from "lucide-react"
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
      className="fixed inset-0 z-[99999] bg-brand-navy/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
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

      <div className="animate-modal bg-white w-full max-w-6xl h-[100dvh] sm:h-[90dvh] sm:rounded-[40px] flex flex-col overflow-hidden shadow-2xl">

        <div className="bg-brand-navy px-5 pt-5 pb-6 md:p-12 text-white relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-white/10 hover:bg-brand-coral transition-all active:scale-90 z-10"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div className="space-y-2 sm:space-y-4">
            <span className="text-brand-coral font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs">
              {job.seniority} Position
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight pr-12">
              {job.title}
            </h2>

            <div className="flex flex-wrap gap-2 pt-1 sm:pt-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-full text-[10px] sm:text-xs font-bold border border-white/10">
                <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-coral shrink-0" />
                <span className="truncate max-w-[120px] sm:max-w-none">{job.location}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-full text-[10px] sm:text-xs font-bold border border-white/10">
                <Briefcase className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-blue shrink-0" /> {job.contract}
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-blue/30 rounded-full text-[10px] sm:text-xs font-bold border border-brand-blue/50">
                <Layers className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white shrink-0" />
                <span className="truncate max-w-[160px] sm:max-w-none">{job.techStack.join(" • ")}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto px-5 py-6 sm:p-8 md:p-12 space-y-8 sm:space-y-12 bg-white">

          {/* Overview */}
          <section>
            <h4 className="flex items-center gap-3 text-[10px] sm:text-xs font-bold text-brand-blue uppercase tracking-widest mb-4 sm:mb-6">
              <div className="w-8 sm:w-10 h-[2px] bg-brand-coral" /> Role Overview
            </h4>
            <p className="text-base sm:text-lg text-brand-navy/80 leading-relaxed max-w-4xl">
              {details.overview}
            </p>
          </section>

          {/* Primary Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
            <div className="bg-brand-bg rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-brand-navy/5">
              <h5 className="font-bold text-brand-navy text-base sm:text-lg mb-4 sm:mb-6">
                Core Responsibilities
              </h5>
              <BulletList items={details.responsibilities} color="var(--color-brand-blue)" />
            </div>
            <div className="bg-brand-bg rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-brand-navy/5">
              <h5 className="font-bold text-brand-navy text-base sm:text-lg mb-4 sm:mb-6">
                Requirements
              </h5>
              <BulletList items={details.requirements} color="var(--color-brand-blue)" />
            </div>
          </div>

          {/* Secondary Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
            <div className="bg-brand-bg rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-brand-navy/5">
              <h5 className="font-bold text-brand-navy text-base sm:text-lg mb-4 sm:mb-6">
                Bonus / Nice to Have
              </h5>
              <BulletList items={details.niceToHave} color="var(--color-brand-blue)" />
            </div>
            <div className="bg-brand-bg rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-brand-navy/5">
              <h5 className="font-bold text-brand-navy text-base sm:text-lg mb-4 sm:mb-6">
                What We Offer
              </h5>
              <BulletList items={details.offers} color="var(--color-brand-coral)" />
            </div>
          </div>

          {/* Privacy Disclaimer */}
          <div className="pt-6 sm:pt-8 border-t border-brand-navy/5 text-center">
            <p className="text-xs sm:text-sm text-brand-navy/50 max-w-2xl mx-auto italic">
              By applying for this position, you agree that your personal data will be processed according to our privacy policy. We are an equal opportunity employer.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="shrink-0 px-5 py-4 sm:px-8 sm:py-8 border-t border-brand-navy/5 bg-white flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6">
          <div className="flex items-center gap-3 text-brand-navy/60">
            <div className="hidden sm:block p-3 bg-brand-bg rounded-full">
              <CheckCircle2 className="w-5 h-5 text-brand-blue" />
            </div>
            <p className="text-xs font-medium">
              Estimated response time:{" "}
              <span className="text-brand-navy font-bold">2-4 business days</span>
            </p>
          </div>
          <button
            onClick={() => console.log(`Applying for: ${job.title}`)}
            className="w-full sm:w-auto px-8 sm:px-12 bg-brand-coral hover:bg-brand-coral-hover text-white py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold uppercase tracking-widest text-xs sm:text-sm transition-all shadow-xl shadow-brand-coral/20 active:scale-95 cursor-pointer"
          >
            Submit Application
          </button>
        </div>
      </div>
    </div>
  )

  return ReactDOM.createPortal(modalContent, document.body)
})
