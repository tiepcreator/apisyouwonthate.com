import React from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';

import {
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  useColorModeValue,
} from '@chakra-ui/react';

import { Overline } from '..';
import slugify from '../../utils/slugify';

const FeaturedBlogPost = ({ post }) => {
  const { author, coverImage, subtitle, title } = post.frontmatter;

  const blogPostUrl = `/blog/${slugify(post.slug)}`;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} width="100%">
      <Stack spacing={4}>
        <Overline>Featured Article</Overline>
        <Heading as="h1">
          <Link href={blogPostUrl}>
            <a>{title}</a>
          </Link>
        </Heading>
        <Text>
          written by{' '}
          <Link href={`/authors/${slugify(author)}`} passHref>
            <Text as="a" color="green.600" fontSize={'md'}>
              {author}
            </Text>
          </Link>
        </Text>
        <Text color={'gray.500'} fontSize={'lg'}>
          {subtitle}
        </Text>
        <Stack
          spacing={4}
          divider={
            <StackDivider
              borderColor={useColorModeValue('gray.100', 'gray.700')}
            />
          }
        >
          <Link href={blogPostUrl} passHref>
            <Text
              as="a"
              color="green.600"
              fontWeight={'bold'}
              _hover={{ color: 'green.400' }}
            >
              Read more &rarr;
            </Text>
          </Link>
        </Stack>
      </Stack>
      <Link justifySelf="end" href={blogPostUrl}>
        <a>
          <Image
            rounded={'md'}
            alt={title}
            src={`/images/posts/${coverImage}`}
            width="100%"
            height="100%"
            objectFit="cover"
          />
        </a>
      </Link>
    </SimpleGrid>
  );
};

FeaturedBlogPost.propTypes = {
  post: PropTypes.shape({}),
};

export default FeaturedBlogPost;
