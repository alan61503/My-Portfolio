"use client";

import styles from "./FeaturedWork.module.scss";
import { Project } from "./Project";

const projects = [
  { title1: "Apex", title2: "Motion", src: "/images/apex.png", href: "/project" },
  { title1: "PDF", title2: "Splitter", src: "/images/splitter.png", href: "/project" },
  { title1: "Trust", title2: "Guard", src: "/images/trust.png", href: "/project" },
  { title1: "Digital", title2: "Twin", src: "/images/digital.png", href: "/project" },
  { title1: "SAP", title2: "Vibeathon", src: "/images/SAP.png", href: "/project" },
];

export const FeaturedWork = () => {
  return (
    <section className={styles.main}>
      <div className={styles.gallery}>
        <p className={styles.heading}>Featured Work</p>
        {projects.map((project) => (
          <Project key={`${project.title1}-${project.title2}`} project={project} />
        ))}
      </div>
    </section>
  );
};