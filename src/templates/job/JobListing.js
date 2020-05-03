import React from 'react';
import PropTypes from 'prop-types';

import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Container, Col, Row } from 'react-bootstrap';

import moment from 'moment';

import { Button, Layout, SEO, Overline } from '../../components';
import classes from './JobListing.module.css';

const JobListing = ({ data, pageContext }) => {
  const { jobListing } = data;

  const {
    company,
    title,
    date,
    location,
    url,
    salary,
    currency,
    remote,
    employment_type,
  } = jobListing.frontmatter;
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
            <Overline>
              {company} | {location} {remote === 'yes' && <span>/ Remote</span>}
            </Overline>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="pb-4">
              <h2>{title}</h2>
              <dl>
                <dt>Posted</dt>
                <dd>{moment(date).format('MM-DD-YYYY')}</dd>

                <dt>Salary</dt>
                <dd>
                  {salary && currency ? `${salary} ${currency}` : 'Unlisted'}
                </dd>

                <dt>Remote</dt>
                <dd>{remote}</dd>

                <dt>Location</dt>
                <dd>{location}</dd>

                <dt>Employment Type</dt>
                <dd>{employment_type || 'Unlisted'}</dd>
              </dl>
            </div>
            <MDXRenderer className="pt-4">{jobListing.body}</MDXRenderer>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <Button>Apply Now</Button>
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className={classes.footer}>
              <small>
                <Link to="/jobs">All Jobs</Link>
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
        location
        url
        salary
        currency
        remote
      }
    }
  }
`;

export default JobListing;
