import React from "react";
import styles from "../styles/Hero.module.css";
import { heroCallouts } from "../shared/data/guildInfos.js";
import CalloutCard from "./CalloutCard";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.heroGrid}>
                {/* Left column : Cards */}
                <div className={styles.leftColumn}>
                    <div className={styles.calloutsColumn}>
                        {heroCallouts.map(c => (
                            <CalloutCard
                                key={c.title}
                                icon={c.icon}
                                title={c.title}
                                className={styles.heroCalloutCard}
                            >
                                {/*raw HTML from data so safe*/}
                                <span dangerouslySetInnerHTML={{ __html: c.text }} />
                            </CalloutCard>
                        ))}
                    </div>
                </div>

                {/* Right column: Discord */}
                <div className={styles.discordWrap}>
                    <iframe
                        src="https://discord.com/widget?id=1282068816116977695&theme=dark"
                        width="400"
                        height="400"
                        style={{ border: '0' }}
                        allowTransparency
                        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                    />
                </div>
            </div>
        </section>
    );
}
