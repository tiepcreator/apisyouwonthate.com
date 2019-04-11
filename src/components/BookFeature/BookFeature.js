import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'gatsby';

import Img from '../image';
import classes from './BookFeature.module.css';

const BookFeature = ({ book }) => {
  return (
    <Row>
      <Col>
        <div className={classes.metadata}>
          <h2>
            <Link
              className={classes.title}
              to={`books/${book.frontmatter.slug}`}
            >
              {book.frontmatter.title}
            </Link>
          </h2>
          <h3 className={classes.subtitle}>{book.frontmatter.subtitle}</h3>
          <p className={classes.description}>{book.frontmatter.description}</p>
          <Button variant="secondary">Find out more</Button>
        </div>
      </Col>
      <Col xs={4}>
        <Img src={book.frontmatter.coverImage} />
      </Col>
    </Row>
  );
};

export default BookFeature;
