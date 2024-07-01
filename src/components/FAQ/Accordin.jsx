import React, { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import arrow from '../../assets/svg/arrows/arrow_right_blue.svg'

import useTranslationHook from '../../hooks/useTranslationHook'

// AccordionItem component
const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  const { t, changeLanguage } = useTranslationHook()
  const contentHeight = useRef()

  // Function to render HTML content safely
  const createMarkup = (content) => ({ __html: content })

  return (
    <div className='wrapper container mx-auto bg-white rounded-3xl'>
      <button
        className={`mx-4 my-2 question-container ${isOpen ? 'active' : ''}`}
        onClick={onClick}
      >
        <img
          src={arrow}
          alt=''
          className={`h-[40px] arrow ${isOpen ? 'active' : ''}`}
        />
        <p className='pr-6 question-content text-main'>{question}</p>
      </button>
      <div
        ref={contentHeight}
        className='answer-container'
        style={
          isOpen
            ? { height: contentHeight.current.scrollHeight }
            : { height: '0px' }
        }
      >
        {/* Render answer with dangerouslySetInnerHTML for line breaks */}
        <p
          className='answer-content text-main opacity-60 pb-4'
          dangerouslySetInnerHTML={createMarkup(answer)}
        />
      </div>
    </div>
  )
}

const Accordion = () => {
  const { t } = useTranslation()
  const [activeIndex, setActiveIndex] = useState(null)

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  // Fetch the accordion data from the translation files
  const data = t('accordion.items', { returnObjects: true })

  return (
    <div className='container mx-auto flex flex-col gap-4 '>
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  )
}

export default Accordion
