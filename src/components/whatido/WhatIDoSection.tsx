"use client";

import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./animation";

export const WhatIDoSection = () => {
  const phrase =
    "I build intelligent digital systems — from full-stack platforms to applied AI solutions.";
  const description = useRef<HTMLDivElement | null>(null);
  const plane = useRef<HTMLDivElement | null>(null);
  const frame = useRef<number | null>(null);
  const lastPoint = useRef({ x: 0, y: 0 });
  const maxRotate = 45;
  const isInView = useInView(description, { amount: 0.6, once: false });

  const manageMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!plane.current) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    lastPoint.current = {
      x: Math.min(Math.max(x, 0), 1),
      y: Math.min(Math.max(y, 0), 1),
    };

    if (frame.current !== null) return;
    frame.current = window.requestAnimationFrame(() => {
      frame.current = null;
      if (!plane.current) return;
      const perspective = window.innerWidth * 4;
      const rotateX = maxRotate * lastPoint.current.x - maxRotate / 2;
      const rotateY = (maxRotate * lastPoint.current.y - maxRotate / 2) * -1;
      plane.current.style.transform = `perspective(${perspective}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
    });
  };

  const handleMouseLeave = () => {
    if (!plane.current) return;
    plane.current.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg)";
  };

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
              I care about structure, speed, and building things that actually last.
            </motion.p>
          </div>
          <div
            ref={plane}
            onMouseMove={manageMouseMove}
            onMouseLeave={handleMouseLeave}
            className={styles.text3d}
          >
            <Text3d primary="Turning" secondary="Turning" />
            <Text3d primary="Ideas" secondary="Ideas" />
            <Text3d primary="Into" secondary="Into" />
            <Text3d primary="Reality" secondary="Reality" />
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