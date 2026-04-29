"use client"

import { useCallback, memo } from "react"
import { Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CANDIDATE_STEPS } from "@/lib/constants/candidates"
import { scrollToSection } from "@/lib/utils/scroll"

/**
 * Step card component for candidates journey
 */
const StepCard = memo(function StepCard({
  step,
  index,
}: {
  step: (typeof CANDIDATE_STEPS)[0]
  index: number
}) {
  const StepIcon = step.icon

  return (
    <div className="flex md:flex-col items-start md:items-center gap-6 md:gap-0 text-center relative">
      {/* Mobile Number + Icon Row */}
      <div className="flex items-center gap-6 md:hidden">
        <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center z-10">
          <span className="text-xl font-bold text-[#78B6D9]">0{index + 1}</span>
        </div>
      </div>

      {/* Desktop Icon */}
      <div className="hidden md:block w-10 h-12 mx-auto flex items-center justify-center rounded-2xl mb-6">
        <div className="text-[#085689]">
          <StepIcon className="w-9 h-9" />
        </div>
      </div>

      {/* Title + Description */}
      <div className="flex-1 md:text-center">
        <h3 className="font-semibold text-lg text-black mb-3 leading-tight">
          {step.title}
        </h3>
        <p className="text-slate-600 text-[15px] leading-relaxed px-2">
          {step.description}
        </p>
      </div>
    </div>
  )
})

/**
 * Candidates section component
 */
export function CandidatesSection() {
  const handleNavigate = useCallback(() => {
    scrollToSection("#contact")
  }, [])

  return (
    <section
      id="candidates"
      className="px-4 py-24 md:px-8 md:py-32 lg:mb-[120px] md:mb-[50px]"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#085689] uppercase tracking-widest mb-3">
            FOR CANDIDATES
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-6">
            Your Next Career Move
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            We take the time to understand your goals, skills, and aspirations to
            connect you with opportunities that genuinely feel right.
          </p>
        </div>

        {/* Desktop: Horizontal Line + Numbers on Top */}
        <div className="hidden md:flex justify-center mb-12">
          <div className="relative w-full max-w-4xl">
            <div className="absolute top-5 left-0 right-0 h-px bg-[#78B6D9]/30" />
            <div className="relative flex justify-between px-8">
              <span className="px-5 text-3xl font-bold text-[#78B6D9] ml-[-20px]">
                01
              </span>
              <span className="px-5 text-3xl font-bold text-[#78B6D9]">02</span>
              <span className="px-5 text-3xl font-bold text-[#78B6D9] mr-[-20px]">
                03
              </span>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Mobile: Vertical Line */}
          <div className="md:hidden absolute left-[20px] top-12 bottom-6 w-px bg-[#78B6D9]/30" />

          <div className="space-y-16 md:space-y-0 md:grid md:grid-cols-3 md:gap-12">
            {CANDIDATE_STEPS.map((step, index) => (
              <StepCard key={index} step={step} index={index} />
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-20">
          <Button
            onClick={handleNavigate}
            className="group bg-[#085689] h-12 hover:bg-[#78B6D9] text-white px-5 py-3 rounded-xl font-semibold text-md flex items-center gap-3 transition-all duration-300 shadow-lg shadow-[#085689]/20 hover:shadow-xl hover:-translate-y-0.5"
          >
            <Upload className="w-12 h-12 group-hover:rotate-12 transition-transform" />
            Send Us Your CV
          </Button>
        </div>
      </div>
    </section>
  )
}
