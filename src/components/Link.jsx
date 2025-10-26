import React from "react";
import styles from "../styles/Rules.module.css";
import CalloutCard from "./CalloutCard";
import SectionTitle from "./SectionTitle.jsx";
import { guildLinks } from "../shared/data/guildInfos.js";


export default function Links() {
    return (
        <section id="links" className={styles.rulesSection}>
            <div className={styles.container}>
                <SectionTitle
                    eyebrow="Guild Links"
                    description="Official links for tracking our raids and roster."
                />
                <div className={`${styles.grid} ${styles.rulesGrid}`}>
                    {guildLinks.map(link => (
                        <CalloutCard key={link.title} title={link.title} href={link.href}>
                            {link.text}
                        </CalloutCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
