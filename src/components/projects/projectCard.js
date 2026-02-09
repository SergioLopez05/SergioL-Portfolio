import * as React from 'react'

import * as styles from "./projectCard.module.css";

export default function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{project.title}</h3>

      <p className={styles.description}>{project.description}</p>

      <div className={styles.tech}>
        {project.technologies.map((tech, index) => (
          <span key={index} className={styles.techTag}>
            {tech}
          </span>
        ))}
      </div>

      <div className={styles.links}>
        <a href={project.github} target="_blank" rel="noreferrer">
          GitHub
        </a>

        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer">
            Demo
          </a>
        )}
      </div>
    </div>
  );
}
