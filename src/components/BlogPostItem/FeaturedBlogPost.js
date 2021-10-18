import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { Col, Row } from 'react-bootstrap';

import slugify from '../../utils/slugify';
import { TypeLabel } from '..';
import { CoverImage } from '../Image';

import * as classes from './FeaturedBlogPost.module.css';

const FeaturedBlogPost = ({ post }) => {
  const { coverImage, subtitle, title } = post.frontmatter;
  return (
    <Row>
      <Col xs={12} sm={12} md={12} lg={12} style={{ paddingLeft: 0 }}>
        <Link to={`/blog/${slugify(title)}`} className={classes.container}>
          <CoverImage
            alt={title}
            src={coverImage}
            className={classes.featureImageContainer}
          />
          <main className={classes.meta}>
            <TypeLabel>Article</TypeLabel>
            <h2 className={classes.title}>{title}</h2>
            <p className={classes.subtitle}>{subtitle}</p>
          </main>
        </Link>
      </Col>
    </Row>
  );
};

FeaturedBlogPost.propTypes = {
  post: PropTypes.shape({}),
};

export default FeaturedBlogPost;
