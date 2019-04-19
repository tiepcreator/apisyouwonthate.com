import React from 'react';
import { graphql } from 'gatsby';

// bootstrap
import { Container, Col, Row } from 'react-bootstrap';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import { BlogPostItem } from '../../components/BlogPostItem';

import classes from './BlogPage.module.css';

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <Container className={classes.container}>
      <Row>
        <Col>
          <div className={classes.postsContainer}>
            {data.allMdx.nodes.map((post, idx) => {
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
          slug
          title
        }
      }
    }
  }
`;
