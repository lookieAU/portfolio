"use client";
import styles from "./page.module.css"

export default function Experience(){
    return(
        <div className={styles.educationContainer}>
            <h3 style={{fontStyle:"italic", fontWeight: 400}}>Well versed in Python, SQL, Javascript, HTML/CSS and stacks/SW such as Firebase Auth/CDN/Store/Functions/Realtime, React Native, ReactJS, EEGLab, NodeJS, Flask, Predictive modelling</h3>
            <br />
            <h2>Experience</h2>
            <ol>
                <li className={styles.educationItems}>
                    <h3>Research Associate (Funded, 2 years)</h3>
                    <p>National Institute of Technology, Mizoram (May, 2024 - Present)</p>
                    <br />
                    <p>Public Health Service project funded by TIH-IIT Bhilai</p>
                </li>
                <li className={styles.educationItems}>
                    <h3>Software Engineer Intern</h3>
                    <p>Hewlett-Packard Enterprise (Feb, 2023 - May, 2023)</p>
                    <br />
                    <p>Network Virtualization and automation testing of NVD using Selenium/ Python</p>
                </li>
                <li className={styles.educationItems}>
                    <h3>Research Intern</h3>
                    <p>National Institute of Ocean Technology (Feb, 2022 - Apr, 2022 & Jul, 2022 - Aug - 2022)</p>
                    <br />
                    <p>Power/ Freshwater prediction using DNN</p>
                </li>
            </ol>
            <h2>Projects</h2>
            <ol>
                <li className={styles.educationItems}>
                    <h3>Public Health Service</h3>
                    <p>National Institute of Technology, Mizoram (May, 2024 - Present)</p>
                    <br />
                    <p>PI: Dr. Lalhruaizela Changgte</p>
                    <p>Team members: Joseph Vanlalpeka</p>
                    <br />
                    <p>Development of a tele-health app which caters to the local population of Mizoram and make healthcare remotely accessible anywhere. Further, NLP will be integrated to make decisions based on severity and other factors</p>
                </li>
                <li className={styles.educationItems}>
                    <h3>Online classification of EEG signals using deep learning</h3>
                    <p>Anna University (July, 2022 - May, 2023)</p>
                    <br />
                    <p>PI: Dr. Sabitha Ramakrishnan</p>
                    <p>Team members: Kishore Kumar S</p>
                    <br />
                    <p>Classification of EEG signals using a hybrid approach (LSTM/CNN) to automate the process of annotation for healthcare professionals. Also, we tried to predict the seizure activity based on continually occuring preictal periods</p>
                </li>
                <li className={styles.educationItems}>
                    <h3>Prediction of Power and Freshwater generation in Open Cycle OTEC Plant at Lakshadweep</h3>
                    <p>National Institute of Ocean Technology (Feb, 2022 - Apr, 2022 & Jul, 2022 - Aug - 2022)</p>
                    <br />
                    <p>PI: Dr. Biren Pattanaik, Dr. S. Sutha</p>
                    <p>Team members: Thirumurugan B, Vishnu Prasanna V & Sanjay S, Surya S</p>
                    <br />
                    <p>We tried to predict the freshater and energy that would be produced daily and monthly by the OTEC plant so that the residual power requirement could be generated using fossil fuels. Our work also included making colour-contoured maps of the same to better demonstrate the seasonal variation</p>
                </li>
                <li className={styles.educationItems}>
                    <h3>Bloodpath (a blood donor/reciepient matching system)</h3>
                    <p>Anna University (Feb, 2022 - May, 2022)</p>
                    <br />
                    <p>PI: Dr. Sangeetha</p>
                    <p>Team members: Karmukilan K T, Vasundradevi R, Kishore Kumar S, Pushparaman S, A S Saaipriya, Ahmed Atheeq</p>
                    <br />
                    <p>Improvised on the existing government system of matching blood donors with banks to directly with recipients based in a particular area filtered by common bloodgroups and other factors</p>
                </li>

            </ol>
        </div>
    )
}