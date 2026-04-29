"use client"

import { memo, useCallback } from "react"
import { X, Users, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EXECUTIVE_STATS, HIRE_STATS, REMOTE_STATS, type Service } from "@/lib/constants/services"
import { scrollToSection } from "@/lib/utils/scroll"
import { ServiceStatsLarge } from "./service-stats"

export const DesktopPanel = memo(function DesktopPanel({
  service,
  onClose,
}: {
  service: Service | null
  onClose: () => void
}) {
  const handleNavigate = useCallback((href: string) => {
    scrollToSection(href)
  }, [])

  return (
    <div
      className={`fixed inset-0 z-50 flex items-start justify-end transition-all duration-300 ${service ? "visible" : "invisible"
        }`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-[#ededed]/90 backdrop-blur-md transition-opacity duration-300 ${service ? "opacity-100" : "opacity-0"
          }`}
        onClick={onClose}
      />

      {/* Sliding panel */}
      <div
        className={`relative h-full w-full md:w-[50%] bg-[#efeeef] shadow-xl transform transition-transform duration-500 ease-out overflow-y-auto ${service ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {service && (
          <div className="p-6 md:p-8">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#085689] hover:bg-[#78B6D9] transition-colors"
            >
              <X className="w-6 h-6 hover:text-gray-600 text-white" />
            </button>

            {/* Header */}
            <div className="w-20 h-20 rounded-2xl bg-[#085689]/10 flex items-center justify-center mb-8">
              <service.icon className="w-12 h-12 text-[#085689]" />
            </div>
            <h3 className="text-3xl font-bold text-black mb-2">{service.title}</h3>
            <p className="text-xl text-[#085689] font-medium mb-6">{service.subtitle}</p>
            <p className="text-lg leading-relaxed text-gray-600 mb-10">{service.intro}</p>

            {/* Sections grid */}
            <div className="grid grid-cols-1 [@media(min-width:1235px)]:grid-cols-2 gap-8 md:gap-12">
              {service.sections.map((section, idx) => (
                <div key={idx}>
                  <h4 className="text-xl font-semibold text-black mb-5">
                    {section.heading}
                  </h4>
                  <ul className="space-y-3">
                    {section.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-[17px] leading-relaxed text-gray-600"
                      >
                        <span className="text-[#085689] text-xl leading-none mt-0.5 flex-shrink-0">
                          &bull;
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              {service.title === "Permanent IT Recruitment" && (
                <Button
                  onClick={() => handleNavigate("#companies")}
                  className="w-full sm:w-auto px-8 py-3.5 text-base font-medium bg-[#085689] hover:bg-[#0a6a9c] text-white rounded-xl shadow-md hover:shadow-lg transition-all active:scale-[0.98] flex items-center gap-2 cursor-pointer"
                >
                  Learn more <Users className="w-4 h-4" />
                </Button>
              )}

              {service.title === "IT Salary Benchmarking & Hiring Insights" && (
                <Button
                  onClick={() => handleNavigate("#contact")}
                  className="w-full sm:w-auto px-8 py-3.5 text-base font-medium bg-[#085689] hover:bg-[#0a6a9c] text-white rounded-xl shadow-md hover:shadow-lg transition-all active:scale-[0.98] flex items-center gap-2 cursor-pointer"
                >
                  Learn more <Search className="w-4 h-4" />
                </Button>
              )}
            </div>

            {/* Stats sections */}
            {service.title === "Executive Search & Headhunting" && (
              <div className="mt-16 border-t border-gray-200 pt-8">
                <ServiceStatsLarge stats={EXECUTIVE_STATS} />
              </div>
            )}

            {service.title === "Remote IT Hiring & Global Talent" && (
              <div className="mt-16 border-t border-gray-200 pt-8">
                <ServiceStatsLarge stats={REMOTE_STATS} />
              </div>
            )}

            {service.title === "Hire Contract or Freelance Developers" && (
              <div className="mt-10 flex flex-row lg:flex-row gap-8 lg:gap-0 items-start">
                <div className="lg:w-[260px] lg:shrink-0 mt-8 lg:pt-2">
                  <Button
                    onClick={() => handleNavigate("#specialized")}
                    className="w-full bg-[#085689] hover:bg-[#0a6a9c] text-white py-3.5 rounded-xl text-base font-medium cursor-pointer"
                  >
                    Learn more <Users className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                <div className="flex">
                  <div className="grid grid-cols-1 pl-8">
                    {HIRE_STATS.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-[2rem] font-bold text-[#085689]">{stat.value}</div>
                        <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
})
