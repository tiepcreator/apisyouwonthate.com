import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { Col, Row } from 'react-bootstrap';

import slugify from '../../utils/slugify';
import { CoverImage } from '../Image';
import { AuthorDisplay } from '../AuthorDisplay';

import * as classes from './BlogPostItem.module.css';

const BlogPostItem = ({ post, feature = false }) => {
  const { author, date, coverImage, subtitle, title } = post.frontmatter;
  return (
    <Col xs={12} sm={12} md={feature ? 12 : 6} lg={feature ? 12 : 4}>
      <Row>
        <Col xs={12} sm={12} md={12} lg={feature ? 8 : 12}>
          <Link to={`/blog/${slugify(title)}`} className={classes.container}>
            <a>
              <CoverImage
                alt={title}
                src={coverImage}
                className={
                  feature
                    ? classes.featureImageContainer
                    : classes.imageContainer
                }
              />
            </a>
          </Link>
        </Col>
        <Col>
          <main>
            <Link
              to={`/blog/${slugify(title)}`}
              style={{ textDecoration: 'none' }}
            >
              <h2 className={classes.title}>{title}</h2>
              <p className={classes.subtitle}>{subtitle}</p>
            </Link>
            <AuthorDisplay name={author} date={date} />
          </main>
        </Col>
      </Row>
    </Col>
  );
};

BlogPostItem.propTypes = {
  post: PropTypes.shape({}),
  feature: PropTypes.bool,
};

export default BlogPostItem;
