import React from "react";
import styles from "../styles/CalloutCard.module.css";

export default function CalloutCard({ icon, title, children, className, href }) {
  const content = (
    <div className={`${styles.calloutCard} ${className || ""}`}>
      <div className={styles.row}>
        <div className={styles.iconWrap}>{icon}</div>
        <div className={styles.text}>
          <div className={styles.title}>{title}</div>
          <div className={styles.body}>{children}</div>
        </div>
                {href && <div className={styles.arrow}>↗</div>}
      </div>
    </div>
  );

return href ? (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={styles.cardLinkWrapper}
  >
    {content}
  </a>
) : (
  content
);

}
