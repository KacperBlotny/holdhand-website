import React, { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import logo from '../../assets/logo/Logo-01.png'

function Navbar2() {
  const [isActive, setIsActive] = useState(false)
  const sidebarRef = useRef(null)
  const openSidebarButtonRef = useRef(null)

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

  return (
    <>
      <div className='fixed top-0 z-10 h-0 flex overflow-hidden w-screen sm:hidden '>
        <div
          className='fixed top-0 w-[300px] min-h-screen overflow-y-auto transition-transform transform -translate-x-full ease-in-out duration-300 z-10 bg-white'
          id='sidebar'
          ref={sidebarRef}
        >
          <div className='p-8'>
            <Link to='/'>
              <img src={logo} className='h-[50px]' />
            </Link>
            <ul className='mt-8 ml-4 text-xl gap-4 grid '>
              <li className='mb-2'>
                <p className='text-black hover:text-orange-400'>Kim jestem?</p>
              </li>
              <li className='mb-2'>
                <p className='text-black hover:text-orange-400'>Oferta</p>
              </li>
              <li className='mb-2'>
                <p className='text-black hover:text-orange-400'>Jak pracuję</p>
              </li>
              <li className='mb-2'>
                <p className='text-black hover:text-orange-400'>Kontakt</p>
              </li>
            </ul>
          </div>
        </div>

        <div className='flex-1 flex flex-col overflow-hidden fixed top-0 w-screen  shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
          <div className='bg-white'>
            <div className='container mx-auto'>
              <div className='flex justify-between items-center py-4 px-2'>
                <Link to='/'>
                  <img src={logo} className='h-[50px]' />
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
    </>
  )
}

export default Navbar2
