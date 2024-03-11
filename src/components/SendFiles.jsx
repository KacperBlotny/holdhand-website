import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export const SendFiles = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    setIsLoading(true)
    emailjs
      .sendForm('service_zwh185j', 'template_cfzls4q', form.current, {
        publicKey: '0cgRTZcUDa00MRlUb',
      })
      .then(
        () => {
          console.log('SUCCESS!')
          setStatusMessage('Sukces! Dziękujemy za wiadomość!')
          setIsLoading(false)
        },
        (error) => {
          setStatusMessage('Wystąpił problem, spróbuj ponownie')
          setIsLoading(false)
          console.log('FAILED...', error.text)
        }
      )
  }

  return (
    <form
      enctype='multipart/form-data'
      method='post'
      ref={form}
      onSubmit={sendEmail}
      className=''
    >
      <ul className='flex flex-col gap-4 w-full py-8 lg:py-0'>
        <li className='flex flex-col'>
          <label>Imię / nazwa firmy</label>
          <input
            type='text'
            placeholder='Imię / nazwa firmy'
            name='user_name'
            class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </li>
        <li className='flex flex-col'>
          <label>Email</label>
          <input
            type='email'
            placeholder='Email'
            name='user_email'
            class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </li>
        <li className='flex flex-col w-full'>
          <label>Wiadomość</label>
          <textarea
            name='message'
            class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none h-[100px]'
          />
        </li>
        <li>
          <p>Twoje CV</p>
          <input
            type='file'
            name='my_file'
            accept='.doc, .docx, .pdf'
            className='text-sm text-stone-500
   file:mr-5 file:py-1 file:px-3 file:border-[1px]
   file:text-xs file:font-medium
   file:bg-stone-50 file:text-stone-700
   hover:file:cursor-pointer hover:file:bg-blue-50
   hover:file:text-blue-700'
          />
        </li>
        <li>
          {/* {statusMessage} */}
          {isLoading ? (
            <p className='py-2'>Wysyłam...</p>
          ) : (
            <div className='flex'>
              {' '}
              <input
                type='submit'
                value='Wyślij'
                class='bg-normal hover:bg-normalHover cursor-pointer text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              />{' '}
              <p className='my-auto px-4'>{statusMessage}</p>
            </div>
          )}
          {/* {emailSucces ? <input type="submit" value="Wysłano pomyślnie!" class="bg-green-500 hover:bg-normalHover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline pointer-events-none"/> : <input type="submit" value="Wyślij" class="bg-normal hover:bg-normalHover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"/>}
            {emailSucces? <p>Wystąpił błąd</p> : <></>} */}
        </li>
      </ul>
    </form>
  )
}
export default SendFiles
