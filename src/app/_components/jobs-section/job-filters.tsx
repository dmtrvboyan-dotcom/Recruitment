import { memo, useCallback, useState } from "react"
import { Filter, X, Check } from "lucide-react"
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
    selectedLocations, setSelectedLocations,
    selectedType, setSelectedType,
    selectedTech, setSelectedTech,
    selectedSeniorities, setSelectedSeniorities,
    selectedContracts, setSelectedContracts,
  } = props

  const [showFilters, setShowFilters] = useState(false)
  const [openSections, setOpenSections] = useState({
    technology: true,
    seniority: true,
    location: true,
    contract: true,
    workModel: true,
  })

  const toggleSection = useCallback((section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }))
  }, [])

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setShowFilters(!showFilters)}
        className="lg:hidden flex items-center justify-center gap-3 w-full bg-brand-navy text-white px-6 py-4 rounded-2xl mb-6 font-bold uppercase tracking-widest text-xs transition-all active:bg-brand-blue"
        style={{ backgroundColor: "var(--color-brand-navy)" }}
      >
        <Filter className="w-4 h-4" />
        {showFilters ? "Close Filters" : "Filter Positions"}
        {showFilters && <X className="w-4 h-4 ml-auto" />}
      </button>

      {/* Filter Sidebar */}
      <div className={`lg:w-80 lg:shrink-0 transition-all duration-300 ${showFilters ? "block opacity-100" : "hidden opacity-0"} lg:block lg:opacity-100`}>
        <div 
          className="rounded-[32px] p-6 lg:sticky lg:top-8 space-y-6 shadow-sm border border-brand-navy/5"
          style={{ backgroundColor: "var(--color-brand-bg)" }}
        >
          
          {/* Technology Section */}
          <FilterSection title="Technology" isOpen={openSections.technology} onToggle={() => toggleSection("technology")}>
            <div className="grid grid-cols-2 gap-2 pt-2">
              {TECH_OPTIONS.map((tech) => (
                <button
                  key={tech.value}
                  onClick={() => setSelectedTech(tech.value)}
                  className="py-3 px-2 rounded-xl text-[11px] font-bold uppercase tracking-wider transition-all border"
                  style={{
                    backgroundColor: selectedTech === tech.value ? "var(--color-brand-blue)" : "#fff",
                    borderColor: selectedTech === tech.value ? "var(--color-brand-blue)" : "rgba(26, 26, 46, 0.1)",
                    color: selectedTech === tech.value ? "#fff" : "var(--color-brand-navy-mid)",
                  }}
                >
                  {tech.label}
                </button>
              ))}
            </div>
          </FilterSection>

          {/* Seniority Section */}
          <FilterSection title="Seniority" isOpen={openSections.seniority} onToggle={() => toggleSection("seniority")}>
            <div className="space-y-2 pt-2">
              {SENIORITY_OPTIONS.map((s) => (
                <label key={s} className="group flex items-center gap-3 cursor-pointer p-2 rounded-xl hover:bg-white transition-colors">
                  <div className="relative flex items-center justify-center">
                    <input
                      type="checkbox"
                      checked={selectedSeniorities.includes(s)}
                      onChange={() => setSelectedSeniorities((prev) => toggleArrayItem(prev, s))}
                      className="peer appearance-none w-5 h-5 border-2 rounded-md transition-all"
                      style={{ 
                        borderColor: "rgba(26, 26, 46, 0.2)",
                        accentColor: "var(--color-brand-blue)" 
                      }}
                    />
                    <div className="absolute inset-0 scale-0 peer-checked:scale-100 transition-transform flex items-center justify-center rounded-md" style={{ backgroundColor: "var(--color-brand-blue)" }}>
                      <Check className="w-3 h-3 text-white" strokeWidth={4} />
                    </div>
                  </div>
                  <span className="text-sm font-medium transition-colors" style={{ color: "var(--color-brand-navy-mid)" }}>
                    {s}
                  </span>
                </label>
              ))}
            </div>
          </FilterSection>

          {/* Location Section */}
          <FilterSection title="Location" isOpen={openSections.location} onToggle={() => toggleSection("location")}>
            <div className="space-y-2 pt-2">
              {JOB_LOCATIONS.map((loc) => (
                <label key={loc} className="group flex items-center gap-3 cursor-pointer p-2 rounded-xl hover:bg-white transition-colors">
                  <div className="relative flex items-center justify-center">
                    <input
                      type="checkbox"
                      checked={selectedLocations.includes(loc)}
                      onChange={() => setSelectedLocations((prev) => toggleArrayItem(prev, loc))}
                      className="peer appearance-none w-5 h-5 border-2 rounded-md transition-all"
                      style={{ borderColor: "rgba(26, 26, 46, 0.2)" }}
                    />
                    <div className="absolute inset-0 scale-0 peer-checked:scale-100 transition-transform flex items-center justify-center rounded-md" style={{ backgroundColor: "var(--color-brand-blue)" }}>
                      <Check className="w-3 h-3 text-white" strokeWidth={4} />
                    </div>
                  </div>
                  <span className="text-sm font-medium" style={{ color: "var(--color-brand-navy-mid)" }}>{loc}</span>
                </label>
              ))}
            </div>
          </FilterSection>

          {/* Work Model Section */}
          <FilterSection title="Work Model" isOpen={openSections.workModel} onToggle={() => toggleSection("workModel")}>
            <div className="space-y-1 pt-2">
              {["all", "hybrid", "remote", "office"].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all border-l-4"
                  style={{
                    backgroundColor: selectedType === type ? "rgba(8, 86, 137, 0.08)" : "transparent",
                    borderColor: selectedType === type ? "var(--color-brand-blue)" : "transparent",
                    color: selectedType === type ? "var(--color-brand-blue)" : "var(--color-brand-navy-mid)",
                  }}
                >
                  {type === "all" ? "All Models" : type === "hybrid" ? "Hybrid" : type === "remote" ? "Fully Remote" : "Office Based"}
                </button>
              ))}
            </div>
          </FilterSection>

          {/* Clear All Helper */}
          <button 
            onClick={() => {
              setSelectedLocations([]);
              setSelectedSeniorities([]);
              setSelectedTech("all");
              setSelectedType("all");
              setSelectedContracts([]);
            }}
            className="w-full py-3 text-[10px] font-black uppercase tracking-[0.2em] transition-colors hover:opacity-70"
            style={{ color: "var(--color-brand-coral)" }}
          >
            Reset Filters
          </button>

        </div>
      </div>
    </>
  )
})