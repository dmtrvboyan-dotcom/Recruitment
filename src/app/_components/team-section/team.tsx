"use client"
import { useCallback } from "react"
import { RiCheckLine } from "react-icons/ri"
import { COMPANY_VALUES } from "@/lib/constants/team"
import { PhotoGallery } from "./photo-gallery"
import { TeamCarousel } from "./team-carousel"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button" // Import your Button component
import { scrollToSection } from "@/lib/utils/scroll" // Import your scroll utility
import Link from "next/link"


const STATS = [
  "15+ years IT Recruitment Experience",
  "Average time 2–10 days to present candidates",
]

export function MeetTheTeam() {
  // Use the same navigation logic as your Hero
  const handleNavigate = useCallback((href: string) => {
    scrollToSection(href, { highlightDuration: 0 })
  }, [])

  return (
    <section id="about" className="relative py-24 lg:py-3 overflow-hidden">
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-brand-blue/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-brand-coral mb-4">
            About us
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-brand-navy mb-8 capitalize">
            Nice to meet <span className="text-brand-coral"> you</span>
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-8">
            {STATS.map((stat) => (
              <div key={stat} className="flex items-center gap-2.5 px-4 py-2 bg-white rounded-full border border-brand-navy/5 shadow-sm">
                <RiCheckLine className="text-brand-coral" size={18} />
                <span className="text-xs font-semibold text-brand-navy/70 uppercase tracking-wider">{stat}</span>
              </div>
            ))}
          </div>
        </div>

        <PhotoGallery />

        <div className="pt-16 border-t border-brand-navy/5">
          <TeamCarousel />
        </div>

        {/* Updated Button Section */}
        <div className="flex flex-col items-center gap-4 max-w-5xl mx-auto mb-24 mt-20">
          <p className="text-sm text-brand-navy/50 leading-relaxed text-center max-w-sm mb-4">
            Get to know the people behind every placement — how we work, what we stand for, and why it matters.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/about" target="_blank">
              <Button
                className="w-full sm:w-auto bg-brand-coral hover:bg-brand-coral-hover text-white px-8 py-6 text-xs font-semibold tracking-widest uppercase cursor-pointer transition-colors duration-200 group rounded-3xl"
              >
                <span className="flex items-center gap-2.5">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </Link>

            <Link href="/candidates#client-testimonials" target="_blank">
              <Button
                className="w-full sm:w-auto bg-brand-white hover:bg-brand-navy hover:text-brand-white text-brand-navy px-8 py-6 text-xs border-2 border-brand-navy font-semibold tracking-widest uppercase cursor-pointer transition-colors duration-200 group rounded-3xl"
              >
                <span className="flex items-center gap-2.5">

                  Candidates Feedback
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>

            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}