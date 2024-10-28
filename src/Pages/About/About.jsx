import React from 'react'

import Header from '../../Components/Header'
import headerImage from '../../Assets/header_bg_1.jpg'
import about1 from '../../Assets/about1.jpg'
import about2 from '../../Assets/about2.jpg'
import about3 from '../../Assets/about3.jpg'

import './about.css'

const About = () => {
  return (
    <>
      <Header title="About Us" image={headerImage}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.  
         Necessitatibus, tenetur.
      </Header>

      <section className="about">
        <div className="container about-container">
          <div className="about-image">
            <img src={about1} alt="our story image" />
          </div>
          <div className="about-content">
            <h1>Our Story</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Dignissimos placeat, blanditiis necessitatibus obcaecati 
              alias nobis eius nostrum dolores a vel repellendus aut veritatis
               voluptates molestias ad amet ullam numquam id!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Vero aliquid, soluta voluptatem ratione vitae ut assumenda
                temporibus mollitia nihil hic!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Voluptas, laudantium sunt. Molestiae.</p>
          </div>
        </div>
      </section>

      <section className="vision">
        <div className="container vision-container">
         
          <div className="about-content">
            <h1>Our Vision</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Dignissimos placeat, blanditiis necessitatibus obcaecati 
              alias nobis eius nostrum dolores a vel repellendus aut veritatis
               voluptates molestias ad amet ullam numquam id!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Vero aliquid, soluta voluptatem ratione vitae ut assumenda
                temporibus mollitia nihil hic!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Voluptas, laudantium sunt. Molestiae.</p>
          </div>
          <div className="about-image">
            <img src={about2} alt="our vision image" />
          </div>
        </div>
      </section>

      <section className="mission">
        <div className="container about-container">
          <div className="about-image">
            <img src={about3} alt="our mission image" />
          </div>
          <div className="about-content">
            <h1>Our Mission</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Dignissimos placeat, blanditiis necessitatibus obcaecati 
              alias nobis eius nostrum dolores a vel repellendus aut veritatis
               voluptates molestias ad amet ullam numquam id!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Vero aliquid, soluta voluptatem ratione vitae ut assumenda
                temporibus mollitia nihil hic!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Voluptas, laudantium sunt. Molestiae.</p>
          </div>
        </div>
      </section>

    </>
  )
}

export default About