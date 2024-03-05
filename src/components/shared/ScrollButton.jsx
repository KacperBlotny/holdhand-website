import React from 'react'

const scroll = (location) => {
  const section = document.querySelector(location)
  section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  // <button onClick={() => scroll("#test")}>Scroll to Section</button>
}

function ScrollButton({ text, location, type }) {
  return (
    <>
      {type === 'main' ? (
        <a
          onClick={() => scroll(location)}
          className='rounded-xl bg-normal hover:bg-normalActive text-white py-2 px-4 transition-colors duration-300 ease-in-out mr-4'
        >
          {text}
        </a>
      ) : (
        <a
          onClick={() => scroll(location)}
          className='rounded-xl bg-lightActive hover:bg-lightHover text-black py-2 px-4 transition-colors duration-300 ease-in-out mr-4'
        >
          {text}
        </a>
      )}
    </>
  )
}
export default ScrollButton
