import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Ideas from '../pages/Ideas'
import Blank from '../pages/Blank'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/ideas' element={<Ideas />}></Route>
                <Route path='/' element={<Blank />}></Route>
                <Route path='*' element={<Blank />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
