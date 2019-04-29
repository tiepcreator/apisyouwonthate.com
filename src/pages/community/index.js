import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import { Image, Layout, SEO } from '../../components';
import classes from './CommunityPage.module.css';

const CommunityPage = () => (
  <Layout>
    <SEO title="Books" keywords={['apis', 'api', 'rest', 'rpc', 'graphql']} />
    <div className={classes.container}>
      <Container>
        <Row>
          <Col>
            <h1>Patreon</h1>
            <p>{"We'd love it if you supported us on Patreon."}</p>
            <OutboundLink
              href="https://www.patreon.com/bePatron?u=4477635"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                src="patreon-button.png"
                className={classes.patreonButton}
              />
            </OutboundLink>
          </Col>
        </Row>
        <div className={classes.slack}>
          <Row>
            <Col>
              <h1>Slack</h1>
              <p>
                Get your API, REST and HTTP questions answered by almost 2,000
                people! We're the largest API-centric Slack channel around.
              </p>

              <p>
                Joining is as easy as going to our{' '}
                <OutboundLink
                  href="http://slack.apisyouwonthate.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Slack signup form
                </OutboundLink>
                , and entering your email address.
              </p>

              <Image src="slack.png" alt="Our slack community" />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  </Layout>
);

export default CommunityPage;
