import React from 'react';

import { Stack } from '@chakra-ui/react';

const VideoFeature = ({ video }) => {
  return (
    <Stack>
      <h2 id={video.frontmatter.slug}>{video.frontmatter.title}</h2>
      <MDXRenderer>{video.body}</MDXRenderer>
    </Stack>
  );
};

export default VideoFeature;
