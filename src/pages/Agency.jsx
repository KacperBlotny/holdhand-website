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
        Współpracujemy z agencjami pracy, oferujemy kompleksowe rozwiązania w
        zakresie rekrutacji i leasingu pracowniczego.
      </p>
      <div className='flex flex-col gap-16'>
        {/* Pozyskiwanie pracowników */}
        <div className='text-main flex flex-col xl:pl-32'>
          <div className='flex items-center gap-4'>
            <img src={arrow} alt='' className='h-[80px] pr-8 mt-auto' />
            <p className='font-medium text-3xl mt-auto py-6'>
              Pozyskiwanie pracowników
            </p>
            <img
              src={deal}
              alt='undraw right'
              className='h-[260px] ml-auto hidden xl:block'
            />
          </div>
          <div className='xl:ml-32 pt-8 max-w-[750px]'>
            <p className='pt-4'>
              Oferujemy zarówno jednorazowe usługi rekrutacyjne, jak i
              długoterminową współpracę w zakresie ciągłego dostarczania
              wykwalifikowanych i niewykwalifikowanych pracowników.
              Specjalizujemy się w rekrutacji międzynarodowej, co pozwala nam na
              dostarczenie osób z różnych części świata, zgodnie z potrzebami
              naszych klientów.
            </p>
          </div>
        </div>

        {/* Leasing pracowniczy */}
        <div className='text-main flex flex-col xl:pl-32'>
          <div className='flex items-center gap-4'>
            <img src={arrow} alt='' className='h-[80px] pr-8 mt-auto' />
            <p className='font-medium text-3xl mt-auto py-6'>
              Leasing pracowniczy
            </p>
            <img
              src={solution}
              alt='undraw questionmark'
              className='h-[260px]  ml-auto xl:block hidden'
            />
          </div>
          <div className='xl:ml-32 pt-8 max-w-[750px]'>
            <p>
              Tutaj, z przymrużeniem oka, możemy powiedzieć, że wiecie, o co
              chodzi.
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
              src={update}
              alt='undraw highfive'
              className='h-[260px]  ml-auto hidden xl:block'
            />
          </div>
          <div className='xl:ml-32 pt-8 max-w-[750px]'>
            <p>
              Usługa rekrutacji zagranicznych pracowników, ich sprowadzenia do
              Polski i wdrożenia u finalnego klienta. HoldHand działa jako
              pośrednik, oferując agencjom transparentność kosztów i
              elastyczność. Klient końcowy jest pracodawcą, zapewnia
              zakwaterowanie i definiuje obowiązki.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Agency
