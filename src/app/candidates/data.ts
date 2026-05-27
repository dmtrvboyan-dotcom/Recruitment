import type { Metadata } from "next"
import type { LucideIcon } from "lucide-react"
import {
  User,
  Target,
  HeartHandshake,
  MessageSquare,
  Shield,
  Briefcase,
  Clock,
  TrendingUp,
  Globe,
  Award,
  Users,
  Sparkles,
} from "lucide-react"


export interface CandidateStep {
  icon: LucideIcon
  number: string
  title: string
  description: string
  example: string
}

export interface GoalPoint {
  icon: LucideIcon
  title: string
  description: string
}

export interface Benefit {
  icon: LucideIcon
  title: string
  description: string
}

export interface Reason {
  icon: LucideIcon
  title: string
  description: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface SectionData<T> {
  tagline: string
  title: string
  subtitle?: string
  items: T[]
}


export const candidatesMetadata: Metadata = {
  title: "For Candidates | Find Your Next Career Opportunity | Recruitment.bg",
  description:
    "Looking for your next career move? Recruitment.bg helps IT professionals and executives find roles that match their skills, goals, and lifestyle. Transparent process, honest feedback, and long-term career support.",
  keywords: [
    "IT jobs Bulgaria",
    "developer jobs",
    "software engineer jobs",
    "tech careers Bulgaria",
    "career opportunities",
    "job search Bulgaria",
    "IT recruitment",
    "tech jobs Europe",
    "remote jobs Bulgaria",
    "senior developer positions",
    "executive roles Bulgaria",
    "career guidance",
    "job placement",
    "tech talent",
    "recruitment agency candidates",
  ],
  openGraph: {
    title: "For Candidates | Find Your Next Career Opportunity | Recruitment.bg",
    description:
      "Looking for your next career move? We help IT professionals find roles that match their skills, goals, and lifestyle.",
    type: "website",
    locale: "en_US",
    siteName: "Recruitment.bg",
    url: "https://recruitment.bg/candidates",
  },
  twitter: {
    card: "summary_large_image",
    title: "For Candidates | Find Your Next Career Opportunity",
    description:
      "Looking for your next career move? We help IT professionals find roles that match their skills, goals, and lifestyle.",
  },
  alternates: {
    canonical: "https://recruitment.bg/candidates",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

// ============================================================================
// JSON-LD Structured Data
// ============================================================================

export const candidatesJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "For Candidates - Find Your Next Career Opportunity",
  description:
    "Looking for your next career move? Recruitment.bg helps IT professionals and executives find roles that match their skills, goals, and lifestyle.",
  url: "https://recruitment.bg/candidates",
  mainEntity: {
    "@type": "Service",
    name: "Career Placement Services",
    provider: {
      "@type": "Organization",
      name: "Recruitment.bg",
      url: "https://recruitment.bg",
    },
    serviceType: "IT Recruitment and Career Placement",
    areaServed: ["Bulgaria", "Europe"],
    description:
      "Professional recruitment services connecting IT professionals with top employers in Bulgaria and Europe.",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://recruitment.bg",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "For Candidates",
        item: "https://recruitment.bg/candidates",
      },
    ],
  },
}

// ============================================================================
// Hero Section
// ============================================================================

export const heroData = {
  tagline: "FOR CANDIDATES",
  title: "Find a Role That Actually Fits",
  subtitle:
    "We take the time to understand your goals, skills, and aspirations to connect you with opportunities that genuinely feel right.",
  description:
    "No mass applications. No ghost jobs. Just honest conversations and real opportunities that match what you're looking for.",
  primaryCta: {
    text: "Send Us CV",
    href: "/contacts",
  },
  secondaryCta: {
    text: "Open Roles",
    href: "/job-listings",
  },
}

// ============================================================================
// How It Works Section
// ============================================================================

export const howItWorksData: SectionData<CandidateStep> = {
  tagline: "HOW IT WORKS",
  title: "Your Journey to the Right Role",
  subtitle: "A simple, transparent process designed around you",
  items: [
    {
      icon: User,
      number: "01",
      title: "You tell us what you actually look for",
      description:
        "Share your skills, experience, and what matters most to you. Whether it's remote work, leadership opportunities, or a specific tech stack - we listen.",
      example:
        '"I\'m a React developer who loves remote work. I\'m looking for a team where I can grow and work in a flexible environment."',
    },
    {
      icon: Target,
      number: "02",
      title: "We match you with the right opportunities",
      description:
        "Our AI platform (smart.R) combined with experienced recruiters connects you with roles that truly fit your goals - not just any open position.",
      example: "Personalized job matching based on your unique profile and preferences.",
    },
    {
      icon: HeartHandshake,
      number: "03",
      title: "We support you through the process",
      description:
        "Fast feedback, honest guidance, and long-term support throughout your journey. We're with you from first interview to first day.",
      example: "Interview prep, salary negotiation advice, and onboarding support.",
    },
  ],
}

// ============================================================================
// Your Goals Section
// ============================================================================

