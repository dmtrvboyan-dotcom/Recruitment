import { memo } from "react"
import { MapPin } from "lucide-react"
import type { Job } from "@/lib/data/jobs"

interface JobCardProps {
  job: Job
  onSelect: () => void
}

export const JobCard = memo(function JobCard({ job, onSelect }: JobCardProps) {
  return (
    <div className="bg-white border border-brand-navy/5 rounded-3xl p-7 hover:shadow-2xl hover:shadow-brand-navy/10 transition-all duration-300 group h-full flex flex-col relative overflow-hidden">
      <div className="flex-1">
        <div className="flex justify-between items-start mb-4">
          <p className="text-brand-blue font-bold text-xs uppercase tracking-widest">
            {job.seniority}
          </p>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-[10px] font-bold uppercase">
              {job.type}
            </span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-brand-navy group-hover:text-brand-blue transition-colors line-clamp-2 mb-4">
          {job.title}
        </h3>

        <div className="flex flex-wrap items-center gap-4 text-sm text-brand-navy/60 mb-6">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-brand-coral" />
            {job.location}
          </div>
          <div className="px-3 py-1 bg-brand-bg border border-brand-navy/10 rounded-full text-xs capitalize">
            {job.contract}
          </div>
        </div>
      </div>

      <div className="mt-auto space-y-6">
        <div className="flex flex-wrap gap-2">
          {job.techStack.map((tech, i) => (
            <span key={i} className="text-[11px] font-bold text-brand-navy/40 uppercase tracking-tighter">
              {tech} {i !== job.techStack.length - 1 && "•"}
            </span>
          ))}
        </div>

        <button
          onClick={onSelect}
          className="w-full bg-brand-navy hover:bg-brand-blue text-white py-4 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all active:scale-95 cursor-pointer"
        >
          View Position
        </button>
      </div>
    </div>
  )
})