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
            <h3>Backend</h3>

            <div className={imageGrid}>
              <StaticImage
                src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/csharp.png"
                alt="csharp"
                placeholder="blurred"
              />

              <StaticImage
                src="https://freesvg.org/img/1643312603cpp.png"
                alt="c++"
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
            <h3>Frameworks</h3>
            <div className={imageGrid}>
              <StaticImage
                src="../../images/net_core-removebg-preview.png"
                alt=".net"
                placeholder="blurred"
              />

              <StaticImage
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1280px-React.svg.png"
                alt="react"
                placeholder="blurred"
              />

              <StaticImage
                src="https://www.pontia.tech/wp-content/uploads/2025/06/que-es-angular.png"
                alt="angular"
                placeholder="blurred"
              />

              <StaticImage
                src="https://www.mindrops.com/images/nodejs-image.webp"
                alt="nodejs"
                placeholder="blurred"
              />
            </div>
          </div>

          <div className={card}>
            <h3>Other knowledge</h3>
            <div className={imageGrid}>
              <StaticImage
                src="https://www.ezcomsoftware.com/wp-content/uploads/2018/03/API-EDI.png"
                alt="api"
                placeholder="blurred"
              />

              <StaticImage
                src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png"
                alt="sql"
                placeholder="blurred"
              />

              <StaticImage
                src="https://upload.wikimedia.org/wikipedia/commons/0/03/Git_format.png"
                alt="git"
                placeholder="blurred"
              />
{/* 
              <StaticImage
                src="https://media.lex.dk/media/60707/standard_js.png"
                alt="javascript"
                placeholder="blurred"
              /> */}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
