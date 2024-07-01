import { useEffect } from 'react'
import useTranslationHook from '../hooks/useTranslationHook'

import SubpageCard from '../components/shared/SubpageCard'

import img from '../assets/img/map-airplane.png'

import arrow from '../assets/svg/arrows/arrow_right_blue.svg'

import update from '../assets/svg/undraw/update.svg'
import solution from '../assets/svg/undraw/solution.svg'
import deal from '../assets/svg/undraw/deal.svg'

import DownloadButton from '../components/DownloadButton'

function Agency() {
  const { t, changeLanguage } = useTranslationHook()
  useEffect(() => {
    document.title = 'Holdhand | Dla agencji pracy'
  }, [])
  return (
    <div className='py-32 px-4'>
      <SubpageCard img={img} title={t('navbar.dlaAgencji')} />
      <p className='text-main  text-2xl lg:text-4xl text-center my-32'>
        {t('dlaAgencji.title1')}
        <br />
        <br />
        {t('dlaAgencji.title2')}
      </p>
      <div className='flex flex-col gap-16'>
        {/* Pozyskiwanie pracowników */}
        <div className='text-main flex flex-col xl:pl-32'>
          <div className='flex items-center gap-4'>
            <img src={arrow} alt='' className='h-[80px] pr-8 mt-auto' />
            <p className='font-medium text-3xl mt-auto py-6'>
              {t('dlaAgencji.arrow1.title')}
            </p>
            <img
              src={deal}
              alt='undraw right'
              className='h-[260px] ml-auto hidden xl:block'
            />
          </div>
          <div className='xl:ml-32 pt-8 max-w-[750px]'>
            <p className='pt-4'>{t('dlaAgencji.arrow1.text1')}</p>
            <br />
            <p>{t('dlaAgencji.arrow1.text2')}</p>
          </div>
        </div>

        {/* Leasing pracowniczy */}
        <div className='text-main flex flex-col xl:pl-32'>
          <div className='flex items-center gap-4'>
            <img src={arrow} alt='' className='h-[80px] pr-8 mt-auto' />
            <p className='font-medium text-3xl mt-auto py-6'>
              {t('dlaAgencji.arrow2.title')}
            </p>
            <img
              src={solution}
              alt='undraw questionmark'
              className='h-[260px]  ml-auto xl:block hidden'
            />
          </div>
          <div className='xl:ml-32 pt-8 max-w-[750px]'>
            <p></p>
          </div>
        </div>

        {/* Rekrutacja na zlecenie */}
        <div className='text-main flex flex-col xl:pl-32'>
          <div className='flex items-center gap-4'>
            <img src={arrow} alt='' className='h-[80px] pr-8 mt-auto' />
            <p className='font-medium text-3xl mt-auto py-6'>
              {t('dlaAgencji.arrow3.title')}
            </p>
            <img
              src={update}
              alt='undraw highfive'
              className='h-[260px]  ml-auto hidden xl:block'
            />
          </div>
          <div className='xl:ml-32 pt-8 max-w-[750px]'>
            <p>
              {t('dlaAgencji.arrow3.text1')}
              <br />
              <br />
              {t('dlaAgencji.arrow3.text2')}
            </p>
          </div>
        </div>
      </div>
      <div className='text-main max-w-[750px] mx-auto pt-32'>
        <p className='text-4xl font-medium'> {t('downloadAgency.title')}</p>
        <br />

        <p>
          {t('downloadAgency.text1')}
          <span className='font-bold'> office@holdhand.eu</span>
          {t('downloadAgency.text2')}
        </p>
        <DownloadButton />
      </div>
    </div>
  )
}

export default Agency
