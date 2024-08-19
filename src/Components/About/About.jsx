import React from 'react'
import './About.css'
import about_img from '../Assets/about-img.jpg'

import { RiEBikeFill } from "react-icons/ri";
import { FaCarRear } from "react-icons/fa6";


const About = () => {
  return (
    <div className='about grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-300'>
        <div className="p-4">
            <img src={about_img} alt="" />
        </div>
        <div className="content p-4">
            <h4 className='text-orange-500'>About Us</h4>
            <h2 className='pt-4'>Automative Car & Bike <br /> Template</h2>
            <p className='pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda magnam quos nihil porro explicabo quod corporis accusantium eum autem dicta.</p>

            <div className="type grid grid-cols-1 md:grid-cols-2 mt-6 mb-6 gap-2">
                <div className="type-box flex items-center gap-3">
                    <span className='text-orange-500'><RiEBikeFill /></span>
                    <div className="details">
                        <h6>Motor Bike Shop</h6>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium nulla obcaecati dignissimos!</p>
                    </div>
                </div>
                <div className="type-box flex items-center gap-3">
                    <span className='text-orange-500'><FaCarRear /></span>
                    <div className="details">
                        <h6>Car Agency</h6>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium nulla obcaecati dignissimos!</p>
                    </div>
                </div>
            </div>

            <button className='mt-6'>get a quote</button>
        </div>   
    </div>
  )
}

export default About