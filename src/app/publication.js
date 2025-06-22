"use client";
import styles from "./page.module.css"

export default function Publication(){
    return(
        <div className={styles.educationContainer}>
            <h2 style={{color: "#2c3e50", marginBottom: "1.5rem", fontSize: "2rem"}}>Publications</h2>
            <ol style={{listStyle: "none", padding: 0}}>
                <li className={styles.educationItems}>
                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem"}}>
                        <div>
                            <h3 style={{color: "#2c3e50", fontSize: "1.4rem"}}>📄 Power and freshwater prediction against seasonal variation in OC-OTEC plant at Lakshadweep using DNN</h3>
                            <p style={{color: "#3498db", fontWeight: "600", fontSize: "1.1rem"}}>IEEE Xplore - IPRECON 2022</p>
                            <p style={{color: "#7f8c8d", fontSize: "0.9rem", fontStyle: "italic"}}>Conference Paper</p>
                        </div>
                        <span style={{background: "#e8f5e8", color: "#27ae60", padding: "0.3rem 0.8rem", borderRadius: "20px", fontSize: "0.8rem", fontWeight: "500"}}>Published</span>
                    </div>
                    <div style={{marginBottom: "1rem"}}>
                        <p style={{color: "#5a6c7d", fontSize: "0.9rem", marginBottom: "0.5rem"}}>
                            <strong>Authors:</strong> Pattanaik, Biren & S, Sutha & B. Thirumurugan & <strong>Datta, Plaban</strong> & S.Sanjay & S. Surya & Vishnu, Prasanna & Jalihal, Purnima
                        </p>
                        <p style={{color: "#5a6c7d", fontSize: "0.9rem", marginBottom: "0.5rem"}}>
                            <strong>DOI:</strong> 10.1109/IPRECON55716.2022.10059529
                        </p>
                        <p style={{color: "#5a6c7d", fontSize: "0.9rem"}}>
                            <strong>Pages:</strong> 1-6
                        </p>
                    </div>
                    <p style={{color: "#5a6c7d", lineHeight: "1.6", marginTop: "0.5rem"}}>
                        This research paper presents a deep neural network approach for predicting power and freshwater generation 
                        in Open Cycle Ocean Thermal Energy Conversion (OC-OTEC) plants at Lakshadweep, considering seasonal variations. 
                        The study contributes to renewable energy optimization and sustainable freshwater production in island communities.
                    </p>
                    <div style={{marginTop: "1rem", padding: "0.8rem", background: "#f8f9fa", borderRadius: "8px", border: "1px solid #e9ecef"}}>
                        <p style={{color: "#6c757d", fontSize: "0.8rem", margin: 0}}>
                            <strong>Impact:</strong> This work contributes to sustainable energy solutions for island communities and demonstrates 
                            the application of AI/ML techniques in renewable energy forecasting.
                        </p>
                    </div>
                </li>

                <li className={styles.educationItems}>
                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem"}}>
                        <div>
                            <h3 style={{color: "#2c3e50", fontSize: "1.4rem"}}>📝 Seizure prediction using hybrid deep learning model</h3>
                            <p style={{color: "#3498db", fontWeight: "600", fontSize: "1.1rem"}}>Journal Submission (In Preparation)</p>
                            <p style={{color: "#7f8c8d", fontSize: "0.9rem", fontStyle: "italic"}}>Research Paper</p>
                        </div>
                        <span style={{background: "#fff3cd", color: "#856404", padding: "0.3rem 0.8rem", borderRadius: "20px", fontSize: "0.8rem", fontWeight: "500"}}>In Review</span>
                    </div>
                    <div style={{marginBottom: "1rem"}}>
                        <p style={{color: "#5a6c7d", fontSize: "0.9rem", marginBottom: "0.5rem"}}>
                            <strong>Authors:</strong> Suresh Babu, <strong>Plaban Datta</strong>
                        </p>
                        <p style={{color: "#5a6c7d", fontSize: "0.9rem"}}>
                            <strong>Status:</strong> Preparing for submission to peer review (June 2024 - Present)
                        </p>
                    </div>
                    <p style={{color: "#5a6c7d", lineHeight: "1.6", marginTop: "0.5rem"}}>
                        This research paper presents a hybrid CNN-LSTM deep learning model for EEG signal classification and seizure prediction. 
                        The work builds upon my final year project and collaboration with a research scholar, focusing on achieving high accuracy 
                        in predicting seizures 15 seconds prior to occurrence using CHB-MIT and Bonn Epilepsy datasets.
                    </p>
                    <div style={{marginTop: "1rem", padding: "0.8rem", background: "#e3f2fd", borderRadius: "8px", border: "1px solid #bbdefb"}}>
                        <p style={{color: "#1565c0", fontSize: "0.8rem", margin: 0}}>
                            <strong>Key Achievement:</strong> Achieved ~95% accuracy in seizure prediction, potentially revolutionizing 
                            epilepsy care and patient safety through early warning systems.
                        </p>
                    </div>
                </li>
            </ol>

            <h2 style={{color: "#2c3e50", marginBottom: "1.5rem", fontSize: "2rem", marginTop: "3rem"}}>Research Areas & Interests</h2>
            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1rem"}}>
                <div className={styles.educationItems} style={{padding: "1.5rem"}}>
                    <h4 style={{color: "#3498db", marginBottom: "1rem", fontSize: "1.2rem"}}>🧠 Healthcare Technology</h4>
                    <ul style={{color: "#5a6c7d", lineHeight: "1.6", marginLeft: "1rem"}}>
                        <li>EEG Signal Processing & Analysis</li>
                        <li>Seizure Detection & Prediction</li>
                        <li>HIPAA Compliant Healthcare Systems</li>
                        <li>Telemedicine Applications</li>
                    </ul>
                </div>

                <div className={styles.educationItems} style={{padding: "1.5rem"}}>
                    <h4 style={{color: "#3498db", marginBottom: "1rem", fontSize: "1.2rem"}}>🌊 Renewable Energy</h4>
                    <ul style={{color: "#5a6c7d", lineHeight: "1.6", marginLeft: "1rem"}}>
                        <li>Ocean Thermal Energy Conversion (OTEC)</li>
                        <li>Predictive Modeling for Energy Systems</li>
                        <li>Sustainable Energy Solutions</li>
                        <li>Environmental Impact Assessment</li>
                    </ul>
                </div>

                <div className={styles.educationItems} style={{padding: "1.5rem"}}>
                    <h4 style={{color: "#3498db", marginBottom: "1rem", fontSize: "1.2rem"}}>🤖 AI/ML Applications</h4>
                    <ul style={{color: "#5a6c7d", lineHeight: "1.6", marginLeft: "1rem"}}>
                        <li>Deep Neural Networks (DNN)</li>
                        <li>Hybrid CNN-LSTM Models</li>
                        <li>Predictive Analytics</li>
                        <li>Computer Vision & Image Processing</li>
                    </ul>
                </div>

                <div className={styles.educationItems} style={{padding: "1.5rem"}}>
                    <h4 style={{color: "#3498db", marginBottom: "1rem", fontSize: "1.2rem"}}>💻 Software Engineering</h4>
                    <ul style={{color: "#5a6c7d", lineHeight: "1.6", marginLeft: "1rem"}}>
                        <li>Full-Stack Web Development</li>
                        <li>Mobile Application Development</li>
                        <li>Enterprise Resource Planning (ERP)</li>
                        <li>Scalable System Architecture</li>
                    </ul>
                </div>
            </div>

            <div style={{marginTop: "2rem", padding: "1.5rem", background: "linear-gradient(135deg, #e8f5e8, #f8f9fa)", borderRadius: "15px", border: "1px solid #c8e6c9"}}>
                <h3 style={{color: "#2c3e50", marginBottom: "1rem", fontSize: "1.4rem"}}>🎯 Future Research Directions</h3>
                <p style={{color: "#5a6c7d", lineHeight: "1.6", marginBottom: "1rem"}}>
                    Currently exploring the intersection of healthcare technology and AI/ML, with particular interest in:
                </p>
                <ul style={{color: "#5a6c7d", lineHeight: "1.6", marginLeft: "1.5rem"}}>
                    <li>Real-time biomedical signal processing for critical care applications</li>
                    <li>Integration of IoT devices in healthcare monitoring systems</li>
                    <li>Federated learning approaches for privacy-preserving medical AI</li>
                    <li>Sustainable technology solutions for rural and remote healthcare delivery</li>
                </ul>
            </div>
        </div>
    )
}
