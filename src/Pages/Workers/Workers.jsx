import React from 'react'

import Header from '../../Components/Header'
import headerImage from '../../Assets/header_bg_5.jpg'
import { workers } from '../../Data/workers'
import { BsLinkedin } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import Worker from '../../Components/Worker'

import './workers.css'

const Workers = () => {
  return (
    <>
      <Header title="Our Workers" image={headerImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Vitae autem nesciunt eos!
      </Header>

      <section className="workers">
        <div className="container workers-container">
          {
            workers.map(({id, image, name, job, socials}) => {
              return <Worker key={id} image={image} name={name} job={job} socials={
                [                  
                  {icon: <FaSquareInstagram />, link: socials[0]},
                  {icon: <FaSquareXTwitter />, link: socials[1]},
                  {icon: <FaSquareFacebook />, link: socials[2]},
                  {icon: <BsLinkedin />, link: socials[3]}
                ]
              } />
            })
          } 
        </div>
      </section>

    </>
  )
}

export default Workers