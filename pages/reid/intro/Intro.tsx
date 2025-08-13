import React, { useRef, useEffect, useState } from 'react';
import classNames from 'classnames';
import { useInViewport } from 'react-in-viewport';
import Image from 'next/image';
import introStyle from '../intro.module.scss';
import useClientSide from '../../../hooks/useClientSide';

// Import images (только нужные)
import medicineImg from '/assets/images/koshik_41.png';
import pharmaImg from '/assets/images/botas_4.png';
import treatmentImg from '/assets/images/botas_1.png';

const Intro: React.FC = () => {
  const isClientSide = useClientSide();
  const [isAnimated, setIsAnimated] = useState(false);
  
  // Один реф для всей секции
  const sectionRef = useRef<HTMLElement>(null);
  const { inViewport } = useInViewport(sectionRef, { threshold: 0.2 });

  useEffect(() => {
    if (inViewport && !isAnimated) {
      setIsAnimated(true);
    }
  }, [inViewport, isAnimated]);

  return (
    <section 
      ref={sectionRef}
      className={classNames(introStyle.intro, {
        [introStyle.animated]: isAnimated
      })}
    >
      <div className={introStyle.intro__container}>
        
        {/* Главный заголовок */}
        <div className={classNames(introStyle.intro__heading, introStyle.intro__animated)}>
          <span className={introStyle['intro__heading-span-1']}>
            ՆՈՐԱԳՈՒՅՆ ԴԵՂՈՐԱՅՔ
          </span>
          <span className={introStyle['intro__heading-span-2']}>
            ՄԱՏՉԵԼԻ ԳՆԵՐՈՎ
          </span>
        </div>

        {/* Основной контент */}
        <div className={classNames(introStyle.intro__content, introStyle.intro__animated)}>
          
          {/* Левая колонка - Статистика */}
          <div className={introStyle['intro__weeks-box']}>
            <div className={introStyle.intro__weeks}>
              Սերտիֆիկացված
            </div>
            <div className={introStyle['intro__weeks-text']}>
              դեղամիջոցներ
            </div>
          </div>

          {/* Центральная колонка - Кнопка */}
          <div className={introStyle['intro__button-block']}>
            <a 
              href="https://degh.am" 
              className={introStyle.intro__button}
              target="_blank"
              rel="noopener noreferrer"
            >
              ՊԱՏՎԻՐԵԼ ՀԻՄԱ
            </a>
            <div className={introStyle['intro__button-caption']}>
              ԱՆՎՃԱՐ ԽՈՐՀՐԴԱՏՎՈՒԹՅՈՒՆ
            </div>
          </div>

          {/* Правая колонка - Статистика */}
          <div className={introStyle['intro__lessons-box']}>
            <div className={introStyle.intro__lessons}>
              Միջազգային չափանիշներ
            </div>
            <div className={introStyle['intro__lessons-text']}>
              Եվրոպական որակ
            </div>
          </div>
        </div>

        {/* Описание */}
        <div className={classNames(introStyle.intro__description, introStyle.intro__animated)}>
          <h3 className={introStyle['intro__description-title']}>
            ՄԻՋԱԶԳԱՅԻՆ ՈՐԱԿ ԵՎ ԵՐԱՇԽԻՔ
          </h3>
          <p className={introStyle['intro__description-text']}>
            ԱՐԴՅՈՒՆԱՎԵՏ ԵՎ ԱՆՎՏԱՆԳ ԲՈՒԺՈՒՄ
          </p>
          <p className={introStyle['intro__description-text']}>
            ԼԱՅ ՏԵՍԱԿԱՆԻ ՀԱԿԱՔԱՂՑԿԵՂԱՅԻՆ ԴԵՂԱՄԻջՈՑՆԵՐ
          </p>
          <p className={introStyle['intro__description-text']}>
            Առողջություն և որակյալ կյանք յուրաքանչյուր հիվանդի համար
          </p>
        </div>

        {/* Дополнительные преимущества для мобильных */}
        <div className={classNames(introStyle['intro__mobile-features'], introStyle.intro__animated)}>
          <div className={introStyle['intro__feature-item']}>
            <div className={introStyle['intro__feature-title']}>
              ՀՈՒՍԱԼԻՈՒԹՅՈՒՆ
            </div>
            <div className={introStyle['intro__feature-text']}>
              ԲԱՐՁՐՈՐԱԿ ԴԵՂԱՄԻՋՈՑՆԵՐԻ ՆԵՐՄՈՒԾՈՒՄ
            </div>
          </div>
          
          <div className={introStyle['intro__feature-item']}>
            <div className={introStyle['intro__feature-title']}>
              Մասնագիտական
            </div>
            <div className={introStyle['intro__feature-text']}>
              Աջակցություն 24/7
            </div>
          </div>
        </div>

        {/* Декоративные элементы (упрощенные) */}
        {isClientSide && isAnimated && (
          <>
            <div className={classNames(
              introStyle.intro__decoration, 
              introStyle['intro__decoration--tiktok']
            )}>
              <Image
                src={medicineImg}
                alt="medicine"
                width={60}
                height={60}
                quality={75}
                priority={false}
                className={introStyle['intro__decoration-img']}
              />
            </div>

            <div className={classNames(
              introStyle.intro__decoration, 
              introStyle['intro__decoration--youtube']
            )}>
              <Image
                src={pharmaImg}
                alt="pharma"
                width={60}
                height={60}
                quality={75}
                priority={false}
                className={introStyle['intro__decoration-img']}
              />
            </div>

            <div className={classNames(
              introStyle.intro__decoration, 
              introStyle['intro__decoration--twitch']
            )}>
              <Image
                src={treatmentImg}
                alt="treatment"
                width={60}
                height={60}
                quality={75}
                priority={false}
                className={introStyle['intro__decoration-img']}
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Intro;