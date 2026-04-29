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
      <div className="relative w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] lg:w-[150px] lg:h-[150px]">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover border-4 border-[#085689] rounded-full transition-all duration-500 group-hover:border-[#78B6D9]"
        />
      </div>

      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#085689] hover:text-[#78B6D9] transition-colors duration-200 mt-3"
        >
          <RiLinkedinBoxFill size={28} />
        </a>
      )}

      <div className="text-center mt-2 px-2">
        <p className="font-semibold text-sm sm:text-base text-gray-900">{member.name}</p>
        <p className="text-gray-600 text-xs sm:text-sm italic mt-1 line-clamp-3">
          &quot;{member.quote}&quot;
        </p>
      </div>
    </div>
  )
})
