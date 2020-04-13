import React from 'react';
import { graphql } from 'gatsby';
import { Container, Col, Row } from 'react-bootstrap';

import { AuthorSummary, Layout, SEO } from '../../components';
import classes from './AuthorsPage.module.css';

const AuthorsPage = ({ data }) => {
  const { authors } = data;

  const staffAuthors = authors.nodes.filter(
    (author) => !!author.frontmatter.isStaff
  );
  const contributingAuthors = authors.nodes.filter(
    (author) => !author.frontmatter.isStaff
  );

  return (
    <Layout>
      <SEO
        title="Authors"
        keywords={['apis', 'api', 'rest', 'rpc', 'graphql']}
      />
      <div className={classes.background}>
        <Container className={classes.container}>
          <Row>
            <Col>
              <h1>Staff Authors</h1>
              <p>{"The team behind APIs You Won't Hate"}</p>
            </Col>
          </Row>
          <Row>
            {staffAuthors.map((author, i) => (
              <AuthorSummary key={author.id} author={author} />
            ))}
          </Row>

          <Row>
            <Col>
              <h1>Contributing Authors</h1>
              <p>
                {
                  'Thank you for the support from our fantastic community of contributors:'
                }
              </p>
            </Col>
          </Row>
          <Row>
            {contributingAuthors.map((author, i) => (
              <AuthorSummary key={author.id} author={author} />
            ))}
          </Row>
          <br />
          <br />
          <br />
        </Container>
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    authors: allMdx(filter: { frontmatter: { type: { eq: "author" } } }) {
      nodes {
        id
        frontmatter {
          name
          shortName
          shortBio
          isStaff
          photo
          twitter
          instagram
          github
        }
      }
    }
  }
`;

export default AuthorsPage;
