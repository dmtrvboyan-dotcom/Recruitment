"use client"

import { memo, useRef, useState, useEffect } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Upload,
  Globe,
  Briefcase,
  CheckCircle,
  X,
  Check,
  Search,
  Users,
  Star,
  MessageSquare,
  Shield,
  TrendingUp,
  Clock,
  Zap,
  MapPin,
  ChevronDown,
  Plus
} from "lucide-react"
import { Button } from "@/components/ui/button"

import {
  candidatesMetadata,
  candidatesJsonLd,
  heroData,
  howItWorksData,
  yourGoalsData,
  whatYouGetData,
  whyChooseUsData,
  opportunitiesData,
  testimonialData,
  faqData,
  ctaData,
} from "./data"
import { TeamCarousel } from "../_components/team-section/team-carousel"
import { PeopleTestimonialsSection } from "./testimonials"
import { SectionNav } from "@/components/navigation/section-nav"
import { BackToTop } from "@/components/navigation/back-to-top"


function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}



const HeroSection = memo(function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-end overflow-hidden bg-brand-navy">
 
      {/* Large watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[25vw] font-black uppercase text-brand-white/[0.03] leading-none tracking-tighter whitespace-nowrap">
          CAREERS
        </span>
      </div>

      {/* Coral glow top-right */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-brand-coral/10 blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />

      {/* Bottom wave transition */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
          <path fill="#f9f9fb" d="M0,100 L0,60 Q400,10 720,45 Q1040,80 1440,30 L1440,100 Z" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-10 xl:px-16 pt-40 pb-32 lg:pb-44 w-full">

        {/* Eyebrow */}
        <span className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-brand-coral block mb-5">
          {heroData.tagline}
        </span>

        {/* Headline */}
        <h1 className="text-[clamp(3rem,10vw,8.5rem)] font-black leading-none tracking-tight text-brand-white mb-8 max-w-5xl">
          {heroData.title}
        </h1>

        {/* Sub + CTA row */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-16">
          <p className="text-base sm:text-lg text-brand-white/55 max-w-lg leading-relaxed">
            {heroData.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Button
              asChild
              className="group bg-brand-coral hover:bg-brand-coral-hover text-brand-white px-8 py-5 sm:py-6 text-xs font-semibold tracking-widest uppercase rounded-3xl transition-colors duration-200"
            >
              <Link href="/contacts">
                <span className="flex items-center gap-2.5">
                  {heroData.primaryCta.text}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border border-white/20 bg-transparent text-brand-white hover:bg-brand-white/8 px-8 py-5 sm:py-6 text-xs font-semibold tracking-widest uppercase rounded-3xl transition-colors duration-200"
            >
              <Link href={"/job-listings"}>{heroData.secondaryCta.text}</Link>
            </Button>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-16 flex flex-wrap gap-10 sm:gap-16">
          {[
            { value: "4–8", unit: "weeks", label: "avg. time to offer" },
            { value: "100%", unit: "", label: "free for candidates" },
            { value: "1", unit: "person", label: "dedicated to your search" },
          ].map((s) => (
            <div key={s.label}>
              <div className="flex items-baseline gap-1.5">
                <span className="text-4xl font-black text-brand-white leading-none">{s.value}</span>
                {s.unit && <span className="text-xs font-bold tracking-widest uppercase text-brand-coral">{s.unit}</span>}
              </div>
              <p className="text-xs text-brand-white/35 uppercase tracking-widest mt-1">{s.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
})

/* ─────────────────────────── HOW IT WORKS ─────────────────────────── */

const HowItWorksSection = memo(function HowItWorksSection() {
  const { ref: headerRef, visible: headerVisible } = useInView()

  return (
    <section id="how-it-works" className="relative w-full bg-brand-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 xl:px-16 py-20 lg:py-32">

        {/* Header */}
        <div
          ref={headerRef}
          className="mb-16 lg:mb-24"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-brand-coral block mb-3 text-center">
            {howItWorksData.tagline}
          </span>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-none tracking-tight text-brand-navy uppercase text-center">
            Your Journey to the
            <span className="text-brand-coral"> Right Role.</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-brand-navy/8 rounded-3xl overflow-hidden">
          {howItWorksData.items.map((step, i) => {
            const Icon = step.icon
            const { ref, visible } = useInView()
            return (
              <div
                key={step.number}
                ref={ref}
                className="relative bg-brand-white p-8 sm:p-10 xl:p-12 flex flex-col gap-6"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.6s ease ${i * 120}ms, transform 0.6s ease ${i * 120}ms`,
                }}
              >
                <div className="flex items-start justify-between">
                  <span className="text-[4rem] font-black text-brand-navy/[0.07] leading-none tracking-tighter">
                    {step.number}
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-brand-coral/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-brand-coral" strokeWidth={1.6} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-black uppercase tracking-tight text-brand-navy mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-brand-navy/55 leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <p className="text-xs font-semibold tracking-widest uppercase text-brand-coral italic mt-10">
                    {step.example}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
})


// HERE
{/* ─────────────────────────── MEET THE TEAM ─────────────────────────── */ }

const MeetTheTeamSection = memo(function MeetTheTeamSection() {
  const { ref: headerRef, visible: headerVisible } = useInView()
  const { ref: contentRef, visible: contentVisible } = useInView()

  return (
    <section className="relative w-full bg-brand-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 xl:px-16 py-20 lg:py-32">

        <div
          ref={headerRef}
          className="mb-16 lg:mb-20"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-brand-coral block mb-3 text-center">
            Our Team
          </span>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-none tracking-tight text-brand-navy uppercase text-center">
            Meet the People Behind
            <span className="text-brand-coral"> Your Search.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-brand-navy/50 leading-relaxed text-center max-w-2xl mx-auto">
            You'll work with recruiters who actually take the time to understand what you want - not just what fits a keyword search.
          </p>
        </div>

        {/* Full-width image */}
        <div
          ref={contentRef}
          style={{
            opacity: contentVisible ? 1 : 0,
            transform: contentVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div className="relative rounded-3xl overflow-hidden aspect-[16/9]">
            <img
              src="/uploaded/team.jpg"
              alt="The recruiting team"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 via-transparent to-transparent" />
          </div>


          <div className="max-w-3xl mx-auto mt-8">
            <TeamCarousel showQuote={false} />
          </div>
        </div>

      </div>
    </section>
  )
})

/* ─────────────────────────── YOUR GOALS ─────────────────────────── */

const YourGoalsSection = memo(function YourGoalsSection() {
  const { ref: headerRef, visible: headerVisible } = useInView()

  return (
    <section className="relative w-full bg-brand-navy overflow-hidden">
     
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-coral/8 blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-10 xl:px-16 py-20 lg:py-32">

        <div
          ref={headerRef}
          className="mb-16 lg:mb-20"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-brand-coral block mb-3 text-center">
            {yourGoalsData.tagline}
          </span>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-none tracking-tight text-brand-white uppercase text-center">
            {yourGoalsData.title}
            <br />
            <span className="text-brand-coral">Matters to You</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xl:gap-5">
          {yourGoalsData.items.map((goal, i) => {
            const Icon = goal.icon
            const { ref, visible } = useInView()
            return (
              <div
                key={goal.title}
                ref={ref}
                className="group relative flex flex-col gap-5 p-8 sm:p-10 rounded-2xl border border-white/8 hover:border-brand-coral/30
                  hover:bg-brand-white/[0.03] transition-all duration-400 cursor-default overflow-hidden"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms`,
                }}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-brand-coral/[0.05] rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-12 h-12 rounded-xl bg-brand-coral/15 flex items-center justify-center shrink-0 group-hover:bg-brand-coral/25 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-brand-coral" strokeWidth={1.6} />
                </div>
                <div>
                  <h3 className="text-base font-black uppercase tracking-tight text-brand-white mb-2 ">
                    {goal.title}
                  </h3>
                  <p className="text-sm text-brand-white/45 leading-relaxed">
                    {goal.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
})

/* ─────────────────────────── WHAT YOU GET ─────────────────────────── */

const WhatYouGetSection = memo(function WhatYouGetSection() {
  const { ref: headerRef, visible: headerVisible } = useInView()

  return (
    <section className="relative w-full bg-brand-white overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #1A1A2E 0px, #1A1A2E 1px, transparent 1px, transparent 40px)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-10 xl:px-16 py-20 lg:py-32">

        <div
          ref={headerRef}
          className="grid lg:grid-cols-[1fr_auto] lg:items-end gap-10 mb-16 lg:mb-20"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div>
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-brand-coral block mb-3">
              {whatYouGetData.tagline}
            </span>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-none tracking-tight text-brand-navy uppercase">
              {whatYouGetData.title}
              <br />
              <span className="text-brand-coral">ADVANTAGE.</span>
            </h2>
          </div>
          <div className="hidden lg:flex flex-col items-end gap-1 pb-2 shrink-0">
            <div className="flex items-baseline gap-2">
              <span className="text-[3.5rem] font-black leading-none text-brand-navy tracking-tight">
                {whatYouGetData.items.length}
              </span>
              <span className="text-sm font-bold uppercase tracking-widest text-brand-coral pb-2">services</span>
            </div>
            <span className="text-xs text-brand-navy/40 tracking-widest uppercase">included, zero cost</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-5">
          {whatYouGetData.items.map((item, i) => {
            const Icon = item.icon
            const { ref, visible } = useInView()
            return (
              <div
                key={item.title}
                ref={ref}
                className="group flex flex-col gap-5 p-7 xl:p-8 bg-brand-white border border-brand-navy/8 rounded-2xl
                  hover:border-brand-coral/30 hover:shadow-[0_0_0_1px_rgba(114,145,199,0.15),0_8px_32px_-8px_rgba(114,145,199,0.12)]
                  transition-all duration-500 cursor-default"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms`,
                }}
              >
                <div className="w-11 h-11 rounded-xl bg-brand-coral/10 flex items-center justify-center shrink-0 group-hover:bg-brand-coral/20 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-brand-coral" strokeWidth={1.6} />
                </div>
                <div>
                  <h3 className="text-sm font-black uppercase tracking-tight text-brand-navy mb-2">{item.title}</h3>
                  <p className="text-sm text-brand-navy/50 leading-relaxed">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
})


const OpportunitiesSection = memo(function OpportunitiesSection() {
  const { ref: leftRef, visible: leftVisible } = useInView()
  const { ref: rightRef, visible: rightVisible } = useInView()
  const { ref: headerRef, visible: headerVisible } = useInView()

  return (
    <section className="relative w-full bg-brand-white overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <span className="text-[18vw] font-black uppercase tracking-tighter text-brand-navy/[0.025] whitespace-nowrap leading-none">
          ROLES
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-10 xl:px-16 py-20 lg:py-32">

        <div
          ref={headerRef}
          className="text-center mb-16 lg:mb-20"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-brand-coral block mb-3">
            {opportunitiesData.tagline}
          </span>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-none tracking-tight text-brand-navy">
            WHERE WE
            <br />
            <span className="text-brand-coral">PLACE PEOPLE.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 xl:gap-8">

          {/* Industries */}
          <div
            ref={leftRef}
            className="relative rounded-3xl bg-brand-navy p-8 sm:p-10 overflow-hidden"
            style={{
              opacity: leftVisible ? 1 : 0,
              transform: leftVisible ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-brand-coral/15 rounded-full pointer-events-none blur-2xl" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-full bg-brand-coral flex items-center justify-center">
                  <Globe className="w-4 h-4 text-brand-white" strokeWidth={2} />
                </div>
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-brand-coral">Industries</span>
              </div>
              <ul className="space-y-0">
                {opportunitiesData.industries.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-center gap-4 py-4 border-b border-white/8 last:border-b-0"
                    style={{
                      opacity: leftVisible ? 1 : 0,
                      transform: leftVisible ? "translateX(0)" : "translateX(-16px)",
                      transition: `opacity 0.5s ease ${200 + i * 70}ms, transform 0.5s ease ${200 + i * 70}ms`,
                    }}
                  >
                    <div className="w-6 h-6 rounded-full bg-brand-coral/20 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-brand-coral" strokeWidth={2.5} />
                    </div>
                    <span className="text-sm text-brand-white/80 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Roles */}
          <div
            ref={rightRef}
            className="relative rounded-3xl bg-brand-white border border-brand-navy/8 p-8 sm:p-10 overflow-hidden"
            style={{
              opacity: rightVisible ? 1 : 0,
              transform: rightVisible ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 0.7s ease 150ms, transform 0.7s ease 150ms",
            }}
          >
            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-full bg-brand-navy/10 flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-brand-navy/50" strokeWidth={2} />
                </div>
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-brand-navy/40">Roles</span>
              </div>
              <ul className="space-y-0">
                {opportunitiesData.roles.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-center gap-4 py-4 border-b border-brand-navy/8 last:border-b-0 group"
                    style={{
                      opacity: rightVisible ? 1 : 0,
                      transform: rightVisible ? "translateX(0)" : "translateX(16px)",
                      transition: `opacity 0.5s ease ${200 + i * 70}ms, transform 0.5s ease ${200 + i * 70}ms`,
                    }}
                  >
                    <div className="w-6 h-6 rounded-full bg-brand-navy/8 flex items-center justify-center shrink-0 group-hover:bg-brand-coral/15 transition-colors duration-300">
                      <CheckCircle className="w-3.5 h-3.5 text-brand-navy/40 group-hover:text-brand-coral transition-colors duration-300" strokeWidth={2} />
                    </div>
                    <span className="text-sm text-brand-navy font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom pill */}


      </div>
    </section>
  )
});

<PeopleTestimonialsSection />

/* ─────────────────────────── TESTIMONIAL ─────────────────────────── */

const TestimonialSection = memo(function TestimonialSection() {
  const { ref, visible } = useInView(0.2)

  return (
    <section className="relative w-full bg-brand-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-5 sm:px-10 xl:px-16 py-20 lg:py-32">
        <div
          ref={ref}
          className="relative rounded-3xl bg-brand-navy overflow-hidden px-8 sm:px-14 py-12 sm:py-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-brand-coral/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-brand-coral/5 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />

          {/* Decorative quote mark */}
          <div className="relative text-[8rem] font-black text-brand-coral/15 leading-none mb-4 -mt-4">&ldquo;</div>

          <blockquote
            className="relative text-xl sm:text-2xl lg:text-3xl font-bold text-brand-white leading-snug tracking-tight max-w-3xl -mt-8"
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 0.8s ease 300ms",
            }}
          >
            {testimonialData.quote}
          </blockquote>

          <p
            className="mt-8 text-xs font-semibold tracking-[0.2em] uppercase text-brand-coral"
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 0.8s ease 500ms",
            }}
          >
            {testimonialData.author}
          </p>

          {/* Decorative dot grid */}
          <div className="absolute top-8 right-8 hidden sm:grid grid-cols-5 gap-2 opacity-15">
            {Array.from({ length: 25 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-brand-coral" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
})

/* ─────────────────────────── FAQ ─────────────────────────── */

const FAQSection = memo(function FAQSection() {
  const { ref: headerRef, visible: headerVisible } = useInView()
  const { ref: listRef, visible: listVisible } = useInView()
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="relative w-full bg-[#f9f9fb] overflow-hidden">
      <div className="max-w-4xl mx-auto px-5 sm:px-10 xl:px-16 py-20 lg:py-32">

        {/* Header - untouched */}
        <div
          ref={headerRef}
          className="mb-14"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-brand-coral block mb-3 text-center">
            {faqData.tagline}
          </span>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-none tracking-tight text-brand-navy text-center uppercase">
            {faqData.title}
            <br />
            <span className="text-brand-coral">QUESTIONS.</span>
          </h2>
        </div>

        {/* Q&A list */}
        <div ref={listRef} className="space-y-3">
          {faqData.items.map((faq, i) => {
            const isOpen = open === i
            const number = String(i + 1).padStart(2, "0")

            return (
              <div
                key={i}
                className="rounded-2xl bg-brand-white overflow-hidden"
                style={{
                  opacity: listVisible ? 1 : 0,
                  transform: listVisible ? "translateY(0)" : "translateY(16px)",
                  transition: `opacity 0.5s ease ${150 + i * 80}ms, transform 0.5s ease ${150 + i * 80}ms`,
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="group w-full flex items-center justify-between gap-6 px-7 py-5 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-4 sm:gap-6 min-w-0">
                    {/* Number + Q label */}
                    <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-brand-coral tabular-nums shrink-0">
                      {number}. Q
                    </span>

                    {/* Question */}
                    <span
                      className={`text-sm sm:text-base font-black uppercase tracking-[-0.015em] leading-snug transition-colors duration-300 ${
                        isOpen
                          ? "text-brand-coral"
                          : "text-brand-navy group-hover:text-brand-coral"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </span>

                  {/* Plus / × button */}
                  <span
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-brand-coral rotate-45"
                        : "bg-brand-navy/5 group-hover:bg-brand-coral/15"
                    }`}
                  >
                    <Plus
                      className={`w-4 h-4 transition-colors duration-300 ${
                        isOpen
                          ? "text-white"
                          : "text-brand-navy/60 group-hover:text-brand-coral"
                      }`}
                      strokeWidth={2}
                    />
                  </span>
                </button>

                {/* Answer - grid-row expand */}
                <div
                  className="grid"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    opacity: isOpen ? 1 : 0,
                    transition: "grid-template-rows 400ms ease, opacity 400ms ease",
                  }}
                >
                  <div className="overflow-hidden">
                    <div className="px-7 pb-6 -mt-1 flex gap-4 sm:gap-5">
                      <div className="w-[2px] bg-brand-coral shrink-0 rounded-full" />
                      <p className="text-sm sm:text-base text-brand-navy/55 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
})

/* ─────────────────────────── CTA ─────────────────────────── */

const CTASection = memo(function CTASection() {
  return (
    <section className="relative w-full bg-brand-navy overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(ellipse_at_top_left,var(--tw-gradient-stops))] from-brand-coral via-transparent to-transparent pointer-events-none" />
    
      <div className="relative max-w-5xl mx-auto px-5 sm:px-10 xl:px-16 py-16 sm:py-20 lg:py-28 flex flex-col items-center gap-8 lg:gap-10">
        <div className="text-center">
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-brand-coral block mb-4">
            Ready to Start?
          </span>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-none tracking-tight text-brand-white">
            LET'S FIND
            <br />
            <span className="text-brand-coral">YOUR NEXT ROLE.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-4 items-center">
          <p className="text-sm text-brand-white/50 max-w-xs leading-relaxed sm:text-base text-center">
            A real person will get back to you within one business day. No templates, no automated replies.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              asChild
              className="group bg-brand-coral hover:bg-brand-coral-hover text-brand-white px-8 py-5 sm:py-6 text-xs font-semibold tracking-widest uppercase rounded-3xl transition-colors duration-200"
            >
              <Link href={ctaData.primaryCta.href}>
                <span className="flex items-center gap-2.5">
                  <Upload className="w-4 h-4" />
                  {ctaData.primaryCta.text}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border border-white/20 bg-transparent text-brand-white hover:bg-brand-white/8 px-8 py-5 sm:py-6 text-xs font-semibold tracking-widest uppercase rounded-3xl transition-colors duration-200"
            >
              <Link href={ctaData.secondaryCta.href}>{ctaData.secondaryCta.text}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
})


export default function CandidatesPage() {

  const sections = [
    { id: "hero", label: "Overview" },
    { id: "how", label: "How it Works for You" },
    { id: "team", label: "See Who You Talk With" },
    { id: "goals", label: "What we Focus on" },
    { id: "why", label: "Why Should You Care?" },
    { id: "opportunities", label: "What We Can Offer" },
    { id: "testimonials", label: "What Others are Saying" },
    { id: "faq", label: "Have any Questions?" },
  ];

  return (
    <main className="relative min-h-screen overflow-x-hidden">

      <section id="hero">
        <HeroSection />
      </section>

      <section id="how">
        <HowItWorksSection />
      </section>

      <section id="team">
        <MeetTheTeamSection />
      </section>

      <section id="goals">
        <YourGoalsSection />
      </section>

      <section id="why">
        <WhatYouGetSection />
      </section>

      <section id="opportunities">
        <OpportunitiesSection />
      </section>

      <section id="testimonials">
        <PeopleTestimonialsSection />
      </section>

      <TestimonialSection />

      <section id="faq">
        <FAQSection />
      </section>

      <CTASection />


      <SectionNav sections={sections} headerOffset={80} />
      <BackToTop hideOnMobile />
    </main>
  )
}
