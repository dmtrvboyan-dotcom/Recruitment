import { Shield, Zap, Users } from "lucide-react"

// ── Tech stack preset tags ───────────────────────────────────────────
export const TECH_STACKS = [
  "React",
  "Next.js",
  "Vue",
  "Angular",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Python",
  "Java",
  "Go",
  ".NET / C#",
  "PHP",
  "Ruby",
  "Rust",
  "Swift",
  "Kotlin",
  "Flutter",
  "React Native",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Redis",
  "GraphQL",
  "REST",
  "Docker",
  "Kubernetes",
  "AWS",
  "GCP",
  "Azure",
  "Terraform",
]

// ── Remote preference options ────────────────────────────────────────
export const REMOTE_OPTIONS = [
  { value: "remote-only", label: "Remote only" },
  { value: "hybrid", label: "Hybrid" },
  { value: "on-site", label: "On-site" },
  { value: "flexible", label: "Flexible / Open to discuss" },
]

// ── Availability options ─────────────────────────────────────────────
export const AVAILABILITY_OPTIONS = [
  { value: "asap", label: "ASAP" },
  { value: "2-weeks", label: "2 weeks" },
  { value: "1-month", label: "1 month" },
  { value: "2-months", label: "2 months" },
  { value: "3-months-plus", label: "3+ months" },
]

// ── Aside benefit cards ──────────────────────────────────────────────
export const APPLICATION_BENEFITS = [
  {
    icon: Shield,
    title: "Confidential by default",
    body: "Your profile is never shared without your explicit consent.",
  },
  {
    icon: Zap,
    title: "Fast-tracked review",
    body: "A senior recruiter reviews every submission within 48 hours.",
  },
  {
    icon: Users,
    title: "Matched to real roles",
    body: "We only reach out when there's a genuine fit — no generic spam.",
  },
]