import React from 'react';
import { graphql } from 'gatsby';
import { Container, Col, Row } from 'react-bootstrap';

import { BookFeature, Layout, SEO } from '../../components';
import classes from './BooksPage.module.css';

const BooksPage = ({ data }) => {
  const { books } = data;
  return (
    <Layout>
      <SEO title="Books" keywords={['apis', 'api', 'rest', 'rpc', 'graphql']} />
      <div className={classes.background}>
        <Container className={classes.container}>
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
      </div>
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
          description
          coverImage
        }
      }
    }
  }
`;
