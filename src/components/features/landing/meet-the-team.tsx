"use client"

import React, { memo, useState, useRef, useCallback, useEffect } from "react"
import Image from "next/image"
import { RiArrowLeftSLine, RiArrowRightSLine, RiLinkedinBoxFill, RiCheckLine } from "react-icons/ri"
import { TbPointFilled } from "react-icons/tb"
import { TEAM_MEMBERS, COMPANY_VALUES, type TeamMember } from "@/lib/constants/team"

const GALLERY_PHOTOS = [
  { src: "/uploaded/team.jpg", alt: "Team photo 1" },
  { src: "/uploaded/team1.png", alt: "Team photo 2" },
  { src: "/uploaded/team2.jpg", alt: "Team photo 3" },
  { src: "/uploaded/team3.jpg", alt: "Team photo 4" },
  { src: "/uploaded/team4.jpg", alt: "Team photo 5" },
  { src: "/uploaded/team5.jpg", alt: "Team photo 6" },
]

const THUMBS_PER_PAGE = 3

// ─── Sub-components ────────────────────────────────────────────────────────

const ValueItem = memo(function ValueItem({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="text-[#085689] mt-1">
        <TbPointFilled size={32} />
      </div>
      <div>
        <h3 className="font-semibold sm:text-xl text-md mb-1">{title}</h3>
        <p className="text-gray-600 sm: text-md text-sm">{description}</p>
      </div>
    </div>
  )
})

const TeamMemberCard = memo(function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="group flex flex-col items-center">
      <div className="relative w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] lg:w-[150px] lg:h-[150px]">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover border-4 border-[#085689] rounded-full transition-all duration-500 group-hover:border-[#78B6D9]"
        />
      </div>
      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#085689] hover:text-[#78B6D9] transition-colors duration-200 mt-3"
        >
          <RiLinkedinBoxFill size={28} />
        </a>
      )}
      <div className="text-center mt-2 px-2">
        <p className="font-semibold text-sm sm:text-base text-gray-900">{member.name}</p>
        <p className="text-gray-600 text-xs sm:text-sm italic mt-1 line-clamp-3">
          &quot;{member.quote}&quot;
        </p>
      </div>
    </div>
  )
})

// ─── Photo Gallery ─────────────────────────────────────────────────────────

function PhotoGallery() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [thumbPage, setThumbPage] = useState(0)
  const [hasSwiped, setHasSwiped] = useState(false)
  
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)
  const minSwipeDistance = 50

  const totalPages = Math.ceil(GALLERY_PHOTOS.length / THUMBS_PER_PAGE)
  const visibleThumbs = GALLERY_PHOTOS.slice(
    thumbPage * THUMBS_PER_PAGE,
    thumbPage * THUMBS_PER_PAGE + THUMBS_PER_PAGE,
  )

  const goToPrevImage = useCallback(() => {
    setActiveIndex((prev) => {
      const newIndex = prev > 0 ? prev - 1 : GALLERY_PHOTOS.length - 1
      setThumbPage(Math.floor(newIndex / THUMBS_PER_PAGE))
      return newIndex
    })
  }, [])

  const goToNextImage = useCallback(() => {
    setActiveIndex((prev) => {
      const newIndex = prev < GALLERY_PHOTOS.length - 1 ? prev + 1 : 0
      setThumbPage(Math.floor(newIndex / THUMBS_PER_PAGE))
      return newIndex
    })
  }, [])

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchEndX.current = null
    touchStartX.current = e.targetTouches[0].clientX
  }, [])

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }, [])

  const onTouchEnd = useCallback(() => {
    if (!touchStartX.current || !touchEndX.current) return
    
    const distance = touchStartX.current - touchEndX.current
    if (distance > minSwipeDistance) {
      goToNextImage()
      setHasSwiped(true)
    } else if (distance < -minSwipeDistance) {
      goToPrevImage()
      setHasSwiped(true)
    }

    touchStartX.current = null
    touchEndX.current = null
  }, [goToNextImage, goToPrevImage])

  return (
    <div className="relative mb-8">
      <div 
        className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing touch-pan-y"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
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
          className={`absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm md:hidden transition-opacity duration-500 ${hasSwiped ? 'opacity-0' : 'opacity-100 animate-pulse'}`}
        >
          Swipe to browse
        </div>
      </div>

      <div className="px-2 py-4 flex items-center justify-center gap-2 max-w-[320px] mx-auto">
        <button
          onClick={() => setThumbPage((p) => Math.max(0, p - 1))}
          disabled={thumbPage === 0}
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white bg-[#085689] transition-opacity duration-200 ${thumbPage === 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-[#78B6D9]"}`}
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
                className={`relative w-24 h-16 shrink-0 rounded-xl overflow-hidden border-2 transition-all duration-200 ${isActive ? "border-[#78B6D9] scale-105 shadow-lg" : "border-white/20 hover:border-white/60"}`}
              >
                <Image src={photo.src} alt={photo.alt} fill className="object-cover" sizes="96px" />
              </button>
            )
          })}
        </div>

        <button
          onClick={() => setThumbPage((p) => Math.min(totalPages - 1, p + 1))}
          disabled={thumbPage >= totalPages - 1}
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white bg-[#085689] transition-opacity duration-200 ${thumbPage >= totalPages - 1 ? "opacity-30 cursor-not-allowed" : "hover:bg-[#78B6D9]"}`}
        >
          <RiArrowRightSLine size={22} />
        </button>
      </div>
    </div>
  )
}

