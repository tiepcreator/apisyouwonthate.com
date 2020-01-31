import React from 'react';
import { graphql } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { Container, Col, Row } from 'react-bootstrap';
import moment from 'moment';

import { Layout, SEO } from '../../components';
import classes from './Podcast.module.css';

const PodcastPage = ({ data }) => {
  const { podcasts } = data;

  return (
    <Layout>
      <SEO title="Podcast" />
      <Container className={classes.container}>
        {podcasts.nodes.map(podcast => (
          <Row key={podcast.id}>
            <Col>
              <div className={classes.episodeContainer}>
                <OutboundLink
                  href={podcast.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className={classes.imageContainer}
                    src={podcast.itunes.image.attrs.href}
                    alt="APIs You Won\'t Hate cover"
                  />
                </OutboundLink>
                <div>
                  <OutboundLink
                    href={podcast.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.titleLink}
                  >
                    <span className={classes.episode}>
                      {Number(podcast.itunes.episode).toLocaleString('en-US', {
                        minimumIntegerDigits: 3,
                        useGrouping: false,
                      })}
                    </span>
                    <h2 className={classes.title}>{podcast.title}</h2>
                  </OutboundLink>
                  <div className={classes.meta}>
                    <span className={classes.date}>
                      {moment(podcast.isoDate).calendar()}
                    </span>
                    <span className={classes.duration}>
                      {moment.duration(podcast.itunes.duration * 1000).hours()}:
                      {moment
                        .duration(podcast.itunes.duration * 1000)
                        .minutes()}
                    </span>
                  </div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: podcast.content.encoded,
                    }}
                  />
                </div>
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </Layout>
  );
};

export const query = graphql`
  {
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

export default PodcastPage;
