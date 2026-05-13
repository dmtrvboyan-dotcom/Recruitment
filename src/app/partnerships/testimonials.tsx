"use client"

import { memo, useRef, useState, useEffect } from "react"

const FEATURED = {
  name: "Aleksandar Karamfilov",
  role: "CEO",
  company: "Pragmatic",
  quote:
    "They understand the industry, move quickly, and consistently deliver high-quality candidates — essentially everything I was looking for in a recruitment partner.",
}

const TESTIMONIALS = [
  {
    name: "Veronika Deneva",
    role: "HR Director",
    company: "DEGIRO",
    quote:
      "They have a refreshingly approachable communication style, always move quickly when presenting candidates, and bring great energy to the process. We've made more hires through Recruitment.bg than through any other recruitment partner.",
  },
  {
    name: "Rady Chamova",
    role: "HR Director",
    company: "Despark",
    quote:
      "When it comes to hiring, I'm not looking for just another vendor — I need a partner I can rely on completely. That's exactly what I found in Recruitment.bg. Whether it's niche, difficult, or high-volume roles, Vesko and his team take ownership and deliver results. Even in complex situations with tight deadlines and requirements that would discourage other agencies, they always find a solution.",
  },
  {
    name: "Yuriy Boev",
    role: "General Manager",
    company: "OSF",
    quote:
      "We've worked with Recruitment.bg to hire across several roles, and honestly, they've made our lives much easier — and even enjoyable. The candidates they introduced were consistently strong, and the entire process felt like a true partnership rather than a transaction. Highly recommended!",
  },
  {
    name: "Ani Koleva",
    role: "General Manager",
    company: "Scaleflex",
    quote:
      "Throughout our collaboration, the team demonstrated fast response times, a professional approach toward candidates, and excellent organization throughout the entire recruitment process. What I appreciated most was their ability to balance speed with quality — something that's essential when hiring for IT roles.",
  },
  {
    name: "Plamena Getova",
    role: "HR Director",
    company: "Your People Solutions",
    quote:
      "Their team quickly understood both the technical requirements of our roles and the specifics of our internal culture and environment. Communication was clear, timely, and transparent at every step. They presented carefully selected candidates with relevant experience, which significantly reduced our interview time and helped us make faster decisions.",
  },
  {
    name: "Nikolay Tsekov",
    role: "COO",
    company: "Bulcode",
    quote:
      "As a company in the tech sector, it's important for us to work with a recruitment partner who understands not only the roles we're hiring for, but also the pace at which our business evolves. Recruitment.bg quickly adapted to the way we work and consistently presented candidates with real potential and strong technical foundations.",
  },
  {
    name: "Denica Klasanova",
    role: "HR Business Partner",
    company: "Carista",
    quote:
      "Recruitment.bg has been a valuable partner in our IT hiring efforts. Their team works in a structured and organized way, assigns dedicated account management, understands technical requirements, and consistently presents candidates who match our hiring needs.",
  },
  {
    name: "Dimitar Kushvaliev",
    role: "Director",
    company: "RixMind",
    quote:
      "When you're scaling a team, time and hiring quality are critical. Recruitment.bg introduced strong candidates, maintained excellent communication, and provided thoughtful feedback at every stage of the process. Working with their team was easy, professional, and highly effective.",
  },
  {
    name: "Nikoleta Maneva",
    role: "CFO",
    company: "Westum",
    quote:
      "The Recruitment.bg team approached the hiring process with professionalism and strong organization. I truly appreciated their communication, timely feedback, and the quality of candidates they presented.",
  },
  {
    name: "Ina Radeva",
    role: "HR Manager",
    company: "UST",
    quote:
      "In the HR space, it's rare to come across recruitment partners that build such a consistent and professional presence in IT recruitment. I truly appreciate their understanding, communication, and the way they approach their work.",
  },
]

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

function getInitials(name: string) {
  return name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase()
}

