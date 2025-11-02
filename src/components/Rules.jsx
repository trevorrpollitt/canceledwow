import React from "react";
import styles from "../styles/Rules.module.css";
import CalloutCard from "./CalloutCard";
import SectionTitle from "./SectionTitle.jsx";
import { guildRules } from "../shared/data/guildInfos.js";

export default function Rules() {
  return (
    <section id="rules" className={styles.rulesSection}>
      <div className={styles.container}>
        <SectionTitle
          eyebrow="Code of Conduct"
          description="Short, clear expectations that keep our community safe and fun."
        />
        <div className={styles.grid}>
          {guildRules.map(rule => (
            <CalloutCard
              key={rule.title}
              icon={rule.icon}
              title={rule.title}
              className={styles.rulesCard}
            >
              {rule.text}
            </CalloutCard>
          ))}
        </div>
      </div>
    </section>
  );
}
