import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import classes from './Home.module.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <section className={classes.books}>
      <div className={classes.container}>
        <h1>{`Surviving Other People's APIs`}</h1>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
