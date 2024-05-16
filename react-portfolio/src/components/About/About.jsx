import React from 'react'

import styles from "./About.module.css"
import { getImageUrl } from '../../utils'

const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img 
              className={styles.aboutImage} 
              src={getImageUrl("about/aboutImage.png")} 
              alt="about image of me" 
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>
                        As a Frontend React Developer, I create dynamic, responsive web applications using React.js. 
                        Passionate about innovative design, I aim to deliver seamless user experiences.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>
                        As a Django Backend Developer, I build robust, scalable web applications using Django's powerful framework. 
                        Passionate about clean code and efficient solutions
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About
