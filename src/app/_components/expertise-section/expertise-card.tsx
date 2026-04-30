"use client"

import { memo } from "react"
import Link from "next/link"
import { LearnMoreRow } from "./learn-more-row"

interface ExpertiseCardProps {
  item: {
    title: string
    description: string
    href: string
    icon: any
  }
  iconColor: string
  iconBg: string
}

export const ExpertiseCard = memo(function ExpertiseCard({
  item,
  iconColor,
  iconBg,
}: ExpertiseCardProps) {
  const Icon = item.icon

  return (
    <Link
      href={item.href}
      target="_blank"
      className="group block p-8 bg-white border border-brand-navy/5 rounded-3xl hover:border-brand-blue/20 hover:shadow-2xl transition-all duration-300 h-full flex flex-col relative overflow-hidden"
    >
      <div className="mb-8">
        <div className={`w-14 h-14 flex items-center justify-center rounded-2xl ${iconBg} ${iconColor} transition-transform duration-300 group-hover:scale-110`}>
          <Icon className="w-7 h-7" strokeWidth={2.5} />
        </div>
      </div>

      <h3 className="font-bold text-xl text-brand-navy mb-3 leading-tight tracking-tight group-hover:text-brand-blue transition-colors">
        {item.title}
      </h3>

      <p className="text-brand-navy/60 text-sm leading-relaxed flex-1">
        {item.description}
      </p>

      <div className="mt-8">
        <LearnMoreRow className={iconColor} />
      </div>
    </Link>
  )
})