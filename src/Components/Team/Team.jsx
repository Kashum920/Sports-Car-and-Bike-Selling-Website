import React from 'react'
import './Team.css'

import t_1 from '../Assets/t-1.jpg'
import t_2 from '../Assets/t-2.jpg'
import t_3 from '../Assets/t-3.jpg'

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const Team = () => {
  return (
    <div className='team bg-gray-300'>
        <div className="header text-center mb-5">
            <h4>Meet Our Team</h4>
            <h2>Creative Team</h2>
        </div>
        <div className="team-row pt-5 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <div className="team-box">
                <img src={t_1} alt="" />
                <div className="name">
                    <h4>Thomas Bransom</h4>
                    <p>Valuar</p>
                </div>
                <div className="social flex gap-4">
                    <span><FaFacebookF /></span>
                    <span><FaTwitter /></span>
                    <span><FaInstagram /></span>
                    <span><FaLinkedinIn /></span>
                </div>
            </div>
            <div className="team-box">
                <img src={t_2} alt="" />
                <div className="name">
                    <h4>Thomas Bransom</h4>
                    <p>Valuar</p>
                </div>
                <div className="social flex gap-4">
                    <span><FaFacebookF /></span>
                    <span><FaTwitter /></span>
                    <span><FaInstagram /></span>
                    <span><FaLinkedinIn /></span>
                </div>
            </div>
            <div className="team-box">
                <img src={t_3} alt="" />
                <div className="name">
                    <h4>Thomas Bransom</h4>
                    <p>Valuar</p>
                </div>
                <div className="social flex gap-4">
                    <span><FaFacebookF /></span>
                    <span><FaTwitter /></span>
                    <span><FaInstagram /></span>
                    <span><FaLinkedinIn /></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team