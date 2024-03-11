import React from 'react'
import { useEffect } from 'react'
import logo from '../assets/logo/Logo-04.png'

import hands from '../assets/img/hands.jpg'
import poland from '../assets/img/poland.jpg'
import team from '../assets/img/team.jpg'
import pass from '../assets/img/pass.jpg'

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

function About() {
  useEffect(() => {
    document.title = 'Holdhand | O nas'
  }, [])

  return (
    <div className='container mx-auto flex flex-col px-8 pt-16'>
      <div className='flex flex-row justify-between pt-8 lg:pt-24'>
        <div className='bold w-full text-6xl lg:w-1/2'>
          <span className='flex'>Witaj w HoldHand</span>
          <span className='text-4xl'>
            Twoim przewodniku po świecie międzynarodowych możliwości
            zatrudnienia.
          </span>
        </div>
        <img src={logo} alt='' className='m-auto  hidden h-[180px] lg:flex' />
      </div>
      <div className='flex'>
        <div className=' flex flex-col pt-8 lg:w-1/2'>
          <span className='pb-4'>
            Zlokalizowana w śródmieściu Lublina, agencja zatrudnienia, została
            założona przez dwoje przyjaciół, Bogusława Władykę i Damiana
            Siembidę, HoldHand, jest wyrazem pasji do odkrywania nowych
            horyzontów. Naszym celem jest łączenie ludzi i kultur, z
            wykorzystaniem technologii jako kluczowego narzędzia w tym procesie.
          </span>
          <span className='pb-4'>
            W Naszej firmie stawiamy na współpracę ponad konkurencją, wierząc,
            że rynek oferuje wystarczająco dużo możliwości dla wszystkich.
            Dzielenie się wiedzą i zasobami nie tylko prowadzi do wzajemnych
            korzyści, ale także buduje silne, oparte na zaufaniu relacje
            międzyludzkie, które są dla nas fundamentem.
          </span>
          <span>
            Promujemy kulturę otwartości, zachęcając każdego do dzielenia się
            swoimi pomysłami. Nasze dążenie do zrozumienia i adaptacji innowacji
            pozwala nam nie tylko tworzyć nowe możliwości zatrudnienia, ale
            także wzmacniać więzi międzyludzkie i budować solidne fundamenty dla
            przyszłych sukcesów.
          </span>
        </div>
        <div className='m-auto hidden lg:flex w-1/2 pt-8'>
          <img
            src={hands}
            className='w-[500px] mx-auto shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded'
          />
        </div>
      </div>
      <div id='mission'></div>
      <div className='pb-32 pt-32'>
        <div className='bold mb-8 border-b border-black p-2 text-4xl lg:text-6xl'>
          Nasza misja
        </div>
        <div className='grid w-full grid-cols-1 flex-col gap-8 lg:grid-cols-2'>
          <p>
            W kontekście bieżącej sytuacji na rynku pracy w Polsce, gdzie według
            danych{' '}
            <a
              target='blank'
              href='https://ec.europa.eu/eurostat/databrowser/view/tps00203/default/table?lang=en&category=t_labour.t_employ.t_lfsi.t_une'
              className='text-normal hover:text-normalHover'
            >
              Eurostatu{' '}
              <i className='fa-solid fa-arrow-up-right-from-square'></i>
            </a>
            , wskaźnik bezrobocia wynosił 1.8% w 2022 roku, sytuując Polskę na
            jednym z czołowych miejsc w Unii Europejskiej pod tym względem, oraz
            rosnąca liczba wolnych miejsc pracy, która według danych GUS
            osiągnęła 139,8 tys. w tym samym okresie, nasza firma rozpoznaje
            wyraźną lukę między dostępnymi zasobami pracowniczymi a potrzebami
            rynku. Dane te podkreślają, jak ważne jest otwarcie rynku pracy na
            pracowników z innych państw, aby sprostać wyzwaniom demograficznym i
            ekonomicznym.
          </p>
          <div>
            <img
              src={team}
              alt=''
              className='h-[200px] mx-auto shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded'
            />
          </div>
          <div>
            <img
              src={poland}
              alt=''
              className='hidden h-[200px] lg:flex mx-auto shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded'
            />
          </div>

          <p>
            Dążymy do tego, aby nasze działania nie tylko odpowiadały na
            bezpośrednie potrzeby rynku pracy w Polsce, ale również oferowały
            osobom z zagranicy możliwość poprawy ich sytuacji życiowej poprzez
            dostęp do stabilnego zatrudnienia. Rozumiemy, że odpowiedzialne i
            zorientowane na potrzeby obu stron dopasowanie pracowników do
            pracodawców może wspierać polską gospodarkę, umożliwiając lokalnym
            przedsiębiorstwom dalszy rozwój i wykorzystanie ich potencjału
            produkcyjnego.
          </p>
          <p>
            W HoldHand jesteśmy zobowiązani do działania w sposób
            odpowiedzialny, dbając o to, aby każde dopasowanie było korzystne
            dla obu stron i przyczyniało się do budowania silnej, zróżnicowanej
            i innowacyjnej gospodarki zarówno w stopniu ogólnym jak i lokalnym.
            Naszym celem jest nie tylko zapełnienie luki na rynku pracy, ale
            także pomoc w budowaniu mostów międzykulturowych, które łączą ludzi
            z różnych części świata.
          </p>
          <div>
            <img
              src={pass}
              alt=''
              className='h-[200px] mx-auto shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded'
            />
          </div>
        </div>
        <div id='coop'></div>
      </div>
      <div className='pb-32'>
        <div className='bold mb-8 border-b border-black p-2 text-4xl lg:text-6xl'>
          Z kim współpracujemy?
        </div>
        <p className='py-2 pb-8'>
          W HoldHand, nasza globalna sieć współpracy jest kluczem do sukcesu.
          Dzięki bliskim relacjom z rekruterami z różnych stron świata, jesteśmy
          w stanie pozyskiwać pracowników o szerokim spektrum kwalifikacji - od
          wysoko wykwalifikowanych specjalistów do niezastąpionych pracowników
          fizycznych. Nasze działania koncentrują się głównie na trzech krajach:
          Wietnamie, Azerbejdżanie i Nepalu, gdzie współpracujemy zarówno z
          lokalnymi firmami rekrutacyjnymi, jak i urzędami pracy, aby zapewnić
          najlepsze dopasowanie między potrzebami naszych klientów a
          umiejętnościami pracowników.
        </p>
        <ul className='grid grid-cols-2 justify-between gap-4 md:grid-cols-5'>
          <li>
            <img
              src={azerb}
              className='mx-auto w-[150px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:scale-105 transition-all ease-in-out duration-300'
            />
          </li>
          <li>
            <img
              src={belarus}
              className='mx-auto w-[150px]  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:scale-105 transition-all ease-in-out duration-300'
            />
          </li>
          <li>
            <img
              src={georg}
              className='mx-auto w-[150px]  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:scale-105 transition-all ease-in-out duration-300'
            />
          </li>
          <li>
            <img
              src={india}
              className='mx-auto w-[150px]  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:scale-105 transition-all ease-in-out duration-300'
            />
          </li>
          <li className='mx-auto w-[150px]'>
            <img
              src={nepal}
              className='h-[75px] hover:scale-105 transition-all ease-in-out duration-300'
            />
          </li>
          <li>
            <img
              src={phil}
              className='mx-auto w-[150px]  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:scale-105 transition-all ease-in-out duration-300'
            />
          </li>
          <li>
            <img
              src={sri}
              className='mx-auto w-[150px]  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:scale-105 transition-all ease-in-out duration-300'
            />
          </li>
          <li className='mx-auto w-[150px]'>
            <img
              src={turkey}
              className='mx-auto h-[75px]  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:scale-105 transition-all ease-in-out duration-300'
            />
          </li>
          <li>
            <img
              src={bang}
              className='mx-auto w-[150px]  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:scale-105 transition-all ease-in-out duration-300'
            />
          </li>
          <li>
            <img
              src={viet}
              className='mx-auto w-[150px]  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:scale-105 transition-all ease-in-out duration-300'
            />
          </li>
        </ul>

        <p className='py-2 pt-8'>
          W HoldHand, dążymy do budowania mostów między talentami a
          możliwościami, łącząc różnorodne kultury i umiejętności dla wspólnego
          sukcesu. Nasze zaangażowanie w wysokiej jakości międzynarodową
          rekrutację sprawia, że jesteśmy cenionym partnerem dla firm
          poszukujących najlepszych talentów na całym świecie.
        </p>
      </div>
    </div>
  )
}

export default About
