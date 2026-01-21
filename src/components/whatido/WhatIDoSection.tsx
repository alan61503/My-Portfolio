"use client";

import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./animation";

export const WhatIDoSection = () => {
  const phrase = "Hi, I'm Alan — Full Stack Developer & AIML Specialist";
  const description = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(description, { amount: 0.6, once: false });

  return (
    <section ref={description} className={styles.description}>
      <div className={styles.body}>
        <aside className={styles.sideHeading}>
          <span>Who I am</span>
        </aside>
        <div className={styles.content}>
          <div className={styles.textBlock}>
            <p>
              {phrase.split(" ").map((word, index) => (
                <span key={`${word}-${index}`} className={styles.mask}>
                  <motion.span
                    variants={slideUp}
                    custom={index}
                    animate={isInView ? "open" : "closed"}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </p>
            <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
              I'm Alan, a software engineer at Christ (Deemed to be University), where I craft
              intuitive powerful digital products that merge intelligence with design. Let&apos;s create
              something impactful.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

type Text3dProps = {
  primary: string;
  secondary: string;
};

function Text3d({ primary, secondary }: Text3dProps) {
  return (
    <div className={styles.textContainer}>
      <p className={styles.primary}>{primary}</p>
      <p className={styles.secondary}>{secondary}</p>
    </div>
  );
}