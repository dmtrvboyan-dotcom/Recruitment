"use client"

interface TabButtonProps {
  label: string
  isActive: boolean
  onClick: () => void
}

export function TabButton({ label, isActive, onClick }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 sm:flex-none relative rounded-full px-6 sm:px-7 py-2 text-[10px] sm:text-[15px] font-bold uppercase tracking-[0.18em] transition-all duration-300 cursor-pointer ${isActive
        ? "bg-brand-white text-brand-navy shadow-lg"
        : "text-brand-white/60 hover:text-brand-white"
        }`}
    >
      {label}
    </button>
  )
}