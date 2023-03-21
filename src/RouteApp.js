import React from 'react'
import Home from './Pages/Home/Home';
import Films from './Pages/Film/Films'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../src/Pages/Header/Header'
import Intro from '../src/Pages/Intro/Intro'


const RouteApp = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/film/:id" element={ <Films/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteApp