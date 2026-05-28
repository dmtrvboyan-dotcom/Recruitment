import { ChevronLeft, ChevronRight } from "lucide-react"

interface JobsPaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function JobsPagination({
  currentPage,
  totalPages,
  onPageChange,
}: JobsPaginationProps) {
  if (totalPages <= 1) return null

  const getPageButtons = (): number[] => {
    if (totalPages === 2) return [1, 2]
    const middle =
      currentPage === 1
        ? 2
        : currentPage === totalPages
          ? totalPages - 1
          : currentPage
    return [1, middle, totalPages]
  }

  return (
    <div className="flex items-center gap-1.5">
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="w-9 h-9 rounded-full flex items-center justify-center border border-brand-navy/15 text-brand-navy/60 hover:border-brand-coral hover:text-brand-coral disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200 cursor-pointer"
        aria-label="Previous page"
      >
        <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
      </button>

      {getPageButtons().map((page, idx) => (
        <button
          key={idx}
          onClick={() => onPageChange(page)}
          className={`w-9 h-9 rounded-full text-xs font-semibold tracking-wider transition-colors duration-200 tabular-nums cursor-pointer ${
            currentPage === page
              ? "bg-brand-coral text-brand-white"
              : "border border-brand-navy/15 text-brand-navy/60 hover:border-brand-coral hover:text-brand-coral"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="w-9 h-9 rounded-full flex items-center justify-center border border-brand-navy/15 text-brand-navy hover:border-brand-coral hover:text-brand-coral disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200 cursor-pointer"
        aria-label="Next page"
      >
        <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
      </button>
    </div>
  )
}
