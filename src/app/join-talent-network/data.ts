import {
  FileText,
  ScanSearch,
  Handshake,
  Clock4,
  ShieldCheck,
  Sparkles,
  Globe2,
  Wallet,
  type LucideIcon,
} from "lucide-react"

export interface HowItWorksStep {
  id: string
  number: string
  phase: string
  heading: string
  body: string
  icon: LucideIcon
}

export const HOW_IT_WORKS: HowItWorksStep[] = [
  {
    id: "apply",
    number: "01",
    phase: "Step One",
    heading: "Apply",
    body: "Submit your profile in under 1 minute. Share your stack, your rate, and how you want to work — full-time, contract, freelance, or remote.",
    icon: FileText,
  },
  {
    id: "review",
    number: "02",
    phase: "Step Two",
    heading: "Get Reviewed",
    body: "A senior recruiter — not a bot — reviews your application within 48 hours. We assess skills, experience, and what makes you a strong fit.",
    icon: ScanSearch,
  },
  {
    id: "match",
    number: "03",
    phase: "Step Three",
    heading: "Get Matched",
    body: "When a role aligns with your profile, we introduce you directly to the hiring team. No spam, no irrelevant pitches — only opportunities worth your time.",
    icon: Handshake,
  },
]

export interface Benefit {
  icon: LucideIcon
  title: string
  body: string
}

export const APPLICATION_BENEFITS: Benefit[] = [
  {
    icon: Clock4,
    title: "1 minute to apply",
    body: "Short form. No essays. We respect your time.",
  },
  {
    icon: ShieldCheck,
    title: "Confidential by default",
    body: "Your profile is never shared without your explicit approval.",
  },
  // {
  //   icon: Globe2,
  //   title: "Remote-first opportunities",
  //   body: "Work with companies hiring across Europe, the UK, and the US.",
  // },
  // {
  //   icon: Wallet,
  //   title: "Transparent rates",
  //   body: "You set your rate. We'll only contact you about roles inside it.",
  // },
]

export const TECH_STACKS: string[] = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Vue",
  "Angular",
  "Node.js",
  "Python",
  "Django",
  "Go",
  "Rust",
  "Java",
  "Kotlin",
  "Swift",
  "C#/.NET",
  "PHP",
  "Ruby on Rails",
  "AWS",
  "GCP",
  "Azure",
  "DevOps",
  "Kubernetes",
  "Docker",
  "Data Engineering",
  "ML / AI",
  "iOS",
  "Android",
  "Flutter",
  "React Native",
  "QA / Test",
  "Cybersecurity",
  "Solidity",
]

export const AVAILABILITY_OPTIONS: { value: string; label: string }[] = [
  { value: "immediately", label: "Immediately" },
  { value: "2-weeks", label: "Within 2 weeks" },
  { value: "1-month", label: "Within 1 month" },
  { value: "exploring", label: "Just exploring" },
]

export const REMOTE_OPTIONS: { value: string; label: string }[] = [
  { value: "remote-only", label: "Remote only" },
  { value: "hybrid", label: "Hybrid" },
  { value: "onsite", label: "On-site" },
  { value: "flexible", label: "Flexible" },
]

export interface FAQItem {
  q: string
  a: string
}

export const FAQS: FAQItem[] = [
  {
    q: "Is joining the network free?",
    a: "Yes — completely. Candidates never pay anything. Our fees are paid by the hiring companies, only when a successful placement is made.",
  },
  {
    q: "How long until I hear back?",
    a: "A senior recruiter reviews every application within 48 hours. If your profile matches roles we are currently working on, we'll reach out directly. Otherwise, you stay in the network and we'll contact you when something aligned opens up.",
  },
  {
    q: "What kinds of roles do you have?",
    a: "We work on full-time, contract, freelance, and remote positions across the full stack — frontend, backend, mobile, DevOps, data, ML, security, and leadership roles from senior IC through CTO.",
  },
  {
    q: "Will my current employer find out?",
    a: "No. Your profile is treated as strictly confidential. We never share your details, resume, or even your name with a company until you explicitly approve a specific introduction.",
  },
  {
    q: "Can I update my profile later?",
    a: "Absolutely. Once you're in the network, you can refresh your stack, rate, availability, or preferences at any time — just reply to our welcome email or reach out to your recruiter.",
  },
  {
    q: "Do you work with junior developers?",
    a: "Most of our open roles target mid-level through staff/principal engineers. We do occasionally place strong juniors, but mid-level and above is where you'll see the most activity from us.",
  },
  {
    q: "Which countries do you operate in?",
    a: "We place candidates with companies across the EU, the UK, and North America. Many roles are fully remote, but we also support relocation and hybrid setups depending on the role.",
  },
]

export interface TrustStat {
  value: string
  suffix?: string
  label: string
}

export const TRUST_STATS: TrustStat[] = [
  { value: "100", suffix: "hrs", label: "Reviewed by humans" },
  { value: "650+", label: "Placements made" },
  { value: "100%", label: "Confidential" },
  { value: "0", suffix: "fees", label: "Free for candidates" },
]
