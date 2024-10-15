import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { links } from './links'
import { AiOutlineBars } from "react-icons/ai";

import './navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div className="container nav-container">
        <Link to="/" className="logo">
          KODE
        </Link>
        <ul className="nav-links">
            {
              links.map(({name, path}, index ) => {
                return (
                  <li>
                    <NavLink to={path}>{name}</NavLink>
                  </li>
                )
              })
            }
        </ul>
        <button className='nav-btn'>
          <AiOutlineBars />
        </button>
      </div>
    </nav>
  )
}

export default Navbar