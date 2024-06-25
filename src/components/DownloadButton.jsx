// src/DownloadButton.js
import React from 'react'

const DownloadButton = () => {
  const handleDownload = () => {
    const fileUrl = '../../public/FORMULARZ_WYCENY_.docx' // URL or local path to the file
    const fileName = 'FORMULARZ_WYCENY_.docx' // Name of the file to be downloaded

    const link = document.createElement('a')
    link.href = fileUrl
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    // <button
    //   onClick={handleDownload}
    //   className='rounded-3xl flex justify-center py-4 px-8 border border-main text-sm font-medium text-main hover:text-mainHover transition-all duration-300 mt-8'
    // >
    //   Pobierz formularz wyceny
    // </button>
    <a
      href='https://we.tl/t-EYaS0J6S3Z'
      target='_blank'
      className='rounded-3xl flex justify-center py-4 px-8 border border-main text-sm font-medium text-main hover:text-mainHover transition-all duration-300 mt-8'
    >
      Pobierz formularz wyceny
    </a>
  )
}

export default DownloadButton
