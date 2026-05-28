"use client"

import { useState } from "react"
import { AppButton } from "@/components/ui/app-button"
import { BackToTop } from "@/components/navigation/back-to-top"
import { CONTENT, type LegalBlock, type Locale } from "./data"

// ─── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Splits text on bracketed placeholders like `[TO BE FILLED: UIC]` and renders
 * them highlighted, so your legal team can spot every gap that needs completing.
 */
function renderText(text: string) {
  const parts = text.split(/(\[[^\]]+\])/g)
  return parts.map((part, i) =>
    /^\[[^\]]+\]$/.test(part) ? (
      <mark
        key={i}
        className="rounded bg-brand-coral/20 px-1 font-semibold text-brand-blue"
        title="Placeholder — to be completed before publishing"
      >
        {part}
      </mark>
    ) : (
      <span key={i}>{part}</span>
    )
  )
}

function Block({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case "subheading":
      return (
        <h3 className="mt-8 mb-3 text-base sm:text-lg font-bold text-brand-navy">
          {renderText(block.text)}
        </h3>
      )
    case "list":
      return (
        <ul className="my-4 space-y-2.5">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="flex gap-3 text-sm sm:text-[15px] leading-relaxed text-brand-navy/70"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-coral" />
              <span>{renderText(item)}</span>
            </li>
          ))}
        </ul>
      )
    case "note":
      return (
        <div className="my-5 flex gap-4 rounded-2xl border border-brand-coral/20 bg-brand-coral/5 px-5 py-4">
          <div className="hidden w-1 self-stretch rounded-full bg-brand-coral sm:block" />
          <p className="text-sm sm:text-[15px] leading-relaxed text-brand-navy/75">
            {renderText(block.text)}
          </p>
        </div>
      )
    default:
      return (
        <p className="my-4 text-sm sm:text-[15px] leading-relaxed text-brand-navy/70">
          {renderText(block.text)}
        </p>
      )
  }
}

function LangToggle({
  locale,
  onChange,
}: {
  locale: Locale
  onChange: (l: Locale) => void
}) {
  return (
    <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 p-1 backdrop-blur-sm">
      {(["en", "bg"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => onChange(l)}
          aria-pressed={locale === l}
          className={`rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] transition-colors ${
            locale === l
              ? "bg-brand-coral text-white"
              : "text-white/50 hover:text-white"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Page() {
  const [locale, setLocale] = useState<Locale>("en")
  const doc = CONTENT[locale]

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative w-full bg-brand-navy overflow-hidden">
        {/* Coral glow blobs */}
        <div className="absolute -bottom-32 -left-32 w-120 h-120 rounded-full bg-brand-coral/20 blur-[120px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[320px] h-80 rounded-full bg-brand-coral/8 blur-[100px] pointer-events-none" />

        {/* Watermark */}
        <div
          aria-hidden
          className="absolute bottom-0 right-5 sm:right-10 xl:right-16 text-[18vw] font-bold uppercase leading-none tracking-tighter text-white/3 select-none pointer-events-none"
        >
          {doc.eyebrow}
        </div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-10 xl:px-16 pt-36 pb-16 lg:pb-24 w-full mt-20">
          {/* Eyebrow + language toggle */}
          <div className="mb-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="block h-px w-12 bg-brand-coral" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-brand-coral">
                {doc.eyebrow}
              </span>
            </div>
            <LangToggle locale={locale} onChange={setLocale} />
          </div>

          <h1 className="mb-6 max-w-4xl text-[clamp(2.5rem,8vw,6rem)] font-bold uppercase leading-[0.9] tracking-tight text-white">
            {doc.title}
          </h1>

          <p className="mb-8 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed text-white/55">
            {renderText(doc.intro)}
          </p>

          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30">
              {doc.lastUpdatedLabel}
            </span>
            <span className="font-mono text-xs text-brand-coral">
              {renderText(doc.lastUpdated)}
            </span>
          </div>
        </div>
      </section>

      {/* ── CONTENT ───────────────────────────────────────────────────────── */}
      <section className="relative w-full bg-brand-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 xl:px-16 py-16 lg:py-24">
          <div className="grid items-start gap-10 lg:grid-cols-[260px_1fr] xl:gap-16">
            {/* Sticky table of contents (desktop) */}
            <aside className="sticky top-28 hidden lg:block">
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-brand-navy/40">
                {doc.tocLabel}
              </p>
              <nav className="flex flex-col">
                {doc.sections.map((s, i) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="group -ml-px flex items-baseline gap-3 border-l border-brand-navy/10 py-2 pl-4 transition-colors hover:border-brand-coral"
                  >
                    <span className="shrink-0 font-mono text-[10px] text-brand-coral/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[13px] leading-snug text-brand-navy/55 transition-colors group-hover:text-brand-navy">
                      {s.title}
                    </span>
                  </a>
                ))}
              </nav>
            </aside>

            {/* Sections */}
            <div className="min-w-0 max-w-3xl">
              {doc.sections.map((s, i) => (
                <div key={s.id} id={s.id} className="mb-12 scroll-mt-28 lg:mb-16">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="font-mono text-[11px] text-brand-coral">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="block h-px w-8 bg-brand-coral" />
                  </div>
                  <h2 className="mb-4 text-xl font-bold tracking-tight text-brand-navy sm:text-2xl">
                    {s.title}
                  </h2>
                  {s.blocks.map((b, j) => (
                    <Block key={j} block={b} />
                  ))}
                </div>
              ))}

              {/* Closing CTA */}
              <div className="mt-4 flex flex-col gap-5 rounded-3xl bg-brand-navy p-8 lg:p-10">
                <p className="max-w-xl text-sm sm:text-base leading-relaxed text-white/70">
                  {renderText(doc.cta.text)}
                </p>
                <div>
                  <AppButton href={doc.cta.href} icon="arrow" className="sm:w-auto">
                    {doc.cta.buttonLabel}
                  </AppButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BackToTop hideOnMobile />
    </>
  )
}
