import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Profile from './Profile'
import Footer from '../../components/Footer'
import Navbar from '../../components/Header/Navbar'

export default function index() {
    return (
        <>
            <Navbar />
            <main>
                <Routes>
                    <Route path='/profile' element={<Profile />} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}
