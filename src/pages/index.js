import React from 'react';
import { graphql } from 'gatsby';

import { orderBy } from 'lodash';
import moment from 'moment';

// boostrap stuff
import { Col, Container, Row } from 'react-bootstrap';

import {
  CarbonAd,
  CoverImage,
  BookFeature,
  FeaturedBlogPost,
  FeaturedPodcast,
  Layout,
  NewsletterForm,
  Overline,
  Seo,
} from '../components';

import * as classes from './Home.module.css';

const findNewest = ({ posts, podcasts }) => {
  const [firstPost] = orderBy(
    posts,
    (post) => new Date(post.frontmatter.date),
    'desc'
  );

  const allpods = orderBy(
    podcasts,
    (podcast) => new Date(podcast.pubDate),
    'desc'
  );
  const [firstPod] = allpods;

  if (moment(firstPod.pubDate).isAfter(moment(firstPost.frontmatter.date))) {
    return {
      type: 'podcast',
      data: firstPod,
    };
  } else {
    return {
      type: 'post',
      data: firstPost,
    };
  }
};

const IndexPage = ({ data }) => {
  const { books, podcasts, posts } = data;

  const earliestItem = findNewest({
    posts: posts.nodes,
    podcasts: podcasts.nodes,
  });
  let featuredItem;

  switch (earliestItem.type) {
    case 'podcast':
      featuredItem = <FeaturedPodcast podcast={earliestItem.data} />;
      break;
    case 'post':
      featuredItem = <FeaturedBlogPost post={earliestItem.data} />;
      break;
    default:
      break;
  }

  return (
    <Layout>
      <Seo title="Home" keywords={[`gatsby`, `application`, `react`]} />

      <div className={classes.featured}>
        <Container>
          <Row>
            <Col>
              <Overline>Hot off the presses</Overline>
            </Col>
          </Row>
          <CarbonAd />
          {featuredItem}
        </Container>
      </div>
      <div className={classes.books}>
        <Container>
          {books.nodes.map((book, i) => {
            return (
              <React.Fragment key={book.frontmatter.title}>
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
              API development is a topic very close to Phil{"'"}s heart. APIs
              You Won't Hate started out as a book, with Phil pouring everything
              API related he knew, all the problems he faced, all the design
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
              APIs You Won{"'"}t Hate is dedicated to learning, writing, sharing
              ideas and bettering understanding of API practices. Together we
              can erradicate APIs we hate.
            </p>
          </Col>
        </Row>
      </Container>

      <div className={classes.newsletter}>
        <Container>
          <Row>
            <Col xl={{ span: 8, offset: 2 }}>
              <h2>Get the newsletter</h2>
              <NewsletterForm />
            </Col>
          </Row>
        </Container>
      </div>

      <Row noGutters className="align-items-stretch">
        <Col xs={12} className="d-block d-sm-block d-md-block d-lg-none">
          <CoverImage
            src="about-phil.jpg"
            alt="Phil speaking at a conference"
          />
        </Col>
        <Col>
          <div className={classes.aboutTeam}>
            <h2>About Phil Sturgeon</h2>
            <p>
              Since 2010 I've worked as a freelancer, consultant, Head of API,
              and CTO, for several API-centric technology startups.
            </p>
            <p>
              Previously at{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://venturebeat.com/2015/04/07/carpooling-startup-ride-launches-with-help-from-ubers-first-cto/"
              >
                Ride
              </a>
              , I was given the chance to work with amazing developers,
              including several Rails API contributors. We built an event-driven
              architecture with several REST APIs and a few RPC ones, and it was
              here I learned the benefits of REST being a state machine over
              HTTP.
            </p>
            <p>
              Then at{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://wework.com/"
              >
                WeWork
              </a>
              , I used my experience to help educate developers, define
              standards for API design and architecture, and work on open-source
              tooling for OpenAPI, JSON Schema, and HTTP. WeWork has 50+ APIs,
              and here I have had a chance to learn a lot about keeping
              distributed applications performant. Timeouts, retries, circuit
              breakers, keep alive settings, and HTTP caching specificially.
            </p>
            <p>
              I try to turn all of this learning into books, videos, and
              articles, so others can learn easily things I've had to learn the
              hard way.
            </p>
          </div>
        </Col>
        <Col lg className="d-lg-block d-xs-none d-sm-none d-md-none">
          <CoverImage
            className={classes.coverImage}
            src="about-phil.jpg"
            alt="Phil speaking at a conference"
          />
        </Col>
      </Row>
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
          description
          coverImage
        }
      }
    }
    posts: allMdx(filter: { frontmatter: { type: { eq: "blog" } } }) {
      nodes {
        id
        body
        excerpt
        frontmatter {
          coverImage
          date
          author
          title
          subtitle
        }
      }
    }
    podcasts: allFeedPodcast {
      nodes {
        id
        title
        pubDate
        link
        content {
          encoded
        }
        contentSnippet
        enclosure {
          url
          length
        }
        isoDate
        itunes {
          image {
            attrs {
              href
            }
          }
          episode
          duration
        }
      }
    }
  }
`;

export default IndexPage;
