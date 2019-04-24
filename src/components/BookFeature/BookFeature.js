import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'gatsby';

import { Image } from '../Image';
import { Button } from '../Button';
import classes from './BookFeature.module.css';

const BookFeature = ({ book }) => {
  const bookUrl = `/books/${book.frontmatter.slug}`;
  return (
    <React.Fragment>
      <Row>
        <Col xs={12} className="d-lg-none">
          {/* cover image and title shown on small views */}
          <h2>
            <Link className={classes.title} to={bookUrl}>
              {book.frontmatter.title}
            </Link>
          </h2>
          <div className={classes.smallCover}>
            <Image
              src={book.frontmatter.coverImage}
              className={classes.smallCover}
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          {/* cover image and title shown on large views */}
          <div>
            <h2 className="d-none d-sm-none d-lg-block">
              <Link className={classes.title} to={bookUrl}>
                {book.frontmatter.title}
              </Link>
            </h2>
            <h3 className={classes.subtitle}>{book.frontmatter.subtitle}</h3>
            <p className={classes.description}>
              {book.frontmatter.description}
            </p>
            <Button to={bookUrl}>Find out more</Button>
          </div>
        </Col>
        <Col className="d-sm-hidden" md={1} />
        <Col md={4} className="d-none d-sm-none d-md-none d-lg-block">
          <Image src={book.frontmatter.coverImage} />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default BookFeature;
