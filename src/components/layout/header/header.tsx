"use client"

import { useCallback, useRef, useState, type MouseEvent } from "react"
import Link from "next/link"
import Image from "next/image"

import { Menu, Phone } from "lucide-react"
import {
  useBodyScrollLock,
  useClickOutside,
  useEscapeKey,
  useScrollState,
} from "@/lib/hooks"
import { scrollToSection, scrollToTop } from "@/lib/utils/scroll"
import { Breadcrumb } from "../breadcrump"
import { PHONE_HREF, PHONE_NUMBER } from "./constants"
import { DesktopNav } from "./desktop-nav"
import { MobileMenu } from "./mobile-menu"

export function Header() {
  const isScrolled = useScrollState()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const navRef = useRef<HTMLDivElement | null>(null)

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
    setOpenDropdown(null)
  }, [])

  const openMenu = useCallback(() => {
    setIsMenuOpen(true)
    setOpenDropdown(null)
  }, [])

  useEscapeKey(closeMenu)
  useBodyScrollLock(isMenuOpen)


  useClickOutside(navRef, () => {
    if (!isMenuOpen) setOpenDropdown(null)
  })

  const handleNavigate = useCallback(
    (href: string, openInNewTab?: boolean) => {
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
      setOpenDropdown(null)
    },
    [],
  )

  const handleDropdownToggle = useCallback((label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label))
  }, [])

  const handleLogoClick = useCallback((e: MouseEvent) => {
    if (window.location.pathname === "/") {
      e.preventDefault()
      scrollToTop()
    }
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? "bg-brand-white backdrop-blur-sm pt-3 pb-0 shadow-[0_1px_0_0_rgba(0,0,0,0.08)]"
          : "bg-brand-white pt-6 pb-0"
          }`}
        style={{ paddingRight: "var(--scrollbar-width, 0px)" }}
      >
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10 xl:px-12">
          <nav
            ref={navRef}
            className="relative flex items-center justify-between h-14"
          >
            <Link
              href="/"
              onClick={handleLogoClick}
              className="block shrink-0"
              aria-label="Recruitment.bg — Home"
            >
              <Image
                src="/uploaded/recr-logo.webp"
                alt="Recruitment.bg"
                width={328}
                height={88}
                style={{ width: 'auto', height: '44px' }}
                priority
              />
            </Link>

            <DesktopNav
              isScrolled={isScrolled}
              openDropdown={openDropdown}
              onToggleDropdown={handleDropdownToggle}
              onNavigate={handleNavigate}
            />

            <div className="flex items-center gap-4">
              <a
                href={PHONE_HREF}
                className={`hidden lg:flex items-center gap-2 text-sm font-medium text-brand-navy/70 hover:text-brand-coral transition-all duration-300 ${isScrolled
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
                  }`}
              >
                <Phone size={14} className="text-brand-coral" />
                {PHONE_NUMBER}
              </a>

              <button
                onClick={openMenu}
                aria-label="Open menu"
                className={`p-2 text-brand-navy hover:text-brand-coral transition-colors duration-200 ${isScrolled ? "block" : "block lg:hidden"
                  }`}
              >
                <Menu size={22} />
              </button>
            </div>
          </nav>
        </div>

        <Breadcrumb />
      </header>

      <MobileMenu
        isOpen={isMenuOpen}
        openDropdown={openDropdown}
        onClose={closeMenu}
        onToggleDropdown={handleDropdownToggle}
        onNavigate={handleNavigate}
      />
    </>
  )
}