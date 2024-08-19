import React, { useState, useEffect } from 'react'
import './Footer.css'

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import footer_img from '../Assets/logo-white.png'
import { FaArrowUp } from "react-icons/fa";


const Footer = () => {

    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 300) {
            setShowScroll(true);
        }else if (showScroll && window.pageYOffset <= 300) {
            setShowScroll(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo( {top:0, behavior:'smooth'});
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop);
    }, [showScroll]);

  return (
    <div className='footer'>
        <div className="footer-top flex justify-between items-center gap-4">
            <img src={footer_img} alt="" />
            <div className="link flex items-center gap-5">
                <a href="/#">home</a>
                <a href="/#">Blog</a>
                <a href="/#">About Us</a>
                <a href="/#">Contact Us</a>
            </div>
            <div className="social flex items-center gap-4">
                <span><FaFacebookF /></span>
                <span><FaTwitter /></span>
                <span><FaLinkedinIn /></span>
                <span><FaInstagram /></span>
            </div>
        </div>
        <div className="footer-bottom text-center mt-5">
            <p>&copy; Carency 2024, Mada With CodeSlaves Design</p>
        </div>
        <i className={`scrollTop ${showScroll ? 'show' : ''}`} onClick={scrollTop}>
            <span><FaArrowUp /></span>
        </i>
    </div>
  )
}

export default Footer