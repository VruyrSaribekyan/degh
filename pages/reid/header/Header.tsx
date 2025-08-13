import React from 'react';
import classNames from 'classnames';
import headerStyle from '../header.module.scss';
import Image from 'next/image';
import logo from '/assets/images/logo.png';

const Header = () => {
  return (
    <header className={classNames(headerStyle.header)}>
      <div className="header__container container">
        <div className="header__logo-section">
          <a href="https://degh.am" className="header__logo-link">
            <Image
              src={logo}
              alt="Аптека - Надежная медицина"
              width={160}
              height={50}
              quality={90}
              priority={true}
              className="header__logo-image"
            />
          </a>
          <div className="header__brand-text">
            <span className="header__brand-name">MedPharm</span>
            <span className="header__brand-tagline">Ваше здоровье - наш приоритет</span>
          </div>
        </div>

        <nav className="header__nav">
          <a href="/catalog" className="header__nav-link">
            <span className="nav-icon">🏥</span>
            Каталог
          </a>
          <a href="/about" className="header__nav-link">
            <span className="nav-icon">ℹ️</span>
            О нас
          </a>
          <a href="/delivery" className="header__nav-link">
            <span className="nav-icon">🚚</span>
            Доставка
          </a>
          <a href="/contacts" className="header__nav-link">
            <span className="nav-icon">📞</span>
            Контакты
          </a>
        </nav>

        <div className="header__actions">
          <div className="header__phone">
            <span className="phone-icon">📱</span>
            <div className="phone-info">
              <span className="phone-number">+374 XX XXX XXX</span>
              <span className="phone-text">Круглосуточно</span>
            </div>
          </div>
          
          <button className="header__search-btn">
            <span className="search-icon">🔍</span>
          </button>
          
          <button className="header__cart-btn">
            <span className="cart-icon">🛒</span>
            <span className="cart-count">0</span>
          </button>
        </div>

        {/* Мобильное меню */}
        <button className="header__mobile-menu">
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;