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

function Index() {
  useEffect(() => {
    document.title = 'Holdhand'
  }, [])

  return (
    <div className='pt-32 px-4'>
      <ul className='lg:flex-row mx-auto flex-col flex justify-between gap-8'>
        <li className='mx-auto lg:mx-0'>
          <HeroCard
            img={worker}
            title='Dla pracowników'
            desc='Naszym celem jest ułatwienie Tobie dostępu do szerokiej gamy ofert pracy, odpowiadającym Twoim umiejętnościom oraz oczekiwaniom zawodowym.'
          />
        </li>
        <li className='mx-auto lg:mx-0'>
          <HeroCard
            img={team}
            title='Dla pracodawców'
            desc='Rozwijaj swój zespół z najlepszymi talentami na rynku. Odkryj nasze kompleksowe rozwiązania rekrutacyjne, dostosowane do unikalnych potrzeb Twojej firmy.'
          />
        </li>
        <li className='mx-auto lg:mx-0'>
          <HeroCard
            img={mapAirplane}
            title='Dla agencji pracy'
            desc='Zwiększ skuteczność rekrutacji dzięki naszej ofercie. Specjalizujemy się w dostarczaniu rozwiązań, które znajdą idealnych kandydatów dla Twoich klientów.'
          />
        </li>
      </ul>
      <p className='text-main  text-2xl lg:text-4xl text-center my-32'>
        Ułatwiamy rekrutację i budujemy zaufane relacje, łącząc profesjonalizm z
        pasją, stawiamy przede wszystkim na rozwój pracowników oraz naszych
        partnerów biznesowych.
      </p>
      <img src={map} alt='world map' />
      <div className='py-16'>
        <h1 className='text-4xl font-bold text-main pb-6'>
          Rekrutujemy z całego świata
        </h1>
        <p className='text-main'>
          Dzięki relacjom z zagranicznymi rekruterami pozyskujemy pracowników z
          różnych części świata- od specjalistów, aż po pracowników fizycznych.
          Jako nasze główne obszary rekrutacyjne zdecydowanie wskazujemy na:
          Nepal, Wietnam i Azerbejdżan. Współpracując w tych krajach z lokalnymi
          rekruterami, firmami i agencjami zatrudnienia- dopasowujemy się do
          potrzeb i wymagań naszych klientów.
        </p>
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
              W 2022 r. w Polsce wskaźnik bezrobocia wynosił 1.8%, a liczba
              wolnych miejsc pracy osiągnęła 139,8 tys. Widzimy lukę między
              zasobami pracowniczymi a potrzebami rynku, co podkreśla
              konieczność otwarcia rynku pracy na zagranicznych pracowników.
            </p>
          </div>
          <div className='flex items-center justify-start lg:justify-center mx-4 lg:mx-24'>
            <img
              src={arrowRight}
              alt='arrow right'
              className='lg:w-[80px] w-[60px]'
            />
            <p className='text-white max-w-[800px] ml-8'>
              Nasze działania mają zaspokoić potrzeby rynku pracy w Polsce i
              oferować stabilne zatrudnienie osobom z zagranicy. Jest to
              wsparcie i rozwój polskiej gospodarki i lokalnych przedsiębiorstw.
            </p>
          </div>
          <div className='flex items-center justify-start lg:justify-center mx-4 lg:mx-24'>
            <img
              src={arrowRight}
              alt='arrow right'
              className='lg:w-[80px] w-[60px]'
            />
            <p className='text-white max-w-[800px] ml-8'>
              Dążymy do odpowiedzialnego dopasowywania pracowników, aby budować
              silną, zróżnicowaną gospodarkę. Naszym głównym celem jest
              zapełnienie luki na rynku pracy i budowanie mostów
              międzykulturowych.
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
