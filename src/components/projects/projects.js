import * as React from 'react'

import projects from "../../data/projects.js";
import ProjectCard from "./projectCard.js";
import * as styles from "./projectCard.module.css";

export default function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        
        <h2 className={styles.sectionTitle}>Proyectos</h2>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}
