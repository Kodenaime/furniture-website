import React from 'react'
import './home.css'

import Hero  from '../../Components/Hero'
import Products from '../../Components/Products'
import Values from '../../Components/Values'
import FAQs from '../../Components/FAQs'
import Testimonials from '../../Components/Testimonials'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <>
      <Hero />
      <Products />
      <Values />
      <FAQs />
      <Testimonials />
      <Footer />
    </>
  )
}

export default Home