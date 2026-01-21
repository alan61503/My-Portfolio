"use client";

import styles from "./FeaturedWork.module.scss";
import { Project } from "./Project";

const projects = [
  { title1: "Apex", title2: "Motion", src: "/images/apex.png", href: "/work/apex-motion" },
  { title1: "PDF", title2: "Splitter", src: "/images/splitter.png", href: "/work/pdf-divider-smart-printing" },
  { title1: "Trust", title2: "Guard", src: "/images/trust.png", href: "/work/trust-guard-ai-browser-extension" },
  { title1: "Digital", title2: "Twin", src: "/images/digital.png", href: "/work/digital-twinning-electric-two-wheeler" },
  { title1: "SAP", title2: "Vibeathon", src: "/images/SAP.png", href: "/work/sap-vibeathon-event-registration-platform" },
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