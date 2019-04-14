import React from 'react';
import PropTypes from 'prop-types';

import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-mdx';
import { Helmet } from 'react-helmet';

// bootstrap
import { Container, Col, Row } from 'react-bootstrap';

import Layout from '../../components/layout';

import classes from './Post.module.css';
import AuthorDisplay from '../../components/AuthorDisplay/AuthorDisplay';

const Post = ({ data, pageContext }) => {
  const post = data.mdx;

  return (
    <Layout>
      <Helmet>
        <title>{post.frontmatter.title}</title>
      </Helmet>
      <Container className={classes.post}>
        <Row>
          <Col lg={{ span: 10, offset: 1 }} xl={{ span: 8, offset: 2 }}>
            <div className={classes.metadata}>
              <h2 className={classes.postTitle}>{post.frontmatter.title}</h2>
              <AuthorDisplay
                name={post.frontmatter.author}
                date={post.frontmatter.date}
                readTimeInMinutes={post.timeToRead}
              />
            </div>
            <MDXRenderer>{post.code.body}</MDXRenderer>
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
      }
    }
  }
`;

export default Post;
