import React from 'react';
import { graphql } from 'gatsby';

// boostrap stuff
import Container from 'react-bootstrap/Container';

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
              <React.Fragment>
                <BookFeature key={book.id} book={book} />
                {i < books.nodes.length - 1 && (
                  <div className={classes.bookSpacer} />
                )}
              </React.Fragment>
            );
          })}
        </Container>
      </div>
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
