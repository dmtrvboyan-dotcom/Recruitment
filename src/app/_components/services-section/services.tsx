"use client"

import { useState, useCallback, useRef } from "react"
import { useEscapeKey, useClickOutside } from "@/lib/hooks"
import { SERVICES, type Service } from "@/lib/constants/services"
import { MobileServiceItem } from "./mobile-service-item"
import { DesktopServiceCard } from "./desktop-service-card"
import { DesktopPanel } from "./desktop-panel"

export function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [openMobileItems, setOpenMobileItems] = useState<number[]>([])
  const mobileAccordionRef = useRef<HTMLDivElement>(null)

  const closePanel = useCallback(() => setSelectedService(null), [])
  const closeAllMobileItems = useCallback(() => setOpenMobileItems([]), [])

  useEscapeKey(closePanel)
  useClickOutside(mobileAccordionRef, closeAllMobileItems)

  const toggleMobileItem = useCallback((index: number) => {
    setOpenMobileItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }, [])

  const layout = [
    {
      lg: "lg:col-span-7",
      md: "md:col-span-2",
      variant: "feature" as const,
      borders: "border-b-3 lg:border-b-3 lg:border-r-3 border-brand-navy/10",
    },
    {
      lg: "lg:col-span-5",
      md: "md:col-span-1",
      variant: "default" as const,
      borders: "border-b-3 border-brand-navy/10",
    },
    {
      lg: "lg:col-span-4",
      md: "md:col-span-1",
      variant: "default" as const,
      borders: "border-b-3 md:border-r-3 lg:border-r-3 border-brand-navy/10",
    },
    {
      lg: "lg:col-span-4",
      md: "md:col-span-1",
      variant: "default" as const,
      borders: "border-b-3 lg:border-r-3 border-brand-navy/10",
    },
    {
      lg: "lg:col-span-4",
      md: "md:col-span-1",
      variant: "default" as const,
      borders: "border-b-3 md:border-r-3 lg:border-r-0 border-brand-navy/10",
    },
    {
      lg: "lg:col-span-12",
      md: "md:col-span-2",
      variant: "wide" as const,
      borders: "",
    },
  ]



  return (

    <section
      id="services"
      className="relative py-20 sm:py-24 lg:py-32 bg-brand-white overflow-hidden"
    >

      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 lg:left-auto lg:-left-32 lg:translate-x-0 w-[360px] h-[360px] lg:w-[520px] lg:h-[520px] rounded-full bg-brand-coral/18 blur-[100px] lg:blur-[120px] pointer-events-none"
      />

      <div
        aria-hidden
        className="hidden lg:block absolute top-[48%] -right-32 w-[420px] h-[420px] rounded-full bg-brand-teal/18 blur-[130px] pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14 lg:mb-20">
          <div className="flex items-center justify-center gap-3 sm:gap-3.5 mb-5 sm:mb-6">
            <span className="block w-6 sm:w-9 h-px bg-brand-coral" />
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] sm:tracking-[0.32em] uppercase text-brand-coral">
              Our Services
            </span>
            <span className="block w-6 sm:w-9 h-px bg-brand-coral" />
          </div>
          <h2 className="text-[clamp(1.75rem,6vw,3.5rem)] font-black leading-[0.95] sm:leading-[0.92] tracking-tight uppercase text-brand-navy mb-5 sm:mb-6">
            Our  <span className="text-brand-coral">six</span> Services
            <br />
          </h2>
          <div className="mx-auto h-[2px] w-12 sm:w-16 bg-brand-coral" />
        </div>

        <div
          ref={mobileAccordionRef}
          className="md:hidden rounded-2xl overflow-hidden border-3 border-brand-white-10"
        >
          <div className="flex flex-col gap-px">
            {SERVICES.map((service, index) => (
              <MobileServiceItem
                key={index}
                service={service}
                index={index}
                variant={index === 0 ? "feature" : "default"}
                isOpen={openMobileItems.includes(index)}
                onToggle={() => toggleMobileItem(index)}
              />
            ))}
          </div>
        </div>

        <div className="hidden md:block">
          <div className="grid grid-cols-2 lg:grid-cols-12 rounded-3xl overflow-hidden border-3 border-brand-navy/10 bg-brand-white">
            {SERVICES.map((service, index) => {
              const cfg = layout[index]
              return (
                <div key={index} className={`${cfg.md} ${cfg.lg} ${cfg.borders}`}>
                  <DesktopServiceCard
                    service={service}
                    index={index}
                    variant={cfg.variant}
                    isSelected={selectedService?.title === service.title}
                    onSelect={() => {
                      setSelectedService(service)
                      document.getElementById("services")?.scrollIntoView({ behavior: "smooth", block: "start" })
                    }} />
                </div>
              )
            })}
          </div>
        </div>

        <p className="text-center text-base sm:text-lg text-brand-navy/50 leading-relaxed mt-12 sm:mt-16 lg:mt-20 max-w-2xl mx-auto">
          End-to-end IT recruitment, helping companies hire tech professionals
          locally and globally.
        </p>
      </div>

      <DesktopPanel service={selectedService} onClose={closePanel} />
    </section>
  )
}