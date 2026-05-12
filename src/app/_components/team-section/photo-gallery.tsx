"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useSwipe } from "./useSwipe"

const GALLERY_PHOTOS = [
  { src: "/uploaded/team.jpg",  alt: "Team photo" },
  { src: "/uploaded/team1.png", alt: "Team at work" },
  { src: "/uploaded/team2.png", alt: "Company culture" },
  { src: "/uploaded/team3.png", alt: "Team event" },
  { src: "/uploaded/team4.png", alt: "Office life" },
  { src: "/uploaded/team5.png", alt: "Team gathering" },
]

export function PhotoGallery() {
  const [activeIndex, setActiveIndex] = useState(0)

  const goToPrev = useCallback(() => {
    setActiveIndex((i) => (i > 0 ? i - 1 : GALLERY_PHOTOS.length - 1))
  }, [])

  const goToNext = useCallback(() => {
    setActiveIndex((i) =>
      i < GALLERY_PHOTOS.length - 1 ? i + 1 : 0
    )
  }, [])

  const swipeHandlers = useSwipe({
    onSwipeLeft: goToNext,
    onSwipeRight: goToPrev,
  })

  const activeStr = String(activeIndex + 1).padStart(2, "0")
  const totalStr = String(GALLERY_PHOTOS.length).padStart(2, "0")

  return (
    <div className="mb-12 sm:mb-16 lg:mb-20">
      {/* Main image */}
      <div
        className="relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[16/9] lg:aspect-[16/9] mb-3 cursor-grab active:cursor-grabbing touch-pan-y"
        {...swipeHandlers}
      >
        <Image
          key={activeIndex}
          src={GALLERY_PHOTOS[activeIndex].src}
          alt={GALLERY_PHOTOS[activeIndex].alt}
          fill
          className="object-cover transition-opacity duration-500 select-none pointer-events-none"
          priority={activeIndex === 0}
          draggable={false}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/75 via-brand-navy/15 to-brand-navy/20 pointer-events-none" />

        {/* Editorial counter — top right */}
        <div className="absolute top-5 right-5 sm:top-7 sm:right-7 flex items-baseline gap-2">
          <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-brand-white leading-none tabular-nums tracking-tight">
            {activeStr}
          </span>
          <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-brand-white/45 pb-1">
            / {totalStr}
          </span>
        </div>

        {/* Italic serif eyebrow — bottom left */}
        <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7 flex items-center gap-2.5">
          <span className="block w-5 h-px bg-brand-coral" />
          <span className="font-serif italic text-[12px] tracking-[0.18em] text-brand-coral">
            — Recruitment.bg Team
          </span>
        </div>

        {/* Arrow navigation — bottom right */}
        <div className="absolute bottom-5 right-5 sm:bottom-7 sm:right-7 flex items-center gap-2">
          <button
            onClick={goToPrev}
            aria-label="Previous photo"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-brand-navy/60 backdrop-blur-sm border border-brand-white/20 text-brand-white hover:bg-brand-coral hover:border-brand-coral transition-colors duration-300"
          >
            <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
          </button>
          <button
            onClick={goToNext}
            aria-label="Next photo"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-brand-navy/60 backdrop-blur-sm border border-brand-white/20 text-brand-white hover:bg-brand-coral hover:border-brand-coral transition-colors duration-300"
          >
            <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-2">
        {GALLERY_PHOTOS.map((photo, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            aria-label={`View ${photo.alt}`}
            className={`relative aspect-square rounded-xl overflow-hidden transition-all duration-300 ${
              i === activeIndex
                ? "ring-2 ring-brand-coral ring-offset-2 ring-offset-brand-navy scale-[1.04]"
                : "opacity-45 hover:opacity-70"
            }`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover  cursor-pointer"
              sizes="(max-width: 768px) 16vw, 10vw"
            />
          </button>
        ))}
      </div>
    </div>
  )
}