"use client"

import { useEffect, useRef } from "react"

export function PageBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let rafId: number
    let lastScrollY = window.scrollY

    const onScroll = () => {
      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY
        lastScrollY = scrollY
        const el = containerRef.current
        if (!el) return

        const shapes = el.querySelectorAll<HTMLElement>("[data-parallax]")
        shapes.forEach((shape) => {
          const speed = parseFloat(shape.dataset.parallax ?? "0")
          shape.style.transform = `translateY(${scrollY * speed}px) ${shape.dataset.baseTransform ?? ""}`
        })
      })
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
    >
      {/* ── GRADIENT BLOBS ── */}
      <div
        data-parallax="-0.08"
        className="absolute -top-[10%] -right-[5%] w-[55%] h-[65%] rounded-full bg-brand-blue/5 blur-[130px]"
      />
      <div
        data-parallax="0.06"
        className="absolute top-[15%] -left-[12%] w-[45%] h-[55%] rounded-full bg-brand-coral/5 blur-[110px]"
      />
      <div
        data-parallax="-0.04"
        className="absolute top-[55%] right-[5%] w-[35%] h-[40%] rounded-full bg-brand-teal/4 blur-[100px]"
      />

      {/* ── DOT GRID ── */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `radial-gradient(var(--color-brand-navy) 0.5px, transparent 0.5px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* ── SHAPE 1: Organic blob — top right ── */}
      <svg
        data-parallax="-0.12"
        data-base-transform="rotate(12deg)"
        className="absolute top-16 right-[12%] text-brand-blue/8 w-72 h-72"
        style={{ willChange: "transform" }}
        viewBox="0 0 200 200"
      >
        <defs>
          <linearGradient id="bg-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "currentColor", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "currentColor", stopOpacity: 0 }} />
          </linearGradient>
        </defs>
        <path
          fill="url(#bg-grad-1)"
          d="M40,-62.7C52.2,-54.5,62.5,-43.2,68.7,-30.2C74.9,-17.2,77,2.5,71.9,19.2C66.8,35.8,54.5,49.4,40.1,58.7C25.7,68,9.2,73,-5.8,81C-20.8,89,-34.3,100,-46,97.7C-57.7,95.5,-67.7,80,-74.6,64.2C-81.5,48.5,-85.3,32.5,-86.4,16.5C-87.5,0.5,-85.9,-15.5,-79,-29.7C-72.1,-43.8,-59.8,-56.1,-46.2,-63.7C-32.6,-71.3,-16.3,-74.2,-0.5,-73.4C15.3,-72.6,30.5,-68,40,-62.7Z"
          transform="translate(100 100)"
        />
      </svg>

      {/* ── SHAPE 2: Triangle — mid left ── */}
      <svg
        data-parallax="0.10"
        className="absolute top-[38%] -left-8 text-brand-coral/6 w-48 h-48"
        style={{ willChange: "transform" }}
        viewBox="0 0 200 200"
      >
        <defs>
          <linearGradient id="bg-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "currentColor", stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: "currentColor", stopOpacity: 0 }} />
          </linearGradient>
        </defs>
        <polygon
          fill="url(#bg-grad-2)"
          points="100,10 190,190 10,190"
        />
      </svg>

      {/* ── SHAPE 3: Rotated square / diamond — center right ── */}
      <svg
        data-parallax="-0.07"
        data-base-transform="rotate(45deg)"
        className="absolute top-[50%] right-[8%] text-brand-navy/5 w-40 h-40"
        style={{ willChange: "transform" }}
        viewBox="0 0 200 200"
      >
        <defs>
          <linearGradient id="bg-grad-3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "currentColor", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "currentColor", stopOpacity: 0 }} />
          </linearGradient>
        </defs>
        <rect
          fill="url(#bg-grad-3)"
          x="20" y="20" width="160" height="160"
          rx="18"
        />
      </svg>

      {/* ── SHAPE 4: Cross / plus — upper left ── */}
      <svg
        data-parallax="0.15"
        className="absolute top-[12%] left-[10%] text-brand-teal/8 w-24 h-24"
        style={{ willChange: "transform" }}
        viewBox="0 0 200 200"
      >
        <rect fill="currentColor" x="80" y="10" width="40" height="180" rx="8" />
        <rect fill="currentColor" x="10" y="80" width="180" height="40" rx="8" />
      </svg>

      {/* ── SHAPE 5: Second organic blob — lower left ── */}
      <svg
        data-parallax="0.09"
        data-base-transform="rotate(-20deg)"
        className="absolute top-[70%] left-[5%] text-brand-blue/6 w-56 h-56"
        style={{ willChange: "transform" }}
        viewBox="0 0 200 200"
      >
        <defs>
          <linearGradient id="bg-grad-5" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: "currentColor", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "currentColor", stopOpacity: 0 }} />
          </linearGradient>
        </defs>
        <path
          fill="url(#bg-grad-5)"
          d="M47.6,-73.5C60.6,-65.5,69.7,-51.3,75.4,-36.2C81.1,-21,83.4,-5,80.3,9.8C77.2,24.6,68.8,38.1,57.8,49.2C46.8,60.3,33.3,68.9,18.2,74.3C3.1,79.6,-13.7,81.7,-28.3,76.8C-42.9,71.8,-55.3,59.9,-64.2,45.8C-73.1,31.8,-78.4,15.9,-78.4,-0.0C-78.4,-15.9,-73,-31.8,-63.6,-44.7C-54.2,-57.6,-40.9,-67.5,-26.9,-74.2C-12.9,-80.9,1.7,-84.5,16.1,-82C30.4,-79.5,34.6,-81.5,47.6,-73.5Z"
          transform="translate(100 100)"
        />
      </svg>

      {/* ── SHAPE 6: Hexagon — lower right ── */}
      <svg
        data-parallax="-0.05"
        className="absolute top-[80%] right-[15%] text-brand-coral/5 w-36 h-36"
        style={{ willChange: "transform" }}
        viewBox="0 0 200 200"
      >
        <defs>
          <linearGradient id="bg-grad-6" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: "currentColor", stopOpacity: 0.9 }} />
            <stop offset="100%" style={{ stopColor: "currentColor", stopOpacity: 0 }} />
          </linearGradient>
        </defs>
        <polygon
          fill="url(#bg-grad-6)"
          points="100,15 177,57.5 177,142.5 100,185 23,142.5 23,57.5"
        />
      </svg>

      {/* ── RINGS — bottom left ── */}
      <div
        data-parallax="0.04"
        className="absolute -bottom-24 -left-24 w-96 h-96 border border-brand-blue/10 rounded-full"
        style={{ willChange: "transform" }}
      />
      <div
        data-parallax="0.06"
        className="absolute -bottom-32 -left-32 w-[28rem] h-[28rem] border border-brand-navy/5 rounded-full"
        style={{ willChange: "transform" }}
      />

      <div
        data-parallax="-0.18"
        className="absolute top-[30%] right-[30%] w-2 h-2 rounded-full bg-brand-coral/20"
        style={{ willChange: "transform" }}
      />
      <div
        data-parallax="0.20"
        className="absolute top-[60%] left-[25%] w-3 h-3 rounded-full bg-brand-blue/15"
        style={{ willChange: "transform" }}
      />
      <div
        data-parallax="-0.14"
        className="absolute top-[20%] left-[40%] w-1.5 h-1.5 rounded-full bg-brand-teal/25"
        style={{ willChange: "transform" }}
      />

      {/* ── BOTTOM FADE ── */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-brand-bg to-transparent" />
    </div>
  )
}