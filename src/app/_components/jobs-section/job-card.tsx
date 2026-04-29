import { memo } from "react"
import { MapPin } from "lucide-react"
import type { Job } from "@/lib/data/jobs"

interface JobCardProps {
  job: Job
  onSelect: () => void
}

export const JobCard = memo(function JobCard({ job, onSelect }: JobCardProps) {
  return (
    <div className="bg-[#f5f5f5] border border-slate-200 rounded-3xl p-6 hover:shadow-lg transition-all duration-300 group h-full flex flex-col">
      <div className="flex gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-black group-hover:text-[#085689] transition-colors line-clamp-2">
            {job.title}
          </h3>
          <p className="text-[#085689] font-medium mt-1">{job.seniority}</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4 text-sm">
            <div className="flex items-center gap-1.5 text-slate-600">
              <MapPin className="w-4 h-4" />
              {job.location}
            </div>
            <div className="px-3 py-1 bg-[#085689] text-white rounded-full text-xs font-medium">
              {job.type}
            </div>
            <div className="px-3 py-1 bg-[#085689] text-white rounded-full text-xs font-medium capitalize">
              {job.contract}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-end justify-between mt-auto pt-6">
        <div className="flex flex-wrap gap-2">
          {job.techStack.map((tech, i) => (
            <span key={i} className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-xl">
              {tech}
            </span>
          ))}
        </div>
        <button
          onClick={onSelect}
          className="bg-[#78B6D9] hover:bg-[#0a6a9e] text-white px-4 py-2 rounded-2xl text-xs font-medium transition-all active:scale-95 cursor-pointer"
        >
          View Position
        </button>
      </div>
    </div>
  )
})