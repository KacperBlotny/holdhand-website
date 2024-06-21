import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

function ContactForm() {
  const form = useRef()
  const [popupVisible, setPopupVisible] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()

    console.log(form.current)

    emailjs
      .sendForm(
        'service_ymchy9l',
        'template_6a7vh0g',
        form.current,
        'J337P1G-yZM6S-ISK'
      )
      .then(
        (result) => {
          console.log(result.text)
          form.current.reset()
          setPopupVisible(true)
          setTimeout(() => setPopupVisible(false), 3000)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <div class='flex flex-col items-end pt-16 xl:pt-0 xl:justify-start px-4 justify-start'>
      <div className='text-white'>
        <p className='text-white font-bold text-4xl pt-24 pb-12'>
          Skontaktuj się z nami!
        </p>
        <div class='max-w-4xl w-full rounded-lg'>
          <form
            id='contact-form'
            ref={form}
            onSubmit={sendEmail}
            className='space-y-6'
          >
            <div className=''>
              <input
                id='user_name'
                name='user_name'
                type='text'
                placeholder='Imię i nazwisko / nazwa firmy'
                required
                className='mt-1 block w-full py-4 shadow-sm focus:outline-none focus:ring-blue focus:border-blue sm:text-sm border-b-2 bg-transparent'
              />
            </div>
            <div className=''>
              <input
                id='user_email'
                name='user_email'
                type='email'
                placeholder='Email'
                required
                className='mt-1 block w-full py-4 shadow-sm focus:outline-none focus:ring-blue focus:border-blue sm:text-sm bg-transparent border-b-2'
              />
            </div>

            <div>
              <textarea
                id='message'
                name='message'
                placeholder='Twoja wiadomość...'
                rows='4'
                required
                className='mt-1 block w-full py-4  shadow-sm focus:outline-none focus:ring-blue focus:border-blue sm:text-sm h-[72px] bg-transparent border-b-2'
              ></textarea>
            </div>

            <div class='flex items-center mb-4'>
              <input
                id='default-checkbox'
                type='checkbox'
                required
                value=''
                class='w-4 h-4 text-blue bg-transparent border-gray-300 rounded focus:ring-0'
              />
              <label
                for='default-checkbox'
                class='ms-2 text-xs font-medium text-gray-900 dark:text-gray-300 flex'
              >
                Akceptuję zasady dotyczące przetwarzania moich danych osobowych
                zgodnie z polityką prywatności oraz RODO.
              </label>
            </div>
            <div className='py-8'>
              <button
                type='submit'
                className='rounded-3xl flex justify-center py-4 px-8 border border-mainHover text-sm font-medium text-mainHover hover:text-white transition-all duration-300'
              >
                Wyślij wiadomość
              </button>
            </div>
          </form>

          {popupVisible && (
            <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 text-black'>
              <div className='bg-white p-4 rounded shadow-md text-black'>
                <p>
                  Wiadomość wysłana pomyślnie! Dziękujemy za skorzystanie z
                  formularza!
                </p>
              </div>
            </div>
          )}
        </div>{' '}
      </div>
    </div>
  )
}

export default ContactForm
