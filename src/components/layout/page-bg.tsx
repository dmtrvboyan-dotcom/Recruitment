"use client"

import { useEffect, useRef, memo } from "react"
import Image from "next/image"

// ─── 3 LAYERS — LIGHT & SIMPLE ───────────────────────────────────────────
const LAYERS = [
  {
    src: "/backgrounds/7.png",
    scrollSpeed: 0.08,
    rotateSpeed: 0.008,
    scale: 1.5,
    opacity: 0.25,
  },
  {
    src: "/backgrounds/8.png",
    scrollSpeed: 0.25,
    rotateSpeed: -0.012,
    scale: 1.4,
    opacity: 0.2,
  },
  {
    src: "/backgrounds/7.png",
    scrollSpeed: 0.45,
    rotateSpeed: 0.016,
    scale: 1.35,
    opacity: 0.15,
  },
  {
    src: "/backgrounds/8.png",
    scrollSpeed: 0.45,
    rotateSpeed: 0.016,
    scale: 1.35,
    opacity: 0.15,
  },
  {
    src: "/backgrounds/7.png",
    scrollSpeed: 0.45,
    rotateSpeed: 0.016,
    scale: 1.35,
    opacity: 0.15,
  },
  {
    src: "/backgrounds/8.png",
    scrollSpeed: 0.45,
    rotateSpeed: 0.016,
    scale: 1.35,
    opacity: 0.15,
  },
]
// ─────────────────────────────────────────────────────────────────────────

export const PageBackground = memo(function PageBackground() {
  const layerRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    let rafId: number

    const onScroll = () => {
      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY
        const maxScroll = document.body.scrollHeight - window.innerHeight
        const progress = Math.min(scrollY / maxScroll, 1)

        layerRefs.current.forEach((el, i) => {
          if (!el) return
          const layer = LAYERS[i]
          const phase = i * (Math.PI / LAYERS.length)

          const translateY = scrollY * layer.scrollSpeed
          const translateX = Math.sin(progress * Math.PI + phase) * 3
          const rotate     = scrollY * layer.rotateSpeed

          el.style.transform = `
            translateY(${translateY}px)
            translateX(${translateX}%)
            rotate(${rotate}deg)
            scale(${layer.scale})
          `
        })
      })
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener("scroll", onScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {/* Single soft white overlay — keeps everything light */}
      <div
        className="absolute inset-0 z-10"
        style={{ background: "rgba(255,255,255,0.55)" }}
      />

      {LAYERS.map((layer, i) => (
        <div
          key={i}
          className="absolute inset-0"
          style={{ opacity: layer.opacity }}
        >
          <div
            ref={(el) => { layerRefs.current[i] = el }}
            className="will-change-transform"
            style={{
              position: "absolute",
              inset: "-120%",
              transformOrigin: "center center",
            }}
          >
            <Image
              src={layer.src}
              alt=""
              fill
              className="object-cover object-center"
              priority={i === 0}
              sizes="350vw"
            />
          </div>
        </div>
      ))}
    </div>
  )
})
