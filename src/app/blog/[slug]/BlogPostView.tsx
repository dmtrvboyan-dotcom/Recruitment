"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import type { Post } from "../lib/posts"

type Props = {
  post: Post
}

export function BlogPostView({ post }: Props) {
  return (
    <main className="min-h-screen bg-brand-white">

      {/* ─── STICKY NAV BAR ─── */}
      <div className="sticky top-0 z-50 bg-brand-white/80 backdrop-blur-md border-b border-brand-navy/8">
        <div className="max-w-3xl mx-auto px-5 sm:px-10 py-4 flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-navy/40
              hover:text-brand-coral transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-brand-coral">
            {post.category}
          </span>
        </div>
      </div>

      {/* ─── HERO HEADER ─── */}
      <section className="relative w-full bg-brand-navy overflow-hidden py-16 sm:py-20 lg:py-28">
       
        {/* Glow */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-coral/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-5 sm:px-10">
          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center px-3 py-1.5 rounded-full text-[10px] font-bold bg-brand-coral/15
              text-brand-coral uppercase tracking-[0.2em]">
              {post.category}
            </span>
            <span className="text-xs text-brand-white/30 font-medium tracking-wider">
              {post.date}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-[clamp(2rem,5vw,3.8rem)] font-bold leading-none tracking-tight text-brand-white mb-6">
            {post.title}
          </h1>

          {/* Description / lead */}
          <p className="text-sm sm:text-base lg:text-lg text-brand-white/50 leading-relaxed
            border-l-2 border-brand-coral/40 pl-5">
            {post.description}
          </p>
        </div>
      </section>

      {/* ─── ARTICLE BODY ─── */}
      <article className="max-w-3xl mx-auto px-5 sm:px-10 py-14 sm:py-20">

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-brand-coral/20 via-brand-coral/10 to-transparent mb-12" />

        <div className="
          prose prose-base sm:prose-lg max-w-none

          prose-headings:font-bold prose-headings:uppercase prose-headings:tracking-tight prose-headings:text-brand-navy
          prose-h1:text-4xl prose-h1:leading-none
          prose-h2:text-2xl prose-h2:leading-tight prose-h2:mt-14 prose-h2:mb-5
          prose-h2:border-b prose-h2:border-brand-navy/8 prose-h2:pb-3
          prose-h3:text-lg prose-h3:mt-10 prose-h3:mb-3 prose-h3:text-brand-teal

          prose-p:text-brand-navy/55 prose-p:leading-relaxed prose-p:my-5

          prose-a:text-brand-coral prose-a:no-underline prose-a:font-semibold
          hover:prose-a:underline

          prose-strong:text-brand-navy prose-strong:font-bold

          prose-ul:my-5 prose-ol:my-5
          prose-li:text-brand-navy/55 prose-li:my-2

          prose-blockquote:not-italic
          prose-blockquote:border-l-2 prose-blockquote:border-brand-coral
          prose-blockquote:bg-brand-coral/[0.05]
          prose-blockquote:rounded-r-xl
          prose-blockquote:py-3 prose-blockquote:pr-5
          prose-blockquote:text-brand-navy/60

          prose-code:text-brand-teal prose-code:bg-brand-teal/8
          prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
          prose-code:text-sm prose-code:font-mono
          prose-code:before:content-none prose-code:after:content-none

          prose-pre:bg-brand-navy prose-pre:rounded-2xl prose-pre:shadow-xl

          prose-hr:border-brand-navy/8

          prose-img:rounded-2xl prose-img:shadow-lg
        ">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>

        {/* ─── BOTTOM CTA STRIP ─── */}
        <div className="mt-16 pt-10 border-t border-brand-navy/8">
          <div className="relative rounded-3xl bg-brand-navy overflow-hidden px-8 sm:px-10 py-10 sm:py-12
            flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            {/* Glow accents */}
            <div className="absolute top-0 left-0 w-48 h-48 bg-brand-coral/10 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-brand-coral/5 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />

            <div className="relative">
              <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-brand-white mb-1">
                Want more insights?
                <span className="text-brand-coral"> Keep reading.</span>
              </h3>
              <p className="text-sm text-brand-white/40 leading-relaxed">
                Explore more articles across ATS, hiring, candidates and IT.
              </p>
            </div>

            <Link
              href="/blog"
              className="relative shrink-0 inline-flex items-center gap-2.5 px-7 py-4 rounded-3xl
                bg-brand-coral hover:bg-brand-coral-hover text-brand-white text-xs font-bold
                tracking-widest uppercase transition-colors duration-200 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to all articles
            </Link>
          </div>
        </div>

      </article>
    </main>
  )
}
