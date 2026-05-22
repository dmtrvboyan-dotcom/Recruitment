"use client"

import Link from "next/link"
import { memo } from "react"
import { X, ArrowUpRight } from "lucide-react"
import { type Service } from "@/lib/constants/services"
import { AppButton } from '@/components/ui/app-button';


export const DesktopPanel = memo(function DesktopPanel({
  service,
  onClose,
}: {
  service: Service | null
  onClose: () => void
}) {

  return (
    <div
      className={`fixed inset-0 z-50 flex items-start justify-end transition-all duration-300 ${service ? "visible" : "invisible"
        }`}
    >
      <div
        className={`absolute inset-0 bg-brand-navy/40 backdrop-blur-sm transition-opacity duration-300 ${service ? "opacity-100" : "opacity-0"
          }`}
        onClick={onClose}
      />

      <div
        className={`relative h-full w-full md:w-[55%] lg:w-[50%] bg-brand-white shadow-2xl transform transition-transform duration-500 ease-out overflow-y-auto ${service ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="sticky top-0 left-0 right-0 h-[3px] bg-brand-coral z-20" />

        {service && (
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 lg:top-7 lg:right-7 z-10 w-11 h-11 rounded-full bg-brand-navy hover:bg-brand-coral text-brand-white flex items-center justify-center transition-colors duration-200"
              aria-label="Close"
            >
              <X className="w-5 h-5" strokeWidth={2} />
            </button>

            <div className="px-6 lg:px-12 pt-14 lg:pt-16 pb-12 flex flex-col items-center text-center ">
              <div className="flex items-center gap-3.5 mb-7">
                <span className="block w-9 h-px bg-brand-coral" />
                <span className="text-[11px] font-semibold tracking-[0.32em] uppercase text-brand-coral">
                  Service
                </span>
                <span className="block w-9 h-px bg-brand-coral" />
              </div>

              <div
                className={`w-6 h-6 lg:w-8 lg:h-8 rounded-2xl ${service.iconBg} flex items-center bg-transparent justify-center mb-7`}
              >
                <service.icon
                  className={`w-8 h-8 lg:w-10 lg:h-10 ${service.iconColor}`}
                  strokeWidth={1.5}
                />
              </div>

              <h3 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold uppercase tracking-tight leading-[1.05] text-brand-navy mb-3 max-w-xl">
                {service.title}
              </h3>

              {service.subtitle && (
                <p className="text-base lg:text-lg text-brand-coral font-semibold mb-5">
                  {service.subtitle}
                </p>
              )}

              <div className="h-[2px] w-12 bg-brand-coral mb-7" />

              {service.intro && (
                <p className="text-base lg:text-lg leading-relaxed text-brand-navy/60 mb-10 max-w-2xl">
                  {service.intro}
                </p>
              )}

              <div className="w-full grid grid-cols-1 [@media(min-width:1235px)]:grid-cols-2 gap-8 lg:gap-12 mb-12 text-left">
                {service.sections.map((section, idx) => (
                  <div key={idx}>
                    <h4 className="text-[11px] font-semibold tracking-[0.22em] uppercase text-brand-coral mb-4">
                      {section.heading}
                    </h4>
                    <ul className="space-y-3">
                      {section.points.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-[15px] lg:text-base leading-relaxed text-brand-navy/70"
                        >
                          <span className="text-brand-coral text-lg leading-none mt-0.5 flex-shrink-0">
                            &bull;
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <AppButton href={service.href} ping>
                Learn more <span className="sr-only">about {service.title}</span>
                <ArrowUpRight
                  className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 animate-bounce-x"
                  strokeWidth={1.5}
                />
              </AppButton>

              {/* <Link
                href={service.href}
                className="group relative inline-flex items-center justify-center gap-2.5 py-5 px-10 bg-brand-coral hover:bg-brand-coral-hover text-brand-white text-md font-semibold tracking-[0.22em] uppercase rounded-full transition-colors duration-200 mb-3 active:scale-95"
              >
                <span className="absolute inset-0 rounded-full animate-ping-slow bg-brand-coral opacity-30 pointer-events-none" />

                Learn more
                <ArrowUpRight
                  className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 animate-bounce-x"
                  strokeWidth={1.5}
                />
              </Link> */}

            </div>

            <div className="bg-brand-navy text-brand-white px-6 lg:px-12 py-10 lg:py-12">
              <div className="grid grid-cols-3 gap-4 lg:gap-8 max-w-2xl mx-auto">
                {service.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className={`text-center ${idx !== service.stats.length - 1
                      ? "border-r border-brand-white/10 pr-4 lg:pr-8"
                      : ""
                      }`}
                  >
                    <div className="text-3xl lg:text-[2.5rem] font-bold text-brand-white leading-none tracking-tight mb-2">
                      {stat.value}
                    </div>
                    <div className="text-[10px] tracking-[0.22em] uppercase text-brand-coral font-semibold leading-snug">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
})