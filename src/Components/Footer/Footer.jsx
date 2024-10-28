import React from 'react'

import { Link } from 'react-router-dom'
import logo from '../../Assets/logo.png'
import { BsLinkedin } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";

import './footer.css'
const Footer = () => {
  return (
    <footer className="footer">
        <div className="container footer-container">
            <article>
                <Link to='/' className='logo'>
                    <img src={logo} alt="footer logo" />
                </Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing
                     elit. Possimus, deleniti.
                </p>
                <div className="footer-socials">
                    <a href="https://linkedin.com" target='_blank' rel='noreferrer noopener'><BsLinkedin /></a>
                    <a href="https://facebook.com" target='_blank' rel='noreferrer noopener'><FaSquareFacebook /></a>
                    <a href="https://instagram.com" target='_blank' rel='noreferrer noopener'><FaSquareInstagram /></a>
                    <a href="https://twitter.com" target='_blank' rel='noreferrer noopener'><FaSquareXTwitter /></a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about"><h6>About</h6></Link>
                <Link to="/gallery"><h6>Gallery</h6></Link>
                <Link to="/featured"><h6>Featured</h6></Link>
                <Link to="/workers"><h6>Workers</h6></Link>
                <Link to="/contact"><h6>Contact</h6></Link>
            </article>
            <article>
                <h4>Insights</h4>
                <Link to="/b"><h6>Blog</h6></Link>
                <Link to="/b"><h6>Communities</h6></Link>
                <Link to="/b"><h6>Events</h6></Link>
                <Link to="/b"><h6>Case Studies</h6></Link>
            </article>
            <article>
                <h4>Legal</h4>
                <Link to="/b"><h6>Terms & Conditions</h6></Link>
                <Link to="/b"><h6>Privacy Policy</h6></Link>
                <Link to="/contact"><h6>Contact Us</h6></Link>
            </article>
        </div>
        <div className="footer-down">
            <small>2024 KODE FURNITURES LIMITED &copy; All Rights Reserved </small>
        </div>
    </footer>
  )
}

export default Footer