"use client"

import * as React from "react"
import { X } from "lucide-react"

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
  placeholder = "Add a tag…",
  className = "",
}: TagInputProps) {
  const [inputValue, setInputValue] = React.useState("")
  const [isOpen, setIsOpen] = React.useState(false)
  const [activeIdx, setActiveIdx] = React.useState(-1)

  const inputRef = React.useRef<HTMLInputElement>(null)
  const containerRef = React.useRef<HTMLDivElement>(null)

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
    setIsOpen(false)
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

  React.useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        setIsOpen(false)
        setActiveIdx(-1)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  const atMax = value.length >= maxTags

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div
        className={`flex flex-wrap items-center gap-1.5 min-h-[44px] rounded-md border border-input bg-background px-3 py-2 text-sm transition-shadow focus-within:ring-2 focus-within:ring-[#085689]/40 focus-within:border-[#085689] ${atMax ? "opacity-60 cursor-not-allowed" : "cursor-text"}`}
        onClick={() => !atMax && inputRef.current?.focus()}
      >
        {value.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1 rounded-full bg-[#085689]/10 border border-[#085689]/25 px-2.5 py-0.5 text-[12px] font-medium text-[#085689] select-none"
          >
            {tag}
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); removeTag(tag) }}
              className="flex items-center justify-center w-3.5 h-3.5 rounded-full text-[#085689]/60 hover:text-[#085689] hover:bg-[#085689]/20 transition-colors"
              aria-label={`Remove ${tag}`}
            >
              <X className="w-2.5 h-2.5" />
            </button>
          </span>
        ))}

        {!atMax && (
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => { setInputValue(e.target.value); setIsOpen(true); setActiveIdx(-1) }}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsOpen(true)}
            placeholder={value.length === 0 ? placeholder : ""}
            className="flex-1 min-w-[120px] bg-transparent outline-none placeholder:text-muted-foreground text-sm"
            aria-label="Tag input"
            aria-expanded={isOpen}
            aria-autocomplete="list"
          />
        )}

        <span className={`ml-auto text-[11px] tabular-nums shrink-0 ${atMax ? "text-amber-600 font-semibold" : "text-slate-400"}`}>
          {value.length}/{maxTags}
        </span>
      </div>

      {isOpen && dropdownItems.length > 0 && (
        <div
          className="absolute z-50 mt-1 w-full rounded-xl border border-slate-200 bg-white shadow-lg overflow-hidden animate-in fade-in-0 zoom-in-95 duration-100"
          role="listbox"
        >
          {dropdownItems.map((item, idx) => (
            <button
              key={item.label}
              type="button"
              role="option"
              aria-selected={activeIdx === idx}
              onMouseEnter={() => setActiveIdx(idx)}
              onMouseDown={(e) => { e.preventDefault(); addTag(item.label) }}
              className={`w-full flex items-center gap-2.5 px-3 py-2 text-left text-sm transition-colors ${activeIdx === idx ? "bg-[#085689]/8 text-[#085689]" : "text-slate-700 hover:bg-slate-50"}`}
            >
              {item.type === "create" ? (
                <>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#085689]/70 bg-[#085689]/10 px-1.5 py-0.5 rounded">
                    Create
                  </span>
                  <span className="font-medium">&ldquo;{item.label}&rdquo;</span>
                </>
              ) : (
                <>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#085689]/40 shrink-0" />
                  {item.label}
                </>
              )}
            </button>
          ))}
        </div>
      )}

      <p className="mt-1.5 text-[11px] text-slate-400">
        Press <kbd className="font-mono bg-slate-100 border border-slate-200 rounded px-1 py-0.5 text-[10px]">Enter</kbd> to add · <kbd className="font-mono bg-slate-100 border border-slate-200 rounded px-1 py-0.5 text-[10px]">Backspace</kbd> to remove last
      </p>
    </div>
  )
}
