import { useState } from 'react'
import logo from '../../assets/logo/Logo-01.png'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import useTranslationHook from '../../hooks/useTranslationHook'

import translateIcon from '../../assets/svg/arrows/language.svg'

import plFlag from '../../assets/flag/polska.webp'
import ruFlag from '../../assets/flag/russian.jpg'
import uaFlag from '../../assets/flag/ukraine.jpg'
import enFlag from '../../assets/flag/uk.svg.png'

const Navbar = () => {
  const { t, changeLanguage } = useTranslationHook()

  const [dropdownOpen, setDropdownOpen] = useState(false)

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
                {t('navbar.strGlowna')}
              </li>
            </Link>
          )}
          <Link to='/for-employees'>
            <li className='text-main hover:text-mainHover transition-colors duration-300 cursor-pointer'>
              {t('navbar.dlaPracownikow')}
            </li>
          </Link>
          <Link to='/for-employers'>
            <li className='text-main hover:text-mainHover transition-colors duration-300 cursor-pointer'>
              {t('navbar.dlaPracodawcow')}
            </li>
          </Link>
          <Link to='/for-agency'>
            <li className='text-main hover:text-mainHover transition-colors duration-300 cursor-pointer'>
              {t('navbar.dlaAgencji')}
            </li>
          </Link>

          {!showElement && (
            <li
              className='text-main hover:text-mainHover transition-colors duration-300 cursor-pointer'
              onClick={() => scrollToSection('faq')}
            >
              {t('navbar.faq')}
            </li>
          )}
          <li
            className='text-main hover:text-mainHover transition-colors duration-300 cursor-pointer'
            onClick={() => scrollToSection('contact')}
          >
            {t('navbar.kontakt')}
          </li>
          {/* <li>
            <button onClick={() => changeLanguage('pl')} className='pr-8'>
              <img src={plFlag} alt='polish flag ' className='h-4' />
            </button>
            <button onClick={() => changeLanguage('ru')}>
              <img src={ruFlag} alt='russian flag' className='h-4' />
            </button>
          </li> */}
          <li className='relative'>
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className=''>
              <img src={translateIcon} alt='choose language' />
            </button>
            {dropdownOpen && (
              <ul className='absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-lg shadow-lg grid grid-cols-2 p-2'>
                <li
                  className='px-4 py-2 hover:bg-gray-100 cursor-pointer mx-auto'
                  onClick={() => changeLanguage('pl')}
                >
                  <img src={plFlag} alt='polish flag' className='mx-auto' />
                </li>
                <li
                  className='px-4 py-2 hover:bg-gray-100 cursor-pointer mx-auto'
                  onClick={() => changeLanguage('ru')}
                >
                  <img src={ruFlag} alt='russian flag' className='mx-auto' />
                </li>
                <li
                  className='px-4 py-2 hover:bg-gray-100 cursor-pointer mx-auto'
                  onClick={() => changeLanguage('ua')}
                >
                  <img src={uaFlag} alt='ukrainian flag' className='mx-auto' />
                </li>
                <li
                  className='px-4 py-2 hover:bg-gray-100 cursor-pointer mx-auto'
                  onClick={() => changeLanguage('en')}
                >
                  <img src={enFlag} alt='uk flag' className='mx-auto' />
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
