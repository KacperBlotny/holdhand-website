import React from 'react'

import { useEffect } from 'react'
import logo from '../assets/logo/Logo-04.png'

import nepalFlag from '../assets/flag/nepal.png'
import vietnamFlag from '../assets/flag/vietnam.png'
import azerbFlag from '../assets/flag/azerbaijan.png'
import SendFiles from '../components/SendFiles'

function Employees() {
  useEffect(() => {
    document.title = 'Holdhand | Dla pracowników'
  }, [])

  return (
    <div className='lg:pt-234 container mx-auto flex flex-col px-8 pt-24'>
      <div className='flex flex-col lg:pt-8 text-2xl lg:flex-row'>
        <p className='w-full pb-8'>
          W HoldHand pośredniczymy w znalezieniu pracy na wakaty w fabrykach,
          magazynach i innych miejscach. Naszym celem jest ułatwienie Tobie
          dostępu do szerokiej gamy ofert pracy, które odpowiadają Twoim
          umiejętnościom i oczekiwaniom zawodowym.
        </p>
        <img
          src={logo}
          alt='holdhand logo'
          className='w-[200px] hidden lg:flex'
        />
        <div id='findjob'></div>
      </div>
      <div className='pb-32'>
        <h1
          className='bold mb-8 border-b border-black p-2 text-4xl lg:text-5xl'
          id='mission'
        >
          Znajdź Pracę
        </h1>
        <ul className='flex flex-col gap-4'>
          <li className='flex flex-col gap-4'>
            <h2 className='font-bold'>Jak to działa?</h2>
            <p>
              Rozumiejąc unikalne cele zawodowe i preferencje naszych
              kandydatów, HoldHand oferuje możliwość zgłaszania zapotrzebowania
              na konkretne stanowiska pracy. Jesteśmy tutaj, aby wspierać Cię w
              realizacji zawodowych aspiracji i znalezieniu ofert pracy, które
              idealnie odpowiadają Twoim oczekiwaniom.
            </p>
          </li>
          <li className='flex flex-col gap-4'>
            <h2 className='font-bold'>Jak postępować?</h2>
            <ul className='list-disc'>
              <li>
                <span className='font-bold'>
                  Zdefiniuj Swoje Idealne Miejsce Pracy:
                </span>
                Zastanów się nad preferowanym zawodem oraz specyfiką stanowiska,
                na którym chciałbyś pracować.
              </li>
              <li>
                <span className='font-bold'>Prześlij Nam Swoje CV: </span>
                Korzystając z formularza kontaktowego na naszej stronie, wyślij
                nam swoje aktualne CV wraz z opisem poszukiwanego stanowiska.
              </li>
              <li>
                <span className='font-bold'>
                  Oczekuj na Informacje Zwrotne:{' '}
                </span>
                Gdy tylko zidentyfikujemy oferty pracy pasujące do Twoich
                kryteriów, skontaktujemy się z Tobą drogą mailową,
                przedstawiając Ci szczegółowe informacje.
              </li>
            </ul>
            <p>
              Ta usługa zapewnia dostosowanie procesu poszukiwania pracy do
              indywidualnych potrzeb i preferencji kandydata, maksymalizując tym
              samym szanse na znalezienie wymarzonego zatrudnienia. Z HoldHand
              każdy krok przybliża Cię do osiągnięcia zawodowego sukcesu. Nie
              wahaj się – wyraź swoje zawodowe aspiracje już teraz, a my zrobimy
              wszystko, aby pomóc Ci je zrealizować.
            </p>
          </li>
          <li className='flex flex-col gap-4'>
            <h2 className='font-bold'>Dlaczego HoldHand?</h2>
            <ul className='list-disc'>
              <li>
                <span className='font-bold'>Różnorodność Ofert: </span>
                Znajdziesz u nas oferty pracy z wielu branż, co zwiększa Twoje
                szanse na znalezienie idealnej pracy.
              </li>
              <li>
                <span className='font-bold'>
                  Prosty i Przejrzysty Proces Aplikacji:{' '}
                </span>
                Nasza strona jest zaprojektowana tak, aby ułatwić Ci aplikowanie
                i szybkie znalezienie interesujących Cię ofert.
              </li>
              <li>
                <span className='font-bold'>Wsparcie na Każdym Kroku: </span>
                Jesteśmy tutaj, aby pomóc Ci w procesie rekrutacji. Jeśli masz
                pytania lub potrzebujesz pomocy, jesteśmy do Twojej dyspozycji.
              </li>
            </ul>
          </li>
          <li className='flex flex-col gap-4'>
            <h2 className='font-bold'>Odkryj Nowe Możliwości</h2>
            <p>
              Z HoldHand możesz łatwo znaleźć ofertę pracy, która stanie się
              początkiem nowego rozdziału w Twoim życiu zawodowym, niezależnie
              od tego w jakiej branży poszukujesz stanowiska. Nasze oferty są
              starannie wyselekcjonowane, aby zapewnić Ci najlepsze możliwości
              rozwoju. Zacznij swoją podróż z nami już dziś i krok po kroku
              buduj swoją przyszłość. Odkryj, co HoldHand może Ci zaoferować i
              nie pozwól, aby Twoja kariera stała w miejscu. (edytowane)
            </p>
          </li>
        </ul>
        <div id='jointeam'></div>
      </div>
      <div className='pb-32'>
        <h2
          className='bold mb-8 border-b border-black p-2 text-4xl lg:text-5xl'
          id='mission'
        >
          Dołącz do naszego zespołu
        </h2>
        <div className='flex flex-col gap-2 lg:flex-row justify-between'>
          <div className='w-1/2'>
            <p className=''>
              W HoldHand ciągle rozwijamy nasze usługi i portfolio klientów,
              dążąc do świadczenia najwyższej jakości usług w branży. Chociaż w
              tym momencie nie prowadzimy aktywnej rekrutacji do naszego zespołu
              biurowego, zawsze jesteśmy otwarci na poznanie nowych,
              utalentowanych osób, które mogą dołączyć do nas w przyszłości.
            </p>
            <p className='pt-8'>
              Jeśli jesteś zainteresowany pracą w HoldHand, zachęcamy do
              wypełnienia formularza zgłoszeniowego. Podaj w nim informacje o
              sobie, swoje doświadczenie zawodowe oraz stanowisko, na którym
              chciałbyś pracować. Wśród stanowisk, które mogą nas interesować w
              przyszłości, znajdują się m.in. pracownik biurowy, sekretarka,
              koordynator projektów i inne role wspierające naszą działalność.
            </p>
          </div>
          <SendFiles />
        </div>{' '}
        <div>
          <div className='flex flex-col gap-4'>
            <h2 className='font-bold'>Jak to działa?</h2>
            <ul className='list-disc'>
              <li>
                <span className='font-bold'>Wypełnij Formularz:</span>
                Podaj interesujące Cię stanowisko i podaj swoje dane kontaktowe
                oraz CV.
              </li>
              <li>
                <span className='font-bold'>Poczekaj na Kontakt:</span>
                Gdy tylko rozpoczniemy poszukiwania nowych członków zespołu
                pasujących do Twojego profilu, skontaktujemy się z Tobą, aby
                omówić możliwości współpracy.
              </li>
            </ul>
            <h2 className='font-bold'>Dlaczego warto do nas dołączyć?</h2>
            <ul className='list-disc'>
              <li>
                <span className='font-bold'>Rozwój i Szkolenia:</span>W HoldHand
                stawiamy na ciągły rozwój kompetencji naszego zespołu
              </li>
              <li>
                <span className='font-bold'>Przyjazna Atmosfera:</span>
                Dbamy o pozytywną atmosferę pracy i wspieramy się nawzajem w
                realizacji zawodowych celów.
              </li>
              <li>
                <span className='font-bold'>Różnorodne Projekty:</span>
                Praca w naszej firmie to możliwość uczestniczenia w
                interesujących projektach i zdobywania cennego doświadczenia.
              </li>
            </ul>
            <p>
              Twoja przyszłość w HoldHand może zacząć się dzisiaj. Nie przegap
              szansy na dołączenie do zespołu, który stawia na innowacje, rozwój
              i wzajemne wsparcie. Wypełnij formularz zgłoszeniowy – niech to
              będzie pierwszy krok do naszej potencjalnej współpracy.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Employees
