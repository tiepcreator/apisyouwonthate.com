import { Grid, Heading, Stack } from '@chakra-ui/react';

const FeaturedPodcast = () => {
  return (
    <Stack>
      <Heading as="h2" size="md" id="podcast">
        APIs You Won&apos;t Hate podcast
      </Heading>
      <iframe
        width="100%"
        height="180"
        frameBorder="no"
        scrolling="no"
        seamless
        src="https://share.transistor.fm/e/apis-you-wont-hate/latest"
      />
    </Stack>
  );
};

export default FeaturedPodcast;
