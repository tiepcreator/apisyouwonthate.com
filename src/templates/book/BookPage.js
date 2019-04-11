import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/layout';
import { Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

import classes from './BookPage.module.css';

const BookPage = ({ data }) => {
  const book = data.mdx;

  return (
    <Layout>
      <Helmet>
        <title>{book.frontmatter.title}</title>
      </Helmet>
      <Container>
        <Row>
          <Col>
            <h2>{book.frontmatter.title}</h2>
            <MDXRenderer>{book.code.body}</MDXRenderer>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      id
      code {
        body
        scope
      }
      frontmatter {
        title
      }
    }
  }
`;

export default BookPage;
