import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'gatsby';

import * as classes from './Footer.module.css';

import { GitHubIcon, TwitterIcon } from '../icons';
import { NewsletterForm } from '../NewsletterForm';

const Footer = () => (
  <footer className={classes.footer}>
    <Container fluid>
      <Row>
        <Col lg={2}>
          <div className={classes.subtitle}>APIs You Won't hate</div>
          <ul className={classes.linkList}>
            <li>
              <Link to="/books">Books</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/videos">Videos</Link>
            </li>
            <li>
              <Link to="/podcast">Podcast</Link>
            </li>
          </ul>
        </Col>
        <Col lg={2}>
          <div className={classes.subtitle}>Community</div>
          <ul className={classes.linkList}>
            <li>
              <GitHubIcon />{' '}
              <a
                href="https://github.com/apisyouwonthate"
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub
              </a>
            </li>
            <li>
              <TwitterIcon />{' '}
              <a
                href="https://twitter.com/apisyouwonthate"
                target="_blank"
                rel="noreferrer noopener me"
              >
                @apisyouwonthate
              </a>
            </li>
            <li>
              <Link to="/community">Join our Slack Community</Link>
            </li>
            <li>
              <a href="https://forum.apisyouwonthate.com">Forum</a>
            </li>
            <li>
              <a
                href="https://www.patreon.com/bePatron?u=19197006"
                data-patreon-widget-type="become-patron-button"
              >
                Become a Patron!
              </a>
              {/* this script came from https://www.patreon.com/dashboard/widgets */}
              <script
                async
                src="https://c6.patreon.com/becomePatronButton.bundle.js"
              />
            </li>
            <li>
              <Link to="/conduct">Code of Conduct</Link>
            </li>
          </ul>
        </Col>
        <Col lg={2}>
          <div className={classes.subtitle}>More help</div>
          <ul className={classes.linkList}>
            <li>
              <a href="https://calendly.com/philsturgeon">Consulting</a>
            </li>
          </ul>
        </Col>
        <Col>
          <div className={classes.subtitle}>Subscribe to our newsletter</div>
          <NewsletterForm />
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            <a
              href="https://www.netlify.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="Deploys by netlify"
                src="https://www.netlify.com/img/global/badges/netlify-dark.svg"
              />
            </a>
          </p>
          <small>
            © {new Date().getFullYear()}
            {` APIs You Won't Hate`}
          </small>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
