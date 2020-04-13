import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'gatsby';

import { OutboundLink } from 'gatsby-plugin-google-analytics';

import classes from './Footer.module.css';

import { GitHubIcon, TwitterIcon, RssIcon } from '../icons';
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
              <a href="https://calendly.com/philsturgeon">Consulting</a>
            </li>
            <li>
              <Link to="/authors">Authors</Link>
            </li>
          </ul>
        </Col>
        <Col lg={2}>
          <div className={classes.subtitle}>Find us online</div>
          <ul className={classes.linkList}>
            <li>
              <GitHubIcon />{' '}
              <OutboundLink
                href="https://github.com/apisyouwonthate"
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub
              </OutboundLink>
            </li>
            <li>
              <TwitterIcon />{' '}
              <OutboundLink
                href="https://twitter.com/apisyouwonthate/"
                target="_blank"
                rel="noreferrer noopener me"
              >
                @apisyouwonthate
              </OutboundLink>
            </li>
            <li>
              <RssIcon />{' '}
              <OutboundLink
                href="/rss.xml"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog RSS
              </OutboundLink>
            </li>
            <li>
              <RssIcon />{' '}
              <OutboundLink
                href="/podcast/rss"
                target="_blank"
                rel="noopener noreferrer"
              >
                Podcast RSS
              </OutboundLink>
            </li>
          </ul>
        </Col>
        <Col lg={2}>
          <div className={classes.subtitle}>Support Us</div>
          <ul className={classes.linkList}>
            <li>
              <OutboundLink
                href="https://www.patreon.com/bePatron?u=19197006"
                data-patreon-widget-type="become-patron-button"
              >
                Become a Patron!
              </OutboundLink>
              {/* this script came from https://www.patreon.com/dashboard/widgets */}
              <script
                async
                src="https://c6.patreon.com/becomePatronButton.bundle.js"
              />
            </li>
            <li>
              <Link to="/community">Join our Slack Community</Link>
            </li>
          </ul>
        </Col>
        <Col lg={2}>
          <div className={classes.subtitle}>
            Made with{' '}
            <span role="img" aria-label="love">
              ❤️
            </span>
          </div>
          <ul className={classes.linkList}>
            <li>
              © {new Date().getFullYear()}
              {` APIs You Won't Hate`}
            </li>
            <li>
              <Link to="/conduct">Code of Conduct</Link>
            </li>
            <li>
              {`Built with`}
              &nbsp;
              <OutboundLink
                href="https://www.gatsbyjs.org"
                target="_blank"
                rel="noreferrer noopener"
              >
                Gatsby
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                href="https://www.netlify.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  alt="Deploys by netlify"
                  src="https://www.netlify.com/img/global/badges/netlify-light.svg"
                />
              </OutboundLink>
            </li>
          </ul>
        </Col>
        <Col>
          <div className={classes.subtitle}>Subscribe to our newsletter</div>
          <NewsletterForm />
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
