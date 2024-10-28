import React from 'react'

import { useState } from 'react';
import SectionHead from './SectionHead'
import Card from '../UI/Card'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { MdMenuBook } from "react-icons/md";
import { testimonials } from '../Data/testimonials'

const Testimonials = () => {

    const [index, setIndex] = useState(0)
    const {name, quote, job, avatar} = testimonials[index];

    const prevTest = () => {
        setIndex(prev => prev - 1);

        if(index <= 0) {
            setIndex(testimonials.lenght - 1);
        }
        // else setIndex(prev => prev - 1);
    }

    const nextTest = () => {
        setIndex(prev => prev + 1);
        console.log(index);
        if(index >= testimonials.lenght - 1) {
            setIndex(0);
        }
        // else setIndex(prev => prev + 1);
    }

  return (
    <section className="testimonials">
        <div className="container test-container">
            <SectionHead icon={<MdMenuBook />} title="Testimonials" className='test-head' />
            <Card className="test">
                <div className="test-avatar">
                    <img src={avatar} alt={name} />
                </div>
                <p className='test-quote'>{`"${quote}"`}</p>
                <h5>{name}</h5>
                <small className='test-title'>{ job }</small>
            </Card>
            <div className="test-btns">
                <button className="test-btn" onClick={prevTest}><IoIosArrowBack /></button>
                <button className="test-btn" onClick={nextTest}><IoIosArrowForward /></button>
            </div>
        </div>
    </section>
  )
}

export default Testimonials