import { Container, Heading, Stack } from '@chakra-ui/react';

import { Layout, NewsletterCTA, Seo } from '../../components';

const NewsletterPage = () => {
  return (
    <Layout>
      <Seo
        title="APIs You Won't Hate Newsletter"
        description="Get the latest in API design and development news delivered to your inbox.  News for API Developers, Software engineers, middleware developers, and software architects."
      />
      <Container>
        <Stack>
          <Heading as="h1">
            Sign up for the APIs You Won&apos;t Hate Newsletter
          </Heading>
          <NewsletterCTA />
        </Stack>
      </Container>
    </Layout>
  );
};

export default NewsletterPage;
