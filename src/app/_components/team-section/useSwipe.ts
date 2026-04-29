import { useRef, useCallback } from "react"

const MIN_SWIPE_DISTANCE = 50

interface UseSwipeOptions {
  onSwipeLeft: () => void
  onSwipeRight: () => void
  onSwiped?: () => void
}

export function useSwipe({ onSwipeLeft, onSwipeRight, onSwiped }: UseSwipeOptions) {
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchEndX.current = null
    touchStartX.current = e.targetTouches[0].clientX
  }, [])

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }, [])

  const onTouchEnd = useCallback(() => {
    if (!touchStartX.current || !touchEndX.current) return

    const distance = touchStartX.current - touchEndX.current

    if (distance > MIN_SWIPE_DISTANCE) {
      onSwipeLeft()
      onSwiped?.()
    } else if (distance < -MIN_SWIPE_DISTANCE) {
      onSwipeRight()
      onSwiped?.()
    }

    touchStartX.current = null
    touchEndX.current = null
  }, [onSwipeLeft, onSwipeRight, onSwiped])

  return { onTouchStart, onTouchMove, onTouchEnd }
}