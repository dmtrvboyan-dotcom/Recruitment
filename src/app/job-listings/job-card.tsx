import { memo } from "react"
import { MapPin, Briefcase, ArrowUpRight } from "lucide-react"
import type { Job } from "@/lib/data/jobs"

interface JobCardProps {
  job: Job
  index: number
  onSelect: () => void
}

export const JobCard = memo(function JobCard({
  job,
  index,
  onSelect,
}: JobCardProps) {
  const number = String(index + 1).padStart(2, "0")
  const workModelLabel =
    job.type === "hybrid"
      ? "Hybrid"
      : job.type === "remote"
        ? "Remote"
        : job.type === "office"
          ? "On-site"
          : ""

  return (
    <button
      onClick={onSelect}
      className="group relative w-full text-left rounded-3xl bg-brand-white/[0.02] border border-brand-white/10 hover:border-brand-coral/50 hover:bg-brand-white/[0.04] transition-colors duration-300 p-6 lg:p-7 flex flex-col gap-5 overflow-hidden cursor-pointer"
    >
      {/* Top row: number + status pill */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2.5">
          <span className="text-3xl lg:text-4xl font-black leading-[0.85] tracking-[-0.04em] text-brand-white/10 group-hover:text-brand-coral/50 transition-colors duration-300">
            {number}
          </span>
          <div className="h-px w-5 bg-brand-coral/40" />
        </div>

        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-coral/10 border border-brand-coral/30 text-[9px] tracking-[0.22em] uppercase font-semibold text-brand-coral">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-coral opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-coral" />
          </span>
          Hiring
        </span>
      </div>

      <span className="font-bold italic text-[12px] tracking-[0.15em] text-brand-coral leading-none">
        — {job.seniority}
        {workModelLabel && ` · ${workModelLabel}`}
      </span>

      {/* Title */}
      <h3 className="font-black uppercase tracking-[-0.015em] leading-[1.05] text-brand-white text-xl lg:text-[1.5rem] line-clamp-2">
        {job.title}
      </h3>

      {/* Meta row */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[12px] text-brand-white/55">
        <span className="inline-flex items-center gap-1.5">
          <MapPin
            className="w-3.5 h-3.5 text-brand-coral"
            strokeWidth={1.5}
          />
          {job.location}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Briefcase
            className="w-3.5 h-3.5 text-brand-coral"
            strokeWidth={1.5}
          />
          {job.contract}
        </span>
      </div>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5">
        {job.techStack.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium uppercase tracking-wide bg-brand-white/5 text-brand-white/60 border border-brand-white/10 group-hover:bg-brand-coral/10 group-hover:text-brand-coral group-hover:border-brand-coral/30 transition-colors duration-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-auto pt-2 flex items-center justify-between">
        <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-brand-coral">
          Open brief
        </span>
        <ArrowUpRight
          className="w-5 h-5 text-brand-coral group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
          strokeWidth={1.5}
        />
      </div>

      {/* Growing coral underline */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand-coral group-hover:w-full transition-all duration-500" />
    </button>
  )
})