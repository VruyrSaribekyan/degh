import React from 'react'
import wayStyle from '../way.module.scss'

const Way = () => {
  const conditions = [
    {
      text: "Փնտրում եք արդյունավետ բուժում"
    },
    {
      text: "Ցանկանում եք նորագույն դեղամիջոցներ"
    },
    {
      text: "Կարևորում եք անվտանգությունը և որակը"
    },
    {
      text: "Գնահատում եք մասնագիտական մոտեցումը"
    },
    {
      text: "Կամ պարզապես կարիք ունեք խորհրդատվության"
    }
  ]

  return (
    <section className={wayStyle.way}>
      <div className='way__container'>
        <div className='way__header'>
          <h2 className='way__title'>Եթե դուք</h2>
          <p className='way__subtitle'>գտնվում եք հետևյալ իրավիճակներից որևէ մեկում</p>
        </div>

        <div className='way__cards-grid'>
          {conditions.map((condition, index) => (
            <div key={index} className='way__card'>
              <div className='way__card-icon'>
                {/* Временно убираем изображения - используем номера */}
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: '#00a693',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  position: 'relative',
                  zIndex: 2
                }}>
                  {index + 1}
                </div>
              </div>
              <p className='way__card-text'>
                {condition.text}
              </p>
            </div>
          ))}
        </div>

        <div className='way__conclusion'>
          <h3 className='way__conclusion-text'>
            Դուք ճիշտ տեղում եք!
          </h3>
        </div>
      </div>
    </section>
  )
}

export default Way