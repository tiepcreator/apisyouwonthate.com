import React from 'react';
import { Link, graphql } from 'gatsby';

// bootstrap
import { Container, Col, Row } from 'react-bootstrap';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import { FullWidthFeature } from '../../components/FullWidthFeature';

import classes from './BlogPage.module.css';

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <Container className={classes.container}>
      <Row>
        <Col>
          {data.allMdx.nodes.map((node, idx) => {
            return (
              <article key={node.id}>
                <Link to={`blog/${node.frontmatter.slug}`}>
                  {idx === 0 ? (
                    <FullWidthFeature
                      image={node.frontmatter.coverImage}
                      authorName={node.frontmatter.author}
                      date={node.frontmatter.date}
                      title={node.frontmatter.title}
                      subtitle={node.frontmatter.subtitle || node.excerpt}
                    />
                  ) : (
                    <h1>Hay</h1>
                  )}
                </Link>
              </article>
            );
          })}
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
