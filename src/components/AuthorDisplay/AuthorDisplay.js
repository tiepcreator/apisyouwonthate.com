import PropTypes from 'prop-types';
import Link from 'next/link';

import { format } from 'date-fns';

import { Stack, Text, Link as ChakraLink } from '@chakra-ui/react';

import slugify from '../../utils/slugify';

const AuthorDisplay = ({ name, date }) => {
  const authorUrl = `/authors/${slugify(name)}`;

  return (
    <Stack direction="row" alignItems={'center'}>
      <Link href={authorUrl} passHref>
        <ChakraLink color="green.700">{name}</ChakraLink>
      </Link>
      {date && (
        <Text color={'gray.600'}>{format(new Date(date), 'MMM dd, yyyy')}</Text>
      )}
    </Stack>
  );
};

AuthorDisplay.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
};

export default AuthorDisplay;
