import React, { useRef } from 'react';
import classNames from 'classnames';
import { useInViewport } from 'react-in-viewport';
import Image from 'next/image';
import instructionStyle from '../instruction.module.scss';

// Import unused images from assets
import koshik32 from '/assets/images/koshik_32.png';
import koshik41png from '/assets/images/koshik_41.png.png';
import logo from '/assets/images/logo_.png';

const Instruction = () => {
  const refInstructionBox = useRef<HTMLDivElement>(null);
  const { enterCount: enterCountInstructionBox } = useInViewport(refInstructionBox);

  return (
    <section className={instructionStyle.instruction}>
      <div className='instruction__container container'>
        <div className='instruction__title'>
          Ինչպես ընտրել հակագոյացակային դեղամիջոցներ?
          <div className='instruction__title-img'>
            <Image
              src={koshik32}
              alt='line'
              width={630}
              height={132}
              quality={75}
              priority={false}
            />
          </div>
          <div className='instruction__title-img-2'>
            <Image
              src={logo}
              alt='line'
              width={630}
              height={132}
              quality={75}
              priority={false}
            />
          </div>
        </div>
        <div
          className={classNames('instruction__content-box', {
            triggered: enterCountInstructionBox > 0,
          })}
          ref={refInstructionBox}
        >
          <div className='instruction__block'>
            <div className='instruction__block-img'>
              <Image
                src={koshik41png}
                alt='background'
                width={221}
                height={158}
                quality={75}
                priority={false}
              />
            </div>
            <p className='instruction__block-text'>
              Ընտրեք բուժական դեղամիջոցներ՝ հիմնվելով <span>ձեր անհատական բժշկական պահանջների</span> վրա
            </p>
          </div>

          <div className='instruction__block'>
            <div className='instruction__block-img'>
              <Image
                src={koshik32}
                alt='background'
                width={221}
                height={158}
                quality={75}
                priority={false}
              />
            </div>
            <p className='instruction__block-text'>
              Մեր <span>փարմացևտները</span> կօգնեն ձեզ ընտրել ամենաարդյունավետ և անվտանգ <span>դեղամիջոցները</span>
            </p>
          </div>

          <div className='instruction__block'>
            <div className='instruction__block-img'>
              <Image
                src={logo}
                alt='background'
                width={221}
                height={158}
                quality={75}
                priority={false}
              />
            </div>
            <p className='instruction__block-text'>
              Պարզեք, թե ինչպես ճիշտ <span>կիրառել դեղամիջոցները</span>՝ առավելագույն արդյունավետության համար
            </p>
          </div>

          <div className='instruction__block'>
            <div className='instruction__block-img'>
              <Image
                src={koshik41png}
                alt='background'
                width={221}
                height={158}
                quality={75}
                priority={false}
              />
            </div>
            <p className='instruction__block-text'>
              Ստանաք ձեր <span>բուժական արդյունքը</span>՝ յուրաքանչյուր օր զգալով առողջության բարելավում և հույս
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Instruction