import React from 'react';
import { Link } from 'gatsby';

// boostrap stuff
import { Col, Form, Row } from 'react-bootstrap';

import { Button } from '../Button';
import classes from './NewsletterForm.module.css';

const NewsletterForm = () => {
  const handleSubscribeClicked = event => {
    if (event && typeof event.preventDefault === 'function') {
      event.preventDefault();
    }
  };

  return (
    <React.Fragment>
      <h6>Get Pragmatic API, HTTP And REST Info Monthly!</h6>
      <Form inline>
        <Form.Group
          controlId="exampleForm.ControlInput1"
          className={classes.group}
        >
          <Form.Control
            type="email"
            placeholder="name@example.com"
            className={classes.email}
          />
          <Button onClick={handleSubscribeClicked}>Subscribe</Button>
        </Form.Group>
      </Form>
      <Row>
        <Col>
          Not into mailing lists? Get all modern with Slack. We're the largest
          API-centric <Link to="/community">Slack channel around.</Link>
          Get your API, REST and HTTP questions answered by 2,000+ people.
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default NewsletterForm;
