"use client";

import styles from "./SkillsMarquee.module.scss";

const skillsLine =
  "• Languages  JavaScript  TypeScript  Python  Java  C++  HTML/CSS  • Frameworks/Libraries  React  Next.js  Node.js  Express  TensorFlow  PyTorch  • Tools/Platforms  Git  Docker  AWS  Figma  Vercel  Linux";

export const SkillsMarquee = () => {
  return (
    <section className={styles.main}>
      <div className={styles.sliderContainer}>
        <div
          className={styles.slider}
          style={{ "--marquee-duration": "70s" } as React.CSSProperties}
        >
          {Array.from({ length: 4 }).map((_, repeatIndex) => (
            <p key={`${skillsLine}-${repeatIndex}`}>{skillsLine}</p>
          ))}
        </div>
      </div>
    </section>
  );
};