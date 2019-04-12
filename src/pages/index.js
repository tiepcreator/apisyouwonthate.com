import React from 'react';
import { graphql } from 'gatsby';

// boostrap stuff
import { Col, Container, Row } from 'react-bootstrap';

import { BookFeature } from '../components/BookFeature';
import Layout from '../components/layout';
import SEO from '../components/seo';

import classes from './Home.module.css';

const IndexPage = ({ data }) => {
  const { books } = data;

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

      <div className={classes.books}>
        <Container>
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
        </Container>
      </div>

      <Container className={classes.about}>
        <Row>
          <Col xl={{ span: 8, offset: 2 }}>
            <h2>About this Community</h2>
            <p>
              API development is a topic very close to Phils heart. APIs You
              Won't Hate started out as a book, with Phil pouring everything API
              related he knew, all the problems he faced, all the design
              decisions he wish he thought about earlier.
            </p>
            <p>
              Since the book, Phil has continued to learn and grow, thanks to
              new experiences, and new conversations with really smart people.
              Learning never stops, and the Slack channel that grew from the
              book subscribers and their friends has become home to the largest
              API chat group on the internet.
            </p>
            <p>
              APIs You Won't Hate is dedicated to learning, writing, sharing
              ideas and bettering understanding of API practices. Together we
              can erradicate APIs we hate.
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

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

export default IndexPage;
