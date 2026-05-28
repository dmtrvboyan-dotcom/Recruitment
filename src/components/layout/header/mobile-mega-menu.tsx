"use client"

import { memo, useState } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import type { MegaMenuItem, NavItem } from "@/lib/constants/navigation"
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
  const [openSection, setOpenSection] = useState<string | null>(null)

  const sections = item.megaSections ?? []

  /**
   * Only "For Companies" has more than one section today.
   * - Multi-section menus  -> drill-down: tap a section to reveal its items.
   * - Single-section menus -> items show directly (other menus untouched).
   */
  const isMultiSection = sections.length > 1

  const handleSectionToggle = (title: string) => {
    setOpenSection((prev) => (prev === title ? null : title))
  }

  // Reset the open section whenever the whole menu collapses.
  const handleToggle = () => {
    if (isOpen) setOpenSection(null)
    onToggle()
  }

  // Shared link renderer (icon + title + description) used by both branches.
  const renderItem = (subItem: MegaMenuItem) => {
    const Icon = ICON_MAP[subItem.icon]
    return (
      <button
        key={subItem.label}
        role="menuitem"
        onClick={() => onNavigate(subItem.href, subItem.openInNewTab)}
        className="group/item flex items-start gap-3 py-2.5 text-left cursor-pointer"
      >
        {Icon && (
          <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-white/5 group-hover/item:bg-brand-coral/15 transition-colors">
            <Icon className="w-3.5 h-3.5 text-brand-coral" strokeWidth={1.75} />
          </span>
        )}
        <div className="pt-1">
          <div className="text-sm font-medium text-brand-white/90 group-hover/item:text-brand-white transition-colors leading-tight">
            {subItem.label}
          </div>
          {subItem.description && (
            <div className="text-[11px] text-brand-white/50 mt-0.5 leading-snug">
              {subItem.description}
            </div>
          )}
        </div>
      </button>
    )
  }

  return (
    <div>
      {/* Top-level trigger — identical to MobileDropdown */}
      <button
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        className="flex items-center justify-between w-full py-4 text-left text-base font-medium tracking-widest uppercase text-brand-white/90 hover:text-brand-coral transition-colors border-b border-brand-white/10 cursor-pointer"
      >
        {item.label}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Expandable body */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-200 opacity-100 pt-1 pb-2" : "max-h-0 opacity-0"
        }`}
      >
        {isMultiSection ? (
          sections.map((section) => {
            const isSectionOpen = openSection === section.title

            return (
              <div key={section.title}>
                <button
                  onClick={() => handleSectionToggle(section.title)}
                  aria-expanded={isSectionOpen}
                  className="flex items-center justify-between w-full pl-4 pr-1 py-3.5 text-left cursor-pointer group/section border-b border-brand-white/5"
                >
                  <span
                    className={`text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors ${
                      isSectionOpen
                        ? "text-brand-coral"
                        : "text-brand-white/50 group-hover/section:text-brand-white/80"
                    }`}
                  >
                    {section.title}
                  </span>
                  <ChevronRight
                    className={`w-3.5 h-3.5 transition-all duration-300 ${
                      isSectionOpen
                        ? "rotate-90 text-brand-coral"
                        : "text-brand-white/30 group-hover/section:text-brand-white/60"
                    }`}
                  />
                </button>

                {/* Section items */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isSectionOpen
                      ? "max-h-150 opacity-100 pb-3"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="flex flex-col pl-2  ml-4">
                    {section.items.map(renderItem)}
                  </div>
                </div>
              </div>
            )
          })
        ) : (
          sections.map((section) => (
            <div key={section.title} className="flex flex-col pl-4">
              {section.items.map(renderItem)}
            </div>
          ))
        )}
      </div>
    </div>
  )
})