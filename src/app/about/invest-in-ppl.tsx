"use client"

import { memo, useRef, useState, useEffect } from "react"
import {
  BookOpen,
  Users,
  MessageSquare,
  Clock,
  PlayCircle,
  Mic,
  BarChart2,
  RefreshCw,
  Share2,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { TeamCarousel } from "../_components/team-section/team-carousel"
import { AppButton } from "@/components/ui/app-button"

interface TrainingItem {
  id: number
  icon: LucideIcon
  heading: string
  body: string
}

const TRAINING_ITEMS: TrainingItem[] = [
  {
    id: 1,
    icon: BookOpen,
    heading: "Technical Training",
    body: "Ongoing, hands-on technical training to keep our team sharp and up to date.",
  },
  {
    id: 2,
    icon: Users,
    heading: "Soft Skills Training",
    body: "Communication, leadership, negotiation and more - skills that make a difference.",
  },
  {
    id: 3,
    icon: MessageSquare,
    heading: "Candidate Knowledge Exchange",
    body: "We share insights, market trends and feedback to help candidates grow.",
  },
  {
    id: 4,
    icon: Clock,
    heading: "12 Months Shadowing on the Job",
    body: "New colleagues learn by working alongside experienced recruiters for a full year.",
  },
  {
    id: 5,
    icon: PlayCircle,
    heading: "Technical Videos & Learning Program",
    body: "Curated technical content and a structured program every colleague goes through.",
  },
  {
    id: 6,
    icon: Mic,
    heading: "12 Months Interview Shadowing",
    body: "We shadow and learn how to run great interviews - for a full year.",
  },
  {
    id: 7,
    icon: BarChart2,
    heading: "High Standards We Live By",
    body: "Clear company rules and standards that guide how we work and communicate.",
  },
  {
    id: 8,
    icon: RefreshCw,
    heading: "Feedback & Coaching",
    body: "Regular 1:1s, feedback loops and coaching to help everyone improve continuously.",
  },
  {
    id: 9,
    icon: Share2,
    heading: "Knowledge Sharing Culture",
    body: "We document, share and learn from each other - every day.",
  },
]

const TrainingCard = memo(function TrainingCard({
  item,
  index,
}: {
  item: TrainingItem
  index: number
}) {
  const Icon = item.icon
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="group relative flex flex-col gap-4 p-6 xl:p-7 bg-white border border-brand-navy/8 rounded-2xl
        hover:border-brand-coral/30 hover:shadow-[0_0_0_1px_theme(colors.brand.coral/15),0_8px_32px_-8px_theme(colors.brand.coral/12)]
        transition-all duration-500 cursor-default overflow-hidden"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease ${index * 60}ms, transform 0.5s ease ${index * 60}ms, box-shadow 0.3s ease, border-color 0.3s ease`,
      }}
    >
      <div className="absolute top-0 right-0 w-16 h-16 bg-brand-coral/[0.04] rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="flex items-start justify-between">
        <div className="w-10 h-10 rounded-xl bg-brand-coral/10 flex items-center justify-center shrink-0
          group-hover:bg-brand-coral/15 transition-colors duration-300">
          <Icon className="w-5 h-5 text-brand-coral" strokeWidth={1.6} />
        </div>
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-navy/20 mt-1">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div>
        <h3 className="text-sm font-bold uppercase tracking-tight text-brand-navy leading-snug mb-2">
          {item.heading}
        </h3>
        <p className="text-sm text-brand-navy/50 leading-relaxed">
          {item.body}
        </p>
      </div>
    </div>
  )
})

export const InvestInPeople = memo(function InvestInPeople() {
  const [titleVisible, setTitleVisible] = useState(false)
  const titleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = titleRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTitleVisible(true); observer.disconnect() } },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative w-full bg-white overflow-hidden">

      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "repeating-linear-gradient(135deg, #1b2235 0px, #1b2235 1px, transparent 1px, transparent 40px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-10 xl:px-16 py-20 lg:py-32">

        {/* Header */}
        <div
          ref={titleRef}
          className="grid lg:grid-cols-[1fr_auto] lg:items-end gap-10 mb-16 lg:mb-20"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div>
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-brand-coral block mb-3">
              Learn More About Us
            </span>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-none tracking-tight text-brand-navy">
              WE INVEST IN PEOPLE,
              <br />
              <span className="text-brand-coral">SO WE DELIVER REAL VALUE.</span>
            </h2>
          </div>

          {/* Decorative stat pill */}
          <div className="hidden lg:flex flex-col items-end gap-1 pb-2 shrink-0">
            <div className="flex items-baseline gap-2">
              <span className="text-[3.5rem] font-bold leading-none text-brand-navy tracking-tight">9</span>
              <span className="text-sm font-bold uppercase tracking-widest text-brand-coral pb-2">pillars</span>
            </div>
            <span className="text-xs text-brand-navy/40 tracking-widest uppercase">of team development</span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-5 mb-16 lg:mb-20">
          {TRAINING_ITEMS.map((item, i) => (
            <TrainingCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* Bottom banner */}
        <div className="relative rounded-3xl bg-brand-navy overflow-hidden px-8 sm:px-12 py-10 sm:py-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="absolute top-0 left-0 w-64 h-64 bg-brand-coral/10 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-brand-coral/5 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />

          <div className="relative">
            <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white mb-2">
              People First. <span className="text-brand-coral">Always.</span>
            </h3>
            <p className="text-sm sm:text-base text-white/55 max-w-md leading-relaxed">
              We genuinely care about our team and candidates. When people grow, everyone wins.
            </p>
          </div>

          <div className="relative hidden sm:grid grid-cols-5 gap-2 shrink-0 opacity-20">
            {Array.from({ length: 25 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-brand-coral" />
            ))}
          </div>
        </div>



        {/* Team carousel */}
        <div className="mt-15 max-w-3xl mx-auto">
          <TeamCarousel showQuote={false} />
        </div>


        <div className="flex flex-col sm:flex-row items-center justify-center
            gap-3 sm:gap-4 w-full sm:w-auto animate-fade-in-up delay-300 mt-12"
        >          <AppButton href="/candidates" icon="arrow" className="sm:w-auto">
            Looking for a job? Start here
          </AppButton>
          <AppButton href="/candidates#client-testimonials" variant="navy" icon="arrow" className="sm:w-auto">
            See what our clients say
          </AppButton>
        </div>

      </div>
    </section>
  )
})