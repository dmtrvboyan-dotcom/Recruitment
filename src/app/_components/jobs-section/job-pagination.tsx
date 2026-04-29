interface JobsPaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function JobsPagination({ currentPage, totalPages, onPageChange }: JobsPaginationProps) {
  if (totalPages <= 1) return null

  const getPageButtons = (): number[] => {
    if (totalPages === 2) return [1, 2]
    const middle =
      currentPage === 1 ? 2
      : currentPage === totalPages ? totalPages - 1
      : currentPage
    return [1, middle, totalPages]
  }

  return (
    <div className="flex items-center gap-1.5 sm:gap-2 ml-auto lg:mt-0 md:mt-0 sm:mt-0 -mt-12">
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center bg-[#f5f5f5] border border-slate-200 text-slate-600 hover:bg-[#085689] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all text-sm"
      >
        ‹
      </button>

      {getPageButtons().map((page, idx) => (
        <button
          key={idx}
          onClick={() => onPageChange(page)}
          className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            currentPage === page
              ? "bg-[#085689] text-white shadow-md"
              : "bg-[#f5f5f5] border border-slate-200 text-slate-600 hover:bg-[#78B6D9] hover:text-white"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center bg-[#f5f5f5] border border-slate-200 text-slate-600 hover:bg-[#085689] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all text-sm"
      >
        ›
      </button>
    </div>
  )
}