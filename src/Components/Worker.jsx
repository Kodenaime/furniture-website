import React from 'react'

import Card from '../UI/Card'

const Worker = ({image, name, job, socials}) => {
  return (
    <Card className='worker'>
        <div className="worker-image">
          <img src={image} alt={name} />
        </div>
        <h3>{ name }</h3>
        <p>{ job }</p>
        <div className="worker-socials">
            {
              socials.map(({icon, link}, index) => {
                return <a key={index} href={link} target='_blank' rel='noreffer noopener'>{ icon }</a>
              })
            }
        </div>
    </Card>
  )
}

export default Worker