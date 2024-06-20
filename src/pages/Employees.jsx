import { useEffect } from 'react'
import SubpageCard from '../components/shared/SubpageCard'

import img from '../assets/img/orange-worker.png'

import arrow from '../assets/svg/arrows/arrow_right_blue.svg'

import right from '../assets/svg/undraw/right.svg'
import highfive from '../assets/svg/undraw/highfive.svg'
import questionmark from '../assets/svg/undraw/questionmark.svg'

function Employees() {
  useEffect(() => {
    document.title = 'Holdhand | Dla pracowników'
  }, [])
  return (
    <div className='py-32 px-4'>
      <SubpageCard img={img} title='Dla pracowników' />
      <p className='text-main  text-2xl lg:text-4xl text-center my-32'>
        Umożliwiamy zgłaszanie zapotrzebowania na konkretne stanowiska pracy,
        wspierając realizację Twoich zawodowych aspiracji i dopasowując oferty
        do Twoich oczekiwań.
      </p>
      <div className='flex flex-col gap-16'>
        {/* Jak postępować */}
        <div className='text-main flex flex-col xl:pl-32'>
          <div className='flex items-center gap-4'>
            <img src={arrow} alt='' className='h-[80px] pr-8 mt-auto' />
            <p className='font-medium text-3xl mt-auto py-6'>Jak postępować?</p>
            <img
              src={right}
              alt='undraw right'
              className='h-[260px] ml-auto hidden xl:block'
            />
          </div>
          <div className='xl:ml-32 pt-8 max-w-[750px]'>
            <ul className='list-disc flex flex-col gap-4 pl-8'>
              <li>
                Zdefiniuj Swoje Idealne Miejsce Pracy: Zastanów się nad
                preferowanym zawodem oraz specyfiką stanowiska, na którym
                chciałbyś pracować.
              </li>
              <li>
                Prześlij Nam Swoje CV: Korzystając z formularza kontaktowego na
                naszej stronie, wyślij nam swoje aktualne CV wraz z opisem
                poszukiwanego stanowiska.
              </li>
              <li>
                Oczekuj na Informacje Zwrotne: Gdy tylko zidentyfikujemy oferty
                pracy pasujące do Twoich kryteriów, skontaktujemy się z Tobą
                drogą mailową, przedstawiając Ci szczegółowe informacje.
              </li>
            </ul>
            <p className='pt-4'>
              Nasza usługa dostosowuje proces poszukiwania pracy do Twoich
              potrzeb, zwiększając szanse na znalezienie idealnego zatrudnienia.
              Z HoldHand każdy krok przybliża Cię do zawodowego sukcesu. Wyraź
              swoje aspiracje, a my pomożemy Ci je zrealizować.
            </p>
          </div>
        </div>

        {/* Dlaczego holdhand */}
        <div className='text-main flex flex-col xl:pl-32'>
          <div className='flex items-center gap-4'>
            <img src={arrow} alt='' className='h-[80px] pr-8 mt-auto' />
            <p className='font-medium text-3xl mt-auto py-6'>
              Dlaczego HoldHand?
            </p>
            <img
              src={highfive}
              alt='undraw questionmark'
              className='h-[260px]  ml-auto xl:block hidden'
            />
          </div>
          <div className='xl:ml-32 pt-8 max-w-[750px]'>
            <ul className='list-disc flex flex-col gap-4 pl-8'>
              <li>
                Różnorodność Ofert: Znajdziesz u nas oferty pracy z wielu branż,
                co zwiększa Twoje szanse na znalezienie idealnej pracy.
              </li>
              <li>
                Prosty i Przejrzysty Proces Aplikacji: Nasza strona jest
                zaprojektowana tak, aby ułatwić Ci aplikowanie i szybkie
                znalezienie interesujących Cię ofert.
              </li>
              <li>
                Wsparcie na Każdym Kroku: Jesteśmy tutaj, aby pomóc Ci w
                procesie rekrutacji. Jeśli masz pytania lub potrzebujesz pomocy,
                jesteśmy do Twojej dyspozycji.
              </li>
            </ul>
          </div>
        </div>

        {/* Odkryj nowe mozliwosci */}
        {/* Dlaczego holdhand */}
        <div className='text-main flex flex-col xl:pl-32'>
          <div className='flex items-center gap-4'>
            <img src={arrow} alt='' className='h-[80px] pr-8 mt-auto' />
            <p className='font-medium text-3xl mt-auto py-6'>
              Odkryj nowe możliwości
            </p>
            <img
              src={questionmark}
              alt='undraw highfive'
              className='h-[260px]  ml-auto hidden'
            />
          </div>
          <div className='xl:ml-32 pt-8 max-w-[750px]'>
            <p>
              Z HoldHand łatwo znajdziesz ofertę pracy, która otworzy nowy
              rozdział w Twoim życiu zawodowym, bez względu na branżę. Nasze
              starannie wyselekcjonowane oferty zapewnią Ci najlepsze możliwości
              rozwoju. Zacznij z nami już dziś, odkryj nasze możliwości i nie
              pozwól, by Twoja kariera stała w miejscu.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Employees
