import React from 'react'
import './Services.css'

import s_1 from '../Assets/s-1.jpg'
import s_2 from '../Assets/s-2.jpg'
import s_3 from '../Assets/s-3.jpg'

const Services = () => {
  return (
    <div className='services'>
        <div className='header text-center pt-6 pb-6 mb-3'>
            <h4 className='pt-6'>What We Provide</h4>
            <h2>Our Services</h2>
        </div>
        <div className="service-row grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="service-box">           
                <div className="image">
                    <img src={s_1} alt="" />
                </div>
                <div className="content p-6">
                    <h4 className='pt-5 font-bold'>Delivery</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quam.</p>
                    <a href="/#">read more</a>
                    <span>01</span>
                </div>
            </div>
            <div className="service-box">           
                <div className="image">
                    <img src={s_2} alt="" />
                </div>
                <div className="content p-6">
                    <h4 className='pt-5 font-bold'>Servicing</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quam.</p>
                    <a href="/#">read more</a>
                    <span>02</span>
                </div>
            </div>
            <div className="service-box">           
                <div className="image">
                    <img src={s_3} alt="" />
                </div>
                <div className="content p-6">
                    <h4 className='pt-5 font-bold'>Vehicle Soucing</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quam.</p>
                    <a href="/#">read more</a>
                    <span>03</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services