import React from 'react'
import logo from '../../assets/logo/Logo-02.png'
import arrow from '../../assets/svg/arrows/arrow_left.svg'

import { Link } from 'react-router-dom'

function SubpageCard({ img, title }) {
  return (
    <Link to='/'>
      <div className='px-4 w-full h-[320px] group cursor-pointer'>
        <div className='relative rounded-3xl overflow-hidden w-full h-full'>
          <img src={img} className='w-full h-full object-cover' alt='Image' />

          <div className='absolute inset-0 flex flex-col justify-end items-end bg-black bg-opacity-30 text-white p-12'>
            <h2 className='text-6xl font-medium group-hover:text-mainHover transition-colors duration-300'>
              {title}
            </h2>
          </div>
          <div className='absolute text-white inset-0 justify-start items-start mr-auto w-fit p-4'>
            <img src={arrow} alt='arrow' className='h-[60px] m-6' />
          </div>
          <div className='absolute text-white inset-0 justify-start items-end ml-auto w-fit p-4'>
            <img src={logo} alt='logo' className='h-[40px] m-6' />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default SubpageCard
