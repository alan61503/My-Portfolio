import styles from "./style.module.scss";

const focusItems = ["Development", "AI / ML", "Tools & Stack"];

export const WhatIDoSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.copy}>
          <p className={styles.kicker}>What I Do</p>
          <p className={styles.lead}>
            I’m a full-stack developer specializing in modern web technologies and applied AI/ML.
          </p>
          <p className={styles.body}>
            I focus on building products that are fast, scalable, and intuitive, blending engineering
            discipline with clean design and intelligent systems.
          </p>
          <p className={styles.meta}>Currently pursuing B.Tech in CSE (AIML) at Christ (Deemed to be University).</p>
        </div>
        <div className={styles.nav}>
          {focusItems.map((item) => (
            <div key={item} className={styles.el}>
              <span>{item}</span>
              <div className={styles.indicator} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};