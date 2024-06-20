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
    <div className='pt-32 pb-16 px-4'>
      <SubpageCard img={img} title='Dla pracodawców' />
      <p className='text-main text-2xl lg:text-4xl text-center my-32'>
        Oferujemy kompleksowe rozwiązania zatrudnienia: outsourcing pracowniczy,
        bodyleasing, rekrutację na zlecenie i pracę tymczasową, dostosowane do
        indywidualnych potrzeb klientów.
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
              Outsourcing pracowniczy jest usługą w ramach której firma
              (Outsourcer) przejmuję na siebie część przedsiębiorstwa jej
              klienta (Insourcer) i za pomocą swojej kadry wykonuje powierzone
              jej zadania. W tym modelu klient nie nawiązuje żadnego stosunku z
              podwykonawcą usługodawcy, jedynie przekazuje listę zadań oraz w
              jaki sposób mają być wykonywane. Outsourcer, zarządza swoimi
              pracownikami, wypłaca im wynagrodzenie i odprowadza odpowiednie
              składki. Model ten jest rekomendowany firmom które mają
              zapotrzebowanie kadrowe na długotrwałe projekty jak np. obsługa
              linii montażowej
            </p>
          </div>
        </div>

        {/* BODYLEASING */}
        <div className='text-main flex flex-col xl:pl-32'>
          <div className='flex items-center gap-4'>
            <img src={arrow} alt='' className='h-[80px] pr-8 mt-auto' />
            <p className='font-medium text-3xl mt-auto py-6'>Bodyleasing</p>
            <img
              src={resume}
              alt='undraw questionmark'
              className='h-[260px]  ml-auto xl:block hidden'
            />
          </div>
          <div className='xl:ml-32 pt-8 max-w-[750px]'>
            <p>
              Bodyleasing to usługa, w ramach której HoldHand deleguje grupę
              swoich pracowników do klienta w celu wykonania określonego zadania
              jednorazowego. Podobnie jak w przypadku outsourcingu, klient nie
              nawiązuje żadnej bezpośredniej relacji z pracownikami
              podwykonawcy. HoldHand zarządza swoimi pracownikami, wypłaca im
              wynagrodzenia oraz odprowadza odpowiednie składki. Ten model jest
              szczególnie polecany firmom, które potrzebują specjalistycznej
              kadry do realizacji konkretnych zadań, takich jak wdrożenie
              systemu IT czy montaż konstrukcji.
            </p>
          </div>
        </div>

        {/* Rekrutacja na zlecenie (jednorazowa) */}
        <div className='text-main flex flex-col xl:pl-32'>
          <div className='flex items-center gap-4'>
            <img src={arrow} alt='' className='h-[80px] pr-8 mt-auto' />
            <p className='font-medium text-3xl mt-auto py-6'>
              Rekrutacja na zlecenie (jednorazowa)
            </p>
            <img
              src={clock}
              alt='undraw highfive'
              className='h-[260px]  ml-auto hidden xl:block'
            />
          </div>
          <div className='xl:ml-32 pt-8 max-w-[750px]'>
            <p>
              Rekrutacja na zlecenie jest to usługa, w które to nasza firma
              prowadzi w sposób kompleksowy: dobór kandydatów, proces
              rekrutacji, rozmowy kwalifikacyjne (z możliwością udziału
              Klienta). Na bieżąco informujemy o prowadzonych przez nas
              działaniach i przedstawiamy wyselekcjonowane przez nas osoby
              odpowiadające przedstawionym nam wymaganiom. Po akceptacji
              kandydatów ze strony klienta- my przechodzimy do procesu
              legalizacji, gdzie zespół HoldHand odpowiada za uzyskanie
              zezwolenia na pracę na terytorium RP, a następnie wizy i
              zorganizowanie transportu do Polski. Następnie wystawiamy Państwu
              fakturę za wykonaną usługę w kwocie ustalonej wcześniej (+ wykazem
              poniesionych przez nas kosztów nieuwzględnionych podczas wstępnej
              wyceny). Końcowym etapem jest przejęcie i zatrudnienie
              zrekrutowanego kandydata przez stronę Klienta.
            </p>
            <br />
            <p>
              W tej usłudze oferujemy rekrutację zarówno pracowników
              niewykwalifikowanych, jak i wykwalifikowanych. Jesteśmy gotowi na
              jednorazowe zamówienia oraz długoterminową współpracę z naszymi
              klientami.
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
              src={world}
              alt='undraw highfive'
              className='h-[260px]  ml-auto hidden xl:block'
            />
          </div>
          <div className='xl:ml-32 pt-8 max-w-[750px] flex flex-col gap-8'>
            <p>
              Praca tymczasowa polega na współpracy trzech stron: agencji pracy
              tymczasowej, pracodawcy użytkownika oraz pracownika. Agencja pracy
              zatrudnia pracownika, odpowiada za jego wynagrodzenie oraz pokrywa
              koszty związane ze składkami. Następnie deleguje go do pracodawcy
              użytkownika, gdzie pracownik wykonuje pod jego kierownictwem swoje
              obowiązki przez maksymalnie 18 miesięcy w ciągu kolejnych 36
              miesięcy dla jednego pracodawcy. Pracownik tymczasowy może
              wykonywać jedynie prace o charakterze sezonowym, okresowym lub
              doraźnym. Jest to idealne rozwiązanie dla przedsiębiorców
              potrzebujących krótkotrwałego zatrudnienia, na przykład do obsługi
              hotelu w sezonie wakacyjnym.
            </p>
          </div>
        </div>
      </div>
      <div className='text-main max-w-[750px] mx-auto pt-32'>
        <p className='text-4xl font-medium'>
          Uzyskaj wycenę dla twojej firmy związaną z:
        </p>
        <br />
        <ul className='list-disc pl-6'>
          <li>rekrutacją jednorazową</li>
          <li>outsourcingiem pracowniczym</li>
          <li>bodyleasingiem</li>
        </ul>
        <br />
        <p>
          Wypełnij poniższy formularz, a my sporządzimy kompleksową wycenę,
          którą prześlemy pod wskazany adres e-mail.
        </p>
      </div>
    </div>
  )
}

export default Employers
