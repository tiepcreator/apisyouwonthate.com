import React from 'react';
import PropTypes from 'prop-types';

import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Container, Col, Row } from 'react-bootstrap';

import { Button, Layout, SEO, Overline } from '../../components';
import classes from './JobListing.module.css';

const JobListing = ({ data, pageContext }) => {
  const { jobListing } = data;

  const { company, title, date } = jobListing.frontmatter;
  return (
    <Layout>
      <SEO
        title={title}
        description={`${title} job at ${company}`}
        ogType="article"
      />
      <Container className={classes.post}>
        <Row>
          <Col>
            <Overline>{company}</Overline>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <h2>{title}</h2>
              <small>{date}</small>
            </div>
            <MDXRenderer>{jobListing.body}</MDXRenderer>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <a href="#">
              <Button>Apply Now</Button>
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className={classes.footer}>
              <small>
                Back to all <Link to="/jobs">Jobs</Link>
              </small>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

JobListing.propTypes = {
  data: PropTypes.shape({}),
  pageContext: PropTypes.shape({}),
};

export const query = graphql`
  query($id: String!) {
    jobListing: mdx(id: { eq: $id }) {
      id
      body
      timeToRead
      frontmatter {
        title
        company
        date
      }
    }
  }
`;

export default JobListing;
