"use client"

import { Button } from "@/components/ui/button"
import { NAV_ITEMS } from "@/lib/constants/navigation"
import { DesktopDropdown } from "./desktop-dropdown"
import { DesktopMegaMenu } from "./desktop-mega-menu"

interface DesktopNavProps {
  isScrolled: boolean
  openDropdown: string | null
  onToggleDropdown: (label: string) => void
  onNavigate: (href: string, openInNewTab?: boolean) => void
}

export function DesktopNav({
  isScrolled,
  openDropdown,
  onToggleDropdown,
  onNavigate,
}: DesktopNavProps) {
  return (
    <div
      className={`hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 items-center gap-8 transition-opacity duration-300 ${
        isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {NAV_ITEMS.map((item) => {
        if (item.hasMegaMenu) {
          return (
            <DesktopMegaMenu
              key={item.label}
              item={item}
              isOpen={openDropdown === item.label}
              onToggle={() => onToggleDropdown(item.label)}
              onNavigate={onNavigate}
            />
          )
        }
        if (item.hasDropdown) {
          return (
            <DesktopDropdown
              key={item.label}
              item={item}
              isOpen={openDropdown === item.label}
              onToggle={() => onToggleDropdown(item.label)}
              onNavigate={onNavigate}
            />
          )
        }
        return (
          <button
            key={item.label}
            onClick={() => onNavigate(item.href!)}
            className="text-sm font-medium tracking-wide uppercase text-brand-navy/75 hover:text-brand-coral transition-colors duration-200 py-1 cursor-pointer"
          >
            {item.label}
          </button>
        )
      })}

      <Button
        onClick={() => onNavigate("#contact")}
        className="bg-brand-navy hover:bg-navy-button-hover text-white rounded-3xl px-7 py-5 text-sm font-medium tracking-widest uppercase cursor-pointer transition-colors duration-200"
      >
        Contact Us
      </Button>
    </div>
  )
}