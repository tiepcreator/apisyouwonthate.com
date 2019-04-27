import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-mdx';
import { Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

import { OutboundLink } from 'gatsby-plugin-google-analytics';

import { BlogPostItem, Layout, Image } from '../../components';
import { TwitterIcon, GitHubIcon } from '../../components/icons';

import classes from './AuthorPage.module.css';

const BookPage = ({ data }) => {
  const { author, posts } = data;

  const {
    github,
    instagram,
    name,
    photo,
    shortName,
    twitter,
  } = author.frontmatter;

  debugger;

  return (
    <Layout>
      <Helmet>
        <title>{name}</title>
      </Helmet>
      <section className={classes.about}>
        <Container>
          <Row>
            <Col>
              <h1>{name}</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <ul className={classes.socialLinks}>
                {instagram && (
                  <li>
                    <OutboundLink
                      href={`https://instagram.com/${instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {instagram}
                    </OutboundLink>
                  </li>
                )}
                {twitter && (
                  <li>
                    <OutboundLink
                      href={`https://twitter.com/${twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TwitterIcon /> {twitter}
                    </OutboundLink>
                  </li>
                )}
                {github && (
                  <li>
                    <OutboundLink
                      href={`https://github.com/${github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon /> {github}
                    </OutboundLink>
                  </li>
                )}
              </ul>
            </Col>
          </Row>
          <Row>
            <Col lg={8}>
              <MDXRenderer>{author.code.body}</MDXRenderer>
            </Col>
            <Col>
              <Image src={photo} alt={name} />
            </Col>
          </Row>

          {posts && posts.nodes && posts.nodes.length > 0 && (
            <React.Fragment>
              <Row className={classes.workHeader}>
                <Col>
                  <h2>Articles by {shortName || name}: </h2>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className={classes.postsContainer}>
                    {posts.nodes.map((post, idx) => {
                      return (
                        <article key={post.id} className={classes.article}>
                          <BlogPostItem post={post} feature={idx === 0} />
                        </article>
                      );
                    })}
                  </div>
                </Col>
              </Row>
            </React.Fragment>
          )}
        </Container>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!, $name: String!) {
    author: mdx(id: { eq: $id }) {
      id
      code {
        body
        scope
      }
      frontmatter {
        github
        instagram
        name
        photo
        shortName
        twitter
      }
    }
    posts: allMdx(
      filter: { frontmatter: { type: { eq: "blog" }, author: { eq: $name } } }
    ) {
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
          title
          subtitle
        }
      }
    }
  }
`;

export default BookPage;
