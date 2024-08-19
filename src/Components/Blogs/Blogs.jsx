import React from 'react'
import './Blogs.css'

import blog_1 from '../Assets/blog-1.jpg'
import blog_2 from '../Assets/blog-2.jpg'
import blog_3 from '../Assets/blog-3.jpg'

import { FaRegUserCircle } from "react-icons/fa";
import { LuMessageSquare } from "react-icons/lu";


const Blogs = () => {
  return (
    <div className='blogs bg-gray-300'>
        <div className="header text-center mb-5">
            <h4>Client's Feedback</h4>
            <h2>Our Blogs</h2>
        </div>
        <div className="blog-row flex gap-5">
            <div className="blog-box">
                <div className="buttons flex gap-4">
                    <button>Carler</button>
                    <button>Lexus GS 450S</button>
                    <button>Toyota Corolla</button>
                </div>
                <img className='blog-img' src={blog_1} alt="" />
            </div>
            <div className="blog-box">
                <div className="blog-text flex gap-3">
                    <div className="image">
                        <img src={blog_2} alt="" />
                    </div>
                    <div className="content">
                        <h3>2021 Audi A4 Review: <br /> One of The Best Luxury Cars</h3>
                        <p className='pb-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

                        <div className="profile flex gap-5">
                            <p><span className='inline-flex mr-3'><FaRegUserCircle /></span>D. WILLIAM</p>
                            <p><span className='inline-flex mr-3'><LuMessageSquare /></span>0</p>
                        </div>
                    </div>
                </div>
                <div className="blog-text flex gap-3">
                    <div className="image">
                        <img src={blog_3} alt="" />
                    </div>
                    <div className="content">
                        <h3>2021 Audi A4 Review: <br /> One of The Best Luxury Cars</h3>
                        <p className='pb-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

                        <div className="profile flex gap-5">
                            <p><span className='inline-flex mr-3'><FaRegUserCircle /></span>D. WILLIAM</p>
                            <p><span className='inline-flex mr-3'><LuMessageSquare /></span>0</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blogs