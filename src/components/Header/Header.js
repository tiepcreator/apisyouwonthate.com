import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import * as classes from './Header.module.css';

const Header = () => (
  <div className={classes.background}>
    <Container>
      <Row>
        <Col>
          <header className={classes.header}>
            <h1 className={classes.title}>
              <Link href="/">
                <a>
                  <img
                    className={`img-responsive ${classes.headerImage}`}
                    src="/img/apis-you-wont-hate-dark.png"
                    alt="APIs You Won't Hate"
                  />
                </a>
              </Link>
            </h1>
            <nav className={classes.navbar}>
              <Link href="/books" className={classes.link}>
                <a>Books</a>
              </Link>
              <Link href="/blog" className={classes.link}>
                <a>Blog</a>
              </Link>
              <Link href="/jobs" className={classes.link}>
                <a>Jobs</a>
              </Link>
              <Link href="/podcast" className={classes.link}>
                <a>Podcast</a>
              </Link>
              <Link href="/videos" className={classes.link}>
                <a>Videos</a>
              </Link>
              <a
                href="https://calendly.com/philsturgeon"
                className={classes.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Consulting
              </a>
              <Link href="/community" className={classes.link}>
                <a>Community</a>
              </Link>
            </nav>
          </header>
        </Col>
      </Row>
    </Container>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
