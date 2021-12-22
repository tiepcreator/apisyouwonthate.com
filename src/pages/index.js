import React from 'react';

import { Box, Container, Grid, SimpleGrid, Stack } from '@chakra-ui/react';

import {
  CarbonAd,
  BlogPostItem,
  BookFeature,
  FeaturedBlogPost,
  FeaturedPodcast,
  Layout,
  NewsletterForm,
  Seo,
  Overline,
} from '../components';

import { getAllPosts } from '../lib/blogPostLoader';

import * as classes from './Home.module.css';
import { getAllBooks } from '../lib/bookLoader';

// load books, podcasts, and posts fro useStaticProps
export const getStaticProps = async () => {
  const posts = await getAllPosts();
  const books = await getAllBooks();

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
        <div className={classes.featured}>
          <Stack>
            <FeaturedBlogPost post={firstPost} />
            <Grid gridTemplateColumns={['1fr', '1fr', '1fr 130px']} gap={4}>
              <FeaturedPodcast />
              <Box alignSelf="end">
                <CarbonAd />
              </Box>
            </Grid>
          </Stack>
        </div>
        <Overline mt="8">More articles</Overline>
        <SimpleGrid minChildWidth="300px" spacing={8} mt={4}>
          {otherPosts.map((post) => {
            return <BlogPostItem key={post.slug} post={post} />;
          })}
        </SimpleGrid>
        <div className={classes.books}>
          {books.map((book, i) => {
            return (
              <div key={book.frontmatter.title}>
                <BookFeature book={book} />
                {i < books.length - 1 && <div className={classes.bookSpacer} />}
              </div>
            );
          })}
        </div>
      </Container>
    </Layout>
  );
};

export default IndexPage;
