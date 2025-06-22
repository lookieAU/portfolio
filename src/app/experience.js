"use client";
import styles from "./page.module.css"

export default function Experience(){
    return(
        <div className={styles.educationContainer}>
            <div style={{marginBottom: "2rem", padding: "1.5rem", background: "linear-gradient(135deg, #e3f2fd, #f8f9fa)", borderRadius: "15px", border: "1px solid #e1f5fe"}}>
                <h2 style={{color: "#2c3e50", marginBottom: "1rem", fontSize: "1.8rem"}}>Technical Skills</h2>
                <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem"}}>
                    <div>
                        <h4 style={{color: "#3498db", marginBottom: "0.5rem"}}>Frontend</h4>
                        <p style={{fontSize: "0.9rem", color: "#5a6c7d"}}>Next.js, React.js, Vue.js, Flutter, JavaScript, Dart</p>
                    </div>
                    <div>
                        <h4 style={{color: "#3498db", marginBottom: "0.5rem"}}>Backend</h4>
                        <p style={{fontSize: "0.9rem", color: "#5a6c7d"}}>Node.js, Django, Python, Flask</p>
                    </div>
                    <div>
                        <h4 style={{color: "#3498db", marginBottom: "0.5rem"}}>Database</h4>
                        <p style={{fontSize: "0.9rem", color: "#5a6c7d"}}>MongoDB, MySQL, SQL, PostgreSQL</p>
                    </div>
                    <div>
                        <h4 style={{color: "#3498db", marginBottom: "0.5rem"}}>DevOps & Tools</h4>
                        <p style={{fontSize: "0.9rem", color: "#5a6c7d"}}>Docker, WebSockets, GIS Tools</p>
                    </div>
                </div>
            </div>

            <h2 style={{color: "#2c3e50", marginBottom: "1.5rem", fontSize: "2rem"}}>Work Experience</h2>
            <ol style={{listStyle: "none", padding: 0}}>
                <li className={styles.educationItems}>
                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem"}}>
                        <div>
                            <h3 style={{color: "#2c3e50", fontSize: "1.4rem"}}>Software Development Engineer (SDE)</h3>
                            <p style={{color: "#3498db", fontWeight: "600", fontSize: "1.1rem"}}>Digimed Solutions Pvt. Ltd. (NIT Mizoram)</p>
                            <p style={{color: "#7f8c8d", fontSize: "0.9rem"}}>Aizawl, India</p>
                        </div>
                        <span style={{background: "#e8f5e8", color: "#27ae60", padding: "0.3rem 0.8rem", borderRadius: "20px", fontSize: "0.8rem", fontWeight: "500"}}>May 2024 – Present</span>
                    </div>
                    <ul style={{marginLeft: "1rem", color: "#5a6c7d", lineHeight: "1.6"}}>
                        <li style={{marginBottom: "0.5rem"}}>• Developed full-stack mobile and web applications using <strong>Next.js, Flutter, Node.js, and MongoDB</strong> for automating public health service delivery</li>
                        <li style={{marginBottom: "0.5rem"}}>• Implemented real-time chat and video features using <strong>WebSockets</strong></li>
                        <li style={{marginBottom: "0.5rem"}}>• Ensured <strong>HIPAA compliance</strong> for sensitive medical data management</li>
                        <li style={{marginBottom: "0.5rem"}}>• Implemented <strong>Docker-based deployment and load balancers</strong>, supporting over <strong>50K concurrent users</strong></li>
                        <li>• Sponsored by TIH-IIT Bhilai in partnership with Ebenezer Hospital, Aizawl</li>
                    </ul>
                </li>

                <li className={styles.educationItems}>
                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem"}}>
                        <div>
                            <h3 style={{color: "#2c3e50", fontSize: "1.4rem"}}>Software Engineer Intern</h3>
                            <p style={{color: "#3498db", fontWeight: "600", fontSize: "1.1rem"}}>Hewlett-Packard Enterprise</p>
                            <p style={{color: "#7f8c8d", fontSize: "0.9rem"}}>Chennai, India</p>
                        </div>
                        <span style={{background: "#fff3cd", color: "#856404", padding: "0.3rem 0.8rem", borderRadius: "20px", fontSize: "0.8rem", fontWeight: "500"}}>Feb 2023 – May 2023</span>
                    </div>
                    <ul style={{marginLeft: "1rem", color: "#5a6c7d", lineHeight: "1.6"}}>
                        <li style={{marginBottom: "0.5rem"}}>• Automated UI testing scripts using <strong>Robot framework and Python</strong></li>
                        <li style={{marginBottom: "0.5rem"}}>• Enhanced automated workflows by <strong>15%</strong>, significantly reducing manual testing time</li>
                        <li>• Gained experience in network virtualization technologies</li>
                    </ul>
                </li>

                <li className={styles.educationItems}>
                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem"}}>
                        <div>
                            <h3 style={{color: "#2c3e50", fontSize: "1.4rem"}}>Research Intern</h3>
                            <p style={{color: "#3498db", fontWeight: "600", fontSize: "1.1rem"}}>National Institute of Ocean Technology</p>
                            <p style={{color: "#7f8c8d", fontSize: "0.9rem"}}>Chennai, India</p>
                        </div>
                        <span style={{background: "#e1f5fe", color: "#0277bd", padding: "0.3rem 0.8rem", borderRadius: "20px", fontSize: "0.8rem", fontWeight: "500"}}>Feb 2022 – Apr 2022 & Jul 2022 – Aug 2022</span>
                    </div>
                    <ul style={{marginLeft: "1rem", color: "#5a6c7d", lineHeight: "1.6"}}>
                        <li style={{marginBottom: "0.5rem"}}>• Developed <strong>Flask-based web applications</strong> for predicting daily sea surface temperatures</li>
                        <li style={{marginBottom: "0.5rem"}}>• Estimated power and freshwater generation capabilities for an <strong>OTEC plant in Lakshadweep</strong></li>
                        <li>• Created an <strong>Android app using React Native</strong> integrated with GIS tools</li>
                    </ul>
                </li>
            </ol>

            <h2 style={{color: "#2c3e50", marginBottom: "1.5rem", fontSize: "2rem", marginTop: "3rem"}}>Freelance Projects</h2>
            <ol style={{listStyle: "none", padding: 0}}>
                <li className={styles.educationItems}>
                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem"}}>
                        <div>
                            <h3 style={{color: "#2c3e50", fontSize: "1.4rem"}}>ERP Suite Development</h3>
                            <p style={{color: "#3498db", fontWeight: "600", fontSize: "1.1rem"}}>Khiangte Construction Pvt. Ltd.</p>
                            <p style={{color: "#7f8c8d", fontSize: "0.9rem"}}>Aizawl, India</p>
                        </div>
                        <span style={{background: "#f3e5f5", color: "#7b1fa2", padding: "0.3rem 0.8rem", borderRadius: "20px", fontSize: "0.8rem", fontWeight: "500"}}>Feb 2025 – Apr 2025</span>
                    </div>
                    <ul style={{marginLeft: "1rem", color: "#5a6c7d", lineHeight: "1.6"}}>
                        <li style={{marginBottom: "0.5rem"}}>• Developed an ERP suite, significantly reducing manual workflows from <strong>100% to 20%</strong></li>
                        <li style={{marginBottom: "0.5rem"}}>• Utilized <strong>Vue.js with Quasar framework, Node.js backend, and MySQL</strong> for ACID compliance</li>
                        <li>• Suite handed over to organization, with ongoing employee training</li>
                    </ul>
                </li>

                <li className={styles.educationItems}>
                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem"}}>
                        <div>
                            <h3 style={{color: "#2c3e50", fontSize: "1.4rem"}}>Reward-Based Platform</h3>
                            <p style={{color: "#3498db", fontWeight: "600", fontSize: "1.1rem"}}>Zohive Mobile</p>
                            <p style={{color: "#7f8c8d", fontSize: "0.9rem"}}>Aizawl, India</p>
                        </div>
                        <span style={{background: "#e8f5e8", color: "#27ae60", padding: "0.3rem 0.8rem", borderRadius: "20px", fontSize: "0.8rem", fontWeight: "500"}}>May 2025 – Present</span>
                    </div>
                    <ul style={{marginLeft: "1rem", color: "#5a6c7d", lineHeight: "1.6"}}>
                        <li style={{marginBottom: "0.5rem"}}>• Built a reward-based platform targeting <strong>educational and research institutions</strong></li>
                        <li style={{marginBottom: "0.5rem"}}>• Utilized <strong>Flutter frontend, Django backend</strong>, and containerized deployment with <strong>Docker</strong></li>
                        <li>• Planned database migration from SQLite3 to <strong>PostgreSQL</strong> for production</li>
                    </ul>
                </li>
            </ol>

            <h2 style={{color: "#2c3e50", marginBottom: "1.5rem", fontSize: "2rem", marginTop: "3rem"}}>Key Projects</h2>
            <ol style={{listStyle: "none", padding: 0}}>
                <li className={styles.educationItems}>
                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem"}}>
                        <div>
                            <h3 style={{color: "#2c3e50", fontSize: "1.4rem"}}>Seizure Detection and Classification using Deep Learning</h3>
                            <p style={{color: "#7f8c8d", fontSize: "0.9rem"}}>Final Year Project</p>
                        </div>
                        <span style={{background: "#e1f5fe", color: "#0277bd", padding: "0.3rem 0.8rem", borderRadius: "20px", fontSize: "0.8rem", fontWeight: "500"}}>Jul 2022 – Apr 2023</span>
                    </div>
                    <ul style={{marginLeft: "1rem", color: "#5a6c7d", lineHeight: "1.6"}}>
                        <li style={{marginBottom: "0.5rem"}}>• Developed a <strong>hybrid CNN-LSTM model</strong> for EEG signal classification</li>
                        <li style={{marginBottom: "0.5rem"}}>• Achieved <strong>~95% accuracy</strong> in predicting seizures 15 seconds prior to occurrence</li>
                        <li>• Utilized <strong>CHB-MIT and Bonn Epilepsy datasets</strong></li>
                    </ul>
                </li>

                <li className={styles.educationItems}>
                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem"}}>
                        <div>
                            <h3 style={{color: "#2c3e50", fontSize: "1.4rem"}}>Blood Bank Management System</h3>
                            <p style={{color: "#7f8c8d", fontSize: "0.9rem"}}>Web Application Project</p>
                        </div>
                        <span style={{background: "#fff3cd", color: "#856404", padding: "0.3rem 0.8rem", borderRadius: "20px", fontSize: "0.8rem", fontWeight: "500"}}>Jan 2022 – May 2022</span>
                    </div>
                    <ul style={{marginLeft: "1rem", color: "#5a6c7d", lineHeight: "1.6"}}>
                        <li style={{marginBottom: "0.5rem"}}>• Created web application for connecting blood donors and recipients based on <strong>location and medical criteria</strong></li>
                        <li style={{marginBottom: "0.5rem"}}>• Implemented comprehensive authentication and search functionalities using <strong>Node.js and SQL</strong></li>
                        <li>• Developed web app interface using <strong>Pug.js templating engine</strong></li>
                    </ul>
                </li>
            </ol>
        </div>
    )
}
