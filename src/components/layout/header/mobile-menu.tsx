"use client"

import { Mail, Phone, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NAV_ITEMS } from "@/lib/constants/navigation"
import { EMAIL_HREF, PHONE_HREF, PHONE_NUMBER } from "./constants"
import { MobileDropdown } from "./mobile-dropdown"
import { MobileMegaMenu } from "./mobile-mega-menu"

interface MobileMenuProps {
  isOpen: boolean
  openDropdown: string | null
  onClose: () => void
  onToggleDropdown: (label: string) => void
  onNavigate: (href: string, openInNewTab?: boolean) => void
}

export function MobileMenu({
  isOpen,
  openDropdown,
  onClose,
  onToggleDropdown,
  onNavigate,
}: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 z-[999] transition-all duration-500 ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
      aria-hidden={!isOpen}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={`absolute top-0 right-0 h-full w-full lg:w-[480px] shadow-2xl transform transition-transform duration-500 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ background: "linear-gradient(160deg, #1A1A2E 0%, #2C3E50 100%)" }}
        role="dialog"
        aria-modal="true"
        aria-label="Main menu"
      >
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-coral" />

        <button
          onClick={onClose}
          aria-label="Close menu"
          className="absolute top-7 right-7 text-white/60 hover:text-white transition-colors duration-200 z-10"
        >
          <X size={22} strokeWidth={2} />
        </button>

        <div className="flex flex-col h-full overflow-y-auto pt-20 pb-10 px-8">
          <div className="flex flex-col gap-1 text-base text-white">
            {NAV_ITEMS.map((item) => {
              if (item.hasMegaMenu) {
                return (
                  <MobileMegaMenu
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
                  <MobileDropdown
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
                  className="py-4 text-left text-base font-medium tracking-widest uppercase text-white/90 hover:text-brand-coral transition-colors border-b border-white/10 last:border-none cursor-pointer"
                >
                  {item.label}
                </button>
              )
            })}
          </div>

          <div className="mt-auto pt-10 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <a
                href={PHONE_HREF}
                aria-label="Call us"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-white/20 hover:border-brand-coral transition-colors">
                  <Phone size={14} />
                </span>
                <span>{PHONE_NUMBER}</span>
              </a>

              <a
                href={EMAIL_HREF}
                aria-label="Send us an email"
                className="ml-auto flex items-center justify-center w-8 h-8 rounded-full border border-white/20 text-white/60 hover:text-white hover:border-brand-coral transition-colors"
              >
                <Mail size={14} />
              </a>
            </div>

            <Button
              onClick={() => onNavigate("#contact")}
              className="w-full bg-brand-coral hover:bg-brand-coral-hover text-white rounded-3xl py-6 text-sm font-medium tracking-widest uppercase cursor-pointer transition-colors duration-200"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
