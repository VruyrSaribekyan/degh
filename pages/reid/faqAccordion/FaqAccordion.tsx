
// FaqAccordion.tsx
import React, { useState } from 'react'
import FaqAccordionItem from '../faqAccordionItem/FaqAccordionItem'
import { questions } from '../../../utils/questions'

const FaqAccordion = () => {
  const [clicked, setClicked] = useState('')
  
  const handleToggle = (index: string) => {
    if (clicked === index) {
      return setClicked('')
    }
    setClicked(index)
  }
  
  return (
    <ul className='questions__list'>
      {questions.map((question, idx) => (
        <FaqAccordionItem
          key={idx.toString()}
          question={question.question}
          answer={question.answer}
          onToggle={() => handleToggle(idx.toString())}
          active={clicked === idx.toString()}
        />
      ))}
    </ul>
  )
}

export default FaqAccordion
