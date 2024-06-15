"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import { getModifiedCookieValues } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import Education from "./education";

export default function Home() {
  const [activeTab, setActiveTab] = useState("education")

  return (
    <main>
      <div className={styles.container}>
        <div className={styles.left}>
          <Image className={styles.image} src={require("../../assets/profile.png")} />
          <div className={styles.nameContainer}>
            <p>Plaban Datta</p>
          </div>
          <div>
            <p>Electronics engineer</p>
            <p>with interests in everything tech + neuro</p>
            <p>+ football, among others</p>
          </div>
          <div className={styles.linkContainer}>
            <a className={styles.link} href="https://linkedin.com/in/lookie">LinkedIn</a>
            <a className={styles.link} href="https://github.com">Github</a>
            <a className={styles.link} href="https://instagram.com">Instagram</a>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.nav}>
            <button onClick={() => setActiveTab("education")} className={styles.navButton}>Education</button>
            <button onClick={() => setActiveTab("exp")} className={styles.navButton}>Experience</button>
            <button onClick={() => setActiveTab("past")} className={styles.navButton}>Past time</button>
            <button onClick={() => setActiveTab("volunteer")} className={styles.navButton}>Volunteering</button>
            <button onClick={() => setActiveTab("achieve")} className={styles.navButton}>Achievements</button>
            <button onClick={() => setActiveTab("travel")} className={styles.navButton}>Travel</button>
            <button onClick={() => setActiveTab("publication")} className={styles.navButton}>Publications</button>
          </div>
          <div className={styles.content}>
            {
              {
                "education": <Education />,
                "exp": <p>exp</p>
              }[activeTab]
            }
          </div>
        </div>
      </div>
    </main>
  )
}
