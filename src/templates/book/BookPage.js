import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-mdx';
import { Col, Container, Row } from 'react-bootstrap';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import { Button, Image, Layout, SEO } from '../../components';
import classes from './BookPage.module.css';

const BookPage = ({ data }) => {
  const book = data.mdx;

  const {
    buyLink,
    coverImage,
    description,
    subtitle,
    title,
  } = book.frontmatter;

  return (
    <Layout>
      <SEO title={title} ogType="article" />
      <section className={classes.top}>
        <Container>
          <div className={classes.container}>
            <Row>
              <Col lg={6}>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <p>{description}</p>
                {buyLink && (
                  <OutboundLink
                    href={buyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button>Preorder via Leanpub</Button>
                  </OutboundLink>
                )}
              </Col>
              <Col lg={1} />
              <Col>
                <div className={classes.smallCover}>
                  <Image src={coverImage} className={classes.smallCover} />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section className={classes.about}>
        <Container>
          <Row>
            <Col>
              <MDXRenderer>{book.code.body}</MDXRenderer>
            </Col>
          </Row>
        </Container>
      </section>
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
        buyLink
        coverImage
        description
        subtitle
        title
      }
    }
  }
`;

export default BookPage;
