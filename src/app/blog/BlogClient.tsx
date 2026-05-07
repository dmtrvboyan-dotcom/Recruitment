"use client"

import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { ArrowRight, BookOpen, Building2, User, Cpu } from "lucide-react"
import { ScrollReveal } from "@/components/layout"
import { HERO_DATA, TABS, TAB_CHIPS, type TabKey } from "./data"
import type { Post } from "./lib/posts"

type Props = {
  posts: Post[]
  heroData: typeof HERO_DATA
  tabs: typeof TABS
  tabChips: typeof TAB_CHIPS
}

const TAB_ICONS: Record<TabKey, React.ElementType> = {
  ats: BookOpen,
  companies: Building2,
  candidates: User,
  it: Cpu,
}

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])
  return { ref, visible }
}

function PostCard({ post, index, parentVisible }: { post: Post; index: number; parentVisible: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col bg-brand-white border border-brand-navy/8 rounded-2xl overflow-hidden
        hover:border-brand-coral/30 hover:shadow-[0_0_0_1px_theme(colors.brand.coral/15),0_8px_32px_-8px_theme(colors.brand.coral/12)]
        transition-all duration-500 cursor-pointer"
      style={{
        opacity: parentVisible ? 1 : 0,
        transform: parentVisible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.55s ease ${index * 70}ms, transform 0.55s ease ${index * 70}ms, box-shadow 0.3s ease, border-color 0.3s ease`,
      }}
    >
      {/* Top accent bar */}
      <div className="h-1 w-full bg-brand-navy/5 group-hover:bg-brand-coral/40 transition-colors duration-500" />

      <div className="flex flex-col flex-1 p-6 xl:p-7">
        {/* Thumbnail placeholder */}
        <div className="w-full h-36 sm:h-40 rounded-xl bg-brand-navy/[0.04] group-hover:bg-brand-coral/[0.07] mb-5
          flex items-center justify-center transition-colors duration-500 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "repeating-linear-gradient(135deg, #1A1A2E 0px, #1A1A2E 1px, transparent 1px, transparent 28px)",
            }}
          />
          <div className="w-10 h-10 rounded-xl bg-brand-coral/10 group-hover:bg-brand-coral/20 flex items-center justify-center
            transition-colors duration-300 relative">
            <ArrowRight className="w-5 h-5 text-brand-coral group-hover:translate-x-0.5 transition-transform duration-300" strokeWidth={1.8} />
          </div>
        </div>

        {/* Meta */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-brand-coral">
            {post.category}
          </span>
          <span className="text-[10px] text-brand-navy/30 font-medium tracking-wider">
            {post.date}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-sm sm:text-base font-black uppercase tracking-tight text-brand-navy leading-snug mb-3
          group-hover:text-brand-teal transition-colors duration-300">
          {post.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-brand-navy/50 leading-relaxed flex-1">
          {post.description}
        </p>

        {/* Footer */}
        <div className="mt-5 pt-4 border-t border-brand-navy/8 flex items-center justify-end">
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-coral flex items-center gap-1.5
            group-hover:gap-2.5 transition-all duration-300">
            Read more
            <ArrowRight className="w-3 h-3" strokeWidth={2.5} />
          </span>
        </div>
      </div>
    </Link>
  )
}

export function BlogClient({ posts, heroData, tabs, tabChips }: Props) {
  const [activeTab, setActiveTab] = useState<TabKey>("ats")
  const [activeChip, setActiveChip] = useState("All")
  const [animKey, setAnimKey] = useState(0)

  const { ref: heroRef, visible: heroVisible } = useInView(0.1)
  const { ref: gridRef, visible: gridVisible } = useInView(0.05)

  const handleTabChange = (tab: TabKey) => {
    setActiveTab(tab)
    setActiveChip("All")
    setAnimKey((k) => k + 1)
  }

  const handleChipChange = (chip: string) => {
    setActiveChip(chip)
    setAnimKey((k) => k + 1)
  }

  const chips = tabChips[activeTab]

  const filteredPosts = posts.filter((post) => {
    const tabMatch = post.tab === activeTab
    const chipMatch = activeChip === "All" || post.category === activeChip
    return tabMatch && chipMatch
  })

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative w-full bg-brand-navy overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-32">
        {/* Background texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: "repeating-linear-gradient(135deg, #7291C7 0px, #7291C7 1px, transparent 1px, transparent 40px)",
          }}
        />
        {/* Glow blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-coral/10 rounded-full -translate-y-1/2 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-brand-teal/10 rounded-full translate-y-1/2 blur-3xl pointer-events-none" />

        <div
          ref={heroRef}
          className="relative max-w-6xl mx-auto px-5 sm:px-10 xl:px-16 text-center"
        >
          <span
            className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-brand-coral block mb-4"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            {heroData.tagline}
          </span>

          <h1
            className="text-[clamp(2.8rem,8vw,7rem)] font-black leading-none tracking-tight text-brand-white mb-6"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease 80ms, transform 0.7s ease 80ms",
            }}
          >
            {heroData.title.split(",")[0]},
            <br />
            <span className="text-brand-coral">{heroData.title.split(",")[1]?.trim()}</span>
          </h1>

          <p
            className="text-sm sm:text-base lg:text-lg text-brand-white/50 max-w-2xl mx-auto leading-relaxed"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.7s ease 160ms, transform 0.7s ease 160ms",
            }}
          >
            {heroData.description}
          </p>

          {/* Decorative stat pills */}
          <div
            className="hidden lg:flex items-center justify-center gap-6 mt-12"
            style={{
              opacity: heroVisible ? 1 : 0,
              transition: "opacity 0.7s ease 280ms",
            }}
          >
            {tabs.map((tab) => {
              const Icon = TAB_ICONS[tab.key]
              const count = posts.filter((p) => p.tab === tab.key).length
              return (
                <button
                  key={tab.key}
                  onClick={() => handleTabChange(tab.key)}
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full border text-xs font-semibold tracking-widest uppercase transition-all duration-300 ${
                    activeTab === tab.key
                      ? "bg-brand-coral text-white border-brand-coral"
                      : "border-brand-white/15 text-brand-white/40 hover:border-brand-coral/40 hover:text-brand-coral"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" strokeWidth={2} />
                  {tab.label}
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                    activeTab === tab.key ? "bg-white/20" : "bg-brand-white/10"
                  }`}>
                    {count}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── CONTENT ─── */}
      <ScrollReveal>
        <section className="relative w-full bg-brand-white overflow-hidden">
          {/* Background texture */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.022]"
            style={{
              backgroundImage: "repeating-linear-gradient(135deg, #1A1A2E 0px, #1A1A2E 1px, transparent 1px, transparent 40px)",
            }}
          />

          <div className="relative max-w-6xl mx-auto px-5 sm:px-10 xl:px-16 py-16 lg:py-24">

            {/* Mobile Tab Switcher */}
            <div className="lg:hidden grid grid-cols-2 gap-2 bg-brand-navy/[0.04] rounded-2xl p-2 mb-6">
              {tabs.map((tab) => {
                const Icon = TAB_ICONS[tab.key]
                return (
                  <button
                    key={tab.key}
                    onClick={() => handleTabChange(tab.key)}
                    className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                      activeTab === tab.key
                        ? "bg-brand-navy text-brand-white shadow-md"
                        : "text-brand-navy/40 hover:text-brand-navy hover:bg-brand-navy/5"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" strokeWidth={2} />
                    {tab.label}
                  </button>
                )
              })}
            </div>

            {/* Chip filters */}
            <div className="flex flex-wrap gap-2 mb-10 sm:mb-12">
              {chips.map((chip, i) => (
                <button
                  key={chip}
                  onClick={() => handleChipChange(chip)}
                  style={{
                    transitionDelay: `${i * 30}ms`,
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase border transition-all duration-300 ${
                    activeChip === chip
                      ? "bg-brand-navy text-brand-white border-brand-navy"
                      : "border-brand-navy/15 text-brand-navy/40 hover:border-brand-coral/40 hover:text-brand-coral"
                  }`}
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div ref={gridRef}>
              {filteredPosts.length === 0 ? (
                <div
                  className="relative rounded-3xl bg-brand-navy overflow-hidden px-8 sm:px-12 py-16 sm:py-20 text-center"
                  style={{
                    opacity: gridVisible ? 1 : 0,
                    transition: "opacity 0.6s ease",
                  }}
                >
                  <div className="absolute top-0 left-0 w-64 h-64 bg-brand-coral/10 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                  <p className="text-sm sm:text-base text-brand-white/40 font-medium relative">
                    No articles in this category yet.{" "}
                    <span className="text-brand-coral">Check back soon!</span>
                  </p>
                </div>
              ) : (
                <div key={animKey} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-5">
                  {filteredPosts.map((post, i) => (
                    <PostCard key={post.slug} post={post} index={i} parentVisible={gridVisible} />
                  ))}
                </div>
              )}
            </div>

          </div>
        </section>
      </ScrollReveal>
    </>
  )
}
