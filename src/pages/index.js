import React from 'react';

import { Container, Grid, SimpleGrid, Stack } from '@chakra-ui/react';

import { orderBy } from 'lodash';
import isAfter from 'date-fns/isAfter';

import Image from 'next/image';

import {
  CarbonAd,
  BlogPostItem,
  BookFeature,
  FeaturedBlogPost,
  FeaturedPodcast,
  Layout,
  NewsletterForm,
  Seo,
} from '../components';

import { getAllPosts } from '../lib/blogPostLoader';

import * as classes from './Home.module.css';

// load books, podcasts, and posts fro useStaticProps
export const getStaticProps = async () => {
  const books = [];

  const posts = await getAllPosts();

  return {
    props: {
      books,
      podcasts,
      posts,
    },
  };
};

const IndexPage = ({ books, posts }) => {
  const [firstPost, ...otherPosts] = posts;
  return (
    <Layout>
      <Container maxW="7xl">
        <Seo title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <div className={classes.featured}>
          <Stack>
            <Grid gridTemplateColumns="1fr 130px" gap={4}>
              <FeaturedBlogPost post={firstPost} />
              <CarbonAd />
            </Grid>
            <FeaturedPodcast />
          </Stack>
        </div>
        <SimpleGrid minChildWidth="300px" spacing={8} mt={8}>
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
