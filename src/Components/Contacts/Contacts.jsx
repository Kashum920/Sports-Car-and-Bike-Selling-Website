import React from 'react'
import './Contacts.css'

import { RiImageEditFill } from "react-icons/ri";
import { TbWorldDollar } from "react-icons/tb";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const Contacts = () => {
  return (
    <div className='contacts'>
        <div className="contact-row flex justify-between gap-5">
            <div className="contact-form w-full">
                <form action="" className='shadow p-5 bg-white w-3/4 rounded-3xl'>
                    <h1>Get in <span>Touch</span></h1>
                    <p>We Will Be Happy To Assist You</p>

                    <div className="input-box">
                        <input type="text" placeholder='Enter Full Name' />
                        <span><FaUser /></span>
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder='Email' />
                        <span><MdEmail /></span>
                    </div>

                    <textarea name="" id="" rows={3} placeholder='Leave Us a Message'></textarea>

                    <button className='mt-5'>send</button>
                </form>
            </div>

            <div className="contacts-details w-full">
                <div className="contact-box">
                    <span><RiImageEditFill /></span>
                    <div className="content">
                        <h4>Trusted Dealer</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, sequi.</p>
                    </div>
                </div>
                <div className="contact-box">
                    <span><TbWorldDollar /></span>
                    <div className="content">
                        <h4>Most Awarded</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, sequi.</p>
                    </div>
                </div>
                <div className="contact-box">
                    <span><FaPhoneVolume /></span>
                    <div className="content">
                        <h4>Trusted Dealer</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, sequi.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contacts