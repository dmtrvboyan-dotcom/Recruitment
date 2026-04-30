"use client"

import { useEffect, useRef } from "react"

interface Orb {
  x: number; y: number; r: number
  h: number; sat: number
  speed: number; amp: number; phase: number
  alpha: number; parallax: number
}

const ORBS: Orb[] = [
  { x:0.25, y:0.30, r:0.55, h:235, sat:65, speed:0.006, amp:0.10, phase:0,   alpha:0.28, parallax:-0.3 },
  { x:0.75, y:0.65, r:0.50, h:205, sat:85, speed:0.004, amp:0.08, phase:2.1, alpha:0.30, parallax: 0.6 },
  { x:0.55, y:0.20, r:0.40, h:350, sat:95, speed:0.009, amp:0.06, phase:1.0, alpha:0.32, parallax:-1.0 },
  { x:0.10, y:0.75, r:0.32, h:210, sat:55, speed:0.007, amp:0.07, phase:3.5, alpha:0.22, parallax: 0.8 },
  { x:0.85, y:0.20, r:0.30, h:345, sat:90, speed:0.005, amp:0.05, phase:0.7, alpha:0.26, parallax:-1.2 },
]

export function PageBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext("2d")!

    let rafId: number
    let tick = 0

    const scroll = { y: 0 }
    const smoothScroll = { y: 0 }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const onScroll = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight
      scroll.y = maxScroll > 0 ? window.scrollY / maxScroll : 0
    }

    resize()
    onScroll()

    window.addEventListener("resize", resize)
    window.addEventListener("scroll", onScroll, { passive: true })

    const draw = () => {
      tick++

      const { width: W, height: H } = canvas

      // smooth the scroll → makes motion feel premium
      smoothScroll.y += (scroll.y - smoothScroll.y) * 0.08
      const sy = smoothScroll.y - 0.5

      ctx.clearRect(0, 0, W, H)

      for (const o of ORBS) {
        const drift = Math.sin(tick * o.speed + o.phase)

        const cx = (
          o.x +
          drift * o.amp +
          sy * o.parallax * 0.6
        ) * W

        const cy = (
          o.y +
          Math.cos(tick * o.speed * 0.7 + o.phase) * o.amp * 0.6 +
          sy * o.parallax * 1.2
        ) * H

        const depthScale = 1 + o.parallax * 0.2

        const r =
          Math.min(W, H) *
          (o.r * depthScale + Math.sin(tick * o.speed * 1.3) * 0.02)

        const hue = o.h + Math.sin(tick * 0.002 + o.phase) * 15

        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r)

        g.addColorStop(0,   `hsla(${hue},${o.sat}%,70%,${o.alpha})`)
        g.addColorStop(0.4, `hsla(${hue},${o.sat - 5}%,65%,${o.alpha * 0.6})`)
        g.addColorStop(1,   `hsla(${hue},${o.sat - 15}%,85%,0)`)

        ctx.fillStyle = g
        ctx.globalCompositeOperation = "multiply"
        ctx.fillRect(0, 0, W, H)
      }

      rafId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("resize", resize)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: "#f9f9f9" }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* reduced so orbs are more visible */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(rgba(255,255,255,0.55) 0.5px, transparent 0.5px)`,
          backgroundSize: "36px 36px",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.02] mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="absolute bottom-0 left-0 w-full h-48" />
    </div>
  )
}