'use client'
import { useEffect } from 'react'

export default function NonCriticalStyles() {
  useEffect(() => {
    if (document.querySelector('link[href="/non-critical.css"]')) return
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = '/non-critical.css'
    document.head.appendChild(link)
  }, [])

  return null
}