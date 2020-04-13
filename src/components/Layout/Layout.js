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
        // eslint-disable-next-line jsx-a11y/anchor-has-content
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
