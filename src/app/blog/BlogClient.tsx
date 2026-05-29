"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { ArrowRight, BookOpen, Building2, User, Cpu, ChevronDown } from "lucide-react"
import { ScrollReveal } from "@/components/layout"
import { HERO_DATA, TABS, TAB_CHIPS, type TabKey } from "./data"
import { useSearchParams } from "next/navigation"
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
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setVisible(true)
      return
    }
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

function MobileTabDropdown({
  tabs,
  posts,
  activeTab,
  heroVisible,
  handleTabChange,
}: {
  tabs: typeof TABS
  posts: Post[]
  activeTab: TabKey
  heroVisible: boolean
  handleTabChange: (tab: TabKey) => void
}) {
  const [open, setOpen] = useState(false)
  const activeTabData = tabs.find((t) => t.key === activeTab)!
  const ActiveIcon = TAB_ICONS[activeTab]
  const activeCount = posts.filter((p) => p.tab === activeTab).length

  return (
    <div
      className="lg:hidden mt-10 w-full max-w-xs mx-auto relative"
      style={{ opacity: heroVisible ? 1 : 0, transition: "opacity 0.7s ease 280ms" }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-3 px-5 py-3.5 rounded-full border border-brand-coral bg-brand-coral text-white text-xs font-semibold tracking-widest uppercase cursor-pointer transition-all duration-300"
      >
        <span className="flex items-center gap-2.5">
          <ActiveIcon className="w-3.5 h-3.5" strokeWidth={2} />
          {activeTabData.label}
          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-white/20">{activeCount}</span>
        </span>
        <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} strokeWidth={2.5} />
      </button>

      <div className={`absolute top-full left-0 right-0 mt-2 rounded-2xl border border-brand-white/15 bg-brand-navy/95 backdrop-blur-sm overflow-hidden z-50 transition-all duration-300 origin-top ${open ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-90 pointer-events-none"}`}>
        {tabs.map((tab) => {
          const Icon = TAB_ICONS[tab.key]
          const count = posts.filter((p) => p.tab === tab.key).length
          const isActive = activeTab === tab.key
          return (
            <button
              key={tab.key}
              onClick={() => { handleTabChange(tab.key); setOpen(false) }}
              className={`w-full flex items-center gap-3 px-5 py-3.5 text-xs font-semibold tracking-widest uppercase transition-colors duration-200 cursor-pointer ${isActive ? "text-brand-coral bg-brand-coral/10" : "text-brand-white/50 hover:text-brand-coral hover:bg-brand-coral/5"}`}
            >
              <Icon className="w-3.5 h-3.5 shrink-0" strokeWidth={2} />
              {tab.label}
              <span className={`ml-auto text-[10px] font-bold px-1.5 py-0.5 rounded-full ${isActive ? "bg-brand-coral/20 text-brand-coral" : "bg-brand-white/10"}`}>{count}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ── Featured card (first post in list) ──────────────────────
function FeaturedCard({ post, visible }: { post: Post; visible: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative flex flex-col sm:grid sm:grid-cols-2 bg-brand-white rounded-[20px] overflow-hidden
        border border-brand-navy/8 transition-all duration-500
        hover:border-brand-coral/30 hover:shadow-[0_20px_60px_-16px_rgba(26,26,46,0.18)]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      {/* Image side */}
      <div className="relative h-52 sm:h-full min-h-[220px] overflow-hidden bg-brand-navy">
        {post.image ? (
          <>
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 to-transparent" />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand-navy-mid to-brand-navy">
            <div className="w-14 h-14 rounded-2xl bg-brand-coral/15 flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-brand-coral" strokeWidth={1.5} />
            </div>
          </div>
        )}
        {/* Featured label on image */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-brand-white/90 bg-brand-coral/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
            Featured
          </span>
        </div>
      </div>

      {/* Content side */}
      <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-coral">
            {post.category}
          </span>
          <span className="w-1 h-1 rounded-full bg-brand-navy/20" />
          <span className="text-[10px] text-brand-navy/35 font-medium tracking-wider">{post.date}</span>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold leading-tight tracking-tight text-brand-navy mb-3 group-hover:text-brand-teal transition-colors duration-300">
          {post.title}
        </h2>

        <p className="text-sm text-brand-navy/50 leading-relaxed mb-6 line-clamp-3">
          {post.description}
        </p>

        <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-brand-coral group-hover:gap-3 transition-all duration-300">
          Read article
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
        </div>
      </div>
    </Link>
  )
}

// ── Regular post card ────────────────────────────────────────
function PostCard({ post, index, parentVisible }: { post: Post; index: number; parentVisible: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative flex flex-col bg-brand-white rounded-[20px] overflow-hidden
        border border-brand-navy/8
        hover:border-brand-coral/30 hover:shadow-[0_16px_48px_-12px_rgba(26,26,46,0.15)]
        transition-all duration-500"
      style={{
        opacity: parentVisible ? 1 : 0,
        transform: parentVisible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.55s ease ${index * 70}ms, transform 0.55s ease ${index * 70}ms, box-shadow 0.3s ease, border-color 0.3s ease`,
      }}
    >
      {/* Sliding accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] z-10 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
        style={{ background: "linear-gradient(90deg, #7291C7 0%, #085689 100%)" }}
      />

      {/* Thumbnail */}
      <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-brand-navy/5 group-hover:bg-brand-coral/[0.06] transition-colors duration-500 shrink-0">
        {post.image ? (
          <>
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-600 group-hover:scale-[1.04]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-11 h-11 rounded-xl bg-brand-coral/10 group-hover:bg-brand-coral/20 flex items-center justify-center transition-colors duration-300">
              <ArrowRight className="w-5 h-5 text-brand-coral group-hover:translate-x-0.5 transition-transform duration-300" strokeWidth={1.8} />
            </div>
          </div>
        )}

        {/* Category badge on image */}
        <span className="absolute top-3 left-3 text-[10px] font-bold tracking-[0.16em] uppercase text-brand-white bg-brand-navy/60 backdrop-blur-sm px-2.5 py-1 rounded-full">
          {post.category}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        {/* Meta row */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-coral">
            {post.category}
          </span>
          <span className="text-[10px] text-brand-navy/30 font-medium tracking-wider">
            {post.date}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-sm sm:text-[15px] font-bold leading-snug tracking-tight text-brand-navy mb-3
          group-hover:text-brand-teal transition-colors duration-300 uppercase">
          {post.title}
        </h3>

        {/* Description */}
        <p className="text-[13px] text-brand-navy/50 leading-relaxed flex-1 line-clamp-3">
          {post.description}
        </p>

        {/* Footer */}
        <div className="mt-5 pt-4 border-t border-brand-navy/6 flex items-center justify-end">
          <span className="text-[11px] font-bold tracking-widest uppercase text-brand-coral flex items-center gap-1.5 group-hover:gap-3 transition-all duration-300">
            Read more
            <ArrowRight className="w-3 h-3" strokeWidth={2.5} />
          </span>
        </div>
      </div>
    </Link>
  )
}

// ── Main BlogClient ──────────────────────────────────────────
export function BlogClient({ posts, heroData, tabs, tabChips }: Props) {
  const searchParams = useSearchParams()
  const initialTab = (searchParams.get("tab") as TabKey) ?? "ats"
  const validTabs = tabs.map((t) => t.key)

  const [activeTab, setActiveTab] = useState<TabKey>(
    validTabs.includes(initialTab) ? initialTab : "ats"
  )
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

  const [featuredPost, ...restPosts] = filteredPosts

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative w-full bg-brand-navy overflow-hidden pt-32 h-[90vh] lg:pt-44 lg:pb-32">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-coral/10 rounded-full -translate-y-1/2 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-brand-teal/10 rounded-full translate-y-1/2 blur-3xl pointer-events-none" />

        <div ref={heroRef} className="relative max-w-6xl mx-auto px-5 sm:px-10 xl:px-16 text-center lg:mt-20 mt-5">
          <span
            className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-brand-coral block mb-4"
            style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(16px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}
          >
            {heroData.tagline}
          </span>

          <h1
            className="text-[clamp(2.8rem,8vw,7rem)] font-bold leading-none tracking-tight text-brand-white mb-6"
            style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.7s ease 80ms, transform 0.7s ease 80ms" }}
          >
            {heroData.title.split(",")[0]},
            <br />
            <span className="text-brand-coral">{heroData.title.split(",")[1]?.trim()}</span>
          </h1>

          <p
            className="text-sm sm:text-base lg:text-lg text-brand-white/50 max-w-2xl mx-auto leading-relaxed"
            style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.7s ease 160ms, transform 0.7s ease 160ms" }}
          >
            {heroData.description}
          </p>

          {/* Desktop tabs */}
          <div
            className="hidden lg:flex items-center justify-center gap-6 mt-12"
            style={{ opacity: heroVisible ? 1 : 0, transition: "opacity 0.7s ease 280ms" }}
          >
            {tabs.map((tab) => {
              const Icon = TAB_ICONS[tab.key]
              const count = posts.filter((p) => p.tab === tab.key).length
              return (
                <button
                  key={tab.key}
                  onClick={() => handleTabChange(tab.key)}
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full border text-xs font-semibold tracking-widest uppercase transition-all cursor-pointer duration-300 ${activeTab === tab.key ? "bg-brand-coral text-white border-brand-coral" : "border-brand-white/15 text-brand-white/40 hover:border-brand-coral/40 hover:text-brand-coral"}`}
                >
                  <Icon className="w-3.5 h-3.5" strokeWidth={2} />
                  {tab.label}
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${activeTab === tab.key ? "bg-white/20" : "bg-brand-white/10"}`}>{count}</span>
                </button>
              )
            })}
          </div>

          <MobileTabDropdown tabs={tabs} posts={posts} activeTab={activeTab} heroVisible={heroVisible} handleTabChange={handleTabChange} />
        </div>
      </section>

      {/* ── Posts grid ── */}
      <ScrollReveal>
        <section className="relative w-full bg-brand-white overflow-hidden">
          <div className="relative max-w-6xl mx-auto px-4 sm:px-10 xl:px-16 py-12 sm:py-16 lg:py-24">

            {/* Chip filters */}
            <div className="flex flex-wrap gap-2 mb-8 sm:mb-12">
              {chips.map((chip, i) => (
                <button
                  key={chip}
                  onClick={() => handleChipChange(chip)}
                  style={{ transitionDelay: `${i * 30}ms` }}
                  className={`px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase border transition-all duration-300 ${activeChip === chip ? "bg-brand-navy text-brand-white border-brand-navy" : "border-brand-navy/15 text-brand-navy/40 hover:border-brand-coral/40 hover:text-brand-coral"}`}
                >
                  {chip}
                </button>
              ))}
            </div>

            <div ref={gridRef} key={animKey}>
              {filteredPosts.length === 0 ? (
                <div className="relative rounded-3xl bg-brand-navy overflow-hidden px-8 sm:px-12 py-16 sm:py-20 text-center" style={{ opacity: gridVisible ? 1 : 0, transition: "opacity 0.6s ease" }}>
                  <div className="absolute top-0 left-0 w-64 h-64 bg-brand-coral/10 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                  <p className="text-sm sm:text-base text-brand-white/40 font-medium relative">
                    No articles in this category yet.{" "}
                    <span className="text-brand-coral">Check back soon!</span>
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-4 sm:gap-5">
                  {/* Featured post — full width */}
                  {featuredPost && (
                    <FeaturedCard post={featuredPost} visible={gridVisible} />
                  )}

                  {/* Rest — responsive grid */}
                  {restPosts.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                      {restPosts.map((post, i) => (
                        <PostCard key={post.slug} post={post} index={i} parentVisible={gridVisible} />
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

          </div>
        </section>
      </ScrollReveal>
    </>
  )
}