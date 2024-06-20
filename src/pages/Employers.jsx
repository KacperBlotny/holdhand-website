import { useEffect } from 'react'
import SubpageCard from '../components/shared/SubpageCard'

import img from '../assets/img/hands.jpg'

import arrow from '../assets/svg/arrows/arrow_right_blue.svg'

import online from '../assets/svg/undraw/online.svg'
import clock from '../assets/svg/undraw/clock.svg'
import resume from '../assets/svg/undraw/resume.svg'
import world from '../assets/svg/undraw/world.svg'

function Employers() {
  useEffect(() => {
    document.title = 'Holdhand | Dla pracodawców'
  }, [])
  return (
    <div className='py-32 px-4'>
      <SubpageCard img={img} title='Dla pracodawców' />
      <p className='text-main  text-2xl lg:text-4xl text-center my-32'>
        Oferujemy kompleksowe rozwiązania zatrudnienia: leasing pracowniczy,
        rekrutację na zlecenie i pracę tymczasową, dostosowane do indywidualnych
        potrzeb klientów.
      </p>
      <div className='flex flex-col gap-16'>
        {/* Outsourcing pracowniczy */}
        <div className='text-main flex flex-col xl:pl-32'>
          <div className='flex items-center gap-4'>
            <img src={arrow} alt='' className='h-[80px] pr-8 mt-auto' />
            <p className='font-medium text-3xl mt-auto py-6'>
              Outsourcing pracowniczy
            </p>
            <img
              src={online}
              alt='undraw right'
              className='h-[260px] ml-auto hidden xl:block'
            />
          </div>
          <div className='xl:ml-32 pt-8 max-w-[750px]'>
            <p className='pt-4'>
              Outsourcing pracowniczy HoldHand umożliwia firmom zatrudnianie
              pracowników bez obciążania wewnętrznej struktury. Przejmujemy
              rekrutację, płace i administrację, dając klientom elastyczność i
              pozwalając im skupić się na głównej działalności.
            </p>
          </div>
        </div>

        {/* Rekrutacja na zlecenie */}
        <div className='text-main flex flex-col xl:pl-32'>
          <div className='flex items-center gap-4'>
            <img src={arrow} alt='' className='h-[80px] pr-8 mt-auto' />
            <p className='font-medium text-3xl mt-auto py-6'>
              Rekrutacja na zlecenie
            </p>
            <img
              src={resume}
              alt='undraw questionmark'
              className='h-[260px]  ml-auto xl:block hidden'
            />
          </div>
          <div className='xl:ml-32 pt-8 max-w-[750px]'>
            <p>
              Nasza usługa rekrutacji na zlecenie w HoldHand wspiera firmy w
              pozyskiwaniu i zarządzaniu pracownikami, szczególnie z zagranicy.
              Zajmujemy się całym procesem: od rekrutacji, przez sprowadzenie do
              Polski, po wdrożenie u klienta. HoldHand pośredniczy, a klient
              jest ostatecznym pracodawcą, zapewniając zakwaterowanie i
              nadzorując pracownika. Usługa jest dla firm, które chcą
              zminimalizować formalności i zaangażowanie czasowe w rekrutację.
            </p>
          </div>
        </div>

        {/* Praca tymczasowa */}
        <div className='text-main flex flex-col xl:pl-32'>
          <div className='flex items-center gap-4'>
            <img src={arrow} alt='' className='h-[80px] pr-8 mt-auto' />
            <p className='font-medium text-3xl mt-auto py-6'>
              Praca tymczasowa
            </p>
            <img
              src={clock}
              alt='undraw highfive'
              className='h-[260px]  ml-auto hidden xl:block'
            />
          </div>
          <div className='xl:ml-32 pt-8 max-w-[750px]'>
            <p>
              Praca tymczasowa to idealne rozwiązanie dla firm potrzebujących
              pracowników na krótkie projekty lub sezonowe zwiększenie
              zatrudnienia. HoldHand zapewnia kompleksową obsługę od rekrutacji
              po zarządzanie kadrami, zapewniając elastyczność i wsparcie na
              każdym etapie współpracy.
            </p>
          </div>
        </div>

        {/* Z kim współpracujemy? */}
        <div className='text-main flex flex-col xl:pl-32'>
          <div className='flex items-center gap-4'>
            <img src={arrow} alt='' className='h-[80px] pr-8 mt-auto' />
            <p className='font-medium text-3xl mt-auto py-6'>
              Z kim współpracujemy
            </p>
            <img
              src={world}
              alt='undraw highfive'
              className='h-[260px]  ml-auto hidden xl:block'
            />
          </div>
          <div className='xl:ml-32 pt-8 max-w-[750px] flex flex-col gap-8'>
            <p>
              Prowadzimy rekrutację z wybranych krajów, dostarczając
              wykwalifikowaną siłę roboczą dla polskiego rynku pracy. Nasze
              główne kierunki rekrutacji odzwierciedlają się w państwach, z
              których najczęściej pozyskujemy pracowników.
            </p>
            <p>
              Stawiamy na budowanie trwałych relacji z pracownikami i klientami,
              co zapewnia wysoką jakość usług. Nasze główne kierunki to:
              Wietnam, Nepal, Azerbejdżan, Gruzja. Pozostałe natomiast to:
              Bangladesz, Białoruś, Indie, Filipiny, Sri Lanka oraz Ukraina.
              Dzięki współpracy z tymi krajami, stale poszerzamy bazę
              kandydatów, co pozwala nam idealnie dopasować pracowników do
              potrzeb klientów.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Employers
