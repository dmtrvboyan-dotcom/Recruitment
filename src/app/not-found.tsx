import Link from "next/link"
import { ArrowRight, MoveLeft } from "lucide-react"

export default function NotFound() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center bg-brand-navy">

      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -62deg,
            transparent,
            transparent 70px,
            rgba(114,145,199,0.05) 70px,
            rgba(114,145,199,0.05) 71px
          )`,
        }}
      />

      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 lg:left-auto lg:-left-32 lg:translate-x-0
                   w-[360px] h-[360px] lg:w-[520px] lg:h-[520px]
                   rounded-full bg-brand-coral/18 blur-[100px] lg:blur-[120px] pointer-events-none"
      />

      <div
        aria-hidden
        className="hidden lg:block absolute bottom-0 -right-32
                   w-[420px] h-[420px]
                   rounded-full bg-brand-teal/18 blur-[130px] pointer-events-none"
      />

      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   text-[clamp(10rem,40vw,32rem)] font-black uppercase leading-none
                   tracking-tighter text-brand-white/[0.025] select-none
                   pointer-events-none whitespace-nowrap"
      >
        404
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-5 sm:px-8 max-w-3xl mx-auto w-full">
        <div className="flex items-center justify-center gap-3 sm:gap-3.5 mb-5 sm:mb-7 animate-fade-in-up delay-100">
          <span className="block w-6 sm:w-9 h-px bg-brand-coral" />
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] sm:tracking-[0.32em] uppercase text-brand-coral">
            Page not found
          </span>
          <span className="block w-6 sm:w-9 h-px bg-brand-coral" />
        </div>

        <h1 className="text-[clamp(2rem,8vw,6rem)] font-black leading-[0.95] sm:leading-[0.92] tracking-tight uppercase text-brand-white mb-6 sm:mb-8 animate-fade-in-up delay-150">
          Looks like you took a
          <br />
          <span className="text-brand-coral">wrong turn.</span>
        </h1>

        <div className="h-[2px] w-12 sm:w-16 bg-brand-coral mb-6 sm:mb-8 animate-fade-in-up delay-150" />

        <p className="text-sm sm:text-base lg:text-lg text-brand-white/55 leading-relaxed px-2 sm:px-0 mb-10 sm:mb-12 animate-fade-in-up delay-200">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          <br className="hidden sm:block" />
          Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto animate-fade-in-up delay-300">
          <Link
            href="/"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5
                       px-7 sm:px-8 py-5 sm:py-6
                       bg-brand-coral hover:bg-brand-coral-hover
                       text-brand-white text-sm font-semibold tracking-[0.22em] uppercase
                       rounded-full transition-colors duration-200"
          >
            <MoveLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to home
          </Link>

         
        </div>

      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-brand-white/8 animate-fade-in-up delay-[400ms]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 sm:py-6 flex items-center justify-center gap-2">
          <span className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-brand-white/25 font-medium">
            Need help?
          </span>
          <span className="block w-4 h-px bg-brand-white/15" />
          <Link
            href="/#contact"
            className="text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-brand-coral/70 hover:text-brand-coral font-semibold transition-colors duration-200"
          >
            Contact us
          </Link>
        </div>
      </div>

    </section>
  )
}
