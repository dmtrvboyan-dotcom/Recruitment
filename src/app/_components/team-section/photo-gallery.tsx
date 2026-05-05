"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri"
import { useSwipe } from "./useSwipe"

const GALLERY_PHOTOS = [
  { src: "/uploaded/team.jpg",  alt: "Team photo 1" },
  { src: "/uploaded/team1.png", alt: "Team photo 2" },
  { src: "/uploaded/team3.png", alt: "Team photo 4" },
]

const THUMBS_PER_PAGE = 3

export function PhotoGallery() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [thumbPage, setThumbPage] = useState(0)
  const [hasSwiped, setHasSwiped] = useState(false)

  const totalThumbPages = Math.ceil(GALLERY_PHOTOS.length / THUMBS_PER_PAGE)
  const visibleThumbs = GALLERY_PHOTOS.slice(
    thumbPage * THUMBS_PER_PAGE,
    thumbPage * THUMBS_PER_PAGE + THUMBS_PER_PAGE
  )

  const goTo = useCallback((index: number) => {
    setActiveIndex(index)
    setThumbPage(Math.floor(index / THUMBS_PER_PAGE))
  }, [])

  const goToPrev = useCallback(() => {
    goTo(activeIndex > 0 ? activeIndex - 1 : GALLERY_PHOTOS.length - 1)
  }, [activeIndex, goTo])

  const goToNext = useCallback(() => {
    goTo(activeIndex < GALLERY_PHOTOS.length - 1 ? activeIndex + 1 : 0)
  }, [activeIndex, goTo])

  const swipeHandlers = useSwipe({
    onSwipeLeft: goToNext,
    onSwipeRight: goToPrev,
    onSwiped: () => setHasSwiped(true),
  })

  return (
    <div className="relative mb-8">
      {/* Main image */}
      <div
        className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing touch-pan-y"
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30 pointer-events-none" />

        <div
          className={`absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm md:hidden transition-opacity duration-500 ${
            hasSwiped ? "opacity-0" : "opacity-100 animate-pulse"
          }`}
        >
          Swipe to browse
        </div>
      </div>

      {/* Thumbnails */}
      <div className="px-2 py-4 flex items-center justify-center gap-2 max-w-[320px] mx-auto">
        <button
          onClick={() => setThumbPage((p) => Math.max(0, p - 1))}
          disabled={thumbPage === 0}
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white bg-[#085689] transition-opacity duration-200 ${
            thumbPage === 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-[#78B6D9]"
          }`}
        >
          <RiArrowLeftSLine size={22} />
        </button>

        <div className="flex flex-1 gap-2">
          {visibleThumbs.map((photo, i) => {
            const globalIndex = thumbPage * THUMBS_PER_PAGE + i
            const isActive = globalIndex === activeIndex
            return (
              <button
                key={globalIndex}
                onClick={() => setActiveIndex(globalIndex)}
                className={`relative w-24 h-16 shrink-0 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                  isActive
                    ? "border-[#78B6D9] scale-105 shadow-lg"
                    : "border-white/20 hover:border-white/60"
                }`}
              >
                <Image src={photo.src} alt={photo.alt} fill className="object-cover" sizes="96px" />
              </button>
            )
          })}
        </div>

        <button
          onClick={() => setThumbPage((p) => Math.min(totalThumbPages - 1, p + 1))}
          disabled={thumbPage >= totalThumbPages - 1}
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white bg-[#085689] transition-opacity duration-200 ${
            thumbPage >= totalThumbPages - 1 ? "opacity-30 cursor-not-allowed" : "hover:bg-[#78B6D9]"
          }`}
        >
          <RiArrowRightSLine size={22} />
        </button>
      </div>
    </div>
  )
}