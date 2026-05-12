"use client"

import { useState, useRef, useCallback, memo } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Menu, X, ChevronDown, Phone, Mail,
  Code2, Brain, Infinity as InfinityIcon, ShieldCheck, Database,
  Landmark, Cloud, Gamepad2, ShoppingCart, HeartPulse, Car, MoreHorizontal,
  Bookmark, Users, Star, HelpCircle,
  type LucideIcon, Palette, Smartphone, Briefcase
} from "lucide-react"
import { NAV_ITEMS, type NavItem } from "@/lib/constants/navigation"
import { scrollToSection, scrollToTop } from "@/lib/utils/scroll"
import { useScrollState, useEscapeKey, useClickOutside, useBodyScrollLock } from "@/lib/hooks"
import { Breadcrumb } from "./breadcrump"

const PHONE_NUMBER = "+359 876 449 229"
const PHONE_HREF = "tel:+35987644929"
const EMAIL_HREF = "mailto:office@recruitment.bg"

// Keep keys here in sync with the `icon` strings in navigation.ts
// Keep keys here in sync with the `icon` strings in navigation.ts
const ICON_MAP: Record<string, LucideIcon> = {
  Code2,
  Brain,
  Infinity: InfinityIcon,
  ShieldCheck,
  Database,
  Palette,
  Smartphone,
  Briefcase,
  Landmark,
  Cloud,
  Gamepad2,
  ShoppingCart,
  HeartPulse,
  Car,
  MoreHorizontal,
  Bookmark,
  Users,
  Star,
  HelpCircle,
};

/* ---------- Simple dropdowns (unchanged) ---------- */

