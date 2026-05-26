import type { Metadata } from "next"
import type { LucideIcon } from "lucide-react"
import {
  Globe,
  Mail,
  Puzzle,
  Smartphone,
} from "lucide-react"

export interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

export const integrationsData = {
  tagline: "INTEGRATIONS",
  title: "Works With Your Stack",
  subtitle: "Connect Smart.R with the tools you already use",
  items: [
    {
      icon: Globe,
      title: "Job Boards",
      description: "Post to LinkedIn, Indeed, Glassdoor, and 50+ job boards with one click.",
    },
    {
      icon: Mail,
      title: "Email & Calendar",
      description: "Sync with Gmail, Outlook, Google Calendar, and Microsoft 365.",
    },
    {
      icon: Puzzle,
      title: "HR Systems",
      description: "Connect with your HRIS, payroll, and onboarding tools via API.",
    },
    {
      icon: Smartphone,
      title: "Communication",
      description: "Integrate with Slack, Teams, and other communication platforms.",
    },
  ] as Feature[],
}