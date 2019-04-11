import React from 'react';
import Media from 'react-bootstrap/Media';

import Img from '../image';

const BookFeature = ({ relativePath }) => {
  return (
    <Media>
      <Media.Body>
        <Img src={relativePath} />
      </Media.Body>
    </Media>
  );
};

export default BookFeature;
