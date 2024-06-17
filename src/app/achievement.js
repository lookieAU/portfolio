"use client";
import styles from "./page.module.css"

export default function Achievement(){
    return(
        <div className={styles.educationContainer}>
            <h2>Achievements</h2>
            <ol>
                <li className={styles.educationItems}>
                    <h3>Smart India Hackathon - 2022 - Winner</h3>
                    <p>Annual tech hackathon on various problem statements conducted by MoE, Govt of India</p>
                    <br />
                    <p>Using our experience while working on the OTEC project, we leveraged the same to bring out a solution in the renewable energy criteria assessed by a three level evaluation followed by an in-person final round where we emerged as the winners for our developed mobile app</p>
                </li>
                <li className={styles.educationItems}>
                    <h3>e-Yantra Robotics competition - 2021 - 2nd round</h3>
                    <p>Annual robotics competition hosted by e-Yantra, IIT Bombay</p>
                    <br />
                    <p>Implemented the solution for the berry-picking bot which plucks berries from the tree using image processing to differentiate between different types. Our picking algorithm passed the first round but we could not clear the second one which involved designing the prototype body using CAD</p>
                </li>
                <li className={styles.educationItems}>
                    <h3>State topper - 2017 (ICSE)</h3>
                    <p>Grade X, Holy Cross School</p>
                </li>
                <li className={styles.educationItems}>
                    <h3>ARKA Scholarship awardee - 2017 & 2018</h3>
                    <p>State scholarship for meritorious students - Grade IX & X</p>
                </li>
            </ol>
        </div>)
}