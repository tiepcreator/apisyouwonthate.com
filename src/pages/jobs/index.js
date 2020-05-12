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
        <Row noGutters>
          <Col>
            <div className={classes.heading}>
              <h2>API Jobs</h2>
            </div>
          </Col>
        </Row>
        <Row>
          {jobs.map((job) => (
            <Col xs={12} sm={3} md={4}>
              <JobPostItem key={job.id} job={job} />
            </Col>
          ))}
        </Row>
        <Row>
          <Col>
            <p>
              To add a job, make a pull request to{' '}
              <a href="https://github.com/apisyouwonthate/apisyouwonthate.com">
                the project repository
              </a>{' '}
              and use{' '}
              <a href="https://github.com/apisyouwonthate/apisyouwonthate.com/blob/master/src/content/jobs/primitive-php-developer.mdx">
                this
              </a>{' '}
              as a template to filling out your posting.
            </p>
            <p>
              {'If you would rather, you can '}
              <a href="mailto:mjtrask@gmail.com, mbifulco@live.com?subject=New API Job!">
                send us an email
              </a>
              , and we'll take care of the rest.
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default JobsPage;

export const query = graphql`
  {
    allMdx(
      filter: { frontmatter: { type: { eq: "jobs" }, published: { eq: true } } }
    ) {
      nodes {
        id
        body
        excerpt
        frontmatter {
          title
          company
          salary
          date
          location
        }
      }
    }
  }
`;
