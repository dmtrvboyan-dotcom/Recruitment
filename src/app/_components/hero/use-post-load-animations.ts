"use client"

import { useState, useEffect } from "react"

export function usePostLoadAnimations(): boolean {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    setReady(true)
  }, [])

  return ready
}