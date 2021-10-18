import React from 'react';
import { Card } from 'react-bootstrap';

import slugify from '../../utils/slugify';

import * as classes from './JobPostItem.module.css';
import { Button, Overline } from '../';

const JobPostItem = ({ job }) => {
  const { title, company, location, employment_type } = job.frontmatter;
  const jobUrl = `/jobs/${slugify(company)}-${slugify(title)}`;

  return (
    <Card style={{ marginBottom: '1.75rem' }}>
      <Card.Body>
        <Card.Subtitle>
          <Overline>
            {company} | {location} {employment_type && ` | ${employment_type}`}
          </Overline>
        </Card.Subtitle>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{job.excerpt}</Card.Text>
        <Card.Link href={jobUrl}>
          <Button className={classes.button}>Find out more</Button>
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default JobPostItem;
