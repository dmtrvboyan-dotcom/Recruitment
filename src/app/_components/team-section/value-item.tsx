import { memo } from "react"
import { TbPointFilled } from "react-icons/tb"

interface ValueItemProps {
  title: string
  description: string
}

export const ValueItem = memo(function ValueItem({ title, description }: ValueItemProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="text-[#085689] mt-1">
        <TbPointFilled size={32} />
      </div>
      <div>
        <h3 className="font-semibold sm:text-xl text-md mb-1">{title}</h3>
        <p className="text-gray-600 text-sm sm:text-md">{description}</p>
      </div>
    </div>
  )
})