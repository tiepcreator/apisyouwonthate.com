import React from 'react';
import { Col, Row } from 'react-bootstrap';

import Img from '../image';

const BookFeature = ({ coverImageFileName, title }) => {
  return (
    <Row>
      <Col>{title}</Col>
      <Col xs={3}>
        <Img src={coverImageFileName} />
      </Col>
    </Row>
  );
};

export default BookFeature;
