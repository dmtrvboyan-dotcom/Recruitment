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

  // Ensure we don't crash if details are missing for a specific ID
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
        
        {/* Header: Brand Navy Background */}
        <div className="bg-brand-navy p-8 md:p-12 text-white relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center bg-white/10 hover:bg-brand-coral transition-all active:scale-90 z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="space-y-4">
            <span className="text-brand-coral font-bold uppercase tracking-[0.2em] text-xs">
              {job.seniority} Position
            </span>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight pr-12">
              {job.title}
            </h2>
            
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-xs font-bold border border-white/10">
                <MapPin className="w-3.5 h-3.5 text-brand-coral" /> {job.location}
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-xs font-bold border border-white/10">
                <Briefcase className="w-3.5 h-3.5 text-brand-blue" /> {job.contract}
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-brand-blue/30 rounded-full text-xs font-bold border border-brand-blue/50">
                <Layers className="w-3.5 h-3.5 text-white" /> {job.techStack.join(" • ")}
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Body Content */}
        <div className="flex-1 overflow-y-auto p-8 md:p-12 space-y-12 bg-white">
          
          {/* Overview Section */}
          <section>
            <h4 className="flex items-center gap-3 text-xs font-bold text-brand-blue uppercase tracking-widest mb-6">
              <div className="w-10 h-[2px] bg-brand-coral" /> Role Overview
            </h4>
            <p className="text-lg text-brand-navy/80 leading-relaxed max-w-4xl">
              {details.overview}
            </p>
          </section>

          {/* Primary Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-brand-bg rounded-3xl p-8 border border-brand-navy/5">
              <h5 className="font-bold text-brand-navy text-lg mb-6 flex items-center gap-2">
                Core Responsibilities
              </h5>
              <BulletList items={details.responsibilities} color="var(--color-brand-blue)" />
            </div>
            <div className="bg-brand-bg rounded-3xl p-8 border border-brand-navy/5">
              <h5 className="font-bold text-brand-navy text-lg mb-6 flex items-center gap-2">
                Requirements
              </h5>
              <BulletList items={details.requirements} color="var(--color-brand-blue)" />
            </div>
          </div>

          {/* Secondary Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-brand-bg rounded-3xl p-8 border border-brand-navy/5">
              <h5 className="font-bold text-brand-navy text-lg mb-6 flex items-center gap-2">
                Bonus / Nice to Have
              </h5>
              <BulletList items={details.niceToHave} color="var(--color-brand-blue)" />
            </div>
            <div className="bg-brand-bg rounded-3xl p-8 border border-brand-navy/5">
              <h5 className="font-bold text-brand-navy text-lg mb-6 flex items-center gap-2">
                What We Offer
              </h5>
              <BulletList items={details.offers} color="var(--color-brand-coral)" />
            </div>
          </div>

          {/* Privacy Disclaimer */}
          <div className="pt-8 border-t border-brand-navy/5 text-center">
            <p className="text-sm text-brand-navy/50 max-w-2xl mx-auto italic">
              By applying for this position, you agree that your personal data will be processed according to our privacy policy. We are an equal opportunity employer.
            </p>
          </div>
        </div>

        {/* Footer Action */}
        <div className="shrink-0 px-8 py-8 border-t border-brand-navy/5 bg-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-brand-navy/60">
             <div className="hidden sm:block p-3 bg-brand-bg rounded-full">
                <CheckCircle2 className="w-5 h-5 text-brand-blue" />
             </div>
             <p className="text-xs font-medium">
               Estimated response time: <span className="text-brand-navy font-bold">2-4 business days</span>
             </p>
          </div>
          <button
            onClick={() => console.log(`Applying for: ${job.title}`)}
            className="w-full md:w-auto px-12 bg-brand-coral hover:bg-brand-coral-hover text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-sm transition-all shadow-xl shadow-brand-coral/20 active:scale-95 cursor-pointer"
          >
            Submit Application
          </button>
        </div>
      </div>
    </div>
  )

  return ReactDOM.createPortal(modalContent, document.body)
})