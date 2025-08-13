import React, { useRef } from 'react';
import classNames from 'classnames';
import { useInViewport } from 'react-in-viewport';
import Image from 'next/image';
import useClientSide from '../../../hooks/useClientSide';
import introStyle from '../intro.module.scss';

// Import images
import koshik41 from '/assets/images/koshik_41.png';
import botas4 from '/assets/images/botas_4.png';
import botas1 from '/assets/images/botas_1.png';
import botas2 from '/assets/images/botas_2.png';
import botas3 from '/assets/images/botas_3.png';
import koshik5 from '/assets/images/koshik5.png';
import koshik012 from '/assets/images/koshik_012.png';

const Intro = () => {
  const isClientSide = useClientSide();
  const refCaptionBox = useRef<HTMLDivElement>(null);
  const refTiktok = useRef<HTMLDivElement>(null);
  const refTwich = useRef<HTMLDivElement>(null);
  const refYoutube = useRef<HTMLDivElement>(null);
  const refButtonBox = useRef<HTMLDivElement>(null);
  const refGiftBox = useRef<HTMLDivElement>(null);
  const { enterCount: enterCountCaptionBox } = useInViewport(refCaptionBox);
  const { enterCount: enterCountTiktok } = useInViewport(refTiktok);
  const { enterCount: enterCountTwich } = useInViewport(refTwich, { threshold: [0.1] });
  const { enterCount: enterCountYoutube } = useInViewport(refYoutube);
  const { enterCount: enterCountButtonBox } = useInViewport(refButtonBox);
  const { enterCount: enterCountGiftBox } = useInViewport(refGiftBox);

  return (
    <section className={introStyle.intro}>
      <div className="intro__container container">
        <h2 className="intro__heading">
          ՆՈՐԱԳՈՒՅՆ
          <span className="intro__heading-span-1">ԴԵՂՈՐԱՅՔ</span>
          <span className="intro__heading-span-2">
            ՄԱՏՉԵԼԻ &nbsp;&nbsp; ԳՆԵՐՈՎ
          </span>
          {isClientSide && (
            <div
              className={classNames('intro__bg-tiktok', {
                triggered: enterCountTiktok > 0,
              })}
              ref={refTiktok}
            >
              <Image
                src={koshik41}
                alt="medicine"
                width={150}
                height={150}
                quality={75}
                priority={false}
              />
            </div>
          )}
          {isClientSide && (
            <div
              className={classNames('intro__bg-twich', {
                triggered: enterCountTwich > 0,
              })}
              ref={refTwich}
            >
              <Image
                src={botas4}
                alt="pharma"
                width={150}
                height={150}
                quality={75}
                priority={false}
              />
            </div>
          )}
          {isClientSide && (
            <div
              className={classNames('intro__bg-youtube', {
                triggered: enterCountYoutube > 0,
              })}
              ref={refYoutube}
            >
              <Image
                src={botas1}
                alt="treatment"
                width={150}
                height={150}
                quality={75}
                priority={false}
              />
            </div>
          )}
        </h2>

        {isClientSide && (
          <div
            className={classNames('intro__caption-box', {
              triggered: enterCountCaptionBox > 0,
            })}
            ref={refCaptionBox}
          >
            <span className="intro__caption-text">
              ՄԻՋԱԶԳԱՅԻՆ ՈՐԱԿ <br /> ԵՎ ԵՐԱՇԽԻՔ
            </span>

            <span className="intro__caption-title">
              ԱՐԴՅՈՒՆԱՎԵՏ ԵՎ
              <span className="intro__caption-paragraph-small">
                ԱՆՎՏԱՆԳ ԲՈՒԺՈՒՄ
              </span>
            </span>

            <span className="intro__caption-text">
              ԼԱՅ ՏԵՍԱԿԱՆԻ <br />
              <span className="intro__caption-paragraph">
                ՀԱԿԱՔԱՂՑԿԵՂԱՅԻՆ ԴԵՂԱՄԻջՈՑՆԵՐ
              </span>
            </span>

            <div className="intro__bg-monitor">
              <Image
                src={botas2}
                alt="medical"
                width={350}
                height={350}
                quality={75}
                priority={false}
              />
            </div>
          </div>
        )}

        <div className="intro__caption-box_mob">
          {isClientSide && (
            <div
              className={classNames('intro__caption-text_wrapper', {
                triggered: enterCountGiftBox > 0,
              })}
              ref={refGiftBox}
            >
              <div className="intro__caption-text_mob">
                ՀՈՒՍԱԼԻՈՒԹՅՈՒՆ
                <span>
                  ԲԱՐՁՐՈՐԱԿ ԴԵՂԱՄԻՋՈՑՆԵՐԻ ՆԵՐՄՈՒԾՈՒՄ
                </span>
              </div>
            </div>
          )}
          <div className="intro-caption-text2_mob">
            Առողջություն և որակյալ կյանք յուրաքանչյուր հիվանդի համար
          </div>

          <div className="intro__button-block">
            <a href="https://degh.am" className="intro__button">
              ՊԱՏՎԻՐԵԼ ՀԻՄԱ
            </a>
            <p className="intro__button-caption">
              ԱՆՎՃԱՐ ԽՈՐՀՐԴԱՏՎՈՒԹՅՈՒՆ
            </p>
          </div>

          <div className="intro__span-wrapper">
            <div className="intro__weeks-box">
              <span className="intro__weeks">
                Սերտիֆիկացված
              </span>
              <p className="intro__weeks-text">դեղամիջոցներ</p>
            </div>

            <div className="intro__lessons-box">
              <span className="intro__lessons">Միջազգային չափանիշներ</span>
              <p className="intro__lessons-text">Եվրոպական որակ</p>
            </div>

            <div className="intro__lessons-box">
              <span className="intro__lessons">
                Մասնագիտական
              </span>
              <p className="intro__lessons-text">
                Աջակցություն 24/7
              </p>
            </div>
          </div>
        </div>
        {isClientSide && (
          <div
            className={classNames('intro__button-box', {
              triggered: enterCountButtonBox > 0,
            })}
            ref={refButtonBox}
          >
            <div className="intro__weeks-box">
              <span className="intro__weeks">
                միջազգային չափանիշներ
              </span>
              <p className="intro__weeks-text">Եվրոպական որակ</p>
            </div>
            <div className="intro__button-block">
              <a href="https://degh.am" className="intro__button">
                ՊԱՏՎԻՐԵԼ ՀԻՄԱ
              </a>
              <p className="intro__button-caption">
                ԱՆՎՃԱՐ ԽՈՐՀՐԴԱՏՎՈՒԹՅՈՒՆ
              </p>
            </div>
            <div className="intro__lessons-box">
              <span className="intro__lessons">
                մասնագիտական
              </span>
              <p className="intro__lessons-text">
                աջակցություն 24/7
              </p>
            </div>
          </div>
        )}
        <div className="intro__projector-right-top">
          <Image
            src={botas3}
            alt="pharmacy"
            width={800}
            height={400}
            quality={75}
            priority={false}
          />
        </div>

        <div className="intro__lamp">
          <Image
            src={koshik5}
            alt="medical supplies"
            width={550}
            height={600}
            quality={75}
            priority={false}
          />
        </div>

        <div className="intro__projector-right-mob">
          <Image
            src={koshik012}
            alt="treatment"
            width={350}
            height={350}
            quality={75}
            priority={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;