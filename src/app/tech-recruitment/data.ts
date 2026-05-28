import {
  Search,
  Users,
  FileCheck,
  Handshake,
  Phone,
  ClipboardList,
  UserCheck,
  CalendarCheck,
} from "lucide-react"

/* ─── Hero ─────────────────────────────────────────────── */

export const HERO_DATA = {
  tagline: "Technical Specialized Recruitment",
  title: "Hiring Across Every",
  subtitle:
    "From software engineering to executive leadership - we help companies hire niche technical talent quickly, across every stack and seniority level.",
  primaryCta: { text: "Hire Tech Talent", href: "/contacts" },
  secondaryCta: { text: "Explore Specializations", href: "#roles" },
  stats: [
    { value: "850+", label: "Hires" },
    { value: "3–10", suffix: "days", label: "To first CV" },
    { value: "8", label: "Specializations" },
  ],
}

/* ─── Section ID map (category.id → anchor) ────────────── */

export const SECTION_IDS: Record<string, string> = {
  "software-engineers": "software-engineering",
  "devops": "devops",
  "qa-security": "qa-security",
  "data": "data-engineering",
  "ai-ml": "ai-ml",
  "design": "ux-ui-design",
  "mobile": "mobile-development",
  "leadership": "engineering-leadership",
};

/* ─── Process ──────────────────────────────────────────── */

export const PROCESS_DATA = {
  tagline: "Our Process",
  title: "How Our Hiring Process Works",
  subtitle:
    "A streamlined process built to help companies hire faster without sacrificing quality.",
  cta: {
    label: "Want to see the full breakdown?",
    text: "View our process",
    href: "/process",
  },
}

export const PROCESS_STEPS = [
  {
    number: "01",
    icon: Phone,
    title: "Discovery Call",
    description:
      "We learn your tech stack, team structure, hiring goals, and timeline - so we can target the right candidates from day one.",
  },
  {
    number: "02",
    icon: Search,
    title: "Talent Sourcing",
    description:
      "Our recruiters activate niche networks, databases, and communities to find pre-vetted candidates matched to your exact requirements.",
  },
  {
    number: "03",
    icon: ClipboardList,
    title: "Candidate Shortlist",
    description:
      "You receive a curated shortlist of screened candidates - with profiles, tech assessments, and availability confirmed.",
  },
  {
    number: "04",
    icon: Handshake,
    title: "Interviews & Placement",
    description:
      "We coordinate interviews, manage offers, and support onboarding - so nothing falls through the cracks.",
  },
]

/* ─── FAQ ──────────────────────────────────────────────── */

export const FAQ_DATA = {
  tagline: "Common Questions",
  title: "Frequently Asked.",
}

export interface FAQItem {
  q: string
  a: string
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    q: "How quickly can you send candidates?",
    a: "Depending on the role, we typically deliver the first shortlist within 3 to 10 business days. Senior or niche roles may take slightly longer, but we always confirm timelines during the discovery call.",
  },
  {
    q: "Do you recruit contract and permanent roles?",
    a: "Yes - we support both contract and permanent placements across all specializations. Many of our clients use a mix of both depending on project needs and team structure.",
  },
  {
    q: "Do you recruit internationally?",
    a: "We recruit across the EU and US, with deep networks in Bulgaria, the UK, Germany, the Netherlands, and the Nordics. Remote-first roles open up our full international talent pool.",
  },
  {
    q: "What industries do you support?",
    a: "We work across FinTech, iGaming, AI / ML Data, Cybersecurity, SAAS, E-commerce, Enterprise Software, Banking, Healthcare, Hospitality, Legal - anywhere technical talent is the bottleneck.",
  },
  {
    q: "How do your fees work?",
    a: "We operate on a success-based fee model - you only pay when a candidate is successfully placed. No retainers, no upfront costs. Pricing is discussed during the initial discovery call.",
  },
  {
    q: "Do you replace candidates if things don't work out?",
    a: "Yes. Every placement includes a guarantee period. If a candidate leaves or doesn't work out within that window, we replace them at no additional cost.",
  },
]
