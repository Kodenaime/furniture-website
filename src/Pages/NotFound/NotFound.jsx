import React from 'react'

import { Link } from 'react-router-dom'
import './notfound.css'

const NotFound = () => {
  return (
    <section>
      <div className="container notfound">
        <h2>Page Not Found</h2>
        <Link to="/" className='btn'>Return Home</Link>
      </div>
    </section>
  )
}

export default NotFound