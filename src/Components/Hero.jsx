import React from 'react'
import { Link} from 'react-router-dom'
import heroimage from '../Assets/heroimage.jpg'

import '../Pages/Home/home.css'

const Hero = () => {
  return (
    <header className="hero-wrapper">
        <div className="container hero-container">
            <div className="hero-left">
                <h4>We Aim to Meet your Furniture Needs</h4>
                <h1>Get in touch with us today</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolore placeat, fuga obcaecati quae odit!
                </p>
                <Link to="/gallery" className='btn' >Explore</Link>
            </div>
            <div className="hero-right">
                <div className="hero-circle"></div>
                <img src={heroimage} alt="" />
            </div>
        </div>
    </header>
  )
}

export default Hero