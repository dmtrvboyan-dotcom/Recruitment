import { Users, Briefcase, Clock, Globe, Search, UserCheck, Target, TrendingUp, Award, Network, ShieldCheck, Building2, type LucideIcon } from "lucide-react"

export interface ServicePoint {
  title: string
  description: string
}

export interface ServiceSection {
  heading: string
  headingIcon: LucideIcon
  points: ServicePoint[]
}

export interface ServiceStat {
  icon: LucideIcon
  value: string
  label: string
  sublabel: string
}

export interface Service {
  icon: LucideIcon
  iconColor: string
  iconBg: string
  title: string
  subtitle: string
  intro: string
  sections: ServiceSection[]
  stats: ServiceStat[]
  href: string
}

export const SERVICE_LAYOUT = [
  {
    lg: "lg:col-span-7",
    md: "md:col-span-2",
    variant: "feature" as const,
    borders: "border-b-3 lg:border-b-3 lg:border-r-3 border-brand-navy/10",
  },
  {
    lg: "lg:col-span-5",
    md: "md:col-span-1",
    variant: "default" as const,
    borders: "border-b-3 border-brand-navy/10",
  },
  {
    lg: "lg:col-span-4",
    md: "md:col-span-1",
    variant: "default" as const,
    borders: "border-b-3 md:border-r-3 lg:border-r-3 border-brand-navy/10",
  },
  {
    lg: "lg:col-span-4",
    md: "md:col-span-1",
    variant: "default" as const,
    borders: "border-b-3 lg:border-r-3 border-brand-navy/10",
  },
  {
    lg: "lg:col-span-4",
    md: "md:col-span-1",
    variant: "default" as const,
    borders: "border-b-3 md:border-r-3 lg:border-r-0 border-brand-navy/10",
  },
  {
    lg: "lg:col-span-6",
    md: "md:col-span-2",
    variant: "wide" as const,
    borders: "",
  },
  {
    lg: "lg:col-span-6",
    md: "md:col-span-2",
    variant: "wide" as const,
    borders: "",
  },
]

