import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import coffebreak from '../assets/svg/coffebreak.svg'
import accepttask from '../assets/svg/accepttask.svg'
import tempwork from '../assets/svg/tempwork.svg'

function SliderEmployers() {
  return (
    <div className='mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        //   navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] w-[300px] rounded-xl p-4 bg-white mx-0'
      >
        <SwiperSlide className='mt-4'>
          <div className='h-[250px] w-[500px] flex flex-col'>
            <p className='text-xl'>Outsourcing pracowniczy</p>
            <img src={coffebreak} className='my-auto flex' />
          </div>
        </SwiperSlide>
        <SwiperSlide className='mt-4'>
          <div className='h-[250px] w-[500px] flex flex-col'>
            <p className='text-xl'>Rekrutacja na zlecenie</p>
            <img src={accepttask} className='my-auto flex h-[180px]' />
          </div>
        </SwiperSlide>
        <SwiperSlide className='mt-4'>
          <div className='h-[250px] w-[500px] flex flex-col'>
            <p className='text-xl'>Praca tymczasowa</p>
            <img src={tempwork} className='my-auto flex h-[180px]' />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SliderEmployers
