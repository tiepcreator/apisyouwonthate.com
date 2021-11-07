import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Col, Container, Row } from 'react-bootstrap';

import { AuthorSummary, BlogPostItem, Layout, Seo } from '../../components';

import * as classes from './AuthorPage.module.css';

const BookPage = ({ data }) => {
  const { author, posts } = data;

  const { name, shortName } = author.frontmatter;

  return (
    <Layout>
      <Seo title={name} />
      <section className={classes.about}>
        <Container>
          <Row>
            <AuthorSummary author={author} />
            <Col>
              <MDXRenderer>{author.body}</MDXRenderer>
            </Col>
          </Row>

          {posts && posts.nodes && posts.nodes.length > 0 && (
            <React.Fragment>
              <Row className={classes.workHeader}>
                <Col>
                  <h2>Articles by {shortName || name} </h2>
                </Col>
              </Row>
              <Row>
                {posts.nodes.map((post, idx) => {
                  return (
                    <BlogPostItem
                      key={post.id}
                      post={post}
                      feature={idx === 0}
                    />
                  );
                })}
              </Row>
            </React.Fragment>
          )}
        </Container>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String!, $name: String!) {
    author: mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        consultingUrl
        github
        instagram
        name
        photo
        shortName
        twitter
      }
    }
    posts: allMdx(
      filter: { frontmatter: { type: { eq: "blog" }, author: { eq: $name } } }
    ) {
      nodes {
        id
        body
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

export default BookPage;
