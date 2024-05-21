import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import About from '../pages/About'
import BetterPracties from '../pages/BetterPracties'
import Careers from '../pages/Careers'
import Contact from '../pages/Contact'
import OurbrandsDetails from '../pages/OurbrandsDetails'
import Ourbrands from '../pages/Ourbrands'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/better_practices" element={<BetterPracties />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/our_brands" element={<Ourbrands />} />
        <Route path="/:id" element={<OurbrandsDetails />} />
        <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default AllRoutes