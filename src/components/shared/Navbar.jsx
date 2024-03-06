import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo/Logo-01.png'

import Dropdown from '../Dropdown'

function Navbar() {
  return (
    <>
      <div className='hidden xl:flex shadow-md p-4 fixed bg-white w-screen'>
        <div className='flex justify-between container mx-auto'>
          <Link to='/'>
            <img src={logo} alt='Logo' className='h-8' />
          </Link>
          <div className='flex'>
            <ul className='flex text-sm m-auto'>
              <li className='px-4 dropdown'>
                <Link
                  to='/about-us'
                  className='dropbtn hover:text-normal cursor-pointer'
                >
                  O nas <i className='fa-solid fa-chevron-down text-normal'></i>
                </Link>
                <div className='dropdown-content'>
                  <Link to='/about-us'>Nasza misja</Link>
                  <Link to='/about-us'>Z kim współpracujemy?</Link>
                </div>
              </li>
              <li className='px-4 dropdown'>
                <Link
                  to='/for-employees'
                  className='dropbtn hover:text-normal cursor-pointer'
                >
                  Dla pracowników{' '}
                  <i className='fa-solid fa-chevron-down text-normal'></i>
                </Link>
                <div className='dropdown-content'>
                  <Link to='/about-us'>Item 1</Link>
                  <Link to='/about-us'>Item 1</Link>
                </div>
              </li>
              <li className='px-4 dropdown'>
                <Link
                  to='/for-employers'
                  className='dropbtn hover:text-normal cursor-pointer'
                >
                  Dla pracodawców{' '}
                  <i className='fa-solid fa-chevron-down text-normal'></i>
                </Link>
                <div className='dropdown-content'>
                  <Link to='/about-us'>Item 1</Link>
                  <Link to='/about-us'>Item 1</Link>
                </div>
              </li>
              <li className='px-4 dropdown'>
                <Link
                  to='/for-agency'
                  className='dropbtn hover:text-normal cursor-pointer'
                >
                  Dla agencji zatrudnienia{' '}
                  <i className='fa-solid fa-chevron-down text-normal'></i>
                </Link>
                <div className='dropdown-content'>
                  <Link to='/about-us'>Item 1</Link>
                  <Link to='/about-us'>Item 1</Link>
                </div>
              </li>{' '}
              <li className='px-4 dropdown'>
                <p className='dropbtn hover:text-normal cursor-pointer'>
                  <i className='fa-solid fa-language'></i>
                </p>
                <div className='dropdown-content'>
                  <Link to='/about-us'>Item 1</Link>
                  <Link to='/about-us'>Item 1</Link>
                </div>
              </li>
              <li className='px-4 hover:text-normal cursor-pointer'>
                <Link to='/contact'>Kontakt</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile navbar */}
      <div className='shadow-md w-screen p-4 xl:hidden fixed bg-white'>
        <Link to='/'>
          <img src={logo} alt='Logo' className='h-8' />
        </Link>
        <div className='hamburger-menu'>
          <input id='menu__toggle' type='checkbox' />
          <label className='menu__btn' htmlFor='menu__toggle'>
            <span></span>
          </label>

          <ul className='menu__box'>
            <li className='px-4 py-2'>
              <Link to='/'>
                <img src={logo} alt='Logo' className='h-8' />
              </Link>
            </li>
            <li className='px-6 py-2'>
              <Dropdown
                title='O nas'
                drops={['Nasza misja', 'Z kim współpracujemy?']}
              />
            </li>
            <li className='px-6 py-2'>
              <Dropdown
                title='Dla pracowników'
                drops={['Nasza misja', 'Z kim współpracujemy?']}
              />
            </li>
            <li className='px-6 py-2'>
              <Dropdown
                title='Dla pracodawców'
                drops={['Nasza misja', 'Z kim współpracujemy?']}
              />
            </li>
            <li className='px-6 py-2'>
              <Dropdown
                title='Dla agencji zatrudnienia'
                drops={['Nasza misja', 'Z kim współpracujemy?']}
              />
            </li>
            <li className='px-6 py-2'>
              <Dropdown
                title='Język'
                drops={['Nasza misja', 'Z kim współpracujemy?']}
              />
            </li>
            <li className='px-6 py-2 mt-2'>
              <Link to='/'>Kontakt</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
