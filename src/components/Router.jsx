import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Ideas from '../pages/Ideas'
import Blank from '../pages/Blank'

export default function Router() {
    return (
        <Routes>
            <Route path='/ideas' element={<Ideas />} />
            <Route path='/' element={<Blank />} />
            <Route path='*' element={<Blank />} />
        </Routes>
    )
}
