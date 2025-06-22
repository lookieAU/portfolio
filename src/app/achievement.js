"use client";
import styles from "./page.module.css"

export default function Achievement(){
    return(
        <div className={styles.educationContainer}>
            <h2 style={{color: "#2c3e50", marginBottom: "1.5rem", fontSize: "2rem"}}>Achievements</h2>
            <ol style={{listStyle: "none", padding: 0}}>
                <li className={styles.educationItems}>
                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem"}}>
                        <div>
                            <h3 style={{color: "#2c3e50", fontSize: "1.4rem"}}>🏆 Smart India Hackathon 2022 - Winner</h3>
                            <p style={{color: "#3498db", fontWeight: "600", fontSize: "1.1rem"}}>Ministry of Education, Government of India</p>
                            <p style={{color: "#7f8c8d", fontSize: "0.9rem"}}>Prize Money: INR 1,00,000</p>
                        </div>
                        <span style={{background: "#ffd700", color: "#b8860b", padding: "0.3rem 0.8rem", borderRadius: "20px", fontSize: "0.8rem", fontWeight: "600"}}>🥇 WINNER</span>
                    </div>
                    <p style={{color: "#5a6c7d", lineHeight: "1.6", marginTop: "0.5rem"}}>
                        Annual tech hackathon on various problem statements conducted by Ministry of Education, Government of India. 
                        Using our experience while working on the OTEC project, we leveraged the same to bring out a solution in the 
                        renewable energy criteria assessed by a three-level evaluation followed by an in-person final round where we 
                        emerged as the winners for our developed mobile app.
                    </p>
                </li>

                <li className={styles.educationItems}>
                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem"}}>
                        <div>
                            <h3 style={{color: "#2c3e50", fontSize: "1.4rem"}}>🥈 e-Yantra Robotics Competition - 2nd Round</h3>
                            <p style={{color: "#3498db", fontWeight: "600", fontSize: "1.1rem"}}>IIT Bombay</p>
                            <p style={{color: "#7f8c8d", fontSize: "0.9rem"}}>Annual Robotics Competition</p>
                        </div>
                        <span style={{background: "#e1f5fe", color: "#0277bd", padding: "0.3rem 0.8rem", borderRadius: "20px", fontSize: "0.8rem", fontWeight: "500"}}>2021</span>
                    </div>
                    <p style={{color: "#5a6c7d", lineHeight: "1.6", marginTop: "0.5rem"}}>
                        Implemented the solution for the berry-picking bot which plucks berries from the tree using image processing 
                        to differentiate between different types. Our picking algorithm passed the first round but we could not clear 
                        the second one which involved designing the prototype body using CAD.
                    </p>
                </li>

                <li className={styles.educationItems}>
                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem"}}>
                        <div>
                            <h3 style={{color: "#2c3e50", fontSize: "1.4rem"}}>🎯 State Rank 1 - ICSE Board Examinations</h3>
                            <p style={{color: "#3498db", fontWeight: "600", fontSize: "1.1rem"}}>Holy Cross School</p>
                            <p style={{color: "#7f8c8d", fontSize: "0.9rem"}}>Class X Board Examinations</p>
                        </div>
                        <span style={{background: "#e8f5e8", color: "#27ae60", padding: "0.3rem 0.8rem", borderRadius: "20px", fontSize: "0.8rem", fontWeight: "500"}}>2017</span>
                    </div>
                    <p style={{color: "#5a6c7d", lineHeight: "1.6", marginTop: "0.5rem"}}>
                        Achieved State Rank 1 in ICSE Board Examinations with 96% marks, demonstrating exceptional academic performance 
                        across all subjects including Mathematics, Science, English, and Computer Applications.
                    </p>
                </li>

                <li className={styles.educationItems}>
                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem"}}>
                        <div>
                            <h3 style={{color: "#2c3e50", fontSize: "1.4rem"}}>🎓 ARKA Scholarship Awardee</h3>
                            <p style={{color: "#3498db", fontWeight: "600", fontSize: "1.1rem"}}>Government of Tripura</p>
                            <p style={{color: "#7f8c8d", fontSize: "0.9rem"}}>State Scholarship for Meritorious Students</p>
                        </div>
                        <span style={{background: "#f3e5f5", color: "#7b1fa2", padding: "0.3rem 0.8rem", borderRadius: "20px", fontSize: "0.8rem", fontWeight: "500"}}>2017-2018</span>
                    </div>
                    <p style={{color: "#5a6c7d", lineHeight: "1.6", marginTop: "0.5rem"}}>
                        Awarded state scholarship for meritorious students for Grade IX & X based on outstanding academic performance 
                        and potential for future excellence in studies.
                    </p>
                </li>
            </ol>

            <h2 style={{color: "#2c3e50", marginBottom: "1.5rem", fontSize: "2rem", marginTop: "3rem"}}>Positions of Responsibility</h2>
            <ol style={{listStyle: "none", padding: 0}}>
                <li className={styles.educationItems}>
                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem"}}>
                        <div>
                            <h3 style={{color: "#2c3e50", fontSize: "1.4rem"}}>🤝 Volunteer</h3>
                            <p style={{color: "#3498db", fontWeight: "600", fontSize: "1.1rem"}}>Youth Red Cross</p>
                        </div>
                        <span style={{background: "#ffebee", color: "#c62828", padding: "0.3rem 0.8rem", borderRadius: "20px", fontSize: "0.8rem", fontWeight: "500"}}>2019 - 2023</span>
                    </div>
                    <p style={{color: "#5a6c7d", lineHeight: "1.6", marginTop: "0.5rem"}}>
                        Active volunteer with Youth Red Cross, participating in community service activities, health awareness campaigns, 
                        and disaster relief initiatives during college years.
                    </p>
                </li>

                <li className={styles.educationItems}>
                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem"}}>
                        <div>
                            <h3 style={{color: "#2c3e50", fontSize: "1.4rem"}}>👨‍💼 President</h3>
                            <p style={{color: "#3498db", fontWeight: "600", fontSize: "1.1rem"}}>ISA Student Section, Chennai</p>
                        </div>
                        <span style={{background: "#e8f5e8", color: "#27ae60", padding: "0.3rem 0.8rem", borderRadius: "20px", fontSize: "0.8rem", fontWeight: "500"}}>2022</span>
                    </div>
                    <p style={{color: "#5a6c7d", lineHeight: "1.6", marginTop: "0.5rem"}}>
                        Led the Instrumentation Society of America (ISA) Student Section, organizing technical events, workshops, 
                        and industry interactions for fellow students in the instrumentation and automation field.
                    </p>
                </li>

                <li className={styles.educationItems}>
                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem"}}>
                        <div>
                            <h3 style={{color: "#2c3e50", fontSize: "1.4rem"}}>📝 Secretary</h3>
                            <p style={{color: "#3498db", fontWeight: "600", fontSize: "1.1rem"}}>ISA Student Section, Chennai</p>
                        </div>
                        <span style={{background: "#e1f5fe", color: "#0277bd", padding: "0.3rem 0.8rem", borderRadius: "20px", fontSize: "0.8rem", fontWeight: "500"}}>2021</span>
                    </div>
                    <p style={{color: "#5a6c7d", lineHeight: "1.6", marginTop: "0.5rem"}}>
                        Served as Secretary of ISA Student Section, managing administrative tasks, coordinating events, 
                        and maintaining communication between students and faculty members.
                    </p>
                </li>

                <li className={styles.educationItems}>
                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem"}}>
                        <div>
                            <h3 style={{color: "#2c3e50", fontSize: "1.4rem"}}>🌟 Change Maker</h3>
                            <p style={{color: "#3498db", fontWeight: "600", fontSize: "1.1rem"}}>Womenite, Delhi</p>
                        </div>
                        <span style={{background: "#f3e5f5", color: "#7b1fa2", padding: "0.3rem 0.8rem", borderRadius: "20px", fontSize: "0.8rem", fontWeight: "500"}}>2020</span>
                    </div>
                    <p style={{color: "#5a6c7d", lineHeight: "1.6", marginTop: "0.5rem"}}>
                        Participated as a Change Maker with Womenite, contributing to initiatives focused on women empowerment, 
                        gender equality, and social change through technology and community engagement.
                    </p>
                </li>
            </ol>
        </div>
    )
}
