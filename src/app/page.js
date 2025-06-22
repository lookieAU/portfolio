"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import Education from "./education";
import Experience from "./experience";
import Past from "./pasttime";
import Achievement from "./achievement";
import Travel from "./travel";
import Publication from "./publication";

export default function Home() {
  const [activeTab, setActiveTab] = useState("exp")

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.profileSection}>
            <div className={styles.imageContainer}>
              <Image 
                className={styles.image} 
                src={require("../../assets/profile.png")} 
                alt="Plaban Datta"
                priority
              />
            </div>
            <div className={styles.nameContainer}>
              <h1 className={styles.name}>Plaban Datta</h1>
              <p className={styles.title}>Software Developer</p>
              <p className={styles.subtitle}>Full-Stack • Healthcare Tech • AI/ML</p>
            </div>
            
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📧</span>
                <span>plabandatta2015@gmail.com</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📱</span>
                <span>+91-8787589776</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <span>Aizawl, India</span>
              </div>
            </div>

            <div className={styles.summary}>
              <p>Highly skilled Software Developer with extensive experience in full-stack development using Next.js, Flutter, Python, Node.js, and MongoDB. Experienced in developing healthcare technology solutions, ERP systems, and predictive modeling applications.</p>
            </div>
            
            <div className={styles.linkContainer}>
              <a className={styles.link} href="https://linkedin.com/in/lookie" target="_blank" rel="noopener noreferrer">
                <span className={styles.linkIcon}>💼</span>
                LinkedIn
              </a>
              <a className={styles.link} href="https://github.com/lookieAU" target="_blank" rel="noopener noreferrer">
                <span className={styles.linkIcon}>💻</span>
                GitHub
              </a>
              <a className={styles.link} href="https://www.instagram.com/hspark_9/" target="_blank" rel="noopener noreferrer">
                <span className={styles.linkIcon}>📸</span>
                Instagram
              </a>
            </div>

            <div className={styles.skillsPreview}>
              <h3>Core Technologies</h3>
              <div className={styles.skillTags}>
                <span className={styles.skillTag}>Next.js</span>
                <span className={styles.skillTag}>Flutter</span>
                <span className={styles.skillTag}>Python</span>
                <span className={styles.skillTag}>Node.js</span>
                <span className={styles.skillTag}>MongoDB</span>
                <span className={styles.skillTag}>React</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.right}>
          <div className={styles.nav}>
            <button 
              onClick={() => setActiveTab("exp")} 
              className={`${styles.navButton} ${activeTab === "exp" ? styles.active : ""}`}
            >
              <span className={styles.navIcon}>💼</span>
              Experience & Projects
            </button>
            <button 
              onClick={() => setActiveTab("education")} 
              className={`${styles.navButton} ${activeTab === "education" ? styles.active : ""}`}
            >
              <span className={styles.navIcon}>🎓</span>
              Education
            </button>
            <button 
              onClick={() => setActiveTab("achieve")} 
              className={`${styles.navButton} ${activeTab === "achieve" ? styles.active : ""}`}
            >
              <span className={styles.navIcon}>🏆</span>
              Achievements
            </button>
            <button 
              onClick={() => setActiveTab("publication")} 
              className={`${styles.navButton} ${activeTab === "publication" ? styles.active : ""}`}
            >
              <span className={styles.navIcon}>📚</span>
              Publications
            </button>
            <button 
              onClick={() => setActiveTab("past")} 
              className={`${styles.navButton} ${activeTab === "past" ? styles.active : ""}`}
            >
              <span className={styles.navIcon}>🤝</span>
              Volunteering
            </button>
            <button 
              onClick={() => setActiveTab("travel")} 
              className={`${styles.navButton} ${activeTab === "travel" ? styles.active : ""}`}
            >
              <span className={styles.navIcon}>✈️</span>
              Travel
            </button>
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
