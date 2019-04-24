import React from 'react';
import { graphql } from 'gatsby';

// bootstrap
import { Container, Col, Row } from 'react-bootstrap';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import { BookFeature } from '../../components/BookFeature';

import classes from './BooksPage.module.css';

const BooksPage = ({ data }) => {
  const { books } = data;
  return (
    <Layout>
      <SEO title="Books" keywords={['apis', 'api', 'rest', 'rpc', 'graphql']} />
      <Container className={classes.container}>
        <Row>
          <Col>
            <h1>{"Books we've written"}</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            {books.nodes.map((book, i) => {
              return (
                <React.Fragment key={book.id}>
                  <BookFeature book={book} />
                  {i < books.nodes.length - 1 && (
                    <div className={classes.bookSpacer} />
                  )}
                </React.Fragment>
              );
            })}
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default BooksPage;

export const query = graphql`
  {
    books: allMdx(filter: { frontmatter: { type: { eq: "book" } } }) {
      nodes {
        id
        frontmatter {
          title
          subtitle
          slug
          description
          coverImage
        }
      }
    }
  }
`;
