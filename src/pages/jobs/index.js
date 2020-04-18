import React from 'react';
import { graphql } from 'gatsby';

// bootstrap
import { Container, Row } from 'react-bootstrap';

import { JobPostItem, Layout, SEO } from '../../components';

import classes from './Jobs.module.css';

const JobsPage = ({ data }) => {
  // sort jobs by date
  const jobs = data.allMdx.nodes.sort((a, b) => {
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
  });

  return (
    <Layout>
      <SEO title="Jobs" />
      <Container className={classes.container}>
        <Row>
          {jobs.map((job) => (
            <JobPostItem key={job.id} job={job} />
          ))}
        </Row>
      </Container>
    </Layout>
  );
};

export default JobsPage;

export const query = graphql`
  {
    allMdx(filter: { frontmatter: { type: { eq: "jobs" } } }) {
      nodes {
        id
        body
        frontmatter {
          title,
          company,
          salary,
          date,
        }
      }
    }
  }
`;
