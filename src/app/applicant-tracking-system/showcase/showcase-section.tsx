"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight, Plus, X } from "lucide-react"
import { showcaseData } from "./data"
import { AppButton } from '@/components/ui/app-button';


const items = showcaseData.items

export function ShowcaseSection() {
  const [activeIdx, setActiveIdx] = useState<number>(-1)
  const [currentBg, setCurrentBg] = useState<number>(0)

  function handleItemClick(i: number) {
    if (i === activeIdx) { setActiveIdx(-1); return }
    setActiveIdx(i)
    setCurrentBg(i)
  }

  function handleClose() { setActiveIdx(-1) }

  function navigateUp() {
    const newIdx = currentBg > 0 ? currentBg - 1 : items.length - 1
    setCurrentBg(newIdx); setActiveIdx(newIdx)
  }

  function navigateDown() {
    const newIdx = currentBg < items.length - 1 ? currentBg + 1 : 0
    setCurrentBg(newIdx); setActiveIdx(newIdx)
  }

  return (
    <section className="relative w-full bg-brand-white overflow-hidden pt-20 lg:pt-32 pb-20">



      <div className="relative max-w-7xl mx-auto px-5 sm:px-10 xl:px-16">
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-3 text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-brand-coral mb-4">
            <span className="block w-6 h-px bg-brand-coral/40" />
            {showcaseData.tagline}
            <span className="block w-6 h-px bg-brand-coral/40" />
          </span>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-none tracking-tight text-brand-navy mb-5">
            {showcaseData.title}
          </h2>
          <p className="text-sm sm:text-base text-brand-navy/50 max-w-2xl mx-auto leading-relaxed">
            {showcaseData.description}
          </p>
        </div>

        <div className="hidden md:block relative w-full overflow-hidden rounded-3xl aspect-video border border-brand-navy/8 shadow-[0_24px_64px_-16px_rgba(26,26,46,0.18)] bg-brand-navy/5">
          {items.map((item, i) => (
            <div
              key={item.id}
              className={cn(
                "absolute inset-0 transition-opacity duration-700 ease-in-out",
                currentBg === i ? "opacity-100" : "opacity-0",
              )}
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.label}
                fill
                className="object-cover"
                priority={i === 0}
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>
          ))}

          <div className="absolute inset-0 bg-linear-to-r from-brand-navy/40 via-brand-navy/5 to-transparent pointer-events-none" />
          <button
            onClick={handleClose}
            className={cn(
              "absolute top-5 right-5 z-20 w-9 h-9 rounded-full bg-brand-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-brand-white transition-all shadow-lg text-brand-navy",
              activeIdx >= 0 ? "opacity-100" : "opacity-0 pointer-events-none",
            )}
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="absolute inset-y-0 left-0 z-10 flex items-center px-8 md:px-10 lg:px-14">
            <div className="flex flex-col gap-2 w-full max-w-75">
              {items.map((item, i) => {
                const isActive = activeIdx === i
                return (
                  <div key={item.id} className="relative">
                    <button
                      onClick={() => handleItemClick(i)}
                      aria-expanded={isActive}
                      className={cn(
                        "flex items-center gap-2.5 px-4 py-2.5 rounded-full backdrop-blur-md transition-all duration-300 ease-out cursor-pointer border",
                        "bg-brand-white/85 border-brand-navy/10 hover:bg-brand-white hover:border-brand-coral/30",
                        isActive
                          ? "opacity-0 scale-95 max-h-0 py-0 pointer-events-none overflow-hidden border-transparent"
                          : "opacity-100 scale-100 max-h-12",
                      )}
                    >
                      <Plus className="w-4 h-4 text-brand-coral shrink-0" strokeWidth={2} />
                      <span className="text-xs font-semibold uppercase tracking-wide text-brand-navy whitespace-nowrap">
                        {item.label}
                      </span>
                    </button>

                    <div
                      className={cn(
                        "transition-all duration-300 ease-out overflow-hidden",
                        isActive ? "opacity-100 h-auto scale-100" : "opacity-0 max-h-0 scale-95 pointer-events-none",
                      )}
                    >
                      <div className="bg-brand-white/90 backdrop-blur-md rounded-2xl p-5 border border-brand-navy/8 shadow-[0_8px_32px_-8px_rgba(26,26,46,0.15)]">
                        <div className="w-8 h-0.5 bg-brand-coral rounded-full mb-3" />
                        <p className="text-sm leading-relaxed text-brand-navy/70">
                          <strong className="font-bold uppercase tracking-tight text-brand-navy text-xs">
                            {item.label}.
                          </strong>{" "}
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="md:hidden relative mx-0 h-screen max-h-170 overflow-hidden rounded-2xl border border-brand-navy/8 shadow-[0_16px_48px_-12px_rgba(26,26,46,0.18)]">
          {items.map((item, i) => (
            <div
              key={item.id}
              className={cn(
                "absolute inset-0 transition-opacity duration-700 ease-in-out",
                currentBg === i ? "opacity-100" : "opacity-0",
              )}
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.label}
                fill
                className="object-cover object-[65%_top]"
                priority={i === 0}
                sizes="100vw"
              />
            </div>
          ))}

          <div className="absolute inset-0 bg-linear-to-t from-brand-navy/75 via-brand-navy/20 to-transparent pointer-events-none" />

          <button
            onClick={handleClose}
            className={cn(
              "absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-brand-white/15 backdrop-blur-sm flex items-center justify-center text-brand-white hover:bg-brand-white/25 transition-all",
              activeIdx >= 0 ? "opacity-100" : "opacity-0 pointer-events-none",
            )}
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>

          <button
            onClick={navigateUp}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-brand-white/15 backdrop-blur-sm flex items-center justify-center text-brand-white hover:bg-brand-white/25 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={navigateDown}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-brand-white/15 backdrop-blur-sm flex items-center justify-center text-brand-white hover:bg-brand-white/25 transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="absolute bottom-0 left-0 right-0 z-10 p-4 pb-6">
            <div
              className={cn(
                "mb-4 transition-all duration-300 ease-out overflow-hidden",
                activeIdx >= 0 ? "max-h-40 opacity-100" : "max-h-0 opacity-0",
              )}
            >
              {activeIdx >= 0 && (
                <div className="bg-brand-white/95 backdrop-blur-md rounded-xl p-4 border border-brand-navy/8 shadow-xl">
                  <div className="w-6 h-0.5 bg-brand-coral rounded-full mb-2" />
                  <p className="text-sm leading-relaxed text-brand-navy/70">
                    <strong className="font-bold uppercase tracking-tight text-brand-navy text-xs">
                      {items[activeIdx].label}.
                    </strong>{" "}
                    {items[activeIdx].content}
                  </p>
                </div>
              )}
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
              {items.map((item, i) => (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(i)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 whitespace-nowrap flex-shrink-0 backdrop-blur-md border",
                    activeIdx === i
                      ? "bg-brand-white/95 border-brand-coral/20 shadow-md"
                      : "bg-brand-white/15 border-brand-white/10 hover:bg-brand-white/25",
                  )}
                >
                  <Plus
                    className={cn(
                      "w-3.5 h-3.5 shrink-0 transition-colors",
                      activeIdx === i ? "text-brand-coral" : "text-brand-white",
                    )}
                  />
                  <span
                    className={cn(
                      "text-xs font-semibold uppercase tracking-wide transition-colors",
                      activeIdx === i ? "text-brand-navy" : "text-brand-white",
                    )}
                  >
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto animate-fade-in-up delay-300 mt-14">
          <AppButton href={showcaseData.ctaButton.href} className="sm:w-auto">
            {showcaseData.ctaButton.text}
          </AppButton>
        </div>

      </div>
    </section>
  )
}