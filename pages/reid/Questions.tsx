// Questions.tsx
import React from 'react'
import questionsStyle from './questions.module.scss'
import FaqAccordion from './faqAccordion/FaqAccordion'

const Questions: React.FC = () => {
  return (
    <section className={questionsStyle.questions} id='faq'>
      <div className='container questions__container'>
        {/* Добавляем декоративную линию */}
        <div className='questions__line' />
        
        <h2 className='questions__title'>
          <span className='questions__title-span'>Հաճախակի տրվող</span> հարցեր
        </h2>
        
        <div className='questions__inner'>
          <FaqAccordion />
        </div>
      </div>
    </section>
  )
}

export default Questions