export const yourGoalsData: SectionData<GoalPoint> = {
  tagline: "YOUR GOALS COME FIRST",
  title: "We Focus on What",
  items: [
    {
      icon: MessageSquare,
      title: "Clear conversation about your skills and direction",
      description:
        "We take time to understand your technical expertise, career aspirations, and what success looks like for you.",
    },
    {
      icon: Shield,
      title: "Honest feedback and realistic opportunities",
      description:
        "No false promises. We give you straight talk about the market and opportunities that genuinely match your profile.",
    },
    {
      icon: Target,
      title: "Roles aligned with your expectations and lifestyle",
      description:
        "Whether you prioritize remote work, salary, or growth opportunities, we find positions that fit your life.",
    },
    {
      icon: HeartHandshake,
      title: "Support throughout the entire hiring process",
      description:
        "From resume review to interview coaching to offer negotiation - we're in your corner every step of the way.",
    },
  ],
}

// ============================================================================
// What You Get Section
// ============================================================================

export const whatYouGetData: SectionData<Benefit> = {
  tagline: "WHAT YOU GET",
  title: "Your Unfair",
  items: [
    {
      icon: Briefcase,
      title: "Relevant Job Opportunities",
      description:
        "Access exclusive positions that match your skills and career goals. Many roles aren't publicly advertised.",
    },
    {
      icon: MessageSquare,
      title: "Transparent Communication",
      description:
        "Know where you stand at every stage. We keep you informed with regular updates and honest feedback.",
    },
    {
      icon: Clock,
      title: "Faster Feedback",
      description:
        "Our strong relationships with employers mean quicker responses on applications and interviews.",
    },
    {
      icon: TrendingUp,
      title: "Long-term Career Support",
      description:
        "We're not just about filling positions. We build lasting relationships to support your career journey.",
    },
  ],
}

// ============================================================================
// Why Choose Us Section
// ============================================================================

export const whyChooseUsData: SectionData<Reason> = {
  tagline: "WHY RECRUITMENT.BG",
  title: "What Sets Us Apart",
  items: [
    {
      icon: Globe,
      title: "Deep Market Knowledge",
      description:
        "With 15+ years of experience in the Bulgarian and European tech market, we know which companies offer the best opportunities.",
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description:
        "Hundreds of successful placements in top tech companies, startups, and international corporations.",
    },
    {
      icon: Users,
      title: "Personalized Approach",
      description:
        "Every candidate is unique. We tailor our approach to your specific situation and career goals.",
    },
    {
      icon: Sparkles,
      title: "smart.R Technology",
      description:
        "Our proprietary AI platform matches you with opportunities faster and more accurately than traditional methods.",
    },
  ],
}

// ============================================================================
// Industries & Roles Section
// ============================================================================

export const opportunitiesData = {
  tagline: "OPPORTUNITIES",
  title: "Industries & Roles We Cover",
  subtitle: "We specialize in placing top talent across the most dynamic sectors in tech",
  industries: [
    "FinTech & Banking",
    "iGaming & Betting",
    "E-Commerce & Retail",
    "SaaS & Product Companies",
    "AI & Machine Learning",
    "Cybersecurity",
    "Healthcare Tech",
    "Enterprise Software",
  ],
  roles: [
    "Software Engineers",
    "Frontend & Backend Developers",
    "DevOps & Cloud Engineers",
    "Data Scientists & Analysts",
    "Product Managers",
    "Engineering Managers",
    "CTOs & Tech Leaders",
    "QA & Test Engineers",
    "And more"
  ],
}

// ============================================================================
// Testimonial Section
// ============================================================================

export const testimonialData = {
  quote:
    "Work in a way that “Who did this?” actually becomes a compliment.",
  author: "The Recruitment.bg Team",
}

// ============================================================================
// FAQ Section
// ============================================================================

export const faqData: SectionData<FAQ> = {
  tagline: "COMMON QUESTIONS",
  title: "Frequently Asked",
  items: [
    {
      question: "Is there any cost for candidates?",
      answer:
        "No, our services are completely free for candidates. Employers pay our fees when they hire through us.",
    },
    {
      question: "How long does the process typically take?",
      answer:
        "It varies depending on the role and your profile, but we typically present relevant opportunities within 1-2 weeks of our initial conversation.",
    },
    {
      question: "Do you only work with senior candidates?",
      answer:
        "While we specialize in mid-to-senior level positions, we work with talented professionals at various career stages. What matters most is your potential and commitment.",
    },
    {
      question: "Can I apply for remote positions?",
      answer:
        "Absolutely! We have many remote and hybrid opportunities, especially for tech roles. Just let us know your preferences.",
    },
    {
      question: "Will you share my CV without my permission?",
      answer:
        "Never. We always discuss specific opportunities with you first and only share your profile with employers after getting your explicit consent.",
    },
    {
      question: "Can I send my CV even if there’s no matching role now?",
      answer:
        "Absolutely. Many of the roles we work on are confidential or not publicly listed yet. Feel free to send us your CV - we may already have something relevant in progress. If not, we will let you know.",
    },
    {
      question: "Can you help me confidentially explore the market/job opportunities?",
      answer:
        "Of course. We understand that many professionals are not actively job searching. All conversations and CVs are treated confidentially.",
    },
  ],
}


export const ctaData = {
  title: "Ready to Find Your Next Opportunity?",
  description:
    "Whether you're actively looking or just exploring options, we'd love to hear from you. Send us your CV and let's start the conversation.",
  primaryCta: {
    text: "Send Us Your CV",
    href: "/contacts",
  },
  secondaryCta: {
    text: "Browse Open Positions",
    href: "/job-listings",
  },
}
