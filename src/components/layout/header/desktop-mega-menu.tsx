"use client"

import { memo } from "react"
import { ChevronDown } from "lucide-react"
import type { NavItem } from "@/lib/constants/navigation"
import { ICON_MAP } from "./icon-map"

interface DesktopMegaMenuProps {
  item: NavItem
  isOpen: boolean
  onToggle: () => void
  onNavigate: (href: string, openInNewTab?: boolean) => void
}

export const DesktopMegaMenu = memo(function DesktopMegaMenu({
  item,
  isOpen,
  onToggle,
  onNavigate,
}: DesktopMegaMenuProps) {
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
        className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[820px] max-w-[calc(100vw-3rem)] bg-brand-white rounded-sm shadow-xl border-t-2 border-brand-coral p-8 transition-all duration-200 origin-top ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="grid grid-cols-3 gap-x-8 gap-y-6">
          {item.megaSections?.map((section) => (
            <div key={section.title}>
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-coral mb-5">
                {section.title}
              </h4>

              <div className="flex flex-col gap-4">
                {section.items.map((subItem) => {
                  const Icon = ICON_MAP[subItem.icon]
                  return (
                    <button
                      key={subItem.label}
                      role="menuitem"
                      onClick={() => onNavigate(subItem.href, subItem.openInNewTab)}
                      className="group/item flex items-start gap-3 text-left cursor-pointer"
                    >
                      {Icon && (
                        <span className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-brand-navy/5 group-hover/item:bg-brand-coral/10 transition-colors">
                          <Icon
                            className="w-4 h-4 text-brand-navy group-hover/item:text-brand-coral transition-colors"
                            strokeWidth={1.75}
                          />
                        </span>
                      )}
                      <div className="pt-0.5">
                        <div className="text-sm font-semibold text-brand-navy group-hover/item:text-brand-coral transition-colors leading-tight">
                          {subItem.label}
                        </div>
                        {subItem.description && (
                          <div className="text-xs text-brand-navy/55 mt-1 leading-snug">
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
    </div>
  )
})
