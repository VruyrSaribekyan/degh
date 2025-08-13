import React from 'react'
import questionsStyle from './questions.module.scss'
import FaqAccordion from './faqAccordion/FaqAccordion'

const Questions: React.FC = () => {
  return (
    <section className={questionsStyle.questions} id='faq'>
      <div className='container questions__container'>
        <h2 className='questions__title'>Вопросы и ответы</h2>
        <div className='questions__inner'>
          <FaqAccordion />
        </div>
      </div>
    </section>
  )
}

export default Questions