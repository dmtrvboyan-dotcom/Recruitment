"use client"

import { useState, useEffect, useCallback } from "react"
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri"
import { TEAM_MEMBERS } from "@/lib/constants/team"
import { useSwipe } from "./useSwipe"
import { TeamMemberCard } from "./team-member-card"

function useMembersPerPage() {
  const [membersPerPage, setMembersPerPage] = useState(2)

  useEffect(() => {
    const update = () => setMembersPerPage(window.innerWidth >= 1024 ? 4 : 2)
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
  const [hasSwiped, setHasSwiped] = useState(false)
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
    onSwiped: () => setHasSwiped(true),
  })

  return (
    <div className="mt-8">
      <div className="relative overflow-hidden touch-pan-y" {...swipeHandlers}>
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentPage * 100}%)` }}
        >
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div
              key={pageIndex}
              className={`w-full flex-shrink-0 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4 ${!showQuote ? "lg:max-w-3xl lg:mx-auto" : ""
                }`}
            >
              {TEAM_MEMBERS.slice(
                pageIndex * membersPerPage,
                (pageIndex + 1) * membersPerPage
              ).map((member, idx) => (
                <TeamMemberCard key={idx} member={member} showQuote={showQuote} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 mt-8">
        <button
          onClick={goToPrev}
          disabled={!canGoPrev}
          className={`w-11 h-11 rounded-full flex items-center justify-center text-white bg-[#085689] transition-all duration-200 ${canGoPrev ? "hover:bg-[#78B6D9]" : "opacity-30 cursor-not-allowed"
            }`}
        >
          <RiArrowLeftSLine size={24} />
        </button>
        <button
          onClick={goToNext}
          disabled={!canGoNext}
          className={`w-11 h-11 rounded-full flex items-center justify-center text-white bg-[#085689] transition-all duration-200 ${canGoNext ? "hover:bg-[#78B6D9]" : "opacity-30 cursor-not-allowed"
            }`}
        >
          <RiArrowRightSLine size={24} />
        </button>
      </div>
    </div>
  )
}