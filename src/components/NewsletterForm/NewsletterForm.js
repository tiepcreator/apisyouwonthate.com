import React, { useState } from 'react';
import { Link } from 'gatsby';

import * as EmailValidator from 'email-validator';

// boostrap stuff
import { Col, Form, Row } from 'react-bootstrap';

import { Button } from '../Button';
import classes from './NewsletterForm.module.css';

const NewsletterForm = () => {
  const [emailAddress, setEmailAddress] = useState();
  const [isEmailValid, setEmailValid] = useState(false);
  const [isPristine, setPristine] = useState(false);

  const handleEmailInputChanged = event => {
    setPristine(false);

    setEmailValid(EmailValidator.validate(event.currentTarget.value));
  };

  const handleSubscribeClicked = event => {
    if (event && typeof event.preventDefault === 'function') {
      event.preventDefault();
    }
  };

  return (
    <React.Fragment>
      <h6>Get Pragmatic API, HTTP And REST Info Monthly!</h6>
      <div>valid: {!!isEmailValid ? 'yes' : 'no'}</div>
      <Form inline>
        <Form.Group
          controlId="exampleForm.ControlInput1"
          className={classes.group}
        >
          <Form.Control
            type="email"
            name="email"
            placeholder="name@example.com"
            className={classes.email}
            onChange={handleEmailInputChanged}
            isValid={isPristine || isEmailValid}
          />
          <Button onClick={handleSubscribeClicked} className={classes.button}>
            Subscribe
          </Button>
        </Form.Group>
      </Form>
      <Row>
        <Col>
          Not into mailing lists? Get all modern with Slack. We're the largest
          API-centric{' '}
          <Link className={classes.link} to="/community">
            Slack channel
          </Link>{' '}
          around. Get your API, REST and HTTP questions answered by 2,000+
          people.
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default NewsletterForm;
