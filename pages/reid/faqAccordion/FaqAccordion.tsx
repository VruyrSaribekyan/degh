// 4businessmen/pages/reid/faqAccordion/FaqAccordion.tsx
import React, { useState } from 'react'
import classNames from 'classnames'
import { questions } from '../questions/Questions'
import FaqAccordionItem from '../faqAccordionItem/FaqAccordionItem'
import questionsStyle from '../questions.module.scss'

const FaqAccordion = () => {
  const [clicked, setClicked] = useState('')
  const handleToggle = (index: string) => {
    if (clicked === index) {
      return setClicked('')
    }
    setClicked(index)
  }
  return (
    <ul className={classNames('questions__list', questionsStyle.questions)}>
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