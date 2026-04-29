"use client"

import { Button } from "@/components/ui/button"

interface TabButtonProps {
  label: string
  isActive: boolean
  onClick: () => void
}

export function TabButton({ label, isActive, onClick }: TabButtonProps) {
  return (
    <Button
      variant={isActive ? "default" : "ghost"}
      onClick={onClick}
      className={`rounded-full px-8 py-3 transition-all ${
        isActive
          ? "bg-[#085689] text-white shadow hover:bg-[#78B6D9]"
          : "hover:bg-white hover:text-slate-900"
      }`}
    >
      {label}
    </Button>
  )
}
