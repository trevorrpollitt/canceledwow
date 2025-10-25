import React from "react";
import styles from "../styles/Rules.module.css";
import CalloutCard from "./CalloutCard";
import SectionTitle from "./SectionTitle.jsx";


export default function Rules() {
  return (
    <section id="rules" className={styles.rulesSection}>
      <div className={styles.container}>
        <SectionTitle
          eyebrow="Code of Conduct"
          description="Short, clear expectations that keep our community safe and fun."
        />
        <div className={`${styles.grid} ${styles.rulesGrid}`}>
          <CalloutCard icon="🛡" title="Respect & Courtesy" className={styles.rulesCard}>
            Harassment, discrimination, or toxic behavior is an instant exit.
          </CalloutCard>
          <CalloutCard icon="✨" title="Positive Atmosphere" className={styles.rulesCard}>
            Supportive, engaging environment. No dehumanizing language.
          </CalloutCard>
          <CalloutCard icon="💬" title="Communication" className={styles.rulesCard}>
            Clarity and teamwork in raids, Mythic+, and chats. Keep conflicts out of public channels.
          </CalloutCard>
          <CalloutCard icon="🏦" title="Guild Bank Integrity" className={styles.rulesCard}>
            Take what you need, follow policies, report issues to leadership.
          </CalloutCard>
          <CalloutCard icon="🤝" title="Brotherhood in Battle" className={styles.rulesCard}>
            Assist guildmates—no warrior left behind.
          </CalloutCard>
          <CalloutCard icon="📜" title="Leadership Decisions" className={styles.rulesCard}>
            Leadership acts in the guild’s best interest. Bring constructive feedback.
          </CalloutCard>
          <CalloutCard icon="❤️" title="Human Resources" className={styles.rulesCard}>
            DM @Human Resources for mediation, support, or dispute resolution.
          </CalloutCard>
        </div>
      </div>
    </section>
  );
}
