// lib/hooks/use-current-hash.ts
"use client"

import { useEffect, useState } from "react"

export function useCurrentHash() {
  const [hash, setHash] = useState<string>("")

  useEffect(() => {
    setHash(window.location.hash)
    const onChange = () => setHash(window.location.hash)
    window.addEventListener("hashchange", onChange)
    return () => window.removeEventListener("hashchange", onChange)
  }, [])

  return hash // includes "#", or "" when no hash
}