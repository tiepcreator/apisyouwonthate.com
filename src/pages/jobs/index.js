import React from 'react';
import { graphql } from 'gatsby';

// bootstrap
import { Container, Col, Row } from 'react-bootstrap';

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
        <Col>
          <Row className="justify-content-md-center mt-4">
            <div className={classes.heading}>
              <h2>API Jobs</h2>
              <p>We put this together to help people find jobs in the API Space. Whether you want to do API Design, Implementation, Testing, Open Source work etc, this will serve as a long lasting directory of jobs in the API Space vetted by professionals.</p>
            </div>
          </Row>
        </Col>
        <Col>
          <Row className="justify-content-md-center">
            {jobs.map((job) => (
              <JobPostItem key={job.id} job={job} />
            ))}
          </Row>
        </Col>
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
          location
        }
      }
    }
  }
`;
