import * as React from 'react';
import ReactA, { useEffect, useState } from "react"
import { StaticImage } from "gatsby-plugin-image";
import {
    hero,
    bgImage,
    overlay,
    containerHero,
    herotext,
    heroShrink
} from "./hero.module.css";

const Hero = ({children}) => {
    

  const [shrink, setShrink] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 80)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      className={`${hero} ${shrink ? heroShrink : ""}`}
    >
      <div className={overlay}></div>

      <div className={herotext}>
        {children}
      </div>
    </section>
  )
}

export default Hero
