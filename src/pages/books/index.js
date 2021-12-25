import React from 'react';

import { Container, Heading, Stack } from '@chakra-ui/react';

import { BookFeature, Layout, Seo } from '../../components';
import { getAllBooks } from '../../lib/bookLoader';

// load books, podcasts, and posts fro useStaticProps
export const getStaticProps = async () => {
  const books = await getAllBooks();

  return {
    props: {
      books,
    },
  };
};

const BooksPage = ({ books }) => {
  return (
    <Layout>
      <Seo title="Books" keywords={['apis', 'api', 'rest', 'rpc', 'graphql']} />
      <Container>
        <Heading as="h1">Books for API Developers</Heading>
        <Stack spacing={8}>
          {books.map((book) => (
            <div key={book.title}>
              <BookFeature book={book} />
            </div>
          ))}
        </Stack>
      </Container>
    </Layout>
  );
};

export default BooksPage;
