const { Container, Heading, Stack, SimpleGrid } = require('@chakra-ui/react');
const {
  Layout,
  FeaturedBlogPost,
  BlogPostItem,
  NewsletterCTA,
  PodcastFeed,
} = require('../../components');

import { getAllPosts } from '../../lib/blogPostLoader';

// load books, podcasts, and posts fro useStaticProps
export const getStaticProps = async () => {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
};

const BlogPage = ({ posts }) => {
  const [firstPost, ...otherPosts] = posts;
  return (
    <Layout>
      <Container>
        <Stack spacing={8}>
          <Heading as="h1">All Articles</Heading>
          <FeaturedBlogPost post={firstPost} />
          <SimpleGrid minChildWidth="300px" spacing={8}>
            <PodcastFeed />
            {otherPosts.map((post) => (
              <BlogPostItem key={post.slug} post={post} />
            ))}
          </SimpleGrid>
          <NewsletterCTA />
        </Stack>
      </Container>
    </Layout>
  );
};

export default BlogPage;
