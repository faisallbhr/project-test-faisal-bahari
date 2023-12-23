import axios from 'axios';
import { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import ContentControl from '../components/ContentControl';
import PaginationControl from '../components/PaginationControl';

export default function Ideas() {
    const storedPage = localStorage.getItem('currentPage') || 1
    const storedPageSize = localStorage.getItem('pageSize') || 10
    const storedSortBy = localStorage.getItem('sortBy') || '-published_at'

    const [currentPage, setCurrentPage] = useState(Number(storedPage))
    const [pageSize, setPageSize] = useState(Number(storedPageSize))
    const [sortBy, setSortBy] = useState(storedSortBy)
    const [ideas, setIdeas] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        localStorage.setItem('currentPage', currentPage)
        localStorage.setItem('pageSize', pageSize)
        localStorage.setItem('sortBy', sortBy)
    }, [currentPage, pageSize, sortBy])

    useEffect(() => {
        const fetchIdeas = async () => {
            try {
                const res = await axios.get(`https://suitmedia-backend.suitdev.com/api/ideas?page[number]=${currentPage}&page[size]=${pageSize}&append[]=small_image&append[]=medium_image&sort=${sortBy}`)
                setIdeas(res.data)
                setIsLoading(false)
            } catch (err) {
                console.log(err)
            }
        }

        fetchIdeas()
    }, [currentPage, pageSize, sortBy])

    const handlePageSizeChange = (e) => {
        setPageSize(parseInt(e.target.value, 10))
    }

    const handleSortChange = (e) => {
        setSortBy(e.target.value)
    }

    const totalItems = ideas?.meta?.total || 0
    console.log(ideas);
    return (
        <>
            <Banner />

            <div className='py-10 max-w-7xl mx-auto'>
                <ContentControl
                    pageSize={pageSize}
                    currentPage={currentPage}
                    totalItems={totalItems}
                    sortBy={sortBy}
                    handlePageSizeChange={handlePageSizeChange}
                    handleSortChange={handleSortChange}
                />

                <div className='flex flex-wrap justify-center gap-8 py-4'>
                    {
                        isLoading ?
                            <p>Loading...</p>
                            :
                            <Card ideas={ideas} />
                    }
                </div>

                <PaginationControl
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                    ideas={ideas}
                />
            </div>
        </>
    )
}
