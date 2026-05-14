"use client"

import { Button } from "@/components/ui/button"

interface TabButtonProps {
  label: string
  isActive: boolean
  onClick: () => void
}

export function TabButton({ label, isActive, onClick }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-8 py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
        isActive
          ? "bg-brand-navy text-white shadow-lg"
          : "text-brand-navy/50 hover:text-brand-navy hover:bg-white/80"
      }`}
    >
      {label}
    </button>
  )
}