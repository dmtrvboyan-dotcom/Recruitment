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
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 text-xs sm:text-sm text-brand-navy/70 font-semibold max-w-4xl mx-auto">
      {FEATURES.map((feature) => (
        <div
          key={feature}
          className="flex items-center justify-center sm:justify-start gap-3 group"
        >
          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-blue/10 flex items-center justify-center group-hover:bg-brand-blue transition-colors duration-300">
            <RiCheckLine className="text-brand-blue group-hover:text-white transition-colors duration-300" size={14} />
          </div>
          <span className="tracking-tight">{feature}</span>
        </div>
      ))}
    </div>
  )
}