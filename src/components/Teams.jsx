import React from "react";
import styles from "../styles/Teams.module.css";
import SectionTitle from "./SectionTitle.jsx";

const mythTeamsData = [
  {
    name: "Redacted",
    accent: "#be5e5eff",
    info: "Semi‑Hardcore Mythic | Midcore CE-focused",
    schedule: "Wed/Thu 8:30–11:30 PM EST",
    description: "High‑performance team focused on Cutting Edge.",
    contact: "@chexty0, @wynndecks",
    link: "https://www.warcraftlogs.com/guild/id/787359",
  },
  {
    name: "Expunged",
    accent: "#4ed3ba",
    info: "Semi‑Hardcore Mythic | Midcore CE-focused",
    schedule: "Fri/Sat 8:15–11:15 PM EST",
    description: "Balances competitive raiding with fun in a supportive, consistent environment.",
    contact: "@filthyfew",
    link: "https://www.warcraftlogs.com/guild/id/787360",
  },
  {
    name: "Omitted",
    accent: "#ad80e7",
    info: "Midcore Mythic | Not CE‑focused",
    schedule: "Sat/Sun 6:00–9:00 PM EST",
    description: "Weekend raiders who push limits while fostering teamwork—organized and welcoming.",
    contact: "@freyja3313",
    link: "https://www.warcraftlogs.com/guild/id/787361",
  },
];

const aotcTeamsData = [
  {
    name: "Nullified",
    accent: "#6fad70ff",
    info: "AOTC+ | 30‑somethings with style",
    schedule: "Tues/Wed 7:30–10:30 PM EST",
    description: "Bossing with fun, accountability, and growth. Casual Mythic possible.",
    contact: "@couchee",
    link: "#", // update with link if available
  },
  {
    name: "Rephreshed",
    accent: "#d8975aff",
    info: "Casual AOTC | Relaxed vibes",
    schedule: "Wed/Thu 9:30–11:30 PM EST",
    description: "Enjoyable raid experience with no pressure—just clean fun.",
    contact: "@zestyphresh",
    link: "#",
  },
  {
    name: "Censored",
    accent: "#beac6bff",
    info: "Casual AOTC | Super‑casual, non‑rostered",
    schedule: "Mon 9:00–10:30 PM EST",
    description: "Zero‑pressure environment with fun and learning as the priority.",
    contact: "@plethorah, @shadq",
    link: "#",
  },
];


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
          <div className={styles.headingRule} />
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
          <div className={styles.headingRule} />
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
