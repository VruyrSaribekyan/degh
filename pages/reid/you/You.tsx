import React, { useEffect, useRef, useState } from 'react';
import youStyle from '../you.module.scss';

const You = () => {
  const [isTriggered, setIsTriggered] = useState(false);
  const sectionRef = useRef(null);

  const advantages = [
    {
      text: "Միջազգային որակի դեղամիջոցներ անմիջապես արտադրողներից",
      icon: "💊"
    },
    {
      text: "Լիարժեք փաստաթղթեր և որակի երաշխիքներ",
      icon: "📋"
    },
    {
      text: "Մասնագիտական խորհրդատվություն և անհատական մոտեցում",
      icon: "👨‍⚕️"
    },
    {
      text: "Մրցունակ գներ և ճկուն վճարման պայմաններ",
      icon: "💰"
    },
    {
      text: "Արագ առաքում և հետվաճառքային սպասարկում",
      icon: "🚚"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isTriggered) {
            setIsTriggered(true);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isTriggered]);

  return (
    <section className={youStyle.you} ref={sectionRef}>
      <div className='you__container'>
        <div className='you__title-box'>
          <h2 className='you__title'>Մեզ հետ դուք կստանաք</h2>
        </div>

        <div className={`you__cards-grid ${isTriggered ? 'triggered' : ''}`}>
          {advantages.map((advantage, index) => (
            <div key={index} className='you__card'>
              <div className='you__card-icon'>
                <div className='icon-wrapper'>
                  {advantage.icon}
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
  );
};

export default You;