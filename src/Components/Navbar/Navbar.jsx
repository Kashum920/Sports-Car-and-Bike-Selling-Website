import React from 'react'
import './Navbar.css'

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";

import logo from '../Assets/logo.png'
import { FaPhoneAlt } from "react-icons/fa";


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="top-navbar flex justify-between pt-3 bg-orange-500">
            <div className="mail flex items-center gap-2">
                <span><FaRegEnvelope /></span>
                <p>Info@gmail.com</p>
            </div>
            <div className="social flex items-center gap-5">
                <span><FaFacebookF /></span>
                <span><FaTwitter /></span>
                <span><FaLinkedinIn /></span>
                <span><FaInstagram /></span>
                <button className='bg-black pt-3 pb-3 ml-6 pl-6 pr-6 text-white'>get a quote</button>
            </div>
        </div>

        <div className="bottom-navbar flex justify-between items-center">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="navLinks">
                <a href="/#">about</a>
                <a href="/#">services</a>
                <a href="/#">team</a>
                <a href="/#">pricing</a>
                <a href="/#">testimonial</a>
                <a href="/#">blog</a>
                <a href="/#">contact us</a>
            </div>
            <div className="contact flex items-center gap-4">
                <span className='text-orange-500'><FaPhoneAlt /></span>
                <div className="details">
                    <h4 className='text-orange-500 text-bold'>Free call</h4>
                    <p>212 386 7890</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar