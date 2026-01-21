"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./FeaturedWork.module.scss";

type ProjectData = {
  title1: string;
  title2: string;
  src: string;
  href: string;
};

type ProjectProps = {
  project: ProjectData;
};

export const Project = ({ project }: ProjectProps) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Link
      href={project.href}
      className={styles.project}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <p>{project.title1}</p>
      <motion.div
        variants={anim}
        animate={isActive ? "open" : "closed"}
        className={styles.imgContainer}
      >
        <img src={project.src} alt={`${project.title1} ${project.title2}`} />
      </motion.div>
      <p>{project.title2}</p>
    </Link>
  );
};

const anim = {
  initial: { width: 0 },
  open: { width: "auto", transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] } },
  closed: { width: 0 },
};