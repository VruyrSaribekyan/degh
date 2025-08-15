import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import headerStyle from '../header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import logo from '/assets/images/logo.png';

// Դեղերի ցուցակ
const medicinesData = [
  {
    id: 1,
    name: "Ավաստին",
    genericName: "Բևացիզումաբ",
    image: "/assets/images/koshik_013.png",
    price: 45000,
    inStock: true,
    hasDelivery: true,
    category: "Ուռուցքաբանություն",
    manufacturer: "Roche",
    description: "Դեղամիջոց ուռուցքային հիվանդությունների բուժման համար",
    instruction: "Ավաստինը կիրառվում է քիմիաթերապիայի հետ համատեղ մետաստատիկ կոլոռեկտալ քաղցկեղի բուժման համար..."
  },
  {
    id: 2,
    name: "Ավելոքս",
    genericName: "Մոքսիֆլոքսացին",
    image: "/assets/images/koshik_024.png",
    price: 1200,
    inStock: true,
    hasDelivery: true,
    category: "Հակաբիոտիկներ",
    manufacturer: "Bayer",
    description: "Լայն սպեկտրի հակաբակտերիալ դեղամիջոց",
    instruction: "Ավելոքսը ցուցված է շնչուղիների, մաշկի և փափուկ հյուսվածքների վարակների բուժման համար..."
  },
  {
    id: 3,
    name: "Ավամիս",
    genericName: "Ֆլուտիկազոն ֆուրոատ",
    image: "/assets/images/koshik_01.png",
    price: 850,
    inStock: true,
    hasDelivery: true,
    category: "Ալերգոլոգիա",
    manufacturer: "GSK",
    description: "Քթային սփրեյ ալերգիկ ռինիտի բուժման համար",
    instruction: "Ավամիսը կիրառվում է սեզոնային և տարեկան ալերգիկ ռինիտի ախտանիշների բուժման համար..."
  },
  {
    id: 4,
    name: "Ասպիրին",
    genericName: "Ացետիլսալիցիլաթթու",
    image: "/assets/images/koshik_04.png",
    price: 120,
    inStock: true,
    hasDelivery: true,
    category: "Անալգետիկներ",
    manufacturer: "Bayer",
    description: "Հակաբորբոքային և ջերմիջեցնող միջոց",
    instruction: "Ասպիրինը կիրառվում է ջերմաստիճանի իջեցման, ցավի և բորբոքման նվազեցման համար..."
  },
  {
    id: 5,
    name: "Ամոքսիկլավ",
    genericName: "Ամոքսիցիլին + Կլավուլանաթթու",
    image: "/assets/images/koshik_012.png",
    price: 450,
    inStock: false,
    hasDelivery: true,
    category: "Հակաբիոտիկներ",
    manufacturer: "Sandoz",
    description: "Հակաբակտերիալ համակցված դեղամիջոց",
    instruction: "Ամոքսիկլավը կիրառվում է տարբեր բակտերիալ վարակների բուժման համար..."
  }
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const searchInputRef = useRef(null);
  const router = useRouter();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const openSearch = () => {
    setIsSearchOpen(true);
    setTimeout(() => {
      searchInputRef.current?.focus();
    }, 100);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery('');
    setSearchResults([]);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim().length >= 2) {
      const filtered = medicinesData.filter(medicine =>
        medicine.name.toLowerCase().includes(query.toLowerCase()) ||
        medicine.genericName.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  };

  const handleMedicineClick = (medicineId) => {
    router.push(`/medicine/${medicineId}`);
    closeSearch();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeSearch();
    }
  };

  useEffect(() => {
    if (isSearchOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isSearchOpen]);

  return (
    <header className={classNames(headerStyle.header)}>
      <div className="header__container container">
        {!isSearchOpen ? (
          <>
            <div className="header__logo-section">
              <Link href="/" className="header__logo-link">
                <Image
                  src={logo}
                  alt="Դեղատուն - Հուսալի բժշկություն"
                  width={160}
                  height={50}
                  quality={90}
                  priority={true}
                  className="header__logo-image"
                />
              </Link>
              <div className="header__brand-text">
                <span className="header__brand-name">MedPharm</span>
                <span className="header__brand-tagline">Ձեր առողջությունը մեր առաջնահերթությունն է</span>
              </div>
            </div>

            <nav className={classNames("header__nav", { "mobile-open": isMobileMenuOpen })}>
              <Link href="/about" className="header__nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="nav-icon">ℹ️</span>
                Մեր մասին
              </Link>
              <Link href="/contacts" className="header__nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="nav-icon">📞</span>
                Կոնտակտներ
              </Link>
            </nav>

            <div className="header__actions">
              <div className="header__phone">
                <span className="phone-icon">📱</span>
                <div className="phone-info">
                  <span className="phone-number">+374 XX XXX XXX</span>
                  <span className="phone-text">Շուրջօրյա</span>
                </div>
              </div>
              
              <button className="header__search-btn" onClick={openSearch}>
                <span className="search-icon">🔍</span>
              </button>

              <button 
                className={classNames("header__mobile-menu", { "active": isMobileMenuOpen })}
                onClick={toggleMobileMenu}
              >
                <span className="burger-line"></span>
                <span className="burger-line"></span>
                <span className="burger-line"></span>
              </button>
            </div>
          </>
        ) : (
          <div className="header__search-container">
            <input
              ref={searchInputRef}
              type="text"
              className="header__search-input"
              placeholder="Մուտքագրեք դեղի անվանումը..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button className="header__search-close" onClick={closeSearch}>
              <span className="close-icon">✕</span>
            </button>
          </div>
        )}
      </div>

      {isSearchOpen && searchResults.length > 0 && (
        <div className="header__search-results">
          {searchResults.map((medicine) => (
            <div
              key={medicine.id}
              className="search-result-item"
              onClick={() => handleMedicineClick(medicine.id)}
            >
              <div className="result-info">
                <div className="result-name">{medicine.name}</div>
                <div className="result-generic">{medicine.genericName}</div>
                <div className="result-price">{medicine.price}֏</div>
                <div className={`result-status ${medicine.inStock ? 'in-stock' : 'out-of-stock'}`}>
                  {medicine.inStock ? 'Առկա է' : 'Առկա չէ'}
                </div>
              </div>
              <div className="result-image">
                <div className="medicine-placeholder">💊</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {(isMobileMenuOpen || isSearchOpen) && (
        <div 
          className="mobile-overlay" 
          onClick={() => {
            setIsMobileMenuOpen(false);
            if (isSearchOpen) closeSearch();
          }}
        />
      )}
    </header>
  );
};

export { medicinesData };
export default Header;