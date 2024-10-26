import React from 'react'

import { useState } from 'react';
import SectionHead from './SectionHead'
import Card from '../UI/Card'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { MdMenuBook } from "react-icons/md";
import { testimonials } from '../Data/testimonials'

const Testimonials = () => {

    const [index, setIndex] = useState(2)
    const {name, quote, job, avatar} = testimonials [index]

  return (
    <section className="testimonials">
        <div className="container test-container">
            <SectionHead icon={<MdMenuBook />} title="Testimonials" className='test-head' />
            <Card className="test">
                <div className="test-avatar">
                    <img src={avatar} alt={name} />
                    <p className='test-quote'>{ `"${quote}"` }</p>
                    <h5> {name }</h5>
                    <small className='test-title'>{ job }</small>
                </div>
            </Card>
            <div className="test-btns">
                <button className="test-btn"><IoIosArrowBack /></button>
                <button className="test-btn"><IoIosArrowForward /></button>
            </div>
        </div>
    </section>
  )
}

export default Testimonials