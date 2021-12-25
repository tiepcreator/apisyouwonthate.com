import { serialize } from 'next-mdx-remote/serialize';
import {
  Box,
  Container,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
  useTheme,
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

  const theme = useTheme();

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
            <Box
              padding="2rem"
              borderRadius="2ch"
              background={'white.50'}
              boxShadow={`2.37px 2.37px 5.925px hsl(0, 0%, 82.6%),  -2.37px -1.37px 5.925px hsl(0, 0%, 117.4%),  inset -1.44px -1.44px 5.76px hsl(0, 0%, 82.6%),  inset 1.44px 1.44px 5.76px hsl(0, 0%, 117.4%)`}
            >
              <Heading as="h2" size="lg" mb="1ch">
                Get the APIs You Won&apos;t Hate Newsletter
              </Heading>
              <NewsletterForm />
            </Box>
          </Container>
        </Stack>
      </Container>
    </Layout>
  );
};

export default BlogPage;
