import React from 'react';

import Link from 'next/link';

import { Button, Heading, Stack, Text } from '@chakra-ui/react';

import getJobUrl from '../../utils/getJobUrl';

import * as classes from './JobPostItem.module.css';
import { Overline } from '../';

const JobPostItem = ({ job }) => {
  const { title, company, location, employment_type } = job;
  const jobUrl = getJobUrl(job);

  return (
    <Stack style={{ marginBottom: '1.75rem' }} border="1px solid gray.800">
      <Overline>
        {location} {employment_type && ` | ${employment_type}`}
      </Overline>

      <Heading as="h2" size="md">
        {company} &middot; {title}
      </Heading>
      <Link href={jobUrl || ''} passHref>
        <Button as="a">Find out more</Button>
      </Link>
    </Stack>
  );
};

export default JobPostItem;
