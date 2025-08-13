import React from 'react'
import youStyle from '../you.module.scss'

const You = () => {
  const advantages = [
    {
      text: "Միջազգային որակի դեղամիջոցներ անմիջապես արտադրողներից"
    },
    {
      text: "Լիարժեք փաստաթղթեր և որակի երաշխիքներ"
    },
    {
      text: "Մասնագիտական խորհրդատվություն և անհատական մոտեցում"
    },
    {
      text: "Մրցունակ գներ և ճկուն վճարման պայմաններ"
    },
    {
      text: "Արագ առաքում և հետվաճառքային սպասարկում"
    }
  ]

  return (
    <section className={youStyle.you}>
      <div className='you__container'>
        <div className='you__title-box'>
          <h2 className='you__title'>Մեզ հետ դուք կստանաք</h2>
        </div>

        <div className='you__cards-grid'>
          {advantages.map((advantage, index) => (
            <div key={index} className='you__card'>
              <div className='you__card-icon'>
                {/* Временно убираем изображения */}
                <div style={{
                  width: '50px', 
                  height: '50px', 
                  background: '#00a693', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '20px',
                  fontWeight: 'bold'
                }}>
                  {index + 1}
                </div>
              </div>
              <p className='you__card-text'>
                {advantage.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default You