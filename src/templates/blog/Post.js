import React from 'react';
import PropTypes from 'prop-types';

import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-mdx';
import { Helmet } from 'react-helmet';

// bootstrap
import { Container, Col, Row } from 'react-bootstrap';

import Layout from '../../components/layout';
import { Colophon } from '../../components/Colophon';

import classes from './Post.module.css';
import AuthorDisplay from '../../components/AuthorDisplay/AuthorDisplay';
import { CoverImage } from '../../components/Image';

const Post = ({ data, pageContext }) => {
  const post = data.mdx;

  const { coverImage, title, author, date } = post.frontmatter;

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
      </Helmet>
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
              <h2 className={classes.postTitle}>{post.frontmatter.title}</h2>
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
  );
};

Post.propTypes = {
  data: PropTypes.shape({}),
  pageContext: PropTypes.shape({}),
};

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
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
  }
`;

export default Post;
