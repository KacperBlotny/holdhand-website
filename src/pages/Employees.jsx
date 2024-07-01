import { useEffect } from 'react'
import useTranslationHook from '../hooks/useTranslationHook'
import SubpageCard from '../components/shared/SubpageCard'

import img from '../assets/img/orange-worker.png'

import arrow from '../assets/svg/arrows/arrow_right_blue.svg'

import right from '../assets/svg/undraw/right.svg'
import highfive from '../assets/svg/undraw/highfive.svg'
import questionmark from '../assets/svg/undraw/questionmark.svg'

function Employees() {
  const { t, changeLanguage } = useTranslationHook()
  useEffect(() => {
    document.title = 'Holdhand | Dla pracowników'
  }, [])
  return (
    <div className='py-32 px-4'>
      <SubpageCard img={img} title={t('navbar.dlaPracownikow')} />
      <p className='text-main  text-2xl lg:text-4xl text-center my-32'>
        {t('dlaPracownikow.tekst')}
      </p>
      <div className='flex flex-col gap-16'>
        {/* Jak postępować */}
        <div className='text-main flex flex-col xl:pl-32'>
          <div className='flex items-center gap-4'>
            <img src={arrow} alt='' className='h-[80px] pr-8 mt-auto' />
            <p className='font-medium text-3xl mt-auto py-6'>
              {t('dlaPracownikow.arrow1.title')}
            </p>
            <img
              src={right}
              alt='undraw right'
              className='h-[260px] ml-auto hidden xl:block'
            />
          </div>
          <div className='xl:ml-32 pt-8 max-w-[750px]'>
            <ul className='list-disc flex flex-col gap-4 pl-8'>
              <li>{t('dlaPracownikow.arrow1.point1')}</li>
              <li>{t('dlaPracownikow.arrow1.point2')}</li>
              <li>{t('dlaPracownikow.arrow1.point3')}</li>
            </ul>
            <p className='pt-4'>{t('dlaPracownikow.arrow1.point4')}</p>
          </div>
        </div>

        {/* Dlaczego holdhand */}
        <div className='text-main flex flex-col xl:pl-32'>
          <div className='flex items-center gap-4'>
            <img src={arrow} alt='' className='h-[80px] pr-8 mt-auto' />
            <p className='font-medium text-3xl mt-auto py-6'>
              {t('dlaPracownikow.arrow2.title')}
            </p>
            <img
              src={highfive}
              alt='undraw questionmark'
              className='h-[260px]  ml-auto xl:block hidden'
            />
          </div>
          <div className='xl:ml-32 pt-8 max-w-[750px]'>
            <ul className='list-disc flex flex-col gap-4 pl-8'>
              <li>{t('dlaPracownikow.arrow2.point1')}</li>
              <li>{t('dlaPracownikow.arrow2.point2')}</li>
              <li>{t('dlaPracownikow.arrow2.point3')}</li>
            </ul>
          </div>
        </div>

        {/* Odkryj nowe mozliwosci */}
        {/* Dlaczego holdhand */}
        <div className='text-main flex flex-col xl:pl-32'>
          <div className='flex items-center gap-4'>
            <img src={arrow} alt='' className='h-[80px] pr-8 mt-auto' />
            <p className='font-medium text-3xl mt-auto py-6'>
              {t('dlaPracownikow.arrow3.title')}
            </p>
            <img
              src={questionmark}
              alt='undraw highfive'
              className='h-[260px]  ml-auto hidden'
            />
          </div>
          <div className='xl:ml-32 pt-8 max-w-[750px]'>
            <p>{t('dlaPracownikow.arrow3.point1')}</p>
          </div>
        </div>
      </div>
      <div className='text-main max-w-[750px] mx-auto pt-32'>
        <p className='text-4xl font-medium'>
          {t('dlaPracownikow.lastSect.title')}
        </p>
        <br />
        <div className='flex flex-col gap-4'>
          <p>{t('dlaPracownikow.lastSect.1')}</p>
          <p>{t('dlaPracownikow.lastSect.2')}</p>
          <p>{t('dlaPracownikow.lastSect.3')}</p>
          <p>{t('dlaPracownikow.lastSect.4')}</p>
        </div>

        <br />
        <p>
          {t('dlaPracownikow.lastSect.51')}
          <span className='font-bold'> office@holdhand.eu</span>
          {t('dlaPracownikow.lastSect.52')}
        </p>
      </div>
    </div>
  )
}

export default Employees
