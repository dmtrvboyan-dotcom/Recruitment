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
  const sections = item.megaSections ?? []
  const isSingle = sections.length === 1

  // Single section with many items (e.g. Services with 7): split items 50/50
  // into two visual columns rendered inside the single section panel.
  const splitItems = isSingle && sections[0]?.items.length >= 5

  // Panel width: single-split gets same width as a 2-section panel
  const panelWidth = isSingle
    ? splitItems
      ? "w-[560px]"   // single section, items split into 2 cols
      : "w-72"        // single section, short list
    : sections.length === 2
    ? "w-[560px]"
    : "w-[820px]"

  const gridCols = isSingle
    ? "grid-cols-1"
    : sections.length === 2
    ? "grid-cols-2"
    : "grid-cols-3"

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
        className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 ${panelWidth} max-w-[calc(100vw-3rem)] bg-brand-white rounded-sm shadow-xl border-t-2 border-brand-coral p-8 transition-all duration-200 origin-top ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {splitItems ? (
          /* ── Single section, items split 50/50 into two columns ── */
          (() => {
            const allItems = sections[0].items
            const mid = Math.ceil(allItems.length / 2)
            const left = allItems.slice(0, mid)
            const right = allItems.slice(mid)

            return (
              <div>
                <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-coral mb-5">
                  {sections[0].title}
                </h4>
                <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                  {/* Left column */}
                  <div className="flex flex-col gap-4">
                    {left.map((subItem) => {
                      const Icon = ICON_MAP[subItem.icon]
                      return (
                        <button
                          key={subItem.label}
                          role="menuitem"
                          onClick={() => onNavigate(subItem.href, subItem.openInNewTab)}
                          className="group/item flex items-start gap-3 text-left cursor-pointer"
                        >
                          {Icon && (
                            <span className="shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-brand-navy/5 group-hover/item:bg-brand-coral/10 transition-colors">
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

                  {/* Right column */}
                  <div className="flex flex-col gap-4">
                    {right.map((subItem) => {
                      const Icon = ICON_MAP[subItem.icon]
                      return (
                        <button
                          key={subItem.label}
                          role="menuitem"
                          onClick={() => onNavigate(subItem.href, subItem.openInNewTab)}
                          className="group/item flex items-start gap-3 text-left cursor-pointer"
                        >
                          {Icon && (
                            <span className="shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-brand-navy/5 group-hover/item:bg-brand-coral/10 transition-colors">
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
              </div>
            )
          })()
        ) : (
          /* ── Default: one column per section ── */
          <div className={`grid ${gridCols} gap-x-8 gap-y-6`}>
            {sections.map((section) => (
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
                          <span className="shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-brand-navy/5 group-hover/item:bg-brand-coral/10 transition-colors">
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
        )}
      </div>
    </div>
  )
})