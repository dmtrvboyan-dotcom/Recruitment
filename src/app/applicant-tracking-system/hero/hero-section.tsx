import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { heroData } from "./data"
import { AppButton } from '@/components/ui/app-button';

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-trasparent">

      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-6xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-black mb-6 leading-tight text-balance pt-20">
            <span className="relative inline-block px-4">
              <span className="relative bg-linear-to-r from-brand-navy via-brand-coral to-brand-navy bg-clip-text text-transparent">
                {heroData.title}
              </span>
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-brand-navy/50 max-w-2xl mx-auto mb-8 text-pretty mt-5">
            {heroData.subtitle}
          </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto animate-fade-in-up delay-300">
            <AppButton href={heroData.secondaryCta.href} className="sm:w-auto">
              {heroData.secondaryCta.text}
            </AppButton>

    
          </div>

         
        </div>
      </div>

      <div className="relative w-screen left-1/2 -translate-x-1/2 ">

        <Image
          src="/smartr/smartr-1.webp"
          alt="Smart.R Dashboard - Visual Hiring Pipeline"
          width={1920}
          height={1080}
          className="w-full h-[30vh] object-cover sm:h-auto"
          priority
        />

        <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-coral/20 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-navy/10 rounded-full blur-2xl pointer-events-none" />
        <span className="absolute inset-0 scale-125 blur-2xl opacity-30 bg-linear-to-r from-red-500 via-brand-white to-brand-coral rounded-full pointer-events-none"></span>
      </div>

      <div className="relative w-screen left-1/2 -translate-x-1/2 -mt-16 sm:-mt-24 md:-mt-32 lg:-mt-40 -mb-25">

        <div className="w-full overflow-hidden leading-0">
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className="w-full h-20 sm:h-25 md:h-30 lg:h-35"
          >
            <path
              d="M0,120 L0,60 C240,20 480,0 720,30 C960,60 1200,80 1440,50 L1440,120 Z"
              fill="#1A1A2E"
            />
          </svg>
        </div>

      </div>

    </section>
  );
}