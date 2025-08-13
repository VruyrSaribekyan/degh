// 4businessmen/pages/reid/faqAccordionItem/FaqAccordionItem.tsx
import React from 'react'
import classNames from 'classnames'
import { FAQ } from '../questions/Questions'

interface AccordionItemProps extends FAQ {
  onToggle: () => void
  active: boolean
}

const FaqAccordionItem = ({
  question,
  answer,
  onToggle,
  active,
}: AccordionItemProps) => {
  return (
    <li
      className={classNames('questions__list-item questions-item', { active })}
    >
      <div
        className={classNames('questions-item__header', { active })}
        onClick={onToggle}
      >
        <h3 className={classNames('questions__item-title', { active })}>
          {question}
        </h3>
        <span />
      </div>
      <div className={classNames('questions-item__body', { active })}>
        <p className='questions__answer'>{answer}</p>
      </div>
      <div className={classNames('questions__bg', { active })} />
    </li>
  )
}

export default FaqAccordionItem