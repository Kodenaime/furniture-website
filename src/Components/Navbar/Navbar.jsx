import React from 'react'
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import logo from '../../Assets/logo.png'
import { links } from './links'
import { AiOutlineBars } from "react-icons/ai";
import { FaRegWindowClose } from "react-icons/fa";

import './navbar.css'

const Navbar = () => {

  const [navShowing, setNavShowing ] = useState(false);

  return (
    <nav>
      <div className="container nav-container">
        <Link to="/" className="logo" onClick={() => setNavShowing(false)} >
          <img src={logo} alt="" />
        </Link>
        <ul className={`nav-links ${navShowing ? 'show-nav' : 'hide-nav'}`}>
            {
              links.map(({name, path}, index ) => {
                return (
                  <li key={index}>
                    <NavLink to={path} className={({ isActive }) => isActive ? 'active-nav' : ''} onClick={() => setNavShowing(prev => !prev)} >{name}</NavLink>
                  </li>
                )
              })
            }
        </ul>
        <button className='nav-btn' onClick={() => setNavShowing(prev => !prev)} >
            {
              navShowing ? <FaRegWindowClose /> : <AiOutlineBars />
            }
        </button>
      </div>
    </nav>
  ) 
}

export default Navbar