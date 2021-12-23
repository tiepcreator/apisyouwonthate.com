import { serialize } from 'next-mdx-remote/serialize';
import {
  Box,
  Container,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { MDXRemote } from 'next-mdx-remote';

import {
  AuthorDisplay,
  CarbonAd,
  Colophon,
  Layout,
  NewsletterForm,
  Seo,
} from '../../components';

import { getAllPosts, getPostBySlug } from '../../lib/blogPostLoader';
import { formatDate } from '../../utils/formatDate';

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);

  const mdxSource = await serialize(post.content);

  return {
    props: {
      slug: params.slug,
      post: {
        ...post,
        source: mdxSource,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = await getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

const BlogPage = ({ post, slug }) => {
  const { author, date, coverImage, title, subtitle } = post.frontmatter;

  const postImageUrl = `/images/posts/${coverImage}`;
  return (
    <Layout>
      <Container>
        <Seo
          title={title}
          description={subtitle}
          author={author}
          imageUrl={coverImage ? postImageUrl : null}
        />
        <Stack>
          <Grid gridTemplateColumns={['1fr', '1fr', '1fr 130px']} gap={4}>
            {coverImage ? (
              <Image
                rounded={'sm'}
                alt={title}
                src={postImageUrl}
                width="100%"
                minHeight="300px"
                height="40vh"
                objectFit="cover"
              />
            ) : (
              <div />
            )}
            <CarbonAd />
          </Grid>

          <Container maxWidth="70ch" alignSelf={'center'} pt="2rem">
            <Heading as="h1">{title}</Heading>
            <Stack direction="row">
              <AuthorDisplay name={author} />
              <Text as="time" dateTime={date} color="gray.600">
                {formatDate(date, 'MMMM dd, yyyy')}
              </Text>
            </Stack>
            <Box fontSize={'lg'}>
              <MDXRemote {...post.source} />
            </Box>
            <Colophon />
            <NewsletterForm />
          </Container>
        </Stack>
      </Container>
    </Layout>
  );
};

export default BlogPage;
