import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import Home from './Home'
import About from './About'
import Contact from './Contact'
export default function index() {
  return (
    <>
      <Header />
      <main>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/todos' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
