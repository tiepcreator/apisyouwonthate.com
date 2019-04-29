import React from 'react';
import PropTypes from 'prop-types';
import { Location } from '@reach/router';

import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-mdx';
import { Container, Col, Row } from 'react-bootstrap';

import {
  AuthorDisplay,
  Colophon,
  CoverImage,
  Layout,
  SEO,
} from '../../components';
import classes from './Post.module.css';

const Post = ({ data, pageContext }) => {
  const { post, coverImageUrl } = data;

  const { coverImage, title, author, date } = post.frontmatter;

  return (
    <Location>
      {({ location }) => (
        <Layout>
          <SEO
            title={title}
            ogType="article"
            imageUrl={`${location.origin}${coverImageUrl.fixed.src}`}
          />
          {coverImage && (
            <Container fluid className={classes.coverImageContainer}>
              <Row noGutters>
                <Col>
                  <CoverImage src={coverImage} className={classes.coverImage} />
                </Col>
              </Row>
            </Container>
          )}
          <Container className={classes.post}>
            <Row>
              <Col lg={{ span: 10, offset: 1 }} xl={{ span: 8, offset: 2 }}>
                <div className={classes.metadata}>
                  <h2 className={classes.postTitle}>
                    {post.frontmatter.title}
                  </h2>
                  <AuthorDisplay
                    name={author}
                    date={date}
                    readTimeInMinutes={post.timeToRead}
                  />
                </div>
                <MDXRenderer>{post.code.body}</MDXRenderer>
              </Col>
            </Row>
            <Row>
              <Col>
                <Colophon />
              </Col>
            </Row>
          </Container>
        </Layout>
      )}
    </Location>
  );
};

Post.propTypes = {
  data: PropTypes.shape({}),
  pageContext: PropTypes.shape({}),
};

export const query = graphql`
  query($id: String!, $coverImage: String!) {
    post: mdx(id: { eq: $id }) {
      id
      code {
        body
        scope
      }
      timeToRead
      frontmatter {
        title
        author
        date
        coverImage
      }
    }
    coverImageUrl: imageSharp(fixed: { originalName: { eq: $coverImage } }) {
      fixed(width: 1200) {
        src
      }
    }
  }
`;

export default Post;
