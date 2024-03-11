import React from 'react'

import teamhands from '../assets/img/teamhands.jpg'

function Agency() {
  return (
    <div className='container mx-auto flex flex-col px-8 pb-24 pt-24 lg:pt-24'>
      <div
        className='bold mb-8 border-b border-black p-2 text-5xl'
        id='mission'
      >
        Oferta dla agencji zatrudnienia
      </div>
      <div className='flex'>
        <div className='lg:w-2/3'>
          <p className='text-xl'>
            W naszej ofercie dla agencji pracy w HoldHand, skupiamy się na
            dostarczaniu kompleksowych rozwiązań w zakresie rekrutacji i
            leasingu pracowniczego. Rozumiemy, że jako specjaliści w tej samej
            branży, znacie doskonale te pojęcia, więc skoncentrujemy się na
            konkretnej ofercie dla was:
          </p>
          <ul className='flex list-disc flex-col gap-2 pt-8'>
            <li>
              <span className='font-bold'>Pozyskiwanie Pracowników: </span>
              Oferujemy zarówno jednorazowe usługi rekrutacyjne, jak i
              długoterminową współpracę w zakresie ciągłego dostarczania
              wykwalifikowanych i niewykwalifikowanych pracowników.
              Specjalizujemy się w rekrutacji międzynarodowej, co pozwala nam na
              dostarczenie pracowników z różnych części świata, zgodnie z
              potrzebami naszych klientów.
            </li>
            <li>
              <span className='font-bold'>Leasing Pracowniczy:</span>
              Tutaj, z przymrużeniem oka, możemy powiedzieć, że wiecie, o co
              chodzi.
            </li>
            <li>
              <span className='font-bold'>Rekrutacja na Zlecenie: </span>
              Usługa polegająca na rekrutacji pracowników z zagranicy, ich
              sprowadzeniu do Polski i wdrożenie u finalnego klienta. W tym
              modelu, HoldHand działa jako pośrednik, nie będąc formalnym
              pracodawcą. To rozwiązanie oferuje agencjom pracy transparentność
              kosztów oraz elastyczność, umożliwiając efektywne zarządzanie
              zasobami ludzkimi zgodnie z bieżącymi potrzebami ich klientów.
              Klient końcowy jest ostatecznym pracodawcą, zapewniając
              zakwaterowanie i definiując zakres obowiązków.
            </li>
          </ul>
        </div>
        <div className='hidden lg:flex mx-auto'>
          <img src={teamhands} className='w-[300px] mx-auto' />
        </div>
      </div>
    </div>
  )
}

export default Agency
