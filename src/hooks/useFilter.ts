import { useState } from 'react'

export const useFilter = <T extends Record<string, unknown>>(
    data: T[],
    filterKey: keyof T
) => {
    const [filter, setFilter] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const ITEMS_PER_PAGE = 5

    const filteredData = data.filter(item =>
        String(item[filterKey]).toLowerCase().includes(filter.toLowerCase())
    )

    const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE)

    const paginatedData = filteredData.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    )

    const handleFilter = (value: string) => {
        setFilter(value)
        setCurrentPage(1)
    }

    return {
        filter,
        handleFilter,
        paginatedData,
        currentPage,
        setCurrentPage,
        totalPages,
    }
}