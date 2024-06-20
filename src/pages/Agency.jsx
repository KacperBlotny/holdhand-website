import { useEffect } from 'react'

import SubpageCard from '../components/shared/SubpageCard'

import img from '../assets/img/map-airplane.png'

import arrow from '../assets/svg/arrows/arrow_right_blue.svg'

import update from '../assets/svg/undraw/update.svg'
import solution from '../assets/svg/undraw/solution.svg'
import deal from '../assets/svg/undraw/deal.svg'

function Agency() {
  useEffect(() => {
    document.title = 'Holdhand | Dla agencji pracy'
  }, [])
  return (
    <div className='py-32 px-4'>
      <SubpageCard img={img} title='Dla agencji pracy' />
      <p className='text-main  text-2xl lg:text-4xl text-center my-32'>
        Współpracujemy z wieloma agencjami pracy oraz lokalnymi rekruterami z
        wielu państw świata, oferując kompleksowe rozwiązania w zakresie
        rekrutacji i outsourcingu pracowniczego.
        <br />
        <br />
        Jesteśmy otwarci na nowe kontakty i współpracę.
      </p>
      <div className='flex flex-col gap-16'>
        {/* Pozyskiwanie pracowników */}
        <div className='text-main flex flex-col xl:pl-32'>
          <div className='flex items-center gap-4'>
            <img src={arrow} alt='' className='h-[80px] pr-8 mt-auto' />
            <p className='font-medium text-3xl mt-auto py-6'>
              Pozyskiwanie pracowników w formie jednorazowej
            </p>
            <img
              src={deal}
              alt='undraw right'
              className='h-[260px] ml-auto hidden xl:block'
            />
          </div>
          <div className='xl:ml-32 pt-8 max-w-[750px]'>
            <p className='pt-4'>
              Prowadzimy kompleksowy proces rekrutacyjny, w tym dobór
              kandydatów, z możliwością udziału klienta na każdym etapie. Naszym
              priorytetem jest spełnienie wymagań klienta, aby dostarczyć
              odpowiednich pracowników. Współpracujemy głównie z zagranicznymi
              agencjami i rekruterami, zajmując się również legalizacją
              zatrudnienia wybranych kandydatów. Po zakończeniu procesu
              wystawiamy fakturę na kwotę uzgodnioną podczas wcześniejszych
              negocjacji. Oferujemy rekrutację zarówno pracowników
              niewykwalifikowanych, jak i wykwalifikowanych.
            </p>
            <br />
            <p>
              Jesteśmy gotowi na jednorazowe zamówienia oraz długoterminową
              współpracę z naszymi klientami.
            </p>
          </div>
        </div>

        {/* Leasing pracowniczy */}
        <div className='text-main flex flex-col xl:pl-32'>
          <div className='flex items-center gap-4'>
            <img src={arrow} alt='' className='h-[80px] pr-8 mt-auto' />
            <p className='font-medium text-3xl mt-auto py-6'>
              Outsorcing pracowniczy
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
              Firma, którą reprezentujesz zajmuje się rektruacją/pośrednictwem
              zatrudnienia?
            </p>
            <img
              src={update}
              alt='undraw highfive'
              className='h-[260px]  ml-auto hidden xl:block'
            />
          </div>
          <div className='xl:ml-32 pt-8 max-w-[750px]'>
            <p>
              Czekamy na kontakt! Przedstawcie Państwo nam swoją ofertę,
              korzystając z formularza kontaktowego lub wysyłając nam na maila,
              a my z pewnością zapoznamy się i odezwiemy.
              <br />
              <br />
              Jesteśmy zawsze otwarci na przedstawiane przez Państwa usługi i
              propozycje dot. współpracy.
            </p>
          </div>
        </div>
      </div>
      <div className='text-main max-w-[750px] mx-auto pt-32'>
        <p className='text-4xl font-medium'>Jesteś zainteresowan-y/a?</p>
        <br />

        <p>Czekamy na twój kontakt! Wypełnij formularz poniżej!</p>
      </div>
    </div>
  )
}

export default Agency
