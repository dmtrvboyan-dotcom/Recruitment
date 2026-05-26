import { memo } from "react"
import Image from "next/image"
import Link from "next/link"
import { Linkedin } from "lucide-react"
import type { TeamMember } from "@/lib/constants/team"

interface TeamMemberCardProps {
  member: TeamMember
  index?: number
  showQuote?: boolean
}

export const TeamMemberCard = memo(function TeamMemberCard({
  member,
  index,
  showQuote = true,
}: TeamMemberCardProps) {
  const number =
    index !== undefined ? String(index + 1).padStart(2, "0") : undefined

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-brand-navy border border-brand-white/10 hover:border-brand-coral/50 transition-colors duration-300 flex flex-col">

      <div className="relative aspect-3/3 overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-brand-navy via-brand-navy/30 to-brand-navy/5" />

        {number && (
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-brand-coral">
              {number}
            </span>
            <div className="h-px w-4 bg-brand-coral/50" />
          </div>
        )}

        {member.linkedin && (
          <Link
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${member.name}'s LinkedIn profile`}
            onClick={(e) => e.stopPropagation()}
            className="absolute top-4 right-4 w-8 h-8 rounded-full backdrop-blur-sm border border-brand-white/20 flex items-center justify-center text-brand-white bg-brand-coral animate-linkedin-glow will-change-transform"
          >
            <Linkedin size={14} />
          </Link>
        )}

        <div className="absolute inset-x-4 bottom-4">
          <p className="font-bold uppercase tracking-[-0.01em] leading-tight text-brand-white text-sm sm:text-base lg:text-lg">
            {member.name}
          </p>
        </div>
      </div>

      {showQuote && member.quote && (
        <div className="flex gap-3 p-4">
          <div className="w-0.5 bg-brand-coral/40 shrink-0" />
          <p className="text-brand-white/50 text-xs italic leading-relaxed line-clamp-3 flex-1">
            &ldquo;{member.quote}&rdquo;
          </p>
        </div>
      )}

      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-brand-coral group-hover:w-full transition-all duration-500" />
    </div>
  )
})