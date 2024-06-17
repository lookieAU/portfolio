"use client";
import styles from "./page.module.css"

export default function Travel(){
    return(
        <div className={styles.travelContainer}>
            <p style={{fontStyle: "italic"}}>I am still developing this page, so it may break on interaction! Sorry for the incovenience</p>
            <br />
            <h3>Presently: Mizoram, India</h3>
            <h4>Planned: South Korea & Japan (~ Dec 2024 - Jan 2025)</h4>
            <br />
            <p>I have always seen travel as a way to explore new cultures which gives me a feeling of serenity and makes me forget all my worries. If you want to join in on my next trip, drop me an email below and we can work it out!</p>
            <br />
            <form name="travel">
                <input name="email" placeholder="Your Email" id="email" type="email"/>
                <input name="Name" placeholder="Name" id="name" />
                <input name="else" placeholder="Anything else" id="else" />
                <button type="Submit" value="Submit">Submit</button>
            </form>
            <br />
            <div className={styles.travelBlog}>
                <h2>Blog</h2>
                <p>Manali, India</p>
                <img src="" />
                <p>Delhi, India</p>
                <img src="" />
                <p>Chennai, India</p>
                <img src="" />
            </div>
        </div>)
}