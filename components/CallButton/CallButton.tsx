// CallButton.tsx
import React from 'react';
import styles from './CallButton.module.scss';

const CallButton: React.FC = () => {
  return (
    <a
      href="tel:+37433770393"
      className={styles.callButton}
      aria-label="Позвонить сейчас"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.81.37 1.6.73 2.33a2 2 0 0 1-.45 2.18l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.18-.45c.73.36 1.52.61 2.33.73A2 2 0 0 1 22 16.92z" />
      </svg>
    </a>
  );
};

export default CallButton;