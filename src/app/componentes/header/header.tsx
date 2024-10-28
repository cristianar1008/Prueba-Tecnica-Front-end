// src/components/Header.tsx
import React from 'react';
import styles from './header.module.css';
import logo from '../../assets/Logo.png';
import user from '../../assets/Frame.png';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
    <div className={styles.completo}>
    <div className={styles.izquierdo}>
    <div className={styles.logo}>
        {}
        <img src={logo.src} alt="Logo" />
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>Popular</li>
          <li>Favorites</li>
        </ul>
      </nav>
    </div>
    <div className={styles.derecho}>
    <div className={styles.userIcon}>
        {}
        <img src={user.src} alt="User" />
      </div>
    </div>
      </div>
    </header>
  );
};

export default Header;
