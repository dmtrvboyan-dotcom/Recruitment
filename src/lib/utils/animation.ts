export interface AnimationConfig {
  duration: number
  steps: number
}

const DEFAULT_COUNTER_CONFIG: AnimationConfig = {
  duration: 1000,
  steps: 50,
}

export function parseValueWithSuffix(value: string): {
  numericValue: number
  suffix: string
} {
  const numericValue = parseInt(value.replace(/\D/g, '')) || 0
  const suffix = value.replace(/[0-9]/g, '')
  return { numericValue, suffix }
}

export function animateCounter(
  target: number,
  onUpdate: (value: number) => void,
  config: AnimationConfig = DEFAULT_COUNTER_CONFIG
): () => void {
  const { duration, steps } = config
  const increment = target / steps
  let current = 0

  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      onUpdate(target)
      clearInterval(timer)
    } else {
      onUpdate(Math.floor(current))
    }
  }, duration / steps)

  return () => clearInterval(timer)
}

export const SCROLL_REVEAL_CONFIG = {
  initial: {
    opacity: 0,
    y: 60,
    scale: 0.96,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  transition: {
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1],
  },
  viewport: {
    once: true,
    amount: 0.2,
  },
}