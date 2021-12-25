import React from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';
import Image from 'next/image';

import { Heading, Stack } from '@chakra-ui/react';

import { AuthorDisplay } from '../AuthorDisplay';

const BlogPostItem = ({ post }) => {
  const { author, date, coverImage, subtitle, title } = post.frontmatter;

  const postUrl = `/blog/${post.slug}`;
  return (
    <Stack maxW={'calc(100vw - 32px)'}>
      <Link href={postUrl}>
        <a>
          <Image
            alt={title}
            src={`/images/posts/${coverImage}`}
            width="400px"
            height="250px"
            objectFit="cover"
          />
        </a>
      </Link>
      <main>
        <Link href={postUrl} style={{ textDecoration: 'none' }}>
          <a>
            <Heading as="h2" size="lg">
              {title}
            </Heading>
          </a>
        </Link>
        <AuthorDisplay name={author} date={date} />
        <p>{subtitle}</p>
      </main>
    </Stack>
  );
};

BlogPostItem.propTypes = {
  post: PropTypes.shape({}),
};

export default BlogPostItem;
