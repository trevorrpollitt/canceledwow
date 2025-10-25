// Footer.jsx
import React from "react";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>© {new Date().getFullYear()} Canceled — A World of Warcraft Guild</div>
      </div>
    </footer>
  );
}
