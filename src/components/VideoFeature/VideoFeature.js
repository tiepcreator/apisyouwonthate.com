import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-mdx';

import classes from './VideoFeature.module.css';

const VideoFeature = ({ video }) => {
  return (
    <div className={classes.container}>
      <Row>
        <Col lg={{ span: 8, offset: 2 }}>
          {/* cover image and title shown on small views */}
          <h2 id={video.frontmatter.slug}>{video.frontmatter.title}</h2>
        </Col>
      </Row>
      <Row>
        <Col lg={{ span: 8, offset: 2 }}>
          <MDXRenderer>{video.code.body}</MDXRenderer>
        </Col>
      </Row>
    </div>
  );
};

export default VideoFeature;
