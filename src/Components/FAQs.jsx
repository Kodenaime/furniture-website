import React from 'react'

import SectionHead from './SectionHead'
import { FaFileCircleQuestion } from "react-icons/fa6";
import { faqs } from '../Data/faqs'
import FAQ from './FAQ';

const FAQs = () => {
  return (
    <section className="faqs">
        <div className="container faqs-container">
            <SectionHead icon={ <FaFileCircleQuestion /> } title="FAQs" />
            <div className="faqs-cards">
                { 
                    faqs.map(({id, question, answer}) => {
                        return <FAQ key={id} question={question} answer={answer} />
                    })
                }
            </div>
        </div>
    </section>
  ) 
}

export default FAQs