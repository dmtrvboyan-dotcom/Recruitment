export const SERVICES = [
  "Hiring in Bulgaria",
  "Executive Search",
  "Payroll and Compliance in Bulgaria",
  "Benchmarking Salaries with Real data",
  "Employ Locally with no Entity (EOR)",
] as const

export const PAUSE_MS  = 800
export const EXIT_MS   = 500
export const ENTER_MS  = 580

export interface StatItem {
  value:      string
  suffix?:    string
  label:      string
  isLast?:    boolean
  isMobileTop?: boolean
}

export const STATS: StatItem[] = [
  { value: "850+", label: "Successful hirings",       isMobileTop: true  },
  { value: "12+",  label: "Senior recruiters",        isMobileTop: true  },
  { value: "100%", label: "Recruiting All tech stacks", isMobileTop: true },
  { value: "1",    label: "Smart.R ATS", suffix: "Built in House", isLast: true },
]