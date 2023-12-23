import React from 'react'

export default function PaginationControl({ setCurrentPage, currentPage, ideas }) {
    return (
        <div className="flex items-center justify-center py-4">
            <button
                onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
                disabled={currentPage === 1}
                className={`px-3 py-1 focus:outline-none text-xl ${currentPage === (1) ? 'font-normal text-gray-400' : 'font-bold'}`}
            >
                &lt;
            </button>
            {Array.from({ length: Math.min(ideas?.meta?.last_page || 1, 5) }, (_, index) => {
                const totalPages = ideas?.meta?.last_page || 1
                const pageNumber = index + 1
                let displayPageNumber = pageNumber

                if (currentPage > 3 && totalPages > 5) {
                    displayPageNumber = currentPage - 3 + index
                }

                if (currentPage > totalPages - 3 && totalPages > 5) {
                    displayPageNumber = totalPages - 5 + index + 1
                }

                if (displayPageNumber >= 1 && displayPageNumber <= totalPages) {
                    return (
                        <button
                            key={displayPageNumber}
                            onClick={() => setCurrentPage(displayPageNumber)}
                            className={`px-3 py-1 font-semibold focus:outline-none ${currentPage === displayPageNumber ? 'text-white bg-primary rounded-md' : ''}`}
                        >
                            {displayPageNumber}
                        </button>
                    )
                }
                return null
            })}
            <button
                onClick={() => setCurrentPage((prevPage) => Math.min(prevPage + 1, ideas?.meta?.last_page || 1))}
                disabled={currentPage === (ideas?.meta?.last_page || 1)}
                className={`px-3 py-1 focus:outline-none text-xl ${currentPage === (ideas?.meta?.last_page) ? 'font-normal text-gray-400' : 'font-bold'}`}
            >
                &gt;
            </button>
        </div>
    )
}
