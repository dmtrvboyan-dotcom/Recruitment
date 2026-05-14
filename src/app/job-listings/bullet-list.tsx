import { memo } from "react"

interface BulletListProps {
  items: string[]
  color: string
}

export const BulletList = memo(function BulletList({ items, color }: BulletListProps) {
  return (
    <ul className="space-y-2.5 mt-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-brand-navy/70 leading-snug">
          <span
            className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: color || 'var(--color-brand-blue)' }}
          />
          {item}
        </li>
      ))}
    </ul>
  )
})