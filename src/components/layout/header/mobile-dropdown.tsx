"use client"

import { memo } from "react"
import { ChevronDown } from "lucide-react"
import type { NavItem } from "@/lib/constants/navigation"
import { ICON_MAP } from "./icon-map"

interface MobileDropdownProps {
  item: NavItem
  isOpen: boolean
  onToggle: () => void
  onNavigate: (href: string, openInNewTab?: boolean) => void
}

export const MobileDropdown = memo(function MobileDropdown({
  item,
  isOpen,
  onToggle,
  onNavigate,
}: MobileDropdownProps) {
  return (
    <div>
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        className="flex items-center justify-between w-full py-4 text-left text-base font-medium tracking-widest uppercase text-white/90 hover:text-brand-coral transition-colors border-b border-white/10 cursor-pointer"
      >
        {item.label}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`pl-5 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100 pt-1 pb-2" : "max-h-0 opacity-0"
        }`}
      >
        {item.dropdownItems?.map((subItem) => {
          const Icon = subItem.icon ? ICON_MAP[subItem.icon] : undefined
          return (
            <button
              key={subItem.label}
              role="menuitem"
              onClick={() => onNavigate(subItem.href, subItem.openInNewTab)}
              className="flex items-center gap-3 py-2.5 text-sm text-white/70 hover:text-white w-full text-left tracking-wide cursor-pointer"
            >
              {Icon && (
                <span className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-white/5">
                  <Icon className="w-3.5 h-3.5 text-brand-coral" strokeWidth={1.75} />
                </span>
              )}
              {subItem.label}
            </button>
          )
        })}
      </div>
    </div>
  )
})
