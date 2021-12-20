import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '@chakra-ui/react';

import { MDXProvider } from '@mdx-js/react';

import { Footer, Header } from '../';

const Layout = ({ children }) => {
  return (
    <MDXProvider>
      <Header />
      <main>{children}</main>
      <Footer />
    </MDXProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
