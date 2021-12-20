import React from 'react';

import Link from 'next/link';

import { Stack, Text } from '@chakra-ui/react';

import slugify from '../../utils/slugify';

import * as classes from './JobPostItem.module.css';
import { Button, Overline } from '../';

const JobPostItem = ({ job }) => {
  const { title, company, location, employment_type } = job.frontmatter;
  const jobUrl = `/jobs/${slugify(company)}-${slugify(title)}`;

  return (
    <Stack
      style={{ marginBottom: '1.75rem' }}
      border="1px solid gray.800"
      padding="1rem"
    >
      <Overline>
        {company} | {location} {employment_type && ` | ${employment_type}`}
      </Overline>

      <Text>{title}</Text>
      <Text>{job.excerpt}</Text>
      <Link href={jobUrl}>
        <Button className={classes.button}>Find out more</Button>
      </Link>
    </Stack>
  );
};

export default JobPostItem;
