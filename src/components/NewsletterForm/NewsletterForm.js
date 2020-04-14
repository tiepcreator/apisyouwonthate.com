import React from 'react';

// boostrap stuff
import { Form } from 'react-bootstrap';

import classes from './NewsletterForm.module.css';

const NewsletterForm = () => {
  return (
    <div className={classes.newsletterFormContainer}>
      <p>Get Pragmatic API, HTTP And REST Info Monthly!</p>
      <Form
        inline
        method="post"
        noValidate
        target="_blank"
        action={`https://apisyouwonthate.us10.list-manage.com/subscribe/post?u=f5c5ff66d95d11dec1b88cf54&amp;id=532b212b06`}
      >
        <Form.Group
          controlId="exampleForm.ControlInput1"
          className={classes.group}
        >
          <Form.Control
            type="email"
            name="email"
            placeholder="name@example.com"
            className={classes.email}
          />
          <input type="submit" value="Submit" className={classes.button} />
        </Form.Group>
      </Form>
    </div>
  );
};

export default NewsletterForm;
