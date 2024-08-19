import React from 'react'
import './Brand.css'

import v_1 from '../Assets/v-1.jpg'
import v_2 from '../Assets/v-2.jpg'
import v_3 from '../Assets/v-3.jpg'
import v_4 from '../Assets/v-4.jpg'

const Brand = () => {
  return (
    <div className='brand bg-gray-300 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        <div className="brand-box text-center p-4">
            <img src={v_1} alt="" />
            <h4 className='pt-3 font-bold'>Lexus GS 450S</h4>
        </div>
        <div className="brand-box text-center p-4">
            <img src={v_2} alt="" />
            <h4 className='pt-3 font-bold'>Toyota Corolla</h4>
        </div>
        <div className="brand-box text-center p-4">
            <img src={v_3} alt="" />
            <h4 className='pt-3 font-bold'>Hyundai Santa Fe</h4>
        </div>
        <div className="brand-box text-center p-4">
            <img src={v_4} alt="" />
            <h4 className='pt-3 font-bold'>Acura RSX</h4>
        </div>
    </div>
  )
}

export default Brand