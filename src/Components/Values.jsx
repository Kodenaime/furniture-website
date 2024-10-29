import React from 'react'
import value from '../Assets/value.jpg'
import SectionHead from '../Components/SectionHead'
import { GiShakingHands } from "react-icons/gi";
import { values } from '../Data/values'
import Card from '../UI/Card'

const Values = () => {
  return (
    <section className="values">
        <div className="container values-container">
            <div className="values-left">
                <div className="values-image">
                    <img src={value} alt="values image" />
                </div>
            </div>    
            <div className="values-right">
                <SectionHead icon={<GiShakingHands />} title="Values"></SectionHead>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam quibusdam voluptates architecto, expedita perspiciatis distinctio.</p>
                <div className="values-cards">
                    {
                        values.map(({id, icon, title, desc}) => {
                            return <Card key={id}  className="values-value">
                                <span>{ icon }</span>
                                <h4>{ title }</h4>
                                <small>{ desc }</small>
                            </Card>
                        })
                    }
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Values