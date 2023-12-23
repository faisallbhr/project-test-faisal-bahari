import React from 'react'

export default function ContentControl({ pageSize, currentPage, totalItems, sortBy, handlePageSizeChange, handleSortChange }) {
    return (
        <div className='flex items-center justify-between'>
            <p>Showing {Math.min(pageSize * (currentPage - 1) + 1, totalItems)} - {Math.min(pageSize * currentPage, totalItems)} of {totalItems}</p>
            <div className='flex items-center gap-10'>
                <div>
                    <label htmlFor="pageSize">Show per page:</label>
                    <select
                        id="pageSize"
                        value={pageSize}
                        onChange={handlePageSizeChange}
                        className='border border-gray-300 rounded-md px-2 ml-2'
                    >
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={50}>50</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="sort">Sort by:</label>
                    <select
                        id="sort"
                        value={sortBy}
                        onChange={handleSortChange}
                        className='border border-gray-300 rounded-md px-2 ml-2'
                    >
                        <option value="-published_at">Newest</option>
                        <option value="published_at">Latest</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
