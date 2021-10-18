import React from 'react';

import { Col, Row } from 'react-bootstrap';

import { formatEpisodeNumber } from '../../utils/podcast';
import * as classes from './FeaturedPodcast.module.css';
import { TypeLabel } from '..';

const FeaturedPodcast = ({ podcast }) => {
  // we need to use a url with /e/ for embed - /s/ is the share link!
  const podcastEmbedUrl = podcast.link.replace('/s/', '/e/');

  return (
    <Row>
      <Col xs={12} style={{ paddingLeft: 0 }}>
        <div className={classes.container}>
          <div className={classes.content}>
            <TypeLabel>Podcast</TypeLabel>
            <h1 className={classes.title}>
              {formatEpisodeNumber(podcast.itunes.episode)} - {podcast.title}
            </h1>
            <div
              dangerouslySetInnerHTML={{
                __html: podcast.contentSnippet,
              }}
            />
          </div>
          <iframe
            title={`APIs You Won't Hate Podcast episode ${podcast.itunes.episode} - ${podcast.title}`}
            src={podcastEmbedUrl}
            width="100%"
            height="180"
            frameBorder="0"
            scrolling="no"
            seamless
            className={classes.podcastFrame}
          ></iframe>
        </div>
      </Col>
    </Row>
  );
};

export default FeaturedPodcast;
