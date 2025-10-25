import React from "react";
import styles from "../styles/Rules.module.css";
import CalloutCard from "./CalloutCard";
import SectionTitle from "./SectionTitle.jsx";


export default function Links() {
    return (
        <section id="links" className={styles.rulesSection}>
            <div className={styles.container}>
                <SectionTitle
                    eyebrow="Guild Links"
                    description="Official links for tracking our raids and roster."
                />

                <div className={`${styles.grid} ${styles.rulesGrid}`}>
                    <CalloutCard
                        title="Raider.io"
                        href="https://raider.io/guilds/us/area-52/Canceled"
                    >
                        Guild profile
                    </CalloutCard>

                    <CalloutCard
                        title="Warcraft Logs"
                        href="https://www.warcraftlogs.com/guild/id/758228"
                    >
                        Progress & parses
                    </CalloutCard>

                    <CalloutCard
                        title="Guilds of WoW"
                        href="https://guildsofwow.com/canceled"
                    >
                        Roster & widgets
                    </CalloutCard>
                </div>

            </div>
        </section>
    );
}
