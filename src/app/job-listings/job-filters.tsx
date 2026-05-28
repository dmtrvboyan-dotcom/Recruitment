import { memo, useCallback, useMemo, useState } from "react"
import { Filter, X, Check, RotateCcw, Search } from "lucide-react"
import {
  JOB_LOCATIONS,
  SENIORITY_OPTIONS,
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
  const [techQuery, setTechQuery] = useState("")
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
    setTechQuery("")
  }

  // Filter tech options by typed query - keeps "all" visible
  const filteredTech = useMemo(() => {
    const q = techQuery.trim().toLowerCase()
    if (!q) return TECH_OPTIONS
    return TECH_OPTIONS.filter(
      (t) =>
        t.value === "all" ||
        t.label.toLowerCase().includes(q) ||
        t.value.toLowerCase().includes(q)
    )
  }, [techQuery])

  const activeCount =
    selectedLocations.length +
    selectedSeniorities.length +
    (selectedTech !== "all" ? 1 : 0) +
    (selectedType !== "all" ? 1 : 0)

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
        className="lg:hidden flex items-center justify-center gap-3 w-full bg-brand-coral hover:bg-brand-coral-hover text-brand-navy px-6 py-4 rounded-full mb-6 text-[11px] font-semibold tracking-[0.22em] uppercase transition-colors duration-200"
      >
        <Filter className="w-4 h-4" strokeWidth={1.5} />
        {showFilters ? "Close filters" : "Filter positions"}
        {activeCount > 0 && !showFilters && (
          <span className="ml-1 inline-flex items-center justify-center min-w-5 h-5 px-1.5 rounded-full bg-brand-white text-brand-coral text-[10px] tabular-nums">
            {activeCount}
          </span>
        )}
        {showFilters && <X className="w-4 h-4 ml-auto" />}
      </button>

      <div
        className={`lg:w-80 lg:shrink-0 transition-all duration-300 ${
          showFilters ? "block opacity-100" : "hidden opacity-0"
        } lg:block lg:opacity-100`}
      >
        <div className="rounded-3xl p-6 lg:sticky lg:top-8 bg-brand-navy/3 border border-brand-navy/5 backdrop-blur-sm">
          {/* Filter header */}
          <div className="flex items-center justify-between mb-2 pb-5 border-b border-brand-navy/10">
            <div className="flex items-center gap-2.5">
              <span className="block w-6 h-px bg-brand-coral" />
              <span className="text-[10px] font-semibold tracking-[0.32em] uppercase text-brand-coral">
                Refine
              </span>
              {activeCount > 0 && (
                <span className="text-[10px] font-semibold tabular-nums text-brand-navy/40">
                  · {activeCount}
                </span>
              )}
            </div>
            <button
              onClick={resetAll}
              className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.18em] uppercase text-brand-navy/40 hover:text-brand-coral transition-colors duration-200 cursor-pointer"
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
            <div className="pt-3 space-y-3">
              {/* Search input */}
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-brand-navy/40"
                  strokeWidth={1.5}
                />
                <input
                  type="text"
                  value={techQuery}
                  onChange={(e) => setTechQuery(e.target.value)}
                  placeholder="Search stack..."
                  className="w-full bg-brand-navy/4 border border-brand-navy/10 rounded-lg pl-9 pr-8 py-2 text-[12px] text-brand-navy placeholder:text-brand-navy/50 focus:outline-none focus:border-brand-coral/50 transition-colors duration-200"
                />
                {techQuery && (
                  <button
                    onClick={() => setTechQuery("")}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-brand-navy/40 hover:text-brand-coral transition-colors"
                  >
                    <X className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </button>
                )}
              </div>

              {/* Tech chips */}
              {filteredTech.length > 0 ? (
                <div className="grid grid-cols-2 gap-1.5">
                  {filteredTech.map((tech) => {
                    const active = selectedTech === tech.value
                    return (
                      <button
                        key={tech.value}
                        onClick={() => setSelectedTech(tech.value)}
                        className={`py-2.5 px-3 rounded-lg text-[10px] font-semibold tracking-[0.15em] uppercase transition-colors duration-200 cursor-pointer ${
                          active
                            ? "bg-brand-coral text-brand-navy border border-brand-coral"
                            : "bg-transparent text-brand-navy/55 border border-brand-navy/10 hover:border-brand-coral/40 hover:text-brand-coral"
                        }`}
                      >
                        {tech.label}
                      </button>
                    )
                  })}
                </div>
              ) : (
                <p className="text-[11px] text-brand-navy/40 italic font-serif px-1 py-2">
                  No stack matches "{techQuery}"
                </p>
              )}
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
                    className="group flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-brand-navy/5 transition-colors duration-200"
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
                          : "bg-transparent border border-brand-navy/20 group-hover:border-brand-coral/40"
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
                          ? "text-brand-navy"
                          : "text-brand-navy/55 group-hover:text-brand-navy/80"
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
                    className="group flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-brand-navy/5 transition-colors duration-200"
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
                          : "bg-transparent border border-brand-navy/20 group-hover:border-brand-coral/40"
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
                          ? "text-brand-navy"
                          : "text-brand-navy/55 group-hover:text-brand-navy/80"
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
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-colors duration-200 cursor-pointer ${
                      active
                        ? "bg-brand-coral/10 text-brand-coral"
                        : "text-brand-navy/55 hover:bg-brand-white/5 hover:text-brand-navy/80"
                    }`}
                  >
                    <span className="inline-flex items-center gap-2.5">
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          active ? "bg-brand-coral" : "bg-brand-navy/20"
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
