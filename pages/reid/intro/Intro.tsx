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
              href="tel:+37433770393"
              className={introStyle.intro__button}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ marginRight: '8px' }}
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.81.37 1.6.73 2.33a2 2 0 0 1-.45 2.18l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.18-.45c.73.36 1.52.61 2.33.73A2 2 0 0 1 22 16.92z" />
              </svg>
              ԶԱՆԳԱՀԱՐԵԼ ՀԻՄԱ
            </a>
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
            ՀԱԿԱՔԱՂՑԿԵՂԱՅԻՆ ԴԵՂԱՄԻՋՈՑՆԵՐԻ ԼԱՅ ՏԵՍԱԿԱՆԻ
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