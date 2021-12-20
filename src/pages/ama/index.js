import React, { useState } from 'react';
import Link from 'next/link';
import { Button, Container, Col, Form, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

import { Layout } from '../../components';
import * as classes from './AMA.module.css';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const AMAPage = () => {
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formData }),
    })
      .then(() => setSubmitted(true))
      .catch((error) => alert(error));
  };

  const handleChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  return (
    <Layout>
      <Helmet title="Ask us a question!" />
      <Container className={classes.container}>
        {submitted ? (
          <>
            <Row>
              <Col>
                <h1>Thank you!</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  We'll do our best to answer your question as quickly as
                  possible. Make sure to subscribe to the{' '}
                  <Link href="/podcast">
                    <a>podcast</a>
                  </Link>
                  , too. Have a great day!
                </p>
              </Col>
            </Row>
          </>
        ) : (
          <>
            <Row>
              <Col>
                <h1>Got a question or comment?</h1>
                <p>
                  We'd love to help you out! Leave us a question or comment
                  below, and we'll do our best to answer it via twitter, or on
                  the Podcast.
                </p>
              </Col>
            </Row>

            <Form
              name="contact"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className={classes.form}
              onSubmit={handleSubmit}
            >
              <Form.Group controlId="formBasicEmail">
                <Form.Group controlId="formBasicName">
                  <Form.Label>Your name</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    name="contact-name"
                    type="text"
                    placeholder="Josephine Doe"
                  />
                </Form.Group>

                <Form.Label>Your contact information</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="contact-info"
                  type="text"
                  placeholder="@irreverentmike or hello@apisyouwonthate.com"
                />
                <Form.Text className="text-muted">
                  We'll use this to tag you in a response. Leave blank to ask
                  anonymously
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicComment">
                <Form.Label>Your question or comment</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="comment"
                  as="textarea"
                  rows={3}
                  placeholder="What the heck is an API?"
                />
              </Form.Group>

              <Form.Group className={classes.hidden}>
                <Form.Label>Don’t fill this out if you're human:</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  type="text"
                  placeholder="Away, botspam"
                  name="bot-field"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </>
        )}
      </Container>
    </Layout>
  );
};

export default AMAPage;
