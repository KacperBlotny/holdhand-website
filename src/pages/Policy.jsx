import React from 'react'
import { useEffect } from 'react'

function Policy() {
  useEffect(() => {
    document.title = 'Holdhand | Polityka prywatności'
  }, [])

  return (
    <div className='container py-32 px-4 mx-auto'>
      <h1 className='text-4xl font-bold'>
        Polityka Prywatności i Ochrony Danych Osobowych
      </h1>
      <p>
        W HoldHand priorytetem jest ochrona prywatności oraz bezpieczeństwo
        przetwarzania danych osobowych naszych klientów i użytkowników.
        Zobowiązujemy się do przetwarzania danych zgodnie z obowiązującymi
        przepisami prawa, w szczególności z Rozporządzeniem Parlamentu
        Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie
        ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w
        sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy
        95/46/WE (ogólne rozporządzenie o ochronie danych), zwane dalej „RODO”.
      </p>
      <ul className='flex flex-col gap-8'>
        <li>
          <h4 className='text-2xl font-bold'>Zakres danych osobowych:</h4>
          <p className='pt-2'>
            Przetwarzamy dane osobowe uzyskane bezpośrednio od naszych
            użytkowników lub klientów w ramach korzystania z naszych usług, w
            tym danych zbieranych podczas wizyt na stronie internetowej, jak
            również danych pozyskanych w ramach zawierania umów handlowych.
          </p>
        </li>
        <li>
          <h4 className='text-2xl font-bold'>Cel przetwarzania:</h4>
          <p className='pt-2'>
            Dane osobowe przetwarzane są wyłącznie w celach: Realizacji umów
            zawartych z HoldHand Sp. z o.o. Marketingu bezpośredniego własnych
            produktów lub usług. Dostosowania treści naszych stron do
            preferencji użytkownika oraz optymalizacji korzystania ze stron
            internetowych.
          </p>
        </li>
        <li>
          <h4 className='text-2xl font-bold'>Podstawa prawna:</h4>
          <p className='pt-2'>
            Przetwarzanie danych osobowych odbywa się na podstawie zgody
            udzielonej przez osobę, której dane dotyczą, w zakresie i celu
            określonym w treści zgody, albo jest niezbędne do wykonania umowy, w
            której stroną jest osoba, której dane dotyczą, lub do podjęcia
            działań na żądanie tej osoby przed zawarciem umowy.
          </p>
        </li>
        <li>
          <h4 className='text-2xl font-bold'>Bezpieczeństwo danych:</h4>
          <p className='pt-2'>
            Zobowiązujemy się do ochrony danych osobowych przed nieuprawnionym
            dostępem, a także przed ich przypadkową utratą, zniszczeniem czy
            uszkodzeniem. Stosujemy odpowiednie techniczne i organizacyjne
            środki bezpieczeństwa w celu zapewnienia ochrony przetwarzanych
            danych osobowych.
          </p>
        </li>
        <li>
          <h4 className='text-2xl font-bold'>
            Prawa osób, których dane dotyczą:
          </h4>
          <p className='pt-2'>
            Każda osoba, której dane dotyczą, ma prawo do dostępu do swoich
            danych, ich sprostowania, usunięcia lub ograniczenia przetwarzania,
            a także prawo do przenoszenia danych, wniesienia sprzeciwu oraz
            prawo do cofnięcia zgody na przetwarzanie danych osobowych w
            dowolnym momencie bez wpływu na zgodność z prawem przetwarzania,
            którego dokonano na podstawie zgody przed jej cofnięciem.
          </p>
        </li>
        <li>
          <h4 className='text-2xl font-bold'>Magazynowanie danych:</h4>
          <p className='pt-2'>
            Dane osobowe są przechowywane przez okres niezbędny do realizacji
            celów, dla których zostały zebrane, z zastrzeżeniem przepisów prawa
            wymagających dłuższego okresu przechowywania danych.
          </p>
        </li>
        <li>
          <h4 className='text-2xl font-bold'>Kontakt:</h4>
          <p className='pt-2'>
            W przypadku jakichkolwiek pytań dotyczących przetwarzania danych
            osobowych oraz korzystania z przysługujących praw związanych z
            przetwarzaniem danych, prosimy o kontakt z naszym Inspektorem
            Ochrony Danych na adres email: rodo@holdhand.eu
          </p>
        </li>
      </ul>
    </div>
  )
}

export default Policy
