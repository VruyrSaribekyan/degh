import React, { useRef } from 'react'
import classNames from 'classnames'
import { useInViewport } from 'react-in-viewport'
import Image from 'next/image'
import learnStyle from '../learn.module.scss'

// Import images from assets
import koshik141 from '/assets/images/koshik141.png'
import koshik01 from '/assets/images/koshik_01.png'
import koshik04 from '/assets/images/koshik_04.png'
import koshik05 from '/assets/images/koshik_05.png'
import koshik06 from '/assets/images/koshik_06.png'
import koshik08 from '/assets/images/koshik_08.png'

const Learn = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { enterCount } = useInViewport(containerRef, { threshold: 0.2 })

  return (
    <section className={learnStyle.learn}>
      <div className='learn__container container' ref={containerRef}>
        <h2 className='learn__title'>
          Մեզ հետ դուք կսովորեք:
        </h2>
        
        <div className='learn__box'>
          <div className={classNames('learn__block', { 'animate': enterCount > 0 })}>
            <div className='learn__block-img'>
              <Image
                src={koshik141}
                alt='Ընտրել դեղամիջոցներ'
                width={64}
                height={64}
                quality={85}
                priority
              />
            </div>
            <h5 className='learn__block-heading'>
              Ընտրել հուսալի հակագոյացակային դեղամիջոցներ
            </h5>
            <p className='learn__block-caption'>
              Կիմանաք, թե ինչպես ճիշտ ընտրել դեղամիջոցներ տարբեր ախտորոշումների և բուժման փուլերի համար՝ ապահովելով բարձր արդյունավետություն։
            </p>
          </div>

          <div className={classNames('learn__block', { 'animate': enterCount > 0 })}>
            <div className='learn__block-img'>
              <Image
                src={koshik01}
                alt='Պահպանել որակը'
                width={64}
                height={64}
                quality={85}
                priority
              />
            </div>
            <h5 className='learn__block-heading'>
              Պահպանել դեղամիջոցների որակը
            </h5>
            <p className='learn__block-caption'>
              Կսովորեք, ինչպես պահպանել հակագոյացակային դեղերի փարմակոլոգիական ակտիվությունը երկար ժամանակ։
            </p>
          </div>

          <div className={classNames('learn__block', { 'animate': enterCount > 0 })}>
            <div className='learn__block-img'>
              <Image
                src={koshik04}
                alt='Համատեղել արդյունավետություն'
                width={64}
                height={64}
                quality={85}
              />
            </div>
            <h5 className='learn__block-heading'>
              Համատեղել արդյունավետությունն ու անվտանգությունը
            </h5>
            <p className='learn__block-caption'>
              Կսովորեք, թե ինչպես համատեղել բուժական արդյունքն ու նվազագույն կողմնակի ազդեցությունները։
            </p>
          </div>

          <div className={classNames('learn__block', { 'animate': enterCount > 0 })}>
            <div className='learn__block-img'>
              <Image
                src={koshik05}
                alt='Անհատական ծրագիր'
                width={64}
                height={64}
                quality={85}
              />
            </div>
            <h5 className='learn__block-heading'>
              Գտնել ձեր անհատական բուժման ծրագիրը
            </h5>
            <p className='learn__block-caption'>
              Կգտնեք ձեր անհատական բուժման արձանագրությունը մեր լայն տեսականու մեջ։
            </p>
          </div>

          <div className={classNames('learn__block', { 'animate': enterCount > 0 })}>
            <div className='learn__block-img'>
              <Image
                src={koshik06}
                alt='Բուժական կուրս'
                width={64}
                height={64}
                quality={85}
              />
            </div>
            <h5 className='learn__block-heading'>
              Կազմել արդյունավետ բուժական կուրս
            </h5>
            <p className='learn__block-caption'>
              Կսովորեք, ինչպես ընտրել և համադրել դեղամիջոցները՝ ստեղծելով ամբողջական բուժման ռեժիմ։
            </p>
          </div>

          <div className={classNames('learn__block', { 'animate': enterCount > 0 })}>
            <div className='learn__block-img'>
              <Image
                src={koshik08}
                alt='Որակ և մատչելիություն'
                width={64}
                height={64}
                quality={85}
              />
            </div>
            <h5 className='learn__block-heading'>
              Հավասարակշռել բարձր որակը և մատչելիությունը
            </h5>
            <p className='learn__block-caption'>
              Կիմանաք, ինչպես գտնել դեղամիջոցներ, որոնք համատեղում են փարմացևտական որակը և մատչելի գինը։
            </p>
          </div>
        </div>

        <div className='learn__bottom'>
          <p className='learn__paragraph'>
            Հետաքրքրե՞ց:
          </p>
          <div className='learn__button-caption'>
            Գտեք ձեր անհրաժեշտ դեղամիջոցը
          </div>
          <a 
            href='https://www.instagram.com/reid_shoes_abovyan_/' 
            className='learn__button'
            target='_blank'
            rel='noopener noreferrer'
          >
            Պատվիրել հիմա
          </a>
        </div>
      </div>
    </section>
  )
}

export default Learn