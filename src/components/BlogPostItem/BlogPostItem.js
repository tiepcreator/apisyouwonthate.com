import React from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';
import Image from 'next/image';

import { Heading, Stack } from '@chakra-ui/react';

import slugify from '../../utils/slugify';

import { AuthorDisplay } from '../AuthorDisplay';

import * as classes from './BlogPostItem.module.css';

const BlogPostItem = ({ post, feature = false }) => {
  const { author, date, coverImage, subtitle, title } = post.frontmatter;

  const postUrl = `/blog/${post.slug}`;
  return (
    <Stack>
      <Link href={postUrl} className={classes.container}>
        <a>
          <Image
            alt={title}
            src={`/images/posts/${coverImage}`}
            width="400px"
            height="250px"
            objectFit="cover"
            className={
              feature ? classes.featureImageContainer : classes.imageContainer
            }
          />
        </a>
      </Link>
      <main>
        <Link href={postUrl} style={{ textDecoration: 'none' }}>
          <a>
            <Heading as="h2" size="lg" className={classes.title}>
              {title}
            </Heading>
          </a>
        </Link>
        <AuthorDisplay name={author} date={date} />
        <p className={classes.subtitle}>{subtitle}</p>
      </main>
    </Stack>
  );
};

BlogPostItem.propTypes = {
  post: PropTypes.shape({}),
  feature: PropTypes.bool,
};

export default BlogPostItem;
