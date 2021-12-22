import React from 'react';
import { MDXRemote } from 'next-mdx-remote';

import { Heading, Stack } from '@chakra-ui/react';

const VideoFeature = ({ video }) => {
  return (
    <Stack>
      <Heading as="h2" id={video.frontmatter.slug}>
        {video.frontmatter.title}
      </Heading>
      <MDXRemote {...video.source} />
    </Stack>
  );
};

export default VideoFeature;
