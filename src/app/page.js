"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import { getModifiedCookieValues } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import Education from "./education";
import Experience from "./experience";
import Past from "./pasttime";
import Achievement from "./achievement";
import Travel from "./travel";
import Publication from "./publication";

export default function Home() {
  const [activeTab, setActiveTab] = useState("exp")

  return (
    <main>
      <div className={styles.container}>
        <div className={styles.left}>
          <Image className={styles.image} src={require("../../assets/profile.png")} />
          <div className={styles.nameContainer}>
            <p style={{fontWeight: "bold"}}>Plaban Datta</p>
          </div>
          <div>
            <p style={{fontStyle: "italic"}}>Electronics engineer</p>
            <br />
            <p>with interests in everything tech + neuro</p>
            <p>+ football</p>
            <br />
          </div>
          <div className={styles.linkContainer}>
            <a className={styles.link} href="https://linkedin.com/in/lookie">LinkedIn</a>
            <a className={styles.link} href="https://github.com/lookieAU">Github</a>
            <a className={styles.link} href="https://www.instagram.com/hspark_9/">Instagram</a>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.nav}>
            <button onClick={() => setActiveTab("exp")} className={styles.navButton}>Experience & Projects</button>
            <button onClick={() => setActiveTab("education")} className={styles.navButton}>Education</button>
            <button onClick={() => setActiveTab("past")} className={styles.navButton}>Past time & Volunteering</button>
            <button onClick={() => setActiveTab("achieve")} className={styles.navButton}>Achievements</button>
            <button onClick={() => setActiveTab("travel")} className={styles.navButton}>Travel</button>
            <button onClick={() => setActiveTab("publication")} className={styles.navButton}>Publications</button>
          </div>
          <div className={styles.content}>
            {
              {
                "education": <Education />,
                "exp": <Experience />,
                "past": <Past />,
                "achieve": <Achievement />,
                "travel": <Travel />,
                "publication": <Publication />
              }[activeTab]
            }
          </div>
        </div>
      </div>
    </main>
  )
}