export const Testimonials = memo(function Testimonials() {
  const { ref, visible } = useInView(0.1)

  return (
    <section className="relative w-full bg-brand-white overflow-hidden py-20 lg:py-32">
      {/* Subtle dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage: "radial-gradient(circle, #1A1A2E10 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Ambient glows */}
      <div className="absolute top-1/3 -left-24 w-[35vw] h-[35vw] max-w-[420px] max-h-[420px] bg-brand-coral/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[30vw] h-[30vw] max-w-[380px] max-h-[380px] bg-brand-teal/8 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-5 sm:px-10 xl:px-16">

        {/* Header */}
        <div
          className="mb-14 lg:mb-20"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-brand-coral block mb-3">
            Testimonials from HR teams
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-[clamp(2.2rem,5vw,4.5rem)] font-black leading-none tracking-tight text-brand-navy">
              IN THEIR
              <br />
              <span className="text-brand-coral">OWN WORDS.</span>
            </h2>
            <div className="flex items-center gap-4 lg:pb-3">
              <div className="h-px w-12 bg-brand-navy/20" />
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-brand-navy/45">
                11 verified reviews
              </span>
            </div>
          </div>
        </div>

        {/* FEATURED TESTIMONIAL */}
        <div
          className="relative mb-6 sm:mb-8 overflow-hidden rounded-3xl bg-brand-navy p-8 sm:p-12 lg:p-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.7s ease 150ms, transform 0.7s ease 150ms",
          }}
        >
          {/* Diagonal stripes */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, #7291C7 0px, #7291C7 1px, transparent 1px, transparent 48px)",
            }}
          />
          {/* Coral glow */}
          <div className="absolute -top-32 -right-32 w-[420px] h-[420px] bg-brand-coral/20 rounded-full blur-3xl pointer-events-none" />

          {/* Giant decorative quote */}
          <span
            aria-hidden
            className="absolute -top-6 left-2 sm:top-4 sm:left-8 text-[16rem] sm:text-[20rem] leading-none font-black text-brand-coral/15 select-none pointer-events-none"
            style={{ fontFamily: "Georgia, serif" }}
          >
            &ldquo;
          </span>

          <div className="relative">
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-brand-coral mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-coral animate-pulse" />
              Featured Review
            </div>

            <blockquote className="text-xl sm:text-2xl lg:text-3xl xl:text-[2.5rem] font-medium leading-snug tracking-tight text-brand-white max-w-4xl mb-10">
              &ldquo;{FEATURED.quote}&rdquo;
            </blockquote>

            <div className="h-px w-16 bg-brand-coral/40 mb-6" />

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-brand-coral/15 border border-brand-coral/30 flex items-center justify-center text-brand-coral font-black text-sm sm:text-base shrink-0">
                {getInitials(FEATURED.name)}
              </div>
              <div>
                <div className="text-sm sm:text-base font-bold uppercase tracking-wider text-brand-white">
                  {FEATURED.name}
                </div>
                <div className="text-xs sm:text-sm text-white/50 mt-0.5">
                  {FEATURED.role}
                  <span className="text-brand-coral mx-2">·</span>
                  <span className="font-semibold text-white/70">{FEATURED.company}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MASONRY GRID */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6">
          {TESTIMONIALS.map((t, i) => {
            // Checkerboard rhythm: 3 dark cards at varied positions
            const isAccent = i === 1 || i === 5 || i === 8
            return (
              <div
                key={t.name}
                className={`
                  break-inside-avoid mb-4 sm:mb-6 relative rounded-2xl p-6 sm:p-7
                  border transition-all duration-400 group cursor-default
                  ${isAccent
                    ? "bg-brand-navy border-brand-navy/10 hover:bg-[#22223e] hover:border-brand-coral/30"
                    : "bg-white border-brand-navy/8 hover:border-brand-coral/30 hover:shadow-[0_12px_40px_-16px_rgba(26,26,46,0.18)]"
                  }
                `}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.5s ease ${300 + i * 70}ms, transform 0.5s ease ${300 + i * 70}ms, background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease`,
                }}
              >
                {/* Quote mark */}
                <span
                  aria-hidden
                  className={`absolute top-3 right-4 text-5xl leading-none font-black select-none pointer-events-none ${isAccent ? "text-brand-coral/35" : "text-brand-coral/25"}`}
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  &ldquo;
                </span>

                <p className={`relative text-sm sm:text-[15px] leading-relaxed mb-6 pr-6 ${isAccent ? "text-white/85" : "text-brand-navy/75"}`}>
                  {t.quote}
                </p>

                <div className={`h-px w-10 mb-4 ${isAccent ? "bg-brand-coral/40" : "bg-brand-navy/10"}`} />

                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-[11px] font-black shrink-0 ${
                    isAccent
                      ? "bg-brand-coral/20 text-brand-coral border border-brand-coral/30"
                      : "bg-brand-navy/5 text-brand-navy border border-brand-navy/10"
                  }`}>
                    {getInitials(t.name)}
                  </div>
                  <div className="min-w-0">
                    <div className={`text-xs sm:text-sm font-bold uppercase tracking-wider truncate ${isAccent ? "text-brand-white" : "text-brand-navy"}`}>
                      {t.name}
                    </div>
                    <div className={`text-[11px] sm:text-xs mt-0.5 truncate ${isAccent ? "text-white/45" : "text-brand-navy/50"}`}>
                      {t.role}
                      <span className="text-brand-coral mx-1">·</span>
                      <span className="font-semibold">{t.company}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bridge line into WhyChooseUs */}
        <div
          className="mt-14 sm:mt-16 pt-10 border-t border-brand-navy/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.7s ease 1100ms",
          }}
        >
          <p className="text-sm sm:text-base text-brand-navy/55 leading-relaxed">
            <span className="text-brand-navy font-bold">There's a reason they keep coming back.</span>{" "}
            See what makes the partnership work below.
          </p>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-coral">
            Why us
            <span className="text-lg leading-none">↓</span>
          </div>
        </div>

      </div>
    </section>
  )
})