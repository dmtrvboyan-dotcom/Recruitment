"use client"

import { memo } from "react"
import { ChevronDown } from "lucide-react"
import type { NavItem } from "@/lib/constants/navigation"
import { ICON_MAP } from "./icon-map"

interface DesktopDropdownProps {
  item: NavItem
  isOpen: boolean
  onToggle: () => void
  onNavigate: (href: string, openInNewTab?: boolean) => void
}

export const DesktopDropdown = memo(function DesktopDropdown({
  item,
  isOpen,
  onToggle,
  onNavigate,
}: DesktopDropdownProps) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        className="flex items-center gap-1.5 text-sm font-medium tracking-wide text-brand-navy/75 hover:text-brand-coral transition-colors duration-200 py-1 cursor-pointer uppercase"
      >
        {item.label}
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <div
        role="menu"
        className={`absolute top-full left-0 mt-4 w-52 bg-card rounded-sm shadow-lg border-t-2 border-brand-coral py-2 transition-all duration-200 origin-top ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {item.dropdownItems?.map((subItem) => {
          const Icon = subItem.icon ? ICON_MAP[subItem.icon] : undefined
          return (
            <button
              key={subItem.label}
              role="menuitem"
              onClick={() => onNavigate(subItem.href, subItem.openInNewTab)}
              className="font-semibold group/item  w-full text-left px-5 py-2.5 text-sm text-brand-navy/80 hover:text-brand-coral hover:bg-brand-bg transition-colors cursor-pointer tracking-wide flex items-center gap-3 leading-tight"
            >
              {Icon && (
                <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-brand-navy/5 group-hover/item:bg-brand-coral/10 transition-colors">
                  <Icon
                    className="w-3.5 h-3.5 text-brand-navy/60 group-hover/item:text-brand-coral transition-colors"
                    strokeWidth={1.75}
                  />
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