export const SERVICES: Service[] = [
  {
    icon: Users,
    iconColor: "text-[#1A1A2E]",
    iconBg: "bg-[#1A1A2E]/5",
    title: "Permanent IT Recruitment & Staffing",
    subtitle: "Permanent tech hiring built around retention & long-term team stability",
    intro: "Finding great engineers is not easy. Convincing them to join your company is where expertise matters too.",
    sections: [
      {
        heading: "What we do",
        headingIcon: Target,
        points: [
          {
            title: "Identify qualified IT professionals",
            description: "We map the market and build shortlists of engineers, specialists and tech leaders.",
          },
          {
            title: "Approach passive candidates discreetly",
            description: "We connect with top talent who aren't actively looking but are open to the right opportunity.",
          },
          {
            title: "Assess technical and cultural fit",
            description: "We evaluate skills, experience and motivation to ensure the right match for your team.",
          },
          {
            title: "Guide candidates through the hiring journey",
            description: "From first conversation to accepted offer, we manage the process end-to-end.",
          },
        ],
      },
      {
        heading: "What you gain",
        headingIcon: TrendingUp,
        points: [
          {
            title: "Higher offer acceptance rates",
            description: "We present opportunities in a way that resonates and drives positive decisions.",
          },
          {
            title: "Better quality candidates",
            description: "You meet pre-qualified professionals who match your technical needs and company culture.",
          },
          {
            title: "Faster hiring outcomes",
            description: "Our process is designed to reduce time-to-hire without compromising on quality.",
          },
          {
            title: "Teams built for long-term success",
            description: "We focus on retention and long-term impact, not just filling positions.",
          },
        ],
      },
    ],
    stats: [
      { icon: Award, value: "15+", label: "Years of Experience in IT recruitment", sublabel: "" },
      { icon: Network, value: "2,000+", label: "in our network", sublabel: "" },
      { icon: Globe, value: "Bulgaria & Eastern Europe", label: "Market Expertise", sublabel: "" },
    ],
    href: "/services/permanent-it-recruitment",
  },
  {
    icon: Briefcase,
    iconColor: "text-[#1A1A2E]",
    iconBg: "bg-[#1A1A2E]/5",
    title: "Contract / Freelance / B2B / Remote Hiring",
    subtitle: "Pre-vetted contract & freelance IT talent",
    intro: "Scale your engineering capacity without permanent hiring commitments",
    sections: [
      {
        heading: "What we companies use this service",
        headingIcon: Target,
        points: [
          { title: "Immediate project capacity", description: "Bring experienced engineers into your team when deadlines cannot wait." },
          { title: "Specialized expertise on demand", description: "Access niche skills and technologies without committing to a permanent hire." },
          { title: "Flexible team scaling", description: "Expand or reduce your team size quickly based on project requirements." },
          { title: "Lower hiring risk", description: "Evaluate talent in a real working environment before making long-term decisions." },
        ],
      },
      {
        heading: "What you gain",
        headingIcon: TrendingUp,
        points: [
          { title: "Faster project delivery", description: "Keep your product roadmap on track without lengthy recruitment cycles." },
          { title: "3-5 days start", description: "Work with top professionals who may not be available for permanent employment." },
          { title: "Flexible engagement models", description: "Choose contract, freelance, B2B or remote collaboration arrangements." },
          { title: "Full recruitment support", description: "We handle sourcing, screening and coordination from start to onboarding." },
        ],
      },
    ],
    stats: [
      { icon: Award, value: "Contract, Freelance & B2B Models", label: "Choose what fits your project", sublabel: "" },
      { icon: Clock, value: "Bulgaria Talent Network", label: "Access skilled professionals across multiple technologies", sublabel: "" },
      { icon: ShieldCheck, value: "Flexible Team Scalling", label: "Scale up or down quickly based on your needs", sublabel: "" },
    ],
    href: "/services/contract-freelance-b2b-remote-recruitment",
  },
  {
    icon: Search,
    iconColor: "text-[#1A1A2E]",
    iconBg: "bg-[#1A1A2E]/5",
    title: "Discreet Search for Senior & Leadership Roles",
    subtitle: "Confidential IT executive search for CTOs, tech leads & senior engineers",
    intro: "The right tech growth.",
    sections: [
      {
        heading: "Our Approach",
        headingIcon: Target,
        points: [
          { title: "Define the leadership profile", description: "We clarify the leadership mandate, key challenges and success metrics for the role." },
          { title: "Map the right market", description: "We identify and analyze relevant companies and proven leaders within your industry." },
          { title: "Engage proven leaders confidentially", description: "We approach passive executives with the right message and at the right time." },
          { title: "Assess leadership impact and fit", description: "We evaluate leadership style, track record, cultural fit and long-term potential." },
        ],
      },
      {
        heading: "What you gain",
        headingIcon: TrendingUp,
        points: [
          { title: "Stronger leadership decisions", description: "Make confident hiring decisions based on data, insight and expert evaluation." },
          { title: "Reduced executive hiring risk", description: "Minimize the risk of a bad hire with a structured and thorough search process." },
          { title: "Better alignment with business goals", description: "We find leaders who understand your business and can drive meaningful impact." },
          { title: "Leaders who scale teams and products", description: "Access executives with the experience to build high-performing teams and drive sustainable growth." },
        ],
      },
    ],
    stats: [
      { icon: Award, value: "CTO, VP Engineering & Leadership", label: "Specialized in senior roles", sublabel: "" },
      { icon: ShieldCheck, value: "6-15 days", label: "days to present present", sublabel: "" },
      { icon: Clock, value: "Passive executive talent network", label: "Access to leaders not actively looking", sublabel: "" },
    ],
    href: "/services/confidential-headhunting-executive-search",
  },
  {
    icon: Clock,
    iconColor: "text-[#1A1A2E]",
    iconBg: "bg-[#1A1A2E]/5",
    title: "Employer of Record (EOR)",
    subtitle: "Hire in Eastern Europe - no local entity needed",
    intro: "Expand Without the Overhead",
    sections: [
      {
        heading: "What we do",
        headingIcon: Target,
        points: [
          { title: "Hire under our legal entity", description: "Employ professionals in Bulgaria and Eastern Europe without setting up a local company." },
          { title: "Full local employment compliance", description: "Contracts, tax, and social contributions are fully handled on your behalf." },
          { title: "Seamless contractor-to-employee conversions", description: "Transition your existing contractors to compliant employment relationships with ease." },
          { title: "Scale without incorporation costs", description: "Grow your international workforce without the overhead of entity setup or maintenance." },
        ],
      },
      {
        heading: "What you gain",
        headingIcon: TrendingUp,
        points: [
          { title: "Zero entity setup required", description: "Start hiring in Eastern Europe from day one with no legal structure overhead." },
          { title: "Cross-border employment made simple", description: "We navigate local labor law so you can focus on building your team." },
          { title: "Locally compliant contracts from day one", description: "Every employment agreement is fully aligned with local regulations." },
          { title: "Global workforce expansion on your timeline", description: "Move fast without waiting for legal structures to catch up." },
        ],
      },
    ],
    stats: [
      { icon: Globe, value: "Many", label: "countries covered", sublabel: "" },
      { icon: ShieldCheck, value: "100%", label: "Local Compliance guaranteed", sublabel: "" },
      { icon: Clock, value: "1-2 wks", label: "Avg. Time to Onboard", sublabel: "" },
    ],
    href: "/services/employer-of-record",
  },
  {
    icon: UserCheck,
    iconColor: "text-[#1A1A2E]",
    iconBg: "bg-[#1A1A2E]/5",
    title: "IT Salary Benchmarking",
    subtitle: "Real-time IT salary benchmarks by role, seniority & tech stack",
    intro: "Your Goals Come First",
    sections: [
      {
        heading: "What we do",
        headingIcon: Target,
        points: [
          { title: "Real salary data based on current demand", description: "We provide up-to-date compensation data reflecting what candidates actually expect today." },
          { title: "Benchmarks by role, seniority & tech stack", description: "Get precise data tailored to the specific positions and technologies you hire for." },
          { title: "Insights into candidate expectations", description: "Understand what motivates candidates beyond salary — benefits, flexibility, and growth." },
          { title: "Guidance on competitive offers", description: "We help you craft offers that win without overpaying or losing top candidates." },
        ],
      },
      {
        heading: "Real Impact",
        headingIcon: TrendingUp,
        points: [
          { title: "Turn insights into hiring results", description: "Use data to make faster, more confident decisions at every stage of the process." },
          { title: "Avoid overpaying or underpaying", description: "Stay competitive without stretching your budget or losing candidates to better offers." },
          { title: "Speed up hiring decisions", description: "Eliminate back-and-forth on compensation by anchoring offers in real market data." },
          { title: "Improve hiring success rate", description: "Better-calibrated offers lead to higher acceptance rates and stronger long-term retention." },
        ],
      },
    ],
    stats: [
      { icon: TrendingUp, value: "3x", label: "Faster Offer Decisions", sublabel: "" },
      { icon: Globe, value: "Live", label: "Market Salary Data", sublabel: "" },
      { icon: ShieldCheck, value: "100%", label: "Role & Stack Specific", sublabel: "" },
    ],
    href: "/services/it-salary-benchmarking-and-hiring-insights",
  },
  {
    icon: Globe,
    iconColor: "text-[#1A1A2E]",
    iconBg: "bg-[#1A1A2E]/5",
    title: "IT Payroll, Compliance & Business Advisory",
    subtitle: "Operational & compliance support for international tech companies",
    intro: "Full-Spectrum Compliance Support",
    sections: [
      {
        heading: "What we do",
        headingIcon: Target,
        points: [
          { title: "Payroll management & accounting coordination", description: "End-to-end payroll handling for IT teams, coordinated with your local accounting partners." },
          { title: "Tax coordination & contractor compliance", description: "We manage tax obligations and contractor structuring across multiple jurisdictions." },
          { title: "Labor law guidance", description: "Expert guidance on local and remote employment law for both employees and contractors." },
          { title: "International expansion support", description: "From your first hire abroad to full operations, we guide you through every step." },
        ],
      },
      {
        heading: "What you gain",
        headingIcon: TrendingUp,
        points: [
          { title: "Zero compliance risk across hiring models", description: "Whether you hire permanently, on contract, or through EOR — you stay fully compliant." },
          { title: "Clear contractor vs. employee structuring", description: "Avoid misclassification risk with properly structured engagements from the start." },
          { title: "Accurate, timely payroll — every time", description: "Your team gets paid correctly and on time, with full transparency and audit readiness." },
          { title: "A trusted advisory partner as you scale", description: "We grow with you internationally, adapting to your needs at every stage." },
        ],
      },
    ],
    stats: [
      { icon: Users, value: "400+", label: "IT Clients Served", sublabel: "" },
      { icon: ShieldCheck, value: "6+", label: "Compliance Areas covered", sublabel: "" },
      { icon: Globe, value: "100%", label: "Jurisdiction-Specific guidance", sublabel: "" },
    ],
    href: "/services/it-payroll-compliance-advisory",
  },
  {
    icon: Building2,
    iconColor: "text-[#1A1A2E]",
    iconBg: "bg-[#1A1A2E]/5",
    title: "Dedicated Development Teams & Staff Augmentation",
    subtitle: "Build a fully integrated dev team in Bulgaria — zero admin, predictable costs",
    intro: "Your team. Our admin.",
    sections: [
      {
        heading: "What we handle",
        headingIcon: Target,
        points: [
          { title: "Recruitment & talent sourcing", description: "We map the market, headhunt the right engineers and manage full vetting end-to-end." },
          { title: "Employment under our legal entity", description: "Engineers are hired compliantly in Bulgaria — no entity setup required on your side." },
          { title: "Payroll, tax & social contributions", description: "Every month, fully handled. Compliant, accurate and completely transparent." },
          { title: "HR & ongoing team administration", description: "Performance reviews, retention strategy and people ops — owned entirely by us." },
        ],
      },
      {
        heading: "What you gain",
        headingIcon: TrendingUp,
        points: [
          { title: "Zero admin overhead", description: "No local HR, no legal complexity. You focus on product and engineering decisions." },
          { title: "Fully integrated team, not outsourcing", description: "Your team works your hours, uses your tools and reports directly to your leadership." },
          { title: "Predictable monthly costs", description: "Fixed, transparent pricing with no hidden employer costs or unexpected overheads." },
          { title: "Scale up or down as your roadmap evolves", description: "Add or reduce team members quickly — without lengthy hiring or legal processes." },
        ],
      },
    ],
    stats: [
      { icon: Globe, value: "30–50%", label: "Lower team cost vs. Western Europe", sublabel: "" },
      { icon: Clock, value: "2–4 wks", label: "Average onboarding to live team", sublabel: "" },
      { icon: ShieldCheck, value: "100%", label: "Legal & payroll handled for you", sublabel: "" },
    ],
    href: "/services/dedicated-development-teams",
  },
]