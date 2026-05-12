import { memo, useCallback, useState } from "react"
import { Filter, X, Check, RotateCcw } from "lucide-react"
import {
  JOB_LOCATIONS,
  SENIORITY_OPTIONS,
  CONTRACT_OPTIONS,
  TECH_OPTIONS,
} from "@/lib/data/jobs"
import { toggleArrayItem } from "@/lib/utils/filters"
import { FilterSection } from "./filter-section"

interface JobFiltersProps {
  selectedLocations: string[]
  setSelectedLocations: React.Dispatch<React.SetStateAction<string[]>>
  selectedType: string
  setSelectedType: (v: string) => void
  selectedTech: string
  setSelectedTech: (v: string) => void
  selectedSeniorities: string[]
  setSelectedSeniorities: React.Dispatch<React.SetStateAction<string[]>>
  selectedContracts: string[]
  setSelectedContracts: React.Dispatch<React.SetStateAction<string[]>>
}

export const JobFilters = memo(function JobFilters(props: JobFiltersProps) {
  const {
    selectedLocations,
    setSelectedLocations,
    selectedType,
    setSelectedType,
    selectedTech,
    setSelectedTech,
    selectedSeniorities,
    setSelectedSeniorities,
    setSelectedContracts,
  } = props

  const [showFilters, setShowFilters] = useState(false)
  const [openSections, setOpenSections] = useState({
    technology: true,
    seniority: true,
    location: true,
    workModel: true,
  })

  const toggleSection = useCallback(
    (section: keyof typeof openSections) => {
      setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }))
    },
    []
  )

  const resetAll = () => {
    setSelectedLocations([])
    setSelectedSeniorities([])
    setSelectedTech("all")
    setSelectedType("all")
    setSelectedContracts([])
  }

  const workModels = [
    { value: "all", label: "All models" },
    { value: "hybrid", label: "Hybrid" },
    { value: "remote", label: "Fully remote" },
    { value: "office", label: "On-site" },
  ]

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setShowFilters(!showFilters)}
        className="lg:hidden flex items-center justify-center gap-3 w-full bg-brand-coral hover:bg-brand-coral-hover text-brand-white px-6 py-4 rounded-full mb-6 text-[11px] font-semibold tracking-[0.22em] uppercase transition-colors duration-200"
      >
        <Filter className="w-4 h-4" strokeWidth={1.5} />
        {showFilters ? "Close filters" : "Filter positions"}
        {showFilters && <X className="w-4 h-4 ml-auto" />}
      </button>

      <div
        className={`lg:w-80 lg:shrink-0 transition-all duration-300 ${
          showFilters ? "block opacity-100" : "hidden opacity-0"
        } lg:block lg:opacity-100`}
      >
        <div className="rounded-3xl p-6 lg:sticky lg:top-8 bg-brand-white/[0.03] border border-brand-white/10 backdrop-blur-sm">
          {/* Filter header */}
          <div className="flex items-center justify-between mb-2 pb-5 border-b border-brand-white/10">
            <div className="flex items-center gap-2.5">
              <span className="block w-6 h-px bg-brand-coral" />
              <span className="text-[10px] font-semibold tracking-[0.32em] uppercase text-brand-coral">
                Refine
              </span>
            </div>
            <button
              onClick={resetAll}
              className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.18em] uppercase text-brand-white/40 hover:text-brand-coral transition-colors duration-200"
            >
              <RotateCcw className="w-3 h-3" strokeWidth={1.5} />
              Reset
            </button>
          </div>

          {/* Technology */}
          <FilterSection
            title="Technology"
            isOpen={openSections.technology}
            onToggle={() => toggleSection("technology")}
          >
            <div className="grid grid-cols-2 gap-1.5 pt-3">
              {TECH_OPTIONS.map((tech) => {
                const active = selectedTech === tech.value
                return (
                  <button
                    key={tech.value}
                    onClick={() => setSelectedTech(tech.value)}
                    className={`py-2.5 px-3 rounded-lg text-[10px] font-semibold tracking-[0.15em] uppercase transition-colors duration-200 ${
                      active
                        ? "bg-brand-coral text-brand-white border border-brand-coral"
                        : "bg-transparent text-brand-white/55 border border-brand-white/10 hover:border-brand-coral/40 hover:text-brand-coral"
                    }`}
                  >
                    {tech.label}
                  </button>
                )
              })}
            </div>
          </FilterSection>

          {/* Seniority */}
          <FilterSection
            title="Seniority"
            isOpen={openSections.seniority}
            onToggle={() => toggleSection("seniority")}
          >
            <div className="space-y-1 pt-3">
              {SENIORITY_OPTIONS.map((s) => {
                const checked = selectedSeniorities.includes(s)
                return (
                  <label
                    key={s}
                    className="group flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-brand-white/5 transition-colors duration-200"
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() =>
                        setSelectedSeniorities((prev) =>
                          toggleArrayItem(prev, s)
                        )
                      }
                      className="sr-only"
                    />
                    <span
                      className={`w-4 h-4 rounded flex items-center justify-center transition-colors duration-200 ${
                        checked
                          ? "bg-brand-coral border border-brand-coral"
                          : "bg-transparent border border-brand-white/20 group-hover:border-brand-coral/40"
                      }`}
                    >
                      {checked && (
                        <Check
                          className="w-2.5 h-2.5 text-brand-white"
                          strokeWidth={3}
                        />
                      )}
                    </span>
                    <span
                      className={`text-sm transition-colors duration-200 ${
                        checked
                          ? "text-brand-white"
                          : "text-brand-white/55 group-hover:text-brand-white/80"
                      }`}
                    >
                      {s}
                    </span>
                  </label>
                )
              })}
            </div>
          </FilterSection>

          {/* Location */}
          <FilterSection
            title="Location"
            isOpen={openSections.location}
            onToggle={() => toggleSection("location")}
          >
            <div className="space-y-1 pt-3">
              {JOB_LOCATIONS.map((loc) => {
                const checked = selectedLocations.includes(loc)
                return (
                  <label
                    key={loc}
                    className="group flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-brand-white/5 transition-colors duration-200"
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() =>
                        setSelectedLocations((prev) =>
                          toggleArrayItem(prev, loc)
                        )
                      }
                      className="sr-only"
                    />
                    <span
                      className={`w-4 h-4 rounded flex items-center justify-center transition-colors duration-200 ${
                        checked
                          ? "bg-brand-coral border border-brand-coral"
                          : "bg-transparent border border-brand-white/20 group-hover:border-brand-coral/40"
                      }`}
                    >
                      {checked && (
                        <Check
                          className="w-2.5 h-2.5 text-brand-white"
                          strokeWidth={3}
                        />
                      )}
                    </span>
                    <span
                      className={`text-sm transition-colors duration-200 ${
                        checked
                          ? "text-brand-white"
                          : "text-brand-white/55 group-hover:text-brand-white/80"
                      }`}
                    >
                      {loc}
                    </span>
                  </label>
                )
              })}
            </div>
          </FilterSection>

          {/* Work Model */}
          <FilterSection
            title="Work model"
            isOpen={openSections.workModel}
            onToggle={() => toggleSection("workModel")}
          >
            <div className="space-y-1 pt-3">
              {workModels.map(({ value, label }) => {
                const active = selectedType === value
                return (
                  <button
                    key={value}
                    onClick={() => setSelectedType(value)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-colors duration-200 ${
                      active
                        ? "bg-brand-coral/10 text-brand-coral"
                        : "text-brand-white/55 hover:bg-brand-white/5 hover:text-brand-white/80"
                    }`}
                  >
                    <span className="inline-flex items-center gap-2.5">
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          active ? "bg-brand-coral" : "bg-brand-white/20"
                        }`}
                      />
                      {label}
                    </span>
                  </button>
                )
              })}
            </div>
          </FilterSection>
        </div>
      </div>
    </>
  )
})