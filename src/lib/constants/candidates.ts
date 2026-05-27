import { User, Target, HeartHandshake, type LucideIcon } from "lucide-react"

export interface CandidateStep {
  icon: LucideIcon
  title: string
  description: string
}

export const CANDIDATE_STEPS: CandidateStep[] = [
  {
    icon: User,
    title: "You tell us what you actually look for",
    description:
      "I'm a React developer who loves remote work. I'm looking for a team where I can grow and work in a flexible environment.",
  },
  {
    icon: Target,
    title: "We match you with the right opportunities",
    description:
      "Our AI (smart.R) + experienced recruiters connect you with roles that truly fit your goals.",
  },
  {
    icon: HeartHandshake,
    title: "We support you through the process",
    description:
      "Fast feedback, honest guidance, and long-term support throughout your journey.",
  },
]
