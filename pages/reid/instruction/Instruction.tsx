import React, { useRef } from 'react';
import classNames from 'classnames';
import { useInViewport } from 'react-in-viewport';
import Image from 'next/image';
import instructionStyle from '../instruction.module.scss';

// Import images - используем только нужные
import pillsIcon from '/assets/images/koshik_41.png.png';
import consultationIcon from '/assets/images/koshik_32.png';
import instructionIcon from '/assets/images/logo_.png';

const Instruction = () => {
  const refInstructionBox = useRef<HTMLDivElement>(null);
  const { enterCount: enterCountInstructionBox } = useInViewport(refInstructionBox);

  const instructionSteps = [
    {
      id: 1,
      image: consultationIcon,
      title: 'Консультация',
      description: 'Ընտրեք բուժական դեղամիջոցներ՝ հիմնվելով <span>ձեր անհատական բժշկական պահանջների</span> վրա'
    },
    {
      id: 2,
      image: pillsIcon,
      title: 'Подбор препаратов',
      description: 'Մեր <span>փարմացևտները</span> կօգնեն ձեզ ընտրել ամենաարդյունավետ և անվտանգ <span>դեղամիջոցները</span>'
    },
    {
      id: 3,
      image: instructionIcon,
      title: 'Инструкция',
      description: 'Պարզեք, թե ինչպես ճիշտ <span>կիրառել դեղամիջոցները</span>՝ առավելագույն արդյունավետության համար'
    },
    {
      id: 4,
      image: pillsIcon,
      title: 'Результат',
      description: 'Ստանաք ձեր <span>բուժական արդյունքը</span>՝ յուրաքանչյուր օր զգալով առողջության բարելավում և հույս'
    }
  ];

  return (
    <section className={instructionStyle.instruction}>
      <div className='instruction__container container'>
        <h2 className='instruction__title'>
          Ինչպես ընտրել դեղամիջոցներ?
        </h2>
        
        <div
          className={classNames('instruction__content-box', {
            triggered: enterCountInstructionBox > 0,
          })}
          ref={refInstructionBox}
        >
          {instructionSteps.map((step, index) => (
            <div key={step.id} className='instruction__block'>
              <div className='instruction__block-img'>
                <Image
                  src={step.image}
                  alt={step.title}
                  width={80}
                  height={80}
                  quality={75}
                  priority={false}
                />
              </div>
              <p 
                className='instruction__block-text'
                dangerouslySetInnerHTML={{ __html: step.description }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instruction;