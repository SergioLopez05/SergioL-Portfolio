import * as React from 'react'
import { Link } from 'gatsby'
import {
  navbar,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  
} from './layout.module.css'

import "../../styles/variables.module.css"

const Layout = ({ pageTitle, children }) => {
  return (
    
    <div className={navbar}>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          {/* <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li> */}

          <li className={navLinkItem}>
            <Link to="#projects" className={navLinkText}>
              Projects
            </Link>
          </li>

        </ul>
      </nav>
      <main>
        <h1 className={heading}> {pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout