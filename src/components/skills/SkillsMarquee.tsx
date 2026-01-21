"use client";

import styles from "./SkillsMarquee.module.scss";

const skillsLine =
  "Full-stack Development · Applied AI/ML · Next.js · React · TypeScript · Python · Supabase · PostgreSQL · UI/UX";

export const SkillsMarquee = () => {
  return (
    <section className={styles.main}>
      <div className={styles.sliderContainer}>
        <div className={styles.slider}>
          <p>{skillsLine} ·</p>
          <p>{skillsLine} ·</p>
        </div>
      </div>
    </section>
  );
};