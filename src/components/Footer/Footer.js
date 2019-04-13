import React from 'react';
import { Col, Row } from 'react-bootstrap';

import classes from './Footer.module.css';

const Footer = () => (
  <footer className={classes.footer}>
    <Row>
      <Col>
        © {new Date().getFullYear()}
        {` APIs You Won't Hate, Built with `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </Col>
    </Row>
  </footer>
);

export default Footer;
