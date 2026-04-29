"use client"

import { memo, useCallback } from "react"
import { ChevronDown, Users, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EXECUTIVE_STATS, HIRE_STATS, REMOTE_STATS, type Service } from "@/lib/constants/services"
import { scrollToSection } from "@/lib/utils/scroll"
import { ServiceStats } from "./service-stats"

export const MobileServiceItem = memo(function MobileServiceItem({
  service,
  isOpen,
  onToggle,
}: {
  service: Service
  isOpen: boolean
  onToggle: () => void
}) {
  const IconComponent = service.icon

  const handleNavigate = useCallback((href: string) => {
    scrollToSection(href)
  }, [])

  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden bg-[#f5f5f5] mb-4 last:mb-0 transition-all duration-300">
      <button
        onClick={onToggle}
        className="w-full px-6 py-6 flex items-center justify-between text-left group transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-[#085689]/10 flex-shrink-0 flex items-center justify-center group-hover:bg-[#085689]/20 transition-colors">
            <IconComponent className="w-6 h-6 text-[#085689]" />
          </div>
          <h3 className="text-lg font-semibold text-black pr-4 leading-tight">
            {service.title}
          </h3>
        </div>

        <ChevronDown
          className={`w-6 h-6 text-[#085689] transition-transform duration-500 shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-8">
          {service.subtitle && (
            <p className="text-[#085689] font-medium mb-4">{service.subtitle}</p>
          )}

          <div className="space-y-6">
            {service.sections.map((section, idx) => (
              <div key={idx}>
                <h4 className="text-lg font-semibold text-black mb-3">
                  {section.heading}
                </h4>
                <ul className="space-y-2">
                  {section.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-base leading-relaxed text-gray-600"
                    >
                      <span className="text-[#085689] text-lg leading-none mt-0.5 flex-shrink-0">
                        &bull;
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {service.title === "Executive Search & Headhunting" && (
            <ServiceStats stats={EXECUTIVE_STATS} layout="grid" className="mt-8" />
          )}

          {service.title === "Remote IT Hiring & Global Talent" && (
            <ServiceStats stats={REMOTE_STATS} layout="grid" className="mt-8" />
          )}

          {service.title === "Hire Contract or Freelance Developers" && (
            <div className="mt-8 flex flex-col gap-4">
              <div className="flex justify-center">
                <ServiceStats stats={HIRE_STATS} layout="grid" />
              </div>
              <Button
                onClick={() => handleNavigate("#companies")}
                className="w-full bg-[#085689] hover:bg-[#0a6a9c] text-white py-3 rounded-xl"
              >
                Hire contract <Users className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}

          {service.title === "Permanent IT Recruitment" && (
            <div className="mt-8">
              <Button
                onClick={() => handleNavigate("#companies")}
                className="w-full bg-[#085689] hover:bg-[#0a6a9c] text-white py-3 rounded-xl cursor-pointer"
              >
                Learn more <Users className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}

          {service.title === "IT Salary Benchmarking & Hiring Insights" && (
            <div className="mt-8">
              <Button
                onClick={() => handleNavigate("#contact")}
                className="w-full bg-[#085689] hover:bg-[#0a6a9c] text-white py-3 rounded-xl cursor-pointer"
              >
                Learn more <Search className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
})
