import { Container, Grid, Heading, Stack, Text } from '@chakra-ui/react';

import { Layout, Seo } from '../components';

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <Container>
      <Stack>
        <Heading as="h1">404: Not Found</Heading>
        <Text>
          Damn, sorry. Either we haven&apos;t built it yet, or this page
          doesn&apos;t exist.
        </Text>
      </Stack>
    </Container>
  </Layout>
);

export default NotFoundPage;
