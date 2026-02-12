import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image";
import projects from "../../data/projects.js";
import ProjectCard from "./projectCard.js";
import * as styles from "./projectCard.module.css";

export default function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        
        <h2 className={styles.sectionTitle}>Projects</h2>
        <div className={styles.sectionTitle}>   
        <StaticImage
                src="https://storage.needpix.com/rsynced_images/hammer-1294008_1280.png"
                alt="hammer"
                placeholder="blurred"
                width={70}
                height={70}
                margin={20}
              />
        <p>This section might be under construction.</p>
        </div>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}
