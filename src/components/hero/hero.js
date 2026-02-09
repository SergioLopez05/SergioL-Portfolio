import * as React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import {hero,
bgImage,
overlay,
containerHero,
herotext
}  from "./hero.module.css";



// ../images/pexels-noval-gani-2149253671-36054393.jpg

// export default function Hero() {
//   return (
//     <section className={styles.hero}>
      
//       <StaticImage
//         src="../../images/pexels-noval-gani-2149253671-36054393.jpg"
//         alt="Hero background"
//         className={styles.bgImage}
//         layout="fullWidth"
//         placeholder="blurred"
//       />

//       <div className={styles.overlay}></div>

//       <div className={styles.containerHero}>
//         {/* Tu contenido */ "aquí va el texto o los elementos que quieras mostrar sobre la imagen"}
//       </div>
//     </section>
//   );
// }

const Hero = ({ children }) => {
  return (
    <section className={hero}>
      
      <StaticImage
        src="../../images/hero-bg.jpg"
        alt="Hero background"
        className={bgImage}
        layout="fullWidth"
        placeholder="blurred"
      />

      <div className={overlay}></div>

      <div className={herotext}>
        
        {children}
      </div>
    </section>
  )
}

export default Hero
