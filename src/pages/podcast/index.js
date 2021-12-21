import Link from 'next/link';
import { Container, Heading, Stack } from '@chakra-ui/react';

import { Layout, Seo } from '../../components';
import { formatEpisodeNumber } from '../../utils/podcast';
import * as classes from './Podcast.module.css';

export const getStaticProps = async () => {
  const podcasts = [];

  return {
    props: {
      podcasts,
    },
  };
};

const PodcastPage = ({ podcasts }) => {
  return (
    <Layout>
      <Seo title="Podcast" />
      <Container>
        <Stack>
          <Heading as="h1">Listen to the Podcast</Heading>
          <p>
            Wherein Phil, Matt, and Mike talk about news in the world of
            building and designing APIs, bikes, and climate awareness. Find us
            wherever you get your podcasts.
          </p>
          <h4>Got a question for us?</h4>
          <p>
            Head on over to <Link href="/ama">Submit</Link> to submit your
            question for the show. We'll do our best to answer on an upcoming
            episode.
          </p>

          <Heading as="h2">Episodes</Heading>
          {podcasts.map((podcast) => (
            <div className={classes.episodeContainer}>
              <a href={podcast.link} target="_blank" rel="noopener noreferrer">
                <img
                  className={classes.imageContainer}
                  src={podcast.itunes.image.attrs.href}
                  alt="APIs You Won\'t Hate cover"
                />
              </a>
              <div>
                <a
                  href={podcast.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.titleLink}
                >
                  <span className={classes.episode}>
                    {formatEpisodeNumber(podcast.itunes.episode)}
                  </span>
                  <h2 className={classes.title}>{podcast.title}</h2>
                </a>
                <div className={classes.meta}>
                  <span className={classes.date}>
                    {moment(podcast.isoDate).calendar()}
                  </span>
                  <span className={classes.duration}>
                    {moment.duration(podcast.itunes.duration * 1000).hours()}:
                    {moment.duration(podcast.itunes.duration * 1000).minutes()}
                  </span>
                </div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: podcast.content.encoded,
                  }}
                />
              </div>
            </div>
          ))}
        </Stack>
      </Container>
    </Layout>
  );
};

export default PodcastPage;
