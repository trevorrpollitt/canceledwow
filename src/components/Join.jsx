import React from "react";
import styles from "../styles/Join.module.css";
import CalloutCard from "./CalloutCard";
import SectionTitle from "./SectionTitle";

const joinInfo = {
    title: "Ready to join Canceled?",
    description: "Join the discord to get started with the onboarding process.",
    steps: [
        "Choose your roles and specifications through onboarding.",
        "Set your server name to your in‑game name.",
        "Read #canceled and introduce yourself in #general-chat if you want.",
        "Apply to raid using our ticketing system in #raid-application."
    ],
    descriptionNext: "You can also create a ticket directly using the apply button below.",
    discordLink: "https://discord.gg/canceledwow",
    applyLink: "https://discord.gg/G73c5Txm"
};


export default function Join() {
    return (
        <section id="join" className={styles.joinSection}>
            <div className={styles.container}>
                {/* Left: CTA card */}
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
