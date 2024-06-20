import React from 'react'
import logo from '../../assets/logo/Logo-01.png'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()

  const showElement = location.pathname !== '/'

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className='z-10 fixed w-full p-4'>
      <div className=' flex justify-between items-center py-2 px-16 rounded-full bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] h-[80px]'>
        <Link to='/'>
          <img src={logo} alt='Company Logo' className='h-9' />
        </Link>
        <ul className='flex gap-8'>
          {showElement && (
            <Link to='/'>
              <li className='text-main hover:text-mainHover transition-colors duration-300 cursor-pointer'>
                Strona główna
              </li>
            </Link>
          )}
          <Link to='/for-employees'>
            <li className='text-main hover:text-mainHover transition-colors duration-300 cursor-pointer'>
              Dla pracowników
            </li>
          </Link>
          <Link to='/for-employers'>
            <li className='text-main hover:text-mainHover transition-colors duration-300 cursor-pointer'>
              Dla pracodawców
            </li>
          </Link>
          <Link to='/for-agency'>
            <li className='text-main hover:text-mainHover transition-colors duration-300 cursor-pointer'>
              Dla agencji pracy
            </li>
          </Link>

          {!showElement && (
            <li
              className='text-main hover:text-mainHover transition-colors duration-300 cursor-pointer'
              onClick={() => scrollToSection('faq')}
            >
              FAQ
            </li>
          )}
          <li
            className='text-main hover:text-mainHover transition-colors duration-300 cursor-pointer'
            onClick={() => scrollToSection('contact')}
          >
            Kontakt
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
