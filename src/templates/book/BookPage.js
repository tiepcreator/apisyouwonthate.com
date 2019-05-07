import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-mdx';
import { Col, Container, Row } from 'react-bootstrap';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { map, size } from 'lodash';

import { Button, Image, Layout, SEO } from '../../components';
import classes from './BookPage.module.css';

const BookPage = ({ data }) => {
  const book = data.mdx;

  const {
    amazonLinks,
    coverImage,
    description,
    leanpubLinks,
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
                {map(leanpubLinks, ({ url, label }) => (
                  <OutboundLink
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button>{label}</Button>
                  </OutboundLink>
                ))}
                {size(amazonLinks) > 0 && (
                  <small>
                    <em>
                      Also available on these sites, but a much bigger chunk
                      goes in their pocket:
                    </em>
                  </small>
                )}
                {map(amazonLinks, ({ url, label }) => (
                  <OutboundLink
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button secondary>{label}</Button>
                  </OutboundLink>
                ))}
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
            <Col lg={{ span: 8, offset: 1 }}>
              <h2>About the book</h2>
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
        amazonLinks {
          url
          label
        }
        coverImage
        description
        leanpubLinks {
          url
          label
        }
        subtitle
        title
      }
    }
  }
`;

export default BookPage;
