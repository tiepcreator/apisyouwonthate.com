import React from 'react';
import PropTypes from 'prop-types';

import { Col, Row } from 'react-bootstrap';

import Image from '../image';
import { AuthorDisplay } from '../AuthorDisplay';

import classes from './FullWidthFeature.module.css';

const FullWidthFeature = ({ authorName, date, image, subtitle, title }) => (
  <div className={classes.container}>
    <Row>
      <Col md={8}>
        <div className={classes.container}>
          <Image src={image} />
        </div>
      </Col>
      <Col>
        <main>
          <h2 className={classes.title}>{title}</h2>
          <h3>{subtitle}</h3>
          <AuthorDisplay name={authorName} date={date} />
        </main>
      </Col>
    </Row>
  </div>
);

FullWidthFeature.propTypes = {
  authorName: PropTypes.string,
  date: PropTypes.string,
  image: PropTypes.shape({}),
  subtitle: PropTypes.string,
  title: PropTypes.string,
};

export default FullWidthFeature;
