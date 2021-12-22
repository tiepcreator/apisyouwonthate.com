import Link from 'next/link';
import { Button, Container, Grid, Heading, Stack } from '@chakra-ui/react';

import { Layout, Seo } from '../../components';
import { formatEpisodeNumber } from '../../utils/podcast';
import * as classes from './Podcast.module.css';

const PodcastPage = ({ podcasts }) => {
  return (
    <Layout>
      <Seo title="Podcast" />
      <Container>
        <Grid gridTemplateColumns={'3fr 1fr'} gap={8}>
          <Stack>
            <Heading as="h1">APIs You Won&apos;t Hate (the podcast)</Heading>

            <iframe
              width="100%"
              height="390"
              frameBorder="no"
              scrolling="no"
              seamless
              src="https://share.transistor.fm/e/apis-you-wont-hate/playlist"
            ></iframe>
          </Stack>
          <Stack>
            <Heading as="h2" size="lg" pt="1.5em">
              Got a question for us?
            </Heading>
            <p>
              We&apos;d love to hear from you! Submit your question for the
              show, and we&apos;ll do our best to answer on an upcoming episode.
            </p>
            <Link href="/ama" passHref>
              <Button as="a" colorScheme={'purple'}>
                Ask us a question
              </Button>
            </Link>
          </Stack>
        </Grid>
      </Container>
    </Layout>
  );
};

export default PodcastPage;
