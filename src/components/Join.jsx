import React from "react";
import styles from "../styles/Join.module.css";
import CalloutCard from "./CalloutCard";
import SectionTitle from "./SectionTitle";
import { joinInfo } from "../shared/data/guildInfos.js";

export default function Join() {
    return (
        <section id="join" className={styles.joinSection}>
            <div className={styles.container}>
                <CalloutCard className={styles.joinCard}>
                    <h3 className={styles.joinTitle}>{joinInfo.title}</h3>
                    <p className={styles.joinDesc}>{joinInfo.description}</p>
                    <ul className={styles.joinSteps}>
                        {joinInfo.steps.map((step, index) => (
                            <li key={index}>{step}</li>
                        ))}
                    </ul>
                    <p className={styles.joinDesc}>{joinInfo.descriptionNext}</p>
                    <div className={styles.joinButtons}>
                        <a href={joinInfo.discordLink} className={styles.btnRed} target="_blank" rel="noopener noreferrer">
                            Join Discord
                        </a>
                        <a href={joinInfo.applyLink} className={styles.btnOutline} target="_blank" rel="noopener noreferrer">
                            Apply Now
                        </a>
                    </div>
                </CalloutCard>
            </div>
        </section>
    );
}
