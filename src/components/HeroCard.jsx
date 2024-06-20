import React from 'react'
import arrow from '../assets/svg/arrows/arrow_up_right.svg'

function HeroCard({ img, title, desc }) {
  return (
    <div className='max-w-[440px] h-[640px] group cursor-pointer'>
      <div className='relative overflow-hidden'>
        <img src={img} className='w-full h-full object-cover' alt='Image' />

        <div className='bg-black bg-opacity-30 rounded-[2.5rem] absolute inset-0 flex flex-col justify-end items-start text-white p-8'>
          <h2 className='text-2xl font-bold group-hover:text-mainHover transition-colors duration-300'>
            {title}
          </h2>
          <p className='mt-2 group-hover:text-mainHover transition-colors duration-300 h-[60px] text-sm'>
            {desc}
          </p>
        </div>
        <div className='absolute text-white inset-0 justify-start items-end ml-auto w-fit p-4'>
          <img src={arrow} alt='arrow' className='h-[60px]' />
        </div>
      </div>
    </div>
  )
}

export default HeroCard
