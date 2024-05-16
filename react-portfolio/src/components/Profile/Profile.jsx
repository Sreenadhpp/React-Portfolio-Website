import React from "react";

import styles from "./Profile.module.css";
import { getImageUrl } from "../../utils";

export const Profile = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sreenadh</h1>
        <p className={styles.description}>
          I'm a self-taught developer (React-Django) with a solid foundation in both frontend and backend development. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:sreenadhpp22@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("profile/profileb.png")}
        alt="Profile image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};