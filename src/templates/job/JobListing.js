import React from 'react';
import PropTypes from 'prop-types';

import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Container, Col, Row } from 'react-bootstrap';

import { Button, Layout, SEO, Overline } from '../../components';
import classes from './JobListing.module.css';

const JobListing = ({ data, pageContext }) => {
  const { jobListing } = data;

  const { company, title, date, location, url, salary, currency, remote } = jobListing.frontmatter;
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
            <Overline>{company} | {location}</Overline>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="pb-4">
              <h2>{title}</h2>
              <small>Posted At: {date}</small>
              <br></br>
              <small>Salary: {salary} {currency}</small>
              <br></br>
              <small>Remote: {remote.charAt(0).toUpperCase() + remote.slice(1)}</small>
              <br></br>
              <small>HQ Location: {hq_location.charAt(0).toUpperCase() + hq_location.slice(1)}</small>
              <br></br>
              <small>Employment Type: {employment_type}</small>
            </div>
            <MDXRenderer className="pt-4">{jobListing.body}</MDXRenderer>
          </Col>
        </Row>
        <Row>
          <Col className="text-left">
            <a href={url}>
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
    </Layout >
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
        date,
        location,
        url,
        salary,
        currency,
        remote
      }
    }
  }
`;

export default JobListing;
