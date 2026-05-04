"use client"

import Link from "next/link"
import { TAG_ICON_MAP } from "./tag-icon-map"
import { LearnMoreRow } from "./learn-more-row"

export function FeaturedExpertiseCard({ data }: { data: any }) {
  const { title, description, href, icon: Icon, tags, cta } = data

  return (
    <Link
      href={href}
      target="_blank"
      className="group block p-8 md:p-12 bg-brand-navy rounded-3xl border border-brand-navy hover:shadow-2xl transition-all duration-300 col-span-1 lg:col-span-3 flex flex-col lg:flex-row lg:items-center gap-10"
    >
      <div className="flex-1">
        <div className="mb-6">
          <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white/10 text-brand-white group-hover:bg-brand-coral transition-colors">
            <Icon className="w-8 h-8" />
          </div>
        </div>
        <h3 className="font-bold text-2xl md:text-3xl text-brand-white mb-4 tracking-tight">{title}</h3>
        <p className="text-brand-white/70 text-base leading-relaxed mb-8">{description}</p>
        <LearnMoreRow label={cta ?? "Learn more about our reach"} className="text-brand-coral" />
      </div>

      <div className="flex flex-wrap gap-2 lg:max-w-md self-start">
        {tags.map((tag: string) => {
          const TagIcon = TAG_ICON_MAP[tag]?.icon ?? TAG_ICON_MAP._fallback.icon
          return (
            <div key={tag} className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider px-4 py-2.5 bg-brand-white/5 rounded-full border border-white/10 text-brand-white/80 transition-colors hover:bg-brand-white/10">
              <TagIcon className="w-3.5 h-3.5 text-brand-coral" />
              {tag}
            </div>
          )
        })}
      </div>
    </Link>
  )
}