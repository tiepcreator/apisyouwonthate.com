import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'gatsby';

import Img from '../image';
import { Button } from '../Button';
import classes from './BookFeature.module.css';

const BookFeature = ({ book }) => {
  const bookUrl = `books/${book.frontmatter.slug}`;
  return (
    <Row>
      <Col xs={12} className="d-lg-none">
        <Img src={book.frontmatter.coverImage} />
      </Col>
      <Col>
        <div className={classes.metadata}>
          <h2>
            <Link className={classes.title} to={bookUrl}>
              {book.frontmatter.title}
            </Link>
          </h2>
          <h3 className={classes.subtitle}>{book.frontmatter.subtitle}</h3>
          <p className={classes.description}>{book.frontmatter.description}</p>
          <Button to={bookUrl}>Find out more</Button>
        </div>
      </Col>
      <Col md={4} className="d-none d-sm-none d-md-none d-lg-block">
        <Img src={book.frontmatter.coverImage} />
      </Col>
    </Row>
  );
};

export default BookFeature;
