import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import classes from './Header.module.css';
console.log('classes are', classes);

const Header = ({ siteTitle }) => (
  <header>
      <h1 className={classes.title}>
        <Link to="/">
          {`APIs You Won't Hate`}
        </Link>
      </h1>
      <nav>
        <Link to="/books" className={classes.link}>Books</Link>
        <Link to="/blog" className={classes.link}>Blog</Link>
        <Link to="/videos" className={classes.link}>Videos</Link>
        <Link to="/consulting" className={classes.link}>Consulting</Link>
        <Link to="/community" className={classes.link}>Community</Link>
      </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
