"use client"

import { useState, useMemo } from "react"
import { Search, X, SlidersHorizontal } from "lucide-react"
import { SAMPLE_JOBS, type Job } from "@/lib/data/jobs"
import { filterJobs } from "@/lib/utils/filters"
import { JobCard } from "./job-card"
import { JobModal } from "./job-modal"
import { JobFilters } from "./job-filters"
import { JobsPagination } from "./job-pagination"

const JOBS_PER_PAGE = 6

export function JobsSection() {
  const [selectedLocations, setSelectedLocations] = useState<string[]>([])
  const [selectedType, setSelectedType] = useState("all")
  const [selectedTech, setSelectedTech] = useState("all")
  const [selectedSeniorities, setSelectedSeniorities] = useState<string[]>([])
  const [selectedContracts, setSelectedContracts] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  const filteredJobs = useMemo(() => {
    setCurrentPage(1)
    return filterJobs(SAMPLE_JOBS, {
      locations: selectedLocations,
      type: selectedType,
      tech: selectedTech,
      seniorities: selectedSeniorities,
      contracts: selectedContracts,
      searchQuery,
    })
  }, [
    selectedLocations,
    selectedType,
    selectedTech,
    selectedSeniorities,
    selectedContracts,
    searchQuery,
  ])

  const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE)
  const paginatedJobs = filteredJobs.slice(
    (currentPage - 1) * JOBS_PER_PAGE,
    currentPage * JOBS_PER_PAGE
  )

  return (
    <section
      id="jobs"
      className="relative py-20 sm:py-24 lg:py-32 bg-brand-navy overflow-hidden"
    >
      {/* Diagonal slash texture */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -62deg,
            transparent,
            transparent 70px,
            rgba(114,145,199,0.05) 70px,
            rgba(114,145,199,0.05) 71px
          )`,
        }}
      />

      {/* Coral glow top */}
      <div
        aria-hidden
        className="absolute -top-32 left-1/4 w-[400px] h-[400px] lg:w-[520px] lg:h-[520px] rounded-full bg-brand-coral/15 blur-[120px] pointer-events-none"
      />

      {/* Teal glow bottom right */}
      <div
        aria-hidden
        className="hidden lg:block absolute bottom-0 -right-32 w-[420px] h-[420px] rounded-full bg-brand-teal/15 blur-[130px] pointer-events-none"
      />

      {/* Watermark */}
      <div
        aria-hidden
        className="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 text-[clamp(10rem,18vw,16rem)] font-black uppercase leading-[0.85] tracking-tighter text-brand-white/[0.025] select-none pointer-events-none whitespace-nowrap"
      >
        OPEN ROLES
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {selectedJob && (
          <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
        )}

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14 lg:mb-16">
          <div className="flex items-center justify-center gap-3 sm:gap-3.5 mb-5 sm:mb-6">
            <span className="block w-6 sm:w-9 h-px bg-brand-coral" />
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] sm:tracking-[0.32em] uppercase text-brand-coral">
              Careers
            </span>
            <span className="block w-6 sm:w-9 h-px bg-brand-coral" />
          </div>
          <h2 className="text-[clamp(1.75rem,6vw,3.5rem)] font-black leading-[0.95] sm:leading-[0.92] tracking-tight uppercase text-brand-white mb-5 sm:mb-6">
            Open
            <br />
            <span className="text-brand-coral">positions.</span>
          </h2>
          <div className="mx-auto h-[2px] w-12 sm:w-16 bg-brand-coral mb-6 sm:mb-8" />
          <p className="text-sm sm:text-base text-brand-white/55 leading-relaxed max-w-xl mx-auto px-2 sm:px-0">
            Briefs from companies hiring across the EU and US — full-time,
            contract, and remote.
          </p>
        </div>

        {/* Search bar */}
        <div className="relative group max-w-xl mx-auto mb-12 lg:mb-16">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-white/40 group-focus-within:text-brand-coral w-5 h-5 transition-colors duration-200" />
          <input
            type="text"
            placeholder="Search by role or tech stack..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-brand-white/5 border border-brand-white/10 pl-14 pr-14 py-5 rounded-full text-brand-white placeholder:text-brand-white/30 focus:outline-none focus:border-brand-coral/50 focus:bg-brand-white/[0.07] transition-colors duration-200 text-sm sm:text-base"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-brand-white/40 hover:text-brand-coral transition-colors duration-200"
            >
              <X className="w-5 h-5" strokeWidth={1.5} />
            </button>
          )}
        </div>

        {/* Sidebar + results */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          <JobFilters
            selectedLocations={selectedLocations}
            setSelectedLocations={setSelectedLocations}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            selectedTech={selectedTech}
            setSelectedTech={setSelectedTech}
            selectedSeniorities={selectedSeniorities}
            setSelectedSeniorities={setSelectedSeniorities}
            selectedContracts={selectedContracts}
            setSelectedContracts={setSelectedContracts}
          />

          <div className="flex-1 min-w-0">
            {/* Results meta + pagination */}
            <div className="mb-8 lg:mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-brand-white/10">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-coral opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-coral" />
                </span>
                <div className="flex items-baseline gap-2.5">
                  <span className="text-2xl lg:text-3xl font-black text-brand-white tabular-nums tracking-tight leading-none">
                    {filteredJobs.length}
                  </span>
                  <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-brand-coral">
                    Open briefs
                  </span>
                </div>
              </div>
              <JobsPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
              {paginatedJobs.map((job, idx) => (
                <JobCard
                  key={job.id}
                  job={job}
                  index={(currentPage - 1) * JOBS_PER_PAGE + idx}
                  onSelect={() => setSelectedJob(job)}
                />
              ))}
            </div>

            {/* Empty state */}
            {filteredJobs.length === 0 && (
              <div className="text-center py-20 lg:py-32 rounded-3xl bg-brand-white/[0.03] border border-dashed border-brand-white/15">
                <SlidersHorizontal
                  className="w-12 h-12 text-brand-white/20 mx-auto mb-5"
                  strokeWidth={1.5}
                />
                <h3 className="text-base font-black uppercase tracking-tight text-brand-white mb-2">
                  No briefs match those filters
                </h3>
                <p className="text-sm text-brand-white/45 mb-6">
                  Try widening your search.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedTech("all")
                    setSelectedSeniorities([])
                  }}
                  className="text-[10px] font-semibold tracking-[0.22em] uppercase text-brand-coral hover:text-brand-coral-hover transition-colors duration-200"
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}