import Script from 'next/script';
import PropTypes from 'prop-types';

import { MDXProvider } from '@mdx-js/react';

import { Footer, Header } from '../';
import { Box } from '@chakra-ui/react';

const Layout = ({ children }) => {
  return (
    <MDXProvider>
      <Box width="100vw">
        <Script src="https://sdks.shopifycdn.com/buy-button/1.0.0/buybutton.js" />
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
