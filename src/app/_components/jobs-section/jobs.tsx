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
  }, [selectedLocations, selectedType, selectedTech, selectedSeniorities, selectedContracts, searchQuery])

  const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE)
  const paginatedJobs = filteredJobs.slice(
    (currentPage - 1) * JOBS_PER_PAGE,
    currentPage * JOBS_PER_PAGE
  )

  return (
    <section id="jobs" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {selectedJob && (
          <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
        )}

        {/* Header Content */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-brand-coral mb-4">
        Careers
          </p>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-brand-navy leading-[1.1] mb-10">
           Job Positions
          </h2>

          {/* Styled Search Bar */}
          <div className="relative group max-w-xl mx-auto">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-navy/30 group-focus-within:text-brand-blue w-5 h-5 transition-colors" />
            <input
              type="text"
              placeholder="Search by role or tech stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-brand-bg border border-brand-navy/5 pl-14 pr-14 py-5 rounded-3xl text-brand-navy focus:outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5 transition-all text-lg shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-brand-navy/20 hover:text-brand-coral transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
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

          {/* Results Area */}
          <div className="flex-1">
            <div className="mb-10 flex items-center justify-between border-b border-brand-navy/5 pb-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-coral animate-pulse" />
                <span className="text-lg font-bold text-brand-navy">
                  {filteredJobs.length} <span className="text-brand-navy/40 font-medium uppercase text-xs tracking-widest ml-2">Openings Found</span>
                </span>
              </div>
              <JobsPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {paginatedJobs.map((job) => (
                <JobCard key={job.id} job={job} onSelect={() => setSelectedJob(job)} />
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-32 bg-brand-bg rounded-[40px] border border-dashed border-brand-navy/10">
                <SlidersHorizontal className="w-12 h-12 text-brand-navy/10 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-brand-navy mb-2">No results found</h3>
                <p className="text-brand-navy/50">Try adjusting your filters or search terms.</p>
                <button 
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedTech("all");
                    setSelectedSeniorities([]);
                  }}
                  className="mt-6 text-brand-blue font-bold uppercase text-xs tracking-widest hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}