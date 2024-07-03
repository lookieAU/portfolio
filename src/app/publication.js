"use client";
import styles from "./page.module.css"

export default function Publication(){
    return(
        <div className={styles.educationContainer}>
            <h2>Publications</h2>
            <ol>
                <li className={styles.educationItems}>
                    <h3>Seizure prediction using hybrid deep learning model</h3>
                    <p style={{fontStyle: "italic"}}>Journal</p>
                    <p>Suresh Babu, Plaban Datta (Jun, 2024 - Present - Preparing for submission to review)</p>
                    <br />
                    <p>My final year project along with the work of a research scholar in our department who is working on the same field is being drafted to be submitted for peer review</p>
                </li>
                <li className={styles.educationItems}>
                    <h3>Power and freshwater prediction against seasonal variation in OC-OTEC plant in Lakshadweep using DNN</h3>
                    <p style={{fontStyle: "italic"}}>IPRECON 2022, Conference, published in IEEE Xplore</p>
                    <p>Pattanaik, Biren & s, Sutha & B. Thirumurugan & Datta, Plaban & S.Sanjay & S. Surya & Vishnu, Prasanna & Jalihal, Purnima</p>
                    <br />
                    <p>1-6.10.1109/IPRECON55716.2022.10059529.</p>
                </li>
            </ol>
        </div>)
}