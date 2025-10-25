import React from "react";
import styles from "../styles/SectionTitle.module.css";

export default function SectionTitle({ eyebrow, description }) {
  return (
    <div className={styles.sectionTitle}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}
