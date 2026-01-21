"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, cubicBezier, motion } from "framer-motion";

import styles from "./style.module.scss";
import { opacity, slideUp } from "./anim";

const words = ["Hello", "Bonjour", "Ciao", "Olà", "やあ", "Hallå", "Guten tag", "Hallo"];

export const Preloader = () => {
  const [index, setIndex] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index >= words.length - 1) {
      const timeout = setTimeout(() => setIsVisible(false), 500);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, index === 0 ? 1000 : 150);

    return () => clearTimeout(timeout);
  }, [index]);

  const { initialPath, targetPath } = useMemo(() => {
    const { width, height } = dimensions;
    return {
      initialPath: `M0 0 L${width} 0 L${width} ${height} Q${width / 2} ${height + 300} 0 ${height}  L0 0`,
      targetPath: `M0 0 L${width} 0 L${width} ${height} Q${width / 2} ${height} 0 ${height}  L0 0`,
    };
  }, [dimensions]);

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: cubicBezier(0.76, 0, 0.24, 1) },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: cubicBezier(0.76, 0, 0.24, 1), delay: 0.3 },
    },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={styles.introduction}
          variants={slideUp}
          initial="initial"
          exit="exit"
        >
          <motion.p variants={opacity} initial="initial" animate="enter">
            <span />
            {words[index]}
          </motion.p>
          <svg>
            <motion.path variants={curve} initial="initial" exit="exit" />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
