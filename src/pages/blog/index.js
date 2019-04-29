import React from 'react';
import { graphql } from 'gatsby';

// bootstrap
import { Container, Col, Row } from 'react-bootstrap';

import { BlogPostItem, Layout, SEO } from '../../components';

import classes from './BlogPage.module.css';

const BlogPage = ({ data }) => {
  // sort posts by date
  const posts = data.allMdx.nodes.sort((a, b) => {
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
  });

  return (
    <Layout>
      <SEO title="Blog" />
      <Container className={classes.container}>
        <Row>
          <Col>
            <div className={classes.postsContainer}>
              {posts.map((post, idx) => {
                return (
                  <article key={post.id} className={classes.article}>
                    <BlogPostItem post={post} feature={idx === 0} />
                  </article>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default BlogPage;

export const query = graphql`
  {
    allMdx(filter: { frontmatter: { type: { eq: "blog" } } }) {
      nodes {
        id
        code {
          body
          scope
        }
        frontmatter {
          coverImage
          date
          author
          title
          subtitle
        }
      }
    }
  }
`;