// ─── Team Carousel ─────────────────────────────────────────────────────────

function TeamCarousel() {
  const [currentPage, setCurrentPage] = useState(0)
  const [hasSwiped, setHasSwiped] = useState(false)
  const [membersPerPage, setMembersPerPage] = useState(2)
  
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)
  const minSwipeDistance = 50

  // Update members per page based on screen size
  useEffect(() => {
    const updateMembersPerPage = () => {
      setMembersPerPage(window.innerWidth >= 1024 ? 4 : 2)
    }
    updateMembersPerPage()
    window.addEventListener('resize', updateMembersPerPage)
    return () => window.removeEventListener('resize', updateMembersPerPage)
  }, [])

  const totalPages = Math.ceil(TEAM_MEMBERS.length / membersPerPage)
  
  const canGoPrev = currentPage > 0
  const canGoNext = currentPage < totalPages - 1

  const goToPrev = useCallback(() => {
    if (canGoPrev) setCurrentPage((p) => p - 1)
  }, [canGoPrev])

  const goToNext = useCallback(() => {
    if (canGoNext) setCurrentPage((p) => p + 1)
  }, [canGoNext])

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchEndX.current = null
    touchStartX.current = e.targetTouches[0].clientX
  }, [])

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }, [])

  const onTouchEnd = useCallback(() => {
    if (!touchStartX.current || !touchEndX.current) return
    
    const distance = touchStartX.current - touchEndX.current
    if (distance > minSwipeDistance && canGoNext) {
      goToNext()
      setHasSwiped(true)
    } else if (distance < -minSwipeDistance && canGoPrev) {
      goToPrev()
      setHasSwiped(true)
    }

    touchStartX.current = null
    touchEndX.current = null
  }, [canGoNext, canGoPrev, goToNext, goToPrev])

  return (
    <div className="mt-8">
      <div 
        className="relative overflow-hidden touch-pan-y"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentPage * 100}%)` }}
        >
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div 
              key={pageIndex} 
              className="w-full flex-shrink-0 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4"
            >
              {TEAM_MEMBERS.slice(pageIndex * membersPerPage, (pageIndex + 1) * membersPerPage).map((member, idx) => (
                <TeamMemberCard key={idx} member={member} />
              ))}
            </div>
          ))}
        </div>
        
      </div>

      <div className="flex items-center justify-center gap-3 mt-8">
        <button
          onClick={goToPrev}
          disabled={!canGoPrev}
          className={`w-11 h-11 rounded-full flex items-center justify-center text-white bg-[#085689] transition-all duration-200 ${canGoPrev ? "hover:bg-[#78B6D9]" : "opacity-30 cursor-not-allowed"}`}
        >
          <RiArrowLeftSLine size={24} />
        </button>
        <button
          onClick={goToNext}
          disabled={!canGoNext}
          className={`w-11 h-11 rounded-full flex items-center justify-center text-white bg-[#085689] transition-all duration-200 ${canGoNext ? "hover:bg-[#78B6D9]" : "opacity-30 cursor-not-allowed"}`}
        >
          <RiArrowRightSLine size={24} />
        </button>
      </div>
    </div>
  )
}

// ─── Main Section ──────────────────────────────────────────────────────────

export function MeetTheTeam() {
  return (
    <section id="about" className="py-14 sm:py-20 lg:py-28 lg:pb-[120px] md:pb-[50px] bg-linear-to-b from-[#f9f9f9] to-[#085689]/12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-md font-medium text-[#085689] uppercase tracking-wider mb-4">
            Meet the Team
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-6">
            Nice to meet you
          </h2>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6 text-xs sm:text-sm text-gray-600 font-medium">
            <div className="flex items-center gap-2">
              <RiCheckLine className="text-[#085689]" size={16} />
              <span>15+ years IT Recruitment Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <RiCheckLine className="text-[#085689]" size={16} />
              <span>Average time 2–10 days to present candidates</span>
            </div>
          </div>
        </div>

        <PhotoGallery />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-8 lg:gap-y-10 max-w-4xl mx-auto mb-12">
          <div className="space-y-6">
            {COMPANY_VALUES.slice(0, 2).map((value, index) => (
              <ValueItem key={index} title={value.title} description={value.description} />
            ))}
          </div>
          <div className="space-y-6">
            {COMPANY_VALUES.slice(2).map((value, index) => (
              <ValueItem key={index} title={value.title} description={value.description} />
            ))}
          </div>
        </div>

        <TeamCarousel />
      </div>
    </section>
  )
}
