import { memo } from "react"
import Image from "next/image"
import { RiLinkedinBoxFill } from "react-icons/ri"
import type { TeamMember } from "@/lib/constants/team"

interface TeamMemberCardProps {
  member: TeamMember
}

export const TeamMemberCard = memo(function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="group flex flex-col items-center">
      {/* Circle Container */}
      <div className="relative mb-6">
        {/* The Outer "Mess-free" Ring */}
        <div className="relative w-[110px] h-[110px] lg:w-[140px] lg:h-[140px] p-1 rounded-full border border-brand-navy/5 transition-all duration-500 group-hover:border-brand-coral/30">
          
          {/* The Image Wrapper - Clips Everything into a Circle */}
          <div className="relative w-full h-full rounded-full overflow-hidden border-[3px] border-white shadow-sm ring-1 ring-brand-navy/10 transition-all duration-500 group-hover:ring-brand-coral">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </div>
        
        {/* LinkedIn Badge */}
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-1 right-1 bg-brand-white text-brand-linkdin p-1.5 rounded-full shadow-lg border border-brand-navy/5 hover:bg-brand-coral hover:text-white transition-all duration-300 hover:scale-110 z-10"
          >
            <RiLinkedinBoxFill size={22} />
          </a>
        )}
      </div>

      {/* Content */}
      <div className="text-center px-2">
        <p className="font-bold text-brand-navy tracking-tight text-base">{member.name}</p>
      
        <p className="text-brand-navy/50 text-xs italic leading-relaxed max-w-[180px] line-clamp-3">
          &quot;{member.quote}&quot;
        </p>
      </div>
    </div>
  )
})