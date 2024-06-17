"use client";
import styles from "./page.module.css"

export default function Past(){
    return(
        <div className={styles.educationContainer}>
            <div>
                <h3>Currently watching: My Sweet mobster</h3>
                <br />
                <p>When not working, you can find me daydreaming about my life in a new country which I would want to travel to this year</p>
                <br />
                <p>I love to binge watch kdramas (romance is so my genre) and football - Chelsea to the moon and back!</p>
            </div>
            <br />
            <h2>Volunteering</h2>
            <ol>
                <li className={styles.educationItems}>
                    <h3>Lions Club - Delhi</h3>
                    <p>Active Blood donor (2024 - Present)</p>
                </li>
                <li className={styles.educationItems}>
                    <h3>International Society of Automation (ISA) - Chennai</h3>
                    <p>Young Professional/ Student Volunteer (2021 - 2023)</p>
                    <br />
                    <p>Served as President and Secretary respectively for two consecuetive terms</p>
                </li>
                <li className={styles.educationItems}>
                    <h3>Youth Red Cross - Chennai</h3>
                    <p>Blood donor and Social service (2019 - 2023)</p>
                </li>
                <li className={styles.educationItems}>
                    <h3>Womenite - Delhi</h3>
                    <p>Changemaker (COVID Pandemic period)</p>
                </li>
                <li className={styles.educationItems}>
                    <h3>Youth for Good governance - Delhi</h3>
                    <p>Social service (COVID Pandemic period)</p>
                </li>
            </ol>
        </div>
    )
}