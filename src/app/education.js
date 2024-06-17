"use client";
import styles from "./page.module.css"

export default function Education(){
    return(
        <div className={styles.educationContainer}>
            <h2>Education</h2>
            <ol>
                <li className={styles.educationItems}>
                    <h3>Madras Institute of Technology (Anna University)</h3>
                    <p>Undergraduate, 2023</p>
                    <p>Grade/ Percentage: 9.26</p>
                </li>
                <li className={styles.educationItems}>
                    <h3>Hindi Higher Secondary School (CBSE)</h3>
                    <p>High School, XII, 2019</p>
                    <p>Grade/ Percentage: 92.6%</p>
                </li>
                <li className={styles.educationItems}>
                    <h3>Holy Cross School (ICSE)</h3>
                    <p>High School, X, 2017</p>
                    <p>Grade/ Percentage: 96%</p>
                </li>
            </ol>
        </div>
    )
}