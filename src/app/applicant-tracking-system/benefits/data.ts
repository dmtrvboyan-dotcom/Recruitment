import type { Metadata } from "next"
import type { LucideIcon } from "lucide-react"
import {
  BarChart3,
  Clock,
  TrendingUp,
  Star,
} from "lucide-react"


export interface Benefit {
  icon: LucideIcon
  title: string
  description: string
  stat?: string
}




export const benefitsData = {
  tagline: "Hire better",
  title: "Why Smart.R",
  subtitle: "Enhance your candidate experience with seamless communication.",
  items: [
    {
      icon: Clock,
      title: "Save Time",
      description:
        "Reduce time-to-hire by up to 50% with automated workflows and AI-powered candidate matching.",
      stat: "50%",
    },
    {
      icon: TrendingUp,
      title: "Reduce Bottlenecks",
      description:
        "Identify and eliminate inefficiencies in your recruitment process with real-time analytics.",
      stat: "3x",
    },
    {
      icon: Star,
      title: "Better Candidate Experience",
      description:
        "Keep candidates engaged with timely updates and a seamless, professional application process.",
      stat: "95%",
    },
    {
      icon: BarChart3,
      title: "Gain Visibility",
      description:
        "Get complete transparency into your recruitment pipeline with comprehensive reporting.",
      stat: "100%",
    },
  ] as Benefit[],
}
