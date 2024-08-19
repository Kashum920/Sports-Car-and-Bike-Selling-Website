import React from 'react'
import './Price.css'

const Price = () => {
  return (
    <div className='price bg-gray-300'>
        <div className="header text-center mb-5">
            <h4>Price & Plans</h4>
            <h2>Our Pricing</h2>
        </div>

        <div className="price-row pt-5 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <div className="price-box">
                <div className="top text-center">
                    <h6>Silver Plan</h6>
                    <h3>$12.99</h3>
                    <p className='text'>Per Vehicle</p>
                </div>

                <div className="features">
                    <p><span></span>1 Time Servicing</p>
                    <p><span></span>1 Year Battery Warranty</p>
                    <p><span></span>1 Year Insurance</p>
                    <p><span></span>3 Time Washing</p>
                </div>
                <button className='mt-5 mb-5'>Purchase Now</button>
            </div>
            <div className="price-box">
                <div className="top text-center">
                    <h6>Gold Plan</h6>
                    <h3>$120.99</h3>
                    <p className='text'>Per Vehicle</p>
                </div>

                <div className="features">
                    <p><span></span>1 Time Servicing</p>
                    <p><span></span>1 Year Battery Warranty</p>
                    <p><span></span>1 Year Insurance</p>
                    <p><span></span>3 Time Washing</p>
                </div>
                <button className='mt-5 mb-5'>Purchase Now</button>
            </div>
            <div className="price-box">
                <div className="top text-center">
                    <h6>Diamond Plan</h6>
                    <h3>$150.99</h3>
                    <p className='text'>Per Vehicle</p>
                </div>

                <div className="features">
                    <p><span></span>1 Time Servicing</p>
                    <p><span></span>1 Year Battery Warranty</p>
                    <p><span></span>1 Year Insurance</p>
                    <p><span></span>3 Time Washing</p>
                </div>
                <button className='mt-5 mb-5'>Purchase Now</button>
            </div>
        </div>
    </div>
  )
}

export default Price