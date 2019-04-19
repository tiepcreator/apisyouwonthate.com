import React from 'react';

import { Col, Container, Row } from 'react-bootstrap';

import { Image } from '../../components/Image';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

import classes from './CommunityPage.module.css';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const CommunityPage = () => (
  <Layout>
    <SEO title="Books" keywords={['apis', 'api', 'rest', 'rpc', 'graphql']} />
    <div className={classes.container}>
      <Container>
        <Row>
          <Col>
            <h1>Community</h1>
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
      </Container>
    </div>
  </Layout>
);

export default CommunityPage;
