import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import mainphoto from '../assets/holdhand-mainpage.jpg'
import worker from '../assets/worker.jpg'
import Button from '../components/shared/Button'
import ScrollButton from '../components/shared/ScrollButton'
import Footer from '../components/shared/Footer'

import plane from '../assets/img/plane.jpg'

function Index() {
  useEffect(() => {
    document.title = 'Holdhand'
  }, [])

  return (
    <div className=''>
      <div className='bg-white shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] p-4 sm:p-8 rounded-xl absolute xl:top-60 xl:left-40 sm:top-40 sm:left-20 top-20 left-10'>
        <p className='font-bold sm:text-4xl pb-8 text-2xl'>
          Wspieramy twój <span className='text-blue-400'>sukces,</span>
          <p></p> łączymy świat <span className='text-blue-400'>pracy.</span>
        </p>
        <p className=''>
          <Link
            to='/about-us'
            className='bg-normal font-bold text-white py-3 px-4 rounded-lg hover:bg-normalActive transition ease-in-out duration-300'
          >
            Zobacz więcej
          </Link>
        </p>
      </div>
      <div className='mainPhoto absolute h-full w-full'></div>
      <div className='mainexpander'></div>
      <div className='container mx-auto flex flex-col py-24'>
        <p className='p-4 text-5xl'>Coś tu wymyślić</p>

        <div className='mx-auto flex justify-between p-4 lg:flex-row flex-col'>
          <div className='my-auto flex lg:w-1/2 flex-col'>
            <p className='py-2'>
              HoldHand, z siedzibą w Lublinie, to agencja zatrudnienia, która
              wykorzystuje nowoczesne technologie, aby oferować najwyższej
              jakości usługi dla naszych klientów.
            </p>
            <p className='py-2'>
              Skupiamy się na tworzeniu wartości poprzez innowacyjne
              rozwiązania, które umożliwiają skuteczną rekrutację i budowanie
              solidnych relacji opartych na zaufaniu. Promujemy kulturę
              otwartości i ciągłego rozwoju, dążąc do tego, aby każda współpraca
              przynosiła wymierne korzyści i wzmacniała więzi międzyludzkie.
            </p>
            <p className='py-2'>
              W HoldHand łączymy profesjonalizm z pasją, co pozwala nam wspierać
              rozwój zarówno pracowników, jak i partnerów biznesowych.
            </p>
            <div className='pt-4 mb-8'>
              <Button text='O nas' link='about-us' type='main' />
              <ScrollButton text='Kontakt' location='#contact' type='' />
            </div>
          </div>
          <img
            src={plane}
            className='xl:w-[600px] lg:mb-auto lg:w-[400px] w-full xl:mr-8 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded'
          />
        </div>
      </div>
      <div className='my-16 w-full bg-light'>
        <div className='container mx-auto flex flex-col py-16'>
          <div className='mx-auto flex flex-col'>
            <p className='bold mx-auto flex pb-8 text-4xl font-bold'>
              Dla pracodawców
            </p>
            <ul className='flex justify-evenly lg:gap-16 gap-8 lg:flex-row flex-col'>
              <li className='min-w-fit flex flex-col'>
                <i class='fa-regular fa-user mx-auto text-3xl'></i>
                <Link
                  to='/for-employers'
                  className='hover:bg-normalActive text-xl bg-normal text-white py-2 px-3 mt-4 rounded-xl transition ease-in-out duration-300 mx-auto'
                >
                  Leasing pracowniczy
                </Link>
              </li>
              <li className='min-w-fit flex flex-col'>
                <i class='fa-solid fa-book-open mx-auto  text-3xl'></i>

                <Link
                  to='/for-employers'
                  className='hover:bg-normalActive text-xl bg-normal text-white py-2 px-3 mt-4 rounded-xl transition ease-in-out duration-300 mx-auto'
                >
                  Rekrutacja na zlecenie
                </Link>
              </li>

              <li className='min-w-fit flex flex-col'>
                <i class='fa-regular fa-clock mx-auto text-3xl'></i>
                <Link
                  to='/for-employers'
                  className='hover:bg-normalActive text-xl bg-normal text-white py-2 px-3 mt-4 rounded-xl transition ease-in-out duration-300 mx-auto'
                >
                  Praca tymczasowa
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='container mx-auto flex flex-col py-16'>
          <div className='mx-auto flex flex-col'>
            <p className='bold mx-auto flex pb-8 text-4xl font-bold'>
              Dla Agencji pracy
            </p>
            <ul className='flex justify-evenly lg:gap-16 gap-8 lg:flex-row flex-col'>
              <li className='min-w-fit flex flex-col'>
                <i class='fa-solid fa-magnifying-glass mx-auto text-3xl'></i>
                <Link
                  to='/for-agency'
                  className='hover:bg-normalActive text-xl bg-normal text-white py-2 px-3 mt-4 rounded-xl transition ease-in-out duration-300 mx-auto'
                >
                  Pozyskiwanie pracownikówy
                </Link>
              </li>
              <li className='min-w-fit flex flex-col'>
                <i class='fa-regular fa-user mx-auto text-3xl'></i>
                <Link
                  to='/for-agency'
                  className='hover:bg-normalActive text-xl bg-normal text-white py-2 px-3 mt-4 rounded-xl transition ease-in-out duration-300 mx-auto'
                >
                  Leasing pracowniczy
                </Link>
              </li>
              <li className='min-w-fit flex flex-col'>
                <i class='fa-solid fa-book-open mx-auto  text-3xl'></i>
                <Link
                  to='/for-agency'
                  className='hover:bg-normalActive text-xl bg-normal text-white py-2 px-3 mt-4 rounded-xl transition ease-in-out duration-300 mx-auto'
                >
                  Rekrutacja na zlecenie
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
