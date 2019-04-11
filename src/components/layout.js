import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import Container from 'react-bootstrap/Container';

import { Header } from './Header';
import { Footer } from './Footer';

import classes from './layout.module.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Container fluid className={classes.baseGrid}>
      <Header />
      <div className={classes.container}>
        <main>{children}</main>
      </div>
      <Footer />
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
