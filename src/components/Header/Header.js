import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';
import React from 'react';

import { Box, Container, Stack } from '@chakra-ui/react';

import * as classes from './Header.module.css';

const Header = () => (
  <Box className={classes.background} padding="1rem 0" color="white">
    <Container maxW="7xl">
      <Stack direction="row">
        <header className={classes.header}>
          <Link href="/">
            <a>
              <Image
                src="/img/apis-you-wont-hate-dark.png"
                alt="APIs You Won't Hate"
                width="130px"
                height="60px"
              />
            </a>
          </Link>
          <Stack as="nav" className={classes.navbar} direction="row">
            <Link href="/books">
              <a>Books</a>
            </Link>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
            <Link href="/jobs">
              <a>Jobs</a>
            </Link>
            <Link href="/podcast">
              <a>Podcast</a>
            </Link>
            <Link href="/videos">
              <a>Videos</a>
            </Link>
            <a
              href="https://calendly.com/philsturgeon"
              target="_blank"
              rel="noopener noreferrer"
            >
              Consulting
            </a>
            <Link href="/community">
              <a>Community</a>
            </Link>
          </Stack>
        </header>
      </Stack>
    </Container>
  </Box>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
