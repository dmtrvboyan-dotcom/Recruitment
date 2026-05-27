import {
  Users,
  SlidersHorizontal,
  Search,
  Send,
  CalendarClock,
  Trophy,
  type LucideIcon,
} from "lucide-react"

export type ProcessStep = {
  id: string
  phase: string
  heading: string
  body: string
  icon: LucideIcon
  ctaAfter?: {
    text: string
    href: string
  }
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "intake",
    phase: "Phase 01",
    heading: "Introductory Meeting",
    body: "We start every engagement with a deep-dive session - learning what you do, who fits your culture, what you absolutely won't tolerate, and how you prefer to operate. No templates, no assumptions.",
    icon: Users,
  },
  {
    id: "criteria",
    phase: "Phase 02",
    heading: "Define Your Criteria",
    body: "Beyond the job description, we capture every nuance: compensation bands, location preferences, seniority signals, deal-breakers. Your standards become our filter before we search a single profile.",
    icon: SlidersHorizontal,
  
  },
  {
    id: "search",
    phase: "Phase 03",
    heading: "Targeted Search",
    body: "We tap our network of 31,000+ curated tech professionals and apply your criteria rigorously. Volume is never the goal - relevance is. Only candidates who genuinely match make the cut.",
    icon: Search,
  },
  {
    id: "submission",
    phase: "Phase 04",
    heading: "Curated Shortlist",
    body: "You receive a focused shortlist with our honest assessment of each candidate. You decide who moves forward; we take care of the ones who don't - with clear, respectful communication on every side.",
    icon: Send,
  },
  {
    id: "coordination",
    phase: "Phase 05",
    heading: "Interview Coordination",
    body: "We schedule and manage the process - keeping touch with candidates, monitoring competing offers, representing your brand honestly, and keeping everything moving so no momentum is lost.",
    icon: CalendarClock,
  },
  {
    id: "close",
    phase: "Phase 06",
    heading: "Offer & Onboard",
    body: "When you make an offer and the candidate accepts, the role is closed. Our fee is due only on a successful placement. No hire, no invoice - and we restart the process if anything falls through.",
    icon: Trophy,
    ctaAfter: {
      text: "Ready to start the process?",
      href: "/contacts",
    },
  },
]

export const WHY_US = [
  "Access to 31,000+ curated tech professionals",
  "Flexible engagement models that scale with you",
  "Big enough to deliver at scale, small enough to care",
  "Market insights & salary benchmarking included",
  "Honest, unfiltered feedback from the market",
  "Your role is never deprioritised",
  "Same-day or next-morning responses - always",
]
