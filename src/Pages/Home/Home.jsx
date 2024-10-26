import React from 'react'
import './home.css'

import Hero  from '../../Components/Hero'
import Products from '../../Components/Products'
import Values from '../../Components/Values'
import FAQs from '../../Components/FAQs'
import Testimonials from '../../Components/Testimonials'

const Home = () => {
  return (
    <>
      <Hero />
      <Products />
      <Values />
      <FAQs />
      <Testimonials />
    </>
  )
}

export default Home