const DesktopDropdown = memo(function DesktopDropdown({
  item, isOpen, onToggle, onNavigate,
}: {
  item: NavItem
  isOpen: boolean
  onToggle: () => void
  onNavigate: (href: string, openInNewTab?: boolean) => void
}) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="group flex items-center gap-1.5 text-sm font-medium tracking-wide text-brand-navy/75 hover:text-brand-coral transition-colors duration-200 py-1 cursor-pointer uppercase"
      >
        {item.label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <div
        className={`absolute top-full left-0 mt-4 w-52 bg-card rounded-sm shadow-lg border-t-2 border-brand-coral py-2 transition-all duration-200 origin-top ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {item.dropdownItems?.map((subItem) => (
          <button
            key={subItem.label}
            onClick={() => onNavigate(subItem.href, subItem.openInNewTab)}
            className="w-full text-left px-5 py-2.5 text-sm text-brand-navy/80 hover:text-brand-coral hover:bg-brand-bg transition-colors cursor-pointer tracking-wide"
          >
            {subItem.label}
          </button>
        ))}
      </div>
    </div>
  )
})

const MobileDropdown = memo(function MobileDropdown({
  item, isOpen, onToggle, onNavigate,
}: {
  item: NavItem
  isOpen: boolean
  onToggle: () => void
  onNavigate: (href: string, openInNewTab?: boolean) => void
}) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-4 text-left text-base font-medium tracking-widest uppercase text-white/90 hover:text-brand-coral transition-colors border-b border-white/10 cursor-pointer"
      >
        {item.label}
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <div
        className={`pl-5 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-60 opacity-100 pt-1 pb-2" : "max-h-0 opacity-0"
        }`}
      >
        {item.dropdownItems?.map((subItem) => (
          <button
            key={subItem.label}
            onClick={() => onNavigate(subItem.href, subItem.openInNewTab)}
            className="block py-2.5 text-sm text-white/70 hover:text-white w-full text-left tracking-wide cursor-pointer"
          >
            {subItem.label}
          </button>
        ))}
      </div>
    </div>
  )
})

/* ---------- NEW: Mega menus ---------- */

const DesktopMegaMenu = memo(function DesktopMegaMenu({
  item, isOpen, onToggle, onNavigate,
}: {
  item: NavItem
  isOpen: boolean
  onToggle: () => void
  onNavigate: (href: string, openInNewTab?: boolean) => void
}) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="group flex items-center gap-1.5 text-sm font-medium tracking-wide text-brand-navy/75 hover:text-brand-coral transition-colors duration-200 py-1 cursor-pointer uppercase"
      >
        {item.label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <div
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
                      onClick={() => onNavigate(subItem.href, subItem.openInNewTab)}
                      className="flex items-start gap-3 text-left cursor-pointer group/item"
                    >
                      {Icon && (
                        <span className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-brand-navy/5 group-hover/item:bg-brand-coral/10 transition-colors">
                          <Icon className="w-4 h-4 text-brand-navy group-hover/item:text-brand-coral transition-colors" strokeWidth={1.75} />
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

const MobileMegaMenu = memo(function MobileMegaMenu({
  item, isOpen, onToggle, onNavigate,
}: {
  item: NavItem
  isOpen: boolean
  onToggle: () => void
  onNavigate: (href: string, openInNewTab?: boolean) => void
}) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-4 text-left text-base font-medium tracking-widest uppercase text-white/90 hover:text-brand-coral transition-colors border-b border-white/10 cursor-pointer"
      >
        {item.label}
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
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
                    onClick={() => onNavigate(subItem.href, subItem.openInNewTab)}
                    className="flex items-start gap-3 py-2.5 text-left cursor-pointer group/item"
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

/* ---------- Header ---------- */

export function Header() {
  const isScrolled = useScrollState()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdowns, setOpenDropdowns] = useState<Set<string>>(new Set())

  const navRef = useRef<HTMLDivElement | null>(null)

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
    setOpenDropdowns(new Set())
  }, [])

  const openMenu = useCallback(() => {
    setIsMenuOpen(true)
    setOpenDropdowns(new Set())
  }, [])

  useEscapeKey(closeMenu)
  useBodyScrollLock(isMenuOpen)

  useClickOutside(navRef, () => {
    if (!isMenuOpen) {
      setOpenDropdowns(new Set())
    }
  })

  const handleNavigate = useCallback((href: string, openInNewTab?: boolean) => {
    if (openInNewTab) {
      window.open(href, "_blank", "noopener,noreferrer")
    } else if (href.startsWith("#")) {
      if (window.location.pathname === "/") {
        scrollToSection(href)
      } else {
        window.location.href = "/" + href
      }
    } else {
      window.location.href = href
    }
    setIsMenuOpen(false)
    setOpenDropdowns(new Set())
  }, [])

  const handleDropdownToggle = useCallback((label: string) => {
    setOpenDropdowns((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(label)) {
        newSet.delete(label)
      } else {
        newSet.add(label)
      }
      return newSet
    })
  }, [])

  const handleLogoClick = useCallback((e: React.MouseEvent) => {
    if (window.location.pathname === "/") {
      e.preventDefault()
      scrollToTop()
    }
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-brand-white backdrop-blur-sm pt-3 pb-0 shadow-[0_1px_0_0_rgba(0,0,0,0.08)]"
            : "bg-brand-white pt-6 pb-0"
        }`}
        style={{ paddingRight: "var(--scrollbar-width, 0px)" }}
      >
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10 xl:px-12">
          <nav ref={navRef} className="relative flex items-center justify-between h-14">
            {/* Logo */}
            <Link href="/" onClick={handleLogoClick} className="block flex-shrink-0">
              <img
                src="/uploaded/recr-logo.png"
                alt=""
                className="h-9 lg:h-11 w-auto transition-all duration-300"
              />
            </Link>

            {/* Desktop Navigation */}
            <div
              className={`hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 items-center gap-8 transition-opacity duration-300 ${
                isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
            >
              {NAV_ITEMS.map((item) =>
                item.hasMegaMenu ? (
                  <DesktopMegaMenu
                    key={item.label}
                    item={item}
                    isOpen={openDropdowns.has(item.label)}
                    onToggle={() => handleDropdownToggle(item.label)}
                    onNavigate={handleNavigate}
                  />
                ) : item.hasDropdown ? (
                  <DesktopDropdown
                    key={item.label}
                    item={item}
                    isOpen={openDropdowns.has(item.label)}
                    onToggle={() => handleDropdownToggle(item.label)}
                    onNavigate={handleNavigate}
                  />
                ) : (
                  <button
                    key={item.label}
                    onClick={() => handleNavigate(item.href!)}
                    className="text-sm font-medium tracking-wide uppercase text-brand-navy/75 hover:text-brand-coral transition-colors duration-200 py-1 cursor-pointer"
                  >
                    {item.label}
                  </button>
                )
              )}

              <Button
                onClick={() => handleNavigate("#contact")}
                className="bg-brand-navy hover:bg-navy-button-hover text-white rounded-3xl px-7 py-5 text-sm font-medium tracking-widest uppercase cursor-pointer transition-colors duration-200"
              >
                Contact Us
              </Button>
            </div>

            {/* Scrolled: Phone + Hamburger */}
            <div className="flex items-center gap-4">
              <a
                href={PHONE_HREF}
                className={`hidden lg:flex items-center gap-2 text-sm font-medium text-brand-navy/70 hover:text-brand-coral transition-all duration-300 ${
                  isScrolled ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
              >
                <Phone size={14} className="text-brand-coral" />
                {PHONE_NUMBER}
              </a>

              <button
                onClick={openMenu}
                className={`p-2 text-brand-navy hover:text-brand-coral transition-colors duration-200 ${
                  isScrolled ? "block" : "block lg:hidden"
                }`}
                aria-label="Open menu"
              >
                <Menu size={22} />
              </button>
            </div>
          </nav>
        </div>

        <div className="z-10">
          <Breadcrumb />
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[999] transition-all duration-500 ${
          isMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm" onClick={closeMenu} />

        <div
          className={`absolute top-0 right-0 h-full w-full lg:w-[480px] shadow-2xl transform transition-transform duration-500 ease-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ background: "linear-gradient(160deg, #1A1A2E 0%, #2C3E50 100%)" }}
        >
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-coral" />

          <button
            onClick={closeMenu}
            className="absolute top-7 right-7 text-white/60 hover:text-white transition-colors duration-200 z-10"
          >
            <X size={22} strokeWidth={2} />
          </button>

          <div className="flex flex-col h-full overflow-y-auto pt-20 pb-10 px-8">
            <div className="flex flex-col gap-1 text-base text-white">
              {NAV_ITEMS.map((item) =>
                item.hasMegaMenu ? (
                  <MobileMegaMenu
                    key={item.label}
                    item={item}
                    isOpen={openDropdowns.has(item.label)}
                    onToggle={() => handleDropdownToggle(item.label)}
                    onNavigate={handleNavigate}
                  />
                ) : item.hasDropdown ? (
                  <MobileDropdown
                    key={item.label}
                    item={item}
                    isOpen={openDropdowns.has(item.label)}
                    onToggle={() => handleDropdownToggle(item.label)}
                    onNavigate={handleNavigate}
                  />
                ) : (
                  <button
                    key={item.label}
                    onClick={() => handleNavigate(item.href!)}
                    className="py-4 text-left text-base font-medium tracking-widest uppercase text-white/90 hover:text-brand-coral transition-colors border-b border-white/10 last:border-none cursor-pointer"
                  >
                    {item.label}
                  </button>
                )
              )}
            </div>

            <div className="mt-auto pt-10 flex flex-col gap-5">
              <div className="flex items-center gap-3">
                
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                  aria-label="Call us"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-full border border-white/20 hover:border-brand-coral transition-colors">
                    <Phone size={14} />
                  </span>
                  <span>{PHONE_NUMBER}</span>
                </a>

                
                <a
                  href={EMAIL_HREF}
                  className="ml-auto flex items-center justify-center w-8 h-8 rounded-full border border-white/20 text-white/60 hover:text-white hover:border-brand-coral transition-colors"
                  aria-label="Send us an email"
                >
                  <Mail size={14} />
                </a>
              </div>

              <Button
                onClick={() => handleNavigate("#contact")}
                className="w-full bg-brand-coral hover:bg-brand-coral-hover text-white rounded-3xl py-6 text-sm font-medium tracking-widest uppercase cursor-pointer transition-colors duration-200"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}