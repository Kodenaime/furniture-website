import React from 'react'

import Header from '../../Components/Header'
import headerImage from '../../Assets/header_bg_2.jpg'
import { FaFacebookMessenger } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";


import './contact.css'

const Contact = () => {
  return (
    <>
      <Header title="Get in Touch" image={headerImage}>
          Lorem ipsum dolor sit, 
          amet consectetur adipisicing elit. Corrupti, error.
      </Header>
      <section className="contact">
        <div className="container contact-container">
          <div className="contact-wrap">
            <a href='mailto:daniel@gmail.com' target='_blank' rel='noreferrer noopener'><MdAttachEmail /></a>
            <a href='http://m.me/facebook.com' target='_blank' rel='noreferrer noopener'><FaFacebookMessenger /></a>
            <a href='https://wa.me+2348068564195' target='_blank' rel='noreferrer noopener'><IoLogoWhatsapp /></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact