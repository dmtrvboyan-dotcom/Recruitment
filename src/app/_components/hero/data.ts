/** All service labels that rotate in the hero tagline. */
export const SERVICES = [
  "Hiring in Bulgaria",
  "Executive Search",
  "Payroll and Compliance in Bulgaria",
  "Benchmarking Salaries with Real data",
  "Employ Locally with no Entity (EOR)",
] as const

// ── Rotating-text animation timings ──────────────────────────────────────────
/** How long (ms) each label stays fully visible before it starts to exit. */
export const PAUSE_MS  = 800
/** Duration (ms) of the exit (slide-up + fade-out) animation. */
export const EXIT_MS   = 500
/** Duration (ms) of the enter (slide-up + fade-in) animation. */
export const ENTER_MS  = 580

// ── Stat blocks ───────────────────────────────────────────────────────────────
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