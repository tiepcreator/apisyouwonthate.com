import imageSize from 'rehype-img-size';

const mdxOptions = {
  mdxOptions: {
    rehypePlugins: [[imageSize, { dir: 'public' }]],
  },
};

export default mdxOptions;
