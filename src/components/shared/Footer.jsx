import React from 'react'
import logo from '../../assets/logo/Logo-01.png'

function Footer() {
  return (
    <div className='flex flex-col bg-light p-4' id='contact'>
     <div className='grid grid-cols-4 justify-evenly container mx-auto gap-8'>
      <div className='flex flex-col'>
         <img src={logo} alt="" className='w-64'/>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur facere facilis dolorum sed error, excepturi et? Dolores dicta similique eveniet?</p>
      </div>
      <div className='flex flex-col'>Company</div>
      <div className='flex flex-col'>Quick</div>
      <div className='flex flex-col'>Social Media</div>
     </div>
      <div className='flex mx-auto'>&copy; Copyright  {new Date().getFullYear() }, Holdhand, All rights reserved</div>
    </div>
  )
}

export default Footer