"use client"

import { useState } from "react"
import { Quote, ArrowRight } from "lucide-react"
import Link from "next/link";
import { AppButton } from '@/components/ui/app-button';



const QUESTIONS = [
  "What kind of opportunity would genuinely interest you?",
  "Tell us what you are looking for in your next role.",
  "What would make the next role worth the move?",
]

export function OpenQuestionsSection() {
  const [questionIdx, setQuestionIdx] = useState(0)

  return (
    <section
      id="open-questions"
      className="relative py-20 sm:py-24 lg:py-32 bg-brand-navy overflow-hidden"
    >


      <div
        aria-hidden
        className="absolute top-20 right-10 w-[420px] h-[420px] rounded-full bg-brand-coral/15 blur-[140px] pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-0 w-[360px] h-[360px] rounded-full bg-brand-teal/20 blur-[130px] pointer-events-none"
      />

      <div
        aria-hidden
        className="hidden lg:block absolute -top-10 left-1/2 -translate-x-1/2 text-[clamp(12rem,24vw,24rem)] font-black uppercase leading-[0.85] tracking-tighter text-brand-white/[0.02] select-none pointer-events-none whitespace-nowrap"
      >
        Talk
      </div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.32em] uppercase text-brand-coral tabular-nums">
              04
            </span>
            <span className="block w-10 sm:w-14 h-px bg-brand-coral" />
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.32em] uppercase text-brand-coral">
              Open questions
            </span>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <Quote
              className="absolute -top-4 sm:-top-8 -left-2 sm:left-0 w-10 sm:w-16 h-10 sm:h-16 text-brand-coral/30 -scale-x-100"
              strokeWidth={1}
            />
            <h2 className="font-bold text-brand-white text-[clamp(1.65rem,5vw,3.5rem)] leading-[1.1] tracking-tight px-2 sm:px-8 transition-opacity duration-300">
              {QUESTIONS[questionIdx]}
            </h2>

            {/* Animated dot switcher */}
            <div className="mt-8 sm:mt-10 flex items-center justify-center gap-3">
              {QUESTIONS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setQuestionIdx(i)}
                  aria-label={`Question ${i + 1}`}
                  className="relative flex items-center justify-center cursor-pointer focus:outline-none group"
                  style={{ width: 28, height: 28 }}
                >
                  {/* Ping ring - only on active */}
                  {i === questionIdx && (
                    <span
                      aria-hidden
                      className="absolute inline-flex w-full h-full rounded-full bg-brand-coral/40 animate-ping"
                    />
                  )}
                  {i !== questionIdx && (
                    <span
                      aria-hidden
                      className="absolute inline-flex w-5 h-5 rounded-full border border-brand-white/0 group-hover:border-brand-coral/40 transition-colors duration-200"
                    />
                  )}
                  <span
                    className={`relative inline-flex rounded-full transition-all duration-300 ${i === questionIdx
                        ? "w-4 h-4 bg-brand-coral shadow-[0_0_12px_2px_rgba(255,100,80,0.45)]"
                        : "w-2.5 h-2.5 bg-brand-white/25 group-hover:bg-brand-white/55"
                      }`}
                  />
                </button>
              ))}
            </div>
          </div>

           <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto animate-fade-in-up delay-300 mt-15">
            <AppButton href="/contacts" icon="arrow" className="text-center justify-center sm:w-auto">
              Start the conversation
            </AppButton>
          </div>
        </div>
      </div>
    </section>
  )
}
