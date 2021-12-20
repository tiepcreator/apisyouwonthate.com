import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { Stack } from '@chakra-ui/react';

import slugify from '../../utils/slugify';
import { TypeLabel } from '..';
import Image from 'next/image';

import * as classes from './FeaturedBlogPost.module.css';

const FeaturedBlogPost = ({ post }) => {
  const { coverImage, subtitle, title } = post.frontmatter;
  return (
    <Stack>
      <Link to={`/blog/${slugify(title)}`} className={classes.container}>
        <a>
          <Image
            alt={title}
            src={coverImage}
            className={classes.featureImageContainer}
          />
          <main className={classes.meta}>
            <TypeLabel>Article</TypeLabel>
            <h2 className={classes.title}>{title}</h2>
            <p className={classes.subtitle}>{subtitle}</p>
          </main>
        </a>
      </Link>
    </Stack>
  );
};

FeaturedBlogPost.propTypes = {
  post: PropTypes.shape({}),
};

export default FeaturedBlogPost;
