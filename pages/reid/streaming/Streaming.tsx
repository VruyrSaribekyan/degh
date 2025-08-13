import React, { useRef } from 'react'
import classNames from 'classnames'
import { useInViewport } from 'react-in-viewport'
import Image from 'next/image'
import streamingStyle from '../streaming.module.scss'

// Импорт изображений
import koshik10 from '/assets/images/koshik10.png'
import koshik010 from '/assets/images/koshik010.png'
import koshik13 from '/assets/images/koshik13.png'
import koshik15 from '/assets/images/koshik15.png'
import useClientSide from '../../../hooks/useClientSide'

// Данные карточек
const streamingData = [
  {
    id: 'innovation',
    image: koshik10,
    title: 'Նորագույն Տեխնոլոգիաներ',
    description: 'Մենք ներմուծում ենք ամենաարդիական հակաքաղցկեղային դեղամիջոցները, որոնք հիմնված են վերջին գիտական հետազոտությունների վրա և ապացուցված արդյունավետություն ունեն:',
    width: 553,
    height: 328
  },
  {
    id: 'quality',
    image: koshik010,
    title: 'Որակի Խիստ Վերահսկում',
    description: 'Յուրաքանչյուր դեղամիջոց անցնում է բազմաստիճան ստուգում և համապատասխանում է միջազգային GMP չափանիշներին՝ ապահովելով առավելագույն անվտանգություն:',
    width: 484,
    height: 338
  },
  {
    id: 'partnership',
    image: koshik13,
    title: 'Համագործակցություն Առաջատարների Հետ',
    description: 'Մենք աշխատում ենք աշխարհի լավագույն դեղագործական ընկերությունների հետ, ապահովելով ուղղակի մատակարարումներ և մրցունակ գներ:',
    width: 450,
    height: 318
  },
  {
    id: 'support',
    image: koshik15,
    title: 'Լիարժեք Աջակցություն Հիվանդներին',
    description: 'Մենք ոչ միայն մատակարարում ենք դեղորայք, այլ նաև ապահովում ամբողջական աջակցություն՝ խորհրդատվությունից մինչև բուժման մոնիտորինգ:',
    width: 584,
    height: 355
  }
]

const Streaming: React.FC = () => {
  const isClientSide = useClientSide()
  const refStreamingBox = useRef<HTMLDivElement>(null)
  const { enterCount: enterCountStreamingBox } = useInViewport(refStreamingBox, { threshold: 0.2 })

  return (
    <section className={streamingStyle.streaming}>
      <div className='streaming__container container'>
        <div className='streaming__line' />

        <h2 className='streaming__title'>
          <span className='streaming__title-span'>Դեղորայքի ներմուծումը</span> —
          դա պատասխանատու գործ է, որը պահանջում է փորձ և գիտելիքներ
        </h2>

        <div className='streaming__caption'>
          Մեր հաճախորդները{' '}
          <br className='streaming__br-mob' />
          <span className='streaming__caption-span'>վստահում են մեզ</span>{' '}
          <br className='streaming__br-mob' />
          և ստանում են լավագույն արդյունքները բուժումից
        </div>

        {isClientSide && (
          <div
            className={classNames('streaming__content-box', {
              triggered: enterCountStreamingBox > 0,
            })}
            ref={refStreamingBox}
          >
            {streamingData.map((item, index) => (
              <div key={item.id} className='streaming__content'>
                <div className='streaming__content-img'>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={item.width}
                    height={item.height}
                    quality={85}
                    priority={index < 2}
                    loading={index < 2 ? 'eager' : 'lazy'}
                  />
                </div>
                <h5 className='streaming__content-heading'>
                  {item.title}
                </h5>
                <p className='straeming__content-text'>
                  {item.description}
                </p>
              </div>
            ))}

            <div className='streaming__content-btn-block'>
              <p className='streaming__content-paragraph'>
                Վստահե՞լ մեզ ձեր առողջությունը:
              </p>
              <p className='streaming__content-caption'>
                Միացեք հազարավոր գոհ հաճախորդների, ովքեր ընտրել են մեզ:
              </p>
              <a 
                href='https://degh.am' 
                className='streaming__content-btn'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Կապվել մեզ հետ - անցնել degh.am կայք'
              >
                Կապվել Մեզ Հետ
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Streaming