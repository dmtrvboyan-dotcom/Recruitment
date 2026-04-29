import { memo } from "react"

interface BulletListProps {
  items: string[]
  color: string
}

export const BulletList = memo(function BulletList({ items, color }: BulletListProps) {
  return (
    <ul className="space-y-2 mt-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-slate-700 leading-snug">
          <span
            className="mt-1.5 shrink-0 w-2 h-2 rounded-full"
            style={{ backgroundColor: color }}
          />
          {item}
        </li>
      ))}
    </ul>
  )
})