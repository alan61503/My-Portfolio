"use client";

import styles from "./SkillsMarquee.module.scss";

const skillsLines = [
  "Languages · JavaScript · TypeScript · Python · Java · C++ · HTML/CSS",
  "Frameworks/Libraries · React · Next.js · Node.js · Express · TensorFlow · PyTorch",
  "Tools/Platforms · Git · Docker · AWS · Figma · Vercel · Linux",
];

export const SkillsMarquee = () => {
  return (
    <section className={styles.main}>
      {skillsLines.map((line, index) => {
        const baseDuration = Math.max(18, Math.round(line.length * 0.18));
        const duration = index === 1 ? Math.round(baseDuration * 1.2) : baseDuration;
        return (
        <div key={line} className={styles.sliderContainer}>
          <div
            className={`${styles.slider} ${index % 2 === 1 ? styles.reverse : ""}`}
            style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
          >
            {Array.from({ length: 4 }).map((_, repeatIndex) => (
              <p key={`${line}-${repeatIndex}`}>{line} ·</p>
            ))}
          </div>
        </div>
        );
      })}
    </section>
  );
};