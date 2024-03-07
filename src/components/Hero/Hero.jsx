import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sohil</h1>
        <p className={styles.description}>
        I'm a B.Tech graduate from JECRC University, Jaipur, with experience in Frontend development and strong skills in data structures and algorithms. 
        Seeking an SDE role, your referral to your organization would be invaluable. Thank you!
        </p>
        <a href="mailto:sohil.khan.eng@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/hero.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
