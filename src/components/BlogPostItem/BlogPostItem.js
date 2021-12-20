import React from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';
import Image from 'next/image';

import { Stack } from '@chakra-ui/react';

import slugify from '../../utils/slugify';

import { AuthorDisplay } from '../AuthorDisplay';

import * as classes from './BlogPostItem.module.css';

const BlogPostItem = ({ post, feature = false }) => {
  const { author, date, coverImage, subtitle, title } = post.frontmatter;
  return (
    <Stack>
      <Link to={`/blog/${slugify(title)}`} className={classes.container}>
        <a>
          <Image
            alt={title}
            src={coverImage}
            className={
              feature ? classes.featureImageContainer : classes.imageContainer
            }
          />
        </a>
      </Link>
      <main>
        <Link to={`/blog/${slugify(title)}`} style={{ textDecoration: 'none' }}>
          <h2 className={classes.title}>{title}</h2>
          <p className={classes.subtitle}>{subtitle}</p>
        </Link>
        <AuthorDisplay name={author} date={date} />
      </main>
    </Stack>
  );
};

BlogPostItem.propTypes = {
  post: PropTypes.shape({}),
  feature: PropTypes.bool,
};

export default BlogPostItem;
