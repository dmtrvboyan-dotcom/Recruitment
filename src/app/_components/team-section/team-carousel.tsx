"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { TEAM_MEMBERS } from "@/lib/constants/team"
import { useSwipe } from "./useSwipe"
import { TeamMemberCard } from "./team-member-card"

function useMembersPerPage() {
  const [membersPerPage, setMembersPerPage] = useState(2)

  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setMembersPerPage(4)
      else if (window.innerWidth >= 640) setMembersPerPage(3)
      else setMembersPerPage(2)
    }
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  return membersPerPage
}

interface TeamCarouselProps {
  showQuote?: boolean
}

export function TeamCarousel({ showQuote = true }: TeamCarouselProps) {
  const [currentPage, setCurrentPage] = useState(0)
  const membersPerPage = useMembersPerPage()
  const totalPages = Math.ceil(TEAM_MEMBERS.length / membersPerPage)

  const canGoPrev = currentPage > 0
  const canGoNext = currentPage < totalPages - 1

  const goToPrev = useCallback(() => {
    if (canGoPrev) setCurrentPage((p) => p - 1)
  }, [canGoPrev])

  const goToNext = useCallback(() => {
    if (canGoNext) setCurrentPage((p) => p + 1)
  }, [canGoNext])

  const swipeHandlers = useSwipe({
    onSwipeLeft: goToNext,
    onSwipeRight: goToPrev,
  })

  const colsClass =
    membersPerPage === 4
      ? "grid-cols-4"
      : membersPerPage === 3
        ? "grid-cols-3"
        : "grid-cols-2"

  return (
    <div>
      {/* Carousel track */}
      <div
        className="relative overflow-hidden touch-pan-y"
        {...swipeHandlers}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentPage * 100}%)` }}
        >
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div
              key={pageIndex}
              className={`w-full flex-shrink-0 grid ${colsClass} gap-3 sm:gap-4`}
            >
              {TEAM_MEMBERS.slice(
                pageIndex * membersPerPage,
                (pageIndex + 1) * membersPerPage
              ).map((member, idx) => (
                <TeamMemberCard
                  key={idx}
                  member={member}
                  index={pageIndex * membersPerPage + idx}
                  showQuote={showQuote}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation: prev + "01 / 03" counter + next */}
      <div className="flex items-center justify-center gap-5 mt-8 bg-brand-navy rounded-4xl p-2">
        <button
          onClick={goToPrev}
          disabled={!canGoPrev}
          aria-label="Previous page"
          className="w-11 h-11 rounded-full flex items-center justify-center border border-brand-white/15 text-brand-white/60 hover:border-brand-coral hover:text-brand-coral disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
        </button>

        {/* Editorial page indicator */}
        <div className="flex items-baseline gap-2">
          <span className="text-2xl sm:text-3xl font-black text-brand-white tabular-nums tracking-tight leading-none">
            {String(currentPage + 1).padStart(2, "0")}
          </span>
          <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-brand-white/35">
            / {String(totalPages).padStart(2, "0")}
          </span>
        </div>

        <button
          onClick={goToNext}
          disabled={!canGoNext}
          aria-label="Next page"
          className="w-11 h-11 rounded-full flex items-center justify-center border border-brand-white/15 text-brand-white/60 hover:border-brand-coral hover:text-brand-coral disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200 cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
        </button>
      </div>
    </div>
  )
}