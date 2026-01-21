"use client";

import styles from "./style.module.scss";
import Image from "next/image";
import { useRef } from "react";
import { useScroll, motion, useTransform, useInView } from "framer-motion";
import Magnetic from "../common/Magnetic";
import { opacity, slideUp } from "./anim";
import Link from "next/link";

export const ContactSection = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const isInView = useInView(container, { amount: 0.6, once: false });

  const x = useTransform(scrollYProgress, [0, 1], [0, 420]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);

  return (
    <motion.div ref={container} className={styles.contact}>
      <motion.div style={{ y }} className={styles.body}>
        <div className={styles.title}>
          <div className={styles.titleRow}>
            <motion.div
              className={styles.titleText}
              variants={opacity}
              initial="closed"
              animate={isInView ? "open" : "closed"}
            >
              <div className={styles.titleLine}>
                <motion.h2
                  variants={slideUp}
                  custom={0}
                  initial="closed"
                  animate={isInView ? "open" : "closed"}
                >
                  Let&apos;s work
                </motion.h2>
              </div>
              <div className={styles.titleLine}>
                <motion.h2
                  variants={slideUp}
                  custom={1}
                  initial="closed"
                  animate={isInView ? "open" : "closed"}
                >
                  together
                </motion.h2>
              </div>
            </motion.div>
          </div>
          <motion.div style={{ x }} className={styles.buttonContainer}>
            <Link href="/contact" className={styles.button} style={{ backgroundColor: "#334BD3" }}>
              <p>Get in touch</p>
            </Link>
          </motion.div>
          <motion.svg
            style={{ rotate, scale: 2 }}
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="white"
            />
          </motion.svg>
        </div>
        <div className={styles.nav}>
          <div className={styles.button}>
            <p>alanchrisdisilva@gmail.com</p>
          </div>
          <div className={styles.button}>
            <p>+91 7558864498</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};