import React from 'react';

import {
  Box,
  Container,
  Grid,
  SimpleGrid,
  Spacer,
  Stack,
} from '@chakra-ui/react';

import {
  BlogPostItem,
  BookFeature,
  CarbonAd,
  FeaturedBlogPost,
  Layout,
  Overline,
  PodcastFeed,
  Seo,
} from '../components';

import { getAllPosts } from '../lib/blogPostLoader';

import { getAllBooks } from '../lib/bookLoader';
import { generateRSSFeed } from '../utils/rss';

// load books, podcasts, and posts fro useStaticProps
export const getStaticProps = async () => {
  const posts = await getAllPosts();
  const books = await getAllBooks();

  generateRSSFeed(posts);

  return {
    props: {
      books,
      posts,
    },
  };
};

const IndexPage = ({ books, posts }) => {
  const [firstPost, ...otherPosts] = posts;
  return (
    <Layout>
      <Container maxW="7xl">
        <Seo
          title="API News, articles, podcasts, and books"
          keywords={[`gatsby`, `application`, `react`]}
        />
        <Stack>
          <Grid gridTemplateColumns={['1fr', '1fr', '1fr 130px']} gap={4}>
            <FeaturedBlogPost post={firstPost} />
            <Box alignSelf="end">
              <CarbonAd />
            </Box>
          </Grid>

          <Overline id="books">Books for API Developers</Overline>
          <SimpleGrid minChildWidth={'400px'} spacing={8}>
            {books.map((book, i) => {
              return (
                <div key={book.frontmatter.title}>
                  <BookFeature book={book} />
                </div>
              );
            })}
          </SimpleGrid>

          <Spacer />
          <Overline id="more">More API goodness</Overline>
          <SimpleGrid minChildWidth="300px" spacing={8} mt={4}>
            <PodcastFeed dark height="500" />
            {otherPosts.map((post) => {
              return <BlogPostItem key={post.slug} post={post} />;
            })}
          </SimpleGrid>
        </Stack>
      </Container>
    </Layout>
  );
};

export default IndexPage;
