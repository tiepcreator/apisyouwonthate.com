import React from 'react';

import { Col, Row } from 'react-bootstrap';

import { formatEpisodeNumber } from '../../utils/podcast';
import classes from './FeaturedPodcast.module.css';
import { TypeLabel } from '..';

const FeaturedPodcast = ({ podcast }) => (
  <Row>
    <Col xs={12}>
      <div className={classes.container}>
        <div className={classes.content}>
          <TypeLabel>Podcast</TypeLabel>
          <h1 className={classes.title}>
            {formatEpisodeNumber(podcast.itunes.episode)} - {podcast.title}
          </h1>
          <div
            dangerouslySetInnerHTML={{
              __html: podcast.content.encoded,
            }}
          />
        </div>
        <iframe
          title={`APIs You Won't Hate Podcast episode ${podcast.itunes.episode} - ${podcast.title}`}
          src="https://share.transistor.fm/e/1ce8c95e"
          width="100%"
          height="180"
          frameborder="0"
          scrolling="no"
          seamless="true"
          className={classes.podcastFrame}
        ></iframe>
      </div>
    </Col>
  </Row>
);

export default FeaturedPodcast;
