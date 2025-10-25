import React from "react";
import styles from "../styles/Hero.module.css";
import CalloutCard from "./CalloutCard";

export default function Hero() {
  return (
    <section className={styles.hero}>
        <div className={styles.heroGrid}>
            {/* Left column : Cards */}
            <div className={styles.leftColumn}>
                <div className={styles.calloutsColumn}>
                    <CalloutCard icon="⚔️" title="Raiding Teams" className={styles.heroCalloutCard}>
                    From <span className={styles.emphasis}>Casual</span> to  
                        <span className={styles.emphasis}> Cutting Edge</span>
                        , there's a raiding team for you.
                    </CalloutCard>
                    <CalloutCard icon="🔑" title="Mythic+ & PvP" className={styles.heroCalloutCard}>
                        Active <span className={styles.emphasis}>Mythic+ </span> 
                        and <span className={styles.emphasis}>Arenas</span> scene, with available coaching from experienced players.
                    </CalloutCard>
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
