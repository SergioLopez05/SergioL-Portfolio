import * as React from 'react'
import Layout from '../components/layout/layout'
import Hero from "../components/hero/hero";
import * as Styles from "../styles/global.css"
import About from "../components/about/about"
import Projects from "../components/projects/projects"
const IndexPage = () => {
  return (



<div className={Styles.body}>
      <Layout />
      <Hero>  
        <h1 >Welcome to My Portfolio</h1>
        <h2>I'm, Sergio Lopez Venegas</h2>
        </Hero>

      <About />
      <Projects />
    </  div>
    
  )
}




export const Head = () => <title>Home Page</title>

export default IndexPage