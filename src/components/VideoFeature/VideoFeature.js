import React from 'react';
import { MDXRemote } from 'next-mdx-remote';

import { Grid, Heading, Stack } from '@chakra-ui/react';

const VideoFeature = ({ video }) => {
  return (
    <Stack>
      <Grid gridTemplateColumns="minmax(400px, 1fr) 3fr" gap={8}>
        <Heading as="h2" id={video.frontmatter.slug}>
          {video.frontmatter.title}
        </Heading>
        <Stack>
          <MDXRemote {...video.source} />
        </Stack>
      </Grid>
    </Stack>
  );
};

export default VideoFeature;
