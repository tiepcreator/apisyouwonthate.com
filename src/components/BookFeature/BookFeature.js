import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'gatsby';

import slugify from '../../utils/slugify';
import { Image, Button } from '../';

import * as classes from './BookFeature.module.css';

const BookFeature = ({ book }) => {
  const { title, coverImage, description, subtitle } = book.frontmatter;

  const bookUrl = `/books/${slugify(title)}`;
  return (
    <React.Fragment>
      <Row>
        <Col xs={12} className="d-lg-none">
          {/* cover image and title shown on small views */}
          <h2>
            <Link className={classes.title} to={bookUrl}>
              {title}
            </Link>
          </h2>
          <div className={classes.smallCover}>
            <Image src={coverImage} className={classes.smallCover} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          {/* cover image and title shown on large views */}
          <div>
            <h2 className="d-none d-sm-none d-lg-block">
              <Link className={classes.title} to={bookUrl}>
                {title}
              </Link>
            </h2>
            <h3 className={classes.subtitle}>{subtitle}</h3>
            <p className={classes.description}>{description}</p>
            <Link to={bookUrl}>
              <Button>Find out more</Button>
            </Link>
          </div>
        </Col>
        <Col className="d-sm-hidden" md={1} />
        <Col md={4} className="d-none d-sm-none d-md-none d-lg-block">
          <Image src={coverImage} />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default BookFeature;
