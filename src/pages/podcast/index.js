import React from 'react';
import { graphql } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { Container, Col, Row } from 'react-bootstrap';
import moment from 'moment';

import { Layout } from '../../components';
import classes from './Podcast.module.css';

const PodcastPage = ({ data }) => {
  const { podcasts } = data;

  return (
    <Layout>
      <Container className={classes.container}>
        <Row>
          <Col>
            <h1>Check out the podcast</h1>
          </Col>
        </Row>
        {podcasts.nodes.map(podcast => (
          <Row>
            <Col>
              <div className={classes.episodeContainer}>
                <OutboundLink
                  href={podcast.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className={classes.imageContainer}
                    src={podcast.itunes.image}
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
                      s{podcast.itunes.season} e{podcast.itunes.episode}{' '}
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
                  <div dangerouslySetInnerHTML={{ __html: podcast.content }} />
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
    podcasts: allAnchorEpisode {
      nodes {
        id
        title
        pubDate
        link
        content
        contentSnippet
        isoDate
        itunes {
          image
          episode
          season
          duration
        }
      }
    }
  }
`;

export default PodcastPage;
