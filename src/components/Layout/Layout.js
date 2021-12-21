import React from 'react';
import PropTypes from 'prop-types';

import { MDXProvider } from '@mdx-js/react';

import { Footer, Header } from '../';
import { Box } from '@chakra-ui/react';

const Layout = ({ children }) => {
  return (
    <MDXProvider>
      <Box width="100vw">
        <Header />
        <main>{children}</main>
        <Footer />
      </Box>
    </MDXProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
