import React from 'react'
import { useEffect } from 'react'
import logo from '../assets/logo/Logo-04.png'
import ContactUs from '../components/ContactUs'

import worker1 from '../assets/img/worker1.jpg'
import worker2 from '../assets/img/worker2.jpg'
import worker3 from '../assets/img/worker3.jpg'
import money from '../assets/img/money.jpg'

import azerb from '../assets/flag/azerbaijan.png'
import bang from '../assets/flag/bangladesh.png'
import belarus from '../assets/flag/belarus.png'
import georg from '../assets/flag/georgia.png'
import india from '../assets/flag/india.svg'
import nepal from '../assets/flag/nepal.png'
import phil from '../assets/flag/philipines.png'
import sri from '../assets/flag/srilanka.webp'
import ukr from '../assets/flag/ukraine.jpg'
import viet from '../assets/flag/vietnam.png'
import turkey from '../assets/flag/turkey.webp'

function Employers() {
  useEffect(() => {
    document.title = 'Holdhand | Dla pracodawców'
  }, [])

  return (
    <div
      className='container mx-auto flex flex-col px-8 pb-24 pt-24 lg:pt-24'
      id='offer'
    >
      <h1 className='bold mb-8 border-b border-black p-2 text-5xl'>
        Nasza oferta
      </h1>
      <div className='flex flex-col text-2xl lg:flex-row'>
        <p className='w-full'>
          W HoldHand specjalizujemy się w dostarczaniu kompleksowych rozwiązań w
          zakresie zatrudnienia, które są dostosowane do indywidualnych potrzeb
          naszych klientów. Oferujemy szeroki zakres usług, w tym leasing
          pracowniczy, rekrutację na zlecenie oraz pracę tymczasową, wszystkie
          realizowane z myślą o maksymalnej efektywności i elastyczności
          współpracy.
        </p>
        <img
          alt='money'
          src={money}
          className='hidden w-[300px] lg:flex shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded'
        />
      </div>
      <div className='flex flex-col gap-8 pb-16 pt-8'>
        <div>
          <h2
            className='mb-8 border-b border-black p-2 text-3xl font-bold'
            id='mission'
          >
            Outsorcing Pracowniczy
          </h2>
          <div className='flex '>
            <p className='lg:w-1/2'>
              Outsorcing pracowniczy to rozwiązanie, które umożliwia firmom
              zatrudnienie pracowników przez pośrednictwo HoldHand. Ten model
              współpracy oferuje elastyczność w zarządzaniu zasobami ludzkimi,
              bez obciążania struktury wewnętrznej przedsiębiorstwa dodatkowymi
              formalnościami. HoldHand przejmuje pełną odpowiedzialność za
              procesy rekrutacyjne, płacowe i administracyjne, co pozwala naszym
              klientom skupić się na podstawowej działalności.
            </p>
            <img
              alt='worker orange'
              src={worker1}
              className='mx-auto hidden w-[300px] lg:flex shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded'
            />
          </div>
        </div>
        <div>
          <h2
            className='bold mb-8 border-b border-black p-2 text-3xl font-bold'
            id='mission'
          >
            Rekrutacja na zlecenie
          </h2>
          <div className='flex '>
            <p className='lg:w-1/2'>
              Nasza usługa rekrutacji na zlecenie w HoldHand jest dedykowana
              firmom poszukującym skutecznych rozwiązań w zakresie pozyskiwania
              i zarządzania pracownikami, szczególnie z zagranicy. Nasza agencja
              bierze na siebie całość procesu: od identyfikacji i pozyskania
              kandydata, poprzez jego sprowadzenie do Polski, aż po wdrożenie na
              stanowisku pracy u naszego klienta. W tym modelu, HoldHand nie
              jest formalnym pracodawcą pracownika, lecz pośredniczy w
              świadczeniu jego usług na rzecz klienta. Z kolei klient staje się
              ostatecznym pracodawcą, zapewniając zakwaterowanie, określając
              zakres obowiązków i stanowisko pracy, oraz nadzorując pracę
              pracownika. Nasza usługa jest skierowana do firm, które pragną
              ograniczyć formalności i zaangażowanie czasowe w proces
              rekrutacyjny.
            </p>
            <img
              src={worker2}
              alt='worker hammer'
              className='mx-auto hidden w-[300px] lg:flex shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded'
            />
          </div>
        </div>
        <div>
          <h2
            className='bold mb-8 border-b border-black p-2 text-3xl font-bold'
            id='mission'
          >
            Praca Tymczasowa
          </h2>
          <div className='flex '>
            <p className='lg:w-1/2'>
              Praca tymczasowa to usługa skierowana do firm, które potrzebują
              pracowników na krótkotrwałe projekty lub sezonowe wzmożenie. Jest
              to idealne rozwiązanie dla przedsiębiorstw poszukujących
              elastyczności oraz możliwości szybkiego dostosowania zespołu do
              aktualnych potrzeb operacyjnych. HoldHand zapewnia kompleksową
              obsługę tego procesu, od rekrutacji po zarządzanie kadrami,
              oferując tym samym wsparcie na każdym etapie współpracy.
            </p>
            <img
              src={worker3}
              alt='worker machine'
              className='mx-auto hidden w-[300px] lg:flex shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded'
            />
          </div>
        </div>
        <div>
          <h3
            className='bold mb-8 border-b border-black p-2 text-3xl font-bold'
            id='mission'
          >
            Z kim współpracujemy
          </h3>
          <div className='grid xl:grid-cols-2 grid-cols-1'>
            <p className='pb-8'>
              Nasza sieć rekrutacyjna w HoldHand rozciąga się na strategicznie
              wybrane kraje, stanowiące źródło wykwalifikowanej siły roboczej,
              gotowej do podjęcia pracy na polskim rynku. Oto państwa, z których
              najczęściej pozyskujemy pracowników, odzwierciedlające nasze
              główne kierunki w poszukiwaniu talentów
            </p>
            <div className='mx-auto '>
              <p className='font-bold text-xl'>Główne kierunki</p>

              <div className='pb-8 flex gap-4'>
                <div>
                  <img src={viet} className='w-[100px]' alt='holdhand flag' />
                  <p className='flex mx-auto'>Wietnam</p>
                </div>
                <div>
                  <img src={nepal} className='h-[50px]' alt='holdhand flag' />
                  <p>Nepal</p>
                </div>
                <div>
                  <img src={azerb} className='h-[50px]' alt='holdhand flag' />
                  <p>Azerbejdżan</p>
                </div>
                <div>
                  <img src={georg} className='h-[50px]' alt='holdhand flag' />
                  <p>Gruzja</p>
                </div>{' '}
              </div>
            </div>
            <p className='pb-8'>
              Nasze działania koncentrują się na budowaniu trwałych relacji
              zarówno z pracownikami, jak i z klientami, aby zapewnić najwyższą
              jakość świadczonych usług. Współpraca z tymi państwami pozwala nam
              na ciągłe poszerzanie bazy kandydatów, co umożliwia nam
              dopasowanie idealnych pracowników do potrzeb naszych klientów.
            </p>
            <div className='mx-auto '>
              <p className='font-bold text-xl'>Pozostałe kierunki</p>
              <div className='pb-8 flex gap-4'>
                <div>
                  <img src={bang} className='w-[100px]' alt='holdhand flag' />
                  <p>Bangladesz</p>
                </div>
                <div>
                  <img
                    src={belarus}
                    className='w-[100px]'
                    alt='holdhand flag'
                  />
                  <p>Białoruś</p>
                </div>
                <div>
                  <img src={india} className='w-[100px]' alt='holdhand flag' />
                  <p>Indie</p>
                </div>
                <div>
                  <img src={phil} className='w-[100px]' alt='holdhand flag' />
                  <p>Filipiny</p>
                </div>
                <div>
                  <img src={sri} className='w-[100px]' alt='holdhand flag' />
                  <p>Sri Lanka</p>
                </div>
                <div>
                  <img src={ukr} className='w-[100px]' />
                  <p>Ukraina</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id='coop'></div>
      </div>

      <div className='flex flex-col gap-8'>
        <h1 className='bold mb-8 border-b border-black p-2 text-5xl'>
          Współpraca
        </h1>
        <div className='flex flex-col text-2xl lg:flex-row'>
          <p className='w-full'>
            W HoldHand zdajemy sobie sprawę, jak ważne jest znalezienie
            odpowiednich pracowników, którzy wspierają cele i rozwój Twojej
            firmy. Dlatego też oferujemy potencjalnym klientom prosty i
            efektywny proces rozpoczęcia współpracy, który ma na celu
            dostarczenie najlepszych rozwiązań kadrowych dla Twojego biznesu.
          </p>
          <img src={logo} className='hidden w-[300px] lg:flex' />
        </div>

        <div className='flex flex-col gap-4'>
          <h2 className='py-4 font-bold lg:py-0'>Jak Rozpocząć Współpracę?</h2>
          <div className='flex flex-col lg:flex-row'>
            <ul className='list-disc lg:w-2/3 pr-16'>
              <li>
                <span className='font-bold'>Kontakt Inicjujący: </span>
                Skontaktuj się z nami poprzez formularz kontaktowy na naszej
                stronie internetowej, mailowo lub telefonicznie. Podziel się
                swoimi potrzebami rekrutacyjnymi i oczekiwaniami wobec
                przyszłych pracowników.
              </li>
              <li>
                <span className='font-bold'>Spotkanie i Analiza Potrzeb: </span>
                Umówimy się na spotkanie (osobiście lub online), podczas którego
                szczegółowo omówimy specyfikę Twojej branży, charakter pracy
                oraz wymagane kwalifikacje kandydatów. To pozwoli nam zrozumieć
                Twoje potrzeby i zaproponować najbardziej efektywne rozwiązania.
              </li>
              <li>
                <span className='font-bold'>Propozycja Współpracy: </span>
                Na podstawie zebranych informacji, przedstawimy Ci indywidualnie
                dopasowaną ofertę współpracy, w tym szczegóły dotyczące procesu
                rekrutacji, warunków finansowych oraz zakresu naszych usług.
              </li>
              <li>
                <span className='font-bold'>Podpisanie Umowy: </span>
                Po zaakceptowaniu propozycji współpracy, formalizujemy nasze
                zobowiązania poprzez umowę. Ten krok gwarantuje jasność warunków
                naszej współpracy, określając zakres usług, obowiązki stron oraz
                kwestie finansowe. Naszym celem jest zapewnienie obu stronom
                pełnej przejrzystości i komfortu współpracy od samego początku.
              </li>
            </ul>
            <div className='lg:w-1/3 border lg:m-0 mt-16 rounded p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
              <ContactUs />
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <h2 className='font-bold'>Dlaczego Wybrać HoldHand?</h2>
          <ul className='list-disc'>
            <li>
              <span className='font-bold'>Elastyczność i Dostosowanie: </span>
              Nasze usługi są projektowane tak, aby odpowiadać na dynamicznie
              zmieniające się potrzeby biznesowe.
            </li>
            <li>
              <span className='font-bold'>Oszczędność Czasu i Zasobów: </span>
              Dzięki przejęciu obowiązków związanych z zarządzaniem personelem,
              nasi klienci mogą skupić się na swojej głównej działalności.
            </li>
            <li>
              <span className='font-bold'>Dostęp do Talentów: </span>
              Posiadamy szeroką sieć kontaktów i bogate doświadczenie w
              pozyskiwaniu najlepszych kandydatów na rynku.
            </li>
            <li>
              <span className='font-bold'>W HoldHand </span>
              jesteśmy przekonani, że nasze usługi mogą znacząco przyczynić się
              do wzrostu i rozwoju Twojej firmy, dostarczając elastyczne i
              skuteczne rozwiązania w zakresie zarządzania zasobami ludzkimi.
              Skontaktuj się z nami, aby dowiedzieć się więcej o tym, jak możemy
              wspierać Twój biznes.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Employers
