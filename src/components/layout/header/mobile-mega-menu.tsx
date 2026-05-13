"use client"

import { memo } from "react"
import { ChevronDown } from "lucide-react"
import type { NavItem } from "@/lib/constants/navigation"
import { ICON_MAP } from "./icon-map"

interface MobileMegaMenuProps {
  item: NavItem
  isOpen: boolean
  onToggle: () => void
  onNavigate: (href: string, openInNewTab?: boolean) => void
}

export const MobileMegaMenu = memo(function MobileMegaMenu({
  item,
  isOpen,
  onToggle,
  onNavigate,
}: MobileMegaMenuProps) {
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
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[2000px] opacity-100 pt-3 pb-4" : "max-h-0 opacity-0"
        }`}
      >
        {item.megaSections?.map((section) => (
          <div key={section.title} className="mb-5 last:mb-1">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-coral mb-2 pl-1">
              {section.title}
            </h4>

            <div className="flex flex-col">
              {section.items.map((subItem) => {
                const Icon = ICON_MAP[subItem.icon]
                return (
                  <button
                    key={subItem.label}
                    role="menuitem"
                    onClick={() => onNavigate(subItem.href, subItem.openInNewTab)}
                    className="group/item flex items-start gap-3 py-2.5 text-left cursor-pointer"
                  >
                    {Icon && (
                      <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-white/5 group-hover/item:bg-brand-coral/15 transition-colors">
                        <Icon className="w-3.5 h-3.5 text-brand-coral" strokeWidth={1.75} />
                      </span>
                    )}
                    <div className="pt-1">
                      <div className="text-sm font-medium text-white/90 group-hover/item:text-white transition-colors leading-tight">
                        {subItem.label}
                      </div>
                      {subItem.description && (
                        <div className="text-[11px] text-white/50 mt-0.5 leading-snug">
                          {subItem.description}
                        </div>
                      )}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
})
