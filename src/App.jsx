import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import About from '../src/Pages/About/About'
import Contact from '../src/Pages/Contact/Contact'
import Featured from '../src/Pages/Featured/Featured'
import Gallery from '../src/Pages/Gallery/Gallery'
import Home from '../src/Pages/Home/Home'
import NotFound from './Pages/NotFound/NotFound'
import Workers from './Pages/Workers/Workers'
import Navbar from './Components/Navbar/Navbar'

const App = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='contact' element={<Contact/>} />
          <Route path='gallery' element={<Gallery/>} />
          <Route path='featured' element={<Featured/>} />
          <Route path='workers' element={<Workers/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App