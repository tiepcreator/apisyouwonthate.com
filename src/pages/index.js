import React from 'react';

// boostrap stuff
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { BookFeature } from '../components/BookFeature';
import Layout from '../components/layout';
import SEO from '../components/seo';

import classes from './Home.module.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <div className={classes.books}>
      <Container>
        <Row>
          <Col>
            <section>
              <div className={classes.container}>
                <h1>{`Surviving Other People's APIs`}</h1>
              </div>
            </section>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>Build APIs You Won't Hate</h1>
          </Col>
          <Col />
        </Row>
        <BookFeature
          title="Well this is book 3"
          coverImageFileName="build-apis-you-wont-hate.jpg"
        />
      </Container>
    </div>
  </Layout>
);

export default IndexPage;
