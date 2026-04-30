"use client"

import { memo } from "react"
import { ChevronRight } from "lucide-react"
import { type Service } from "@/lib/constants/services"

export const DesktopServiceCard = memo(function DesktopServiceCard({
  service,
  isSelected,
  onSelect,
}: {
  service: Service
  isSelected: boolean
  onSelect: () => void
}) {
  const IconComponent = service.icon

  return (
    <div
      onClick={onSelect}
      className={`group cursor-pointer border rounded-2xl bg-card p-6 hover:border-brand-coral hover:shadow-lg transition-all duration-300 ${
        isSelected ? "border-brand-coral shadow-md" : "border-border"
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-4">
          <div className={`w-12 h-12 rounded-lg ${service.iconBg} flex items-center justify-center transition-opacity duration-200 group-hover:opacity-80`}>
            <IconComponent className={`w-6 h-6 ${service.iconColor}`} />
          </div>
          <h3 className="text-lg font-semibold text-brand-navy leading-tight pt-1">
            {service.title}
          </h3>
        </div>

        <div className="mt-1 p-2 rounded-full transition-all duration-300 group-hover:scale-110">
          <ChevronRight
            className={`w-5 h-5 text-brand-coral transition-transform duration-300 ${
              isSelected ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
      </div>
    </div>
  )
})
