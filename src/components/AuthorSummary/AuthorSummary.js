import React from 'react';

import Image from 'next/image';

import { Box, Button, Heading, Link, Stack, Text } from '@chakra-ui/react';

import slugify from '../../utils/slugify';
import { GitHubIcon, TwitterIcon } from '../icons';

const AuthorSummary = ({ author }) => {
  if (!author) return null;

  const { consultingUrl, github, name, photo, shortBio, shortName, twitter } =
    author.frontmatter;

  const authorPageUrl = `/authors/${slugify(author.slug)}`;

  return (
    <Stack>
      <Box>
        {photo && (
          <Link href={authorPageUrl} width="100%">
            <Image
              src={`/images/authors/${photo}`}
              alt={name}
              width="400px"
              height="400px"
              objectFit="cover"
            />
          </Link>
        )}
        <Heading
          as="h2"
          mt="-7rem"
          mb="3rem"
          padding="1rem"
          zIndex={4}
          position={'relative'}
          background={'green.400'}
          size={'md'}
          color={'white'}
        >
          <Link href={authorPageUrl} display="inline-block">
            {name}
          </Link>
        </Heading>
      </Box>
      {github && (
        <Stack direction="row" alignItems="center">
          <GitHubIcon />
          <a
            href={`https://github.com/${github}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {github}
          </a>
        </Stack>
      )}
      {twitter && (
        <Link
          href={`https://twitter.com/${twitter}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Stack direction="row" alignItems="center">
            <TwitterIcon />
            {twitter}
          </Stack>
        </Link>
      )}
      {consultingUrl && (
        <Button>
          <a href={consultingUrl} target="_blank" rel="noopener noreferrer">
            Hire {shortName || 'them'}
          </a>
        </Button>
      )}
      <Text>{shortBio}</Text>
    </Stack>
  );
};

export default AuthorSummary;
