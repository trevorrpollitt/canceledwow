import React from "react";
import styles from "../styles/Teams.module.css";
import SectionTitle from "./SectionTitle.jsx";
import { mythTeamsData } from "../shared/data/guildInfos.js";
import { aotcTeamsData } from "../shared/data/guildInfos.js";

export default function Teams() {
  return (
    <section id="teams" className={styles.section}>
      <div className={styles.container}>
        <SectionTitle
          eyebrow="Raid Teams"
          description="Find the right fit for your playstyle and schedule."
        />    
          
        {/* Mythic Teams */ }
        <div className={styles.blockHeading}>
          <h2>Mythic</h2>
        </div>
        <div className={styles.grid}>
          {mythTeamsData.map((team) => (
          <a
            key={team.name}
            href={team.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cardLink}
          >
            <div className={styles.card} style={{ borderColor: team.accent }}>
              <h3 className={styles.teamName} style={{ color: team.accent }}>
                {team.name}
              </h3>
              <div className={styles.teamInfo}>{team.info}</div>
              <div className={styles.schedule}>{team.schedule}</div>
              <p className={styles.desc}>{team.description}</p>
              <div className={styles.contact}>Contact: {team.contact}</div>
            </div>
          </a>
          ))}
        </div>

        {/* AOTC Casual Team */ }
        <div className={styles.blockHeading}>
          <h2>AOTC - Casual</h2>
        </div>
        <div className={styles.grid}>
          {aotcTeamsData.map((team) => (
            <div className={styles.card} style={{ borderColor: team.accent }}>
              <h3 className={styles.teamName} style={{ color: team.accent }}>
                {team.name}
              </h3>
              <div className={styles.teamInfo}>{team.info}</div>
              <div className={styles.schedule}>{team.schedule}</div>
              <p className={styles.desc}>{team.description}</p>
              <div className={styles.contact}>Contact: {team.contact}</div>
            </div>          
          ))}
        </div>
      </div>
    </section>
  );
}
