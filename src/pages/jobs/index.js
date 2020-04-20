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
              <p>For companies today, we are posting jobs for free so that way we can get as many jobs in front of developers as we can with everything in the world going on. There are tons of amazing developers looking for work, and we want to keep it as easy as possible.</p>
              <p>To add a job, make a pull request to <a href="https://github.com/apisyouwonthate/apisyouwonthate.com">the project repository</a> and use <a href="https://github.com/apisyouwonthate/apisyouwonthate.com/blob/master/src/content/jobs/primitive-php-developer.mdx">this</a> as a template to filling out your posting.</p>
              <p>If you would rather, you can email your job to <a href="mailto:mjtrask@gmail.com?subject=New API Job!">Matt</a> or <a href="mailto:mbifulco@live.com?subject=New API Job!">Mike</a>.</p>
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
    allMdx(filter: { frontmatter: { type: { eq: "jobs" }, paid: { eq: true }, example: { eq: false } } }) {
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
