import { RiCheckLine } from "react-icons/ri"
import { COMPANY_VALUES } from "@/lib/constants/team"
import { PhotoGallery } from "./photo-gallery"
import { TeamCarousel } from "./team-carousel"
import { ValueItem } from "./value-item"

const STATS = [
  "15+ years IT Recruitment Experience",
  "Average time 2–10 days to present candidates",
]

const VALUES_LEFT  = COMPANY_VALUES.slice(0, 2)
const VALUES_RIGHT = COMPANY_VALUES.slice(2)

export function MeetTheTeam() {
  return (
    <section
      id="about"
      className="py-14 sm:py-20 lg:py-28 lg:pb-[120px] md:pb-[50px] bg-linear-to-b from-[#f9f9f9] to-[#085689]/12"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-md font-medium text-[#085689] uppercase tracking-wider mb-4">
            Meet the Team
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-6">
            Nice to meet you
          </h2>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6 text-xs sm:text-sm text-gray-600 font-medium">
            {STATS.map((stat) => (
              <div key={stat} className="flex items-center gap-2">
                <RiCheckLine className="text-[#085689]" size={16} />
                <span>{stat}</span>
              </div>
            ))}
          </div>
        </div>

        <PhotoGallery />

        {/* Company values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-8 lg:gap-y-10 max-w-4xl mx-auto mb-12">
          <div className="space-y-6">
            {VALUES_LEFT.map((value, i) => (
              <ValueItem key={i} title={value.title} description={value.description} />
            ))}
          </div>
          <div className="space-y-6">
            {VALUES_RIGHT.map((value, i) => (
              <ValueItem key={i} title={value.title} description={value.description} />
            ))}
          </div>
        </div>

        <TeamCarousel />
      </div>
    </section>
  )
}