import React, { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { useLocation } from 'react-router-dom'

import logo from '../../assets/logo/Logo-01.png'

function NavbarResp() {
  const [isActive, setIsActive] = useState(false)
  const sidebarRef = useRef(null)
  const openSidebarButtonRef = useRef(null)

  const location = useLocation()

  const showElement = location.pathname !== '/'

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target) &&
        !openSidebarButtonRef.current.contains(e.target)
      ) {
        setIsActive(isActive)
        sidebarRef.current.classList.add('-translate-x-full')
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const handleOpenSidebar = (e) => {
    e.stopPropagation()
    setIsActive(!isActive)
    sidebarRef.current.classList.toggle('-translate-x-full')
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className='h-0 flex overflow-hidden w-screen z-10'>
      <div
        className='fixed top-0 w-[300px] min-h-screen overflow-y-auto transition-transform transform -translate-x-full ease-in-out duration-300 z-10 bg-white'
        id='sidebar'
        ref={sidebarRef}
      >
        <div className='p-4'>
          <Link to='/'>
            <img src={logo} alt='logo' className='w-[200px]' />
          </Link>
          <ul className='flex flex-col gap-8 pt-16 font-medium text-2xl'>
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
          {/* <ul className='mt-4'>
            <li className='mb-2'>
              <a href='#' className='block hover:text-indigo-400'>
                Home
              </a>
            </li>
            <li className='mb-2'>
              <a href='#' className='block hover:text-indigo-400'>
                About
              </a>
            </li>
            <li className='mb-2'>
              <a href='#' className='block hover:text-indigo-400'>
                Services
              </a>
            </li>
            <li className='mb-2'>
              <a href='#' className='block hover:text-indigo-400'>
                Contact
              </a>
            </li>
          </ul> */}
        </div>
      </div>

      <div className='flex-1 flex flex-col overflow-hidden fixed top-0 w-screen'>
        <div className='bg-white shadow m-4 px-4 rounded-3xl'>
          <div className=' mx-auto'>
            <div className='flex justify-between items-center py-4 px-2'>
              <Link to='/'>
                <img src={logo} alt='logo' className='h-[40px]' />
              </Link>
              <button
                className={`text-gray-500 hover:text-gray-600 hamburger ${
                  isActive ? 'active' : ''
                } ${isActive ? 'blue' : 'red'}`}
                id='open-sidebar'
                ref={openSidebarButtonRef}
                onClick={handleOpenSidebar}
              >
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavbarResp
