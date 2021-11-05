import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { Image, Layout, Seo } from '../../components';
import * as classes from './CommunityPage.module.css';

const CommunityPage = () => (
  <Layout>
    <Seo title="Books" keywords={['apis', 'api', 'rest', 'rpc', 'graphql']} />
    <div className={classes.container}>
      <Container>
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
                <a
                  href="http://slack.apisyouwonthate.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Slack signup form
                </a>
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
