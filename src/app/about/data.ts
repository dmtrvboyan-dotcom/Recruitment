import {
  GraduationCap,
  UserCheck,
  Zap,
  Headphones,
  TrendingUp,
  Cpu,
  ShieldCheck,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

export const TEAM_PHOTO = "/uploaded/team.jpg"

export const ABOUT_CONTENT = {
  tagline: "About Us",
  title: "OUR TEAM",
  subtitle:
    "A team of specialists who know tech hiring from both sides of the table. No fluff, no hand-waving - just results.",
}

export interface Pillar {
  id: number
  heading: string
  body: string
  icon: LucideIcon
}

export const PILLARS: Pillar[] = [
  {
    id: 1,
    icon: GraduationCap,
    heading: "9-Month Recruiter Training",
    body: "Every recruiter goes through a rigorous nine-month programme before working with a client. They learn the tech, the market, and the process - so they show up prepared, not guessing.",
  },
  {
    id: 2,
    icon: UserCheck,
    heading: "Dedicated Account Manager",
    body: "Every client gets one person who owns their account end-to-end. No handoffs, no confusion - one point of contact who knows your business and keeps things moving.",
  },
  {
    id: 3,
    icon: Zap,
    heading: "Deep Technical Training",
    body: "Recruitment without technical literacy is just guesswork. The team invests heavily in ongoing technical education to stay sharp on stacks, roles, and what actually matters in a candidate.",
  },
  {
    id: 4,
    icon: Headphones,
    heading: "We Join Hiring Calls",
    body: "The team joins and shadows live hiring calls. That means firsthand understanding of what clients actually need - not a brief on paper, but a real conversation heard directly.",
  },
  {
    id: 5,
    icon: TrendingUp,
    heading: "Always Following the Market",
    body: "The IT market moves fast. Salaries shift, stacks evolve, talent availability changes. The team tracks it constantly to give clients and candidates advice grounded in today's reality.",
  },
  {
    id: 6,
    icon: Cpu,
    heading: "Built Our Own ATS",
    body: "Off-the-shelf tools weren't enough, so we built Smart.R - our own ATS/CRM system designed around how tech hiring actually works. It makes the process faster, more transparent, and better for everyone.",
  },
  {
    id: 7,
    icon: ShieldCheck,
    heading: "Professionalism Is Non-Negotiable",
    body: "Transparency, integrity, and respect aren't values on a wall - they're how every deal gets done. No templates, no rehearsed pitches. Just honest conversations and people who mean what they say.",
  },
]
