import * as React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import { about, container, sectionTitle, description, highlights, card, iconImage, imageGrid } from "./about.module.css";

export default function About() {
  return (
    <section className={about} id="about">
      <div className={container}>

        <h2 className={sectionTitle}>About Me</h2>

        <p className={description}>
          I'm a Computer Science student who loves to learn and keep up with new technologies.
          I'm looking forward to learn and develop my skills as a professional in multiple areas.
        </p>

        <div className={highlights}>

          <div className={card}>
            <h3>Coding Languages</h3>

            <div className={imageGrid}>
              <StaticImage
                src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/csharp.png"
                alt="csharp"
                placeholder="blurred"
              />

              <StaticImage
                src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/java.png"
                alt="java"
                placeholder="blurred"
              />

              <StaticImage
                src="https://upload.wikimedia.org/wikipedia/commons/3/31/Python-logo.png"
                alt="python"
                placeholder="blurred"
              />

              <StaticImage
                src="https://media.lex.dk/media/60707/standard_js.png"
                alt="javascript"
                placeholder="blurred"
              />
            </div>
          </div>

          <div className={card}>
            <h3>Database Design</h3>
            <div className={imageGrid}>
              <StaticImage
                src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/csharp.png"
                alt="csharp"
                placeholder="blurred"
              />

              <StaticImage
                src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/java.png"
                alt="java"
                placeholder="blurred"
              />

              <StaticImage
                src="https://upload.wikimedia.org/wikipedia/commons/3/31/Python-logo.png"
                alt="python"
                placeholder="blurred"
              />

              <StaticImage
                src="https://media.lex.dk/media/60707/standard_js.png"
                alt="javascript"
                placeholder="blurred"
              />
            </div>
          </div>

          <div className={card}>
            <h3>Buenas Prácticas</h3>
            <div className={imageGrid}>
              <StaticImage
                src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/csharp.png"
                alt="csharp"
                placeholder="blurred"
              />

              <StaticImage
                src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/java.png"
                alt="java"
                placeholder="blurred"
              />

              <StaticImage
                src="https://upload.wikimedia.org/wikipedia/commons/3/31/Python-logo.png"
                alt="python"
                placeholder="blurred"
              />

              <StaticImage
                src="https://media.lex.dk/media/60707/standard_js.png"
                alt="javascript"
                placeholder="blurred"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
