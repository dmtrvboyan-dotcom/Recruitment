"use client"

import * as React from "react"
import { X } from "lucide-react"
import { useClickOutside } from "@/lib/hooks"

export interface TagInputProps {
  value: string[]
  onChange: (tags: string[]) => void
  suggestions?: string[]
  maxTags?: number
  placeholder?: string
  className?: string
}

const normalize = (s: string) => s.trim().toLowerCase()

export function TagInput({
  value,
  onChange,
  suggestions = [],
  maxTags = 5,
  placeholder = "Add focus areas...",
  className = "",
}: TagInputProps) {
  const [inputValue, setInputValue] = React.useState("")
  const [isOpen, setIsOpen] = React.useState(false)
  const [activeIdx, setActiveIdx] = React.useState(-1)

  const inputRef = React.useRef<HTMLInputElement>(null)
  const containerRef = React.useRef<HTMLDivElement>(null)

  // Filtering logic for the dropdown
  const filtered = React.useMemo(() => {
    const q = normalize(inputValue)
    return suggestions.filter(
      (s) => normalize(s).includes(q) && !value.includes(normalize(s))
    )
  }, [inputValue, suggestions, value])

  const normalizedInput = normalize(inputValue)
  const canCreate =
    normalizedInput.length > 0 &&
    !suggestions.map(normalize).includes(normalizedInput) &&
    !value.includes(normalizedInput)

  const dropdownItems = [
    ...filtered.map((s) => ({ type: "suggestion" as const, label: s })),
    ...(canCreate ? [{ type: "create" as const, label: normalizedInput }] : []),
  ]

  const addTag = (tag: string) => {
    const norm = normalize(tag)
    if (!norm || value.includes(norm) || value.length >= maxTags) return
    onChange([...value, norm])
    setInputValue("")
    setActiveIdx(-1)
    setIsOpen(true)
    inputRef.current?.focus()
  }

  const removeTag = (tag: string) => {
    onChange(value.filter((t) => t !== tag))
    inputRef.current?.focus()
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      if (activeIdx >= 0 && dropdownItems[activeIdx]) {
        addTag(dropdownItems[activeIdx].label)
      } else if (normalizedInput) {
        addTag(normalizedInput)
      }
    } else if (e.key === "Backspace" && inputValue === "" && value.length > 0) {
      removeTag(value[value.length - 1])
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      setActiveIdx((i) => Math.min(i + 1, dropdownItems.length - 1))
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setActiveIdx((i) => Math.max(i - 1, -1))
    } else if (e.key === "Escape") {
      setIsOpen(false)
      setActiveIdx(-1)
    }
  }

  // Handle clicking outside to close
  // React.useEffect(() => {
  //   const handler = (e: MouseEvent) => {
  //     if (!containerRef.current?.contains(e.target as Node)) {
  //       setIsOpen(false)
  //       setActiveIdx(-1)
  //     }
  //   }
  //   document.addEventListener("mousedown", handler)
  //   return () => document.removeEventListener("mousedown", handler)
  // }, [])

  useClickOutside(containerRef, () => {
    setIsOpen(false)
    setActiveIdx(-1)
  })

  const atMax = value.length >= maxTags

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div
        className={`flex flex-wrap items-center gap-2 min-h-[52px] rounded-xl border border-brand-navy/10 bg-brand-bg/50 px-4 py-2 text-sm transition-all focus-within:ring-2 focus-within:ring-brand-blue/20 focus-within:bg-white focus-within:border-brand-blue ${atMax ? "opacity-60 cursor-not-allowed" : "cursor-text"
          }`}
        onClick={() => {
          if (!atMax) {
            inputRef.current?.focus()
            setIsOpen(true)
          }
        }}
        
      >
        {/* Render Tags */}
        {value.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1.5 rounded-lg bg-brand-blue/10 border border-brand-blue/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-blue select-none animate-in fade-in zoom-in-95 duration-200"
          >
            {tag}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                removeTag(tag)
              }}
              className="flex items-center justify-center hover:text-brand-coral transition-colors"
              aria-label={`Remove ${tag}`}
            >
              <X className="w-3 h-3" />
            </button>
          </span>
        ))}

        {/* Input Field */}
        {!atMax && (
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value)
              setIsOpen(true)
              setActiveIdx(-1)
            }}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsOpen(true)}
            placeholder={value.length === 0 ? placeholder : ""}
            className="flex-1 min-w-[120px] bg-transparent outline-none placeholder:text-brand-navy/30 text-sm font-medium"
            aria-label="Tag input"
            aria-expanded={isOpen}
            aria-autocomplete="list"
          />
        )}

        {/* Counter */}
        <span
          className={`ml-auto text-[10px] font-bold tracking-tighter tabular-nums shrink-0 ${atMax ? "text-brand-coral" : "text-brand-navy/30"
            }`}
        >
          {value.length}/{maxTags}
        </span>
      </div>

      {/* Dropdown Menu */}
      {isOpen && dropdownItems.length > 0 && (
        <div
          className="absolute z-50 mt-2 w-full rounded-2xl border border-brand-navy/5 bg-white shadow-2xl overflow-hidden py-2 animate-in fade-in zoom-in-95 duration-150"
          role="listbox"
        >
          {dropdownItems.map((item, idx) => (
            <button
              key={item.label}
              type="button"
              role="option"
              aria-selected={activeIdx === idx}
              onMouseEnter={() => setActiveIdx(idx)}
              onMouseDown={(e) => {
                e.preventDefault()
                addTag(item.label)
              }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-left text-[11px] font-bold uppercase tracking-widest transition-colors ${activeIdx === idx
                  ? "bg-brand-blue/5 text-brand-blue"
                  : "text-brand-navy/60 hover:bg-brand-bg"
                }`}
            >
              {item.type === "create" ? (
                <>
                  <span className="text-[9px] bg-brand-coral/10 text-brand-coral px-1.5 py-0.5 rounded uppercase">
                    New
                  </span>
                  <span>Add "{item.label}"</span>
                </>
              ) : (
                <>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue/40 shrink-0" />
                  {item.label}
                </>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Helper Text */}
      <p className="mt-2 text-[10px] text-brand-navy/30 font-medium uppercase tracking-tight">
        Press <kbd className="font-mono text-brand-navy/50 px-1">Enter</kbd> to
        add · <kbd className="font-mono text-brand-navy/50 px-1">Back</kbd> to
        remove
      </p>
    </div>
  )
}