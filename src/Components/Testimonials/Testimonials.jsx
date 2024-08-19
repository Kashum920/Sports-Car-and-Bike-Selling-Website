import React from 'react'
import './Testimonials.css'

import c_1 from '../Assets/c-1.jpg'
import c_2 from '../Assets/c-2.jpg'

import { FaQuoteRight } from "react-icons/fa";


const Testimonials = () => {
  return (
    <div className='testimonials'>
        <div className="header text-center mb-5">
            <h4>Client's Feedback</h4>
            <h2>Our Testimonial</h2>
        </div>

        <div className="test-row pt-5 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
            <div className="test-box">
                <div className="title flex gap-4 items-center mb-5">
                    <img src={c_1} alt="" />
                    <div className="position flex gap-2 items-center">
                        <h3>Maria Heny</h3>
                        <h6>manager</h6>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae cupiditate ducimus atque itaque harum nostrum ut rem repellat saepe reprehenderit.</p>
                <span className='circle'></span>
                <span className="icon"><FaQuoteRight /></span>
            </div>
            <div className="test-box">
                <div className="title flex gap-4 items-center mb-5">
                    <img src={c_2} alt="" />
                    <div className="position flex gap-2 items-center">
                        <h3>Maria Heny</h3>
                        <h6>manager</h6>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae cupiditate ducimus atque itaque harum nostrum ut rem repellat saepe reprehenderit.</p>
                <span className='circle'></span>
                <span className="icon"><FaQuoteRight /></span>
            </div>
        </div>
    </div>
  )
}

export default Testimonials