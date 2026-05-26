"use client"

import { memo } from "react"
import { ChevronDown, ArrowUpRight } from "lucide-react"
import { type Service } from "@/lib/constants/services"
import { AppButton } from '@/components/ui/app-button';

export const MobileServiceItem = memo(function MobileServiceItem({
  service,
  index,
  isOpen,
  onToggle,
  variant = "default",
}: {
  service: Service
  index: number
  isOpen: boolean
  onToggle: () => void
  variant?: "default" | "feature"
}) {
  const isFeature = variant === "feature"
  const number = String(index + 1).padStart(2, "0")

  return (
    <div
      className={`relative overflow-hidden transition-colors duration-300"
        ${isFeature
          ? "bg-brand-navy text-brand-white  border-t-2 border-b-2 border-l-2 border-r-2"
          : `bg-brand-white border-l-2 border-r-2 border-b-2 text-brand-navy ${isOpen ? "bg-brand-coral/5" : ""}`
        }
      `}
    >
      <button
        onClick={onToggle}
        className="w-full text-left p-5 sm:p-6 flex flex-col gap-4"
      >
        <div className="flex items-start justify-between">
          {isFeature ? (
            <span className="font-serif italic text-[12px] tracking-[0.18em] text-brand-coral">

            </span>
          ) : (
            <span
              className={`font-bold leading-[0.85] tracking-[-0.04em] text-4xl sm:text-5xl transition-colors duration-300
                ${isOpen
                  ? "text-brand-coral/40"
                  : "text-brand-navy/50"
                }
              `}
            >
              {number}
            </span>
          )}

          {isFeature ? (
            <span className="text-[10px] tracking-[0.25em] uppercase text-brand-white/35">
            </span>
          ) : (
            <ChevronDown
              className={`w-5 h-5 text-brand-navy/40 shrink-0 transition-transform duration-500 ${isOpen ? "rotate-180 text-brand-coral" : ""
                }`}
              strokeWidth={1.5}
            />
          )}
        </div>

        <div className="flex items-end justify-between gap-4">
          <div className="flex-1 min-w-0">
            {isFeature && (
              <div className="font-bold leading-[0.85] tracking-[-0.04em] text-brand-coral/20 text-6xl sm:text-7xl mb-2">
                {number}
              </div>
            )}
            <h3
              className={`font-bold uppercase tracking-[-0.015em] leading-[1.05]
                ${isFeature ? "text-xl sm:text-2xl" : "text-base sm:text-lg"}
              `}
            >
              {service.title}
            </h3>
            {service.subtitle && !isOpen && (
              <p
                className={`mt-1.5 text-[13px] leading-snug
                  ${isFeature ? "text-brand-white/55" : "text-brand-navy/55"}
                `}
              >
                {service.subtitle}
              </p>
            )}
          </div>

          {isFeature && (
            <ChevronDown
              className={`w-6 h-6 text-brand-coral shrink-0 transition-transform duration-500 ${isOpen ? "rotate-180" : ""
                }`}
              strokeWidth={1.5}
            />
          )}
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-400 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-5 sm:px-6 pb-6 sm:pb-7">
          <div
            className={`h-px w-full mb-6 ${isFeature ? "bg-brand-coral/30" : "bg-brand-navy/10"
              }`}
          />

          {service.subtitle && (
            <p
              className={`text-sm font-medium mb-5 ${isFeature ? "text-brand-coral" : "text-brand-coral"
                }`}
            >
              {service.subtitle}
            </p>
          )}
          {service.intro && (
            <p
              className={`text-sm leading-relaxed mb-6 ${isFeature ? "text-brand-white/65" : "text-brand-navy/60"
                }`}
            >
              {service.intro}
            </p>
          )}

          <div className="space-y-6">
            {service.sections.map((section, idx) => (
              <div key={idx}>
                <h4
                  className={`text-[11px] font-semibold tracking-[0.22em] uppercase mb-3 ${isFeature ? "text-brand-coral" : "text-brand-coral"
                    }`}
                >
                  {section.heading}
                </h4>
                <ul className="space-y-2.5">
                  {section.points.map((point, i) => (
                    <li
                      key={i}
                      className={`flex items-start gap-3 text-sm leading-relaxed ${isFeature ? "text-brand-white/70" : "text-brand-navy/65"
                        }`}
                    >
                      <span
                        className={`text-brand-coral text-lg leading-none mt-0.5 shrink-0`}
                      >
                        &bull;
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div
            className={`mt-7 pt-6 grid grid-cols-3 gap-4 border-t ${isFeature ? "border-brand-white/10" : "border-brand-navy/8"
              }`}
          >
            {service.stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div
                  className={`text-xl sm:text-2xl font-bold tracking-tight ${isFeature ? "text-brand-coral" : "text-brand-navy"
                    }`}
                >
                  {stat.value}
                </div>
                <div
                  className={`text-[10px] tracking-[0.18em] uppercase mt-1.5 leading-snug ${isFeature ? "text-brand-white/45" : "text-brand-navy/45"
                    }`}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3">

            <AppButton
              href={service.href}
              className="mt-6 w-full"
            >
              Learn more about our service <span className="sr-only">about {service.title}</span>
              <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
            </AppButton>
            <AppButton href="/contacts" variant="navy" >
              Talk to Us
              <ArrowUpRight
                className="w-4 h-4"
                strokeWidth={1.5}
              />
            </AppButton>
          </div>

        </div>
      </div>
    </div >
  )
})