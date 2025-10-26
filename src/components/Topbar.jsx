import React from 'react';
import styles from '../styles/Topbar.module.css';

export default function Topbar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.container}>
        <a
          href="/"
          className={styles.brandLink}
          onClick={(e) => {
            e.preventDefault(); // prevent reload
            window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top
            window.history.pushState({}, "", "/"); // update URL 
          }}
        >
          <span className={styles.brand}>CANCELED</span>
          <span className={styles.subtext}>World of Warcraft Guild</span>
        </a>
        <div className={styles.menu}>
          <a href="#teams">Teams</a>
          <a href="#rules">Rules</a>
          <a href="#links">Links</a>
          <a href="#join">Join</a>
        </div>
        <a
          className={styles.btnRed}
          href="https://discord.gg/canceledwow"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join Discord
        </a>
      </div>
    </div>
  );
}


