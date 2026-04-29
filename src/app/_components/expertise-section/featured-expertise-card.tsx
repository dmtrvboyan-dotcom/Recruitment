import Link from "next/link"
import { EXPERTISE_FEATURED_AREA } from "@/lib/constants/expertise"
import { TAG_ICON_MAP } from "./tag-icon-map"
import { LearnMoreRow } from "./learn-more-row"

export function FeaturedExpertiseCard() {
  const { title, description, href, icon: Icon, tags, cta } = EXPERTISE_FEATURED_AREA

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-4 sm:p-8 md:p-10 bg-[#f5f5f5] rounded-3xl border border-slate-100 hover:border-[#78B6D9]/30 hover:shadow-xl transition-all duration-300 col-span-1 lg:col-span-3 flex flex-col"
    >
      <div className="mb-6">
        <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#085689]/5 text-[#085689] group-hover:bg-[#78B6D9] group-hover:text-white transition-colors">
          <Icon className="w-9 h-9" />
        </div>
      </div>

      <h3 className="font-semibold text-2xl md:text-3xl text-black mb-4 leading-tight group-hover:text-[#085689] transition-colors">
        {title}
      </h3>

      <p className="text-slate-600 text-[15px] md:text-base leading-relaxed mb-10 flex-1">
        {description}
      </p>

      {/* Industry tags */}
      <div className="flex flex-wrap gap-3 mb-10">
        {tags.map((tag) => {
          const TagIcon = TAG_ICON_MAP[tag] ?? TAG_ICON_MAP._fallback
          return (
            <div
              key={tag}
              className="flex items-center gap-2 text-xs font-medium px-4 py-2.5 bg-white rounded-full border border-slate-200 text-slate-700 hover:bg-[#085689]/5 transition-colors"
            >
              <TagIcon className="w-4 h-4 text-[#085689]" />
              {tag}
            </div>
          )
        })}
      </div>

      <LearnMoreRow label={cta ?? "Learn more about our reach"} />
    </Link>
  )
}
