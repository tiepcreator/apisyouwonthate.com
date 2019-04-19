import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { Col, Row } from 'react-bootstrap';

import { CoverImage } from '../Image';
import { AuthorDisplay } from '../AuthorDisplay';

import classes from './BlogPostItem.module.css';

const BlogPostItem = ({ post, feature = false }) => {
  const { author, date, coverImage, subtitle, slug, title } = post.frontmatter;
  return (
    <Link to={`/blog/${slug}`} className={classes.container}>
      <Row>
        <Col sm={12} xs={12} md={12} lg={feature ? 8 : 12}>
          <CoverImage
            src={coverImage}
            className={
              feature ? classes.featureImageContainer : classes.imageContainer
            }
          />
        </Col>
        <Col>
          <main>
            <h2 className={classes.title}>{title}</h2>
            <p className={classes.subtitle}>{subtitle}</p>
            <AuthorDisplay name={author} date={date} />
          </main>
        </Col>
      </Row>
    </Link>
  );
};

BlogPostItem.propTypes = {
  post: PropTypes.shape({}),
  feature: PropTypes.bool,
};

export default BlogPostItem;
