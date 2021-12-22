import Image from 'next/image';

import { Container, Heading, Stack } from '@chakra-ui/react';

import { Layout, Seo, VideoFeature } from '../../components';
import { getAllVideos } from '../../lib/videoLoader';

import videoHeaderImage from '../../../public/images/videos/videos-page-header-image.jpg';

// load books, podcasts, and posts fro useStaticProps
export const getStaticProps = async () => {
  const videos = await getAllVideos();

  return {
    props: {
      videos,
    },
  };
};

const VideosPage = ({ videos }) => {
  return (
    <Layout>
      <Seo
        title="Videos"
        keywords={['apis', 'api', 'rest', 'rpc', 'graphql']}
      />
      <Container>
        <Stack>
          <Heading as="h1">Videos</Heading>
          <p>
            Can&apos;t make it to the big conferences In Paris, London, or San
            Francisco? we get it! We&apos;ve all got local bars to keep up
            appearances at, bike races to train for, and pet turtles don&apos;t
            feed themselves!
          </p>
          <p>
            Grab these mini conference talks, and watch then whenever you fancy.
          </p>
          <Image
            src={videoHeaderImage}
            alt="A slide from one of Phil's many talks over the years"
          />
          {videos.map((video, i) => (
            <div key={video.id}>
              <VideoFeature video={video} />
            </div>
          ))}
        </Stack>
      </Container>
    </Layout>
  );
};

export default VideosPage;
