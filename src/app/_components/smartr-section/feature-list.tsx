import { RiCheckLine } from "react-icons/ri"

const FEATURES = [
  "Candidates in one place",
  "Customizable workflows",
  "Team collaboration",
  "Analytics & reporting",
  "Ready for any domain",
  "Hiring manager tools",
  "GDPR Ready",
  "In BG, EN, DE, ES, RU",
  "Smart.R AI insights",
]

export function FeatureList() {
  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2 text-xs sm:text-sm text-gray-600 font-medium max-w-3xl mx-auto">
      {FEATURES.map((feature) => (
        <div
          key={feature}
          className="flex items-center justify-center sm:justify-start gap-2 text-center sm:text-left"
        >
          <RiCheckLine className="text-[#085689] shrink-0" size={16} />
          <span>{feature}</span>
        </div>
      ))}
    </div>
  )
}
