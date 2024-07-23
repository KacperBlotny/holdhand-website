import React, { useState, useEffect } from 'react'

const CookiePolicyPopup = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className='fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50'>
      <div className='container mx-auto flex justify-between items-center'>
        <p className='text-sm'>
          We use cookies to improve your experience on our site. By using our
          site, you consent to cookies.
        </p>
        <button
          onClick={handleAccept}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4'
        >
          Accept
        </button>
      </div>
    </div>
  )
}

export default CookiePolicyPopup
