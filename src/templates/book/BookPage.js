import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Col, Container, Row } from 'react-bootstrap';
import { map, size } from 'lodash';

import { Button, Image, Layout, Seo, ShopifyBuyButton } from '../../components';
import * as classes from './BookPage.module.css';

const BookPage = ({ data }) => {
  const book = data.mdx;

  const {
    amazonLinks,
    coverImage,
    description,
    leanpubLinks,
    shopifyData,
    subtitle,
    title,
  } = book.frontmatter;

  return (
    <Layout>
      <Seo title={title} ogType="article" />
      <section className={classes.top}>
        <Container>
          <div className={classes.container}>
            <Row>
              <Col lg={6}>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <p>{description}</p>
                <div className={classes.shopifyContainer}>
                  {map(shopifyData, ({ productId, label }) => (
                    <div
                      className={classes.shopifyButton}
                      key={`shopify-button-${productId}`}
                    >
                      <ShopifyBuyButton label={label} productId={productId} />
                    </div>
                  ))}
                </div>

                {map(leanpubLinks, ({ url, label }, idx) => (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={`leanpub-link-${idx}`}
                  >
                    <Button>{label}</Button>
                  </a>
                ))}
                {size(amazonLinks) > 0 && (
                  <small>
                    <em>
                      Also available on these sites, but a much bigger chunk
                      goes in their pocket:
                    </em>
                  </small>
                )}
                {map(amazonLinks, ({ url, label }, idx) => (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={`amazon-link-${idx}`}
                  >
                    <Button secondary className={classes.subtleButton}>
                      {label}
                    </Button>
                  </a>
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
              <MDXRenderer>{book.body}</MDXRenderer>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
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
        shopifyData {
          label
          productId
        }
        subtitle
        title
      }
    }
  }
`;

export default BookPage;
