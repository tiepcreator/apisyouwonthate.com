import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { format } from 'date-fns';

import { Stack, Text, Link as ChakraLink } from '@chakra-ui/react';

import slugify from '../../utils/slugify';
import * as classes from './AuthorDisplay.module.css';

const AuthorDisplay = ({ name, date, readTimeInMinutes }) => {
  const readTimeDisplay = readTimeInMinutes && (
    <span className={classes.readingTime}>{readTimeInMinutes} min read</span>
  );

  const dateDisplay = date && (
    <Text as="small" color="grey.600">
      {format(new Date(date), 'MMM dd, yyyy')}
    </Text>
  );

  const authorUrl = `/authors/${slugify(name)}`;

  return (
    <div className={classes.container}>
      <Stack direction="row">
        <Link href={authorUrl} className={classes.authorName} passHref>
          <ChakraLink color="green.400">{name}</ChakraLink>
        </Link>
        <div>
          {dateDisplay}
          {date && readTimeDisplay && ` · `}
          {readTimeDisplay}
        </div>
      </Stack>
    </div>
  );
};

AuthorDisplay.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  readTimeInMinutes: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default AuthorDisplay;
