import React, { useState } from 'react';
import classNames from 'classnames';
import headerStyle from '../header.module.scss';
import Image from 'next/image';
import logo from '/assets/images/logo.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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

        <nav className={classNames("header__nav", { "mobile-open": isMobileMenuOpen })}>
          <a href="/catalog" className="header__nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="nav-icon">🏥</span>
            Каталог
          </a>
          <a href="/about" className="header__nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="nav-icon">ℹ️</span>
            О нас
          </a>
          <a href="/delivery" className="header__nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="nav-icon">🚚</span>
            Доставка
          </a>
          <a href="/contacts" className="header__nav-link" onClick={() => setIsMobileMenuOpen(false)}>
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
        </div>

        {/* Мобильное меню */}
        <button 
          className={classNames("header__mobile-menu", { "active": isMobileMenuOpen })}
          onClick={toggleMobileMenu}
        >
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </button>
      </div>

      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-overlay" 
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;