import { useEffect } from 'react'
import useTranslationHook from '../hooks/useTranslationHook'
import SubpageCard from '../components/shared/SubpageCard'

import img from '../assets/img/hands.jpg'

import arrow from '../assets/svg/arrows/arrow_right_blue.svg'

import online from '../assets/svg/undraw/online.svg'
import clock from '../assets/svg/undraw/clock.svg'
import resume from '../assets/svg/undraw/resume.svg'
import world from '../assets/svg/undraw/world.svg'

import DownloadButton from '../components/DownloadButton'

function Employers() {
  const { t, changeLanguage } = useTranslationHook()
  useEffect(() => {
    document.title = 'Holdhand | Dla pracodawców'
  }, [])
  return (
    <div className='pt-32 pb-16 px-4'>
      <SubpageCard img={img} title={t('navbar.dlaPracodawcow')} />
      <p className='text-main text-2xl lg:text-4xl text-center my-32'>
        {t('dlaPracodawcow.title')}
      </p>
      <div className='flex flex-col gap-16'>
        {/* Outsourcing pracowniczy */}
        <div className='text-main flex flex-col xl:pl-32'>
          <div className='flex items-center gap-4'>
            <img src={arrow} alt='' className='h-[80px] pr-8 mt-auto' />
            <p className='font-medium text-3xl mt-auto py-6'>
              {t('dlaPracodawcow.arrow1.title')}
            </p>
            <img
              src={online}
              alt='undraw right'
              className='h-[260px] ml-auto hidden xl:block'
            />
          </div>
          <div className='xl:ml-32 pt-8 max-w-[750px]'>
            <p className='pt-4'>{t('dlaPracodawcow.arrow1.text')}</p>
          </div>
        </div>

        {/* BODYLEASING */}
        <div className='text-main flex flex-col xl:pl-32'>
          <div className='flex items-center gap-4'>
            <img src={arrow} alt='' className='h-[80px] pr-8 mt-auto' />
            <p className='font-medium text-3xl mt-auto py-6'>
              {t('dlaPracodawcow.arrow2.title')}
            </p>
            <img
              src={resume}
              alt='undraw questionmark'
              className='h-[260px]  ml-auto xl:block hidden'
            />
          </div>
          <div className='xl:ml-32 pt-8 max-w-[750px]'>
            <p>{t('dlaPracodawcow.arrow2.text')}</p>
          </div>
        </div>

        {/* Rekrutacja na zlecenie (jednorazowa) */}
        <div className='text-main flex flex-col xl:pl-32'>
          <div className='flex items-center gap-4'>
            <img src={arrow} alt='' className='h-[80px] pr-8 mt-auto' />
            <p className='font-medium text-3xl mt-auto py-6'>
              {t('dlaPracodawcow.arrow3.title')}
            </p>
            <img
              src={clock}
              alt='undraw highfive'
              className='h-[260px]  ml-auto hidden xl:block'
            />
          </div>
          <div className='xl:ml-32 pt-8 max-w-[750px]'>
            <p>{t('dlaPracodawcow.arrow3.text')}</p>
            <br />
            <p>{t('dlaPracodawcow.arrow3.text2')}</p>
          </div>
        </div>

        {/* Praca tymczasowa */}
        <div className='text-main flex flex-col xl:pl-32'>
          <div className='flex items-center gap-4'>
            <img src={arrow} alt='' className='h-[80px] pr-8 mt-auto' />
            <p className='font-medium text-3xl mt-auto py-6'>
              {t('dlaPracodawcow.arrow4.title')}
            </p>
            <img
              src={world}
              alt='undraw highfive'
              className='h-[260px]  ml-auto hidden xl:block'
            />
          </div>
          <div className='xl:ml-32 pt-8 max-w-[750px] flex flex-col gap-8'>
            <p>{t('dlaPracodawcow.arrow4.text')}</p>
          </div>
        </div>
      </div>
      <div className='text-main max-w-[750px] mx-auto pt-32'>
        <p className='text-4xl font-medium'>{t('download.title')}</p>
        <br />
        <ul className='list-disc pl-6'>
          <li>{t('download.1')}</li>
          <li>{t('download.2')}</li>
          <li>{t('download.3')}</li>
        </ul>
        <br />
        <p>
          {t('download.text1')}
          <span className='font-bold'> office@holdhand.eu</span>
          {t('download.text2')}
        </p>
        <DownloadButton />
      </div>
    </div>
  )
}

export default Employers
