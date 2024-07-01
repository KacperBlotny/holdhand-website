import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import HeroCard from '../components/HeroCard'
import Faq from '../components/FAQ/Faq'

import img from '../assets/img/hands.jpg'
import map from '../assets/img/holdhand_mapa.png'
import arrowRight from '../assets/svg/arrows/arrow_right.svg'

import worker from '../assets/img/image.png'
import team from '../assets/img/hands-team.png'
import mapAirplane from '../assets/img/map-airplane.png'

import useTranslationHook from '../hooks/useTranslationHook'

function Index() {
  const { t, changeLanguage } = useTranslationHook()

  useEffect(() => {
    document.title = 'Holdhand'
  }, [])

  return (
    <div className='pt-32 px-4'>
      <ul className='lg:flex-row mx-auto flex-col flex justify-between gap-8'>
        <Link to='/for-employees'>
          <li className='mx-auto lg:mx-0'>
            <HeroCard
              img={worker}
              title={t('hero.dlaPracownikow')}
              desc={t('hero.dlaPracownikowDesc')}
            />
          </li>
        </Link>
        <Link to='/for-employers'>
          <li className='mx-auto lg:mx-0'>
            <HeroCard
              img={team}
              title={t('hero.dlaPracodawcow')}
              desc={t('hero.dlaPracodawcowDesc')}
            />
          </li>{' '}
        </Link>
        <Link to='/for-agency'>
          <li className='mx-auto lg:mx-0'>
            <HeroCard
              img={mapAirplane}
              title={t('hero.dlaAgencji')}
              desc={t('hero.dlaAgencjiDesc')}
            />
          </li>{' '}
        </Link>
      </ul>
      <p className='text-main  text-2xl lg:text-4xl text-center my-32'>
        {t('hero.overMap')}
      </p>
      <img src={map} alt='world map' />
      <div className='py-16'>
        <h1 className='text-4xl font-bold text-main pb-6'>
          {t('hero.trzyStrzalki.tytul')}
        </h1>
        <p className='text-main'>{t('hero.trzyStrzalki.tekst')}</p>
      </div>
      <div className='w-full bg-hero-gradient rounded-3xl h-auto lg:min-h-[660px] flex items-center justify-end'>
        <div className='my-auto gap-16 flex flex-col py-8'>
          <div className='flex items-center justify-start lg:justify-center mx-4 lg:mx-24'>
            <img
              src={arrowRight}
              alt='arrow right'
              className='lg:w-[80px] w-[60px]'
            />
            <p className='text-white max-w-[800px] ml-8'>
              {t('hero.trzyStrzalki.jeden')}
            </p>
          </div>
          <div className='flex items-center justify-start lg:justify-center mx-4 lg:mx-24'>
            <img
              src={arrowRight}
              alt='arrow right'
              className='lg:w-[80px] w-[60px]'
            />
            <p className='text-white max-w-[800px] ml-8'>
              {t('hero.trzyStrzalki.dwa')}
            </p>
          </div>
          <div className='flex items-center justify-start lg:justify-center mx-4 lg:mx-24'>
            <img
              src={arrowRight}
              alt='arrow right'
              className='lg:w-[80px] w-[60px]'
            />
            <p className='text-white max-w-[800px] ml-8'>
              {t('hero.trzyStrzalki.trzy')}
            </p>
          </div>
        </div>
      </div>
      <div id='faq'></div>
      <Faq />
    </div>
  )
}

export default Index
