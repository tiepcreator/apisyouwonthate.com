import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';

import { NewsletterForm } from '.';
import NewsletterIcon from './NewsIcon';

const NewsletterCTA = () => {
  return (
    <Stack
      margin="0 auto"
      alignSelf={'center'}
      boxShadow={'2xl'}
      bg={useColorModeValue('white', 'gray.700')}
      rounded={'xl'}
      p={10}
      spacing={8}
      maxW="lg"
    >
      <Icon as={NewsletterIcon} w={24} h={24} alignSelf={'center'} />
      <Stack align={'left'} spacing={2}>
        <Heading
          textTransform={'uppercase'}
          fontSize={'3xl'}
          color={useColorModeValue('gray.800', 'gray.200')}
        >
          Get the newsletter
        </Heading>
        <Text fontSize={'lg'} color={'gray.500'}>
          Pragmatic API, HTTP And REST info monthly
        </Text>
      </Stack>
      <NewsletterForm />
    </Stack>
  );
};

export default NewsletterCTA;
