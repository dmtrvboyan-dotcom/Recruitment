'use client'

import { memo, type ReactNode, useEffect, useState } from 'react'
import { SCROLL_REVEAL_CONFIG } from '@/lib/utils/animation'

export interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  duration?: number
  y?: number
  scale?: number
  blur?: number
  once?: boolean
  className?: string
}

export const ScrollReveal = memo(function ScrollReveal({
  children,
  className = '',
  delay = 0,
  duration = SCROLL_REVEAL_CONFIG.transition.duration,
  y = 60,
  scale = 0.96,
  once = true,
}: ScrollRevealProps) {
  const [MotionDiv, setMotionDiv] = useState<React.ElementType | null>(null)

  useEffect(() => {
    import('framer-motion').then((m) => setMotionDiv(() => m.motion.div))
  }, [])

  if (!MotionDiv) {
    return <div className={className}>{children}</div>
  }

  return (
    <MotionDiv
      className={className}
      initial={{ opacity: 0, y, scale }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once, amount: 0.05 }}
      transition={{ duration, delay, ease: SCROLL_REVEAL_CONFIG.transition.ease }}
    >
      {children}
    </MotionDiv>
  )
})