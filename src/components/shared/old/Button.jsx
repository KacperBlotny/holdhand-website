import React from 'react'
import { Link } from 'react-router-dom'

function Button({ text, link, type }) {
  return (
    <>
      {type === 'main' ? (
        <Link
          to={`/${link}`}
          className='rounded-xl bg-normal hover:bg-normalActive text-white py-2 px-4 transition-colors duration-300 ease-in-out mr-4'
        >
          {text}
        </Link>
      ) : (
        <Link
          to={`/${link}`}
          className='rounded-xl bg-lightActive hover:bg-lightHover text-black py-2 px-4 transition-colors duration-300 ease-in-out mr-4'
        >
          {text}
        </Link>
      )}
    </>
  )
}

export default Button
