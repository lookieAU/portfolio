"use client";
import styles from "./page.module.css"

export default function Education(){
    return(
        <div className={styles.educationContainer}>
            <h2 style={{color: "#2c3e50", marginBottom: "1.5rem", fontSize: "2rem"}}>Education</h2>
            <ol style={{listStyle: "none", padding: 0}}>
                <li className={styles.educationItems}>
                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem"}}>
                        <div>
                            <h3 style={{color: "#2c3e50", fontSize: "1.4rem"}}>Bachelor of Engineering</h3>
                            <p style={{color: "#3498db", fontWeight: "600", fontSize: "1.1rem"}}>Electronics and Instrumentation</p>
                            <p style={{color: "#7f8c8d", fontSize: "1rem"}}>Anna University, Chennai, India</p>
                        </div>
                        <div style={{textAlign: "right"}}>
                            <span style={{background: "#e8f5e8", color: "#27ae60", padding: "0.3rem 0.8rem", borderRadius: "20px", fontSize: "0.8rem", fontWeight: "500", display: "block", marginBottom: "0.5rem"}}>July 2023</span>
                            <span style={{background: "#fff3cd", color: "#856404", padding: "0.3rem 0.8rem", borderRadius: "20px", fontSize: "0.8rem", fontWeight: "500"}}>CGPA: 9.26</span>
                        </div>
                    </div>
                    <p style={{color: "#5a6c7d", lineHeight: "1.6", marginTop: "0.5rem"}}>
                        Specialized in Electronics and Instrumentation Engineering with focus on signal processing, embedded systems, and biomedical applications. 
                        Completed final year project on seizure detection using deep learning techniques.
                    </p>
                </li>

                <li className={styles.educationItems}>
                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem"}}>
                        <div>
                            <h3 style={{color: "#2c3e50", fontSize: "1.4rem"}}>Senior Secondary Education</h3>
                            <p style={{color: "#3498db", fontWeight: "600", fontSize: "1.1rem"}}>Class XII (CBSE)</p>
                            <p style={{color: "#7f8c8d", fontSize: "1rem"}}>Hindi Higher Secondary School</p>
                        </div>
                        <div style={{textAlign: "right"}}>
                            <span style={{background: "#e1f5fe", color: "#0277bd", padding: "0.3rem 0.8rem", borderRadius: "20px", fontSize: "0.8rem", fontWeight: "500", display: "block", marginBottom: "0.5rem"}}>May 2019</span>
                            <span style={{background: "#f3e5f5", color: "#7b1fa2", padding: "0.3rem 0.8rem", borderRadius: "20px", fontSize: "0.8rem", fontWeight: "500"}}>92.6%</span>
                        </div>
                    </div>
                    <p style={{color: "#5a6c7d", lineHeight: "1.6", marginTop: "0.5rem"}}>
                        Completed higher secondary education with Science stream, focusing on Physics, Chemistry, Mathematics, and Computer Science.
                    </p>
                </li>

                <li className={styles.educationItems}>
                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem"}}>
                        <div>
                            <h3 style={{color: "#2c3e50", fontSize: "1.4rem"}}>Secondary Education</h3>
                            <p style={{color: "#3498db", fontWeight: "600", fontSize: "1.1rem"}}>Class X (ICSE)</p>
                            <p style={{color: "#7f8c8d", fontSize: "1rem"}}>Holy Cross School</p>
                        </div>
                        <div style={{textAlign: "right"}}>
                            <span style={{background: "#fff3cd", color: "#856404", padding: "0.3rem 0.8rem", borderRadius: "20px", fontSize: "0.8rem", fontWeight: "500", display: "block", marginBottom: "0.5rem"}}>May 2017</span>
                            <span style={{background: "#e8f5e8", color: "#27ae60", padding: "0.3rem 0.8rem", borderRadius: "20px", fontSize: "0.8rem", fontWeight: "500"}}>96% - State Rank 1</span>
                        </div>
                    </div>
                    <p style={{color: "#5a6c7d", lineHeight: "1.6", marginTop: "0.5rem"}}>
                        Achieved State Rank 1 in ICSE Board Examinations. Strong foundation in core subjects including Mathematics, Science, English, and Computer Applications.
                    </p>
                </li>
            </ol>

            <h2 style={{color: "#2c3e50", marginBottom: "1.5rem", fontSize: "2rem", marginTop: "3rem"}}>Certifications</h2>
            <ol style={{listStyle: "none", padding: 0}}>
                <li className={styles.educationItems}>
                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem"}}>
                        <div>
                            <h3 style={{color: "#2c3e50", fontSize: "1.4rem"}}>Web Development Certification</h3>
                            <p style={{color: "#3498db", fontWeight: "600", fontSize: "1.1rem"}}>Internshala</p>
                        </div>
                        <span style={{background: "#e1f5fe", color: "#0277bd", padding: "0.3rem 0.8rem", borderRadius: "20px", fontSize: "0.8rem", fontWeight: "500"}}>May 2021</span>
                    </div>
                    <p style={{color: "#5a6c7d", lineHeight: "1.6", marginTop: "0.5rem"}}>
                        Comprehensive web development course covering HTML, CSS, JavaScript, and modern web development practices.
                    </p>
                </li>

                <li className={styles.educationItems}>
                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem"}}>
                        <div>
                            <h3 style={{color: "#2c3e50", fontSize: "1.4rem"}}>ESG - Environmental and Social Governance</h3>
                            <p style={{color: "#3498db", fontWeight: "600", fontSize: "1.1rem"}}>Udemy</p>
                        </div>
                        <span style={{background: "#e8f5e8", color: "#27ae60", padding: "0.3rem 0.8rem", borderRadius: "20px", fontSize: "0.8rem", fontWeight: "500"}}>January 2024</span>
                    </div>
                    <p style={{color: "#5a6c7d", lineHeight: "1.6", marginTop: "0.5rem"}}>
                        Understanding of Environmental, Social, and Governance principles in business and technology contexts.
                    </p>
                </li>
            </ol>

            <h2 style={{color: "#2c3e50", marginBottom: "1.5rem", fontSize: "2rem", marginTop: "3rem"}}>Languages</h2>
            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem"}}>
                <div className={styles.educationItems} style={{padding: "1rem", textAlign: "center"}}>
                    <h4 style={{color: "#3498db", marginBottom: "0.5rem", fontSize: "1.1rem"}}>English</h4>
                    <span style={{background: "#e8f5e8", color: "#27ae60", padding: "0.3rem 0.8rem", borderRadius: "20px", fontSize: "0.8rem", fontWeight: "500"}}>Fluent</span>
                </div>
                <div className={styles.educationItems} style={{padding: "1rem", textAlign: "center"}}>
                    <h4 style={{color: "#3498db", marginBottom: "0.5rem", fontSize: "1.1rem"}}>Bengali</h4>
                    <span style={{background: "#f3e5f5", color: "#7b1fa2", padding: "0.3rem 0.8rem", borderRadius: "20px", fontSize: "0.8rem", fontWeight: "500"}}>Native</span>
                </div>
                <div className={styles.educationItems} style={{padding: "1rem", textAlign: "center"}}>
                    <h4 style={{color: "#3498db", marginBottom: "0.5rem", fontSize: "1.1rem"}}>Hindi</h4>
                    <span style={{background: "#e1f5fe", color: "#0277bd", padding: "0.3rem 0.8rem", borderRadius: "20px", fontSize: "0.8rem", fontWeight: "500"}}>Fluent</span>
                </div>
                <div className={styles.educationItems} style={{padding: "1rem", textAlign: "center"}}>
                    <h4 style={{color: "#3498db", marginBottom: "0.5rem", fontSize: "1.1rem"}}>Korean</h4>
                    <span style={{background: "#fff3cd", color: "#856404", padding: "0.3rem 0.8rem", borderRadius: "20px", fontSize: "0.8rem", fontWeight: "500"}}>Basic</span>
                </div>
            </div>
        </div>
    )
}
