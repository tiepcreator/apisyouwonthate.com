import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import { MDXProvider } from '@mdx-js/react';

import { Footer, Header } from '../';
import classes from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <MDXProvider
      components={{
        // Or define component inline
        a: props => <a {...props} className={classes.mdxAnchor} />,
      }}
    >
      <Container fluid className={classes.baseGrid}>
        <Header />
        <div className={classes.container}>
          <main>{children}</main>
        </div>
        <Footer />
      </Container>
    </MDXProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
